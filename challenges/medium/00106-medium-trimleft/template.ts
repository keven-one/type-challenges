type TrimChar =  '\n'|'\t'|' '
type TrimLeft<S extends string> = S extends `${TrimChar}${infer P}` ? TrimLeft<P> : S;
