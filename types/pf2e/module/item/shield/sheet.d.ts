import { ItemSheetOptions } from "../base/sheet/sheet.ts";
import { CoinsPF2e, MaterialSheetData, PhysicalItemSheetData, PhysicalItemSheetPF2e, RUNE_DATA } from "../physical/index.ts";
import { WeaponPropertyRuneType } from "../weapon/types.ts";
import { ShieldPF2e } from "./document.ts";
import { BaseShieldType } from "./types.ts";

declare class ShieldSheetPF2e extends PhysicalItemSheetPF2e<ShieldPF2e> {
    getData(options?: Partial<ItemSheetOptions>): Promise<ShieldSheetData>;
    activateListeners($html: JQuery<HTMLElement>): void;
    protected _updateObject(event: Event, formData: Record<string, unknown>): Promise<void>;
}
interface ShieldSheetData extends PhysicalItemSheetData<ShieldPF2e> {
    baseHardness: number;
    basePrice: CoinsPF2e;
    baseTypes: Record<BaseShieldType, string>;
    canChangeMaterial: boolean;
    preciousMaterials: MaterialSheetData;
    propertyRuneSlots: {
        slug: WeaponPropertyRuneType | null;
        disabled: boolean;
        readOnly: boolean;
    }[];
    reinforcing: Record<number, string | null>;
    weaponRunes: typeof RUNE_DATA.weapon | null;
}
export { ShieldSheetPF2e };
