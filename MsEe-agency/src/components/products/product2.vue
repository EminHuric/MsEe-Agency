<template>
    <div>
        <img src="/msmedia.jpg" alt="ms-media" class="media">
        <div>
            <p class="headline2">Marketing Without Limits</p>
            <h1 class="ms">MS MARKETING</h1>
            <hr class="line">
            <p class="mediaP">MS Marketing is a team that propels your brand to the top.
                We offer a wide range of marketing services
                (digital marketing, SEO, social media, campaigns…)
                crafting strategies that drive growth, boost visibility,
                and deliver measurable results. We work with clients worldwide
                , build brands that leave an indelible mark, and become your strategic partner for lasting success.</p>

            <router-link to="/ms-marketing">
                <button class="get">Get started</button>
            </router-link>

        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.headline2 {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    margin-top: -480px;
    margin-left: 55.5%;
}

.media {
    margin-left: 19.5%;
    height: 500px;
    margin-top: 150px;
}

.ms {
    margin-left: 55.5%;
    font-family: Poppins, sans-serif;
    font-size: 60px;
    margin-top: -15px;
    color: transparent;
    -webkit-text-stroke: 2px rgb(224, 94, 7);
}

.mediaP {
    margin-left: 55.5%;
    width: 26%;
    font-size: 24px;
    font-family: Arial, Helvetica, sans-serif;
    color: #ffffff;
}

.line {
    margin-left: 55.5%;
    width: 100px;
    margin-top: -30px;
    margin-bottom: 40px;
}

