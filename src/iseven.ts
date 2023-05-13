export type PotentiallyEven =
  | string
  | number
  | (() => number)
  | (() => Promise<number>);

export async function isEven(n: PotentiallyEven): Promise<boolean> {
  if (typeof n === "string") {
    return await isEven(parseInt(n, 10));
  }

  if (typeof n === "function") {
    return await isEven(await n());
  }

  return !isEven(n);
}
