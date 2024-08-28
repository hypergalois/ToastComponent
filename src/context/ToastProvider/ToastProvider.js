import React from "react";

const ToastContext = React.createContext();

export function useToast() {
	return React.useContext(ToastContext);
}

export function ToastProvider({ children }) {
	// State to hold the objects of the current toasts
	const [toasts, setToasts] = React.useState([]);

	// Function to handle submitting a new toast
	function handlePopToast(message, variant) {
		// console.log("Toast popped!", message, variant);
		const newToast = { id: crypto.randomUUID(), message, variant };
		setToasts([...toasts, newToast]);

		setTimeout(() => {
			handleDismissToast(newToast.id);
		}, 3000);
	}

	function handleDismissToast(id) {
		setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id));
	}

	return <ToastContext.Provider value={{ toasts, handlePopToast, handleDismissToast }}>{children}</ToastContext.Provider>;
}
