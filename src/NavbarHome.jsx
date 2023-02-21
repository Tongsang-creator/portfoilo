import './Navbar.css'
function NavbarHome() {
        return (
        <nav className="navbar navbar-expand-lg fixed-top navbarScroll">
        <div className="container">
            <a className="navbar-brand ms-5" href={'/'}>Siriphong</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href={'/'}>Home</a>
                    </li>
                </ul>
            </div>
        </nav>
        );
        }

    export default NavbarHome;