import { describe, it, expect, beforeEach, vi } from "vitest";
import { ref } from "vue";
import * as relationModule from "../../source/get-interval-relation";
import { useGetIntervalRelation } from "../../source/composables/use-get-interval-relation";

describe("useGetIntervalRelation", () => {
    beforeEach(() => {
        vi.restoreAllMocks();
    });

    it("calls getIntervalRelation with explicit values and returns its result", () => {
        const spy = vi
            .spyOn(relationModule, "getIntervalRelation")
            .mockReturnValue("mocked-relation" as any);

        const a = { start: 0, stop: 1 };
        const b = { start: 1, stop: 2 };
        const tolerance = 0.1;

        const result = useGetIntervalRelation(a, b, tolerance);
        const val = result.value; // evaluate the computed so the spy is invoked

        expect(spy).toHaveBeenCalledWith(a, b, tolerance);
        expect(val).toBe("mocked-relation");
    });

    it("unwraps refs and getters and forwards unwrapped values to getIntervalRelation", () => {
        const spy = vi
            .spyOn(relationModule, "getIntervalRelation")
            .mockReturnValue("REL" as any);

        const a = { start: 10, stop: 20 };
        const b = { start: 15, stop: 25 };

        const aRef = ref(a);
        const bGetter = () => b;
        const toleranceRef = ref(0.5);

        const result = useGetIntervalRelation(aRef, bGetter, toleranceRef);
        const val = result.value; // evaluate the computed so the spy is invoked

        expect(spy).toHaveBeenCalledWith(a, b, 0.5);
        expect(val).toBe("REL");
    });

    it("uses default tolerance when none is provided", () => {
        const spy = vi
            .spyOn(relationModule, "getIntervalRelation")
            .mockReturnValue("DEF" as any);

        const a = { start: 1, stop: 2 };
        const b = { start: 2, stop: 3 };

        const result = useGetIntervalRelation(a, b);
        const val = result.value; // force computed

        expect(spy).toHaveBeenCalledWith(a, b, 0);
        expect(val).toBe("DEF");
    });
});
