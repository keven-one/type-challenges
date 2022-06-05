type KebabCase<S,IsFirst extends boolean = true> = 
S extends `${infer First}${infer Rest}` 
? DealStringLowercase<First,Rest,IsFirst> 
: S;

type DealStringLowercase<P extends string, Rest extends string,IsFirst extends boolean = true> = 
 P extends Lowercase<P> ?
 `${Lowercase<P>}${KebabCase<Rest,false>}`
:  IsFirst extends true ? `${Lowercase<P>}${KebabCase<Rest,false>}`
:`-${Lowercase<P>}${KebabCase<Rest,false>}`;






