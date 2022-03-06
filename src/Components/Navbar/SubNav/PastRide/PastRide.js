import React , { useEffect ,useState}  from 'react'
import   { Link } from 'react-router-dom';
import PastRideDetails from './PastRideDetails/PastRideDetails';
function PastRide() {
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
       <Link to='/pastride' style={{ textDecoration: "none" }}>
       <div className="details">
         
         {data.map((element) => {
                     return <div className="details" key={element.id}>
               <PastRideDetails id= {element.id} originStationCode={element.origin_station_code} stationPath={element.station_path} destinationStationCode={element.destination_station_code} Date={element.date} mapUrl={element.map_url} State={element.state} City={element.city} Url={element.map_url} distance={d =parseInt(element.station_path.slice(0,2))-element.origin_station_code} />
                    </div>
                                    })}
           
            </div>
        </Link>
      </>
  )
}

export default PastRide