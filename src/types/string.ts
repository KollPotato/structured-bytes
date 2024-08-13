import type { Type } from "../type"

export function string(lengthType: Type<number>): Type<string> {
    const encoder = new TextEncoder()
    const decoder = new TextDecoder()

    return {
        size(value) {
            return (
                lengthType.size(value.length) + encoder.encode(value).byteLength
            )
        },
        read(buffer, offset) {
            const length = lengthType.read(buffer, offset)

            const newOffset = offset + lengthType.size(length)

            return decoder.decode(
                buffer.subarray(newOffset, newOffset + length),
            )
        },
        write(buffer, value, offset) {
            const chars = encoder.encode(value)

            const newOffset = lengthType.write(buffer, chars.byteLength, offset)

            buffer.set(chars, newOffset)

            return newOffset + chars.byteLength
        },
    }
}
