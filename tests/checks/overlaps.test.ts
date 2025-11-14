import { describe, expect, it } from "vitest";
import { RelationTestData } from "../specs/relation-test-data";
import { IntervalRelation, IntervalRelations } from "../../source/types";
import { overlaps, overlappedBy } from '../../source/checks/overlaps';

describe('overlaps', () => {
    it.each(IntervalRelations)('handles %s', vector => {
        const testData = RelationTestData[vector];
        expect(overlaps(testData.a, testData.b)).toBe(vector === IntervalRelation.OVERLAPS);
    });
});

describe('overlappedBy', () => {
    it.each(IntervalRelations)('handles %s', vector => {
        const testData = RelationTestData[vector];
        expect(overlappedBy(testData.a, testData.b)).toBe(vector === IntervalRelation.OVERLAPPEDBY);
    });
});