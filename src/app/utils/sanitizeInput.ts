export const sanitizeInput = (input: string): string => {
	// Remove script tags
	let sanitized = input.replace(/<script.*?>.*?<\/script>/gi, "");

	// Remove HTML tags but keep content between tags
	sanitized = sanitized.replace(/<\/?[^>]+(>|$)/g, "");

	// Escape special characters
	sanitized = sanitized
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");

	// Remove event handlers (e.g., onclick, onmouseover)
	sanitized = sanitized
		.replace(/ on\w+="[^"]*"/gi, "")
		.replace(/ on\w+='[^']*'/gi, "");

	// Remove CSS expressions
	sanitized = sanitized.replace(/expression\((.*?)\)/gi, "");

	return sanitized;
};

export default sanitizeInput;

export const sanitizeCode = (input: string): string => {
	// Create a map of HTML special characters and their corresponding escape sequences
	const escapeMap: { [key: string]: string } = {
		"&": " ",
		"<": " ",
		">": " ",
		'"': " ",
		"'": " ",
		"`": " ", // Optional, for template literals
	};

	// Use a regular expression to replace characters with their escape sequences
	return input.replace(/[&<>"'`]/g, (match) => escapeMap[match]);
};
