import { createAuth } from "@kiraquest/auth";
import { type Database, createPrismaClient } from "@kiraquest/db";
import { createEmail } from "@kiraquest/email";
import { createFiles } from "@kiraquest/storage";

import { env } from "./env.server";

const db = createPrismaClient(env);

export function getDb(): Database {
  return db;
}
export const auth = createAuth(env, db);
export const files = createFiles(env);
export const email = createEmail(env);
