export enum IntervalRelation {
    PROCEDES = "P",
    PROCEDEDBY = "PI",
    MEETS = "M",
    METBY = "MI",
    OVERLAPS = "O",
    OVERLAPPEDBY = "OI",
    STARTS = "S",
    STARTEDBY = "SI",
    DURING = "D",
    CONTAINS = "DI",
    FINISHES = "F",
    FINISHEDBY = "FI",
    EQUALS = "EQ",
};

export type IntervalRelationCode = `${IntervalRelation}`;
export const IntervalRelations = Object.values(IntervalRelation);