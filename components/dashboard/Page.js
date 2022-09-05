import React, {useState, useEffect} from "react";
import Header from "./Header";
import LeftView from "./LeftView";
import RightView from "./RightView";
export default function Page(){
    return(
        <>
        <Header />
        <div className="flex">
        <LeftView />
        <RightView />
        </div>
        </>
    );
}