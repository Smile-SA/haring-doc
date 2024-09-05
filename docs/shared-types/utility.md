# `IOmitRespectIndexSignature<T, K extends PropertyKey>`

Utility type that is equivalent to Typescript's `<Omit>` but respects index signatures, such as in a common use-case of string indexes where using `<Omit>` will aggressively merge some types and remove the correct type-detection on some fields.
