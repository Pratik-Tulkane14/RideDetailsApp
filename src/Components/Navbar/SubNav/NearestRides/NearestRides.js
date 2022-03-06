import React , { useEffect ,useState}  from 'react'
import NearestRideDetails from './NearestRideDetails/NearestRideDetails';
function NearestRides() {
    let d =0;
    const [data , setData] = useState([]);
    const getData = async() =>{
       let url = 'https://assessment.api.vweb.app/rides';
        let result = await fetch(url);
        var data = await result.json();
        setData (data);
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <>    
        
       <div >
                 {data.map((element) => {
                     return <div className="details" key={element.date} style={{ marginLeft: "2rem" }}>
               <NearestRideDetails id= {element.id} originStationCode={element.origin_station_code} stationPath={element.station_path} destinationStationCode={element.destination_station_code} Date={element.date} mapUrl={element.map_url} State={element.state} City={element.city} Url={element.map_url} distance={d =parseInt(element.station_path.slice(0,2))-element.origin_station_code}/> 
                    </div>
                                })}
           </div>
     </>
  )
}

export default NearestRides
