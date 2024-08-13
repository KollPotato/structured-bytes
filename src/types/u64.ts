import type { Type } from "../type"

export const u64: Type<bigint> = {
    size(_value) {
        return 8
    },
    read(buffer, offset) {
        return buffer.readBigInt64LE(offset)
    },
    write(buffer, value, offset) {
        return buffer.writeBigInt64LE(value, offset)
    },
}
