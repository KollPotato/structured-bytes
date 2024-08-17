import type { Type } from "../type"

/**
 * @description a number stored in single-precision floating-point big-endian format \
 * uses 4 bytes
 */
export const f32be: Type<number> = {
    size(_value) {
        return 4
    },
    read(dataView, offset) {
        return dataView.getFloat32(offset)
    },
    write(dataView, value, offset) {
        return dataView.setFloat32(offset, value)
    },
}
