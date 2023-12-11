import { useEffect, useState } from 'react';

const Alert = ({ message }) => {
  // State to manage the visibility of the alert
  const [visible, setVisible] = useState(true);

  // Set the time (in milliseconds) for the alert to auto-dismiss
  const dismissTime = 5000; // 5 seconds

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false); // Hide the alert after the dismissTime
    }, dismissTime);

    // Cleanup the timer when the component is unmounted or the timer is reset
    return () => clearTimeout(timer);
  }, [dismissTime]);

  // If the alert is not visible, don't render anything
  if (!visible) {
    return null;
  }

  return (
    <div className="container mx-auto mt-10 space-y-5 justify-center">
      <div className="alert alert-error shadow-lg text-sm text-white">
        <div>
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
};

export default Alert;


