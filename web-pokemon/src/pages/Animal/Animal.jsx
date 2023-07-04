import { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom'


export default function Animal() {

    const { id } = useParams();

    const [animal, setAnimal] = useState({});
    const navigate = useNavigate();


    useEffect(() => {
        getAnimal(id);
    }, [id]);


    const getAnimal = (id) => {
        const getLocalStorage = JSON.parse(localStorage.getItem('animals'));
        const getA = getLocalStorage.filter(animal => animal.id == id);
        getA.length > 0 ? setAnimal(getA[0]) : setAnimal({});
    };

    if (!animal.id) {
        navigate("/not-found")
    }

    return (
        <section>
            <header>
                <h2>Animales</h2>
            </header>
            <main>
                <article>
                    <h3>{animal.species}</h3>
                    <div>
                        <img src={`${animal.image}`} alt='imgAnimal' />
                        <p>
                            {animal.description}
                        </p>
                    </div>
                    <span>{'From->'}{animal.location}</span>
                </article>
            </main>
        </section>
    );
};