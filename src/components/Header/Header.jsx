import './header.css'

 function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className='headerTitleSmall'>React & Node</span>
                <span className='headerTitleLarge'>Blog</span>
            </div>
            <img className="headerImg" src="./images/2.jpg" alt="" />
        </div>
    )
}

export default Header;
