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
        read(dataView, offset) {
            const result: unknown[] = []

            let newOffset = offset

            for (const type of fields) {
                const value = type.read(dataView, newOffset)

                result.push(value)

                newOffset += type.size(value)
            }

            return result as TupleType<T>
        },
        write(dataView, values, offset) {
            let newOffset = offset

            for (let i = 0; i < values.length; i += 1) {
                const field = fields[i]
                const value = values[i]

                field.write(dataView, value, newOffset)

                newOffset += field.size(value)
            }

            return offset
        },
    }
}
