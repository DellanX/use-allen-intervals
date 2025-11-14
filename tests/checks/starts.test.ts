import { describe, expect, it } from "vitest";
import { RelationTestData } from "../specs/relation-test-data";
import { IntervalRelation, IntervalRelations } from "../../source/types";
import { starts, startedBy } from '../../source/checks/starts';

describe('starts', () => {
    it.each(IntervalRelations)('handles %s', vector => {
        const testData = RelationTestData[vector];
        expect(starts(testData.a, testData.b)).toBe(vector === IntervalRelation.STARTS);
    });
});

describe('startedBy', () => {
    it.each(IntervalRelations)('handles %s', vector => {
        const testData = RelationTestData[vector];
        expect(startedBy(testData.a, testData.b)).toBe(vector === IntervalRelation.STARTEDBY);
    });
});