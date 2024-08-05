"use client";
import { useState } from "react";
const colors = [
	"#9aa861",
	"#000000",
	"#be0027",
	"#cf8d2e",
	"#e4e932",
	"#2c9f45",
	"#371777",
	"#52325d",
	"#511378",
	"#f26f3c",
	"#7c4dff",
	"#34a853",
	"#e9c46a",
	"#8c52ff",
	"#d33682",
	"#26b775",
	"#9e9e9e",
	"#ff5733",
	"#c70039",
	"#007bff",
	"#ffcd00",
	"#008000",
	"#808080",
	"#ffa500",
	"#800080",
	"#00ffff",
	"#800000",
	"#ff00ff",
	"#008080",
	"#ff0000",
	"#ffff00",
	"#00ff00",
	"#ffffff",
	"#9932cc",
	"#8b4513",
	"#a0522d",
	"#c0c0c0",
	"#808000",
	"#ffd700",
	"#daa520",
	"#000080",
	"#800080",
	"#fa8072",
	"#f0ffff",
	"#f0f8ff",
	"#faebd7",
	"#fff0f5",
	"#ffe4c4",
	"#ffdab9",
	"#fff8dc",
	"#f0e68c",
	"#ffefd5",
	"#ffffe0",
	"#f5f5dc",
	"#ddd8d9",
	"#fffafa",
	"#f0fff0",
	"#dcdcdc",
	"#fff5ee",
	"#f5f5f5",
	"#faf0e6",
	"#87ceeb",
	"#b0c4de",
	"#add8e6",
	"#afeeee",
	"#b0e0e6",
	"#87cefa",
	"#00ced1",
	"#40e0d0",
	"#48d1cc",
	"#20b2aa",
	"#7fffd4",
	"#66cdda",
	"#008b8b",
	"#87ceeb",
	"#5f9ea0",
	"#4682b4",
	"#b0c4de",
	"#add8e6",
];

