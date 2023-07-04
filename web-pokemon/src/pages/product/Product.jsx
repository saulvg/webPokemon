import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ErrorMessage } from "../../compartidos";

export default function Product() {
    let { id } = useParams();
    const [filteredProduct, setFilteredProduct] = useState({});

    useEffect(() => {
        getProduct(id);
    }, []);

    const getProduct = (id) => {
        const getLocalStorage = JSON.parse(localStorage.getItem('products'));
        const getProduct = getLocalStorage.filter(product => product.id == id);
        getProduct.length > 0 ? setFilteredProduct(getProduct[0]) : setFilteredProduct({});
    };

    return (
        <>
            <section>
                {
                    !filteredProduct.length ? (
                        <article>
                            <header>
                                <h2>{filteredProduct.name}</h2>
                            </header>
                            <div>
                                <img src={filteredProduct.image} alt={filteredProduct.name} />
                            </div>
                            <p>{filteredProduct.description}</p>
                            <p>{filteredProduct.price}</p>

                        </article>
                    ) : (
                        <ErrorMessage message={"Producto no encontrado"} />
                    )
                }

            </section>
        </>

    );

}