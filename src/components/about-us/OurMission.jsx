import OurMissionImage from '/src/assets/images/png/our-mission.png'
import OurStoryImage from '/src/assets/images/png/our-story.png'

const OurMission = () => {
    return (
        <div className='px-4'>
            <div className="max-w-6xl mx-auto py-12 space-y-16">
                {/* Our Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[51px] max-md:gap-10 max-sm:gap-7 items-center">
                    <div className="max-w-[485px] max-md:mx-auto">
                        <h2 className="text-[44px] max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-medium leading-[136%] mb-4">Our Mission</h2>
                        <p className="text-gray-600">
                            At [YOUR-ORG] we are committed to driving technological learning
                            by connecting learners worldwide with opportunities for innovation.
                            Our mission is to empower individuals and communities through
                            accessible and engaging resources, enabling them to develop the
                            skills and knowledge essential for success in the digital age.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <img src={OurMissionImage} alt="Mission Illustration" className="w-[544px]" />
                    </div>
                </div>
                <div className='flex gap-[51px] max-md:gap-10 max-sm:gap-7 items-center max-md:flex-col-reverse'>
                    <div className="flex justify-center max-w-[568px] w-full">
                        <img src={OurStoryImage} alt="Story Illustration" className="w-[568px] h-auto" />
                    </div>
                    <div className="w-full max-w-[521px]">
                        <h2 className="text-[44px] max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-medium leading-[136%] mb-4">Our Story</h2>
                        <p className="text-[#1D3557]">
                            Founded in 2004 by John Meyer, a former educator and education technology sales professional, FieldPros has grown into a leading Edtech recruiting firm exclusively serving the Education Technology industry. John's firsthand experience with the transformative power of educational tools inspired him to bridge the gap between Edtech companies and the talent they need to succeed. Over the years, we have expanded our services from recruiting sales representatives to filling positions across various departments, including product development, marketing, services, content creation, design, government relations, business development, and executive leadership. Our unwavering commitment to the Edtech sector has established us as a trusted partner for organizations ranging from progressive startups to large corporations dedicated to enhancing education.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OurMission