import type { Type } from "../type"

export const u8: Type<number> = {
    size(_value) {
        return 1
    },
    read(buffer, offset) {
        return buffer.readUInt8(offset)
    },
    write(buffer, value, offset) {
        return buffer.writeUInt8(value, offset)
    },
}
