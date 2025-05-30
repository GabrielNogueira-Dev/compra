import { createContext, ReactNode, useState } from "react"

import { ProductsProps } from "../pages/home"; //interface da api (Home)

//lista geral
interface CartContextData{
    cart:CartProps[];
    cartAmount:number; //numeros do carrinho (bola)
    addItemCart:(newitem:ProductsProps)=> void;
    removeItemCart: (product:CartProps)=> void;
    total:string;
}
//lista
 interface CartProps{
    id:number;
    title:string;
    description:string;
    price:number;
    cover:string;
    amount:number;
    total:number;
}

interface CartProviderProps{
    children:ReactNode;
}

export const CartContext = createContext({} as CartContextData)

function CartProvider({children} :CartProviderProps ){
const [cart,setCart] =useState<CartProps[]>([])
const [total,setTotal]= useState("")

function addItemCart(newitem:ProductsProps){//ProductProps foi importado da api da Home
    //verificar se tem na lista um produto com mesmo id que o item
const indexItem = cart.findIndex(item => item.id === newitem.id)

if(indexItem !== -1){
    // se é diferente de -1 ele encontrou o item e entra no carrinho
let cartList = cart

cartList[indexItem].amount = cartList[indexItem].amount +1;
cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price
setCart(cartList)
totalResultCart(cartList)
return;

}
// senao : adiciona o item na lista
let data = {
    ...newitem, amount:1, total:newitem.price
}

setCart(products => [...products,data])
totalResultCart([...cart,data])
}

function removeItemCart(product:CartProps){
const indexItem = cart.findIndex(item => item.id === product.id)

if(cart[indexItem].amount >1){
    //diminuir 1
    let cartList = cart;
    cartList[indexItem].amount = cartList[indexItem].amount -1
   cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price
    
   setCart(cartList)
    totalResultCart(cartList)
   return
}

const removeItens = cart.filter(item => item.id !== product.id)
setCart(removeItens)
totalResultCart(removeItens)
}

function totalResultCart(items:CartProps[]){
let myCart = items
let result = myCart.reduce( (acc,obj) => {return acc + obj.total},0)
const resultFormated = result.toLocaleString("pt-BR",{
    style:"currency",
    currency:"BRL"})
    setTotal(resultFormated)

}

    return(
    <CartContext.Provider 
    value={{ cart,
            cartAmount:cart.length, //bolinha numeros
            addItemCart,removeItemCart,total
     }}>

        {children}

    </CartContext.Provider>  
    )
}

export default CartProvider;