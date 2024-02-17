import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getMap } from '../api';

export default function MapDetail(){
    const { id } = useParams();

    const [map, setMap] = useState({});

    useEffect(() => {
        fetchMap();
    }, []);

    const fetchMap = async () => {
        const res = await getMap({ id });
        setMap(res.data.data);
    };

    return (
        <div className="">
            <Header />
            <p className="text-center text-3xl mt-20">The post ID is {id}, {map.mapName}</p>
        </div>
    );
}