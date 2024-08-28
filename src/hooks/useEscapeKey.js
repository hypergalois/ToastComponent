import React from "react";

function useEscapeKey(callback) {
	function checkForEscape(event) {
		if (event.key === "Escape") {
			callback();
		}
	}

	React.useEffect(() => {
		window.addEventListener("keyup", checkForEscape);

		return () => {
			window.removeEventListener("keyup", checkForEscape);
		};
	}, [callback]);
}

export default useEscapeKey;
