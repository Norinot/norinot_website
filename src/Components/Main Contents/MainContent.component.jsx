import '../Main Contents/MainContent.styles.scss';

const MainContent = () => {

    const educationContentDB = [
        {
            id: 2,
            Edu: "Education",
            Year: "2014-2019",
            Institution: "Baross Gábor Vocational High School",
            Description: "Graduated and got a basic software engineering qualification, I've also obtained a System Administrator certification. 3142/9 FEOR"
        },
        {
            id: 2,
            Year: "2019-2021",
            Institution: "Kandó Kálmán IT High School",
            Description: "I've studied software engineering mainly in HTML, CSS, Boostrap, JavaScript, and in .Net C#. OKJ 54 481 05",
        },
    ];

    const experienceContentDB = [

        {
            id: 1,
            Exp: "Experience",
            Year2: "2022. January - Present",
            Company: "Vodafone Hungary",
            Occupation: "Application & Technical Support Expert",
        },
        {
            id: 2,
            Year2: "2020. Okctober - 2021. December",
            Company: "Vodafone Hungary",
            Occupation: "Help Desk Expert",
        },
        {
            id: 3,
            Year2: "2017. May - 2017. July",
            Company: "D&D Drótárú",
            Occupation: "System Administrator Clerk",
        },
    ];



    return (
        <div className='mainContents-container'>
            <div className='subcontainer-contents'>
                <ul>
                    {educationContentDB.map(({Edu, Year, Institution, Description }) => (
                        <>
                            <li><h1>{Edu}</h1></li>
                            <li>{Year}</li>
                            <li>{Institution}</li>
                            <li>{Description}</li>
                        </>
                    ))}

                </ul>
                <ul>
                    {experienceContentDB.map(({Exp,Year2,Company,Occupation}) => (
                        <>
                        <li><h1>{Exp}</h1></li>
                        <li>{Year2}</li>
                        <li>{Company}</li>
                        <li>{Occupation}</li>
                        </>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MainContent;