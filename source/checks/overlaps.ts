import { Interval } from "../types";

export function o(a: Interval, b: Interval): boolean {
    return a.start < b.start && a.stop > b.start && a.stop < b.stop;
}

export function oi(a: Interval, b: Interval): boolean {
    return o(b, a);
}

export const overlaps = o;
export const overlappedBy = oi;
