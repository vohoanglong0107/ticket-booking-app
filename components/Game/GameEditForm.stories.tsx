import type { Story, Meta } from "@storybook/react";
import GameEditForm from "./GameEditForm";
import { itemData } from "@/utils/sample-data";

export default {
  title: "Game/EditForm",
  component: GameEditForm,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const Template = (args) => <GameEditForm {...args} />;
export const Default = Template.bind({});
Default.args = {
  img: itemData[0].img,
  gameName: "abc",
  description: "assdsd",
  price: "123",
  timeSlots: [
    {
      id: "1",
      startTime: "2022-12-14T03:45:48.931Z",
      endTime: "2022-12-14T08:45:48.931Z",
    },
    {
      id: "2",
      startTime: "2022-12-14T04:45:48.931Z",
      endTime: "2022-12-14T08:45:48.931Z",
    },
  ],
};
