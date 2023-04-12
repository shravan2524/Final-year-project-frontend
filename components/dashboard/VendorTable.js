import React, {useState, useEffect} from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';



const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);

    

    const sortedItems = React.useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props) => {
    const { items, requestSort, sortConfig } = useSortableData(props.products);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    function ColumnMapping({item}){
        console.log(item);
        return (
            <tr key={item.id} className="color-green">
                        <td className='flex px-5 py-3 w-3/5'>
                            {item.name}
                        </td>
                        <td className="w-1/5 color-green"><p className='color-green'> {item.documentType}</p></td>
                        <td className=' w-1/5 color-red'>{item.status}</td>
                        <td className=' w-1/5 color-red'>{item.action}</td>
                    </tr>
        )
    }

    function Validate({item}){
        return(
            <tr key={item.id}>
                <td>
                    <input type="checkbox" />
                </td>
                        <td className='flex px-5 py-3  w-3/5'>
                            {item.name}
                        </td>
                        <td className={`w-1/5 ${item.color==="green"?"color-green" : item.color==="red"?"color-red":"color-orange"}`}>{item.documentType}</td>
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
                {items.map((item) => (
                     item.color==="red"
                    ?  <ColumnMapping item={item}/>
                    : <Validate item={item}/>
                ))}
            </tbody>
        </table>
    );
};

export default function VendorTable() {
    const router = useRouter();
    const [loading, setloading] = useState(false);
    const [products, setproducts] = useState([
        { id: 1, img: '/qatarAirways.png', name: 'File1', documentType: '2A', lastEdit: 'Jul 18, 2020', status: 'Mapped', action: 'Created File', price: 4.9, stock: 20, color :"green"     },
        { id: 2, img: '/yatra.png', name: 'File2',documentType: '2B', lastEdit: 'Jul 18, 2020', status: 'Not Mapped', action: 'Uploaded File', price: 1.9, stock: 32 , color : "orange"},
    ])
    useEffect(() => {
        const temp = localStorage.getItem("temp");
        console.log(temp)
    if(temp==1){
        setproducts([
            { id: 2, img: '/yatra.png', name: 'File3',documentType: '2B', lastEdit: 'Jul 18, 2020', status: 'Not Mapped', action: 'Uploaded File', price: 1.9, stock: 32 , color : "orange"},
            { id: 1, img: '/qatarAirways.png', name: 'File1', documentType: '2A', lastEdit: 'Jul 18, 2020', status: 'Mapped', action: 'Created File', price: 4.9, stock: 20, color :"green"     },
            { id: 2, img: '/yatra.png', name: 'File2',documentType: '2B', lastEdit: 'Jul 18, 2020', status: 'Not Mapped', action: 'Uploaded File', price: 1.9, stock: 32 , color : "orange"},
        ])
    }
    console.log(products)
    }, [])
    
   
    function upload(){
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
                products={products}
            />
            <div className='m-auto my-4'><button onClick={upload} class="block m-auto rounded p-4 bg-primary hover:bg-secondary text-white">Reconcile Select file</button></div>
            {
                loading
                ? <div  class="backdrop-filter backdrop-blur-sm fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-secondary opacity-75 flex flex-col items-center justify-center">
                <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                <h2 class="text-center text-xl font-semibold">We are reconciling your files...</h2>
                <p class="w-1/3 text-center">This may take a few seconds, please don't close this page.</p>
            </div>
            : null}
        </div>
    );
}
