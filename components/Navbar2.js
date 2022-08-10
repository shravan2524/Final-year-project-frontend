import React from "react";
import Image from 'next/image'
const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}
export default function Navbar() {
    return (
        <>
            <div className="flex w-100 bg-navcol p-2 justify-between">
                <div className="py-2" id="nav">
                <Image src="/me.png" alt="me" width="90" height="20" />
                </div>
                <div className="flex text-white">
                    <div className="py-2"><span>Contact Us</span></div>
                    <div className="px-4 py-2 ml-2 rounded-3xl bg-green">A</div>
                </div>
            </div>
        </>
    )
}