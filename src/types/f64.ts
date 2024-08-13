import type { Type } from "../type"

export const f64: Type<number> = {
    size(_value) {
        return 2
    },
    read(buffer, offset) {
        return buffer.readDoubleLE(offset)
    },
    write(buffer, value, offset) {
        return buffer.writeDoubleLE(value, offset)
    },
}
