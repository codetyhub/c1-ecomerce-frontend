import "./App.css";
function Supplier() {
    return (
        <>
            <div className="container px-[50px] mx-auto backgroundImage lg:flex-row sm:flex-col flex-col flex justify-between gap-10 py-7 flex-wrap bg-cover">
                <div className='lg:w-[40%] w-full'>
                    <h2 className="text-lg text-4xl text-white font-bold text-3xl">An easy way to send <br /> requests to all suppliers</h2>
                    <p className="text-sm mt-4 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                <div className=' bg-white lg:w-[40%] w-full rounded-md py-7 px-10 text-black'>
                    <div>
                        Send Quote to Suppliers
                    </div>
                    <div>
                        <form>
                            <div className="mb-4">
                                <input type="text" placeholder="What item you need?" className="w-full px-3 py-2 border  bg-white rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <textarea placeholder="Type more details" rows="4" className="w-full bg-white px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Send Inquiry</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Supplier;
