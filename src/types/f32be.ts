import type { Type } from "../type"

export const f32be: Type<number> = {
    size(_value) {
        return 4
    },
    read(buffer, offset) {
        return buffer.readFloatBE(offset)
    },
    write(buffer, value, offset) {
        return buffer.writeFloatBE(value, offset)
    },
}
