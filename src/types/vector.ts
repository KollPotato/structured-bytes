import type { Type } from "../type"

/**
 * a sequence of values prefixed by its length
 * @param valueType the value which will be stored in a sequence
 * @param lengthType the length type which will be used to store the sequence
 */
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
        read(dataView, offset) {
            const length = lengthType.read(dataView, offset)

            let newOffset = offset + lengthType.size(length)

            const result: T[] = []

            for (let i = 0; i < length; i += 1) {
                const value = valueType.read(dataView, newOffset)

                newOffset += valueType.size(value)

                result.push(value)
            }

            return result
        },
        write(dataView, value, offset) {
            const length = value.length

            let newOffset = offset

            lengthType.write(dataView, length, offset)
            newOffset += lengthType.size(length)

            for (const element of value) {
                valueType.write(dataView, element, newOffset)
                newOffset += valueType.size(element)
            }

            return offset
        },
    }
}
