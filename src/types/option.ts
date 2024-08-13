import type { Type } from "../type"
import { u8 } from "../types/u8"
import { NONE_VALUE, SOME_VALUE } from "../constants"

const OPTION_TAG_TYPE = u8

export function option<T>(valueType: Type<T>): Type<T | undefined> {
    return {
        size(value) {
            if (value === undefined) {
                return 1
            }

            return 1 + valueType.size(value)
        },
        read(buffer, offset) {
            const tag = OPTION_TAG_TYPE.read(buffer, offset)

            if (tag === SOME_VALUE) {
                return valueType.read(buffer, OPTION_TAG_TYPE.size(tag))
            }

            return undefined
        },
        write(buffer, value, offset) {
            const tag = value === undefined ? NONE_VALUE : SOME_VALUE

            OPTION_TAG_TYPE.write(buffer, tag, 0)

            if (value === undefined) {
                return OPTION_TAG_TYPE.size(tag)
            }

            return valueType.write(
                buffer,
                value,
                offset + OPTION_TAG_TYPE.size(tag),
            )
        },
    }
}
