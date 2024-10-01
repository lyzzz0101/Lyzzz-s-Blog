import React, { Component, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import Footer from "./Footer/Footer"
import Loader from "components/_ui/Loader"
import Link from "components/_ui/Link/Link"
import Header from "components/Header/Header"
import { scrollTo } from "utils"

import "./App.scss"

const Home = React.lazy(() => import("components/Home/Home"))

class App extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.path !== this.props.path) return
    this.scrollToTop()
  }

  scrollToTop = () => {
    scrollTo(0, 0)
  }

  render() {
    return (
      <div className="App">
        {/* ... 其他代码保持不变 ... */}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="*"
              element={
                <div
                  style={{
                    height: "90vh",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h2>Uh oh, there&apos;s nothing here</h2>
                  <Link href="/">Take me Home</Link>
                </div>
              }
            ></Route>
          </Routes>

          <Header />

          <Footer />
        </Suspense>
      </div>
    )
  }
}

export default App
