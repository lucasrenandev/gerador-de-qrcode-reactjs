import qrCode from "./assets/code.png"
import { useEffect } from "react"
import './App.css'

export default function App() {
  const generateCode = () => {
    const section = document.querySelector("section")
    const input = document.querySelector("main input")
    const button = document.querySelector("main button")
    const qrImage = document.querySelector("footer img")
    let inputValue = input.value
    
    if(!inputValue) {
      window.alert("Insira uma URL ou texto!")
    }
    else {
      button.textContent = "Gerando..."
      qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
      qrImage.addEventListener("load", () => {
        section.classList.add("active")
        button.textContent = "Gerar QR Code"
      })
    }
  }

  useEffect(() => {
    window.addEventListener("keyup", () => {
      const section = document.querySelector("section")
      const input = document.querySelector("main input")
      let inputValue = input.value

      if(!inputValue) {
        section.classList.remove("active")
      }
    })
  })

  return (
    <>
     <section>
        <header>
         <h1>Gerador de QR Code</h1>
         <h3>Insira uma URL ou texto para gerar um QR Code</h3> 
        </header>

        <main>
          <input type="text" placeholder='URL ou texto' autoComplete="none" />
          <button onClick={generateCode}>Gerar QR Code</button>
        </main>

        <footer>
          <img src={qrCode} alt="Qr code" />
        </footer>
     </section>
    </>
  )
}