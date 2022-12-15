import {
  objectType,
  extendType,
  stringArg,
  floatArg,
  intArg,
  list,
} from "nexus";
import { TimeSlot, TimeSlotUpsertType } from "./TimeSlot";

export const Game = objectType({
  name: "Game",
  definition(t) {
    t.string("id");
    t.string("name");
    t.string("description");
    t.string("location");
    t.float("price");
    t.int("remaining_slot");
    t.list.field("timeSlots", {
      type: TimeSlot,
    });
  },
});

export const GameQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("games", {
      type: Game,
      async resolve(_parent, _args, context) {
        return context.prisma.game.findMany();
      },
    });
  },
});

export const GameQueryById = extendType({
  type: "Query",
  definition(t) {
    t.field("game", {
      type: Game,
      args: {
        game_id: stringArg(),
      },
      async resolve(_, args, context) {
        const game = await context.prisma.game.findUnique({
          where: {
            id: args.game_id,
          },
          include: {
            timeSlots: true,
          },
        });
        const gameWithStringDatetime = {
          ...game,
          timeSlots: game.timeSlots.map((timeSlot) => ({
            ...timeSlot,
            startTime: new Date(timeSlot.startTime.toString()).toISOString(),
            endTime: new Date(timeSlot.endTime.toString()).toISOString(),
          })),
        };
        return gameWithStringDatetime;
      },
    });
  },
});

export const GameCreate = extendType({
  type: "Mutation",
  definition(t) {
    t.field("game", {
      type: Game,
      args: {
        name: stringArg(),
        description: stringArg(),
        location: stringArg(),
        price: floatArg(),
        remaining_slot: intArg(),
      },
      async resolve(_, args, context) {
        if (!context.user) return null;
        const prismaUser = await context.prisma.user.findFirst({
          where: { email: context.user.email },
        });
        if (prismaUser.role != "STORE_OWNER") return null;
        return context.prisma.game.create({
          data: {
            name: args.name,
            description: args.description,
            location: args.location,
            price: args.price,
            remaining_slot: args.remaining_slot,
          },
        });
      },
    });
  },
});

export const GameUpdate = extendType({
  type: "Mutation",
  definition(t) {
    t.field("updateGame", {
      type: Game,
      args: {
        id: stringArg(),
        name: stringArg(),
        description: stringArg(),
        location: stringArg(),
        price: floatArg(),
        remaining_slot: intArg(),
        timeSlots: list(TimeSlotUpsertType),
      },
      async resolve(_, args, context) {
        await context.prisma.$transaction([
          ...args.timeSlots.map((timeSlot) =>
            context.prisma.timeSlot.upsert({
              where: {
                // hack waiting for https://github.com/prisma/prisma/issues/5233
                id: timeSlot.id || "0",
              },
              create: {
                startTime: timeSlot.startTime,
                endTime: timeSlot.endTime,
                game_id: timeSlot.game_id,
              },
              update: {
                startTime: timeSlot.startTime,
                endTime: timeSlot.endTime,
              },
            })
          ),
          context.prisma.game.update({
            where: {
              id: args.id,
            },
            data: {
              name: args.name,
              description: args.description,
              location: args.location,
              price: args.price,
              remaining_slot: args.remaining_slot,
            },
          }),
        ]);
        const game = await context.prisma.game.findUnique({
          where: {
            id: args.id,
          },
          include: {
            timeSlots: true,
          },
        });

        const gameWithStringDatetime = {
          ...game,
          timeSlots: game.timeSlots.map((timeSlot) => ({
            ...timeSlot,
            startTime: new Date(timeSlot.startTime.toString()).toISOString(),
            endTime: new Date(timeSlot.endTime.toString()).toISOString(),
          })),
        };
        return gameWithStringDatetime;
      },
    });
  },
});
