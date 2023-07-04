 //Creamos un 'Componente' que retorna un formulario para editar o crear un nuevo item 'animal' y lo pintamos dentro del Comonente 'ModalForm'
 function FormAnimal({datos, setDatos, editItem, item, nameItem, setChange, setOpenModal}) {

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
        
        const modifiedLocalStorage = JSON.parse(localStorage.getItem(nameItem))

        //Si el estado 'editItem' es = 'falshy', estamos creando un nuevo item
        if (!editItem) {
            let maxId = 0;
            item.forEach(objeto => {
                if (objeto.id > maxId) {
                    maxId = objeto.id;
                }
            });
            datos.id = maxId + 1
            modifiedLocalStorage.unshift(datos);
            localStorage.setItem(nameItem, JSON.stringify(modifiedLocalStorage));
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
            localStorage.setItem(nameItem, JSON.stringify(editLocalStorage));
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

export default FormAnimal