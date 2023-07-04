import React, { useEffect, useRef } from 'react';

const Map = () => {
    const mapRef = useRef(null);
    let map = null;
    let marker = null;

    useEffect(() => {
        const mapOptions = {
            center: { lat: 41.6560600, lng: -0.8773400 },
            zoom: 12,
        };
        map = new window.google.maps.Map(mapRef.current, mapOptions);

        // Ejemplo: Añadir un marcador
        marker = new window.google.maps.Marker({
            position: { lat: 41.6560600, lng: -0.8773400 },
            map: map,
            title: 'Mi marcador',
        });

        // Devuelve una función de limpieza para desmontar el mapa
        return () => {
            map = null;
        };
    }, []);

    return <div ref={mapRef} style={{ width: "100%", height: "400px" }}></div>;
};

export default Map;