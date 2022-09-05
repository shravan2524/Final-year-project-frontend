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
    {
        img: '/qatar.png',
        title: 'Qatar',
        url : '/qatar',
    },
];


function Card({ img, title, url }) {
    const router = useRouter()
    return (
        <div class="bg-white justify-center rounded-xl p-6 cursor-pointer hover:bg-secondary bg-gray-100 text-center" onClick={() => router.push(url)}>
            <div>
                <Image src={img} alt="me" width="120" height="120" />
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
                <span>Vendor Master</span>
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
                <div class="container mx-auto overflow-x-auto">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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