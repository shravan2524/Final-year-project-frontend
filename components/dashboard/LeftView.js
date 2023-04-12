import React, { useState, useEffect } from "react";
import Image from 'next/image';
import VendorTable from "./VendorTable";
import { useRouter } from 'next/router'


const images = [
    {
        img: '/customreport.png',
        title: 'Custom Report',
        url : '/customreport',
    },
    {
        img: '/gstreco.png',
        title: 'GST Reco Report',
        url : '/gstreco',
    },
    {
        img: '/invoice.png',
        title: 'Invoice Cleaning',
        url : '/invoice',
    },
];


function Card({ img, title, url }) {
    const router = useRouter()
    return (
        <div className="bg-white justify-center rounded-xl p-6 cursor-pointer hover:bg-secondary bg-gray-100 text-center" onClick={() => router.push(url)}>
            <div>
                <Image src={img} alt="me" width="120" height="150" />
            </div>
            <div className="font-semibold">
                {title}
            </div>
        </div>
    )
}

function Vendor() {
    return (
        <div className="mt-10">
            <div className=" font-semibold text-lg">
                <span>Files</span>
            </div>
            <VendorTable />
        </div>
    )
}


export default function LeftView() {
    return (
        <div className="mt-4 p-8 bg-bgc xl:w-4/5" >
                <div className=" font-semibold pb-8 text-lg ">
                    <span>What You Are Looking For</span>
                </div>
                <div className="container mx-auto overflow-x-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            images.map((e) => {
                                return <Card img={e.img} title={e.title} url={e.url} />
                            })
                        }
                    </div>
                </div>
            <Vendor />
        </div>
    );
}