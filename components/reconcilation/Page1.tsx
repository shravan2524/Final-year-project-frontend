/* eslint-disable */
import React, {
    useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { useParams } from 'react-router-dom';
import { useRouter } from 'next/router';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import "ag-grid-community/styles/ag-grid.css";
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {

    AreaSparklineOptions,
    BarFormatterParams,
    BarSparklineOptions,
    CellClassRules,
    ColDef,
    ColGroupDef,
    ColumnFormatterParams,
    ColumnSparklineOptions,
    Grid,
    GridOptions,
    LineSparklineOptions,
    ICellRendererParams,
    MarkerFormatterParams,
} from 'ag-grid-community';
import { Blob } from 'buffer'
import { json } from 'stream/consumers';



export default function Page1() {
    const [agGridData, setagGridData] = useState([]);
    const router = useRouter();
    const { id } = router.query;
    const gridRef = useRef<any>();
    const [rowData, setRowData] = useState<any>();

    const [rowData1, setRowData1] = useState<any>();

    const containerStyle = useMemo(
        () => ({ width: '100%', height: '600px', marginTop: '8rem', }),
        [],
    );
    const get_files = async () => {
        const formData = new FormData();
        console.log(id)
        formData.append('id', String(id));
        try {
            const response = await fetch(' http://127.0.0.1:5000/get_file_details', {
                method: 'POST',
                body: formData,
            });
            const data1 = await response.json();
            setRowData(data1.file);
            console.log("agGridData", data1.file);
            columnsdef(data1.file[0])
        } catch (error) {
            console.error(error);
        }
    }
    // const get_files = async () => {
    //     try {
    //         const response = await fetch(' http://127.0.0.1:5000/reconcile', {
    //             method: 'POST',
    //             mode: 'cors',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //               },
    //             body: JSON.stringify({'fileId1': "644244775ea08545ae706c0c", 
    //             'fileId2': "6442446e5ea08545ae706c0b",
    //         })
    //         });
    //         const data = await response.json();
    //         setRowData(data[0]);
    //         console.log("agGridData", data[0]);
    //         columnsdef(data[0])
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    useEffect(() => {
        get_files()
    }, [id])

    const gridStyle = useMemo(() => ({ height: '85vh', width: '100%' }), []);
    function cellStyle(params: any) {
        console.log(params);
        const errors = params.data.errors?params.data.errors:[];
        const found = errors.includes(params.colDef.field);
        console.log(errors, 'shravan', found)
        if(found){
            return {
          border: '2px solid red',
        }
        }
      }
    const [columnDefs, setColumnDefs] = useState([
        { field: 'Invoice UUID' ,  cellStyle: cellStyle,},
        { field: 'Customer GSTIN' ,  cellStyle: cellStyle,},
        { field: 'Supplier Name' ,  cellStyle: cellStyle,},
        { field: 'Supplier GSTIN' ,  cellStyle: cellStyle,},
        { field: 'Doc Type' ,  cellStyle: cellStyle,},
        { field: 'Taxable Amount' ,  cellStyle: cellStyle,},
        { field: 'CGST Amount' ,  cellStyle: cellStyle,},
        { field: 'Cess Amount' ,  cellStyle: cellStyle,},
        { field: 'IGST Amount' ,  cellStyle: cellStyle,},
        { field: 'SGST Amount' ,  cellStyle: cellStyle,},
        { field: 'Filing Period' ,  cellStyle: cellStyle,},
        { field: 'Invoice Date' ,  cellStyle: cellStyle,},
        { field: 'Invoice Date Gap' ,  cellStyle: cellStyle,},
        { field: 'Invoice Number Match' ,  cellStyle: cellStyle,},


    ]);

    function columnsdef(col:any){
        console.log(col, 'shravan')
        const tempcols=[];
        for(var i in col){
            tempcols.push({"field" : i});
        }
        console.log(tempcols)
        // setColumnDefs(tempcols);
        // setcolumns(tempcols);
    }

    const onBtExport = useCallback(() => {
        gridRef.current!.api.exportDataAsExcel();
    }, []);
    const [columns, setcolumns] = useState(columnDefs);
    const defaultColDef = useMemo(() => ({
        sortable: true,
        filter: true,   
        // resizable: true,
        // floatingFilter: true,
        // enableRowGroup: true,
        // editable: true,
        // enablePivot: true,
        // enableValue: true,
    }), []);

    const icons = useMemo<{
        [key: string]: Function | string;
    }>(() => {
        return {
            // use font awesome for menu icons
            'custom-stats': '<i class="fa-solid fa-chart-column"></i>',
            menu: '<i class="fa fa-bath" style="width: 10px"/>',
            filter: '<i class="fa fa-long-arrow-alt-down"/>',
            columns: '<i class="fa fa-handshake"/>',
            sortAscending: '<i class="fa fa-long-arrow-alt-down"/>',
            sortDescending: '<i class="fa fa-long-arrow-alt-up"/>',
            // use some strings from group
            groupExpanded: '<i class="fa fa-arrow-up"/>',
            groupContracted: '<i class="fa fa-arrow-down"/>',
            rowDrag: '<i class="fa fa-solid fa-up-down-left-right" style="color:grey;font-size:10px;" />',
        };
    }, []);

    return (
        <div >
            <div style={containerStyle}>
                <div>
                    <button
                        onClick={onBtExport}
                        style={{ marginBottom: '5px', fontWeight: 'bold' }}
                    >
                        Export to Excel
                    </button>
                </div>
                {/* {console.log(rowData)} */}
                <div style={gridStyle} className="ag-theme-alpine">
                    <AgGridReact
                        ref={gridRef}
                        rowData={rowData}
                        columnDefs={columns}
                        rowSelection="multiple"
                        rowDragManaged
                        rowDragMultiRow
                        rowGroupPanelShow="always"
                        defaultColDef={defaultColDef}
                        groupDisplayType="multipleColumns"
                        animateRows
                        icons={icons}
                    />
                </div>

            </div>

        </div>
    );
}
