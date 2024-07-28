import React from "react";
export default function Paragraph({
                                      children,
                                  }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <p className="max-w-xl p-2">
            {children}
        </p>
    )
}