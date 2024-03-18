import React from 'react';
import { useParams } from "react-router-dom";
import Header from '../components/Header';
import MapView from '../components/MapView';


export default function MapDetail(){
    return (
        <div>
            <div><Header /></div>
            <div><MapView /></div>
        </div>
    );
}