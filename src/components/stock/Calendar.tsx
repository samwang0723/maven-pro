import Datepicker from "tailwind-datepicker-react"
import { useState } from "react"

const Calendar = ({ onDateChange }) => {
  const [show, setShow] = useState(false)
	const handleClose = (state: boolean) => {
		setShow(state)
	}

	return (
		<div className="w-52 mt-2">
			<Datepicker onChange={onDateChange} show={show} setShow={handleClose} />
		</div>
	);
}

export default Calendar;
