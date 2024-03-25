import { useState } from 'react';
import "./App.css";
import "./Supplier";
function Suppliercard() {
    return (
        <>
            <div className="backgroundImage w-[100%]" >
<div className='px-10 '>
    <h2 className="text-lg font-bold text-white">An easy way to send requests to all suppliers</h2>
    <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
</div>
<div className=' bg-white w-64 h-[300px] rounded-md py-4 px-4 text-black'>
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

export default App;
