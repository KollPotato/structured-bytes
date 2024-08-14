import type { Type } from "../type"

export const i64: Type<bigint> = {
    size(_value) {
        return 8
    },
    read(dataView, offset) {
        return dataView.getBigInt64(offset, true)
    },
    write(dataView, value, offset) {
        dataView.setBigInt64(offset, value, true)
    },
}
