export function Card({data}) {
   
    return (
        <div>
            <section className="py-10 bg-gray-100">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {data.map((usp, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition">
                                <div className="flex items-center justify-center w-fit mx-auto p-2.5 bg-gray-200 rounded-full">
                                    <img src={usp.icon} width="100%" alt={usp.icon} className="w-10" />
                                </div>
                                <h3 className="text-xl font-semibold my-2">{usp.title}</h3>
                                <p className="text-gray-600">{usp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}