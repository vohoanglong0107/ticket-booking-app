import {
  booleanArg,
  extendType,
  intArg,
  nonNull,
  objectType,
  stringArg,
} from "nexus";
import { Game } from "./Game";
import { User } from "./User";
import { TimeSlot } from "./TimeSlot";

export const BookingCreate = extendType({
  type: "Mutation",
  definition(t) {
    t.field("booking", {
      type: Booking,
      args: {
        number_of_participants: intArg(),
        user_id: stringArg(),
        game_id: stringArg(),
        time_slot_id: stringArg(),
      },
      async resolve(_, args, context) {
        return context.prisma.booking.create({
          data: {
            number_of_participants: args.number_of_participants,
            time_slot_id: args.time_slot_id,
            user_id: args.user_id,
            game_id: args.game_id,
          },
        });
      },
    });
  },
});

export const BookingQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("bookings", {
      type: Booking,
      args: {
        userId: stringArg(),
      },
      async resolve(_parent, args, context) {
        const bookings = await context.prisma.booking.findMany({
          include: {
            user: true,
            game: true,
            timeSlot: true,
          },
          where: {
            user_id: args.userId,
          },
        });

        return bookings.map((booking) => ({
          ...booking,
          timeSlot: {
            ...booking.timeSlot,
            startTime: booking.timeSlot.startTime.toISOString(),
            endTime: booking.timeSlot.endTime.toISOString(),
          },
        }));
      },
    });
  },
});

export const Booking = objectType({
  name: "Booking",
  definition: (t) => {
    t.string("id");
    t.int("number_of_participants");
    t.field("user", {
      type: User,
    });
    t.field("game", {
      type: Game,
    });
    t.field("timeSlot", {
      type: TimeSlot,
    });
  },
});
