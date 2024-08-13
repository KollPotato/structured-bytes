import type { Type } from "../type"

export const u32: Type<number> = {
    size(_value) {
        return 4
    },
    read(buffer, offset) {
        return buffer.readUInt32LE(offset)
    },
    write(buffer, value, offset) {
        return buffer.writeUInt32LE(value, offset)
    },
}
