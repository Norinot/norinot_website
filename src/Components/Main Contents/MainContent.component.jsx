import '../Main Contents/MainContent.styles.scss';


const MainContent = () => {
    return (
        <div className='mainContents-container'>
            <div className='subcontainer-contents'>
                <ul>
                    <li><h1>Education</h1></li>
                    <li>2014-2019</li>
                    <li>Baross Gábor Vocational High School</li>
                    <li>
                        Graduated and got a basic software engineering qualification, 
                        I've also obtained a System Administrator certification. 3142/9 FEOR
                    </li>
                    <li>2019-2021</li>
                    <li>Kandó Kálmán IT High School</li>
                    <li>I've studied software engineering mainly in HTML, CSS, Boostrap, JavaScript, and in .Net C#. OKJ 54 481 05</li>
                </ul>
                <ul>
                    <li><h1>Experience</h1></li>

                    <li>2022. January - Present</li>
                    <li>Vodafone Hungary</li>
                    <li>Application & Technical Support Expert</li>

                    <li>2020. Okctober - 2021. December</li>
                    <li>Vodafone Hungary</li>
                    <li>Help Desk Expert</li>

                    <li>2017. May - 2017. July</li>
                    <li>D&D Drótárú</li>
                    <li>System Administrator Clerk</li>
                </ul>
            </div>
        </div>
    )
}

export default MainContent;