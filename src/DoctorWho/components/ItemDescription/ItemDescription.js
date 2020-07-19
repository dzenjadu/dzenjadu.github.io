import React from "react";
import {connect} from 'react-redux';
import {useParams} from "react-router-dom";
import './ItemDescription.css';

const ItemDescription = ({data}) => {
    const {id, category} = useParams();

    const [currentItem] = data[category].filter((item) => {
        return item.id === Number(id);
    })

    const descriptionList = currentItem['description'].map((item) => {
        return(
            <div key={item.title} className="description__block">
                <div className="description__title">{item.title}:</div>
                <div className="description__text">{item.text}</div>
            </div>
        )
    })

    return(
        <div className="description">
            {descriptionList}
        </div>
    )
}

const mapStateToProps = ({data}) => {
    return {data};
}

export default connect(mapStateToProps)(ItemDescription);