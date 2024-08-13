import type { Type } from "../type"

export const i32be: Type<number> = {
    size(_value) {
        return 4
    },
    read(buffer, offset) {
        return buffer.readInt32BE(offset)
    },
    write(buffer, value, offset) {
        return buffer.writeInt32BE(value, offset)
    },
}
