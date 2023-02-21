
import image from './images/about.jpg';
import './About.css';
function AboutSelf(){
    return(    
    <section id="about">
        <div className="container mt-4 pt-4">
            <h1 className="text-center">About Me</h1>
            <div className="row mt-8">
                <div className="col-lg-3">
                    <img src={image} className= "imageAboutPage" alt="" />
                </div>

                <div className="col-lg-9">
                    <p> I am a professional software engineer with a passion for technology and expertise in various programming languages including Python, Java, and C++. I have a strong background in delivering efficient, reliable, and user-friendly software solutions, and am skilled in Agile methodologies. I am committed to ongoing learning and professional development, and bring a proven track record of delivering projects on time and within budget.</p>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <ul>
                                <li>Name: Siriphong Prajantasen</li>
                                <li>Age: 31</li>
                                <li>Occupation: Software Engineer</li>

                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li>Graduated: Computer Engineer at Kasetsdart University(Bangkhen)</li>
                                <li>Experices: 5 years on computer engineer</li>
                                <li>Personality: ENFJ</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    </section>
    );
}

export default AboutSelf;