import profile from './profile-pic.png'
import './Header.css'
function Header() {
    return (
        <div className='header'>
            <img className='profile-pic' src={profile} alt='Profile'/>
            <h1 className='name'>Ankita Binu</h1>
            <h3 className='job'>Developer</h3>
            <h4 className='company'>Publicis Sapient</h4>
            <nav>
                <a className='email' href="ankitabinu0@gmail.com">Email</a>
                <a className='linkedIn' href="https://www.linkedin.com/in/ankitabinu/">LinkedIn</a>
            </nav>
        </div>
    )
}

export default Header;