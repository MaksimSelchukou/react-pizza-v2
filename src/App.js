import './scss/app.scss'
import {Header} from "./components/Header";
import {Categories} from "./components/Categories";
import {Sort} from "./components/Sort";
import {PizzaItem} from "./components/PizzaItem";
import {useEffect, useState} from "react";

function App() {

    const [listPizzas, setListPizzas] = useState([])

    useEffect(() => {
        fetch('https://628cb35aa3fd714fd03787d7.mockapi.io/items')
            .then(resp => resp.json())
            .then(items => setListPizzas(items))
    }, [])


    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {listPizzas.map((pizza) => (
                            <PizzaItem
                                key={pizza.id}
                                id={pizza.id}
                                image={pizza.imageUrl}
                                title={pizza.title}
                                types={pizza.types}
                                sizes={pizza.sizes}
                                price={pizza.price}
                                category={pizza.category}
                                rating={pizza.rating}/>))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