const FrogFriend = () => {
	const [color, setColor] = useState(colors[0]);

	const colorChanger = () => {
		const randNumb = Math.floor(Math.random() * colors.length);
		color === colors[randNumb]
			? setColor(colors[Math.floor(Math.random() * colors.length)])
			: setColor(colors[randNumb]);
	};

	return (
		<button type="button" onClick={colorChanger}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				id="Layer_1"
				viewBox="0 0 200.1 202.86"
				width={"100px"}
				className="frog"
			>
				<title>Frog</title>
				<defs>
					<style>
						{".cls-1{fill:#788248}.cls-8{fill:#2f301a}.cls-9{fill:#f6f7f2}"}
					</style>
				</defs>
				<g id="Frog">
					<g id="Frog-2">
						<path
							d="M154.84 85.79c14.8 44.9 16.23 101.81 16.37 112.35 0 .95-.76 1.72-1.71 1.72H31.52c-.95 0-1.72-.77-1.71-1.72.14-10.55 1.56-67.51 16.38-112.41.26-.78-.06-1.64-.79-2.02-3.28-1.72-6.29-4.1-8.81-7.15l-.18-.22a28.734 28.734 0 0 1-6.62-18.37c0-7.41 2.84-14.78 8.44-20.38 10.51-10.52 27.3-11.3 38.75-1.82l.22.18c.11.1.23.19.34.29a42.33 42.33 0 0 1 7.36-4c4.09-1.72 8.49-2.76 13.22-3.02.78-.05 1.58-.07 2.38-.07 1.71 0 3.39.1 5.02.31 2.78.32 5.44.93 7.98 1.8.85.28 1.67.59 2.49.94 1.23.5 2.43 1.07 3.6 1.69 1.29.7 2.54 1.45 3.76 2.27 10.55-9.14 26.3-9.42 37.2-.39l.22.18c13.07 10.83 14 30.56 1.99 42.56l-.04.04a28.772 28.772 0 0 1-7.1 5.21c-.73.38-1.06 1.24-.8 2.03h.02Z"
							style={{
								fill: "#c9cbbf",
								stroke: "#6d8543",
								strokeMiterlimit: 10,
								strokeWidth: 6,
							}}
						/>
						<path
							d="m162.28 78.56.04-.04c12.01-12 11.08-31.73-1.99-42.56l-.22-.18c-10.9-9.03-26.65-8.75-37.2.39-1.22-.82-2.47-1.57-3.76-2.27a3.42 3.42 0 0 1-2.64 1.24c-1 0-1.9-.42-2.53-1.1-1.61 1.25-3.91 1.59-6.23.42-1.8-.92-2.71-2.85-2.68-4.87v-.11c-1.63-.21-3.31-.31-5.02-.31-.8 0-1.6.02-2.38.07.05.29.07.59.07.89 0 3.77-3.06 6.82-6.82 6.82a6.78 6.78 0 0 1-6.47-4.69 42.33 42.33 0 0 0-7.36 4c-.11-.1-.23-.19-.34-.29l-.22-.18c-11.45-9.48-28.24-8.7-38.75 1.82-5.6 5.6-8.44 12.97-8.44 20.38 0 6.5 2.19 13.02 6.62 18.37l.18.22c2.5 3.02 5.48 5.38 8.72 7.1.78.41 1.12 1.33.84 2.16-14.45 43.87-16.14 99.2-16.33 111.53a2.471 2.471 0 0 0 2.47 2.51h136.42c1.38 0 2.5-1.13 2.47-2.51-.2-12.32-1.88-67.6-16.32-111.47-.28-.84.08-1.76.86-2.17 2.52-1.32 4.88-3.04 7-5.16Zm-54.32-37.94a3.753 3.753 0 0 1-2.63 2.63 3.801 3.801 0 0 1-4.78-4.26c.24-1.6 1.55-2.91 3.15-3.15a3.807 3.807 0 0 1 4.26 4.78Zm-7.63-9.78c1.15 0 2.06 1.06 1.81 2.26a1.84 1.84 0 0 1-1.47 1.41c-1.18.21-2.2-.69-2.2-1.82 0-1.02.83-1.85 1.86-1.85Zm-60.68 42.8-.15-.19c-3.73-4.5-5.57-9.99-5.57-15.46 0-6.23 2.38-12.44 7.09-17.15 7.05-7.04 17.45-8.9 26.25-5.32h.01c2.13.86 4.17 2.05 6.04 3.55.11.08.21.17.31.25l.19.15c1.5 1.24 2.81 2.62 3.92 4.1 7.09 9.41 6.48 22.98-2.25 31.71l-.03.03c-7.56 7.56-18.75 9.03-27.72 4.68a24.172 24.172 0 0 1-8.09-6.35Zm102.03 36.2c0 .07 0 .13-.02.2l-.09.61c-.22 1.45-.52 2.88-.88 4.28-.08.31-.17.63-.26.95-.15.53-.42 1.4-.6 1.92-.07.2-.14.41-.21.62-.44 1.24-.93 2.45-1.47 3.63-.13.29-.27.58-.41.86a43.217 43.217 0 0 1-3.56 6.05c-.29.41-.58.81-.88 1.2-.17.24-.35.47-.53.7a44.346 44.346 0 0 1-4.49 4.89c-.22.21-.46.42-.69.63-.47.42-.94.83-1.42 1.22-.24.2-.48.4-.73.59-.54.43-1.09.84-1.65 1.24-.2.14-.4.28-.61.42-.23.16-.46.32-.69.47-.28.19-.57.37-.86.55-1.75 1.1-3.58 2.06-5.47 2.88-.3.14-.59.26-.89.38-.24.1-.48.2-.72.29-.75.29-1.5.55-2.26.8-.59.19-1.19.37-1.79.52-.62.18-1.24.33-1.86.46-.18.04-.37.08-.56.12-.78.17-1.58.32-2.37.42-.36.05-.72.09-1.08.14-.23.02-.46.05-.7.07-1.28.13-2.58.19-3.88.19s-2.59-.06-3.86-.19c-.24-.02-.48-.05-.72-.07a40.03 40.03 0 0 1-3.31-.53c-.23-.05-.46-.1-.68-.15-.63-.13-1.25-.28-1.86-.46-.59-.15-1.17-.32-1.75-.51-.61-.19-1.22-.4-1.82-.63-.19-.07-.37-.14-.56-.21-.13-.05-.13-.05-.02 0-.82-.3-2.14-.89-2.93-1.27-.26-.13-.53-.25-.78-.39a40.514 40.514 0 0 1-4.99-2.98c-.28-.19-.56-.39-.83-.59-.28-.2-.55-.4-.82-.61-.26-.2-.52-.4-.78-.61-.27-.22-.55-.44-.82-.67-.26-.22-.52-.45-.77-.67-.08-.07-.16-.15-.24-.22-.18-.16-.35-.31-.52-.47-.25-.23-.5-.47-.74-.7a45.278 45.278 0 0 1-4.49-5.09c-.17-.23-.34-.46-.51-.7a44.5 44.5 0 0 1-3.53-5.77c-.26-.52-.51-1.05-.76-1.59l-.39-.87a23.2 23.2 0 0 1-.37-.88c-.12-.29-.23-.59-.35-.89l-.33-.9c-.11-.3-.21-.6-.31-.91-.1-.3-.2-.61-.29-.92-.2-.61-.37-1.22-.53-1.84-.16-.63-.31-1.26-.44-1.91-.06-.32-.13-.64-.19-.96s-.11-.64-.16-.96c-.05-.3-.1-.61-.14-.91v-.09c-.73-5.37 3.46-10.14 8.88-10.14h65.44c5.36 0 9.53 4.67 8.91 9.97Zm-18.45-36.2-.15-.19c-3.73-4.5-5.57-9.99-5.57-15.46a24.2 24.2 0 0 1 7.1-17.15c.66-.66 1.35-1.28 2.07-1.85 7.05-5.6 16.56-6.75 24.65-3.27 2.08.89 4.07 2.09 5.89 3.6l.18.15c1.64 1.36 3.06 2.89 4.23 4.54 6.76 9.39 6.04 22.68-2.55 31.27l-.04.03c-2 2-4.26 3.57-6.66 4.72-9.72 4.67-21.84 2.43-29.15-6.39Z"
							style={{
								fill: color,
								transition: "all 1s ease-in-out",
							}}
						/>
						<path
							d="M161.63 44.01a23.797 23.797 0 0 0-4.23-4.54l-.18-.15a24.022 24.022 0 0 0-5.89-3.6c-8.09-3.48-17.6-2.33-24.65 3.27-.72.57-1.41 1.19-2.07 1.85a24.2 24.2 0 0 0-7.1 17.15c0 5.47 1.84 10.96 5.57 15.46l.15.19c7.31 8.82 19.43 11.06 29.15 6.39 2.4-1.15 4.66-2.72 6.66-4.72l.04-.03c8.59-8.59 9.31-21.88 2.55-31.27Zm-.75 16.04c-.83 8.33-8.69 16.21-17.02 17.07-11.94 1.22-21.95-8.56-21.1-20.44.72-10.07 9.43-17.96 19.52-17.74 1.46.04 2.89.23 4.26.58a7.93 7.93 0 0 0-1.01 4.62c.28 3.72 3.2 6.83 6.89 7.34 2.52.35 4.84-.47 6.53-1.98 1.57 3.12 2.31 6.73 1.93 10.55Z"
							className="cls-9"
						/>
						<path
							d="M160.88 60.05c-.83 8.33-8.69 16.21-17.02 17.07-11.94 1.22-21.95-8.56-21.1-20.44.72-10.07 9.43-17.96 19.52-17.74 1.46.04 2.89.23 4.26.58a7.93 7.93 0 0 0-1.01 4.62c.28 3.72 3.2 6.83 6.89 7.34 2.52.35 4.84-.47 6.53-1.98 1.57 3.12 2.31 6.73 1.93 10.55Z"
							className="cls-8"
						/>
						<path
							d="M132.77 99.87H67.33c-5.42 0-9.61 4.77-8.88 10.14v.09c.04.3.09.61.14.91.05.32.1.64.16.96s.13.64.19.96c.13.65.28 1.28.44 1.91.16.62.33 1.23.53 1.84.09.31.19.62.29.92.1.31.2.61.31.91l.33.9c.12.3.23.6.35.89.12.3.24.59.37.88l.39.87c.25.54.5 1.07.76 1.59a44.5 44.5 0 0 0 3.53 5.77c.17.24.34.47.51.7 1.37 1.81 2.87 3.51 4.49 5.09.24.23.49.47.74.7.17.16.34.31.52.47.08.07.16.15.24.22.25.22.51.45.77.67.27.23.55.45.82.67.26.21.52.41.78.61.27.21.54.41.82.61.27.2.55.4.83.59a40.514 40.514 0 0 0 4.99 2.98c.25.14.52.26.78.39.79.38 2.11.97 2.93 1.27.55.2.55.2.02 0 .19.07.37.14.56.21.6.23 1.21.44 1.82.63.58.19 1.16.36 1.75.51.61.18 1.23.33 1.86.46.22.05.45.1.68.15 1.09.22 2.19.4 3.31.53.24.02.48.05.72.07 1.27.13 2.56.19 3.86.19s2.6-.06 3.88-.19c.24-.02.47-.05.7-.07.36-.05.72-.09 1.08-.14.79-.1 1.59-.25 2.37-.42.19-.04.38-.08.56-.12.62-.13 1.24-.28 1.86-.46.6-.15 1.2-.33 1.79-.52.76-.25 1.51-.51 2.26-.8.24-.09.48-.19.72-.29.3-.12.59-.24.89-.38 1.89-.82 3.72-1.78 5.47-2.88.29-.18.58-.36.86-.55.23-.15.46-.31.69-.47.21-.14.41-.28.61-.42.56-.4 1.11-.81 1.65-1.24.25-.19.49-.39.73-.59.48-.39.95-.8 1.42-1.22.23-.21.47-.42.69-.63 1.61-1.51 3.11-3.14 4.49-4.89.18-.23.36-.46.53-.7.3-.39.59-.79.88-1.2.19-.26.37-.53.55-.8 1.12-1.67 2.13-3.43 3.01-5.25.14-.28.28-.57.41-.86.54-1.18 1.03-2.39 1.47-3.63.08-.2.15-.41.21-.62.18-.53.45-1.39.6-1.92.09-.32.18-.64.26-.95.36-1.4.66-2.83.88-4.28.04-.27.08-.54.11-.81.62-5.3-3.55-9.97-8.91-9.97Zm3.75 10.56a38.545 38.545 0 0 1-9.41 19.39c-.97 1.07-1.98 2.07-3.04 3-6.73 5.97-15.28 9.32-24.02 9.32s-17.28-3.35-24.02-9.32a37.27 37.27 0 0 1-3.03-3 38.56 38.56 0 0 1-9.42-19.39c-.49-2.91 1.79-5.56 4.74-5.56h63.47c2.95 0 5.23 2.65 4.73 5.56Z"
							className="cls-1"
						/>
						<path
							d="M136.52 110.43a38.545 38.545 0 0 1-9.41 19.39c-.97 1.07-1.98 2.07-3.04 3-6.74-5.97-15.29-9.32-24.02-9.32s-17.29 3.35-24.02 9.32a37.27 37.27 0 0 1-3.03-3 38.56 38.56 0 0 1-9.42-19.39c-.49-2.91 1.79-5.56 4.74-5.56h.22c.57 5.45 3.28 9.6 6.46 9.64 1.52.02 2.94-.9 4.07-2.47 1.11 1.54 2.49 2.45 3.99 2.47 1.22.02 2.37-.57 3.35-1.61.97 1.01 2.09 1.6 3.27 1.61 1.38.02 2.67-.74 3.75-2.04 1.04 1.27 2.3 2.02 3.64 2.04 1.53.02 2.95-.91 4.08-2.47 1.11 1.54 2.49 2.45 3.98 2.47 1.22.02 2.37-.57 3.36-1.61.96 1.01 2.08 1.6 3.27 1.61 1.08.01 2.1-.44 3.01-1.27.89.81 1.88 1.26 2.92 1.27 1.36.02 2.64-.72 3.71-2 1.03 1.25 2.28 1.99 3.61 2 3.22.04 5.98-4.14 6.55-9.64h.23c2.95 0 5.23 2.65 4.73 5.56Z"
							style={{
								fill: "#414424",
							}}
						/>
						<path
							d="M131.56 104.87c-.57 5.5-3.33 9.68-6.55 9.64-1.33-.01-2.58-.75-3.61-2-1.07 1.28-2.35 2.02-3.71 2-1.04-.01-2.03-.46-2.92-1.27-.91.83-1.93 1.28-3.01 1.27-1.19-.01-2.31-.6-3.27-1.61-.99 1.04-2.14 1.63-3.36 1.61-1.49-.02-2.87-.93-3.98-2.47-1.13 1.56-2.55 2.49-4.08 2.47-1.34-.02-2.6-.77-3.64-2.04-1.08 1.3-2.37 2.06-3.75 2.04-1.18-.01-2.3-.6-3.27-1.61-.98 1.04-2.13 1.63-3.35 1.61-1.5-.02-2.88-.93-3.99-2.47-1.13 1.57-2.55 2.49-4.07 2.47-3.18-.04-5.89-4.19-6.46-9.64h63.02Z"
							style={{
								fill: "#585e43",
							}}
						/>
						<path
							d="M124.07 132.82c-6.73 5.97-15.28 9.32-24.02 9.32s-17.28-3.35-24.02-9.32c6.73-5.97 15.28-9.32 24.02-9.32s17.28 3.35 24.02 9.32Z"
							style={{
								fill: "#676d3a",
							}}
						/>
						<path
							d="M77.74 43.57a24.035 24.035 0 0 0-3.92-4.1l-.19-.15c-.1-.08-.2-.17-.31-.25-1.87-1.5-3.91-2.69-6.04-3.55h-.01c-8.8-3.58-19.2-1.72-26.25 5.32-4.71 4.71-7.09 10.92-7.09 17.15 0 5.47 1.84 10.96 5.57 15.46l.15.19c2.3 2.77 5.07 4.89 8.09 6.35 8.97 4.35 20.16 2.88 27.72-4.68l.03-.03c8.73-8.73 9.34-22.3 2.25-31.71ZM56.09 77.1c-8.78-.97-15.86-8.06-16.84-16.83-1.28-11.55 7.72-21.33 19.01-21.33 1.48 0 2.91.17 4.29.49-.84 1.55-1.17 3.43-.8 5.37.64 3.41 3.53 6.07 6.99 6.46 2.49.28 4.79-.57 6.44-2.13 1.42 2.67 2.22 5.71 2.22 8.95 0 11.29-9.77 20.29-21.31 19.02Z"
							className="cls-9"
						/>
						<path
							d="M77.4 58.08c0 11.29-9.77 20.29-21.31 19.02-8.78-.97-15.86-8.06-16.84-16.83-1.28-11.55 7.72-21.33 19.01-21.33 1.48 0 2.91.17 4.29.49-.84 1.55-1.17 3.43-.8 5.37.64 3.41 3.53 6.07 6.99 6.46 2.49.28 4.79-.57 6.44-2.13 1.42 2.67 2.22 5.71 2.22 8.95Z"
							className="cls-8"
						/>
						<path
							d="M131.56 104.87c-.57 5.5-3.33 9.68-6.55 9.64-1.33-.01-2.58-.75-3.61-2-1.07 1.28-2.35 2.02-3.71 2-1.04-.01-2.03-.46-2.92-1.27-.91.83-1.93 1.28-3.01 1.27-1.19-.01-2.31-.6-3.27-1.61-.99 1.04-2.14 1.63-3.36 1.61-1.49-.02-2.87-.93-3.98-2.47-1.13 1.56-2.55 2.49-4.08 2.47-1.34-.02-2.6-.77-3.64-2.04-1.08 1.3-2.37 2.06-3.75 2.04-1.18-.01-2.3-.6-3.27-1.61-.98 1.04-2.13 1.63-3.35 1.61-1.5-.02-2.88-.93-3.99-2.47-1.13 1.57-2.55 2.49-4.07 2.47-3.18-.04-5.89-4.19-6.46-9.64h63.02Z"
							style={{
								fill: "#fff",
							}}
						/>
						<path
							d="M119.14 33.9a3.42 3.42 0 0 1-2.64 1.24c-1 0-1.9-.42-2.53-1.1-.93.72-2.09 1.14-3.35 1.14a5.56 5.56 0 0 1-5.56-5.56c0-.05 0-.1.01-.15 2.78.32 5.44.93 7.98 1.8.85.28 1.67.59 2.49.94 1.23.5 2.43 1.07 3.6 1.69ZM97.74 30.12c0 3.77-3.06 6.82-6.82 6.82a6.78 6.78 0 0 1-6.47-4.69c4.09-1.72 8.49-2.76 13.22-3.02.05.29.07.59.07.89ZM102.18 32.69c0 1.02-.83 1.85-1.85 1.85s-1.86-.83-1.86-1.85.83-1.85 1.86-1.85 1.85.83 1.85 1.85ZM108.1 39.59c0 2.1-1.7 3.8-3.8 3.8s-3.79-1.7-3.79-3.8 1.7-3.79 3.79-3.79 3.8 1.7 3.8 3.79Z"
							className="cls-1"
						/>
					</g>
				</g>
			</svg>
		</button>
	);
};
export default FrogFriend;
