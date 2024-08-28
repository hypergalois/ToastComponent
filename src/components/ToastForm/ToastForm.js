import React from "react";

import Button from "../Button";
import { useToast } from "../../context/ToastProvider";

import styles from "./ToastForm.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastForm() {
	const [message, setMessage] = React.useState("");
	const [variant, setVariant] = React.useState("notice");
	const [timed, setTimed] = React.useState(true);

	const { createToast } = useToast();

	// Function to handle submitting a new toast
	function handlePopToast(event) {
		event.preventDefault();

		createToast(message, variant, timed);

		setMessage("");
		setVariant("notice");
	}

	return (
		<form className={styles.controlsWrapper} onSubmit={handlePopToast}>
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
				<div className={styles.label}>Timed</div>
				<div className={styles.inputWrapper}>
					<input type="checkbox" id="timed" name="timed" checked={timed} onChange={() => setTimed((timed) => !timed)}></input>
					<label htmlFor="timed">Enable timed toast</label>
				</div>
			</div>

			<div className={styles.row}>
				<div className={styles.label} />
				<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
					<Button type="submit">Pop Toast!</Button>
				</div>
			</div>
		</form>
	);
}

export default ToastForm;
