import React from "react";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import './Breadcrumbs.css'

const Breadcrumbs = ({categories, titlePage}) => {
    const {category, id} = useParams();

    const breadcrumbs = [
        {link: '/', title: 'Главная'},
        {link: `/${category}`, title: categories[category]},
        {link: `/${category}/${id}`, title: titlePage}
    ]

    const linksList = breadcrumbs.map((breadcrumb) => {
        return <Link to={breadcrumb.link} key={breadcrumb.title} className="breadcrumbs__link">{breadcrumb.title}</Link>
    })

    return <div className="breadcrumbs">{linksList}</div>
}

const mapStateToProps = ({categories}) => {
    return {categories}
}

export default connect(mapStateToProps)(Breadcrumbs);