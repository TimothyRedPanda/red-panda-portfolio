"use client";

import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-bash";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/command-line/prism-command-line.js";
import "prismjs/plugins/command-line/prism-command-line.css";

const PrismLoader = () => {
	useEffect(() => {
		Prism.highlightAll();
	}, []);
	return <div className="hidden" />;
};

export default PrismLoader;
