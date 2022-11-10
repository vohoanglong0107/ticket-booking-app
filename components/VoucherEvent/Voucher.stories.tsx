import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import VoucherEvent from "./VoucherEvent";

export default {
  component: VoucherEvent,
} as ComponentMeta<typeof VoucherEvent>;

export const Primary: ComponentStory<typeof VoucherEvent> = () => <VoucherEvent />;
