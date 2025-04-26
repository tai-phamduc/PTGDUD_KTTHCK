import './App.css'
import TopNavBar from './components/TopNavBar'
import Header from './components/Header'
import Menu from './components/Menu'
import Slides from './components/Slides'
import Sidebar from './components/Sidebar'
import Chung from './components/Chung'
import Campus from './components/Campus'
import Info from './components/Info'
import BottomBar from './components/BottomBar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <TopNavBar />
      <Header />
      <div className="container">
        <Menu />
        <Slides />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 p-0">
              <Sidebar />
            </div>
            <div className="col-md-9">
              <Chung />
            </div>
          </div>
        </div>
        <Campus/>
        <Info />
        <BottomBar/>
        <Footer/>
      </div>
    </>
  )
}

export default App
