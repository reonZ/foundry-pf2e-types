import { DiceTerm } from "./dice.mjs";
import { RollTerm } from "./term.mjs";

export class FunctionTerm<TFunctionName extends MathFunctionName = MathFunctionName> extends RollTerm<
    FunctionTermData<TFunctionName>
> {
    constructor({ fn, terms, options }: FunctionTermData<TFunctionName>);

    /** The named function in the Math environment which should be applied to the term */
    fn: TFunctionName;

    /** An array of string argument terms for the function */
    terms: string[];

    /** The cached Roll instances for each function argument */
    rolls: Roll[];

    /** The cached result of evaluating the method arguments */
    result: string | number;

    override isIntermediate: true;

    static override SERIALIZE_ATTRIBUTES: ["fn", "terms", "rolls", "result"];

    /* -------------------------------------------- */
    /*  Math Term Attributes                        */
    /* -------------------------------------------- */

    /** An array of evaluated DiceTerm instances that should be bubbled up to the parent Roll */
    get dice(): DiceTerm[];

    override get total(): string | number;

    override get expression(): `${MathFunctionName}(${string})`;

    /** The function this term represents. */
    get function(): RollFunction;

    override get isDeterministic(): boolean;

    /* -------------------------------------------- */
    /*  Math Term Methods                           */
    /* -------------------------------------------- */

    protected override _evaluate({
        minimize,
        maximize,
    }?: {
        minimize?: boolean;
        maximize?: boolean;
    }): Promise<Evaluated<this>>;

    /** Evaluate this function when it contains any non-deterministic sub-terms. */
    protected _evaluateAsync({
        minimize,
        maximize,
    }?: {
        minimize?: boolean;
        maximize?: boolean;
    }): Promise<Evaluated<this>>;

    /** Evaluate this function when it contains only deterministic sub-terms. */
    protected override _evaluateSync({
        minimize,
        maximize,
    }?: {
        minimize?: boolean;
        maximize?: boolean;
    }): Evaluated<this>;
}

declare global {
    type MathFunctionName =
        | Exclude<MathStringKey, "E" | "LN2" | "LN10" | "LOG2E" | "LOG10E" | "PI" | "SQRT1_2" | "SQRT2">
        | "clamped"
        | "normalizeDegrees"
        | "normalizeRadians"
        | "roundDecimals"
        | "toDegrees"
        | "toRadians"
        | "safeEval";

    interface FunctionTermData<TFunctionName extends MathFunctionName = MathFunctionName> extends RollTermData {
        class?: "FunctionTerm";
        fn?: TFunctionName;
        terms?: RollTerm[];
    }

    type MathStringKey<T extends keyof Math = keyof Math> = T extends string ? T : never;
}
