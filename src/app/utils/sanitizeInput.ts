const sanitizeInput = (input: string) => {
	// Remove script tags
	let sanitized = input.replace(/<script.*?>.*?<\/script>/gi, "");

	// Remove HTML tags
	sanitized = sanitized.replace(/<\/?[^>]+(>|$)/g, "");

	// Escape special characters
	sanitized = sanitized
		.replace(/&/g, "")
		.replace(/</g, "")
		.replace(/>/g, "")
		.replace(/"/g, "");

	// Remove event handlers
	sanitized = sanitized
		.replace(/ on\w+="[^"]*"/g, "")
		.replace(/ on\w+='[^']*'/g, "");

	// Remove CSS expressions
	sanitized = sanitized.replace(/expression\((.*?)\)/gi, "");

	return sanitized;
};

export default sanitizeInput;
