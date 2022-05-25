import './scss/app.scss'
import {Header} from "./components/Header";
import {Categories} from "./components/Categories";
import {Sort} from "./components/Sort";
import {Index} from "./components/PizzaBlock";
import {useEffect, useState} from "react";
import {Skeleton} from "./components/PizzaBlock/Sketeton";

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
                        {listPizzas.length ? listPizzas.map((pizza) => (
                                <Index key={pizza.id} {...pizza}/>)
                            ) :
                            [...new Array(9)].map((_, i) => (
                                <Skeleton key={i}/>))}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
