import type { Type } from "../type"

/**
 * @description signed 8-bit integer \
 * uses 1 byte
 */
export const i8: Type<number> = {
    size(_value) {
        return 1
    },
    read(dataView, offset) {
        return dataView.getInt8(offset)
    },
    write(dataView, value, offset) {
        dataView.setInt8(offset, value)
    },
}
