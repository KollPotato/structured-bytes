import type { Type } from "../type"

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
