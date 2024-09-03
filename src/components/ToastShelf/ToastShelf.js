import React from "react";
import { createPortal } from "react-dom";

import Toast from "../Toast";
import { useToast } from "../../context/ToastProvider";

import styles from "./ToastShelf.module.css";

function ToastShelf() {
	const { toasts, handleDismissToast } = useToast();

	return createPortal(
		<ol className={styles.wrapper} role="region" aria-live="polite" aria-label="Notification">
			{toasts.map((toast) => (
				<li className={styles.toastWrapper} key={toast.id}>
					<Toast key={toast.id} message={toast.message} variant={toast.variant} dissmissToast={() => handleDismissToast(toast.id)} />
				</li>
			))}
		</ol>,
		document.querySelector("#toast-root")
	);
}

export default ToastShelf;
