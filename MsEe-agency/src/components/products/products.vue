<template>
  <div class="product1">

    <div>
      <p class="headline">The Ultimate Software Universe</p>

      <h1 class="ms">MS SOFTWARE</h1>
      <hr class="line">

      <p class="paragraph">Never before has it been this effortless to harness innovative
         software that simplifies your business, saves time, boosts productivity, and drives your growth to the very top.
      </p>

      <p class="paragraph">Our team is ready to build everything from professional websites
         to custom groundbreaking software solutions designed to transform industries,
          scale your operations, and redefine what’s possible for your business.
      </p>

      <router-link to="/software">
        <button class="get">Get started</button>
      </router-link>

    </div>

    <img src="/software.png" alt="software-photo" class="photo" />
  </div>

  <Product2/>
  <Product3/>
  

</template>

<script setup>
import Product2 from './product2.vue'
import Product3 from './product3.vue'

</script>

<style scoped>
.product1 {
  padding-top: 1600px;
  color: white;
}

.ms {
  margin-left: 20%;
  font-family: Poppins, sans-serif;
  font-size: 60px;
  margin-top: -15px;
  color: transparent;
  -webkit-text-stroke: 2px rgb(224, 94, 7);
}

.paragraph {
  margin-left: 20%;
  width: 26%;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
}

.photo {
  margin-left: 49%;
  margin-top: -24%;
  height: 650px;
}

.headline {
  margin-left: 20%;
  font-size: 20px;
  margin-top: 50px;
  font-family: Arial, Helvetica, sans-serif;
}
.get {
  margin-left: 20%;
  height: 40px;
  width: 130px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  background-color: rgb(220, 116, 11);
  border: none;
  font-size: 20px;
  border-radius: 8px;
  margin-top: 20px;
}
.line {
  margin-left: 20%;
  width: 100px;
  margin-top: -25px;
  margin-bottom: 40px;
}
@media (max-width: 420px) {
  .photo {
    position: absolute;
    top: 1500px;
    left: -170px;
    height: 280px;
    z-index: -1;
  }
  .headline {
    margin-left: 25px;
    margin-top: 100px;
    z-index: 999;
  }
  .ms {
    margin-left: 20px;
    font-size: 45px;
  }
  .paragraph {
    width: 90%;
    margin-left: 20px;
    font-size: 20px;
  }
  .line {
    margin-left: 20px;
    margin-top: -15px;
  }
  .get {
    margin-left: 25px;
  }
}
@media (min-width: 421px) and (max-width: 533px) {
  .photo {
    position: absolute;
    top: 1550px;
    left: -170px;
    height: 300px;
    z-index: -1;
  }
  .headline {
    margin-left: 25px;
    margin-top: 170px;
    z-index: 999;
  }
  .ms {
    margin-left: 20px;
    font-size: 45px;
  }
  .paragraph {
    width: 90%;
    margin-left: 20px;
    font-size: 20px;
  }
  .line {
    margin-left: 20px;
    margin-top: -15px;
  }
  .get {
    margin-left: 25px;
  }
  }
@media (min-width: 533px) and (max-width: 754px) {
  .photo {
    position: absolute;
    top: 1570px;
    left: -220px;
    height: 380px;
    z-index: -1;
  }
  .headline {
    margin-left: 25px;
    margin-top: 200px;
    z-index: 999;
  }
  .ms {
    margin-left: 20px;
    font-size: 45px;
  }
  .paragraph {
    width: 92%;
    margin-left: 20px;
    font-size: 24px;
  }
  .line {
    margin-left: 20px;
    margin-top: -15px;
  }
  .get {
    margin-left: 25px;
  }
  
}
@media (min-width: 755px) and (max-width: 768px) {
  .photo {
    position: absolute;
    top: 1600px;
    left: -220px;
    height: 380px;
    z-index: -1;
  }
  .headline {
    margin-left: 25px;
    margin-top: 220px;
    z-index: 999;
  }
  .ms {
    margin-left: 20px;
    font-size: 45px;
  }
  .paragraph {
    width: 92%;
    margin-left: 20px;
    font-size: 24px;
  }
  .line {
    margin-left: 20px;
    margin-top: -15px;
  }
  .get {
    margin-left: 25px;
  }
}
@media (min-width: 768px) and (max-width: 875px) {
  .photo {
    position: absolute;
    top: 1630px;
    left: -260px;
    height: 450px;
    z-index: -1;
  }
  .headline {
    margin-left: 25px;
    margin-top: 320px;
    z-index: 999;
  }
  .ms {
    margin-left: 20px;
    font-size: 45px;
  }
  .paragraph {
    width: 92%;
    margin-left: 20px;
    font-size: 24px;
  }
  .line {
    margin-left: 20px;
    margin-top: -15px;
  }
  .get {
    margin-left: 25px;
  }
}
@media (min-width: 876px) and (max-width: 1024px) {
  .photo {
    position: absolute;
    top: 1660px;
    left: -260px;
    height: 450px;
    z-index: -1;
  }
  .headline {
    margin-left: 25px;
    margin-top: 320px;
    z-index: 999;
  }
  .ms {
    margin-left: 20px;
    font-size: 45px;
  }
  .paragraph {
    width: 92%;
    margin-left: 20px;
    font-size: 24px;
  }
  .line {
    margin-left: 20px;
    margin-top: -15px;
  }
  .get {
    margin-left: 25px;
  }
}
@media (min-width: 1025px) and (max-width: 1200px) {
  .photo {
    position: absolute;
    top: 1700px;
    left: -260px;
    height: 450px;
    z-index: -1;
  }
  .headline {
    margin-left: 25px;
    margin-top: 320px;
    z-index: 999;
  }
  .ms {
    margin-left: 20px;
    font-size: 45px;
  }
  .paragraph {
    width: 92%;
    margin-left: 20px;
    font-size: 24px;
  }
  .line {
    margin-left: 20px;
    margin-top: -15px;
  }
  .get {
    margin-left: 25px;
  }
}
@media (min-width: 1201px) and (max-width: 1380px) {
  .photo {
    position: absolute;
    top: 1850px;
    margin-left: 50%;
    height: 470px;
    z-index: -1;
  }
  .headline {
    margin-left: 50px;
    margin-top: -40px;
    z-index: 999;
  }
  .ms {
    margin-left: 50px;
    font-size: 45px;
  }
  .paragraph {
    width: 45%;
    margin-left: 50px;
    font-size: 24px;
  }
  .line {
    margin-left: 50px;
    margin-top: -15px;
  }
  .get {
    margin-left: 50px;
  }

}
@media (min-width: 1381px) and (max-width: 1719px) {
  .photo {
    position: absolute;
    top: 1900px;
    margin-left: 53%;
    height: 500px;
    z-index: -1;
  }
  .headline {
    margin-left: 13%;
    margin-top: -40px;
    z-index: 999;
  }
  .ms {
    margin-left: 13%;
    font-size: 45px;
  }
  .paragraph {
    width: 40%;
    margin-left: 13%;
    font-size: 24px;
  }
  .line {
    margin-left: 13%;
    margin-top: -15px;
  }
  .get {
    margin-left: 13%;
  }
}
@media (min-width: 1720px) and (max-width: 2120px) {
  .photo {
    position: absolute;
    top: 2100px;
    margin-left: 53%;
    height: 450px;
    z-index: -1;
  }
  .paragraph {
    width: 33%;
    margin-left: 19%;
  }
  .ms {
    margin-left: 19%;
  }
  .line {
    margin-left: 19%;
  }
  .headline {
    margin-left: 19%;
  }
  .get {
    margin-left: 19%;
  }
  
}



</style>
