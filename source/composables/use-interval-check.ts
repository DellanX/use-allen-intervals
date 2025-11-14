import { intervalCheck } from "../checks/interval-check";
import { Interval, IntervalRelation, IntervalRelationCode } from "../types";
import { MaybeRefOrGetter, toValue } from 'vue';

export function useIntervalCheck(
    a: MaybeRefOrGetter<Interval>,
    b: MaybeRefOrGetter<Interval>,
    check: MaybeRefOrGetter<IntervalRelationCode>,
    tolerance: MaybeRefOrGetter<number>,
) {
    return intervalCheck(
        toValue(a),
        toValue(b),
        toValue(check),
        toValue(tolerance),
    )
}
