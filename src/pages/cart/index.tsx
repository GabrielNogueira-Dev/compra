import { Link } from "react-router-dom"

import { useContext } from "react"

import { CartContext } from "../../contexts/CartContext"

export function Cart(){
const {cart,total,removeItemCart,addItemCart} = useContext(CartContext)

    return(

      <div className="px-4 w-full max-w-7xl mx-auto">
        <h1 className="font-medium text-2xl text-center my-4">Carrinho de compras</h1>
     
{cart.length === 0 && (
  <div className="flex flex-col items-center justify-center h-screen gap-4">
    <strong className="text-2xl flex items-center justify-center "> Seu carrinho está vazio.. </strong>
    <Link className="text-blue-700 inline-block items-center justify-center text border-b-2 " to="/">Acessar produtos </Link>
  </div>
)}

 {cart.map((item)=>(
   <section key={item.id}
    className="flex items-center justify-between border-b-2 border-gray-300">

<img className="w-28"
 src={item.cover} alt={item.title} />

<strong>preco: {item.price}</strong>

<div className="flex items-center justify-center gap-3">
  <button onClick={()=> removeItemCart(item)} className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
    -
  </button>

{item.amount}

   <button onClick={ ()=> addItemCart(item) } className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
    +
  </button>

</div>

<strong className="float-right">
  SubTototal: {item.total.toLocaleString("pt-BR",{
    style:"currency",
    currency:"BRL"
  })}
</strong>

  </section>
 ))}

  {cart.length !== 0 && (
    <p className="font-bold mt-4"> Total: {total} </p> )}
      </div>  
    )
}
