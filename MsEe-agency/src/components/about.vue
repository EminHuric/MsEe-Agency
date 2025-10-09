<template>
    <div class="about">
        <p class="subtitle">Marketing Agency Powered by Innovation</p>
        <h2 class="who">WHO ARE WE</h2>
        <hr class="line">
        <p class="text">We are a marketing agency dedicated to growing your business.<br>
            We offer a wide range of marketing services designed to truly transform your business.
            No empty promises, just results.
            With years of experience and clients around the world, we strive to be the top marketing agency in the
            region. 🚀</p>
            <div class="square"></div>
            <div class="square1"></div>
    </div>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.square1 {
    border: 2px solid orange;
    height: 60px;
    width: 300px;
    transform: rotate(20deg);
    margin-top: -50px;
    margin-left: 62%;
    animation: fadeIn 1.5s ease forwards;

}
.square {
    border: 2px solid orange;
    height: 60px;
    width: 300px;
    transform: rotate(145deg);
    margin-top: -680px;
    margin-left: 21%;
    animation: fadeIn 1.5s ease forwards;

}
.line {
    border: none;
    height: 3px;
    background-color: orange;
    width: 5%;
    margin-top: 160px;
    border-radius: 2px;
}

.text {
    text-align: center;
    color: white;
    margin-top: 30px;
    font-size: 24px;
    margin-left: 25%;
    margin-right: 25%;
    font-family: Arial, Helvetica, sans-serif;
}

.about {
    position: absolute;
    top: 1150px;
    left: 0;
    width: 100%;
    text-align: center;
}

.subtitle {
    color: rgb(255, 123, 0);
    font-family: Arial, Helvetica, sans-serif;
    position: absolute;
    top: 0;
    left: 50%;
    font-size: 20px;
    transform: translateX(-50%);
}

.who {
    color: white;
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-family: 'Poppins', sans-serif;
    font-size: 60px;
}
@media (max-width: 420px) {
    .who {
        font-size: 40px;
        left: 9%;
        transform: translateX(-11%);
        width: 96%;
        padding: 10px;
    }
    .subtitle {
        left: 10%;
        transform: translateX(-10%);
        font-size: 18px;
        width: 100%;
    }
    .text {
        font-size: 18px;
        margin-left: 15%;
        transform: translateX(-10%);
        width: 90%;
    }
    .line {
        width: 15%;
        margin-top: 140px;
    }
    .about {
        top: 1050px;
    }
    .square1 {
        width: 180px;
        height: 40px;
        margin-top: 10%;
        margin-left: 46%;
    }
    .square {
        width: 180px;
        height: 40px;
        margin-left: 4%;
        transform: rotate(125deg);
        margin-top: -165%;
    }
}
@media (min-width: 421px) and (max-width: 533px) {
    .who {
        font-size: 45px;
        left: 10%;
        transform: translateX(-10%);
        width: 96%;
    }
    .square1 {
        width: 220px;
        height: 40px;
        margin-top: 5%;
        margin-left: 46%;
    }
    .square {
        width: 180px;
        height: 40px;
        margin-left: 4%;
        transform: rotate(125deg);
        margin-top: -150%;
    }
    .subtitle {
        left: 20%;
        transform: translateX(-20%);
        font-size: 18px;
        width: 100%;
    }
    .text {
        font-size: 18px;
        margin-left: 15%;
        transform: translateX(-10%);
        width: 90%;
    }
    .line {
        width: 10%;
        margin-top: 130px;
    }
}
@media (min-width: 533px) and (max-width: 768px) {
    .who {
        font-size: 50px;
        left: 10%;
        transform: translateX(-10%);
        width: 96%;
        top: -50px;
    }
    .subtitle {
        left: 20%;
        transform: translateX(-20%);
        font-size: 20px;
        width: 100%;
        top: -60px;
    }
    .text {
        font-size: 18px;
        margin-left: 15%;
        transform: translateX(-10%);
        width: 90%;
    }
    .line {
        width: 10%;
        margin-top: 90px;
    }
    .square1 {
        width: 220px;
        height: 40px;
        margin-top: 5%;
        margin-left: 35%;
        transform: rotate(50deg);
    }
    .square {
        width: 180px;
        height: 40px;
        margin-left: 4%;
        transform: rotate(115deg);
        margin-top: -115%;
    }
}
@media (min-width: 768px) and (max-width: 1024px) {
    .who {
        font-size: 50px;
        left: 10%;
        transform: translateX(-10%);
        width: 96%;
        top: -50px;
    }
    .subtitle {
        left: 20%;
        transform: translateX(-20%);
        font-size: 20px;
        width: 100%;
        top: -60px;
    }
    .text {
        font-size: 18px;
        margin-left: 15%;
        transform: translateX(-10%);
        width: 90%;
    }
    .line {
        width: 10%;
        margin-top: 90px;
    }
    .square1 {
        width: 220px;
        height: 40px;
        margin-top: 5%;
        margin-left: 35%;
        transform: rotate(50deg);
    }
    .square {
        width: 180px;
        height: 40px;
        margin-left: 4%;
        transform: rotate(115deg);
        margin-top: -85%;
    }
}
@media (min-width: 1025px) and (max-width: 1380px) {
    .square {
        margin-left: 4%;
        transform: rotate(115deg);
        margin-top: -68%;
    }
    .square1 {
        margin-top: -5%;
        margin-left: 45%;
    }
    .subtitle {
        margin-top: -80px;
    }
    .line {
        margin-top: 80px;
    }
    .who {
        margin-top: -50px;
    }
}
@media (min-width: 1381px) and (max-width: 1720px) {
    .square {
        margin-top: -53%;
        margin-left: 20%;
    }
    .who {
        margin-top: -50px;
    }
    .subtitle {
        margin-top: -80px;
    }
    .line {
        margin-top: 80px;
    }
    }
</style>
