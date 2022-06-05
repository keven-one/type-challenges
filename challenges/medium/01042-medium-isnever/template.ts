type IsNever<T> = [T] extends [never] ? true : false;
type a = IsNever<never>