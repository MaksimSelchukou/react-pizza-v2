import React, {useState} from 'react';

export const Index = ({id, imageUrl, title, price, types, sizes, category, rating}) => {

    const [activeSize, setActiveSize] = useState(0)
    const [activeDough, setActiveDough] = useState(0)

    const changeSizePizza = (index) => {
        setActiveSize(index)
    }

    const changeDough = (index) => {
        setActiveDough(index)
    }

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{title}</h4>
            <div className="pizza-block__selector">

                <ul>
                    {/*{types.map((type,ind) => {*/}
                    {/*    if(type === 0){*/}
                    {/*        return (*/}
                    {/*            <li onClick={()=>changeDough(ind)} className={activeDough === ind ? "active": ""} key={ind}>Тонкое</li>*/}
                    {/*        )*/}
                    {/*    }else{*/}
                    {/*        return (*/}
                    {/*            <li onClick={()=>changeDough(ind)} className={activeDough === ind ? "active": ""} key={ind}>Традиционное</li>*/}
                    {/*        )*/}
                    {/*    }*/}

                    {/*})}*/}
                    {types.map((t, ind) => (<li key={ind} onClick={() => changeDough(ind)}
                                                className={activeDough === ind ? "active" : ""}>{t === 0 ? 'Тонкое' : 'Традиционное'}</li>))}


                    {/*<li className="active">тонкое</li>*/}
                    {/*<li>традиционное</li>*/}
                </ul>
                <ul>
                    {sizes.map((s, ind) => (<li key={s} onClick={() => changeSizePizza(ind)}
                                                className={activeSize === ind ? "active" : ""}>{s} cm.</li>))}
                    {/*<li className="active">26 см.</li>*/}

                    {/*<li>30 см.</li>*/}
                    {/*<li>40 см.</li>*/}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <button className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>0</i>
                </button>
            </div>
        </div>
    );
};
