import type { Story, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  children: "Hello",
};
