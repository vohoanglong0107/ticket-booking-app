import type { Story, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import UserProfileView from "./UserProfileView";

export default {
  title: "Example/UserProfileView",
  component: UserProfileView,
} as Meta;

const Template = (args) => <UserProfileView {...args} />;
export const Default = Template.bind({});
Default.args = {
  firstName: "abc",
  lastName: "zyx",
  address: "asldkf",
  email: "as@email",
};
