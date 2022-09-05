import React, { useState, useEffect } from "react";

export default function Header() {
    return (
        <div className="p-6">
            <div style={{ fontSize: "32px" }}>
                Hey <span className="text-primary font-semibold">Pankaj</span>
            </div>
            <div style={{ fontSize: "20px" }}>
                Since you last logged in we have helped clients save  <span className="text-primary font-semibold">3,58,000INR</span>
            </div>
        </div>
    );
}