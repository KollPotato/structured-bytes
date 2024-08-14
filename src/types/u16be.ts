import type { Type } from "../type"

export const u16be: Type<number> = {
    size(_value) {
        return 2
    },
    read(dataView, offset) {
        return dataView.getUint16(offset)
    },
    write(dataView, value, offset) {
        dataView.setUint16(offset, value)
    },
}
