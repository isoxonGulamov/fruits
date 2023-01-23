import { Header } from "../components";
import { Footer } from "../components";

export const MainLayot = ({children})=>{
  return (
    <>
    <header>
      <Header/>
    </header>
    <main>
     <div className="container">
     {children}
     </div>
    </main>
    <footer className="footer">
      <Footer/>
    </footer>
    </>
  )
}