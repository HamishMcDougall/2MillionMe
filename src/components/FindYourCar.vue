<template>
  <div class="FindYourCar">
    <form id="car">

      <p>
        <h3> Your insurance Type </h3>
        <input type="radio" name="Comprehensive Car Insurance" value="Comprehensive Car Insurance" v-model="UserCarType.Insurance"> Comprehensive Car Insurance
        <br/>
        <input type="radio" name="Third Party Car Insurance" value="Third Party Car Insurance" v-model="UserCarType.Insurance"> Third Party Car Insurance
      </p>



      <h3>Policy start date</h3>
      <p>To give you the most accurate price tell us the date you want your cover to start. <br/>
        Your policy start date must be before 1st May 2017.</p>

  <!-- date -->
  <p>
    <input type="date" v-model="UserCarType.date">
  </p>


  <!-- select -->

<h3>Find your car using the search below</h3>
  <p>
    <p>Year of manufacture</p>
    <select v-model="UserCarType.CarYear">
      <option value="">Select</option>
      <option value="2017">2017</option>
      <option value="2016">2016</option>
      <option value="2017">2015</option>
      <option value="2016">2014</option>
      <option value="2016">2013</option>
    </select>
  </p>

  <p>
    <p>Car make</p>
    <select v-model="UserCarType.CarMake">
      <option value="">Select</option>
      <option value="something">something</option>
      <option value="sme">sme</option>
      <option value="erwre">erwre</option>
      <option value="20werew14">20werew14</option>
      <option value="20dfsddf13">20dfsddf13</option>
    </select>
  </p>


  <p>
    <p>Car model</p>
    <select v-model="UserCarType.CarModel">
      <option value="">Select</option>
      <option value="something">something</option>
      <option value="sme">sme</option>
      <option value="erwre">erwre</option>
      <option value="20werew14">20werew14</option>
      <option value="20dfsddf13">20dfsddf13</option>
    </select>
  </p>

  <p>
    <p>Transmission type</p>
    <select v-model="UserCarType.TransmissionType">
      <option value="">Select</option>
      <option value="something">something</option>
      <option value="sme">sme</option>
      <option value="erwre">erwre</option>
      <option value="20werew14">20werew14</option>
      <option value="20dfsddf13">20dfsddf13</option>
    </select>
  </p>


  <p>
    <p>Number of cylinders</p>
    <select v-model="UserCarType.NumberOfCylinders">
      <option value="">Select</option>
      <option value="something">something</option>
      <option value="sme">sme</option>
      <option value="erwre">erwre</option>
      <option value="20werew14">20werew14</option>
      <option value="20dfsddf13">20dfsddf13</option>
    </select>
  </p>


  <p>
    <p>Body type</p>
    <select v-model="UserCarType.BodyType">
      <option value="">Select</option>
      <option value="something">something</option>
      <option value="sme">sme</option>
      <option value="erwre">erwre</option>
      <option value="20werew14">20werew14</option>
      <option value="20dfsddf13">20dfsddf13</option>
    </select>
  </p>



  <h3>Is the car financed? </h3>
  <input type="radio" name="YesFinanced" value="Yes Financed" v-model="UserCarType.Financed"> Yes
  <br/>
  <input type="radio" name="NoFinanced" value="Not Financed" v-model="UserCarType.Financed"> No

  <h3>How is your car primarily used? </h3>
  <input type="radio" name="primarilyUse" value="Private" v-model="UserCarType.PrimarilyUse"> Private
  <br/>
  <input type="radio" name="primarilyUse" value="Business" v-model="UserCarType.PrimarilyUse"> Business
  <p>Describe the type of business use</p>
  <select v-model="UserCarType.BusinessUse">
    <option value="">Select</option>
    <option value="On road professional/Salesperson">On road professional/Salesperson</option>
    <option value="Tradesperson">Tradesperson</option>
    <option value="Driver education">Driver education</option>
    <option value="Hire/Courtesy/Car sharing scheme">Hire/Courtesy/Car sharing scheme</option>
    <option value="Racing/Sporting events">Racing/Sporting events</option>
    <option value="Taxi">Taxi</option>
    <option value="Courier/Delivery driver">Courier/Delivery driver</option>
    <option value="Removalist">Removalist</option>
  </select>

  <h3>How many kilometres does your car travel on average each year?</h3>
  <input type="radio" name="Km" value="Less than 5,000" v-model="UserCarType.KMdistance"> Less than 5,000
  <br/>
  <input type="radio" name="Km" value="Up to 10,000" v-model="UserCarType.KMdistance"> Up to 10,000
  <br/>
  <input type="radio" name="Km" value="Up to 15,000" v-model="UserCarType.KMdistance"> Up to 15,000
  <br/>
  <input type="radio" name="Km" value="Up to 20,000" v-model="UserCarType.KMdistance"> Up to 20,000
  <br/>
  <input type="radio" name="Km" value="More than 20,000" v-model="UserCarType.KMdistance"> More than 20,000

<h3>Address where your car is usually kept overnigh ?</h3>
<p>Addres line 1</p>
<input type="text" v-model="UserCarType.Address1"> <br/>
<p>Addres line 2</p>
<input type="text" v-model="UserCarType.Address2"> <br/>
<p>Addres line 3</p>
<input type="text" v-model="UserCarType.Address3"> <br/>
<br/>

<p>State</p>
<select v-model="UserCarType.State">
  <option value="">Select</option>
  <option value="VIC">VIC</option>
  <option value="ACT">ACT</option>
  <option value="NSW">NSW</option>
  <option value="QLD">QLD</option>
  <option value="NT">NT</option>
  <option value="WA">WA</option>
  <option value="SA">SA</option>
  <option value="TAS">TAS</option>
</select>



</form>

<button type="button" name="button" class="btn btn-primary" v-on:click="logInput">submit</button>
</div>

  </div>
</template>

<script>

import Firebase from 'firebase'


let config = {
  apiKey: "AIzaSyCy2zLpxnHbm1wdCDM_l-wApDDnitxkhR4",
  authDomain: "millionvue.firebaseapp.com",
  databaseURL: "https://millionvue.firebaseio.com",
  storageBucket: "millionvue.appspot.com",
  messagingSenderId: "458952384195"
  };

let app = Firebase.initializeApp(config)
let db = app.database()
let userCarRef = db.ref('UserCar')

firebase: {
    UserCar: userCarRef
  }

export default {
    name: 'FindYourCar',
  data () {
    return {
      UserCarType: {
        Insurance:'',
        date: '',
        CarYear: '',
        CarMake: '',
        CarModel: '',
        TransmissionType: '',
        NumberOfCylinders: '',
        BodyType: '',
        Financed:'',
        PrimarilyUse:'',
        BusinessUse:'',
        KMdistance:'',
        Address1:'',
        Address2:'',
        Address3:'',
        State:''
      }
    }
  },
  methods:{
    logInput: function (){
      console.log(this.UserCarType);
      userCarRef.push(this.UserCarType)
    }
  },
}





</script>

<style>

</style>
