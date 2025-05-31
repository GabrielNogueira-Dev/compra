import { useEffect,useState,useContext } from "react"
import { BsCartPlus } from "react-icons/bs"

import { Link } from "react-router-dom";
import { api } from "../../services/api"
import { CartContext } from "../../contexts/CartContext";

import toast from "react-hot-toast";

export interface ProductsProps{
    id:number;
    title:string;
    description:string;
    price:number;
    cover:string
}

export function Home(){
const [products,setProducts] = useState<ProductsProps[]>([])
const {addItemCart} = useContext(CartContext)

useEffect(()=>{

async function getProducts() {
 const response = await api.get("/products")   
setProducts(response.data)


}

getProducts();
},[])

function handleAddCartItem(product:ProductsProps){
toast.success("Produto adicionado ao carrinho",{style:{borderRadius:10,backgroundColor:"green",color:"white"}})
    addItemCart(product)

}

    return(
    
      <div>
        <main className="w-full max-w-7xl px-4 mx-auto">
        <h1 className="rounded bg-gray-300 font-bold text-2xl mb-4 mt-10 text-center">
           Produtos em Alta </h1>
       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
       {products.map( (product) => (
            <section key={product.id}
             className="w-full">

   <Link to={`/products/${product.id}`}>
    <img className="w-full rounded-lg max-h-72 mb-2"
    src={product.cover} alt={product.title} />
   </Link>
    <p className="font-medium mt-1 mb-2"> {product.title} </p>

    <div className="flex gap-3 items-center">
        <strong className="text-zinc-700/90">
           {product.price.toLocaleString("pt-BR",{
            style:"currency",
            currency:"BRL"
           })}
        </strong>
        <button onClick={()=> handleAddCartItem(product)} className="cursor-pointer bg-zinc-800 text-white p-1 rounded">
    <BsCartPlus/>
        </button>

    </div>

            </section>
        ))}
        </div>

            
            </main>
        </div>  
        )
    }