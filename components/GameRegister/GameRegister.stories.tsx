import type { Story, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import GameRegister from "./GameRegister";

export default {
  title: "Example/GameRegister",
  component: GameRegister,
} as Meta;

const Template = (args) => <GameRegister {...args} />;
export const Test = Template.bind({});
