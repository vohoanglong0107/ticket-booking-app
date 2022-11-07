import type { Story, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import SignUpForm from "./SignUpForm";

export default {
  title: "Example/SignUp",
  component: SignUpForm,
} as Meta;

const Template = (args) => <SignUpForm {...args} />;
export const Test = Template.bind({});
