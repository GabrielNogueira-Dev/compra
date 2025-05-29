
export function Cart(){
    return(

      <div className="px-4 w-full max-w-7xl mx-auto">
        <h1 className="font-medium text-2xl text-center my-4">Carrinho de compras</h1>
     
  <section className="flex items-center justify-between border-b-2 border-gray-300">

<img className="w-28 " 
 src="https://www.bing.com/images/search?q=imagem+fone&id=03BC7778D6DEBFDF0E63C74CF37347293C16991B&FORM=IACFIR" alt="logo" />

<strong>preco: R$1000</strong>

<div className="flex items-center justify-center gap-3">
  <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
    -
  </button>

2

   <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
    +
  </button>

</div>

<strong className="float-right">
  SubTototal: R$1.000
</strong>

  </section>

  <p className="font-bold mt-4"> Total: R$1.000</p>

      </div>  
    )
}
