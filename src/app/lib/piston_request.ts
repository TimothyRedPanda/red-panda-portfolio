import fetch from "isomorphic-fetch";

export interface ExecutionResult {
	run: {
		output: string;
		stderr?: string;
	};
}

const API_URL = "https://emkc.org/api/v2/piston";

const isValidUrl = (urlString: string): boolean => {
	const urlPattern = new RegExp(
		// Same regular expression for validating URL
		"^((https?:\\/\\/)?|(\\d{1,3}\\.){3}\\d{1,3})" + // protocol or IP (v4) address
			"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|(\\d{1,3}\\.){3}\\d{1,3})" + // domain name
			"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
			"(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
			"(\\#[-a-z\\d_]*)?$",
		"i", // fragment locator
	);
	return !!urlString.match(urlPattern);
};

const executeCode = async (sourceCode: string): Promise<ExecutionResult> => {
	const endpoint = "/execute";
	if (!isValidUrl(API_URL + endpoint)) {
		throw new Error("Invalid URL");
	}

	const url = API_URL + endpoint;
	const body = {
		language: "js",
		version: "18.15.0",
		files: [
			{
				content: sourceCode,
			},
		],
	};

	const response = await fetch(url, {
		method: "POST",
		headers: { "Content-Type": "application/json" }, // Add Content-Type header
		body: JSON.stringify(body), // Convert data to JSON string
	});

	if (!response.ok) {
		throw new Error(`API request failed with status ${response.status}`);
	}

	const data = await response.json(); // Parse JSON response data
	return data as ExecutionResult;
};

export default executeCode;
