import React from 'react'
import tshirt from "../assets/images/tshirt.svg"
import americanExpress from "../assets/images/americanExpress.svg"
import applePay from "../assets/images/applePay.svg"
import masterCard from "../assets/images/masterCard.svg"
import paypal from "../assets/images/paypal.svg"
import visa from "../assets/images/visa.svg"

const MyCart = () => {

    const items = [
        {
            id:1,
           title:"T-shirts with multiple colors, for men and lady",
           size:"Medium",
           color:"Blue",
           material:"Plastic",
           seller:"Artel Market",
           price:"$78.99"
        },
        {
            id:2,
            title:"T-shirts with multiple colors, for men and lady",
            size:"Medium",
            color:"Blue",
            material:"Plastic",
            seller:"Best factory LLC",
            price:"$60.66"
         },
         { 
            id:3,
            title:"T-shirts with multiple colors, for men and lady",
            size:"Medium",
            color:"Blue",
            material:"Plastic",
            seller:"Artel Market",
            price:"$55.12"
         }
    ]

  return (
    <div>
        <h1 className='font-bold text-[2rem] mt-[50px] ml-[100px]'>My cart (3)</h1>
    <div className='flex justify-center gap-[30px] p-[50px]'>
       <div>
       {items.map(item =>{
            return(
                <div key={item.id}>
                        <div className='flex justify-between my-[30px]'>
                <div className='flex gap-[20px]'>
                        <img src={tshirt} />
                        <div className='flex justify-between w-[100vh]'>
                <div>
                        <p className='font-[500]'>{item.title}</p>
                        <div className='flex gap-[20px] text-gray-400 text-[14px]'>
                            <p>Size: {item.size}</p> 
                            <p>Color: {item.color}</p> 
                            <p>Material: {item.material}</p> 
                            <p>Seller: {item.seller}</p> 
                        </div>
                <div className='flex gap-[25px]'>
                    <button className='bg-transparent text-red-400 border-none'>
                        Remove
                    </button>
                    <button className='bg-transparent text-blue-500 border-none'>
                        Save for later
                    </button>
                </div>
                </div>
                <div>
                    <p>{item.price}</p>
                    <p>Qty: 9</p>
                </div>
                </div>
         </div>
       </div>
                </div>
            )
        })}
        <div className='flex justify-between'>
        <div className='bg-blue-600 text-white py-[9px] px-[35px] rounded cursor-pointer font-[500]'>
            <button>Back to shop</button>
        </div>
        <div className='text-blue-600 font-[500] py-[9px] px-[35px] rounded cursor-pointer '>
            <button>Remove all</button>
        </div>
       </div>
       </div>



     {/* second part */}
        <div>
            <p>Have a coupon?</p>
            <div>
                <input className='outline-none border-none p-[10px]' type='text' placeholder='Add a coupon' />
                <button className='text-blue-500 border-none p-[10px] font-bold'>
                    Apply
                </button>
            </div>
            <div className='flex justify-between my-[40px]'>
                <div className='text-gray-500'>
                    <p>Subtotal:</p>
                    <p>Discount:</p>
                    <p>Tax:</p>
                </div>
                <div>
                    <p>$1403.97</p>
                    <p className='text-red-500'>-$60.00</p>
                    <p className='text-green-600'>+$14.00</p>
                </div>
            </div>
            <div className='flex justify-between font-bold'>
                <p>Total:</p>
                <p>$1357.97</p>
            </div>
            <button className='py-[10px] bg-green-500 rounded w-full text-white my-[30px] hover:bg-green-600 transition'>
                Checkout
            </button>
            <div className='flex justify-center gap-[15px] cursor-pointer'>
              <img src={americanExpress} />
              <img src={masterCard} />
              <img src={paypal} />
              <img src={visa} />
              <img src={applePay} />
            </div>
        </div>
    </div>
    
    </div>
  )
}

export default MyCart