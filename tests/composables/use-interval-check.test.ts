import { describe, it, expect, beforeEach, vi } from "vitest";
import { ref } from "vue";
import * as checks from "../../source/checks/interval-check";
import { useIntervalCheck } from "../../source/composables/use-interval-check";
import { IntervalRelationCode } from "../../source";

describe("useIntervalCheck", () => {
    beforeEach(() => {
        vi.restoreAllMocks();
    });

    it("calls intervalCheck with explicit values and returns its result", () => {
        const spy = vi
            .spyOn(checks, "intervalCheck")
            .mockReturnValue("mocked-result" as any);

        const a = { start: 0, stop: 1 };
        const b = { start: 1, stop: 2 };
        const check = "P";
        const tolerance = 0.1;

        const result = useIntervalCheck(a, b, check, tolerance);

        expect(spy).toHaveBeenCalledWith(a, b, check, tolerance);
        expect(result).toBe("mocked-result");
    });

    it("unwraps refs and getters and forwards unwrapped values to intervalCheck", () => {
        const spy = vi.spyOn(checks, "intervalCheck").mockReturnValue(true as any);

        const a = { start: 10, stop: 20 };
        const b = { start: 15, stop: 25 };

        const aRef = ref(a);
        const bGetter = () => b;
        const checkRef = ref<IntervalRelationCode>("O");
        const toleranceGetter = () => 0.5;

        const result = useIntervalCheck(aRef, bGetter, checkRef, toleranceGetter);

        expect(spy).toHaveBeenCalledWith(a, b, "O", 0.5);
        expect(result).toBe(true);
    });
});