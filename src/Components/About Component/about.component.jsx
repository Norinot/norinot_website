import '../About Component/about.styles.scss';


const About = () => {
    return(
        <div className='about-container'>
            <h1 id='about'>About me</h1>
            <span>
                Hello there! I'm glad you're here. As stated above, my name is Bernáth Márk Bence a Frontend Developer and I welcome you on my humble website!
                Here is a little bit about myself, I've been coding for about 3 years now mainly working on smaller projects such as this website and a few desktop applications and
                I've tasted a little bit of game development also by creating a Chess game in Unity using C# in which you can play locally with someone else or alone. My goals are to learn as much as I can in webdevelopment,
                create big applications which thousands of people can use and make a positive impact on the future company I'll be working for and on the industry itself.

                If you want to get to know me better I encourage you to check out my contact info by clicking <a href='#contact' className='anchor-small'>here</a>
            </span>
        </div>
    )
}

export default About;