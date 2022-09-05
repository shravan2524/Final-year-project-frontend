import React, { useState, useEffect } from "react";
import Image from 'next/image'

function Card({ type, total, index }) {
    const col = index %2 ? 'lightg' : 'darkg';
    return (
        <div className={`bg-d justify-center rounded-xl p-6 bg-gray-100 text-center ${index%2?'bg-lightg':'bg-darkg'}`}>
            <div className="font-bold text-2xl ">
                {total}
            </div>
            <div className="font-semibold">
                {type}
            </div>
        </div>
    )
}

function YourCompany() {
    function Active() {
        return (
            <div className="w-3 h-3 bg-red-600 rounded-full relative top-4 bg-green ">

            </div>
        )
    }
    function Block() {
        return (
            <div className="w-3 h-3 bg-red-600 rounded-full relative top-4 bg-red" >

            </div>
        )
    }
    const report = [
        {
            type: '2A Reports',
            total: '200',
        },

        {
            type: '2B Reports',
            total: '300',
        },

        {
            type: 'Booking',
            total: '350',
        },

        {
            type: 'Invoice OCR',
            total: '450',
        },

        {
            type: 'Invoice QR',
            total: '3500',
        },

        {
            type: 'Purchase Reciepts',
            total: '550',
        }

    ]
    const members = [
        {
            img: "https://images.unsplash.com/photo-1661758437390-aa30049e0ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            name: "Enert Tory",
            status: 'online',
        },
        {
            img: "https://images.unsplash.com/photo-1661758437390-aa30049e0ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            name: "Enert Tory",
            status: 'notify',
        },
        {
            img: "https://images.unsplash.com/photo-1661758437390-aa30049e0ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            name: "Enert Tory",
            status: 'online',
        },
        {
            img: "https://images.unsplash.com/photo-1661758437390-aa30049e0ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            name: "Enert Tory",
            status: 'block',
        },
        {
            img: "https://images.unsplash.com/photo-1661758437390-aa30049e0ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            name: "Enert Tory",
            status: 'online',
        }
    ]
   
    const summary = [
        {
            name: 'Someone',
            description: 'Just registered on Finkraft'
        },
        {
            name: 'Someone',
            description: 'Just Got Their GST Filed'
        },
        {
            name: 'Someone',
            description: 'Just registered on Finkraft'
        },
        {
            name: 'Someone',
            description: 'Just Filed Their GST Returns'
        },
    ]

    return (
        <div>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {
                        report.map((e, index) => {
                            return <Card type={e.type} total={e.total} index={index} />
                        })
                    }
                </div>
            </div>
            <div className="mt-5">
                <div className="text-primary font-semibold text-lg">
                    Team Members
                </div>
                <div className="bg-white justify-start rounded-xl p-2 text-center m-2 justify-around">
                    {
                        members.map((e) => {
                            return (<div className="flex justify-between py-3 px-6">
                                <div className="flex">
                                    <div>
                                    <Image src={e.img} alt="me" width="50" height="50" className="rounded-full" />
                                    </div>
                                    <div className="font-bold pl-6 relative top-2 text-lg">
                                        {e.name}
                                    </div>
                                </div>

                                {
                                    e.status === "online"
                                        ? <Active />
                                        : <Block />
                                }
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

function Card1({ description, name }) {
    return (
        <div className="bg-white flex justify-start rounded-xl p-6 text-center m-2">
            <div className="relative top-1">
                <Image src="/pin.png" alt="me" width="15" height="15" />
            </div>
            <div className="ml-2 flex">
                <div className="font-semibold text-primary">
                    {name}
                </div>
                <div className="ml-1">
                    {description}
                </div>
            </div>
        </div>)
}


function General() {
    const report = [
        {
            type: '2A Reports',
            total: '3000',
        },

        {
            type: '2B Reports',
            total: '4000',
        },

        {
            type: 'Booking',
            total: '3500',
        },

        {
            type: 'Invoice OCR',
            total: '4500',
        },

        {
            type: 'Invoice QR',
            total: '4000',
        },

        {
            type: 'Purchase Reciepts',
            total: '3000',
        }

    ]
    const summary = [
        {
            name: 'Someone',
            description: 'Just registered on Finkraft'
        },
        {
            name: 'Someone',
            description: 'Just Got Their GST Filed'
        },
        {
            name: 'Someone',
            description: 'Just registered on Finkraft'
        },
        {
            name: 'Someone',
            description: 'Just Filed Their GST Returns'
        },
    ]

    return (
        <div>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {
                        report.map((e, index) => {
                            return <Card type={e.type} total={e.total} index={index} />
                        })
                    }
                </div>
            </div>
            <div className="mt-5">
                <div className="text-primary font-semibold text-lg" >
                    Summary
                </div>
                <div>
                    {
                        summary.map((e) => {
                            return <Card1 description={e.description} name={e.name} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default function Header() {
    const [openTab, setOpenTab] = React.useState(1);
    const color = 'green';
    return (
        <div className="mt-4 xl:ml-6 py-4 bg-bgc justify-center mx-auto w-1/2 xl:w-1/5" >
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row w-64  m-auto"
                        role="tablist"
                    >
                        <li className="-mb-px last:mr-0 flex-auto text-center w-4">
                            <a
                                className={
                                    "text-xs font-bold py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 1
                                        ? "text-white bg-primary"
                                        : "text-primary bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                General
                            </a>
                        </li>
                        <li className="-mb-px  last:mr-0 flex-auto text-center w-4">
                            <a
                                className={
                                    "text-xs font-bold py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 2
                                        ? "text-white bg-primary"
                                        : "text-primary bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Your Company
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 ">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <General />
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <YourCompany />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}