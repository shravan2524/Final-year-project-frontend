import React from "react";
import Image from 'next/image'
const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}
export default function Navbar() {
    return (
        <>
            <div className="flex ">
                <div className="p-6 w-60 h-20 bg-grey"  id="nav">
                <Image src="/me.png" alt="me" width="90" height="25" />
                </div>
                <div>
                </div>
            </div>
        </>
    )
}