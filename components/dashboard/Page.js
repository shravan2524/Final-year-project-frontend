import React, { useState, useEffect } from "react";
import Header from "./Header";
import LeftView from "./LeftView";
import RightView from "./RightView";
export default function Page() {
    return (
        <>
            <Header />
            <div className="container1">
                <LeftView />
                <RightView />
            </div>
        </>
    );
}