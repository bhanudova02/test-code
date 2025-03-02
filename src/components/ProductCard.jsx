import { useEffect, useState } from "react"
import { CiSearch } from "react-icons/ci";

export function ProductCard({ data }) {
    const [prodData, setProdData] = useState([{}])


    function handlePriceClick(price) {
        const priceData = data.filter((mobile) => mobile.price === price);
        console.log("Filtered Products:", priceData);
        setProdData(priceData)
    }

    function handelMaterialClick(material) {
        const optList = data.filter((optList) => optList.Material === material);
        console.log("Filtered Products:", optList);
        setProdData(optList)
    }


    function handelSearchClick(e) {
        const query = e.target.value.toLowerCase();
        const searchData = data.filter((optList) =>
            optList.title.toLowerCase().includes(query)
        );
        setProdData(searchData)
        console.log(searchData)
    }


    useEffect(() => {
        setProdData(data)
    }, [])



    return (
        <div className="px-6 py-20 bg-amber-50/90">
            <h2 className="text-center font-semibold text-3xl mb-4">All Mobiles</h2>
            <div className="bg-gray-100 p-4 mb-2 rounded">
                <div className="flex flex-col lg:flex-row items-center justify-between lg:justify-start gap-4 md:gap-5">
                    <div>
                        <h4 className="font-semibold text-lg text-green-900 h-full md:h-[30px]">Select Price</h4>
                        <ul className="flex items-center gap-1 h-[34px]">
                            {data.map((mobile, index) => (
                                <li
                                    key={index}
                                    onClick={() => handlePriceClick(mobile.price)}
                                    className="bg-blue-900 cursor-pointer h-full flex items-center text-white px-2 py-1 font-semibold rounded-md text-sm"
                                >
                                    <button>{mobile.price}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full md:w-[20%]">
                        <h6 className="font-semibold text-base h-full md:h-[30px]">Select Material Type</h6>
                        <select
                            onChange={(e) => handelMaterialClick(e.target.value)}
                            className="bg-white shadow shadow-black py-1.5 px-2 rounded w-full"
                        >
                            {data[0].Material_List.map((material, index) => (
                                <option key={index} value={material}>
                                    {material}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                    <h6 className="font-semibold text-base h-full md:h-[30px]">Select Product</h6>

                        <div className="flex flex-row justify-center items-center relative w-full md:w-[400px]">
                            <input onKeyUp={handelSearchClick} type="text" className="border border-gray-500 p-1 rounded-2xl ps-4 pe-8 w-full" />
                            <button className="p-1 absolute right-3 mt-1 cursor-pointer">
                                <CiSearch className="text-lg" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2">
                {prodData.map((mobile, index) => (
                    <div key={index} className="bg-white shadow-sm shadow-black rounded-lg p-4">
                        <div className="flex items-center justify-center">
                            <img src={mobile.img_src} alt={mobile.img_src} width="100%" className="w-40" />
                        </div>
                        <div className="px-1.5">
                            <div className="mt-1 h-[80px] ">
                                <h3 className="font-semibold">{mobile.title}</h3>
                            </div>
                            <div>
                                <h5 className="font-semibold">Price: <span>₹{mobile.price}</span></h5>
                            </div>
                            <button className="bg-blue-900 text-white px-4 w-full py-1.5 font-semibold rounded-md mt-2">Quick View</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
