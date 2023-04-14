import "../style/password.css"
import { Link } from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Cookies from "universal-cookie"
const cookie = new Cookies()


export default function Login() {
    function handleSubmit(e) {
        e.preventDefault()
        const payload = {
            email: e.target[0].value,
            password: e.target[1].value
        }
        axios.post("https://riser-backend.onrender.com/auth/login", payload).then((response) => {
            console.log(123)
            if (response.data.status == "success") {
                cookie.set('jwt', response.data.token, { path: '/' });
                cookie.set('id', response.data.user._id, { path: '/' });
                toast(response.data.message)
                window.open("/products", "_self")
            }
            else if (response.data.status == "fault") {
                toast(response.data.message.toString())
            }
        }).catch((error) => {
            console.log(error)
            toast("Something Went Wrong")
        })
    }
    return (
        <div className="main">
            <form className="password" onSubmit={handleSubmit}>
                <div className="phead">SignIn</div>
                <label className="plabel">Email</label>
                <input type="email" className="pinput" />
                <label className="plabel">Password</label>
                <input type="password" className="pinput" />
                <Link to="/forget-password" className="plabel">Forget Password?</Link>
                <div className="pbtn">
                    <button className="pbtnins">Login</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}