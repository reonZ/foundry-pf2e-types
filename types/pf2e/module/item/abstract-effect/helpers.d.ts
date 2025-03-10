import { DurationData } from "./data.ts";
import { AbstractEffectPF2e } from "./document.ts";

export declare function calculateRemainingDuration(effect: AbstractEffectPF2e, durationData: DurationData | {
    unit: "unlimited";
}): {
    expired: boolean;
    remaining: number;
};
