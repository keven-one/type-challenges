type PartialByKeys<T, K = keyof T> = Merge<
  Pick<Partial<T>, Extract<keyof T, K>>,
  Pick<T, Exclude<keyof T, K>>
>