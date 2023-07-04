import "./contact.css";
import { Map } from "../../compartidos";
import { useState } from "react";


export default function Contact() {

    const [formContact, setFormContact] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormContact({
            ...formContact,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formContact);

        setFormContact({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <>
            <div className="container" >
                <section className="form">


                    <h2>Contacta con nosotros</h2>
                    <hr />
                    <form onSubmit={handleSubmit} className="contact-form">
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            value={formContact.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formContact.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Mensaje"
                            value={formContact.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button type="submit">Enviar</button>
                    </form>


                </section>

                <section className="map">
                    <hr />
                    <h2>Donde localizarnos</h2>
                    <Map />
                </section>
            </div>
        </>

    );
}

