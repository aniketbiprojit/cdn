import { readFileSync } from "fs";
import { env } from "process";
import { z } from "zod";

import { router, publicProcedure } from "../trpc";

interface File {
  name: string;
  versions: string[];
}

export interface Folder {
  name: string;
  files: File;
  folders: Folder[];
}

export const publicRouter = router({
  getManifest: publicProcedure.query(() => {
    const pathToManifest =
      env.NODE_ENV === "development"
        ? "public/cdn-source/manifest.json"
        : "cdn-source/manifest.json";
    return JSON.parse(readFileSync(pathToManifest).toString()) as Folder;
  }),
});
