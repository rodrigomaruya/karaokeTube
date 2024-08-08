import Footer from "../../components/Footer"
import Input from "../../components/Input"
import { useState } from "react"
export default function Sertanejo(){

  const [pesquisar, setPesquisar] = useState('')

  return (
    <div className="container">
      <div className='content-input'>

        <Input onChange={(e) => setPesquisar(e.target.value)} value={pesquisar} />
      </div>
      <main className="main main_content">

      </main>
      <Footer/>
    </div>
  )
}