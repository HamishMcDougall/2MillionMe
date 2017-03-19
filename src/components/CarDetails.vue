<template>
  <div class="start">
    <form id="demo">


      <h2>Policy start date</h2>
      <p>To give you the most accurate price tell us the date you want your cover to start. <br/>
Your policy start date must be before 1st May 2017.</p>

  <!-- date -->
  <p>
    <input type="date" v-model="date">
    {{date}}
  </p>
  <!-- checkbox -->
  <p>
    <input type="checkbox" v-model="checked">
    {{checked ? "yes" : "no"}}
  </p>
  <!-- radio buttons -->
  <p>
    <input type="radio" name="picked" value="one" v-model="picked">
    <input type="radio" name="picked" value="two" v-model="picked">
    {{picked}}
  </p>
  <!-- select -->
  <p>
    <select v-model="selected">
      <option>one</option>
      <option>two</option>
    </select>
    {{selected}}
  </p>
  <!-- multiple select -->
  <p>
    <select v-model="multiSelect" multiple>
      <option>one</option>
      <option>two</option>
      <option>three</option>
    </select>
    {{multiSelect}}
  </p>

</form>
</div>

  </div>
</template>

<script>






export default {
  name: 'cardetails',
  data () {
    return {
   date: '',
   checked  : false,
   picked   : '',
   selected : '',
   multiSelect: ['']
    }
  },
  methods:{
    logInput: function (){
      console.log("now pass to database");
    }
  }
}
</script>

</style>
