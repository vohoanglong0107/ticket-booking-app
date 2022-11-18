import type { Story, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import TicketFormBooking from "./TicketFormBooking";

export default {
  title: "Example/TicketFormBooking",
  component: TicketFormBooking,
} as Meta;

const Template = (args) => <TicketFormBooking {...args} />;
export const Test = Template.bind({});
