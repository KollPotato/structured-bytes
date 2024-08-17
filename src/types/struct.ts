import type { Infer, Type } from "../type"

export type StructType<T extends Record<string, Type<unknown>>> = {
    [K in keyof T]: Infer<T[K]>
}

/**
 * @description acts pretty much the same as a tuple - only values are stored and are always in the same sequence
 * @param fields the structure of the data
 */
export function struct<T extends Record<string, Type<unknown>>>(
    fields: T,
): Type<StructType<T>> {
    const fieldTypes = Object.values(fields)

    return {
        size(structure) {
            const values = Object.values(structure)

            let size = 0

            for (let i = 0; i < fieldTypes.length; i += 1) {
                size += fieldTypes[i].size(values[i])
            }

            return size
        },
        read(dataView, offset) {
            const result: Record<string, unknown> = {}

            let newOffset = offset

            for (const [field, fieldType] of Object.entries(fields)) {
                const value = fieldType.read(dataView, newOffset)
                newOffset += fieldType.size(value)

                result[field] = value
            }

            return result as StructType<T>
        },
        write(dataView, structure, offset) {
            const values = Object.values(structure)

            let newOffset = offset

            for (let i = 0; i < fieldTypes.length; i += 1) {
                const value = values[i]
                const field = fieldTypes[i]

                field.write(dataView, value, newOffset)

                newOffset += field.size(value)
            }

            return offset
        },
    }
}
