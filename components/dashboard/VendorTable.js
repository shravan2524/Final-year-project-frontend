import React, { useState, useEffect } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';


const ProductTable = ({ products }) => {
    const router = useRouter();
    // function ColumnMapping({ item }) {
    //     console.log(item);
    //     return (
    //         <tr key={item.id} className="color-green">
    //             <td className='flex px-5 py-3 w-3/5'>
    //                 {item.fileName}
    //             </td>
    //             <td className="w-1/5 color-green"><p className='color-green'> {item.fileType}</p></td>
    //             <td className=' w-1/5 color-red'>{item.status}</td>
    //         </tr>
    //     )
    // }
    const [selectedRows, setSelectedRows] = useState([]);

    const handleRowSelection = (e, id) => {
        if (e.target.checked) {
            setSelectedRows([...selectedRows, id]);
        } else {
            setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
        }
    };

    const handleSubmit = () => {
        // Submit selectedRows array to backend or do something else
        console.log("Selected rows: ", selectedRows);
        router.push({
            pathname: '/reconcilation',
            query: { ids: selectedRows }
          });
    };
    function Validate({ item }) {
        return (
            <tr key={item._id}>
                <td>
                    <input
                        type="checkbox"
                        onChange={(e) => handleRowSelection(e, item._id)}
                        checked={selectedRows.includes(item._id)}
                    />
                </td>
                <td className=' w-1/5'> <a href={`file/${item._id}`}> {item.fileName} </a></td>
                <td className={`w-1/5 ${item.color === "green" ? "color-green" : item.color === "red" ? "color-red" : "color-orange"}`}>{item.fileType}</td>
                <td className=' w-1/5'>{item.status}</td>
                <td className=' w-1/5'>{item.action}</td>
            </tr>
        )

    }
    return (
        <table className='w-full bg-white'>
            <thead className='bg-bgc rounded-3xl border-white text-gray color-gray border-[25px]'>
                <tr>
                    <th className='p-4 w-[10px] rounded-xl'>
                        <button
                            type="button"
                            onClick={() => requestSort('name')}
                            className="float-left text-gray"
                        >
                            <span className='pr-2'>
                            </span>
                            <Image src="/downArrow.png" alt="me" width="15" height="10" />
                        </button>
                    </th>
                    <th className='p-4 w-2/5 rounded-xl'>
                        <button
                            type="button"
                            onClick={() => requestSort('name')}
                            className="float-left text-gray"
                        >
                            <span className='pr-2'>File Name
                            </span>
                            <Image src="/downArrow.png" alt="me" width="15" height="10" />
                        </button>
                    </th>
                    <th className='p-4 w-1/5 rounded-xl'>
                        <button
                            type="button"
                            onClick={() => requestSort('name')}
                            className="float-left text-gray"
                        >
                            <span className='pr-2'>File Type
                            </span>
                            <Image src="/downArrow.png" alt="me" width="15" height="10" />
                        </button>
                    </th>
                    <th className='p-4 w-1/5 rounded-xl'>
                        <button
                            type="button"
                            onClick={() => requestSort('name')}
                            className="float-left text-gray"
                        >
                            <span className='pr-2'>Status
                            </span>
                            <Image src="/downArrow.png" alt="me" width="15" height="10" />
                        </button>
                    </th>
                    <th className='w-3/5'>
                        <button
                            type="button"
                            onClick={() => requestSort('stock')}
                            className="float-left"
                        ><span className='pr-2'>Actions
                            </span>
                            <Image src="/downArrow.png" alt="me" width="15" height="10" />
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody className='h-[8rem] overflow-y-scroll' >
                {products.map((item) => (<Validate item={item} />
                ))}
            </tbody>
            <button onClick={handleSubmit}>Submit</button>
        </table>
    );
};

export default function VendorTable() {
    const router = useRouter();
    const [loading, setloading] = useState(false);
    const [files, setfiles] = useState([])
    const get_files = async () => {
        const formData = new FormData();
        formData.append('email', 'abc@abc.com');
        try {
            const response = await fetch(' http://127.0.0.1:5000/get_files', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            // console.log(data);
            setfiles(data)
            console.log(files)
        } catch (error) {
            console.error(error);
        }

    }
    useEffect(() => {
        get_files()
    }, [])


    function upload() {
        setloading(true);
        console.log(loading);
        const timer = setTimeout(() => {
            setloading(false);


            alert("Reconcilation Successfull")
            router.push('/reconcilation');

            return () => clearTimeout(timer);
        }, 10000);

    }
    return (
        <div className="App">
            <ProductTable
                products={files}
            />
            {/* {
                files && files.file
                ? console.log(files)
                : console.log(files)
            } */}
            <div className='m-auto my-4'><button onClick={upload} class="block m-auto rounded p-4 bg-primary hover:bg-secondary text-white">Reconcile Select file</button></div>
            {
                loading
                    ? <div class="backdrop-filter backdrop-blur-sm fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-secondary opacity-75 flex flex-col items-center justify-center">
                        <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                        <h2 class="text-center text-xl font-semibold">We are reconciling your files...</h2>
                        <p class="w-1/3 text-center">This may take a few seconds, please don't close this page.</p>
                    </div>
                    : null}
        </div>
    );
}
