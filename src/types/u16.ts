import type { Type } from "../type"

/**
 * @description unsigned 16-bit little-endian integer
 */
export const u16: Type<number> = {
    size(_value) {
        return 2
    },
    read(dataView, offset) {
        return dataView.getUint16(offset, true)
    },
    write(dataView, value, offset) {
        dataView.setUint16(offset, value, true)
    },
}
