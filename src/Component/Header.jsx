import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Header({search}) {
  const numberOfItems = useSelector( (state) => state.cart.items)
    return <div>

<div className="flex justify-between  w-full pb-10 font-primaryFont bg-primaryColor fixed top-0 h-[100px]">
              <div>
              <h1 className="font-bold sm:text-5xl text-2xl mt-5 sm:ml-[200px] ml-8 text-white "> E suuq</h1>

              </div>
            <ul className="hidden sm:flex gap-10  text-white text-3xl mt-7">
              <li>Home</li>
              <li>About</li>
              <li>Page</li>
              <li>Contact</li>
            </ul>
          <div className="sm:mr-[150px] flex justify-between">
            
            <input onChange={search} className="sm:w-[300px] w-[170px] h-[50px] sm:ml-[200px] mt-8  sm:mr-[0px]  sm:h-[70px] sm:mt-3 text-4xl  rounded-[10px]  border-4 border-solid outline-none border-sky-500 bg-white" type="Search" />
            <h1 className="text-4xl mt-5 font-bold mr-20">Car</h1>
            <Link to="/cart">
            <i  class="fa-solid text-thirdColor absolute right-6 ml-[250px]   sm:pr-[500px] sm:text-7xl mt-4 fa-cart-shopping"> <span className="text-2xl">({numberOfItems.length})</span> </i>
            </Link>
        </div>
            </div>

    </div>
}

export default Header