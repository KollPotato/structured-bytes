import type { Type } from "../type"

export const i32: Type<number> = {
    size(_value) {
        return 4
    },
    read(buffer, offset) {
        return buffer.readInt32LE(offset)
    },
    write(buffer, value, offset) {
        return buffer.writeInt32LE(value, offset)
    },
}
