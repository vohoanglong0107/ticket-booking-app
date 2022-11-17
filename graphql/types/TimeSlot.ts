import { enumType, objectType, queryType, stringArg, extendType } from "nexus";

export const TimeSlot = objectType({
  name: "TimeSlot",
  definition(t) {
    t.string("id");
    t.string("startTime");
    t.string("endTime");
    t.string("game_id");
  },
});
