type TupleToNestedObject<T, U> = T extends [infer P,...infer K] 
? {[key in P as P extends PropertyKey ? P : never] : TupleToNestedObject<K,U>}: U

