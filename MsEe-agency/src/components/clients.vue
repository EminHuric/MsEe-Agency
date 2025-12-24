<template>
  <!-- PRVI trapez -->
  <div class="rectangle1">
    <svg width="700" height="100">
      <polygon points="0,0 700,0 500,100 0,100" fill="none" stroke="orange" stroke-width="2" />
      <text x="280" y="63" text-anchor="middle" class="outline-text">
        NEW PRODUCT
      </text>
    </svg>
  </div>

  <!-- DRUGI trapez -->
  <div class="rectangle">
    <svg width="700" height="100">
      <polygon points="1,0 500,0 700,100 0,100" fill="none" stroke="orange" stroke-width="2" />
      <text x="280" y="63" text-anchor="middle" class="outline-text">
        NEW PRODUCT
      </text>
    </svg>
  </div>
  <div class="ss">
    <p class="headline2">Entertainment Unlocked</p>
    <hr class="line">
    <h1 class="ms">MS TV</h1>
    <img alt="mstv" src="/mstv.jpg" class="mstv">
    <p class="paragraph"> Try MS TV and turn your TV time into pure entertainment!
      Over 1.600 channels, 7.000 movies and 20.000 series episodes
      are available on all devices, at home or on the go. </p>
    <p class="paragraph2">Exclusive perks are waiting for our first
      users and with a 48-hour FREE trial you can instantly enjoy
      everything MS TV offers. Don’t wait, start now and discover a new level
      of entertainment! </p>

    <router-link to="/ms-tv"><button class="get">Get started</button> </router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>
.get {
  margin-left: 40%;
  background-color: rgb(255, 136, 1);
  border: none;
  height: 45px;
  width: 150px;
  margin-top: 20px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 23px;
}

.paragraph2 {
  margin-left: 40%;
  margin-top: 20px;
  width: 35%;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
}

.paragraph {
  margin-left: 40%;
  margin-top: -180px;
  width: 16%;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
}

.mstv {
  height: 400px;
  margin-left: 60%;
  margin-top: -230px;
}

.line {
  margin-left: 40%;
  width: 100px;
  margin-top: 0px;
  margin-bottom: 25px;
  border: none;
  height: 3px;
  background-color: rgb(206, 93, 0);
}

.ss {
  margin-top: -1720px;
}

.ms {
  margin-left: 40%;
  font-family: Poppins, sans-serif;
  font-size: 60px;
  margin-top: -15px;
  color: transparent;
  -webkit-text-stroke: 2px rgb(224, 94, 7);
}

.headline2 {
  margin-left: 39.9%;
  font-size: 20px;
  margin-top: -5 0px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
}

.rectangle {
  width: 850px;
  height: 200px;
  margin-bottom: 20px;
  transform: rotate(-30deg);
  transform-origin: center;
  margin-left: 40px;

}

.rectangle1 {
  width: 1000px;
  height: 200px;
  margin-top: 350px;
  margin-bottom: 20px;
  transform: rotate(30deg);
  transform-origin: center;
}

/* OUTLINE TEKST */
.outline-text {
  font-size: 40px;
  font-weight: bold;
  fill: transparent;
  /* unutra prazno */
  stroke: orange;
  /* samo okvir */
  stroke-width: 1.5;
  letter-spacing: 3px;
  font-family: Arial, Helvetica, sans-serif;
}

.headline2 {
  margin-top: 1200px;
}

@media (max-width: 420px) {

  .rectangle,
  .rectangle1 {
    display: none;
  }

  .ss {
    margin-top: -300px;
  }

  .mstv {
    margin-top: -1000px;
    margin-left: 20px;
    height: 300px;
    padding-bottom: 200px;
  }

  .headline2,
  .line,
  .ms {
    margin-left: 20px;
  }

  .paragraph {
    margin-left: 20px;
    width: 90%;
    margin-top: -40px;
  }

  .paragraph2 {
    margin-left: 20px;
    width: 90%;
    margin-top: 0px;
  }

  .get {
    margin-left: 20px;
  }

}

