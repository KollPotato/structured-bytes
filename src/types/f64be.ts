import type { Type } from "../type"

export const f64be: Type<number> = {
    size(_value) {
        return 2
    },
    read(buffer, offset) {
        return buffer.readDoubleBE(offset)
    },
    write(buffer, value, offset) {
        return buffer.writeDoubleBE(value, offset)
    },
}
