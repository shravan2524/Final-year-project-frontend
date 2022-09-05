import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';

const dateComparator = (date1, date2) => {
    const date1Number = monthToComparableNumber(date1);
    const date2Number = monthToComparableNumber(date2);
    if (date1Number === null && date2Number === null) {
      return 0;
    }
    if (date1Number === null) {
      return -1;
    }
    if (date2Number === null) {
      return 1;
    }
    return date1Number - date2Number;
  };
  
  // eg 29/08/2004 gets converted to 20040829
  const monthToComparableNumber = (date) => {
    if (date === undefined || date === null || date.length !== 10) {
      return null;
    }
    const yearNumber = Number.parseInt(date.substring(6, 10));
    const monthNumber = Number.parseInt(date.substring(3, 5));
    const dayNumber = Number.parseInt(date.substring(0, 2));
    return yearNumber * 10000 + monthNumber * 100 + dayNumber;
  };
export default function AgGrid() {
    const gridRef = useRef();
    var ageType = 'everyone';
    const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
    const [rowData, setRowData] = useState();
    const [selected, setselected] = useState([]);

    const defaultColDef = useMemo(() => {
        return {
            sortable: true,
            resizable: true,
            filter: true,
            flex: 1,
            minWidth: 200,
            enableValue: true,
            enableRowGroup: true,
            enablePivot: true,
        };
    }, []);
    const onGridReady = useCallback((params) => {
        fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
            .then((resp) => resp.json())
            .then((data) => setRowData(data));
    }, []);


    const [columnDefs, setColumnDefs] = useState([
        { field: 'athlete', sort: 'desc' },
        { field: 'age', width: 90 },
        { field: 'country' },
        { field: 'year', width: 90, unSortIcon: true },
        { field: 'date', comparator: dateComparator },
        { field: 'sport' },
        { field: 'gold' },
        { field: 'silver' },
        { field: 'bronze' },
        { field: 'total' },
      ]);
    const onBtExport = useCallback(() => {
        gridRef.current.api.exportDataAsExcel();
    }, []);


    const onFirstDataRendered = useCallback((params) => {
        setTimeout(function () {
            gridRef.current.api.getDisplayedRowAtIndex(1).setExpanded(true);
        }, 0);
    }, []);

    const onSelectionChanged = useCallback(() => {
        var selectedRows = gridRef.current.api.getSelectedRows();
        setselected(selectedRows);
    }, []);

    return (
        <div className='hello'>
            <div className="ag-theme-alpine" style={{ width: "90%", height: 600, margin: "auto", marginTop: "5rem" }}>
                <AgGridReact
                    ref={gridRef}
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    rowSelection="multiple"
                    rowDragManaged
                    animateRows={true}
                    onGridReady={onGridReady}
                    onFirstDataRendered={onFirstDataRendered}
                    onSelectionChanged={onSelectionChanged}
                />
            </div>
        </div>
    )
}