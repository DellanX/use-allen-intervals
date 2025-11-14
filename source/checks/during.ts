import { Interval } from "../types";

export function d(a: Interval, b: Interval): boolean {
    return a.start > b.start && a.stop < b.stop;
}

export function di(a: Interval, b: Interval): boolean {
    return d(b, a);
}

export const during = d;
export const contains = di;
