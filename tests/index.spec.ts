import { ascii, bool, u32, u8, utf8, vector } from "../src"
import { describe, test, expect } from "bun:test"

describe("u32", () => {
    test("reading and writing u32 values", () => {
        const value = 1723581132

        const buffer = Buffer.alloc(u32.size(value))
        const dataView = new DataView(buffer.buffer) // hehe buffer.buffer

        u32.write(dataView, value, 0)

        expect(u32.read(dataView, 0)).toEqual(value)
    })
})

describe("string", () => {
    test("reading and writing ascii string", () => {
        const data = "hello, world!\n"

        const schema = ascii(u8)

        const buffer = Buffer.alloc(schema.size(data))
        const dataView = new DataView(buffer.buffer)

        schema.write(dataView, data, 0)

        expect(schema.read(dataView, 0)).toEqual(data)
    })

    test("reading and writing utf8 string", () => {
        const data = "привет, мир!\n"

        const schema = utf8(u8)

        const buffer = Buffer.alloc(schema.size(data))
        const dataView = new DataView(buffer.buffer)

        schema.write(dataView, data, 0)

        expect(schema.read(dataView, 0)).toEqual(data)
    })
})

describe("vector", () => {
    test("reading and writing array of numbers", () => {
        const data = [1, 2, 3, 6, 5, 4]
        const schema = vector(u8, u8)

        const buffer = Buffer.alloc(schema.size(data))
        const dataView = new DataView(buffer.buffer)

        schema.write(dataView, data, 0)

        const decodedData = schema.read(dataView, 0)

        expect(decodedData).toEqual(data)
    })
})

describe("bool", () => {
    test("reading and writing true value", () => {
        const data = true

        const buffer = Buffer.alloc(bool.size(data))
        const dataView = new DataView(buffer.buffer)

        bool.write(dataView, data, 0)

        const decodedData = bool.read(dataView, 0)

        expect(decodedData).toEqual(data)
    })

    test("reading and writing false value", () => {
        const data = false

        const buffer = Buffer.alloc(bool.size(data))
        const dataView = new DataView(buffer.buffer)

        bool.write(dataView, data, 0)

        const decodedData = bool.read(dataView, 0)

        expect(decodedData).toEqual(data)
    })
})
