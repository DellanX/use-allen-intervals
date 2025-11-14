import { Interval } from "../types";

export function lt(a: Interval, b: Interval): boolean {
    return a.stop < b.start;
}

export function gt(a: Interval, b: Interval): boolean {
    return lt(b, a);
}

export const p = lt;
export const pi = gt;

export const procedes = lt;
export const procededBy = gt;
