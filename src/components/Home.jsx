import "../style/home.css"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home">
            <div className="home-ins">
                <div className="home-ins-left">E-Commerce: Explore the UnExplored</div>
                <Link style={{ textDecoration: "None" }} to="/products" className="home-ins-right" >Explore</Link>
            </div>
        </div>
    )
}