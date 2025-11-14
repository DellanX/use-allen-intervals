import { Interval } from "../types";

export function eq(a: Interval, b: Interval, tolerance: number = 0) {
    return Math.abs(a.start - b.start) <= tolerance && Math.abs(a.stop - b.stop) <= tolerance;
}

export const equalTo = eq;
