import type { Type } from "../type"

export const u32be: Type<number> = {
    size(_value) {
        return 4
    },
    read(buffer, offset) {
        return buffer.readUInt32BE(offset)
    },
    write(buffer, value, offset) {
        return buffer.writeUInt32BE(value, offset)
    },
}
