import { BrowserRouter as Router , Route , Link } from 'react-router-dom';
import React from 'react';

export default function Home(){
    return (
        <div>
            <h1 className="home" style={{color:"blue", marginLeft:"500px"}}>Welcome to my Page</h1>
            <div className="container">
                <div className="row">


                    <div className="col-sm">
                         <div className="card" >
                            <img height="220px" src="https://www.holidify.com/images/bgImages/KUFRI.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h3 className="card-title ">Shimla </h3>
                                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                {/* <Link to="#" className="btn btn-primary">Go somewhere</Link> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-sm">
                         <div className="card" >
                            <img height="220px" src="https://bharatjourneys.com/wp-content/uploads/2017/12/SolangValley13.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h3 className="card-title">Manali </h3>
                                
                                {/* <Link to="#" className="btn btn-primary">Go somewhere</Link> */}
                            </div>
                        </div>
                    </div>


                    <div className="col-sm">
                         <div className="card" >
                            <img height="220px" src="https://th.bing.com/th/id/OIP.zuCyM5myEwB7aAAW7UwLpAHaE3?pid=Api&rs=1" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h3 className="card-title">Goa </h3>
                                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                {/* <Link to="#" className="btn btn-primary">Go somewhere</Link> */}
                            </div>
                        </div>
                    </div>


                    
                </div>



                {/* 2nd row */}

                <div className="row">


<div className="col-sm">
     <div className="card" >
        <img height="220px" src="https://www.tourmyindia.com/images/ooty-weekend-tour2.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h3 className="card-title ">Ooty </h3>
            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            {/* <Link to="#" className="btn btn-primary">Go somewhere</Link> */}
        </div>
    </div>
</div>

<div className="col-sm">
     <div className="card" >
        <img height="220px" src="https://i2.wp.com/oneday.tours/wp-content/uploads/one-day-mysore-local-sightseeing-tour-package-private-cab-header.jpg?resize=1200%2C640&ssl=1" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h3 className="card-title">Mysore </h3>
            
            {/* <Link to="#" className="btn btn-primary">Go somewhere</Link> */}
        </div>
    </div>
</div>


<div className="col-sm">
     <div className="card" >
        <img height="220px" src="https://www.ekeralatourism.net/wp-content/uploads/2019/01/places-to-visit.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h3 className="card-title">Trivandrum </h3>
            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            {/* <Link to="#" className="btn btn-primary">Go somewhere</Link> */}
        </div>
    </div>
</div>
</div>
 </div>
</div>
)
}