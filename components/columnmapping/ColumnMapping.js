import React, { useCallback, useEffect, useMemo, useRef, useState, } from 'react'
import Select from 'react-select'
import { columns2A, columns2B, columnsPR } from './DBColumns';
import { useRouter } from 'next/router';

export default function columnMapping() {
    const fileType = "2A";
    const router = useRouter();
    const { id } = router.query;
    const [loading, setloading] = useState(false);
    const [tempcols, settempcols] = useState([])
    const [contentPreview, setcontentPreview] = useState({
        AF: [
            'afnakfdnakfafa',
            'af;ajbfnklanjdfmad',
            'ak;fnbanflkajnfj',
        ],
        Year: [
            '2019',
            '2019',
            '2019',
        ],
        GSTIN: [
            '06AABCG9446Q2ZX',
            '06AABCG9446Q2ZX',
            '06AABCG9446Q2ZX',
        ],
         Period: [
            '2',
            '2',
            '2',
          ],
          Remarks: [
            '',
            '',
            '',
          ],
          Section: [
            'B2.00',
            'B2.00',
            'B2.00',
          ],
          'Recon Id': [
            '',
            '',
            '',
          ],
          'Tax Rate': [
            '18',
            '18',
            '18',
          ],
          'Cess(Amt)': [
            '',
            '0',
            '0',
          ],
          'Port Code': [
            '',
            '',
            '',
          ],
          'Unique ID': [
            '06AAACB2894G1ZRINVOICE2019-02-03759673833',
            '06AAACC9308A1Z7INVOICE2019-02-28R184HR07099',
            '06AAACC9308A1Z7INVOICE2019-02-28R184HR07100',
          ],
          'CGST (Amt)': [
            '8573.93',
            '15786.09',
            '43169.31',
          ],
          'IGST (Amt)': [
            '',
            '0',
            '0',
          ],
          'Legal Name': [
            'BHARTI AIRTEL LIMITED',
            'CBRE SOUTH ASIA PRIVATE LIMITED',
            'CBRE SOUTH ASIA PRIVATE LIMITED',
          ],
          'Trade Name': [
            'BHARTI AIRTEL LIMITED',
            'CBRE SOUTH ASIA PVT LTD',
            'CBRE SOUTH ASIA PVT LTD',
          ],
          'Reco Action': [
            '',
            '',
            '',
          ],
          ActualReason: [
            '',
            '',
            '',
          ],
      

    });

    const get_columns = async () => {
        const formData = new FormData();
        console.log(id)
        formData.append('id', String(id));
        try {
            const response = await fetch(' http://127.0.0.1:5000/get_file_details', {
                method: 'POST',
                body: formData,
            });
            const data1 = await response.json();
            console.log("agGridData", data1.file[0]);
            settempcols(data1.file)
            setcontentPreview(data1.file[0])
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        get_columns()
    }, [id])
    const [columnMapping, setColumnMapping] = useState({});
    const [cols, setCols] = useState({
        '2A': columns2A,
        '2B': columns2B,
        PR: columnsPR,
    });
    const [columnGroups, setColumnGroups] = useState([]);


    const setMapping = (k) => {
        
        const fn = (e) => {
            const columnName = e.target.value;
            const newColumnMapping = { ...columnMapping };
            newColumnMapping[k] = newColumnMapping[k] || {};
            newColumnMapping[k].columnName = columnName;
            if (!newColumnMapping[k].columnType) {
                const ct = cols[fileType].find((it) => it.columnName === columnName);
                newColumnMapping[k].columnType = ct?.columnType || 'string';
            }


            // set the mapping
            setColumnMapping(newColumnMapping);
            // console.log(newColumnMapping);
        };
        // console.log(cols);
        return fn;
    };


    const notSelectedColumnsFilter = (keyName) => (a) => !(
        Object.values(columnMapping).find(
            (x) => (
                x.columnName === a.columnName // see if (x) is already selected
                && columnMapping[keyName]?.columnName !== a.columnName// and add also what has been selected
            ),
        )
    );


    const upload = async () => {
        // setloading(true);
        console.log(columnMapping, tempcols);
        const formData = new FormData();
        formData.append('newcolumns', {columnMapping});
        formData.append('data', {tempcols});
        try {
            const response = await fetch(' http://127.0.0.1:5000/column_mapping', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({'newcolumns': columnMapping, 
                'data': tempcols,
                'id' : id,
            })
            });
            const data1 = await response.json();
            console.log("agGridData", data1.file[0]);
            settempcols(data1.file)
            setcontentPreview(data1.file[0])
        } catch (error) {
            console.error(error);
        }
        // const timer = setTimeout(() => {
        //     setloading(false);
        //     alert("Column Mapping Successfully")
        //     router.push('/');
        //     return () => clearTimeout(timer);
        //   }, 3000);
         

    }

    return (
        <div className='mt-32 m-auto'>
            <div className='text-xl font-medium ml-28'>
                Match Column
            </div>
            <div className='bg-gray pl-28 mt-8 p-2 list-none flex gap-10' style={{ background: "#f1f1f1" }}>
                <li className='p-2'>
                    1. Upload
                </li>
                <li className='p-2'> {">"} </li>
                <li className='font-semibold border-b-2 p-2 border-black'>2. Match Column</li>
            </div>
            <div className='w-[60%]  m-auto'>
                <div className='bg-gray my-8  list-none flex justify-around p-4 font-semibold' style={{ background: "#f1f1f1" }}>
                    <li>
                        Documents Field
                    </li>
                    <li > Map to Finkraft Field </li>
                    <li >Preview</li>
                </div>
                <div className='bg-[#f1f1f1]'>
                    {
                        contentPreview
                            ? (
                                Object.keys(contentPreview).map((keyName, i) => (
                                    <div key={i} className={`columnMapping ${columnMapping[keyName]?.columnName ? 'columnMappingActive' : ''}`} style={{
                                        display: "flex", justifyContent: "space-around", marginTop: "8px", borderBottom: "2px solid white", padding:
                                            "12px"
                                    }}>
                                        <div className='w-16 mt-8'>
                                            <span>{keyName}</span>
                                        </div>
                                        <div className='w-16 mt-8'>

                                            <select onChange={setMapping(keyName)} value={columnMapping[keyName]?.columnName} className="w-32 p-2 rounded-md">
                                                <option value="">-- column --</option>
                                                {
                                                    cols[fileType].filter(notSelectedColumnsFilter(keyName)).map((e, idx) => (<option key={idx} value={e.columnName}>{e.columnTitle || e.columnName}</option>))
                                                }
                                            </select>
                                        </div>
                                        <div className='w-[130px]'>
                                            <div className='border-b-2 border-secondary'>
                                                <span className='font-semibold'>{keyName}</span>
                                            </div>
                                            {
                                                contentPreview[keyName]
                                                
                                            }
                                        </div>
                                    </div>
                                )))
                            : null
                    }
                </div>
                <div className='m-auto my-4'>
                  <button onClick={upload} class="block m-auto rounded p-4 bg-primary hover:bg-secondary text-white">Upload File</button>
                   
                    </div>
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
