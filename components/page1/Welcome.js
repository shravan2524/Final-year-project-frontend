import React from "react";
import Leftbar from "../Leftbar";
import Link from 'next/link'
export default function welcome() {
    return (
        <div className="grid grid-cols-3 gap-2 h-screen">
            <div className="w-60 bg-grey text-center pt-36" id="leftbar">
                <Leftbar number={"62"} title={" Lorem Ipsum is simply dummy text of the printing"} />
            </div>
            <div className="w-10/12 col-span-2" id="respon1">
                <div className="w-9/12 min-w-max-content max-w-screen m-auto">
                    <div>
                        <h1 className="font-bold text-3xl">Welcome</h1>
                        <p className="text-silver">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                    </div>
                    <div className="py-10">
                        <div className="relative">
                            <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-bluec appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " placeholder=" " style={{ border: "1px solid #4AE8ED" }} />
                            <label for="floating_outlined" className="absolute text-sm text-silver dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-black dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 bg-white">GST Number</label>
                        </div>
                        <div className="flex py-5 text-silver">
                            <input type="checkbox" />
                            <div>
                                <span className="pl-2">I agree to the</span> <a href="/" className="text-linkc">Terms and conditions</a> <spna>and</spna> <a href="/" className="text-linkc">the privacy</a>
                            </div>
                        </div>
                        <div>
                            <button className="bg-black hover:bg-silver text-white py-2 px-4  rounded">
                                Continue
                            </button>
                            <div className="mt-5" style={{ borderTop: "1px solid" }}></div>
                            <div className="mt-5 text-silver">
                            Already have an account ? <Link href="/login"><a className="text-linkc">Sign in </a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}