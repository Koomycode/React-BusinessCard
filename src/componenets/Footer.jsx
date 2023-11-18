import icon1 from "../assets/Twitter Icon.png"
import icon2 from "../assets/Facebook Icon.png"
import icon3 from "../assets/Linkedin Icon.png"
import icon4 from "../assets/Instagram Icon.png"
import icon5 from "../assets/GitHub Icon.png"

function Footer() {
    return ( 
        <>
            <footer className="footer flex">
                <img src={icon1} />
                <img src={icon2} />
                <img src={icon3} />
                <img src={icon4} />
                <img src={icon5} />
            </footer>
        </>
     );
}

export default Footer;