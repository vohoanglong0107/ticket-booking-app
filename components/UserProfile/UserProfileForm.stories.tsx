import type { Story, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import UserProfileForm from "./UserProfileForm";

export default {
  title: "Example/UserProfileForm",
  component: UserProfileForm,
} as Meta;

const Template = (args) => <UserProfileForm {...args} />;
export const Test = Template.bind({});
