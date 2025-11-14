import { Interval } from "../types";

export function f(a: Interval, b: Interval, tolerance: number = 0): boolean {
    return a.start < b.start && Math.abs(a.stop - b.stop) <= tolerance;
}

export function fi(a: Interval, b: Interval, tolerance: number = 0): boolean {
    return f(b, a, tolerance);
}

export const finishes = f;
export const finishedBy = fi;
