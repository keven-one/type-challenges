type StartsWith<T extends string, U extends string> = U extends '' ? true 
: T extends `${U}${infer R}`? true: false;
