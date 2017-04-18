<template>

  <div>
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
            <router-link to="findyourcar">Limited Offer</router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>


          <header class="business-header">
              <div class="container">
                  <div class="row">
                      <div class="col-md-8">
                          <h1 class="tagline"> Beat the car insurance companies at their own game.</h1>
                      </div>
                      <div class="col-md-4 text-center fromTop">
                       <div class="panel panel-pricing2 ">
                          <div class="panel-body text-center "><strong> Features</strong> </div>
                           <ul class="list-group text-center">
                               <li class="list-group-item"><i class="fa fa-check"></i>$ave time and money</li>
                               <li class="list-group-item"><i class="fa fa-check"></i> Industry proven </li>
                               <li class="list-group-item"><i class="fa fa-check"></i>Use the power of Artificial intelligence (AI) </li>
                              <li class="list-group-item"><i class="fa fa-check"></i>Delivered to your inbox</li>
                           </ul>
                           <div class="panel-body priceWhite text-center">
                               <p class="oldPriceP2">Was <span class="oldPrice">$15.99</span></p>
                            <span class="newPrice">Now $9.95</span>
                           </div>
                           <div class="panel-footer">
                               <button class="button is-primary butonBlue" type="submit"><router-link to="findyourcar">Purchase</router-link></button>
                           </div>
                       </div>
                   </div>
                  </div>
              </div>
          </header>


                  <div class="container">
                    <hr/>
                      <div class="row">
                          <div class="col-sm-12">
                              <h2 class="center">We all know we should shop around for the best deal on car insurance, but who has time? </h2>
                          </div>
                      </div>
                      <hr/>

                      <div class="row">
                          <div class="col-sm-4">
                              <img class=" img-responsive img-center" src="../assets/car-hands.jpg" alt=""/>
                              <h2>Piece of Mind.</h2>
                              <p>Using upated Artificial intelligence (AI) get competing quote for your current car insurance delivered to your inbox before your renewal is due.</p>
                          </div>
                          <div class="col-sm-4">
                              <img class="img-responsive img-center" src="../assets/growth-from-money.jpg" alt=""/>
                              <h2>Industry proven</h2>
                              <p>Timing matters when switching insurers. The best time to do it is when your current policy is coming up for renewal, as this will get you the most value out of your old policy and won’t incur cancellation fees. Make sure your new policy starts as soon as possible after the old one runs out to avoid going without insurance.</p>
                          </div>
                          <div class="col-sm-4">
                              <img class=" img-responsive img-center" src="../assets/save-time.jpg" alt=""/>
                              <h2>Are you getting the best deal?</h2>
                              <p>Unless it’s getting you a good discount, loyalty is overrated. If you can find a better deal with another insurer, let your current insurer know and see if they are willing to match it. If not, make the change. Other than the hassle and loss of loyalty discounts there’s no reason not to switch car insurance every year.</p>
                          </div>
                      </div>



                      <hr/>


                      <div class="container content">
                          <div class="row">
                              <div class="col-md-6 ">
                                  <div class="testimonials">
                                  	<div class="active item">
                                        <blockquote><p>WOW, I didn't know how much you can save by swiching. This has saved me $$$ and time!</p></blockquote>
                                        <div class="carousel-info">
                                          <img alt="" src="../assets/woman-drive.jpg" class="pull-left"/>
                                          <div class="pull-left">
                                            <span class="testimonials-name">Trish</span>
                                            <span class="testimonials-post">Mother</span>
                                          </div>
                                        </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-md-6 ">
                                  <div class="testimonials">
                                  	<div class="active item">
                                        <blockquote><p>I always wanted to check my car insurance rennual, but I never got around to it. Now every time my insurance comes up I have a quote that tells me the difference</p></blockquote>
                                        <div class="carousel-info">
                                          <img alt="" src="../assets/man-car.jpg" class="pull-left"/>
                                          <div class="pull-left">
                                            <span class="testimonials-name">Sam</span>
                                            <span class="testimonials-post">Single Man</span>
                                          </div>
                                        </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>


                              <div class="col-lg-12 foooter">
                                  <p>Copyright &copy; 2Car does not currently offer any financial services or financial products. Information on this website is not financial advice.</p>
                              </div>



                  </div>

        </div>


</template>

<script>
export default {
  name: 'hello',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>



</style>
