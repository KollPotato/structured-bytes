import type { Type } from "../type"

export const i32: Type<number> = {
    size(_value) {
        return 4
    },
    read(dataView, offset) {
        return dataView.getInt32(offset, true)
    },
    write(dataView, value, offset) {
        dataView.setInt32(offset, value, true)
    },
}
