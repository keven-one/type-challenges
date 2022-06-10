type NumberSymbol = '+' | '-'
type PercentageParser<A extends string,R extends [string,string,string]=['','','']> = A extends `${infer P}${infer K}`
? P extends NumberSymbol
? PercentageParser<K,[P,R[1],R[2]]>:P extends `${number}`
? PercentageParser<K,[R[0],`${R[1]}${P}`,R[2]]> : P extends '%'
? PercentageParser<K,[R[0],R[1],'%']>
: R
:R

