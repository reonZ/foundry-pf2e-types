import { DamageType } from "../../../system/damage/types.ts";
import { StrictArrayField } from "../../../system/schema-data-fields.ts";
import { StringField } from "../../../../../foundry/common/data/fields.ts";
import { AELikeChangeMode } from "../ae-like.ts";
import { ModelPropsFromRESchema, RuleElementSchema } from "../data.ts";
import { ResolvableValueField, RuleElementPF2e } from "../index.ts";
/** Alter certain aspects of individual components (modifiers and dice) of a damage roll. */
declare class DamageAlterationRuleElement extends RuleElementPF2e<DamageAlterationSchema> {
    static defineSchema(): DamageAlterationSchema;
    resolveValue(value: unknown, defaultValue: null, options: {
        resolvables: Record<string, unknown>;
    }): DamageAlterationValue | null;
    beforePrepareData(): void;
}
interface DamageAlterationRuleElement extends RuleElementPF2e<DamageAlterationSchema>, ModelPropsFromRESchema<DamageAlterationSchema> {
}
type DamageAlterationProperty = "dice-faces" | "dice-number" | "damage-type" | "tags";
type DamageAlterationSchema = RuleElementSchema & {
    selectors: StrictArrayField<StringField<string, string, true, false, false>>;
    mode: StringField<AELikeChangeMode, AELikeChangeMode, true, false, false>;
    property: StringField<DamageAlterationProperty, DamageAlterationProperty, true, false, false>;
    value: ResolvableValueField<true, true, true>;
    /** An optional relabeling of the altered unit of damage */
    relabel: StringField<string, string, false, true, true>;
};
type DamageAlterationValue = DamageType | number | string[];
export { DamageAlterationRuleElement };
export type { DamageAlterationProperty, DamageAlterationValue };
