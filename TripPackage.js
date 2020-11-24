 import React from 'react';
 import './TripPackage.css'
export default function TripPackage(){
    return (
        <div>
          <h1 className="trip" style={{color:"blue", paddingLeft:"500px"}}>Holiday Packages</h1>
            <table class="table table-hover text-center bordered">
  <thead>
    <tr>
      <th scope="col">Number</th>
      <th scope="col">Trip Package Name</th>
      <th scope="col">Price of Your Trip</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Weekend Manali</td>
      <td>4999</td>
    </tr>

    <tr>
      <th scope="row">2</th>
      <td>Ooty Holiday Packages</td>
      <td>5999</td>
    </tr>

    <tr>
      <th scope="row">3</th>
      <td>Goa Trip</td>
      <td>6999</td>
    </tr>

    <tr>
      <th scope="row">4</th>
      <td>Mysore Dasara</td>
      <td>2999</td>
    </tr>

    <tr>
      <th scope="row">5</th>
      <td>Trivandrum Package</td>
      <td>3999</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Shimla Winter Trip</td>
      <td>7999</td>
    </tr>
  </tbody>
</table>
        </div>
    )
}
