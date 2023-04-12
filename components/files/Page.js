import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

export default function Page() {

    
    const [products, setproducts] = useState({});
    const [loading, setloading] = useState(false);
    const router = useRouter();
    function Card({ name, img }) {
        return (
            <div className='p-4 flex justify-between w-[30%] h-18 mb-4 m-auto rounded' style={{ background: "#f1f1f1" }}>
                <div>
                    <img src={img} height="50px" width="50px"></img>
                </div>
                <div>
                    <p className='mt-3'>
                        {name}</p>
                </div>
            </div>
        )

    }

    
    const upload = () => {
        setloading(true);
        console.log(loading);
        const timer = setTimeout(() => {
            setloading(false);
            // console.log(temp);
            // const modifiedObj = [{ id: 1, img: '/qatarAirways.png', name: 'File1', documentType: '2A', lastEdit: 'Jul 18, 2020', status: 'Mapped', action: 'Created File', price: 4.9, stock: 20, color :"green"     }];
            //  temp = [...temp, modifiedObj] 
            // modifiedObj.push(temp);
            // console.log(temp, modifiedObj);
            // localStorage.removeItem('products');
            // localStorage.setItem("products", temp);
            localStorage.setItem("temp", 1);
            alert("File upload Successfully")
            router.push('/matchcolumn');
            return () => clearTimeout(timer);
          }, 3000);
         

    }

    const dropings = [
        {
            img: "data:image/png;base64,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",
            name: "Connect to Google Drive",
        },
        {
            img: "data:image/png;base64,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",
            name: "Connect to Dropbox",
        },
        {
            img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADgCAMAAADCMfHtAAAAflBMVEUAeNT///8AcdIAddMAc9MAb9IAbdEAdNMAa9Gkwuoqhtimxet/ruRPlNxYmd3g6vfQ3/TG2vLy+P1AjdoAZc/s9PuLteYXftaXvOjn8Pq0z+7d6fd8rOOdv+looeC91PCwzO0AYs4/jNp0p+IkgtdWmN3T5PYAXs6Ot+YDfNaX1EA+AAAGYklEQVR4nO2Z63KqSBSFoW8QQUVQBE3AaMLR93/B2bsBuYg5mplUqqbW9yMHEJpe+9a7OY4DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAhPCGE8n57Fj+HlqegLN8KJX57Jj+DcnZuw277f9QoFm6P0Pz2fP5LpKQ/4uQOePlSolRKKCWfe4vl3s+ec1HPDPc4yjhJ4hiduCPS+4Eq/NlrFryFM/PEpI4zy1YYPfGUpAgKf0KiNGHOcvL6nwEfd+wtzXnT3JK/+g/6Uc6u48arUN5YT6xoNP1vpNx573YsbLO/XllNx6lK4nqi9u/+8pjEnkIm0KPH1Kvrvv2ED4fyyk/z/v6+Ph7q08kn1CerO39oX8wyPtw+JJEVlouiKF7fVtb7Y8uIZP4D9dvs+/r22/fiUOX7slg79oepvJAf7F0teH5SiIrm+lDVZYWB8TxPKS3OHCxjPfeL0PfxioED/yziNlMW7xGH0oRCnzSVfndKpsgesb1V2N4oZvSm3Q9k3Rgd9QRWf9Le2dlPxfta36wHkmI07jnNupQNIbTgGutcTJdhUpuL05wPFFIu02MXPtCkUxhf0810o9Ld015zrIy4SPO9CBZ9F8rBgu8WxyDaR28fI0PrkoJXjC68KkfsopVWAQdBNGtcrz+tBVeJuFHoGHosU44KqshIOo7MvKoKca6qRSPRK+iCpMKdLjmqAuc7QfzRL27r2J3iMJSo6dLAnB4ZphSOXrqxaEdI7GTMoR0j1DcK5ZyixtgoWvPSs/R5PRTzroIbSgcSeLmW9tnTEqXuV1LndVIg1Z9+IeF5RiO32lpDCjd79zCfFTSjDT9iqMndhMeE6+1cjhVy/MQ+K4wDN8reSmNXfH9Tx3wd/pSpgi5ExeyTBoufDVQzX/W8lr9XdxQO5sW1KRi+yY/Zq5pDaWGkVD5JpEhj3+6NkFKQtKW5UWisFlsJzr4Sou5pVGZjnuCjRGpSlvmelP756eWSE6HzU7j17wkcLIsqpAkNX2TyVmFgva1OVoqhC3XqmMB1j3KsUO85CFlhZStz07VdOCWbYXPf2dJpXbjJu5unNgNm1SmI53+Ob6v7Cl+7HbFKb/rVTmGz9G85MVnQwdhWm1uEVN34cM+mY4WF11PI2WdPk9alc2VH4ay+PCGwvxJW/vG2J+3z0k1soreicIu1rTSNiQV3BOzsdF5jI3sqSrVVWM+7Ueid2Bw0yMHajX5O6kGSwKbzw/RWwtgvvlDHlPJaW2RdOQdDtZUm1tcL1PO8DIbY3SiU9WM0D9NXyPbh2mZsnTFD0xdPKDRdkSm8vwhkjVe3bd1ROnA4NatFo9D6UATDAcYKOYgOtZP8ocIDb2r4Z1pzzGYwyjMKdffYOvu7wq6JZKsm/RexFKp+NwrJh4kWLTerhR/ZoLtVyBbLlF5x/eW3xWvRG+VxzHXu1fqLGtPRTo5zf+X3RlL0I5WKsULOw1M/YYcKBflo7zsTCh3fFtE6G/nnb2449HVTUa7vLoQDWlUc00XPF2U98bFCG7zjXqHrvI9uHQoTCnnjMQtrZRwJxfc2jWzimtU6ui+rx6X/5KKZu/SDptcYK7Qp1Dao4tJXKIXhHv/Mt08o5CYpq+qdhyRL5I1tpXhmsXDsgmxZroMvdHVcP2nYVmG3NZp2BHP2/1FOKeR1JT4ayh7jlLTesMIXn063C9ufZ9ZIUwopB6Nrb0tHkdBKCX+eH5/78OW01ZR74AfomtG6o85XZWSHSOppjRU6Pud39XZ+qewSOvyKsZnXN08ptGv1so1wfkeZnQ95Y8onJKrm82+wHmz071D12m1TdMvUTtYNj86vRhBNc97tLfJEDhRWJ9NMVlcTUcplMG0CXG7bYHNXT+mzo19O5yzLzqK/ibrHZ99+npkH0TKvytBphXunNGyaOxmm9cKlZ0GVL6NgYfVs05BJT3Olr22gV6Ttp5JZmjbLkLdI084Tptjt8/0qm33nE7UnFEF2+muxCUc1WwptKBN7Zc5T15Prl2KqKXyXbC9bvEGsTT3Gn5sHs9RG335teAppPsKXL0j/B/+LwR/p7/NDX9sBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAv8w/oi5P52fBgkwAAAAASUVORK5CYII=",
            name: "Connect to Microsoft Onedrive",
        },

    ]
    return (
        <div className='mt-32 m-auto'>
            <div className='text-xl font-medium ml-28'>
                Add Files
            </div>
            <div className='bg-gray pl-28 mt-8 p-2 list-none flex gap-10' style={{ background: "#f1f1f1" }}>
                <li className='font-semibold border-b-2 p-2 border-black'>
                    1. Upload
                </li>
                <li className='p-2'> {">"} </li>
                <li className='p-2'>2. Match Column</li>
            </div>
            <div class=" items-center justify-center w-[30%] m-auto mt-32">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-[#f1f1f1] border rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p class="mb-2 text-lg text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                    </div>
                    <input id="dropzone-file" type="file"  />
                </label>
                <div className='mt-8 align-center m-auto'>
                    <span>
                        Some of the popular file formats we support are .csv, .xlx and .pdf.
                    </span>
                </div>
                <div className='m-auto my-4'><button onClick={upload} class="block m-auto rounded p-4 bg-primary hover:bg-secondary text-white">Upload File</button></div>
            </div>
            <div>

            </div>
            <div className='m-auto'>
                {
                    dropings
                        ? dropings.map((e) => {
                            return <Card name={e.name} img={e.img} />
                        })
                        : null
                }
            </div>
            {
                loading
                ? <div  class="backdrop-filter backdrop-blur-sm fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-secondary opacity-75 flex flex-col items-center justify-center">
                <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                <h2 class="text-center text-xl font-semibold">Uploading...</h2>
                <p class="w-1/3 text-center">This may take a few seconds, please don't close this page.</p>
            </div>
            : null}
        </div>
    )
}
