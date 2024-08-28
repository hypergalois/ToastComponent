import React from "react";

import ToastPlayground from "../ToastPlayground";

import { ToastProvider } from "../../context/ToastProvider";

function App() {
	return (
		<ToastProvider>
			<ToastPlayground />
		</ToastProvider>
	);
}

export default App;
