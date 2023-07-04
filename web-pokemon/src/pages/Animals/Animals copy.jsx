import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import ModalForm from '../../compartidos/ModalForm/ModalForm';


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

        //Esta funcion se ejecuta cada vez que se llama a 'localStorage', incluso entre renderizaciones lo que garantiza el valor actualizado 
        setAnimals(() => JSON.parse(localStorage.getItem('animals')));
        //setAnimals(getLocalStorage)

        //Cada vez que el estado 'change' se actualiza se ejecuta useEffect
    }, [change]);


    //Logica encargada de crear un item y agregarlo al localStorage
    function newAnimal() {

        //Seteo los datos con los valores en blanco. Para cuando pinte el formulario este limpio.
        setDatos({ id: '', species: '', image: '', location: '', excerpt: '', description: '' });

        //Para manejar logica de el submit del formulario seteo editItem a un valor 'falshy'
        setEditItem('');

        //Seteo open modal a true para que se abra el modal con el formulario gracias a un comonente colocado al final del 'html'
        setOpenModal(true);

        //Por estetica quiero desactivar el scroll del body (alguna otra idea?)
        const body = document.querySelector('body');
        body.classList.add('modal-open');
    };

    //Logica encargada de editar un item del localStorage
    const editAnimal = (e, animal) => {
        //Como todo el card es un link, realizo un prevent default para evitar el link y que realice el efecto del boton
        e.preventDefault();

        //Seteo los datos con los valores del card "objeto" al que hago click. Para cuando pinte el formulario se muestren.
        setDatos({ id: animal.id, species: animal.species, image: animal.img, location: animal.location, excerpt: animal.excerpt, description: animal.description })

        //Para manejar logica de el submit del formulario seteo editItem a un valor 'truthy' ademas de aprovechar para pasar el objeto del item clickado
        setEditItem(animal);

        //Seteamos 'openModal' a true para que se abra el modal con el formulario gracias a un comonente colocado al final del 'html'
        setOpenModal(true);

        //Por estetica quiero desactivar el scroll del body (alguna otra idea?)
        const body = document.querySelector('body');
        body.classList.add('modal-open');
    };

    //Logica encargado de borrar un item del localStorage
    const deleteAnimal = (e, animalId) => {
        //Como todo el card es un link, realizamos un 'preventDefault()' para evitar el link y que realice el efecto del boton
        e.preventDefault();

        //Mostramos un alert por si se arrepiente
        let sure = window.confirm("Seguro que deseas borrar este 'Pokemon', esto sera defitivo.");

        //Si estamos seguros, creamos un nuevo array con todos los objetos del local storage que sean diferentes al id al que apuntamos "borramos el item"
        //Y a continuacion actualizamos el valor en el localStorage
        if (sure) {
            const editLocalStorage = JSON.parse(localStorage.getItem('animals')).filter(animals => animals.id != animalId);

            //Seteamos el nuevo array al localStorage, esto pisara el 'key' con el mismo nombre
            localStorage.setItem('animals', JSON.stringify(editLocalStorage));

            //Cambiamos el estado de 'change' a true para que se ejecute el 'useEffect'
            setChange(true)
        };
    };

    //Logica encargada de manejar el estado data, segun los cambios que se realicen en el formulario
    const handleChange = (e) => {
        //Escuchamos que nombre y que valor se esta modificando
        const { name, value } = e.target;

        //Hacemos una copia del estado 'datos', modificando el valor del nombre que se esta modificando 
        setDatos((prevDatos) => ({
            ...prevDatos, [name]: value,
        }));
    };

    //Logica encargada de manejar el submit del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        const modifiedLocalStorage = JSON.parse(localStorage.getItem('animals'))

        //Si el estado 'editItem' es = 'falshy', estamos creando un nuevo item
        if (!editItem) {
            let maxId = 0;
            animals.forEach(objeto => {
                if (objeto.id > maxId) {
                    maxId = objeto.id;
                }
            });
            datos.id = maxId + 1
            modifiedLocalStorage.unshift(datos);
            localStorage.setItem('animals', JSON.stringify(modifiedLocalStorage));
        }

        //Si el estado 'editItem' es = 'truthy', estamos editando un item y 'editItem' contiene ese item 
        if (editItem) {
            //Creamos un nuevo array con los datos del locaStorage, pero modificando el item que coincida con el que le pasamos (el item a editar)
            const editLocalStorage = modifiedLocalStorage.map(animal => {

                //Con el map recorremos el localStorage, si encontramos una coincidencia de ID modificamos los valores de ESE objeto y lo devolvemos,
                //si no, devolvemos el objeto recorrido en ese momento

                //De esta manera generamos un nuevo arary que seteamos en el localStorage
                if (animal.id == editItem.id) {
                    animal.species = datos.species;
                    animal.image = datos.image;
                    animal.location = datos.location;
                    animal.excerpt = datos.excerpt;
                    animal.description = datos.description;

                    return animal; // Devuelve el objeto modificado

                } else {
                    return animal; // Devuelve el objeto original sin modificaciones
                };

            });

            //Seteamos el nuevo array al localStorage, esto pisara el 'key' con el mismo nombre
            localStorage.setItem('animals', JSON.stringify(editLocalStorage));
        };

        //Finalmente ocurra lo que ocurra 
        //Activamos el scroll del body (alguna otra idea?)
        const body = document.querySelector('body');
        body.classList.remove('modal-open');

        //Cambiamos el estado de 'change' a true para que se ejecute el 'useEffect'
        setChange(true);

        //Cambiamos el estado de 'openModal' a false para que se deje de mosrtar nuestro componente modal
        setOpenModal(false);

    };


    //Creamos un 'Componente' que retorna un formulario para editar o crear un nuevo item 'animal' y lo pintamos dentro del Comonente 'ModalForm'
    function formAnimal() {
        return (
            <form className='modal-form' onSubmit={handleSubmit}>
                <label>Species:
                    <input type="text" name='species' value={datos.species} onChange={handleChange} />
                </label>

                <label>Image:
                    <input type="text" name='image' value={datos.image} onChange={handleChange} />
                </label>

                <label>Location:
                    <input type="text" name='location' value={datos.location} onChange={handleChange} />
                </label>

                <label>Excerpt:
                    <textarea name="excerpt" cols="30" rows="5" value={datos.excerpt} onChange={handleChange}></textarea>
                </label>

                <label>Description:
                    <textarea name="description" cols="30" rows="10" value={datos.description} onChange={handleChange}></textarea>

                </label>
                <button>Send</button>
            </form>
        );
    };


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
                                        <img src={`${animal.img}`} alt='imgAnimal' height='200px' />
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
            {openModal ? <ModalForm setOpenModal={setOpenModal}>{formAnimal()}</ModalForm> : null}
        </section>
    );


};