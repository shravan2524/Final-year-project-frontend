import React from "react";
import Image from 'next/image'

export default function Footer() {
    return (
        <div className="absolute left-0 right-0 bottom-0 flex">
            <div className=" flex p-6 w-60 h-20 bg-grey justify-center ">
                <Image src="/footerimg1.png" alt="me" width="30" height="30" />
                <Image src="/footerimg2.png" alt="me" width="30" height="30"  className="pl-10"/>
            </div>
            <div className="text-silver w-100 text-center m-auto"  id="foot">
                @ finkraft private limited
            </div>
        </div>

    )
}