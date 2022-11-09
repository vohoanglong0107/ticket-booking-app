import { objectType, extendType, enumType,
  queryType,
  stringArg,
  mutationField,
  mutationType,
  floatArg,
  intArg, } from "nexus";

export const Game = objectType({
  name: "Game",
  definition(t) {
    t.string("id");
    t.string("name");
    t.string("description");
    t.string("location");
    t.float("price");
    t.int("remaining_slot");
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
      },
      async resolve(_, args, context) {
        return context.prisma.game.update({
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
