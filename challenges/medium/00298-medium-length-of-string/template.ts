type LengthOfString<S extends string,P extends unknown[] = []> = S extends `${infer first}${infer Rest}` ? LengthOfString<Rest,[first,...P]> : P['length'];
