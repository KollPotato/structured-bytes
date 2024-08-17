import type { Type } from "../type"


export const i16: Type<number> = {
    size(_value) {
        return 2
    },
    read(dataView, offset) {
        return dataView.getInt16(offset, true)
    },
    write(dataView, value, offset) {
        dataView.setInt16(offset, value, true)
    },
}
