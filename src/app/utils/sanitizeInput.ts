export const sanitizeInput = (input: string): string => {
	// Remove script tags
	let sanitized = input.replace(/<script.*?>.*?<\/script>/gi, "");

	// Remove HTML tags but keep content between tags
	sanitized = sanitized.replace(/<\/?[^>]+(>|$)/g, "");

	// Remove event handlers (e.g., onclick, onmouseover)
	sanitized = sanitized
		.replace(/ on\w+="[^"]*"/gi, "")
		.replace(/ on\w+='[^']*'/gi, "");

	// Remove CSS expressions
	sanitized = sanitized.replace(/expression\((.*?)\)/gi, "");

	return sanitized;
};

export default sanitizeInput;
