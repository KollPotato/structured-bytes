import type { Type } from "../type"

export const u64: Type<bigint> = {
    size(_value) {
        return 8
    },
    read(dataView, offset) {
        return dataView.getBigUint64(offset, true)
    },
    write(dataView, value, offset) {
        dataView.setBigUint64(offset, value, true)
    },
}
