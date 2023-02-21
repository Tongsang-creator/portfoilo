import './Header.css';
function Header(){
    return(
        <section className="bgimage" id="home">
            <div className="container-fluid">
                <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
                    <h2 className="hero_title">Greeting from Siriphong</h2>
                    <p className="hero_desc">I am a software engieer in Thailand</p>
                </div>
                </div>
            </div>
        </section>
        );
}

export default Header;