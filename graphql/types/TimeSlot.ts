import NavItem from "@/components/Navbar/NavItem";
import {
  enumType,
  objectType,
  queryType,
  stringArg,
  extendType,
  arg,
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
              startTime: item.startTime.toString().substring(16, 21),
              endTime: item.endTime.toString().substring(16, 21),
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
              startTime: item.startTime.toString().substring(16, 21),
              endTime: item.endTime.toString().substring(16, 21),
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
