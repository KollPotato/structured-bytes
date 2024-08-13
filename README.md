# Structured Bytes

Simple library to serialize and deserialize structured binary data.

Description
- probably slower than JSON, but data is already being parsed in a known structure unlike JSON that needs a validation library like `valibot` or `zod` which can decrease the performance
- much more memory efficient than JSON and other human-readable data formats 
- new types can easily be created by the end user
- does not support browsers yet, will probably be implemented with `DataView` instead of `Buffer`

Plans
- support browsers
- make strings better, possibly by avoiding `TextEncoder` and `TextDecoder`
- write more tests
