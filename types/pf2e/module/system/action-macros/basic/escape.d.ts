import { ActorPF2e } from "../../../actor/index.ts";
import { ActionCheckPreview, SingleCheckAction, SingleCheckActionVariant, SingleCheckActionVariantData } from "../../../actor/actions/index.ts";
import { ItemPF2e } from "../../../item/index.ts";
import { CheckContextData, CheckContextOptions, CheckMacroContext } from "../types.ts";
import { SkillActionOptions } from "../index.ts";

declare function escape(options: SkillActionOptions): void;
declare class EscapeActionVariant extends SingleCheckActionVariant {
    #private;
    get statistic(): string;
    protected checkContext<ItemType extends ItemPF2e<ActorPF2e>>(opts: CheckContextOptions<ItemType>, data: CheckContextData<ItemType>): CheckMacroContext<ItemType> | undefined;
    protected toActionCheckPreview(options: {
        actor?: ActorPF2e;
        rollOptions: string[];
        slug: string;
    }): ActionCheckPreview | null;
}
declare class EscapeAction extends SingleCheckAction {
    constructor();
    protected toActionVariant(data?: SingleCheckActionVariantData): EscapeActionVariant;
}
declare const action: EscapeAction;
export { action, escape as legacy };
