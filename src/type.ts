export type Type<T> = {
    size(value: T): number
    read(dataView: DataView, offset: number): T
    write(dataView: DataView, value: T, offset: number): void
}

export type Infer<T> = T extends Type<infer R> ? R : never
