import React from 'react';
import { useParams } from "react-router-dom";
import Header from '../components/Header';
import MapView from '../components/MapView';
import NaviBar from '../components/naviBar';


export default function MapDetail(){
    return (
        <div>
            <div><Header /></div>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 0.2 }}><NaviBar /></div>
                <div style={{ flex: 1 }}><MapView /></div>
            </div>
        </div>
    );
}