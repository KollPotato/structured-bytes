import type { Type } from "../type"

export const u32: Type<number> = {
    size(_value) {
        return 4
    },
    read(dataView, offset) {
        return dataView.getUint32(offset, true)
    },
    write(dataView, value, offset) {
        dataView.setUint32(offset, value, true)
    },
}
