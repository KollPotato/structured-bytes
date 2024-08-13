import type { Type } from "../type"
import { u8 } from "./u8"

export const bool: Type<boolean> = {
    size(_value) {
        return 1
    },
    read(buffer, offset) {
        return u8.read(buffer, offset) === 1
    },
    write(buffer, value, offset) {
        return u8.write(buffer, value ? 1 : 0, offset)
    },
}
