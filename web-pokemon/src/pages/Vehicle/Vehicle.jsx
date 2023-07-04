import { useParams } from "react-router-dom";
import vehicles from "../../data/dataVehicles/dataVehicles";
import { useEffect, useState } from "react";
import { ErrorMessage } from '../../compartidos';


export default function Vehicle() {

    const {id} = useParams()

    const [vehicle, setVehicle] = useState({}); // siempre hay que inicializarlo pero como sé que recojo array, inicialiizamos a array vacío

    useEffect(() => {
        getVehicle(id);
    }, [])

    const getVehicle = (id) => {
        const getLocalStorage = JSON.parse(localStorage.getItem('vehicles'));
        const getV = getLocalStorage.filter(vehicle => vehicle.id == id);
        getV.length > 0 ? setVehicle(getV[0]) : setVehicle({});
    }

    return(
        <>
            <section>
                <header>Vehiculos</header>
                <main>
                    {vehicle ?
                        (
                            <article>
                                <h3>{vehicle.vehicle}</h3>
                                <div>
                                    <p>{vehicle.model}</p>
                                    <p>{vehicle.color}</p>
                                </div>
                            </article>
                        )
                    : 
                        (
                            <ErrorMessage message={'Vehiculos no encontardos'}/>
                        )
                    }
                </main>
            </section>
        </>
    )
}