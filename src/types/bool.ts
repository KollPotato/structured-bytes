import type { Type } from "../type"
import { u8 } from "./u8"

/**
 * @description boolean value which represents either `true` or `false` \
 * it is stored as an unsigned 8-bit integer \
 * uses 1 byte
 */
export const bool: Type<boolean> = {
    size(_value) {
        return 1
    },
    read(dataView, offset) {
        return u8.read(dataView, offset) === 1
    },
    write(dataView, value, offset) {
        return u8.write(dataView, value ? 1 : 0, offset)
    },
}
