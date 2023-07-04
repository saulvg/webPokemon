// import vehicles from "../../data/dataVehicles/dataVehicles";
import { useEffect, useState } from "react";
import { Link, useResolvedPath } from "react-router-dom";


export default function Vehicles() {

    const path = useResolvedPath().pathname;
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        getVehicles();
    }, [])

    function getVehicles() {
        const getLocalStorage = JSON.parse(localStorage.getItem('vehicles'));
        setVehicles(getLocalStorage);
    }

    return (
        <section>

            <header className='section-title'>
                <h2>Vehiculos</h2>
            </header>

            <main>
                <div className='lista-container'>
                    {vehicles.map(vehicle =>
                        <Link to={`${path}/vehicle/${vehicle.id}`} key={vehicle.id}>
                            <article className="card shadows-cards">
                                <h3 className="title-card">{vehicle.vehicle}</h3>
                                {/* <img src={`${vehicle.img}` alt=""}></img> */}
                                <div className="body-card">
                                    <p>{vehicle.model}</p>

                                    <p>{vehicle.color}</p>
                                </div>
                                {/* <div className="footer-card"></div> */}

                            </article>
                        </Link>
                    )}
                </div>
            </main>
        </section>
    );
}