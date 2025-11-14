import { Interval, IntervalRelation } from "../../source/types"

export const RelationTestData: Record<IntervalRelation, { a: Interval, b: Interval }> = {
    P: { a: { start: 1, stop: 2 }, b: { start: 3, stop: 4 } },
    PI: { a: { start: 3, stop: 4 }, b: { start: 1, stop: 2 } },
    M: { a: { start: 1, stop: 2 }, b: { start: 2, stop: 3 } },
    MI: { a: { start: 2, stop: 3 }, b: { start: 1, stop: 2 } },
    O: { a: { start: 1, stop: 3 }, b: { start: 2, stop: 4 } },
    OI: { a: { start: 2, stop: 4 }, b: { start: 1, stop: 3 } },
    S: { a: { start: 1, stop: 2 }, b: { start: 1, stop: 3 } },
    SI: { a: { start: 1, stop: 3 }, b: { start: 1, stop: 2 } },
    D: { a: { start: 2, stop: 3 }, b: { start: 1, stop: 4 } },
    DI: { a: { start: 1, stop: 4 }, b: { start: 2, stop: 3 } },
    F: { a: { start: 1, stop: 3 }, b: { start: 2, stop: 3 } },
    FI: { a: { start: 2, stop: 3 }, b: { start: 1, stop: 3 } },
    EQ: { a: { start: 2, stop: 3 }, b: { start: 2, stop: 3 } },
}
