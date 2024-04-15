export default function ProductsPage() {
    return (
        <>
            <div className="flex flex-col md:flex-row h-screen bg-gray-100">
                <aside className="bg-gray-100 w-full md:w-64 flex-shrink-0">
                    <div className="p-4 ">
                        <h4 className="font-bold">Category</h4>
                    </div>
                    <nav>
                        <ul className="py-2 flex flex-col gap-4">
                            <li className="px-4 py-2 hover:bg-gray-700 flex items-center gap-2">
                                <a href="#" className="block">Mobile accessory</a>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-700 flex items-center gap-2">
                                <a href="#" className="block">Electronics</a>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-700 flex items-center gap-2">
                                <a href="#" className="block">Smartphones </a>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-700 flex items-center gap-2">
                                <a href="#" className="block">Modern tech</a>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-700 text-blue-600 flex items-center gap-2">
                                <a href="#" className="block">See all</a>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <main className="flex-1 p-5 bg-gray-200 h-full">
                    <div className="bg-white p-5 rounded-lg ">

                        <p>12,911 items in Mobile accessory</p>
                    </div>
                    {/* Add your dashboard content here */}
                </main>
            </div>
        </>
    )
}