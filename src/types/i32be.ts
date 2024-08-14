import type { Type } from "../type"

export const i32be: Type<number> = {
    size(_value) {
        return 4
    },
    read(dataView, offset) {
        return dataView.getInt32(offset)
    },
    write(dataView, value, offset) {
        return dataView.setInt32(offset, value)
    },
}
