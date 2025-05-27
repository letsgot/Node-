import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/Auth/Login"
import Profile from "./components/Profile/Profile"
import { Provider } from "react-redux"
import store from "./redux/store"
import Feed from "./components/Feed/Feed"
import Body from "./components/Common/Body"

function App() {
  return (
    <div >
      {/* <Navbar />
      <div class="text-3xl font-bold ">
        Hello world!
      </div> */}
      <Provider store={store}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path='/' element={<Feed />} />
              <Route path="/login" element={<Login />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
