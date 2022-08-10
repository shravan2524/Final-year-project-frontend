import React from "react";
import Leftbar from "../Leftbar";

export default function Setup2() {
     return( 
        <div className="grid grid-cols-3 gap-2 h-screen">
        <div className="w-60 bg-grey text-center pt-36" id="leftbar">
            <Leftbar number={"92"} title={"90%Lorem Ipsum is simply dummy text of the printing"} />
        </div>
        <div className="w-10/12 col-span-2" id="respon1">
                <div className="w-9/12 min-w-max-content max-w-screen m-auto">
                    <div>
                        <h1 className="font-bold text-3xl">Set up your account</h1>
                        <span className="text-silver">PLease verify your below details. for changes</span> <a  href="/" className="text-linkc">e-mail us</a>
                    </div>
                    <div className="">
                        <div className="relative mt-4">
                            <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-bluec appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " placeholder=" " style={{ border: "1px solid #4AE8ED" }} />
                            <label for="floating_outlined" className="absolute text-sm text-silver dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-black dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 bg-white">E-mail</label>
                        </div>
                        <div className="relative mt-4">
                            <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-bluec appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " placeholder=" " style={{ border: "1px solid #4AE8ED" }} />
                            <label for="floating_outlined" className="absolute text-sm text-silver dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-black dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 bg-white">Password</label>
                        </div>
                        <div className="relative mt-4">
                            <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-bluec appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " placeholder=" " style={{ border: "1px solid #4AE8ED" }} />
                            <label for="floating_outlined" className="absolute text-sm text-silver dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-black dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 bg-white">Otp</label>
                        </div>
                        <span className="text-silver text-sm ">An OTP has been sent to the above e-mail address.</span>
                        <div className="mt-5">
                            <button className="bg-black hover:bg-silver text-white py-2 px-4  rounded">
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
}