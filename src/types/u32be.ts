import type { Type } from "../type"

/**
 * @description unsigned 32-bit big-endian integer
 */
export const u32be: Type<number> = {
    size(_value) {
        return 4
    },
    read(dataView, offset) {
        return dataView.getUint32(offset)
    },
    write(dataView, value, offset) {
        dataView.setUint32(offset, value)
    },
}