@media (min-width: 421px) and (max-width: 533px) {

  .rectangle,
  .rectangle1 {
    display: none;
  }

  .ss {
    margin-top: -300px;
  }

  .mstv {
    margin-top: -1000px;
    margin-left: 20px;
    height: 350px;
    padding-bottom: 200px;
  }

  .headline2,
  .line,
  .ms {
    margin-left: 20px;
  }

  .paragraph {
    margin-left: 20px;
    width: 90%;
    margin-top: -40px;
  }

  .paragraph2 {
    margin-left: 20px;
    width: 90%;
    margin-top: 0px;
  }

  .get {
    margin-left: 20px;
  }
}
@media (min-width: 533px) and (max-width: 754px) {
  .rectangle,
  .rectangle1 {
    display: none;
  }

  .ss {
    margin-top: -300px;
  }

  .mstv {
    margin-top: -1000px;
    margin-left: 13%;
    height: 400px;
    padding-bottom: 200px;
  }

  .headline2,
  .line,
  .ms {
    margin-left: 20px;
  }

  .paragraph {
    margin-left: 20px;
    width: 90%;
    margin-top: -40px;
  }

  .paragraph2 {
    margin-left: 20px;
    width: 90%;
    margin-top: 0px;
  }

  .get {
    margin-left: 20px;
  }
}
@media (min-width: 755px) and (max-width: 768px) {
  .rectangle,
  .rectangle1 {
    display: none;
  }

  .ss {
    margin-top: -300px;
  }

  .mstv {
    margin-top: -1000px;
    margin-left: 13%;
    height: 400px;
    padding-bottom: 200px;
  }

  .headline2,
  .line,
  .ms {
    margin-left: 20px;
  }

  .paragraph {
    margin-left: 20px;
    width: 90%;
    margin-top: -40px;
  }

  .paragraph2 {
    margin-left: 20px;
    width: 90%;
    margin-top: 0px;
  }

  .get {
    margin-left: 20px;
  }
}
@media (min-width: 768px) and (max-width: 875px) {
  .rectangle1 {
    margin-top: 650px;
  }
  .rectangle {
    margin-top: -40px;
  }

  .ss {
    margin-top: -550px;
  }

  .mstv {
    margin-top: -1000px;
    margin-left: 15%;
    height: 450px;
    padding-bottom: 200px;
  }

  .headline2,
  .line,
  .ms {
    margin-left: 30px;
  }

  .paragraph {
    margin-left: 30px;
    width: 90%;
    margin-top: -40px;
  }

  .paragraph2 {
    margin-left: 30px;
    width: 90%;
    margin-top: 0px;
  }

  .get {
    margin-left: 30px;
  }
}
@media (min-width: 876px) and (max-width: 1024px) {
  .rectangle1 {
    margin-top: 650px;
  }
  .rectangle {
    margin-top: -40px;
  }

  .ss {
    margin-top: -550px;
  }

  .mstv {
    margin-top: -1000px;
    margin-left: 18%;
    height: 550px;
    padding-bottom: 200px;
  }

  .headline2,
  .line,
  .ms {
    margin-left: 30px;
  }

  .paragraph {
    margin-left: 30px;
    width: 90%;
    margin-top: -40px;
  }

  .paragraph2 {
    margin-left: 30px;
    width: 90%;
    margin-top: 0px;
  }

  .get {
    margin-left: 30px;
  }
}
@media (min-width: 1025px) and (max-width: 1200px) {
  .rectangle1 {
    margin-top: 400px;
    margin-left: -180px;
  }
  .rectangle {
    margin-top: -30px;
    margin-left: -120px;
  }

  .ss {
    margin-top: -550px;
  }

  .mstv {
    margin-top: 100px;
    margin-left: 30%;
    height: 550px;
    padding-bottom: 200px;
  }

  .headline2 {
    margin-top: 180px;
    margin-left: 65%;
  }
  .line {
    margin-top: 20px;
    margin-left: 65%;
  }
  .ms {
    margin-top: 30px;
    margin-left: 65%;
  }

  .paragraph {
    margin-left: 30px;
    width: 90%;
    margin-top: -170px;
  }

  .paragraph2 {
    margin-left: 30px;
    width: 90%;
    margin-top: 0px;
  }

  .get {
    margin-left: 30px;
  }
}
@media (min-width: 1201px) and (max-width: 1380px) {
  .rectangle1 {
    margin-top: 500px;
    margin-left: -180px;
  }
  .rectangle {
    margin-top: -30px;
    margin-left: -120px;
  }

  .ss {
    margin-top: -1100px;
  }

  .mstv {
    margin-top: -1150px;
    margin-left: 55%;
    height: 450px;
    padding-bottom: 250px;
  }

  .headline2 {
    margin-top: 1000px;
    margin-left: 45%;
  }
  .line {
    margin-top: 20px;
    margin-left: 45%;
  }
  .ms {
    margin-top: 20px;
    margin-left: 45%;
  }

  .paragraph {
    margin-left: 45%;
    width: 50%;
    margin-top: -30px;
  }

  .paragraph2 {
    margin-left: 45%;
    width: 50%;
    margin-top: 0px;
  }

  .get {
    margin-left: 45%;
  }
}
@media (min-width: 1381px) and (max-width: 1719px) {
  .rectangle1 {
    margin-top: 500px;
    margin-left: -180px;
  }
  .rectangle {
    margin-top: -30px;
    margin-left: -120px;
  }

  .ss {
    margin-top: -1100px;
  }

  .mstv {
    margin-top: -1150px;
    margin-left: 55%;
    height: 450px;
    padding-bottom: 250px;
  }

  .headline2 {
    margin-top: 1000px;
    margin-left: 45%;
  }
  .line {
    margin-top: 20px;
    margin-left: 45%;
  }
  .ms {
    margin-top: 20px;
    margin-left: 45%;
  }

  .paragraph {
    margin-left: 45%;
    width: 50%;
    margin-top: -30px;
  }

  .paragraph2 {
    margin-left: 45%;
    width: 50%;
    margin-top: 0px;
  }

  .get {
    margin-left: 45%;
  }
}
@media (min-width: 1720px) and (max-width: 2120px) {
   .rectangle1 {
    margin-top: 500px;
    margin-left: -150px;
  }
  .rectangle {
    margin-top: -30px;
    margin-left: -100px;
  }
  .ms {
    margin-left: 38%;
  }
  .mstv {
    height: 350px;
  }
  .line {
    margin-left: 38%;
  }
  .headline2 {
    margin-left: 38%;
  }
  .paragraph {
    margin-left: 38%;
    width: 21%;
    margin-top: -140px;
  }
  .get {
    margin-left: 38%;
  }
  .paragraph2 {
    margin-left: 38%;
    width: 45%;
  }
}
</style>
