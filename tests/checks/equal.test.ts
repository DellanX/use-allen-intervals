import { describe, expect, it } from "vitest";
import { RelationTestData } from "../specs/relation-test-data";
import { IntervalRelation, IntervalRelations } from "../../source/types";
import { equalTo } from '../../source/checks/equal';

describe('equalTo', () => {
    it.each(IntervalRelations)('handles %s', vector => {
        const testData = RelationTestData[vector];
        expect(equalTo(testData.a, testData.b)).toBe(vector === IntervalRelation.EQUALS);
    });
});
