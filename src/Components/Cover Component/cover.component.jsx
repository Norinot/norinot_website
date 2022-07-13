import '../Cover Component/cover.styles.scss';
import BackgroundPicture from '../../images/backgroundpicture.jpg'
import profilePicture from '../../images/navprofile.jpeg'


const Cover = () => {
    return(
        <div className='cover-container'>
            <div className='left-nav'>
                <ul>
                    <li><img src={profilePicture} className='profile-picture'></img></li>
                    <li className='bold-name'>BERNÁTH MÁRK BENCE</li>
                    <li>Frontend Developer</li>
                    <li className='pdng-li'>Born 13th of March 2022</li>
                    <li>bencemark.bernath@gmail.com</li>
                    <li>+(36) 70 2432 442</li>
                </ul>
                <div>
                    <a href='https://www.linkedin.com/in/bernath-mark-bence/' target="_blank">LinkedIn</a>
                    <a href='https://github.com/Norinot' target="_blank">GitHub</a>
                    <a href='https://www.facebook.com/norinot19' target="_blank">Facebook</a>
                </div>
                <div>
                    <button className='download-btn'><a>Download CV</a></button>
                </div>
            </div>
            <div className='background-div'>
                <img src={BackgroundPicture} className='background-pic'/>
                <div className='bottom-left-text'>HELLO I'M <br/> Bernáth Márk Bence</div>
                <div className='bottom-left-text-low'>SOFTWARE DEVELOPER & FRONTEND DEVELOPER</div>
            </div>
        </div>
    )
}

export default Cover