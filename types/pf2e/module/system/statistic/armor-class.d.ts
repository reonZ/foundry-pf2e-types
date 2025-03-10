import { ActorPF2e, CreaturePF2e } from "../../actor/index.ts";
import { AttributeString } from "../../actor/types.ts";
import { ArmorPF2e } from "../../item/index.ts";
import { ZeroToFour } from "../../data.ts";
import { Statistic, StatisticData, StatisticTraceData } from "./index.ts";

declare class ArmorStatistic<TActor extends ActorPF2e = ActorPF2e> extends Statistic<TActor> {
    #private;
    details: string;
    get item(): ArmorPF2e<TActor> | null;
    constructor(actor: TActor, data?: Omit<ArmorStatisticData, "domains" | "label" | "slug">);
    getTraceData(this: ArmorStatistic<CreaturePF2e>): ArmorClassTraceData<AttributeString>;
    getTraceData(): ArmorClassTraceData;
}
interface ArmorStatisticData extends StatisticData {
    rank?: ZeroToFour;
    details?: string;
}
interface ArmorClassTraceData<TAttribute extends AttributeString | null = AttributeString | null> extends StatisticTraceData<TAttribute> {
    details: string;
    slug: "ac";
}
export { ArmorStatistic, type ArmorClassTraceData };
