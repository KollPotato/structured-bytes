import type { Type } from "../type"

export const i16be: Type<number> = {
    size(_value) {
        return 2
    },
    read(dataView, offset) {
        return dataView.getInt16(offset)
    },
    write(dataView, value, offset) {
        return dataView.setInt16(offset, value)
    },
}
