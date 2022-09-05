import React, { useState, useEffect } from "react";
import Image from 'next/image';
import VendorTable from "./VendorTable";


const images = [
    {
        img: '/customreport.png',
        title: 'Custom Report',
    },
    {
        img: '/gstreco.png',
        title: 'GST Reco Report',
    },
    {
        img: '/invoice.png',
        title: 'Invoice Cleaning',
    },
    {
        img: '/qatar.png',
        title: 'Qatar',
    },
];


function Card({ img, title }) {
    return (
        <div class="bg-white justify-center rounded-xl p-6 bg-gray-100 text-center">
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
            <div className=" font-semibold" style={{ fontSize: "20px" }}>
                <span>Vendor Master</span>
            </div>
            <VendorTable />
        </div>
    )
}


export default function LeftView() {
    return (
        <div className="mt-4 p-8" style={{ width: "75%", background: "rgba(143, 146, 161, 0.05)" }} >
            <div>
                <div className=" font-semibold pb-8" style={{ fontSize: "20px" }}>
                    <span>What You Are Looking For</span>
                </div>
                <div class="container mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {
                            images.map((e) => {
                                return <Card img={e.img} title={e.title} />
                            })
                        }
                    </div>
                </div>
            </div>
            <Vendor />
        </div>
    );
}