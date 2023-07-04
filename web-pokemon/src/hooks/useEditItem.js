function useEditItem (setDatos, setEditItem, setOpenModal) {

    //Logica encargada de editar un item del localStorage
    const editItem = (e, animal) => {
        //Como todo el card es un link, realizo un prevent default para evitar el link y que realice el efecto del boton
        e.preventDefault();

        //Seteo los datos con los valores del card "objeto" al que hago click. Para cuando pinte el formulario se muestren.
        setDatos({ id: animal.id, species: animal.species, image: animal.image, location: animal.location, excerpt: animal.excerpt, description: animal.description })

        //Para manejar logica de el submit del formulario seteo editItem a un valor 'truthy' ademas de aprovechar para pasar el objeto del item clickado
        setEditItem(animal);

        //Seteamos 'openModal' a true para que se abra el modal con el formulario gracias a un comonente colocado al final del 'html'
        setOpenModal(true);

        //Por estetica quiero desactivar el scroll del body (alguna otra idea?)
        const body = document.querySelector('body');
        body.classList.add('modal-open');
    };

    return editItem

}

export default useEditItem