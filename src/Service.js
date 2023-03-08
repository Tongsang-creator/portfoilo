function Service(){

    return(
        <section id="services">
        <div className="container">
            <h1 className="text-center">Services</h1>
            <div className="row">
                <div className="col-lg-4 mt-4">
                    <div className="card servicesText">
                        <div className="card-body">
                            <i className="fas servicesIcon fa-clock"></i>
                            <h4 className="card-title mt-3">software architecture</h4>
                            <p className="card-text mt-3">designinga blueprint that outlines the design and organization of the system, and provides a foundation for the technical design and implementation of the software. </p>
                        </div>
                    </div>  
                </div>
                <div className="col-lg-4 mt-4">
                    <div className="card servicesText">
                        <div className="card-body">
                            <i className="fas servicesIcon fa-clock"></i>
                            <h4 className="card-title mt-3">Programming</h4>
                            <p className="card-text mt-3">build software that solves problems, automates processes, or provides a better user experience.     </p>
                        </div>
                    </div>  
                </div>
                <div className="col-lg-4 mt-4">
                    <div className="card servicesText">
                        <div className="card-body">
                            <i className="fas servicesIcon fa-clock"></i>
                            <h4 className="card-title mt-3">Testing</h4>
                            <p className="card-text mt-3">responsible for evaluating software products to identify any potential issues or bugs before releasing to the market     </p>
                        </div>
                    </div>  
                </div>
            </div>

        </div>
    </section>
    );
}

export default Service;