import React from "react";
import {connect} from 'react-redux';
import {Link, useParams} from "react-router-dom";
import './ItemList.css';

const ItemList = ({data, category, categories}) => {
    const routeParams = useParams();
    const categoryName = routeParams.category || category;
    const categoryTitle = categories[categoryName];

    if (Object.keys(data).length === 0) {
        return <div>Нет данных</div>
    }

    const items = data[categoryName].map((item) => {
        const image = `/images/${item.img.item}`;

        return(
            <Link to={`/${categoryName}/${item.id}`}
                  key={item.id}
                  className="category__item"
            >
                <img className="category__img" src={image} alt={item.name} />
                <div className="category__name">{item.name}</div>
            </Link>
        )
    })

    return(
        <div className="category">
            <h2 className="title">{categoryTitle}:</h2>
            <div className="category__items">{items}</div>
        </div>
    )
}

const mapStateToProps = ({data, categories}) => {
    return {data, categories};
}

export default connect(mapStateToProps)(ItemList);