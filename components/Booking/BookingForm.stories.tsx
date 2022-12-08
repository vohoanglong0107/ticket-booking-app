import type { Story, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import BookingForm from "./BookingForm";

export default {
  title: "Example/BookingForm",
  component: BookingForm,
} as Meta;

const Template = (args) => <BookingForm {...args} />;
export const Test = Template.bind({});
