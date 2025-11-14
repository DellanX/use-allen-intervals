import { describe, expect, it } from "vitest";
import { RelationTestData } from "../specs/relation-test-data";
import { IntervalRelation, IntervalRelations } from "../../source/types";
import { procededBy, procedes } from '../../source/checks/procedes';

describe('procedes', () => {
    it.each(IntervalRelations)('handles %s', vector => {
        const testData = RelationTestData[vector];
        expect(procedes(testData.a, testData.b)).toBe(vector === IntervalRelation.PROCEDES);
    });
});

describe('procededBy', () => {
    it.each(IntervalRelations)('handles %s', vector => {
        const testData = RelationTestData[vector];
        expect(procededBy(testData.a, testData.b)).toBe(vector === IntervalRelation.PROCEDEDBY);
    });
});