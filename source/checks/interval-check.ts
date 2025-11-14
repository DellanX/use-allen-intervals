import { Interval, IntervalRelationCode } from "../types";
import { d, di } from "./during";
import { eq } from "./equal";
import { f, fi } from "./finishes";
import { m, mi } from "./meets";
import { o, oi } from "./overlaps";
import { p, pi } from "./procedes";
import { s, si } from "./starts";

export function intervalCheck(
    a: Interval,
    b: Interval,
    check: IntervalRelationCode,
    tolerance: number = 0,
): boolean {
    switch (check) {
        case "P": return p(a, b);
        case "PI": return pi(a, b);
        case "M": return m(a, b, tolerance);
        case "MI": return mi(a, b, tolerance);
        case "O": return o(a, b);
        case "OI": return oi(a, b);
        case "S": return s(a, b, tolerance);
        case "SI": return si(a, b, tolerance);
        case "D": return d(a, b);
        case "DI": return di(a, b);
        case "F": return f(a, b, tolerance);
        case "FI": return fi(a, b, tolerance);
        case "EQ": return eq(a, b, tolerance);
    }
}