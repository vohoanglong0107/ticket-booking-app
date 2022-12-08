import type { Story, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import SignIn from "../SignIn/SignIn";
import ViewSource from "./View-source";
import TitlebarImageList from "./View-source";

export default {
  title: "Gamelist/ViewSource",
  component: TitlebarImageList,
} as Meta;

const Template = (args) => <TitlebarImageList {...args} />;
export const Default = Template.bind({});
Default.args = {
  games: [
    {
      id: "10",
      title: "abc",
    },
  ],
};
