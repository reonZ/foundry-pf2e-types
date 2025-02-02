import { ActorPF2e } from "../../actor/index.ts";
import { ItemPF2e } from "../../item/index.ts";
import { MigrationBase } from "../base.ts";
import { MigrationRunnerBase } from "./base.ts";

export declare class MigrationRunner extends MigrationRunnerBase {
    #private;
    needsMigration(): boolean;
    /** Ensure that an actor or item reflects the current data schema before it is created */
    static ensureSchemaVersion(document: ActorPF2e | ItemPF2e, migrations: MigrationBase[]): Promise<void>;
    /** Migrates all documents in a compendium. Since getDocuments() already migrates, this merely loads and saves them */
    runCompendiumMigration<T extends ActorPF2e<null> | ItemPF2e<null>>(compendium: CompendiumCollection<T>): Promise<void>;
    runMigrations(migrations: MigrationBase[]): Promise<void>;
    runMigration(force?: boolean): Promise<void>;
}
