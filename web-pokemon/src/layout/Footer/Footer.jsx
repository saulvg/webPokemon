import './footer.css';

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer__content">

                    <div className="footer__social">
                        <a href="https://facebook.com">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="https://twitter.com">
                            <i className="bi bi-twitter"></i>
                        </a>
                        <a href="https://instagram.com">
                            <i className="bi bi-instagram"></i>
                        </a>
                    </div>

                </div>

                <div className='footer__line'>
                    <hr />
                </div>

                <div className="footer__bottom">
                    <p>Todos los derechos reservados &copy; {new Date().getFullYear()}</p>
                </div>
            </footer>
        </>
    )
}