import weather from './images/weather.jpg'
import soon from './images/soon.jpg'
import todo from './images/todo.png'
function Portfolio(){
    return(
        <section id="portfolio">
        <div className="container mt-3">
            <h1 className="text-center">Portfolio</h1>
            <div className="row">
                <div className="col-lg-4 mt-4">
                    <div className="card">
                    <img src={weather} className="card-top" alt="Carde" />
                        <div className="card-body">
                            <h4 className="card-title">Weather Report</h4>
                            <p className="card-text">Web application reports weather of Nongkhai that can use all platform</p>
                            <div className="text-center">
                            <a href={`ProjectOne`}>Link</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-4">
                    <div className="card">
                    <img src={todo} className="card-top" alt="Carde" />
                        <div className="card-body">
                            <h4 className="card-title">Todolist</h4>
                            <p className="card-text">Web application simple Todolist</p>
                            <div className="text-center">
                            <a href={`ProjectTwo`}>Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </section>
    );
}

export default  Portfolio;
/*
<Link to={'/'}>Link</Link>
<div className="col-lg-4 mt-4">
                    <div className="card portfolioContent">
                        <img className="card-img-top" src="images/portfolioImage4.jpg" alt="Card image" style="width:100%" />
                        <div className="card-body">
                            <h4 className="card-title">Quiz App</h4>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="text-center">
                                <a href="#" className="btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mt-4">
                    <div className="card portfolioContent">
                        <img className="card-img-top" src="images/portfolioImage3.jpg" alt="Card image" style="width:100%" />
                        <div className="card-body">
                            <h4 className="card-title">Product Landing Page</h4>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="text-center">
                                <a href="#" className="btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 mt-4">
                    <div className="card portfolioContent">
                        <img className="card-img-top" src="images/portfolioImage4.jpg" alt="Card image" style="width:100%" />
                        <div className="card-body">
                            <h4 className="card-title">Messaging Service</h4>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="text-center">
                                <a href="#" className="btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mt-4">
                    <div className="card portfolioContent">
                        <img className="card-img-top" src="images/portfolioImage1.jpg" alt="Card image" style="width:100%" />
                        <div className="card-body">
                            <h4 className="card-title">Twitter Clone</h4>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="text-center">
                                <a href="#" className="btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mt-4">
                    <div className="card portfolioContent">
                        <img className="card-img-top" src="images/portfolioImage4.jpg" alt="Card image" style="width:100%" />
                        <div className="card-body">
                            <h4 className="card-title">Blog App</h4>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="text-center">
                                <a href="#" className="btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
*/