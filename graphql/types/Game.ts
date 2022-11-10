import { objectType, extendType } from "nexus";

export const Game = objectType({
  name: "Game",
  definition(t) {
    t.string("id");
    t.string("name");
    t.string("description");
    t.string("location");
    t.float("price");
    t.int("remaining_slot");
    t.string("description");
  },
});

export const GameQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("games", {
      type: Game,
      resolve(_parent, _args, ctx) {
        return ctx.prisma.game.findMany();
      },
    });
  },
});
