import { useEffect, useState } from "react";

export function useDebouncedText<T>(value: T, delay = 400) {
	const [v, setV] = useState(value);

	useEffect(() => {
		const timer = setTimeout(() => setV(value), delay);
		return () => clearTimeout(timer);
	}, [value, delay]);

	return v;
}
