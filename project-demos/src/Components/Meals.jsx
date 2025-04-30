import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import '../assets/css/Meals.css'

const Meals = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then(res => {
            setItems(res.data.meals);
        }).catch(err => {
            console.log(err);
        })
    }, [])
    
    const itemList = items.map(({strMeal, strMealThumb, idMeal }) => {
        return (
            <section className="card" key={idMeal}>
                <img src={strMealThumb} alt={strMeal} />
                <section className="content">
                    <p>{strMeal}</p>
                    <p>#{ idMeal}</p>
                </section>
            </section>

        )
    })
    
    return (
        <div className="items-container">
            {itemList}
        </div>
    )

}

export default Meals