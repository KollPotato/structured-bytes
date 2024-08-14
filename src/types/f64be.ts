import type { Type } from "../type"

export const f64be: Type<number> = {
    size(_value) {
        return 2
    },
    read(dataView, offset) {
        return dataView.getFloat64(offset)
    },
    write(dataView, value, offset) {
        dataView.setFloat64(offset, value)
    },
}
