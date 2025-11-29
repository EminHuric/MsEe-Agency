<template>
    <div>
        <p class="headline">Stop wasting time. MS Automation works for you.</p>

        <h1 class="ms">MS AUTOMATION</h1>
        <hr class="line">


        <p class="paragraph">Imagine reclaiming hours of lost time while your business runs flawlessly.
             Repetitive tasks and complex processes no longer slow you down,
              our AI tools work quietly in the background, and your team can focus on what truly matters.
               Everything runs smoothly while you take control and achieve the results you’ve always wanted.
                It’s time to show what you’re truly capable of.
        </p>

        <router-link to="/ms-automation">
            <button class="get">Get started</button>
        </router-link>

    </div>

    <img src="/photo.jpg" alt="tv-phoot" class="tv">
    <img src="/phonePhoto.jpg" alt="tv-phoot" class="tvP">
</template>

<script setup>
</script>

<style scoped>
.ms {
    margin-left: 20%;
    font-family: Poppins, sans-serif;
    font-size: 60px;
    margin-top: -15px;
    color: transparent;
    position: relative;
    -webkit-text-stroke: 2px rgb(224, 94, 7);
}

.tv {
    width: 1500px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    margin-top: -400px;
}
.tvP {
    display: none;
}

.paragraph {
    position: relative; 
    top: 0px; 
    left: 20%;
    width: 26%;
    font-size: 24px;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
}
.headline {
    margin-left: 20%;
    font-size: 20px;
    margin-top: 250px;
    position: relative;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
}

.get {
    margin-left: 20%;
    height: 40px;
    width: 130px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    background-color: rgb(220, 116, 11);
    border: none;
    position: relative;
    font-size: 20px;
    border-radius: 8px;
    margin-top: 0px;
    margin-bottom: 20px;
}

.line {
    margin-left: 20%;
    width: 80px;
    margin-top: -25px;
    margin-bottom: 40px;
    position: relative;
}

@media (max-width: 420px) {
    .tvP {
        display: block;
        height: 280px;
        margin-left: auto;
        margin-right: auto;
        margin-top: -900px;
    }
    .tv {
       display: none;
    }

    .headline {
        margin-left: 25px;
        margin-top: 350px;
        
    }

    .ms {
        margin-left: 20px;
        font-size: 45px;
    }

    .paragraph {
        width: 85%;
        margin-left: -50px;
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
    .tvP {
        display: block;
        height: 280px;
        margin-left: auto;
        margin-right: auto;
        margin-top: -750px;
    }
    .tv {
       display: none;
    }

    .headline {
        margin-left: 25px;
        margin-top: 350px;
        z-index: 999;
    }

    .ms {
        margin-left: 20px;
        font-size: 45px;
    }

    .paragraph {
        width: 85%;
        left: 20px;
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

@media (min-width: 534px) and (max-width: 700px) {
    .tvP {
        display: block;
        height: 350px;
        margin-left: auto;
        margin-right: auto;
        margin-top: -780px;
    }
    .tv {
       display: none;
    }

    .headline {
        margin-left: 25px;
        margin-top: 450px;
        z-index: 999;
    }

    .ms {
        margin-left: 20px;
        font-size: 45px;
    }

    .paragraph {
        width: 85%;
        left: 20px;
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
@media (min-width: 701px) and (max-width: 1024px) {
    .tvP {
        display: block;
        height: 400px;
        margin-left: auto;
        margin-right: auto;
        margin-top: -780px;
    }
    .tv {
       display: none;
    }

    .headline {
        margin-left: 25px;
        margin-top: 450px;
        z-index: 999;
    }

    .ms {
        margin-left: 20px;
        font-size: 45px;
    }

    .paragraph {
        width: 85%;
        left: 20px;
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
@media (min-width: 1025px) and (max-width: 1200px) {
    .tv {
        position: absolute;
        top: 3800px;
        left: 0px;
        height: 500px;
        width: 100%;
        z-index: -1;
    }

    .headline {
        margin-left: 25px;
        margin-top: 150px;
        z-index: 999;
    }

    .ms {
        margin-left: 20px;
        font-size: 45px;
    }

    .paragraph {
        width: 50%;
        margin-left: 20px;
        font-size: 24px;
        left: 0px;
    }

    .line {
        margin-left: 20px;
        margin-top: -15px;
    }

    .get {
        margin-left: 25px;
    }
}
@media (min-width: 1201px) and (max-width: 1323px) {
  .tv {
        position: absolute;
        top: 3450px;
        left: 0px;
        height: 500px;
        width: 100%;
        z-index: -1;
    }

    .headline {
        margin-left: 40px;
        margin-top: 250px;
        z-index: 999;
    }

    .ms {
        margin-left: 40px;
        font-size: 45px;
    }

    .paragraph {
        width: 50%;
        margin-left: 40px;
        font-size: 24px;
        left: 0px;
    }

    .line {
        margin-left: 40px;
        margin-top: -15px;
    }

    .get {
        margin-left: 35px;
    }
}
@media (min-width: 1324px) and (max-width: 1380px) {
  .tv {
        position: absolute;
        top: 3450px;
        left: 0px;
        height: 500px;
        width: 100%;
        z-index: -1;
    }

    .headline {
        margin-left: 40px;
        margin-top: 300px;
        z-index: 999;
    }

    .ms {
        margin-left: 40px;
        font-size: 45px;
    }

    .paragraph {
        width: 50%;
        margin-left: 40px;
        font-size: 24px;
        left: 0px;
    }

    .line {
        margin-left: 40px;
        margin-top: -15px;
    }

    .get {
        margin-left: 35px;
    }
}
@media (min-width: 1381px) and (max-width: 1719px) {
    .tv {
        position: absolute;
        top: 3500px;
        left: 0px;
        height: 500px;
        width: 100%;
        z-index: -1;
    }

    .headline {
        margin-left: 15%;
        margin-top: 350px;
        z-index: 999;
    }

    .ms {
        margin-left: 15%;
        font-size: 45px;
    }

    .paragraph {
        width: 42%;
        margin-left: 15%;
        font-size: 24px;
        left: 0px;
    }

    .line {
        margin-left: 15%;
        margin-top: -15px;
    }

    .get {
        margin-left: 15%;
    }
}
@media (min-width: 1720px) and (max-width: 2120px) {
    .tv{
    position: absolute;
    top: 3360px;
    margin-left: 19%;
    height: 600px;
    width: 1100px;
    z-index: -1;
  }
  .paragraph {
    width: 35%;
    margin-left: -1%;
  }
  .ms {
    margin-left: 19%;
  }
  .line {
    margin-left: 19%;
  }
  .headline {
    margin-left: 19%;
    margin-top: 180px;
   }
  .get {
    margin-left: 19%;
  }
}

</style>