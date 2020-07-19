import React from "react";
import {connect} from 'react-redux';
import {useParams} from "react-router-dom";
import './ItemDetails.css';

const ItemDetails = ({data, details}) => {
    const {id, category} = useParams();

    const [currentItem] = data[category].filter((item) => {
        return item.id === Number(id);
    })

    const itemList = Object.entries(currentItem['details']).map(([detailKey, detailValue], index) => {
        let subDetails = []

        if (typeof detailValue !== 'string') {
            if (Array.isArray(detailValue)) {
                detailValue.map((value) => {
                    subDetails.push(<div key={value} className="details__subitem">{value}</div>)
                })
            } else {
                Object.entries(detailValue).map(([key, value]) => {
                    subDetails.push(<div key={key} className="details__subitem">{details[key]}: {value}</div>)
                })
            }
        }

        const detailsList = typeof detailValue === 'string'
                            ? <div className="details__subitem">{detailValue}</div>
                            : <div className="details__list">{subDetails}</div>;

        return(
            <div key={index} className="details__item">
                <div className="details__item-title">{details[detailKey]}:</div>
                {detailsList}
            </div>
        )
    })

    return(
        <div className="details">{itemList}</div>
    )
}

const mapStateToProps = ({data, details}) => {
    return {data, details};
}

export default connect(mapStateToProps)(ItemDetails);