import type { Type } from "../type"

export const u64be: Type<bigint> = {
    size(_value) {
        return 8
    },
    read(buffer, offset) {
        return buffer.readBigInt64BE(offset)
    },
    write(buffer, value, offset) {
        return buffer.writeBigInt64BE(value, offset)
    },
}
