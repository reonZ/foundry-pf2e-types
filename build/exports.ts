import * as fs from "fs";
import { glob } from "glob";

const files = await glob("./pf2e/module/**/*.d.ts", {
    cwd: "./types",
    dotRelative: true,
    ignore: [
        "./pf2e/module/actor/character/apps/abc-picker/**",
        "./pf2e/module/migration/**",
        "./pf2e/module/system/action-macros/**",
    ],
    posix: true,
});

files.sort((a, b) => {
    let a_parts = a.split("/");
    let b_parts = b.split("/");

    let a_folders = a_parts.slice(1, -1);
    let a_file = a_parts.at(-1) ?? "";

    let b_folders = b_parts.slice(1, -1);
    let b_file = b_parts.at(-1) ?? "";

    for (let index = 0; index < Math.max(a_folders.length, b_folders.length); index++) {
        let a_folder = a_folders[index];
        let b_folder = b_folders[index];

        if (!a_folder && !b_folder) {
            break;
        }

        if (!a_folder || !b_folder) {
            if (!a_folder) {
                return -1;
            }

            if (!b_folder) {
                return 1;
            }
        }

        let folder_compare = a_folder.localeCompare(b_folder);

        if (folder_compare != 0) {
            return folder_compare;
        }
    }

    return a_file.localeCompare(b_file);
});

files.forEach((value, index, array) => {
    array[index] = `export type * from "${value}";`;
});

files.unshift(
    'import "./foundry/index.d.ts";',
    'import "./pf2e/global.d.ts";',
    "",
    'export type { HitPointsStatistic } from "./pf2e/module/actor/data/base.d.ts";',
    'export type { ActionCost } from "./pf2e/module/item/base/data/system.d.ts";',
    'export type { PrerequisiteTagData } from "./pf2e/module/item/feat/data.d.ts";',
    ""
);

fs.writeFileSync("./types/index.d.ts", files.join("\r\n"));