import type { Type } from "../type"

/**
 * @description unsigned 8-bit integer
 */
export const u8: Type<number> = {
    size(_value) {
        return 1
    },
    read(dataView, offset) {
        return dataView.getUint8(offset)
    },
    write(dataView, value, offset) {
        dataView.setUint8(offset, value)
    },
}
