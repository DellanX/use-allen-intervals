import { getIntervalRelation } from "../get-interval-relation";
import { Interval } from "../types";
import { computed, MaybeRefOrGetter, toValue } from 'vue';

export function useGetIntervalRelation(
    a: MaybeRefOrGetter<Interval>,
    b: MaybeRefOrGetter<Interval>,
    tolerance: MaybeRefOrGetter<number> = 0,
) {
    return computed(() => getIntervalRelation(
        toValue(a),
        toValue(b),
        toValue(tolerance),
    ));
}