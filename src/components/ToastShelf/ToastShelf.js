import React from "react";

import Toast from "../Toast";
import { useToast } from "../../context/ToastProvider";

import styles from "./ToastShelf.module.css";

function ToastShelf() {
	const { toasts, handleDismissToast } = useToast();

	return (
		<ol className={styles.wrapper}>
			{toasts &&
				toasts.map((toast) => (
					<li className={styles.toastWrapper} key={toast.id}>
						<Toast key={toast.id} message={toast.message} variant={toast.variant} dissmissToast={() => handleDismissToast(toast.id)} />
					</li>
				))}
		</ol>
	);
}

export default ToastShelf;
