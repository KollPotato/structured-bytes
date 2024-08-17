import type { Type } from "../type"

/**
 * @description unsigned 64-bit little-endian integer
 */
export const u64: Type<bigint> = {
    size(_value) {
        return 8
    },
    read(dataView, offset) {
        return dataView.getBigUint64(offset, true)
    },
    write(dataView, value, offset) {
        dataView.setBigUint64(offset, value, true)
    },
}
