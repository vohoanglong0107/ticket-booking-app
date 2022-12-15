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
  // May be because issue with NEXTAUTH_URL having multiple domain,
  // next-auth can only recognize when access from deployment url,
  // not production url
  // but weird, next auth can recognize it client side
  // const session = await unstable_getServerSession(req, res, authOptions);
  // console.log(session);
  // if (session)
  //   return {
  //     prisma,
  //     user: session.user,
  //   };
  return { prisma };
}
