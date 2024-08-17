export type Type<T> = {
    /**
     * @returns the size of the given `value` in bytes
     */
    size(value: T): number

    /**
     * @param dataView the source to read
     * @param offset the offset at which the value will be read
     */
    read(dataView: DataView, offset: number): T

    /**
     * @param dataView the source to write
     * @param value value which will be written in the `dataView`
     * @param offset the offset at which the value will be written
     */
    write(dataView: DataView, value: T, offset: number): void
}

export type Infer<T> = T extends Type<infer R> ? R : never
