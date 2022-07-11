type OmitByType<T, U> = {  [k in keyof T as T[k] extends U ? never : k ]: T[k]
}