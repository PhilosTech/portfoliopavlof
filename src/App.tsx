import { useEffect, useState } from "react"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { GlobalStyle } from "./styles/global"
import "react-toastify/dist/ReactToastify.css"
import Loader from "./components/Loader/Loader"
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500)

      return () => clearTimeout(timer)
    }

    window.addEventListener("load", handleLoad)

    return () => {
      window.removeEventListener("load", handleLoad)
    };
  }, [])

  if (loading) {
    return (
      <>
        <GlobalStyle />
        <Loader isLoading={loading} />
      </>
    )
  }
  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  )
}

export default App
