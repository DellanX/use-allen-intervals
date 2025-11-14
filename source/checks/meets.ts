import { Interval } from "../types";

export function m(a: Interval, b: Interval, tolerance: number = 0): boolean {
    return Math.abs(b.start - a.stop) <= tolerance;
}

export function mi(a: Interval, b: Interval, tolerance: number = 0): boolean {
    return m(b, a, tolerance);
}

export const meets = m;
export const metBy = mi;