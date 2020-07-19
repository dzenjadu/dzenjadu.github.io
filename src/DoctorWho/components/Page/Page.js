import React from "react";
import {connect} from 'react-redux';
import {useParams} from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import ItemDetails from "../ItemDetails/ItemDetails";
import ItemDescription from "../ItemDescription/ItemDescription";
import './Page.css';

const Page = ({data}) => {
    const {id, category} = useParams();
    const [item] = data[category].filter((category) => {
        return category.id === Number(id);
    });

    return(
        <div className="page">
            <Breadcrumbs titlePage={item.name} />
            <div className="page__title">{item.name}</div>
            <div className="page__block">
                <div className="page__cell">
                    <div className="page__info">
                        <ItemDetails />
                        <ItemDescription />
                    </div>
                </div>
                <div className="page__cell page__cell_img">
                    <img src={`/images/${item.img.page}`} className="page__img" alt={item.name} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({data}) => {
    return {data};
}

export default connect(mapStateToProps)(Page);