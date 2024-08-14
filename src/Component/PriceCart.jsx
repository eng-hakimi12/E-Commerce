import { useSelector } from "react-redux"
function PriceCart() {
    const price = useSelector((state) => state.cart.totalPrice)
    const number = useSelector ( (state) => state.cart.items)
    return <div className="sm:w-[400px] mt-24 p-4 rounded sm:fixed sm:ml-[100px] sm:right-0 sm:top-0 border-4 m-3">
        <h1 className="pt-3">Total items</h1>
        <h1 className="font-bold pt-3">{number.length}</h1>
        <h1 className="pt-3">Total Price</h1>
        <h1 className="font-bold pt-3">$ {price}</h1>
        <button className=" text-thirdColor px-[140px] py-3 mt-4 rounded bg-violet-300 hover:bg-violet-600 ">Pay Now</button>
    </div>
}
export default PriceCart