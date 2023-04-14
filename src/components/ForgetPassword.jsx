import "../style/password.css"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"

export default function ForgetPassword() {
    function handleSubmit(e) {
        e.preventDefault()
        const payload = {
            email: e.target[0].value
        }
        axios.post("http://localhost:5800/auth/forget-password", payload).then((response) => {
            if (response.data.status == "success") {
                toast(response.data.message)
                window.open("/", "_self")
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
                <div className="phead">Forget-Password</div>
                <label className="plabel">Email</label>
                <input type="email" className="pinput" />
                <div className="pbtn">
                    <button className="pbtnins">Sent Email</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}