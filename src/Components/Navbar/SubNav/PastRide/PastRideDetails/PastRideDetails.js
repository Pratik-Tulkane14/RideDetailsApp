import React from 'react'
import './PastRideDetails.css'
function PastRideDetails(props) {
  return (
      <>
        <div className="details">
                    <div className="grid-container">

                                        <img src={props.mapUrl} alt="Ride Img" />
                                </div>
                                <div className="box">
                                    <div className="ride-details">
                                        <h5>Ride Id : {props.id}</h5>
                                         <h5>Origin Station :{props.originStationCode}</h5>
                                        <h5>station_path :[{props.stationPath}]</h5>
                                    <h5>Date : {props.Date}</h5>
                                    <h5>Distance :{props.distance}</h5> 
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="location">
                                            <h6> {props.City}</h6>
                                            <h6> {props.State}</h6>
                                    </div>
                        </div>
                    </div>
      </>
  )
}

export default PastRideDetails