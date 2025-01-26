import React from "react";

export default function ImmoScanProtoImg(props) {
    return (
        <div className="flex justify-center items-center h-full">
            <img
                className="w-full h-auto"
                alt="ImmoScan App Prototype"
                src="/img/SVGS/example.png" // Ensure the file exists in the public folder
            />
        </div>
    );
}