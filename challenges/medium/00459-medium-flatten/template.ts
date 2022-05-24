// type Flatten<T> = {[P in keyof T]:T[P] extends unknown[] ? Flatten<T[P]> : T[P]}
type Flatten<T extends unknown[]> = T extends [infer R, ...infer Rest] ? R extends unknown[] ? [...Flatten<R>,...Flatten<Rest>] : [R,...Flatten<Rest>] : []

