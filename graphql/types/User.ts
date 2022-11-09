import { resolve } from "dns";
import {
  enumType,
  extendType,
  mutationType,
  objectType,
  queryType,
  stringArg,
} from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.string("id");
    t.string("name");
    t.string("email");
    t.string("avatarURL");
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
        id: stringArg(),
      },
      async resolve(_, args, context) {
        return context.prisma.user.findUnique({ where: { id: args.id } });
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
        name: stringArg(),
        email: stringArg(),
        avatarURL: stringArg(),
        role: Role,
      },
      async resolve(_, args, context) {
        return context.prisma.user.update({
          where: { id: args.id },
          data: {
            name: args.name,
            email: args.email,
            avatarURL: args.avatarURL,
            role: args.role,
          },
        });
      },
    });
  },
});
