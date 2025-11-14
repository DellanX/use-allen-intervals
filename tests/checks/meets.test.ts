import { describe, expect, it } from "vitest";
import { RelationTestData } from "../specs/relation-test-data";
import { IntervalRelation, IntervalRelations } from "../../source/types";
import { meets, metBy } from '../../source/checks/meets';

describe('meets', () => {
    it.each(IntervalRelations)('handles %s', vector => {
        const testData = RelationTestData[vector];
        expect(meets(testData.a, testData.b)).toBe(vector === IntervalRelation.MEETS);
    });
});

describe('metBy', () => {
    it.each(IntervalRelations)('handles %s', vector => {
        const testData = RelationTestData[vector];
        expect(metBy(testData.a, testData.b)).toBe(vector === IntervalRelation.METBY);
    });
});