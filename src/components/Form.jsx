import { BiSolidOffer } from "react-icons/bi";

export function Form() {
    return (
        <div className="bg-white py-16">
            <div className="w-[90%] md:w-[70%] mx-auto">
                <h2 className="flex items-center text-base md:text-xl font-semibold text-center text-gray-800 mb-4 bg-green-200 w-fit mx-auto px-4 py-1.5 rounded-full">
                    Get 10% off on your first purchase! <BiSolidOffer/>
                </h2>
                <div className="flex flex-col justify-center md:flex-row gap-2 md:gap-4">
                    <div>
                        <dt className="font-semibold">Name</dt>
                        <dd>
                            <input type="text" className="border-2 focus:outline-none px-2 py-1.5 rounded-md border-gray-500 w-full" placeholder="Enter Name" />
                        </dd>
                    </div>
                    <div>
                        <dt className="font-semibold">Email</dt>
                        <dd>
                            <input type="text" className="border-2 focus:outline-none px-2 py-1.5 rounded-md border-gray-500 w-full" placeholder="Enter Name" />
                        </dd>
                    </div>
                    <div>
                        <dt className="font-semibold">Phone Number</dt>
                        <dd>
                            <input type="text" className="border-2 focus:outline-none px-2 py-1.5 rounded-md border-gray-500 w-full" placeholder="Enter Name" />
                        </dd>
                    </div>
                </div>
                <button className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-green-700 transition mt-4">
                    Get Offer
                </button>
            </div>

        </div>
    )
}