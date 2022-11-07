import type { Story, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import SignIn from "./SignIn";

export default {
  title: "Example/SignIn",
  component: SignIn,
} as Meta;

const Template = (args) => <SignIn {...args} />;
export const Test = Template.bind({});
