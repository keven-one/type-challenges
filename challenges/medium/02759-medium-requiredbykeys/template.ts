type MyMap<T> = {
    [P in keyof T] : T[P]
  }
type RequiredByKeys<T, K = never> = [K] extends [never]
  ? Required<T>
  : MyMap<T & Required<Pick<T, K & keyof T>>>