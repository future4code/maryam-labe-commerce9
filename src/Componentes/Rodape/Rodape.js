import React from "react"
import { Atendimento, Footer, RedesSociais, FooterContainer } from "./estiloDoRodape"

import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiYoutube, FiPhone, FiMail } from "react-icons/fi"

export default class Rodape extends React.Component {
    render() {
        return (<FooterContainer>
            <div>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/374c19100973805.5f182131a542d.gif" />
            </div>

            <Footer>
                <h1>Acesse nossas redes sociais:</h1>
                <RedesSociais id="redes">
                    <a target="blanck" className="facebook" href="https://www.facebook.com/"><FiFacebook /></a>
                    <a target="blanck" className="twitter" href="https://www.twitter.com"><FiTwitter /></a>
                    <a target="blanck" className="linkedin" href="https://www.linkedin.com"><FiLinkedin /></a>
                    <a target="blanck" className="instagram" href="https://www.instagram.com"><FiInstagram /></a>
                    <a target="blanck" className="youTube" href="https://www.youTube.com"><FiYoutube /></a>
                </RedesSociais>

                <h2> Atendimento:</h2>
                <p>Segunda a sexta, das 9h às 18h.</p>
                <Atendimento id="contato">
                    <a target="blanck" className="telefone" href="#"><FiPhone /> +55 00 9999 88888</a>
                    <a target="blanck" className="email" href="#"><FiMail /> sac.mrpigt@mrpig.com</a>
                </Atendimento>
            </Footer>

            <div>
                <img src="https://i.pinimg.com/originals/59/39/e0/5939e0801011f80761eaf34aef9763c5.gif" />
            </div>
        </FooterContainer>


        )
    }
}