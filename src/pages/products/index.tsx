import { useParams } from "react-router-dom"
import { api } from "../../services/api"
import { ProductsProps } from "../home"
import { useEffect,useState,useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { BsCartPlus } from "react-icons/bs"

export function Products(){
const {id}= useParams()
const [product,setProduct] = useState<ProductsProps>()
const {total,addItemCart} = useContext(CartContext)
useEffect(()=>{
async function GetApiDetail() {
    try{
        const response = await api.get(`/products/${id}`)
console.log(response.data)
setProduct(response.data)
    }catch(error){
        console.log(error)
    }

}
GetApiDetail();
},[])

function handleAddToCart() {
  if (product) {
    addItemCart(product);
  }
}


    return(
<div>

        <div className="flex flex-col sm:flex-col md:flex-row items-center gap-2 sm:gap-4 md:gap-5 px-2 mt-3 mx-4 md:mx-10 justify-center">
  <main className="w-full md:w-1/2">
    <img
      className="w-full max-w-[300px] sm:max-w-xs md:max-w-full rounded"
      src={product?.cover}
      alt={product?.title}
    />
  </main>

    <main>
        <h2 className=" flex mx-auto font-bold m-4">
        Detalhes :
        </h2>
       <h3> {product?.description}</h3>
    </main>

</div>

<div>
     <main className="flex w-screen gap-4 mt-2 justify-center ">
        <span className="font-bold">{product?.price.toLocaleString("pt-BR",{
            style:"currency",
            currency:"BRL"
        })}</span>
         <button className=""
          onClick={handleAddToCart} ><BsCartPlus className="cursor-pointer bg-zinc-700 text-white p-1 rounded" size={21}/></button>
    </main>
</div>
</div>
    )
}