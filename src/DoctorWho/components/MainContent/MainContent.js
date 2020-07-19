import React, {Component} from "react";

import {connect} from 'react-redux';

import {Switch, Route} from 'react-router-dom';
import ItemList from "../ItemList/ItemList";
import Page from "../Page/Page";

const MainContent = ({categories}) => {

    const categoryListMain = Object.entries(categories).map(([link]) => {
        return <ItemList key={link} category={link} />
    });

    return(
        <Switch>
            <Route path="/" exact>
                {categoryListMain}
            </Route>
            <Route path="/:category" exact>
                <ItemList />
            </Route>
            <Route path="/:category/:id">
                <Page />
            </Route>
        </Switch>
    )
}

const mapStateToProps = ({categories}) => {
    return {categories};
}

export default connect(mapStateToProps)(MainContent);