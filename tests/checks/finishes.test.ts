import { describe, expect, it } from "vitest";
import { RelationTestData } from "../specs/relation-test-data";
import { IntervalRelation, IntervalRelations } from "../../source/types";
import { finishes, finishedBy } from '../../source/checks/finishes';

describe('finishes', () => {
    it.each(IntervalRelations)('handles %s', vector => {
        const testData = RelationTestData[vector];
        expect(finishes(testData.a, testData.b)).toBe(vector === IntervalRelation.FINISHES);
    });
});

describe('finishedBy', () => {
    it.each(IntervalRelations)('handles %s', vector => {
        const testData = RelationTestData[vector];
        expect(finishedBy(testData.a, testData.b)).toBe(vector === IntervalRelation.FINISHEDBY);
    });
});