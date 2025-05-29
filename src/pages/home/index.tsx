
import { BsCartPlus } from "react-icons/bs"

export function Home(){
    return(
      <div>
        <main className="w-full max-w-7xl px-4 mx-auto">
        <h1 className="rounded bg-gray-300 font-bold text-2xl mb-4 mt-10 text-center">
           Produtos em Alta </h1>
       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <section className="w-full">
<img className="w-full rounded-lg max-h-72 mb-2"
src="https://www.bing.com/images/search?q=imagem+fone&id=03BC7778D6DEBFDF0E63C74CF37347293C16991B&FORM=IACFIR" alt="logo" />
<p className="font-medium mt-1 mb-2">Airpods Pro</p>

<div className="flex gap-3 items-center">
    <strong className="text-zinc-700/90">
        R$ 1000
    </strong>
    <button className="bg-zinc-900 p-1 rounded">
<BsCartPlus/>
    </button>

</div>

        </section>
       </div>

        
        </main>
      </div>  
    )
}