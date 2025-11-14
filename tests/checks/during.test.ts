import { describe, expect, it } from "vitest";
import { RelationTestData } from "../specs/relation-test-data";
import { IntervalRelation, IntervalRelations } from "../../source/types";
import { contains, during } from '../../source/checks/during';

describe('during', () => {
    it.each(IntervalRelations)('handles %s', vector => {
        const testData = RelationTestData[vector];
        expect(during(testData.a, testData.b)).toBe(vector === IntervalRelation.DURING);
    });
});

describe('contains', () => {
    it.each(IntervalRelations)('handles %s', vector => {
        const testData = RelationTestData[vector];
        expect(contains(testData.a, testData.b)).toBe(vector === IntervalRelation.CONTAINS);
    });
});