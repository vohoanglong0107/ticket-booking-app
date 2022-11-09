import { resolve } from "dns";
import { enumType, objectType, queryType, stringArg, extendType } from "nexus";

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
