import { PrismaClient } from "@prisma/client";
import { unstable_getServerSession } from "next-auth/next";
import prisma from "../lib/prisma";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Session } from "next-auth";

export type Context = {
  prisma: PrismaClient;
  user?: Session["user"];
};
export async function createContext({ req, res }): Promise<Context> {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session)
    return {
      prisma,
      user: session.user,
    };
  return { prisma };
}
