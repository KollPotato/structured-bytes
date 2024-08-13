import type { Type } from "../type"

export const i8: Type<number> = {
    size(_value) {
        return 1
    },
    read(buffer, offset) {
        return buffer.readInt8(offset)
    },
    write(buffer, value, offset) {
        return buffer.writeInt8(value, offset)
    },
}
