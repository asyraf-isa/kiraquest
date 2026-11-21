import type { createAuth } from "@kiraquest/auth";
import type { Database } from "@kiraquest/db";

export type Context = {
  auth: null;
  session: Awaited<ReturnType<ReturnType<typeof createAuth>["api"]["getSession"]>>;
  db: Database;
};
