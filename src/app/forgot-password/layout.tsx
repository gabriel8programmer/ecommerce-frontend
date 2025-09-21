import React from "react";

export default function Layout({ children }: {children: React.ReactNode}) {
    return (
        <html lang="pt-br">
            <body className="h-full w-full grid place-items-center">
               {children} 
            </body>
        </html>
    )
}