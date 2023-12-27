import Datepicker from 'tailwind-datepicker-react';
import { useState, useRef, useEffect } from 'react';

const Calendar = ({ onDateChange }) => {
  const [show, setShow] = useState(false);
  const divRef = useRef(null);
  const [topPosition, setTopPosition] = useState(0);

  useEffect(() => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      setTopPosition(rect.y + window.scrollY); // Add scrollY to get position relative to the document
    }
  }, [show]); // Recalculate when the datepicker is shown

  const handleClose = (state: boolean) => {
    setShow(state);
  };

  const options = {
    datepickerClassNames: `top-[${topPosition}px]`, // Use template literals to set dynamic top position
  };

  return (
    <div ref={divRef} className="w-52 mt-2">
      <Datepicker
        options={options}
        onChange={onDateChange}
        show={show}
        setShow={handleClose}
      />
    </div>
  );
};

export default Calendar;
