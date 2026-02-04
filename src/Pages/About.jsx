import imagem1 from "../assets/imagem1.jpg"
import imagem2 from "../assets/imagem2.jpg"

const About = () => {
    return (
        <>
            <div className="mainAbout">
                <div className="aboutContainer">
                    <img src={imagem1} alt="Imagem de perfil" />
                    <img src={imagem2} alt="Imagem de perfil" />
                </div>
                <div className="aboutTexto">
                    <h1>Bridging Perspectives</h1>
                    <p>A project that explores perspectives, connections, and the conversations that shape our time.</p>
                    
                </div>
            </div>
        </>
    );
}

export default About;
