<template>
<div class="body-model">




  <nav class="navbar navbar-fixed-top" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <span class="navbar-brand">2CAR</span>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav pull-right">
          <li>
            <div class="nav-buy">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>



  <h3> Enter your details</h3>
  <hr>



  <form @submit.prevent="validateBeforeSubmit">



<!-- type of insurance -->
      <h3> Your insurance Type </h3>
        <input type="radio" name="TypeOfInsurance" value="Comprehensive Car Insurance" v-model="UserCarType.Insurance" v-validate:TypeOfInsurance="{required: true}"> Comprehensive Car Insurance
      <br/>
        <input type="radio" name="TypeOfInsurance" value="Third Party Car Insurance" v-model="UserCarType.Insurance"> Third Party Car Insurance
        <span v-show="errors.has('TypeOfInsurance')" class="help is-danger">Please select a type</span>
    <hr>


<!-- Policy Start Date -->
    <h3>Policy start date</h3>
    <p>To give you the most accurate price tell us the date you want your cover to start. <br/>
      Your policy start date must be before 1st May 2017.</p>

      <p>
        <input type="date" v-model="UserCarType.date" name="date" v-validate:date="{required: true}">
      </p>
       <span v-show="errors.has('date')" class="help is-danger">Please enter a date</span>
      <hr>




