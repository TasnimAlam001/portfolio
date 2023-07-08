

const Education = () => {
    return (
        <div className=" bg-white opacity-90 mt-32 py-10">

            <h1 className="text-4xl text-center font-bold py-12">My Education</h1>

            <div className="w-5/6 md:flex gap-4 md:w-3/4 mx-auto text-white">


                <div className="card md:w-96 bg-black shadow-xl mb-5">
                    <div className="card-body">
                        <h2 className="card-title pb-5 font-bold">COMPLETED B.SC. IN COMPUTER SCIENCE & ENGINEERING</h2>
                        <p className="text-2xl">Daffodil International University</p>
                        <p>Result : CGPA 3.62</p>
                    </div>
                </div>
                <div className="card md:w-96 bg-black shadow-xl mb-5">
                    <div className="card-body">
                        <h2 className="card-title pb-5 font-bold">
                            COMPLETED H.S.C</h2>
                        <p className="text-2xl">Rajshahi City Collage</p>
                        <p>Result : GPA 4.42</p>
                    </div>
                </div>
                <div className="card md:w-96 bg-black shadow-xl mb-5">
                    <div className="card-body">
                        <h2 className="card-title pb-5 font-bold">COMPLETED S.S.C</h2>
                        <p className="text-2xl">Shiroil School and Collage</p>
                        <p>Result : GPA 5</p>
                    </div>                    
                </div>
            </div>

        </div>
    );
};

export default Education;