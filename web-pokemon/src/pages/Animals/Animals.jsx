import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import ModalForm from '../../compartidos/ModalForm/ModalForm';
import FormAnimal from '../../components/FormAnimal';
import { useDeleteItem, useEditItem, useNewItem } from '../../hooks';


export default function Animals() {

    const [animals, setAnimals] = useState([]);
    //Lo inicializamos a true para que el use effect se vuelva a ejecutar y cambie el esado de 'animals' a un array con los datos del local storage, si no no se actualiza el estado y el array en el primer pintado esta vacio
    //Cada vez que se ejecute un cambio invocamos useEffect al cambiar el estado
    const [change, setChange] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [datos, setDatos] = useState({ id: '', species: '', image: '', location: '', excerpt: '', description: '' })
    const [editItem, setEditItem] = useState('');


    //const [getLocalStorage, setGetLocalStorage] = useState([])

    useEffect(() => {
        //Reasignamos el estado 'change' a fale, para posibles nuevos cambios
        setChange(false);

        //Asignamos el valor actualizado del localStorage a 'getLocalStorage' tras cada cambio
        //setGetLocalStorage(JSON.parse(localStorage.getItem('animals')));

        //Esto llama a 'getLocalStorage' en el que se renderiza, si 'getLocalStorage' actualiza el estado entre renderizaciones no se reflejara en el estado
        //setAnimals(getLocalStorage)

        //Esta funcion se ejecuta cada vez que se llama a 'setAnimals', incluso entre renderizaciones lo que garantiza el valor actualizado 
        //setAnimals(() => getLocalStorage);
        setAnimals(() => JSON.parse(localStorage.getItem('animals')));
        //setAnimals(getLocalStorage)

        //Cada vez que el estado 'change' se actualiza se ejecuta useEffect
    }, [change]);

    //Logica encargada de crear un item y agregarlo al localStorage
    const newAnimal = useNewItem(setDatos, setEditItem, setOpenModal)

    //Logica encargada de editar un item del localStorage
    const editAnimal = useEditItem(setDatos, setEditItem, setOpenModal)

    //Logica encargado de borrar un item del localStorage
    const deleteAnimal = useDeleteItem(setChange)


    return (
        <section>
            <header className='section-title'>
                <h2>Animales</h2>
            </header>
            <main>
                <div className='lista-container'>
                    {animals.map(animal =>
                        <Link to={`/animal/${animal.id}`} key={animal.id}>
                            <article className='card shadows-cards'>

                                <h3 className='title-card'>{animal.species}</h3>
                                <div className='body-card'>
                                    <div className='card-img'>
                                        <img src={`${animal.image}`} alt='imgAnimal' height='200px' />
                                    </div>
                                    <p>
                                        {animal.excerpt}
                                    </p>
                                    <div className='footer-card'>
                                        <p>{'From->'}{animal.location}</p>
                                        <div>
                                            <button onClick={(e) => editAnimal(e, animal)} className='btn-card btn-card-edit'></button>
                                            <button onClick={(e) => deleteAnimal(e, animal.id)} className='btn-card btn-card-delete'></button>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    )}
                </div>
            </main>
            <button className='add-item' onClick={newAnimal}>+</button>

            {/* Si openModal es true, mostramos el 'componente' modal */}
            {openModal ? <ModalForm setOpenModal={setOpenModal}>{<FormAnimal datos={datos} setDatos={setDatos} editItem={editItem} item={animals} nameItem={'animals'} setChange={setChange} setOpenModal={setOpenModal} />}</ModalForm> : null}
        </section>
    );


};