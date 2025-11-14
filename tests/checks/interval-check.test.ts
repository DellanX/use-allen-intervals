import { describe, expect, it } from "vitest";
import { IntervalRelations } from "../../source";
import { intervalCheck } from "../../source/checks/interval-check";
import { RelationTestData } from "../specs/relation-test-data";

describe('interval-check', () => {
    describe.each(IntervalRelations)('handles checking %s', vector => {
        it('passes exact condition', () => {
            const testData = RelationTestData[vector];
            expect(intervalCheck(testData.a, testData.b, vector)).toBeTruthy();
        });
        it.each(IntervalRelations.filter(r => r !== vector))('fails on fault insertion %s', subvector => {
            const caseDaa = RelationTestData[subvector];
            expect(intervalCheck(caseDaa.a, caseDaa.b, vector)).toBeFalsy();
        })
    });
});
