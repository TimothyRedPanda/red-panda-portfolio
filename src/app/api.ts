import axios from "axios";

const API = axios.create({
	baseURL: "https://emkc.org/api/v2/piston",
});

async function executeCode(sourceCode: string) {
	const response = await API.post("/execute", {
		language: "js",
		version: "18.15.0",
		files: [
			{
				content: sourceCode,
			},
		],
	});
	return response.data;
}

export default executeCode;
