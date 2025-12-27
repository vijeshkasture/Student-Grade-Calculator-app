import "./about.css";
import icon from "./assets/defaulticon.png";

// import vijesh from "./assets/vijesh.jpg";
// import yashika from "./assets/yashika.jpg";
// import zoya from "./assets/zoya.jpg";
// import vikram from "./assets/vikram.jpg";

function About() {
    return (
        <section className="about-page">
            {/* ABOUT PROJECT */}
            <h2 className="about-title">About This Project</h2>

            <p className="about-description">
                ScoreMate is a mini project developed as part of the Data Structures
                curriculum. The project was assigned to a team of four students, and all
                members contributed equally to the planning, development, and
                implementation of the application. The main objective of this project is
                to apply data structures concepts in a practical scenario by designing a
                dynamic student grade calculation system. This project demonstrates
                collaborative teamwork, logical problem-solving, and the application of
                frontend development concepts using React.
            </p>

            {/* TEAM SECTION */}
            <h3 className="team-title">Project Team</h3>

            <div className="team-grid">
                <div className="team-card">
                    {/* <img src={vijesh} alt="Vijesh Kasture" /> */}
                    <img src={icon} alt="Vijesh Kasture" />
                    <h4>Vijesh Kasture</h4>
                    <a
                        href="https://www.linkedin.com/in/vijesh-kasture-303381306"
                        target="_blank"
                        rel="noopener noreferrer"
                       
                    >
                        LinkedIn
                    </a>
                </div>

                <div className="team-card">
                    {/* <img src={yashika} alt="Yashika Kushwah" /> */}
                    <img src={icon} alt="yashika" />
                    <h4>Yashika Kushwah</h4>
                    <a
                        href="https://www.linkedin.com/in/yashika-kushwah-136054314/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </div>

                <div className="team-card">
                    {/* <img src={zoya} alt="Zoya Mansoori" /> */}
                    <img src={icon} alt="zoya" />
                    <h4>Zoya Mansoori</h4>
                    <a
                        href="https://www.linkedin.com/in/zoya-mansoori-242766353/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </div>

                <div className="team-card">
                    {/* <img src={vikram} alt="Vikram Singh Rajput" /> */}
                    <img src={icon} alt="vikram" />
                    <h4>Vikram Singh Rajput</h4>
                    <a
                        href="https://www.linkedin.com/in/vikram-singh-rajput-7625b2341/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;
