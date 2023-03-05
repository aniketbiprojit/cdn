import { readFileSync } from "fs";
import { z } from "zod";

import { router, publicProcedure } from "../trpc";

interface File {
  name: string;
  versions: string[];
}

interface Folder {
  name: string;
  files: File;
  folders: Folder[];
}

export const exampleRouter = router({
  hello: publicProcedure.query(() => {
    return JSON.parse(
      readFileSync("public/cdn-source/manifest.json").toString()
    ) as Folder;
  }),
});
