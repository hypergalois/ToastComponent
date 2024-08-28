import React from "react";

const ToastContext = React.createContext();

export function useToast() {
	return React.useContext(ToastContext);
}

export function ToastProvider({ children }) {
	// State to hold the objects of the current toasts
	const [toasts, setToasts] = React.useState([]);

	function checkForEscape(event) {
		if (event.key === "Escape") {
			setToasts([]);
		}
	}

	React.useEffect(() => {
		window.addEventListener("keyup", checkForEscape);

		return () => {
			window.removeEventListener("keyup", checkForEscape);
		};
	}, []);

	// Function to create a new toast
	function createToast(message, variant, timed = true) {
		const newToast = { id: crypto.randomUUID(), message, variant };
		setToasts([...toasts, newToast]);

		// Automatically dismiss the toast after 3
		// Optional
		if (timed) {
			setTimeout(() => {
				handleDismissToast(newToast.id);
			}, 3000);
		}
	}

	function handleDismissToast(id) {
		setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id));
	}

	return <ToastContext.Provider value={{ toasts, createToast, handleDismissToast }}>{children}</ToastContext.Provider>;
}
