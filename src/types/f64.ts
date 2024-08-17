import type { Type } from "../type"

/**
 * @description a number stored in double-precision floating-point little-endian format \
 * uses 8 bytes
 */
export const f64: Type<number> = {
    size(_value) {
        return 8
    },
    read(dataView, offset) {
        return dataView.getFloat64(offset)
    },
    write(dataView, value, offset) {
        dataView.setFloat64(offset, value, true)
    },
}
