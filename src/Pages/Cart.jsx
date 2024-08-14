
import { useSelector } from "react-redux"
import Product from "../Component/Product"
import PriceCart from "../Component/PriceCart"

function Cart() {
    const items = useSelector( sta => sta.cart.items)

    return <div >
        <h1 className="font-bold bg-red-400 h-20 text-4xl text-white text-center">Shopping items</h1>
        <div className="flex sm:ml-[250px] ml-[80px] ">
            <div>
        {
            items.map( (data) => {
                return <div className=" sm:w-[800px] w-[250px] justify-between mt-10 sm:flex sm:gap-4 items-center sm:p-8 sm:my-4 rounded border-4 border-green-300">
                    <img className="sm:w-[200px] w-[80px]" src={data.image} alt="" />
                    <div >
                        
                    <h1>{data.title.substring(0, 40)}</h1>
                    <h1 className="font-bold pt-4">${data.price}</h1>
                    </div>
                    <button className="text-2xl ml-6">X</button>
                     </div>

            })
        }
        </div>
        </div>
        <PriceCart />
    </div>
    
}

export default Cart