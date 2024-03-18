import React, { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { getMapboxAPI } from '../api';
import './style/MapView.css';


export default function MapView(){
    const { id } = useParams();
    //const [map, setMap] = useState({});
    const [mapboxAPI, setMapboxAPI] = useState('');
    mapboxgl.accessToken = mapboxAPI;
    const mapContainer = useRef(null);
    const mapView = useRef(null);
    const [lng, setLng] = useState(121.53897776845785);
    const [lat, setLat] = useState(25.014753535796636);
    const [zoom, setZoom] = useState(9);

    // obtain mapbox API key
    useEffect(() => {
        const fetchAPI = async () => {
            const res = await getMapboxAPI();
            setMapboxAPI(res.data.data);
        };

        fetchAPI().catch(console.error);
    }, []);


    // render map
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

    return (
        <div ref={mapContainer} className="map-container" />
    );
}