import BasicExample from "./BasicExample"
import "../style/products.css"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Products(props) {
    const [product, setProducts] = useState([])
    const [price, setPrice] = useState(0)
    const [rating, setRating] = useState(5)

    useEffect(() => {
        axios.get(`http://localhost:5800/products/get-products`).then((res) => {
            setProducts(res.data.products)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        console.log(price, rating, 1)
        const payload = {
            price: price,
            rating: rating
        }
        axios.post(`http://localhost:5800/products/get-products/filters`, payload).then((res) => {
            setProducts(res.data.products)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="all-products">
            <form className="filter">
                <div className="filter-head">FILTERS</div>
                <label className="filter-label">Price Range: {price}</label>
                <input type="range" min={0} max={1000} className="filter-input" onChange={(event) => setPrice(event.target.value)} />
                <label className="filter-label">Rating: {rating}</label>
                <input type="range" min={0} max={5} className="filter-input" onChange={(event) => setRating(event.target.value)} />
                <button className="filter-btn" type="submit" onClick={handleSubmit}>Apply Filters</button>
            </form>
            <div className="products">
                {
                    product.map((elem, key) => (
                        <BasicExample elem={elem} key={key} />
                    ))
                }
            </div>
        </div>
    )
}