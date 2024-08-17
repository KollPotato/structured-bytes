import type { Type } from "../type"

/**
 * @description unsigned 32-bit little-endian integer
 */
export const u32: Type<number> = {
    size(_value) {
        return 4
    },
    read(dataView, offset) {
        return dataView.getUint32(offset, true)
    },
    write(dataView, value, offset) {
        dataView.setUint32(offset, value, true)
    },
}
