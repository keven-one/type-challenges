type Diff<O, O1> = Merge<GetDiff<O,O1>,GetDiff<O1,O>>

type GetDiff<O,O1> = {[P in Exclude<keyof O,keyof O1>]:P extends keyof O1 ? never : O[P]};
