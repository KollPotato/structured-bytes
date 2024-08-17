import type { Type } from "../type"

/**
 * @description signed 16-bit big-endian integer
 */
export const i16be: Type<number> = {
    size(_value) {
        return 2
    },
    read(dataView, offset) {
        return dataView.getInt16(offset)
    },
    write(dataView, value, offset) {
        return dataView.setInt16(offset, value)
    },
}
