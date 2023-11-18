import img from "../assets/Desplay pic.jpg"
import emailImg from "../assets/Mail.png"

function Header() {
  return (
    <>
      <div className="dp">
        <img src={img} />
      </div>
      <header className="flex header">
        <h2 className="name">Hakam Nabhani</h2>
        <p>Front-end Developer</p>

        <a href="#" className="site">
          My Website
        </a>

        <a href="#" className="email flex">
          <img src={emailImg} className="email-img" />
          Email
        </a>
      </header>
    </>
  )
}

export default Header
