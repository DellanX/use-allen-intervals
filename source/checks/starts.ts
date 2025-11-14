import { Interval } from "../types";

export function s(a: Interval, b: Interval, tolerance: number = 0): boolean {
    return Math.abs(a.start - b.start) <= tolerance && a.stop < b.stop;
}

export function si(a: Interval, b: Interval, tolerance: number = 0): boolean {
    return s(b, a, tolerance);
}

export const starts = s;
export const startedBy = si;
