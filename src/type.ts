export type Type<T> = {
    size(value: T): number
    read(buffer: Buffer, offset: number): T
    write(buffer: Buffer, value: T, offset: number): number
}

export type Infer<T> = T extends Type<infer R> ? R : never
