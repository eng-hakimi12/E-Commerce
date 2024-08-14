import axios from "axios"
import Product from "./Product"
import ClipLoader from "react-spinners/ClipLoader"
import Header from "./Header"
import { useEffect,  useState } from "react"

function ProductList() {


    const [products, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const [search, setsearch] = useState("")

    const handleSearch = (Event) => {
    setsearch(Event.target.value)
    }
    
    const handleGetProdects = () => {
        setLoading(true)

        axios.get("https://fakestoreapi.in/api/products").then( (response) =>
            {

            setProduct(response.data.products)
            setLoading(false)

    }).catch((error) =>{    
            console.log(error)
    })
    }

    useEffect(() => {
        handleGetProdects()
    }, [])
    return loading == true ? <ClipLoader id="loader" loading={loading} />: <div>
        
        <Header search={handleSearch} /> 
        <div className="sm:grid sm:grid-cols-4 gap-y-10  mt-10 sm:ml-[100px]">


        {
            products.filter(  (items) => {
                return search.toLowerCase() == "" ? items 
                : items.title.toLowerCase().includes(search.toLowerCase())
            })
            .map( (data) => {
                return <Product  items={data}/>
            })
        }



</div>
    </div>
}

export default ProductList