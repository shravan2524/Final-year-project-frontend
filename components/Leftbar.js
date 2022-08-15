import React from "react";

export default function Leftbar({ number, title }) {
    return (
        <>
            <div>
                <h1 className="font-bold text-3xl">{number}</h1>
            </div>
            <div>
                <span>{title}</span>
            </div>
        </>
    )
}