import type { Type } from "../type"

export const f32: Type<number> = {
    size(_value) {
        return 4
    },
    read(buffer, offset) {
        return buffer.readFloatLE(offset)
    },
    write(buffer, value, offset) {
        return buffer.writeFloatLE(value, offset)
    },
}
