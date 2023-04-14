import "../style/password.css"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function ResetPassword() {

    let params = (new URL(document.location)).searchParams;
    let name = params.get("token")

    function handleSubmit(e) {
        e.preventDefault()
        const payload = {
            password: e.target[0].value
        }
        axios.post(`https://riser-backend.onrender.com/auth/reset-password/${name}`, payload).then((response) => {
            console.log(response)
            if (response.data.status == "success") {
                window.open("/", "_self")
                toast(response.data.message)
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
                <div className="phead">Reset-Password</div>
                <label className="plabel">New Password</label>
                <input type="password" className="pinput" />
                <div className="pbtn">
                    <button className="pbtnins">Reset</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}