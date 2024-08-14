import type { Type } from "../type"

export function ascii(lengthType: Type<number>): Type<string> {
    return {
        size(value) {
            return lengthType.size(value.length) + value.length
        },
        read(dataView, offset) {
            const length = lengthType.read(dataView, offset)

            let newOffset = offset + lengthType.size(length)

            let result = ""

            for (let i = 0; i < length; i += 1) {
                result += String.fromCodePoint(dataView.getUint8(newOffset))
                newOffset += 1
            }

            return result
        },
        write(dataView, value, offset) {
            const length = value.length

            lengthType.write(dataView, length, offset)

            let newOffset = offset + lengthType.size(length)

            for (let i = 0; i < length; i += 1) {
                dataView.setUint8(newOffset, value.charCodeAt(i))

                newOffset += 1
            }
        },
    }
}

export function utf8(lengthType: Type<number>): Type<string> {
    const textEncoder = new TextEncoder()
    const textDecoder = new TextDecoder()

    return {
        size(value) {
            return (
                lengthType.size(value.length) + textEncoder.encode(value).length
            )
        },
        read(dataView, offset) {
            const length = lengthType.read(dataView, offset)

            const newOffset = offset + lengthType.size(length)

            return textDecoder.decode(
                dataView.buffer.slice(newOffset, newOffset + length),
            )
        },
        write(dataView, value, offset) {
            const bytes = textEncoder.encode(value)

            lengthType.write(dataView, bytes.length, offset)

            let newOffset = offset + lengthType.size(value.length)

            for (const byte of bytes) {
                dataView.setUint8(newOffset, byte)

                newOffset += 1
            }
        },
    }
}
