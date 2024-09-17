import { useState } from "react";

export default function useDebounce(callback, delay) {
	const [timeoutId, setTimeoutId] = useState(null);

	const debouncedCallback = (...args) => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		const newTimeoutId = setTimeout(() => {
			callback(...args);
		}, delay);

		setTimeoutId(newTimeoutId);
	};

	return debouncedCallback;
}
