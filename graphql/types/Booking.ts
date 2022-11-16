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

export const BookingCreate = extendType({
  type: "Mutation",
  definition(t) {
    t.field("booking", {
      type: Booking,
      args: {
        number_of_participants: intArg(),
        payment_status: booleanArg(),
        user_id: stringArg(),
        game_id: stringArg(),
      },
      async resolve(_, args, context) {
        return context.prisma.booking.create({
          data: {
            number_of_participants: args.number_of_participants,
            payment_status: args.payment_status,
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
      async resolve(_parent, _args, context) {
        return context.prisma.booking.findMany({
          include: {
            user: true,
            game: true,
          },
        });
      },
    });
  },
});

export const Booking = objectType({
  name: "Booking",
  definition: (t) => {
    t.int("number_of_participants");
    t.boolean("payment_status");
    t.field("user", {
      type: User,
    });
    t.field("game", {
      type: Game,
    });
  },
});
