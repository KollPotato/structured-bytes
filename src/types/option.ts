import type { Type } from "../type"
import { u8 } from "../types/u8"
import { NONE_VALUE, SOME_VALUE } from "../constants"

const OPTION_TAG_TYPE = u8

/**
 * @param valueType the value which can be stored either as `T` or `undefined`
 * @returns a new type which can be undefined
 */
export function option<T>(valueType: Type<T>): Type<T | undefined> {
    return {
        size(value) {
            if (value === undefined) {
                return 1
            }

            return 1 + valueType.size(value)
        },
        read(dataView, offset) {
            const tag = OPTION_TAG_TYPE.read(dataView, offset)

            if (tag === SOME_VALUE) {
                return valueType.read(dataView, OPTION_TAG_TYPE.size(tag))
            }

            return undefined
        },
        write(dataView, value, offset) {
            const tag = value === undefined ? NONE_VALUE : SOME_VALUE

            OPTION_TAG_TYPE.write(dataView, tag, 0)

            if (value === undefined) {
                return OPTION_TAG_TYPE.size(tag)
            }

            return valueType.write(
                dataView,
                value,
                offset + OPTION_TAG_TYPE.size(tag),
            )
        },
    }
}
