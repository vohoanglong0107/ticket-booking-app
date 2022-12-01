import {
  enumType,
  objectType,
  queryType,
  stringArg,
  extendType,
  arg,
} from "nexus";

export const TimeSlot = objectType({
  name: "TimeSlot",
  definition(t) {
    t.string("id");
    t.string("startTime");
    t.string("endTime");
    t.string("game_id");
  },
});

export const TimeSlotQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("timeslots", {
      type: TimeSlot,
      async resolve(_parent, _args, context) {
        return context.prisma.timeSlot.findMany();
      },
    });
  },
});

export const TimeSlotQueryByGameId = extendType({
  type: "Query",
  definition(t) {
    t.field("timeSlotByGameId", {
      type: TimeSlot,
      args: {
        game_id: stringArg(),
      },
      async resolve(parent, args, context) {
        const timeSlot = await context.prisma.timeSlot.findUnique({
          where: {
            id: args.game_id,
          },
          include: {
            game: true,
          },
        });
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
        return context.prisma.timeSlot.create({
          data: {
            startTime: args.startTime,
            endTime: args.endTime,
            game_id: args.game_id,
          },
        });
      },
    });
  },
});
