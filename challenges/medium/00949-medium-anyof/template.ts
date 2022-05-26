type FalseCondition = [] | Record<string, never> | '' | undefined | false | 0;
type AnyOf<T extends readonly any[]> = T extends [infer First,...infer Rest] 
? First extends FalseCondition
? AnyOf<Rest> 
: true
: false;

