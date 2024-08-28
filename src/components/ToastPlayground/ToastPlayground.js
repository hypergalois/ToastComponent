import React from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
	const [message, setMessage] = React.useState("");
	const [variant, setVariant] = React.useState("notice");

	const [toasts, setToasts] = React.useState([]);

	function handlePopToast() {
		// Pop a toast with the current message and variant
		// console.log("Toast popped!", message, variant);
		const newToast = { id: crypto.randomUUID(), message, variant };
		setToasts([...toasts, newToast]);

		setTimeout(() => {
			handleDismissToast(newToast.id);
		}, 3000);

		setMessage("");
		setVariant("notice");
	}

	function handleDismissToast(id) {
		setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id));
	}

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>

			<ToastShelf toasts={toasts} handleDismissToast={handleDismissToast}></ToastShelf>

			<form
				className={styles.controlsWrapper}
				onSubmit={(event) => {
					event.preventDefault();
					handlePopToast();
				}}
			>
				<div className={styles.row}>
					<label htmlFor="message" className={styles.label} style={{ alignSelf: "baseline" }}>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea
							id="message"
							className={styles.messageInput}
							value={message}
							onChange={(event) => {
								setMessage(event.target.value);
							}}
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						{VARIANT_OPTIONS.map((variant_option) => (
							<label htmlFor={`variant-${variant_option}`} key={variant_option}>
								<input
									id={`variant-${variant_option}`}
									type="radio"
									name="variant"
									value={variant_option}
									onChange={(event) => {
										setVariant(event.target.value);
									}}
									checked={variant === variant_option}
								/>
								{variant_option}
							</label>
						))}
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button type="submit">Pop Toast!</Button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ToastPlayground;
