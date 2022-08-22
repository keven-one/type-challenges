type FlipArguments<T extends (...args: any) => unknown > = 
  T extends (...args: [...infer A]) => infer R 
    ? (...args: Reverse<A>) => R
    : never