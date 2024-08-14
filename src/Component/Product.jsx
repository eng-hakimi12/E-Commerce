import { useDispatch } from "react-redux"
import {toast, Toaster} from "react-hot-toast"
import { addItemToCart } from "../reduc/reduce/cart"
import { calculateTotalPrice } from "../reduc/reduce/cart"


function Product({items}) {
    const dispatch = useDispatch()
    const handlecart = () => {
        dispatch(addItemToCart(items))
        dispatch(calculateTotalPrice())
        if(addItemToCart(items)){
            toast.success(" waa ibsaday")
        }
    }
    return <div className="border-4 sm:w-[400px] w-[300px] sm:mt-[200px] mt-24 m-5 rounded p-5 ">
        <img src={items.image} alt="" />
        <h1 className="mt-3  font-semibold">{items.title.substring(0, 40)}</h1>
        <div className="flex justify-between ">
        <p className="mt-3 font-bold">{items.price}</p>
        <button onClick={handlecart} className="bg-primaryColor text-thirdColor h-6 mt-3 w-10 rounded-full"> +</button>
        </div>
        <Toaster/>
    </div>
}

export default Product