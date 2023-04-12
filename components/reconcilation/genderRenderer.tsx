/* eslint-disable */
import React from 'react';
import { ICellRendererParams } from 'ag-grid-community';
export function GenderRenderer (props: ICellRendererParams) {
	const dat = props.value - props.data["Taxable - Invoice"];
	let col = "green";
	if(dat<0)col="red";

  
	console.log(dat);
  return (
    <span>
      <span style={{color: col}}>({dat} )</span>
      <span>{" "}{props.value}</span>
    </span>
  );
};
