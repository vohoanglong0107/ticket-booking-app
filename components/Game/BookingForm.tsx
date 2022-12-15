import React, { useState, useContext } from "react";
import type { TimeSlot } from "./TimeSlot";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import { DialogContext } from "./TimeSlot";
interface Props {
  name: string;
  timeSlot: TimeSlot;
  price: number;
  onSubmit: (numParticipant: number) => void;
}

export default function BookingForm({
  name,
  timeSlot,
  price,
  onSubmit,
}: Props) {
  const { open, setOpen } = useContext(DialogContext);
  const [numParticipant, setNumParticipant] = useState(0);
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    onSubmit(numParticipant);
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <div className="block rounded-lg bg-white shadow-lg md:px-12 md:py-3">
        <div className="text-center">
          <h4 className="mt-1 mb-6 pb-1 text-xl font-semibold">{name}</h4>
        </div>

        <div className="mb-4">
          <TextField
            label="Price"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            value={price}
            disabled
          />
        </div>
        <div className="mb-4">
          <TextField
            label="Start Time"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            value={new Date(timeSlot.startTime).toLocaleTimeString("vi")}
            disabled
          />
        </div>
        <div className="mb-4">
          <TextField
            label="End Time"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            value={new Date(timeSlot.endTime).toLocaleTimeString("vi")}
            disabled
          />
        </div>
        <div className="mb-4">
          <TextField
            label="Num Participant"
            placeholder="Num Participant"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            value={numParticipant}
            onChange={(e) => setNumParticipant(parseInt(e.target.value))}
          />
        </div>

        <div className="mb-8 pt-1 pb-1 text-center">
          <button
            className="mb-3 inline-block w-full rounded bg-cyan-500 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </Dialog>
  );
}
