type IsUnion<T,S = T> = T extends S ? [S] extends [T]? false:true:false;

type IsUnion1<T,S = T> =T extends S ? [S] extends [T]? [S]:[S]:[S];
