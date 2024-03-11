import React, { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { getMap, getMapboxAPI } from '../api';
import './MapDetail.css';


export default function MapDetail(){
    const { id } = useParams();
    //const [map, setMap] = useState({});
    const [mapboxAPI, setMapboxAPI] = useState('');
    mapboxgl.accessToken = mapboxAPI;
    const mapContainer = useRef(null);
    const mapView = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    // obtain mapbox API key
    useEffect(() => {
        const fetchAPI = async () => {
            const res = await getMapboxAPI();
            setMapboxAPI(res.data.data);
        };

        fetchAPI().catch(console.error);
    }, []);

    useEffect(() => {
        if (mapView.current || !mapboxAPI) return; // initialize map only once
        mapboxgl.accessToken = mapboxAPI;
        mapView.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [lng, lat],
          zoom: zoom
        });
      });
    //useEffect(() => {
    //    fetchMap();
    //}, []);



    //const fetchMap = async () => {
    //    const res = await getMap({ id });
    //    setMap(res.data.data);
    //};


    //const formatDate = (date) => {
    //    let d = new Date(date),
    //        year = d.getFullYear(),
    //        month = '' + (d.getMonth() + 1),
    //        day = '' + d.getDate();
    //
    //    if (month.length < 2) month = '0' + month;
    //    if (day.length < 2) day = '0' + day;
    //    
    //    return [year, month, day].join('/');
    //};


    

    return (
        <div>
            <Header />
            {/* <p className="text-center text-3xl mt-20">The post ID is {id}, {map.mapName}</p>
            <p className="text-center text-3xl mt-20">Description: {map.mapDescription}</p>
            <p className="text-center text-3xl mt-20">Create at: {formatDate(map.createdAt)}</p> */}
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}