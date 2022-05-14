
import "./styles/shv_carList.css";

const TaxiItem = () => {
  return (

    <div>
      <div className="searchItem">
      <img
        src="https://www.pricelanka.lk/wp-content/uploads/2021/03/Suzuki-Wagon-R-Stingray.png"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Budget Car</h1>
        <span className="siDistance">Suzuki</span>
        <span className="siTaxiOp">Suzuki Wagon - R</span>
        <span className="siSubtitle">
          Comfortable Ride
        </span>
        <span className="siFeatures">
          Parking • AC • 4 Seat • Wifi
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">100 LKR</span>
          <span className="siTaxOp">Per KM</span>
          <a href="/BookTaxi"><button className="siCheckButton">Reserve</button></a>
        </div>
      </div>
    </div><br/><br/>

    <div className="searchItem">
      <img
        src="https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/segment_review/hero_image/2020-Mercedes-CLA-200-sedan-red-1001x565-%281%29.jpg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Luxery Car</h1>
        <span className="siDistance">CLA-200</span>
        <span className="siTaxiOp">Mercedes Benz</span>
        <span className="siSubtitle">
          Comfortable Ride
        </span>
        <span className="siFeatures">
          Parking • AC • 4 Seat • Wifi
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>9.0</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">500 LKR</span>
          <span className="siTaxOp">Per KM</span>
          <a href="/BookTaxi"><button className="siCheckButton">Reserve</button></a>
        </div>
      </div>
    </div><br/><br/>


    <div className="searchItem">
      <img
        src="https://www.torqueautos.asia/vehicle_image/22591_b.jpeg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Luxery Van</h1>
        <span className="siDistance">Toyota</span>
        <span className="siTaxiOp">High Ace</span>
        <span className="siSubtitle">
          Comfortable Ride
        </span>
        <span className="siFeatures">
          Parking • AC • 14 Seat • Wifi
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>9.0</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">750 LKR</span>
          <span className="siTaxOp">Per KM</span>
          <a href="/BookTaxi"><button className="siCheckButton">Reserve</button></a>
        </div>
      </div>
    </div><br/><br/>
    <div className="searchItem">
      <img
        src="https://media.ed.edmunds-media.com/land-rover/range-rover/2019/oem/2019_land-rover_range-rover_4dr-suv_autobiography_fq_oem_1_1600.jpg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Luxery SUV</h1>
        <span className="siDistance">Sport</span>
        <span className="siTaxiOp">Mercedes Benz</span>
        <span className="siSubtitle">
          Comfortable Ride
        </span>
        <span className="siFeatures">
          Parking • AC • 6 Seat • Wifi
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>9.0</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">1000 LKR</span>
          <span className="siTaxOp">Per KM</span>
          <a href="/BookTaxi"><button className="siCheckButton">Reserve</button></a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TaxiItem;