.get {
    margin-left: 55.5%;
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

@media (max-width: 420px) {
    .media {
        position: absolute;
        top: 2200px;
        left: -45px;
        height: 220px;
        z-index: -1;
    }

    .headline2 {
        margin-left: 10px;
        margin-top: 400px;
        z-index: 999;
    }

    .ms {
        margin-left: 10px;
        font-size: 45px;
    }

    .mediaP {
        width: 90%;
        margin-left: 10px;
        font-size: 20px;
    }

    .line {
        margin-left: 12px;
        margin-top: -20px;
    }

    .get {
        margin-left: 10px;
    }
}

@media (min-width: 421px) and (max-width: 533px) {
    .media {
        position: absolute;
        top: 2200px;
        left: -65px;
        height: 270px;
        z-index: -1;
    }

    .headline2 {
        margin-left: 10px;
        margin-top: 420px;
        z-index: 999;
    }

    .ms {
        margin-left: 10px;
        font-size: 45px;
    }

    .mediaP {
        width: 90%;
        margin-left: 10px;
        font-size: 20px;
    }

    .line {
        margin-left: 12px;
        margin-top: -20px;
    }

    .get {
        margin-left: 10px;
    }
}

@media (min-width: 533px) and (max-width: 608px) {
    .media {
        position: absolute;
        top: 2250px;
        left: -85px;
        height: 340px;
        z-index: -1;
    }

    .headline2 {
        margin-left: 20px;
        margin-top: 450px;
        z-index: 999;
    }

    .ms {
        margin-left: 20px;
        font-size: 45px;
    }

    .mediaP {
        width: 90%;
        margin-left: 20px;
        font-size: 24px;
    }

    .line {
        margin-left: 20px;
        margin-top: -20px;
    }

    .get {
        margin-left: 20px;
    }
}
@media (min-width: 608px) and (max-width: 700px) {
    .media {
        position: absolute;
        top: 2250px;
        left: -85px;
        height: 370px;
        z-index: -1;
    }

    .headline2 {
        margin-left: 20px;
        margin-top: 530px;
        z-index: 999;
        font-size: 20px;
    }

    .ms {
        margin-left: 20px;
        font-size: 45px;
    }

    .mediaP {
        width: 90%;
        margin-left: 20px;
        font-size: 24px;
    }

    .line {
        margin-left: 20px;
        margin-top: -20px;
    }

    .get {
        margin-left: 20px;
    }

}
@media (min-width: 701px) and (max-width: 760px) {
    .media {
        position: absolute;
        top: 2180px;
        left: -105px;
        height: 450px;
        z-index: -1;
    }

    .headline2 {
        margin-left: 20px;
        margin-top: 550px;
        z-index: 999;
    }

    .ms {
        margin-left: 20px;
        font-size: 45px;
    }

    .mediaP {
        width: 90%;
        margin-left: 20px;
        font-size: 24px;
    }

    .line {
        margin-left: 20px;
        margin-top: -20px;
    }

    .get {
        margin-left: 20px;
    }
}
@media (min-width: 761px) and (max-width: 880px) {
    .media {
        position: absolute;
        top: 2250px;
        left: -105px;
        height: 450px;
        z-index: -1;
    }

    .headline2 {
        margin-left: 30px;
        margin-top: 500px;
        z-index: 999;
        font-size: 20px;
    }

    .ms {
        margin-left: 30px;
        font-size: 45px;
    }

    .mediaP {
        width: 90%;
        margin-left: 30px;
        font-size: 24px;
    }

    .line {
        margin-left: 30px;
        margin-top: -20px;
    }

    .get {
        margin-left: 30px;
    }
}
@media (min-width: 880px) and (max-width: 970px) {
    .media {
        position: absolute;
        top: 2250px;
        left: -60px;
        height: 450px;
        z-index: -1;
    }

    .headline2 {
        margin-left: 30px;
        margin-top: 520px;
        z-index: 999;
        font-size: 20px;
    }

    .ms {
        margin-left: 30px;
        font-size: 45px;
    }

    .mediaP {
        width: 90%;
        margin-left: 30px;
        font-size: 24px;
    }

    .line {
        margin-left: 30px;
        margin-top: -20px;
    }

    .get {
        margin-left: 30px;
    }
}
@media (min-width: 971px) and (max-width: 1200px) {
    .media {
        position: absolute;
        top: 2250px;
        left: 20px;
        height: 450px;
        z-index: -1;
    }

    .headline2 {
        margin-left: 30px;
        margin-top: 540px;
        z-index: 999;
        font-size: 20px;
    }

    .ms {
        margin-left: 30px;
        font-size: 45px;
    }

    .mediaP {
        width: 90%;
        margin-left: 30px;
        font-size: 24px;
    }

    .line {
        margin-left: 30px;
        margin-top: -20px;
    }

    .get {
        margin-left: 30px;
    }
}
@media (min-width: 1201px) and (max-width: 1380px) {
    .media {
        position: absolute;
        top: 2060px;
        margin-left: 50px;
        height: 490px;
        width: 550px;
        z-index: -1;
    }
    .headline2 {
        margin-top: 200px;
        margin-left: 54%;
    }
    .mediaP {
        width: 42%;
        margin-left: 54%;
        margin-top: 20px;
    }
    .ms {
        margin-left: 54%;
    }
    .line {
        margin-left: 54%;
    }
    .get {
        margin-left: 54%;
    }
}
@media (min-width: 1380px) and (max-width: 1500px) {
    .media {
        position: absolute;
        top: 2040px;
        margin-left: 12%;
        height: 520px;
        width: 550px;
        z-index: -1;
    }
    .headline2 {
        margin-top: 200px;
        margin-left: 55%;
    }
    .mediaP {
        width: 42%;
        margin-left: 55%;
        margin-top: 20px;
    }
    .ms {
        margin-left: 55%;
    }
    .line {
        margin-left: 55%;
    }
    .get {
        margin-left: 55%;
    }
}
@media (min-width: 1501px) and (max-width: 1620px) {
    .media {
        position: absolute;
        top: 2040px;
        margin-left: 12%;
        height: 520px;
        width: 600px;
        z-index: -1;
    }
    .headline2 {
        margin-top: 200px;
        margin-left: 55%;
    }
    .mediaP {
        width: 42%;
        margin-left: 55%;
        margin-top: 20px;
    }
    .ms {
        margin-left: 55%;
    }
    .line {
        margin-left: 55%;
    }
    .get {
        margin-left: 55%;
    }
}
@media (min-width: 1621px) and (max-width: 1720px) {
    .media {
        position: absolute;
        top: 2000px;
        margin-left: 12%;
        height: 520px;
        width: 600px;
        z-index: -1;
    }
    .headline2 {
        margin-top: 200px;
        margin-left: 55%;
    }
    .mediaP {
        width: 42%;
        margin-left: 55%;
        margin-top: 20px;
    }
    .ms {
        margin-left: 55%;
    }
    .line {
        margin-left: 55%;
    }
    .get {
        margin-left: 55%;
    }
}
@media (min-width: 1720px) and (max-width: 1900px) {
    .media {
        position: absolute;
        top: 2100px;
        margin-left: 18%;
        height: 520px;
        width: 580px;
        z-index: -1;
    }
    .headline2 {
        margin-top: 130px;
        margin-left: 55%;
    }
    .mediaP {
        width: 30%;
        margin-left: 55%;
        margin-top: 20px;
    }
    .ms {
        margin-left: 55%;
    }
    .line {
        margin-left: 55%;
    }

}
@media (min-width: 1901px) and (max-width: 2120px) {
    .media {
        position: absolute;
        top: 2100px;
        margin-left: 18%;
        height: 550px;
        width: 650px;
        z-index: -1;
    }
    .headline2 {
        margin-top: 190px;
        margin-left: 55%;
    }
    .mediaP {
        width: 30%;
        margin-left: 55%;
        margin-top: 20px;
    }
    .ms {
        margin-left: 55%;
    }
    .line {
        margin-left: 55%;
    }
}

</style>