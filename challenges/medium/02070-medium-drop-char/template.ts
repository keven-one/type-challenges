type DropChar<S extends string, C extends string,F extends string=''> =  S extends `${infer P}${infer Rest}`?
P extends C ? 
`${F}${DropChar<Rest,C,''> }`: `${F}${DropChar<Rest,C,P>}` : `${F}`;

