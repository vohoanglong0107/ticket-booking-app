import {
  enumType,
  objectType,
  queryType,
  stringArg,
  extendType,
  arg,
} from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.string("id");
    t.string("firstName");
    t.string("lastName");
    t.string("email");
    t.string("avatarURL");
    t.string("address");
    t.field("role", { type: Role });
  },
});

const Role = enumType({
  name: "Role",
  members: ["USER", "ADMIN", "STORE_OWNER"],
});

export const UserQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("user", {
      type: User,
      args: {
        email: stringArg(),
      },
      async resolve(_, args, context) {
        return context.prisma.user.findUnique({ where: { email: args.email } });
      },
    });
  },
});

export const UserCreate = extendType({
  type: "Mutation",
  definition(t) {
    t.field("createUser", {
      type: User,
      args: {
        firstName: stringArg(),
        lastName: stringArg(),
        email: stringArg(),
        avatarURL: stringArg(),
        address: stringArg(),
        role: arg({
          type: Role,
        }),
      },
      async resolve(_, args, context) {
        return context.prisma.user.create({
          data: {
            firstName: args.firstName,
            lastName: args.lastName,
            email: args.email,
            avatarURL: args.avatarURL,
            role: args.role,
          },
        });
      },
    });
  },
});

export const UpdateUser = extendType({
  type: "Mutation",
  definition(t) {
    t.field("user", {
      type: User,
      args: {
        id: stringArg(),
        firstName: stringArg(),
        lastName: stringArg(),
        address: stringArg(),
        email: stringArg(),
        avatarURL: stringArg(),
        role: Role,
      },
      async resolve(_, args, context) {
        // if (!context.user) return null;
        const updateData = {
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          address: args.address,
          avatarURL: args.avatarURL,
          role: args.role,
        };
        if (args.id)
          return context.prisma.user.update({
            where: { id: args.id },
            data: updateData,
          });
        else {
          // if (context.user.email !== args.email) return null;
          return context.prisma.user.update({
            where: { email: args.email },
            data: updateData,
          });
        }
      },
    });
  },
});
