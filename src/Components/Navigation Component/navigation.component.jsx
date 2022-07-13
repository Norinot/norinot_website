import './navigation.styles.scss';

const Navbar = () => {
    return(
        <div className='navbarLinks'>
            <div id='home'></div>
            <a className='FontWgh' href='#root'>Norinot</a>
            <div className='toRight'>
                <a href='#root'>Home</a>
                <a href='#about'>About</a>
                <a href='#contact'>Contact</a>
            </div>
        </div>  
    );
}

export default Navbar;