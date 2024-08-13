import type { Type } from "../type"

export const u16: Type<number> = {
    size(_value) {
        return 2
    },
    read(buffer, offset) {
        return buffer.readUInt16LE(offset)
    },
    write(buffer, value, offset) {
        return buffer.writeUInt16LE(value, offset)
    },
}
