import { Interval, IntervalRelation } from "./types";

export function getIntervalRelation(a: Interval, b: Interval, tolerance: number = 0): IntervalRelation {
    if (Math.abs(a.start - b.start) <= tolerance) {
        // a start ~= b start
        if (Math.abs(a.stop - b.stop) <= tolerance) {
            return IntervalRelation.EQUALS;
        } else if (a.stop > b.stop) {
            return IntervalRelation.STARTEDBY;
        } else {
            return IntervalRelation.STARTS;
        }
    } else if (a.start > b.start) {
        // A starts after B starts
        if (Math.abs(a.start - b.stop) <= tolerance) {
            return IntervalRelation.METBY;
        } else if (a.start > b.stop) {
            return IntervalRelation.PROCEDEDBY;
        } else {
            //A starts before B stops
            if (Math.abs(a.stop - b.stop) <= tolerance) {
                return IntervalRelation.FINISHEDBY;
            } else if (a.stop > b.stop) {
                return IntervalRelation.OVERLAPPEDBY;
            } else {
                return IntervalRelation.DURING;
            }
        }
    } else {
        if (Math.abs(a.stop - b.start) <= tolerance) {
            return IntervalRelation.MEETS;
        } else if (a.stop < b.start) {
            return IntervalRelation.PROCEDES;
        } else {
            // A starts before B stops
            if (Math.abs(a.stop - b.stop) <= tolerance) {
                return IntervalRelation.FINISHES;
            } else if (a.stop > b.stop) {
                return IntervalRelation.CONTAINS;
            } else {
                return IntervalRelation.OVERLAPS;
            }
        }
    }
}