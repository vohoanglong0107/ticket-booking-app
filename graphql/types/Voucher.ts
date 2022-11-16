import {
  objectType,
  extendType,
  enumType,
  queryType,
  stringArg,
  mutationField,
  mutationType,
  floatArg,
  intArg,
} from "nexus";
export const Voucher = objectType({
  name: "Voucher",
  definition(t) {
    t.string("id");
    t.string("id_game");
    t.string("id_user");
    t.float("discount");
    t.int("remaining_amount");
    t.boolean("status");
  },
});

export const VoucherQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("vouchers", {
      type: Voucher,
      async resolve(_parent, _args, context) {
        return context.prisma.voucher.findMany();
      },
    });
  },
});
