import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import NavScrollExample from './components/NavScrollExample';
import Products from './components/Products';
import MenProduct from './components/MenProduct';
import WomenProduct from './components/WomenProduct';
import OtherProduct from './components/OtherProduct';
import IndividualProduct from './components/IndividualProduct';
import Login from './components/Login';
import Register from "./components/Register"
import ForgetPassword from './components/ForgetPassword';
import ResetPassword from './components/ResetPassword';
import Cookies from "universal-cookie"
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

  const cookie = new Cookies()
  const [login, setLogin] = useState(false)
  const [id, setId] = useState(null)

  useEffect(() => {
    const token = cookie.get("jwt")
    setId(cookie.get("id"))
    if (token) {
      setLogin(true)
    }
    else {
      setLogin(false)
    }
  })

  const [product, setProducts] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5800/products/get-products").then((res) => {
      setProducts(res.data.products)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <NavScrollExample login={login} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/men" element={<MenProduct />} />
          <Route path="/products/women" element={<WomenProduct />} />
          <Route path="/products/other" element={<OtherProduct />} />
          {
            product.map((elem, key) => (
              <Route path={`/product/${elem._id}`} element={<IndividualProduct elem={elem} login={login} />} />
            ))
          }
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
