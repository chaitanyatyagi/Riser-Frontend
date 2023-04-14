import "../style/product.css"
import { Link } from "react-router-dom"

export default function IndividualProduct(props) {
    if (props.login) {
        return (
            <div className="indmain">
                <div className="indmain-left" style={{ backgroundImage: `url(${props.elem.image})` }}></div>
                <div className="indmain-right">
                    <div className="insmain-right-title">{props.elem.title}</div>
                    <div className="insmain-right-description">{props.elem.description}</div>
                    <div className="insmain-right-count">Count - {props.elem.rating.count}</div>
                    <div className="insmain-right-price">Price - Rs {props.elem.price}</div>
                    <Link to="/products" className="insmain-right-btn" >Back</Link>
                </div>
            </div>
        )
    }
    else {
        return <div>Please Login First</div>
    }
}