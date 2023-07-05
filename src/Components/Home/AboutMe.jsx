import img from '../../assets/myPhoto.png'

const AboutMe = () => {
    return (
        <div className='w-5/6 mx-auto'>
            <div className='flex justify-between'>
                <div className='flex mx-auto items-center'>
                    <div>
                        <h2>HELLO, I AM <br /> <span className='font-bold text-6xl'>Tasnim Alam</span> </h2> 
                        <h4 className='text-2xl font-semibold py-3'>WEB DEVELOPER</h4>
                        <p>I am a Web Developer. My expertise includes  JavaScript, React.js, Node.js, HTML and CSS. I excel in adaptability, teamwork, and team leadership and have excellent communication abilities.</p>
                    </div>

                </div>
                <img className='w-1/2' src={img} alt="" />
            </div>

        </div>
    );
};

export default AboutMe;