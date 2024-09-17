import moment from "moment";

// Utility function to convert hex color to RGBA
export function hexToRgba(hex, opacity) {
	hex = hex.replace(/^#/, "");

	if (hex.length === 6) {
		hex += "FF";
	} else if (hex.length !== 8) {
		throw new Error("Invalid hex color format. Use #RRGGBB or #RRGGBBAA.");
	}

	const bigint = parseInt(hex, 16);
	const r = (bigint >> 24) & 255;
	const g = (bigint >> 16) & 255;
	const b = (bigint >> 8) & 255;

	opacity = Math.min(1, Math.max(0, opacity));

	return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

// utility function to generate link
export function linkGenerator(type, info, pageName) {
	switch (type) {
		case "phone":
			return (
				<a
					href={`tel:${info}`}
					className="block text-neutral-bright-200 hover:text-secondary transition-colors"
				>
					{info}
				</a>
			);
		case "email":
			return (
				<a
					href={`mailto:${info}`}
					target="_blank"
					className="block text-neutral-bright-200 hover:text-secondary transition-colors"
				>
					{info}
				</a>
			);
		case "address":
			return (
				<span className="block text-neutral-bright-200">{info}</span>
			);
	}
}

// utility function to convert date
export function convertDate(dateString) {
	return moment(dateString).format("D MMM YYYY");
}

export const getJSONData = (data, type = "object") => {
	try {
		return JSON.parse(data);
	} catch (error) {
		return type === "object" ? {} : [];
	}
};
