import type { Story, Meta } from "@storybook/react";
import { DialogContext } from "./TimeSlot";
import TimeSlotPicker from "./TimeSlotPicker";

export default {
  title: "Game/TimeSlotPicker",
  component: TimeSlotPicker,
} as Meta;

const Template = (args) => (
  <DialogContext.Provider value={{ open: true, setOpen: () => {} }}>
    <TimeSlotPicker {...args} />
  </DialogContext.Provider>
);
export const Default = Template.bind({});
export const WithStartEnd = Template.bind({});
WithStartEnd.args = {
  startTime: "2022-12-14T03:45:48.931Z",
  endTime: "2022-12-14T08:45:48.931Z",
};
