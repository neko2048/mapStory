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

    const formatDate = (date) => {
        let d = new Date(date),
            year = d.getFullYear(),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('/');
    };

    return (
        <div className="">
            <Header />
            <p className="text-center text-3xl mt-20">The post ID is {id}, {map.mapName}</p>
            <p className="text-center text-3xl mt-20">Description: {map.mapDescription}</p>
            <p className="text-center text-3xl mt-20">Create at: {formatDate(map.createdAt)}</p>
        </div>
    );
}