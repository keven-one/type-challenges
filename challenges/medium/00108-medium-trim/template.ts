type TrimRight<S extends string> = S extends `${infer P}${TrimChar}` ? TrimRight<P> : S;

type Trim<S extends string> = TrimRight<TrimLeft<S>>