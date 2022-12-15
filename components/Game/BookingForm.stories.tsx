import type { Story, Meta } from "@storybook/react";
import { DialogContext } from "./TimeSlot";
import BookingForm from "./BookingForm";

export default {
  title: "Game/BookingForm",
  component: BookingForm,
} as Meta;

const Template = (args) => (
  <DialogContext.Provider value={{ open: true, setOpen: () => {} }}>
    <BookingForm {...args} />
  </DialogContext.Provider>
);
export const Default = Template.bind({});
Default.args = {
  open: true,
  name: "Tàu lượn siêu tốc",
  timeSlot: {
    id: "abc",
    startTime: "2022-12-14T03:45:48.931Z",
    endTime: "2022-12-14T03:45:48.931Z",
  },
  price: "123",
};
