import { deepEquals } from "bun" // to test that the values are the same 
import { type Infer, struct, string, u32, u8, u64 } from "../src"

const playerStruct = struct({
    id: u32, // id stored in a 32-bit integer
    username: string(u8), // length is stored in 8-bit unsigned integer so it can be up to 255 characters
    createdAt: u64 // unix timestamp in miliseconds 
})

type Player = Infer<typeof playerStruct> // infer the type from the defined structure

const player: Player = {
    id: 42,
    username: "Bob",
    createdAt: BigInt(Date.now())
}

const bufferSize = playerStruct.size(player) // get the exact allocation size of the player
const buffer = Buffer.alloc(bufferSize)

playerStruct.write(buffer, player, 0) // write the bytes to the buffer at 0 offset into the given buffer

console.assert(deepEquals(player, playerStruct.read(buffer, 0))) // assert that the encoded player is the same as the decoded player
