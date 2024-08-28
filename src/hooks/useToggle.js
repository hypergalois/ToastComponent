import React from "react";

function useToggle(initialValue = false) {
	const [value, setValue] = React.useState(initialValue);

	const toggleValue = React.useCallback(() => setValue((value) => !value), []);

	return [value, toggleValue];
}

export default useToggle;
