import type { Type } from "../type"

export const u16be: Type<number> = {
    size(_value) {
        return 2
    },
    read(buffer, offset) {
        return buffer.readUInt16BE(offset)
    },
    write(buffer, value, offset) {
        return buffer.writeUInt16BE(value, offset)
    },
}
