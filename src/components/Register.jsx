import "../style/password.css"
import { Link } from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function Register() {
    function handleSubmit(e) {
        e.preventDefault()
        const payload = {
            name: e.target[0].value,
            mobile: e.target[1].value,
            email: e.target[2].value,
            password: e.target[3].value
        }
        axios.post("http://localhost:5800/auth/register", payload).then((response) => {
            if (response.data.status == "success") {
                toast(response.data.message)
                window.open("/login", "_self")
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
                <div className="phead">SignUp</div>
                <label className="plabel">Name</label>
                <input type="text" className="pinput" />
                <label className="plabel">Mobile</label>
                <input type="text" className="pinput" />
                <label className="plabel">Email</label>
                <input type="email" className="pinput" />
                <label className="plabel">Password</label>
                <input type="password" className="pinput" />
                <Link to="/login" className="plabel">Already Registered?</Link>
                <div className="pbtn">
                    <button className="pbtnins">Register</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}