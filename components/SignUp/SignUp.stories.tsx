import type { Story, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import SignUp from "./SignUp";

export default {
  title: "Example/SignUp",
  component: SignUp,
} as Meta;

const Template = (args) => <SignUp {...args} />;
export const Test = Template.bind({});
