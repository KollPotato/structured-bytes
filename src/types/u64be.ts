import type { Type } from "../type"

export const u64be: Type<bigint> = {
    size(_value) {
        return 8
    },
    read(dataView, offset) {
        return dataView.getBigUint64(offset)
    },
    write(dataView, value, offset) {
        return dataView.setBigUint64(offset, value)
    },
}
