 function useDeleteItem(setChange) {

    //Logica encargado de borrar un item del localStorage
    const deleteItem = (e, animalId) => {
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

    return deleteItem

 }

 export default useDeleteItem