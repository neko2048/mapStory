import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMap } from "../redux/mapSlice";
import Header from "../components/Header";

export default function AddMap() {
    const [mapName, setMapName] = React.useState("");
    const [mapDescription, setMapDescription] = React.useState("");
    
    const dispatch = useDispatch();

    const redirectToHome = () => {
        window.location.href = "/";
    };

    const handleAddMap = () => {
        dispatch(addMap({ mapName, mapDescription }));
        alert("Map added! Map Name: " + mapName);
        setMapName("");
        setMapDescription("");
        redirectToHome();
    };

    return (
        <div>
            <Header />
            {/* Add a fill-out table include MapName, MapDesciption*/}
            <div className="flex flex-col items-center justify-center mt-10">
                <input
                    type="text"
                    placeholder="Map Name"
                    value={mapName}
                    onChange={(e) => setMapName(e.target.value)}
                    className="border-2 border-gray-300 p-2 m-2"
                />
                <input
                    type="text"
                    placeholder="Map Description"
                    value={mapDescription}
                    onChange={(e) => setMapDescription(e.target.value)}
                    className="border-2 border-gray-300 p-2 m-2"
                />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                    onClick={handleAddMap}
                    className="mx-5 text-white font-medium px-5 py-2 bg-yellow-700/40 hover:bg-yellow-700/70 rounded-md mt-12 hover:scale-110 transition ease-in"
                >
                    發布文章
                </button>
            </div>
        </div>
    )
};