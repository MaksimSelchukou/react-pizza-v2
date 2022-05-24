import React from 'react';

export const Categories = () => {

    const [activeCateg, setActiveCateg] = React.useState(0)
    const listCategories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ]

    const changeCategories = (indexCateg) => {
        setActiveCateg(indexCateg)
    }

    return (
        <div className="categories">
            <ul>
                {listCategories.map((cat, index) => (
                        <li key={index} onClick={() => changeCategories(index)}
                            className={activeCateg === index ? 'active' : ''}>{cat}</li>
                    )
                )}

            </ul>
        </div>
    );
};

