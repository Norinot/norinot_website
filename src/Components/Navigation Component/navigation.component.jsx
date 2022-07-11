import './navigation.styles.scss';
import logo from '../../images/profile.png';


const Navbar = () => {
    return(
        <div className='navbarLinks'>
            <a className='FontWgh'>Norinot</a>
            <div className='toRight'>
                <a href='#'>Home</a>
                <a href='#'>About</a>
                <a href='#'>Contact</a>
            </div>
        </div>  
    );
}

export default Navbar;