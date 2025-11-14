import { describe, expect, it } from "vitest";
import { IntervalRelations } from "../source/types";
import { RelationTestData } from "./specs/relation-test-data";
import { getIntervalRelation } from "../source/get-interval-relation";

describe('get-interval-relation', () => {
    it.each(IntervalRelations)('handles %s', vector => {
        const testData = RelationTestData[vector];
        expect(getIntervalRelation(testData.a, testData.b)).toBe(vector);
    });
});
