import LogoImg from "url:../../images/Logo.png";

const Header = () => {
    return(
        <div className = "header">
            <img src = {LogoImg} alt = "logo" className = "logo"/>
            <div className = "nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                    <li>Help</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;