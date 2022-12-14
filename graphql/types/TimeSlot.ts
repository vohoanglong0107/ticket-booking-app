import {
  objectType,
  stringArg,
  extendType,
  list,
  inputObjectType,
} from "nexus";

import { Game } from "./Game";

export const TimeSlot = objectType({
  name: "TimeSlot",
  definition(t) {
    t.string("id");
    t.string("startTime");
    t.string("endTime");
    t.string("game_id");
    t.field("game", {
      type: Game,
    });
  },
});

export const TimeSlotQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("timeslots", {
      type: TimeSlot,
      async resolve(_parent, _args, context) {
        const timeSlot = await context.prisma.timeSlot.findMany();
        const newArr = timeSlot.map((item) => {
          {
            return {
              ...item,
              startTime: new Date(item.startTime.toString()).toISOString(),
              endTime: new Date(item.endTime.toString()).toISOString(),
            };
          }
        });
        return newArr;
      },
    });
  },
});

export const TimeSlotQueryByGameId = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("timeSlotByGameId", {
      type: TimeSlot,
      args: {
        game_id: stringArg(),
      },
      async resolve(_, args, context) {
        const timeSlot = await context.prisma.timeSlot.findMany({
          where: {
            game: {
              id: args.game_id,
            },
          },
          include: {
            game: true,
          },
        });

        const newArr = timeSlot.map((item) => {
          {
            return {
              ...item,
              startTime: new Date(item.startTime.toString()).toISOString(),
              endTime: new Date(item.endTime.toString()).toISOString(),
            };
          }
        });
        return newArr;
      },
    });
  },
});

export const TimeSlotCreate = extendType({
  type: "Mutation",
  definition(t) {
    t.field("createTimeSlot", {
      type: TimeSlot,
      args: {
        startTime: stringArg(),
        endTime: stringArg(),
        game_id: stringArg(),
      },
      async resolve(_, args, context) {
        const timeSlot = await context.prisma.timeSlot.create({
          data: {
            startTime: args.startTime,
            endTime: args.endTime,
            game_id: args.game_id,
          },
        });
        return {
          ...timeSlot,
          startTime: new Date(timeSlot.startTime.toString()).toISOString(),
          endTime: new Date(timeSlot.endTime.toString()).toISOString(),
        };
      },
    });
  },
});

export const TimeSlotInputType = inputObjectType({
  name: "TimeSlotInputType",
  definition(t) {
    t.nonNull.string("startTime");
    t.nonNull.string("endTime");
    t.nonNull.string("game_id");
  },
});

export const TimeSlotsCreate = extendType({
  type: "Mutation",
  definition(t) {
    t.field("createTimeSlots", {
      type: list(TimeSlot),
      args: {
        timeSlots: list(TimeSlotInputType),
      },
      async resolve(_, args, context) {
        const timeSlots = await context.prisma.$transaction(
          args.timeSlots.map((timeSlot) =>
            context.prisma.timeSlot.create({
              data: {
                startTime: timeSlot.startTime,
                endTime: timeSlot.endTime,
                game_id: timeSlot.game_id,
              },
            })
          )
        );
        return timeSlots.map((timeSlot) => {
          {
            return {
              ...timeSlot,
              startTime: new Date(timeSlot.startTime.toString()).toISOString(),
              endTime: new Date(timeSlot.endTime.toString()).toISOString(),
            };
          }
        });
      },
    });
  },
});

export const TimeSlotUpsertType = inputObjectType({
  name: "TimeSlotUpsertType",
  definition(t) {
    t.string("id");
    t.nonNull.string("startTime");
    t.nonNull.string("endTime");
    t.nonNull.string("game_id");
  },
});

export const TimeSlotsUpsert = extendType({
  type: "Mutation",
  definition(t) {
    t.field("upsertTimeSlots", {
      type: list(TimeSlot),
      args: {
        timeSlots: list(TimeSlotUpsertType),
      },
      async resolve(_, args, context) {
        const timeSlots = await context.prisma.$transaction(
          args.timeSlots.map((timeSlot) =>
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
          )
        );
        return timeSlots.map((timeSlot) => {
          {
            return {
              ...timeSlot,
              startTime: new Date(timeSlot.startTime.toString()).toISOString(),
              endTime: new Date(timeSlot.endTime.toString()).toISOString(),
            };
          }
        });
      },
    });
  },
});
