import { useMemo, useState, useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { DialogContext } from "./TimeSlot";
interface Props {
  startTime?: string;
  endTime?: string;
  onClose: (startTime: string, endTime: string) => void;
}
export default function TimeSlotPicker({ startTime, endTime, onClose }: Props) {
  const { open, setOpen } = useContext(DialogContext);

  const startDate = useMemo(() => {
    if (startTime === undefined) return new Date();
    else return new Date(startTime);
  }, [startTime]);
  const endDate = useMemo(() => {
    if (endTime === undefined) return new Date();
    else return new Date(endTime);
  }, [endTime]);
  const [startHour, setStartHour] = useState(startDate.getHours());
  const [startMinute, setStartMinute] = useState(startDate.getMinutes());
  const [endHour, setEndHour] = useState(endDate.getHours());
  const [endMinute, setEndMinute] = useState(endDate.getMinutes());

  const handleClose = () => {
    const startDate = new Date();
    const endDate = new Date();
    startDate.setHours(startHour);
    startDate.setMinutes(startMinute);
    endDate.setHours(endHour);
    endDate.setMinutes(endMinute);
    onClose(startDate.toISOString(), endDate.toISOString());
    setOpen(false);
  };

  const handleNumberChange = (num: string, max: number) => {
    if (num === "") return 0;
    while (num.charAt(0) === "0") {
      num = num.substring(1);
    }
    const result = parseInt(num);
    return Math.max(Math.min(result, max), 0);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Pick your favorite time</DialogTitle>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Start Hour"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={startHour.toString()}
          onChange={(e) => setStartHour(handleNumberChange(e.target.value, 24))}
        />
        <TextField
          label="Start Minute"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={startMinute.toString()}
          onChange={(e) =>
            setStartMinute(handleNumberChange(e.target.value, 60))
          }
        />
        <TextField
          label="End Hour"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={endHour.toString()}
          onChange={(e) => setEndHour(handleNumberChange(e.target.value, 24))}
        />
        <TextField
          label="End Minute"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={endMinute.toString()}
          onChange={(e) => setEndMinute(handleNumberChange(e.target.value, 60))}
        />
      </Box>
    </Dialog>
  );
}
