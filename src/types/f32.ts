import type { Type } from "../type"

/**
 * @description a number stored in single-precision floating-point little-endian format \
 * uses 4 bytes
 */
export const f32: Type<number> = {
    size(_value) {
        return 4
    },
    read(dataView, offset) {
        return dataView.getFloat32(offset, true)
    },
    write(dataView, value, offset) {
        dataView.setFloat32(offset, value, true)
    },
}
