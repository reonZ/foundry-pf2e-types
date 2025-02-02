import { ItemSourcePF2e } from "../../item/base/data/index.ts";
import { MigrationBase } from "../base.ts";

/** Convert weapons with the "crossbow" tag to the PC1 crossbow group */
export declare class Migration886CrossbowGroup extends MigrationBase {
    static version: number;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
