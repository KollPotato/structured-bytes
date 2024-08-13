import { bool, u32, u8, vector } from "../src"
import { describe, test, expect } from "bun:test"

describe("u32", () => {
    test("reading and writing u32 values", () => {
        const value = 1723581132

        const buffer = Buffer.alloc(u32.size(value))

        u32.write(buffer, value, 0)

        expect(value).toEqual(u32.read(buffer, 0))
    })
})

/*

0b1001101011001001101111110010100
0b11001000101001101011001001101111110010100
*/

describe("vector", () => {
    test("reading and writing array of numbers", () => {
        const data = [1, 2, 3, 6, 5, 4]
        const schema = vector(u8, u8)

        const buffer = Buffer.alloc(schema.size(data))
        schema.write(buffer, data, 0)

        const decodedData = schema.read(buffer, 0)

        expect(data).toEqual(decodedData)
    })
})

describe("bool", () => {
    test("reading and writing true value", () => {
        const data = true

        const buffer = Buffer.alloc(bool.size(data))
        bool.write(buffer, data, 0)

        const decodedData = bool.read(buffer, 0)

        expect(decodedData).toEqual(data)
    })

    test("reading and writing false value", () => {
        const data = false

        const buffer = Buffer.alloc(bool.size(data))
        bool.write(buffer, data, 0)

        const decodedData = bool.read(buffer, 0)

        expect(decodedData).toEqual(data)
    })
})
