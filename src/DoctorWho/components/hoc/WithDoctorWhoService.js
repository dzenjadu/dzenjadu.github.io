import React from "react";
import {connect} from 'react-redux';
import DoctorWhoService from "../../service/DoctorWhoService";
import {categoriesLoaded, dataLoaded, detailsLoaded} from "../../actions";

const WithDoctorWhoService = ({categoriesLoaded, dataLoaded, detailsLoaded, children}) => {
    const doctorWhoService = new DoctorWhoService();

    categoriesLoaded(doctorWhoService.getCategories())
    detailsLoaded(doctorWhoService.getDetails())

    doctorWhoService.getData().then((data) => {
        dataLoaded(data)
    })

    return(
        <div>{children}</div>
    )
}

const mapDispatchToProps = {
    dataLoaded,
    categoriesLoaded,
    detailsLoaded
}

export default connect(null, mapDispatchToProps)(WithDoctorWhoService);