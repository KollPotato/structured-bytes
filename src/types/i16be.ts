import type { Type } from "../type"

export const i16be: Type<number> = {
    size(_value) {
        return 2
    },
    read(buffer, offset) {
        return buffer.readInt16BE(offset)
    },
    write(buffer, value, offset) {
        return buffer.writeInt16BE(value, offset)
    },
}
