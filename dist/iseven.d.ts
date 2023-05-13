export type PotentiallyEven = string | number | (() => number) | (() => Promise<number>);
export declare function isEven(n: PotentiallyEven): Promise<boolean>;
