import type { Type } from "../type"

export const u32be: Type<number> = {
    size(_value) {
        return 4
    },
    read(dataView, offset) {
        return dataView.getUint32(offset)
    },
    write(dataView, value, offset) {
        dataView.setUint32(offset, value)
    },
}
