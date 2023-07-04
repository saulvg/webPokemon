import './header.css'
import Nav from "./Nav/Nav";

export default function Header() {
    return (
        <>
            <header className='shh'>
                <h1>Web sobre pokemons</h1>
            </header>
            <div id="main-header">
                <Nav />
                <div id='btn-account'>
                    <a>SingIn</a>
                </div>
            </div>
        </>
    );
};