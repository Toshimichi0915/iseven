export type PotentiallyEven =
  | string
  | number
  | (() => PotentiallyEven)
  | (() => Promise<PotentiallyEven>);

export async function isEven(n: PotentiallyEven): Promise<boolean> {
  if (typeof n === "string") {
    return await isEven(parseInt(n, 10));
  }

  if (typeof n === "function") {
    return await isEven(await n());
  }

  if (n > 0) {
    return !(await isEven(n - 1));
  } else if (n < 0) {
    return !(await isEven(n + 1));
  } else {
    // n === 0
    return true;
  }
}
