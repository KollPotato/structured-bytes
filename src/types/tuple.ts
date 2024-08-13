import type { Infer, Type } from "../type"

export type TupleType<T extends Type<unknown>[]> = {
    [K in keyof T]: Infer<T[K]>
}

export function tuple<T extends Type<unknown>[]>(
    ...fields: T
): Type<TupleType<T>> {
    return {
        size(values) {
            let size = 0

            for (let i = 0; i < values.length; i += 1) {
                size += fields[i].size(values[i])
            }

            return size
        },
        read(buffer, offset) {
            const result: unknown[] = []

            let newOffset = offset

            for (const type of fields) {
                const value = type.read(buffer, newOffset)

                result.push(value)

                newOffset += type.size(value)
            }

            return result as TupleType<T>
        },
        write(buffer, values, offset) {
            let newOffset = offset

            for (let i = 0; i < values.length; i += 1) {
                newOffset = fields[i].write(buffer, values[i], newOffset)
            }

            return offset
        },
    }
}
