import type { Type } from "../type"

export function vector<T>(
    valueType: Type<T>,
    lengthType: Type<number>,
): Type<T[]> {
    return {
        size(values) {
            let size = 0

            for (const value of values) {
                size += valueType.size(value)
            }

            return lengthType.size(values.length) + size
        },
        read(buffer, offset) {
            const length = lengthType.read(buffer, offset)

            let newOffset = offset + lengthType.size(length)

            const result: T[] = []

            for (let i = 0; i < length; i += 1) {
                const value = valueType.read(buffer, newOffset)

                newOffset += valueType.size(value)

                result.push(value)
            }

            return result
        },
        write(buffer, value, offset) {
            let newOffset = lengthType.write(buffer, value.length, offset)

            for (const element of value) {
                newOffset = valueType.write(buffer, element, newOffset)
            }

            return offset
        },
    }
}
