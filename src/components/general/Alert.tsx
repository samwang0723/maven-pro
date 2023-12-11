import { useEffect } from 'react';

const Alert = ({
  children,
  className = 'bg-red-100 border border-red-200 text-sm text-red-800 rounded-lg p-4 dark:bg-red-800/10 dark:border-red-900 dark:text-red-500',
  show,
  onDismiss,
}) => {
  useEffect(() => {
    let timer;
    if (show) {
      // Set a timer to auto-dismiss the alert after 5 seconds
      timer = setTimeout(() => {
        if (onDismiss) onDismiss(); // Call the onDismiss callback if provided
      }, 5000);
    }

    // Clear the timer if the component is unmounted or the alert is manually dismissed before 5 seconds
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [show, onDismiss]);

  if (!show) return null;

  return (
    <div className={`${className}`} role="alert">
      {children}
    </div>
  );
};

export default Alert;
