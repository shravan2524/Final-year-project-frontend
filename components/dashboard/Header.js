import React, { useState, useEffect } from "react";

export default function Header() {
    return (
        <div className="p-6 mt-16">
            <div className="text-2xl">
                Hey <span className="text-primary font-semibold">Pankaj</span>
            </div>
            <div className="text-lg">
                Since you last logged in we have helped clients save  <span className="text-primary font-semibold">3,58,000INR</span>
            </div>
        </div>
    );
}