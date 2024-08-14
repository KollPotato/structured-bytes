import type { Type } from "../type"

export const f64: Type<number> = {
    size(_value) {
        return 2
    },
    read(dataView, offset) {
        return dataView.getFloat64(offset)
    },
    write(dataView, value, offset) {
        dataView.setFloat64(value, offset, true)
    },
}
