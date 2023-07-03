import img from '../../assets/myPhoto.png'

const AboutMe = () => {
    return (
        <div className='h-[700px] '>
            <div className='flex justify-between'>
                <div className='flex mx-auto items-center'>
                    <p>hello, <br /> I`m Tasnim Alam</p>

                </div>
                <img className='w-1/2' src={img} alt="" />
            </div>

        </div>
    );
};

export default AboutMe;