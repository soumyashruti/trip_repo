import React from 'react';
import './Contact.css'

export default function Contact(){
    return (
        <div>
             <h1 className="contact" style={{color:"blue"}}>Contact Us</h1>
             <div className="card" style={{width: "20rem", marginLeft:"500px", 
                    border:"2px solid skyblue",padding:"10px",}}>
                        <img src="https://uat-cets.aptonline.in:8090/TSEAMCET/images/Contact.png" alt="..."/>
                        <div class="card-body">
                            <p style={{color:"black"}} class="card-text">Name: Travels <br/> Contact: 9902121346 <br/> Website: www.travels.com</p>
                        </div>
                    </div>
        </div>
    )
}