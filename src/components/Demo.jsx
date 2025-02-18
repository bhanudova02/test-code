import React from 'react'

const Demo = () => {
    return (
        <div>
            <main>
                <div className='p-4 flex justify-center md:justify-start'>
                    <img src="logo.jpg" width="100%" className='w-48' alt="" />
                </div>
                <div className="shadow-black flex relative overflow-hidden">
                    <div className='w-full'>
                        <img src="landscpe.jpg" width="100%" className="w-full h-[300px] md:h-full object-cover object-left" alt="" />
                    </div>
                    <div className='hidden md:block'>
                        <div className="absolute top-0 left-4 w-full h-full bg-[#327b6afa] transform translate-x-1/2 -skew-x-12"></div>
                    </div>
                </div>
                <div className='mt-10 px-6'>
                    <div className='text-center'>
                        <h2 className='text-[#327B6A] text-3xl font-medium'>Our investment in you.</h2>
                        <span className='w-20 h-[3px] my-0 bg-[#327B6A] inline-block'></span>
                    </div>
                    <p clz>
                        As a Mortgage Loan Officer with Citizens, you'll work directly with your customers,
                        walking them through our unique product suite. You'll enjoy the offerings of a larger
                        bank along with the entrepreneurial spirit and growth of a smaller lender.
                    </p>
                </div>
                <div className='mt-12 '>
                    <div className='text-center'>
                        <div className='text-white bg-orange-400 px-6 py-2 mb-6'>
                            View Careers
                        </div>
                        <div className='px-6 md:px-0'>
                            <h2 className='text-[#327B6A] text-3xl font-medium'>Get the Citizens advantage.</h2>
                            <span className='w-20 h-[3px] my-0 bg-[#327B6A] inline-block'></span>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-y-12 mt-4 '>
                        <div className='mx-6 md:mx-0 px-0 md:px-6 relative border-b md:border-b-0 pb-4 md:pb-0'>
                            <div className='w-[1px] bg-gray-400 hidden md:block right-0 absolute h-[85%] top-1 '></div>
                            <h4 className='text-[#327B6A] text-xl font-medium'>Unique products</h4>
                            <p className='my-1'>
                                Our loan programs offer a variety of solutions to help you compete effectively across a broad spectrum of borrowers. With our strong balance sheet, we can offer great conventional and portfolio loan products that give you a competitive edge.
                            </p>
                            <span className='text-lime'>Learn more about our products. </span>
                        </div>
                        <div className='mx-6 md:mx-0 px-0 md:px-6 relative border-b md:border-b-0 pb-4 md:pb-0'>
                            <h4 className='text-[#327B6A] text-xl font-medium'>Exceptional support</h4>
                            <p className='my-1'>
                                We'll support you in generating leads and marketing, as well as implementing technology and secondary marketing. Our Lead Advantage program reaches prospects in the market for a mortgage, while our loyalty mail program will keep you in touch with current customers.
                            </p>
                        </div>
                        <div className='mx-6 md:mx-0 px-0 md:px-6 relative border-b md:border-b-0 pb-4 md:pb-0'>
                            <div className='w-[1px] bg-gray-400 hidden md:block right-0 absolute h-[85%] top-1 '></div>
                            <h4 className='text-[#327B6A] text-xl font-medium'>Closing on-time, every time</h4>
                            <p className='my-1'>
                                We expanded our regional operations centers to help to support you and take of paperwork during closing time. Our one-team "pod" operations approach helps you create satisfied customers and referral sources.
                            </p>
                        </div>
                        <div className='px-6 '>
                            <h4 className='text-[#327B6A] text-xl font-medium'>You'll have a voice</h4>
                            <p className='my-1'>
                                In order to give our customers the best service, we'll give you a real voice in how we operate. Through our Sales Advisory Board, Sales Conferences, and our Top Producers Council, you can drive real change in the company.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='mt-12 px-6'>
                    <div className='bg-[#327B6A] p-2 text-white text-center text-lg'>
                        Citizens Bank and Citizens One Home Loans
                    </div>
                    <div className='bg-blue-100 py-6 px-6 md:px-12'>
                        <p>
                            The Home Lending Solutions division operates under the Citizens Bank brand within our banking footprint: Massachusetts, Rhode Island, Connecticut. New Hampshire, Vermont, New York, New Jersey, Pennsylvania, Delaware, Ohio and Michigan. Outside of this footprint, we market our home lending products under the Citizens One Home Loans brand and actively recruit loan officers in the following states: Illinois, Indiana, Kentucky, Maryland, Virginia, North Carolina and South Carolina, as well as in Washington, DC.
                        </p>
                    </div>
                </div>


                <div className='flex flex-col md:flex-row gap-10 mt-12 w-[90%] mx-auto'>
                    <div className='w-full md:w-[25%] flex items-center  flex-col'>
                        <img src="profile1.jpg" width="100%" className='w-40 h-40 rounded-full object-cover' alt="" />
                        <p className='px-4 text-center my-4'>
                            "Citizens Bank is in a growth mode. We're planning to be around for the long term and we're proving that by growing sales"
                        </p>
                        <h4 className='text-[#327B6A] text-center'>- Ed, Mortgage Loan Officer in Buffalo</h4>
                    </div>
                    <div className='w-[50%] flex items-center flex-col'>
                        <img src="profile2.jpg" width="100%" className='w-40 h-40 rounded-full object-cover' alt="" />
                        <p className='px-4 text-center my-4'>
                            "The senior management is very committed to the mortgage lending business on every level - from the top, down. We're all going in the same direction and that's what I like. So, if I have a question or idea, I can get answers. They listen and we get things done. They are really investing to grow the mortgage business."
                        </p>
                        <h4 className='text-[#327B6A] text-center'>- Mark, Senior Mortgage Loan Officer in Chicago</h4>
                    </div>
                    <div className='w-full md:w-[25%] flex items-center  flex-col'>
                        <img src="profile3.jpg" width="100%" className='w-40 h-40 rounded-full object-cover' alt="" />
                        <p className='px-4 text-center my-4'>
                            "It is so great to be part of an organization that is looking for solutions and creativity versus creating barriers that cause problems."
                        </p>
                        <h4 className='text-[#327B6A] text-center'>- John, Mortgage Loan Officer in Charlest</h4>
                    </div>
                </div>


                <div className='border-t-2 border-t-[#327B6A] p-10 mt-10'>
                    <div className='flex items-center gap-2'>
                        <img src="fb.png" width="100%" className='w-8' alt="" />
                        <img src="x.png" width="100%" className='w-8' alt="" />
                        <img src="in.png" width="100%" className='w-8' alt="" />
                        <img src="yt.png" width="100%" className='w-8' alt="" />
                    </div>
                    <p className='my-4'>
                        It is the policy of Citizens Bank to provide equal employment and advancement opportunities to all colleagues and applicants for employment without regard to race, color, ethnicity, religion, gender, pregnancy/childbirth, age, national origin, sexual orientation, gender identity or expression,
                        disability or perceived disability, genetic information, citizenship, veteran or military status, marital or domestic partner status, or any other category protected by federal, state and/or local laws. Equal Opportunity & Affirmative Action Employer Disabled/Veteran-Citizens Bank is a brand name of
                        Citizens Bank, N.A. and each of its respective subsidiaries, and Citizens Bank of Pennsylvania. Click here to review "EEO Is The Law" poster. For additional information,  <a href="" className='underline'> click here.</a>
                    </p>
                    <div>
                        <span>Privacy Statement | Site Map</span>
                    </div>
                </div>


            </main>

        </div>
    )
}

export default Demo