<!-- find your car / Need an API  -->
      <h3>Find your car using the search below</h3>
        <p>
          <p>Year of manufacture</p>
            <span class="select">
          <select v-model="UserCarType.CarYear" name="CarYear" v-validate:CarYear="{required: true}">
            <option value="1" selected >Select</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2017">2015</option>
            <option value="2016">2014</option>
            <option value="2016">2013</option>
          </select>
        </span>
        </p>
        <span v-show="errors.has('CarYear')" class="help is-danger">Please select</span>



        <p>
          <p>Car make</p>
            <span class="select">
          <select v-model="UserCarType.CarMake" name="CarMake" v-validate:CarMake="{required: true}">
            <option value="1" selected >Select</option>
            <option value="something">something</option>
            <option value="sme">sme</option>
            <option value="erwre">erwre</option>
            <option value="20werew14">20werew14</option>
            <option value="20dfsddf13">20dfsddf13</option>
          </select>
        </span>
        </p>
          <span v-show="errors.has('CarMake')" class="help is-danger">Please select</span>



          <p>
            <p>Car model</p>
                <span class="select">
            <select v-model="UserCarType.CarModel" name="CarModel" v-validate:CarModel="{required: true}">
              <option value="1" selected>Select</option>
              <option value="something">something</option>
              <option value="sme">sme</option>
              <option value="erwre">erwre</option>
              <option value="20werew14">20werew14</option>
              <option value="20dfsddf13">20dfsddf13</option>
            </select>
          </span>
          </p>
            <span v-show="errors.has('CarModel')" class="help is-danger">Please select</span>




          <p>
            <p>Transmission type</p>
              <span class="select">
            <select v-model="UserCarType.TransmissionType" name="TransmissionType" v-validate:TransmissionType="{required: true}">
              <option value="something">something</option>
              <option value="sme">sme</option>
              <option value="erwre">erwre</option>
              <option value="20werew14">20werew14</option>
              <option value="20dfsddf13">20dfsddf13</option>
            </select>
          </span>
          </p>
            <span v-show="errors.has('TransmissionType')" class="help is-danger">Please select</span>


          <p>
            <p>Number of cylinders</p>
                  <span class="select">
            <select v-model="UserCarType.NumberOfCylinders" name="NumberOfCylinders" v-validate:NumberOfCylinders="{required: true}">
              <option value="something">something</option>
              <option value="sme">sme</option>
              <option value="erwre">erwre</option>
              <option value="20werew14">20werew14</option>
              <option value="20dfsddf13">20dfsddf13</option>
            </select>
          </span>
          </p>
            <span v-show="errors.has('NumberOfCylinders')" class="help is-danger">Please select</span>


          <p>
            <p>Body type</p>
                <span class="select">
            <select v-model="UserCarType.BodyType" name="BodyType" v-validate:BodyType="{required: true}">
              <option value="something">something</option>
              <option value="sme">sme</option>
              <option value="erwre">erwre</option>
              <option value="20werew14">20werew14</option>
              <option value="20dfsddf13">20dfsddf13</option>
            </select>
          </span>
          </p>
            <span v-show="errors.has('BodyType')" class="help is-danger">Please select</span>
          <hr>


          <!-- car finance  -->
          <h3>Is the car financed? </h3>
            <input type="radio" name="Financed" value="Yes Financed" v-model="UserCarType.Financed"  v-validate:Financed="{required: true}"> Yes
          <br/>
            <input type="radio" name="Financed" value="Not Financed" v-model="UserCarType.Financed"> No
              <span v-show="errors.has('Financed')" class="help is-danger">Please select a type</span>
          <hr>

            <!-- how the car is used  -->
          <h3>How is your car primarily used? </h3>
          <input type="radio" name="primarilyUse" value="Private" v-model="UserCarType.PrimarilyUse" v-validate:primarilyUse="{required: true}"> Private
            <br/>
          <input type="radio" name="primarilyUse" value="Business" v-model="UserCarType.PrimarilyUse"> Business
            <span v-show="errors.has('primarilyUse')" class="help is-danger">Please select a type</span>



          <p>Describe the type of business use</p>

          <span class="select">
            <select v-model="UserCarType.BusinessUse" name="BusinessUse" v-validate:BodyType="{required: true}">
              <option value="On road professional/Salesperson">On road professional/Salesperson</option>
              <option value="Tradesperson">Tradesperson</option>
              <option value="Driver education">Driver education</option>
              <option value="Hire/Courtesy/Car sharing scheme">Hire/Courtesy/Car sharing scheme</option>
              <option value="Racing/Sporting events">Racing/Sporting events</option>
              <option value="Taxi">Taxi</option>
              <option value="Courier/Delivery driver">Courier/Delivery driver</option>
              <option value="Removalist">Removalist</option>
            </select>
          </span>
            <span v-show="errors.has('BusinessUse')" class="help is-danger">Please select</span>
          <hr>


  <!-- how many km the car travells  -->

          <h3>How many kilometres does your car travel on average each year?</h3>
            <input type="radio" name="Km" value="Less than 5,000" v-model="UserCarType.KMdistance" v-validate:Km="{required: true}"> Less than 5,000
          <br/>
            <input type="radio" name="Km" value="Up to 10,000" v-model="UserCarType.KMdistance"> Up to 10,000
          <br/>
            <input type="radio" name="Km" value="Up to 15,000" v-model="UserCarType.KMdistance"> Up to 15,000
          <br/>
            <input type="radio" name="Km" value="Up to 20,000" v-model="UserCarType.KMdistance"> Up to 20,000
          <br/>
            <input type="radio" name="Km" value="More than 20,000" v-model="UserCarType.KMdistance"> More than 20,000
          <span v-show="errors.has('Km')" class="help is-danger">Please select</span>
          <hr>


  <!-- address input  -->
          <h3>Address where your car is usually kept overnight ?</h3>
          <p>Address line </p>
          <input class="input" type="text" v-model="UserCarType.Address1"  name="Address1" v-validate:Address1="{required: true}">
              <span v-show="errors.has('Address1')" class="help is-danger">Please select</span>
            <br/>
          <p>Address line 2</p>
          <input class="input" type="text" v-model="UserCarType.Address2" name="Address2" v-validate:Address2="{required: true}">
              <span v-show="errors.has('Address2')" class="help is-danger">Please select</span>
            <br/>
          <p>Address line 3</p>
          <input class="input" type="text" v-model="UserCarType.Address3" name="Address3" v-validate:Address3="{required: true}">
              <span v-show="errors.has('Address3')" class="help is-danger">Please select</span>
            <br/>

            <p>State</p>
                <span class="select">
            <select v-model="UserCarType.State" name="State" v-validate:State="{required: true}">
              <option value="VIC">VIC</option>
              <option value="ACT">ACT</option>
              <option value="NSW">NSW</option>
              <option value="QLD">QLD</option>
              <option value="NT">NT</option>
              <option value="WA">WA</option>
              <option value="SA">SA</option>
              <option value="TAS">TAS</option>
            </select>
          </span>
            <span v-show="errors.has('State')" class="help is-danger">Please select</span>
          <hr>

  <!-- driver DOB  -->
          <h3>Date of birth of main driver</h3>
            <input type="date" v-model="UserCarType.DriverDOB" name="DriverDOB"  v-validate:State="{required: true}">
            <span v-show="errors.has('DriverDOB')" class="help is-danger">Please select</span>
          <hr>

  <!-- driver DOB  -->
        <h3>Gender of main driver</h3>
    <span class="select">
      <select v-model="UserCarType.DriverGender" name="DriverGender" v-validate:DriverGender="{required: true}">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </span>
      <span v-show="errors.has('DriverGender')" class="help is-danger">Please select</span>
      <hr>


  <!-- Current Insurance provider -->
      <h3>Who is your current or most recent car insurer?</h3>
        <input class="input" type="text" v-model="UserCarType.CurrentInsurance" name="CurrentInsurance" v-validate:CurrentInsurance="{required: true}">
      <span v-show="errors.has('CurrentInsurance')" class="help is-danger">Please select</span>
      <hr>

  <!-- last 3 years -->
        <h3>In the last 3 years how many car related claims, driver licence suspensions, cancellations, disqualifications and restrictions has the main driver had?</h3>

            <span class="select">
        <select v-model="UserCarType.DriverSuspenstion" name="DriverSuspenstion" v-validate:DriverSuspenstion="{required: true}">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </span>
      <span v-show="errors.has('DriverSuspenstion')" class="help is-danger">Please select</span>
      <hr>

      <!-- additinal drivers-->
            <h3>How many additional drivers would you like listed on this policy?</h3>
                <span class="select">
            <select v-model="UserCarType.AdditionalDriver" name="AdditionalDriver" v-validate:AdditionalDriver="{required: true}">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </span>
          <span v-show="errors.has('AdditionalDriver')" class="help is-danger">Please select</span>
          <hr>

      <!-- current excess -->
          <h3>How much is your current excess</h3>
          <input class="input" type="text" v-model="UserCarType.Excess"  name="Excess" v-validate:Excess="{required: true}">
            <span v-show="errors.has('Excess')" class="help is-danger">Please select</span>
          <hr>


      <!-- optinal cover -->
          <h3>Optional cover </h3>
            <input type="checkbox" v-model="UserCarType.Windscreen" > Windscreen
              <br>
            <input type="checkbox" v-model="UserCarType.HireCar"> Hire Car
              <br>
            <input type="checkbox" v-model="UserCarType.RoadsideAssist"> Roadside Assist
              <br>
          <hr>

      <p class="control">
                  <button class="button is-primary butonBlue" type="submit">Submit</button>
              </p>



</form>

<br>
<br>

<div class="col-lg-12 foooter">
    <p>Copyright &copy; 2Car does not currently offer any financial services or financial products. Information on this website is not financial advice.</p>
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
    name: 'form-example',
    data: () => ({
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
        State:'',
        DriverDOB:'',
        DriverGender:'',
        CurrentInsurance:'',
        DriverSuspenstion:'',
        AdditionalDriver:'',
        Excess:'',
        Windscreen:'',
        HireCar:'',
        RoadsideAssist:''
      }
    }),
    methods: {
        validateBeforeSubmit() {
            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line
              //  alert('From Submitted!');
                console.log(this.UserCarType);
                userCarRef.push(this.UserCarType)
            }).catch(() => {
                // eslint-disable-next-line
              //  alert('Correct them errors!');
            });
        }
    }
};
</script>

<style scoped>
h3{
  font-size: 20px;
  padding-bottom: 20px;
}

.body-model{
  padding: 30px;
}


</style>
