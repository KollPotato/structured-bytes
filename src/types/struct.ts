import type { Infer, Type } from "../type"

export type StructType<T extends Record<string, Type<unknown>>> = {
    [K in keyof T]: Infer<T[K]>
}

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
        read(buffer, offset) {
            const result: Record<string, unknown> = {}

            let newOffset = offset

            for (const [field, fieldType] of Object.entries(fields)) {
                const value = fieldType.read(buffer, newOffset)
                newOffset += fieldType.size(value)

                result[field] = value
            }

            return result as StructType<T>
        },
        write(buffer, structure, offset) {
            const values = Object.values(structure)

            let newOffset = offset

            for (let i = 0; i < fieldTypes.length; i += 1) {
                newOffset = fieldTypes[i].write(buffer, values[i], newOffset)
            }

            return offset
        },
    }
}
