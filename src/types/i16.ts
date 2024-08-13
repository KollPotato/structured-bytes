import type { Type } from "../type"

export const i16: Type<number> = {
    size(_value) {
        return 2
    },
    read(buffer, offset) {
        return buffer.readInt16LE(offset)
    },
    write(buffer, value, offset) {
        return buffer.writeInt16LE(value, offset)
    },
}
