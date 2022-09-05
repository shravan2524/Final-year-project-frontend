import React from 'react';

import Image from 'next/image';

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
    return (
        <table className='w-full bg-white'>
            <thead className='bg-bgc rounded-3xl border-white text-gray color-gray' style={{ borderWidth: "25px" }}>
                <tr>
                    <th style={{ width: "70%", padding: "1rem" }}>
                        <button
                            type="button"
                            onClick={() => requestSort('name')}
                            className="float-left text-gray"
                        >
                            <span className='pr-2'>Name
                            </span>
                            <Image src="/downArrow.png" alt="me" width="15" height="10" />
                        </button>
                    </th>
                    <th style={{ width: "10%" }}>
                        <button
                            type="button"
                            onClick={() => requestSort('price')}
                            className="float-left"
                        >
                            <span className='pr-2'>Last Edit
                            </span>
                            <Image src="/downArrow.png" alt="me" width="15" height="10" />
                        </button>
                    </th>
                    <th>
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
            <tbody >
                {items.map((item) => (
                    <tr key={item.id}>
                        <td className='flex px-5 py-3'>
                            <div className='pr-4'><Image src={item.img} alt="me" width="30" height="30" /></div>
                            {item.name}
                        </td>
                        <td>{item.lastEdit}</td>
                        <td>{item.action}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default function VendorTable() {
    return (
        <div className="App">
            <ProductTable
                products={[
                    { id: 1, img: '/qatarAirways.png', name: 'Qatar Airways', lastEdit: 'Jul 18, 2020', action: 'Created File', price: 4.9, stock: 20, },
                    { id: 2, img: '/yatra.png', name: 'Yaatra', lastEdit: 'Jul 18, 2020', action: 'Uploaded File', price: 1.9, stock: 32 },
                    { id: 3, img: '/airIndia.png', name: 'Air India', lastEdit: 'Jul 18, 2020', action: 'Report Edited', price: 2.4, stock: 12 },
                    { id: 4, img: '/airAsia.png', name: 'Air Asia', lastEdit: 'Jul 18, 2020', action: 'Imported File', price: 3.9, stock: 9 },
                    { id: 5, img: '/indigo.png', name: 'Indigo', lastEdit: 'Jul 18, 2020', action: 'Uploaded and Validated File', price: 0.9, stock: 99 },
                ]}
            />
        </div>
    );
}
