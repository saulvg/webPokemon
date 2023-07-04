

function useNewItem(setDatos, setEditItem, setOpenModal) {

     //Logica encargada de crear un item y agregarlo al localStorage
    function newItem() {

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
    return newItem
}

export default useNewItem