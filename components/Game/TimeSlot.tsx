import { useState, createContext, ReactNode } from "react";

export const DialogContext = createContext({
  open: false,
  setOpen: (open: boolean) => {},
});

export interface TimeSlot {
  id?: string;
  startTime: string;
  endTime: string;
}
type Props = Partial<TimeSlot> & {
  text?: string;
  dialog: ReactNode;
};
export default function TimeSlot({ startTime, endTime, text, dialog }: Props) {
  if (startTime !== undefined) {
    const startDate = new Date(startTime);
    const endDate = new Date(endTime);
    text =
      `${startDate.getHours()}:${startDate.getMinutes()}- ` +
      `${endDate.getHours()}:${endDate.getMinutes()}`;
  }
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  };
  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      <button
        className="flex w-28 flex-wrap content-center justify-center rounded border-0 bg-red-500 py-1 px-1 text-base text-white hover:bg-red-600 focus:outline-none"
        onClick={openDialog}
      >
        <h4>{text}</h4>
      </button>
      {dialog}
    </DialogContext.Provider>
  );
}
