<template>
    <h2 class="title">Events & Promotions</h2>
    <hr class="line">
    <p class="text">The marketing world is always changing
        and we stay up to date with the latest news.
        Check out our latest events, exclusive trips, important partners,
        and behind-the-scenes moments that shape ourwork. Stay inspired and connected.</p>

    <div class="event">
        <img alt="business-conference" src="/event1.jpeg" class="event1">
        <p class="date">5.12. – 17.12.2025</p>
        <h2 class="title1">Vlah Business Conference, Belgrade – Sava Center</h2>
        <p class="txt">We attended the largest entrepreneurial event in the region,
            where we met key people for the development of our projects,
            exchanged experiences, and followed the latest trends in marketing
            and entrepreneurship.</p>

        <button class="button">Read More</button>
    </div>
</template>

<script setup>

</script>

<style scoped>
.event {
    margin-bottom: 100px;
}

.event1 {
    height: 170px;
    width: 450px;
    margin-left: 19%;
    margin-top: 80px;
    border: 1px solid rgb(255, 115, 0);
    padding-bottom: 18px;
}
.button {
    height: 38px;
    width: 140px;
    font-size: 22px;
    background-color: rgb(255, 115, 0);
    border: none;
    font-weight: bold;
    margin-left: 41%;
    margin-top: -5px;
}

.txt {
    color: white;
    margin-left: 40.9%;
    font-size: 22px;
    width: 40%;
    font-family: sans-serif;
    margin-top: -15px;
}

.date {
    color: rgb(255, 115, 0);
    font-size: 18px;
    font-family: sans-serif;
    margin-top: -195px;
    margin-left: 40.5%;
}

.title1 {
    color: white;
    margin-left: 40.5%;
    font-size: 35px;
    font-family: sans-serif;
    margin-top: -10px;
}

.title {
    color: white;
    text-align: center;
    margin-top: 120px;
    font-size: 50px;
    font-family: sans-serif;
}

.text {
    color: white;
    text-align: center;
    font-size: 24px;
    width: 45%;
    margin: 40px auto;
    font-family: sans-serif;
}

.line {
    margin-left: 40%;
    width: 150px;
    margin: -10px auto;
    border: none;
    height: 3px;
    background-color: rgb(206, 93, 0);
}
@media (max-width: 420px) {
    .text {
        width: 90%;
    }
    .event1 {
        margin: auto;
        height: 200px;
        width: 99%;
    }
    .title1 {
        margin-left: 5px;
        margin-top: 10px;
        width: 97%;
        font-size: 27px;
    }
    .txt {
        margin-left: 5px;
        font-size: 22px;
        width: 98%;
        margin-top: 10px;
    }
    .button {
        margin-left: 5px;
    }
    .date {
        margin-top: 15px;
        margin-left: 5px;
    }
}
@media (min-width: 421px) and (max-width: 533px) {
    .text {
        width: 90%;
    }
    .event1 {
        margin: auto;
        height: 200px;
        width: 99%;
    }
    .title1 {
        margin-left: 5px;
        margin-top: 10px;
        width: 97%;
        font-size: 27px;
    }
    .txt {
        margin-left: 5px;
        font-size: 22px;
        width: 98%;
        margin-top: 10px;
    }
    .button {
        margin-left: 5px;
    }
    .date {
        margin-top: 15px;
        margin-left: 5px;
    }
}
@media (min-width: 533px) and (max-width: 754px) {
    .text {
        width: 90%;
    }
    .event1 {
        margin: auto;
        height: 200px;
        width: 99%;
    }
    .title1 {
        margin-left: 15px;
        margin-top: 10px;
        width: 97%;
        font-size: 27px;
    }
    .txt {
        margin-left: 15px;
        font-size: 22px;
        width: 98%;
        margin-top: 10px;
    }
    .button {
        margin-left: 15px;
    }
    .date {
        margin-top: 15px;
        margin-left: 15px;
    }
}
@media (min-width: 755px) and (max-width: 768px) {
    .text {
        width: 90%;
    }
    .event1 {
        margin: auto;
        height: 200px;
        width: 99%;
    }
    .title1 {
        margin-left: 15px;
        margin-top: 10px;
        width: 97%;
        font-size: 27px;
    }
    .txt {
        margin-left: 15px;
        font-size: 22px;
        width: 98%;
        margin-top: 10px;
    }
    .button {
        margin-left: 15px;
    }
    .date {
        margin-top: 15px;
        margin-left: 15px;
    }
}
@media (min-width: 768px) and (max-width: 875px) {
    .text {
        width: 90%;
    }
    .event1 {
        margin: auto;
        height: 200px;
        width: 99%;
    }
    .title1 {
        margin-left: 15px;
        margin-top: 10px;
        width: 97%;
        font-size: 27px;
    }
    .txt {
        margin-left: 15px;
        font-size: 22px;
        width: 98%;
        margin-top: 10px;
    }
    .button {
        margin-left: 15px;
    }
    .date {
        margin-top: 15px;
        margin-left: 15px;
    }
}
@media (min-width: 876px) and (max-width: 1024px) {
    .text {
        width: 90%;
    }
    .event1 {
        margin: auto;
        height: 250px;
        width: 99%;
    }
    .title1 {
        margin-left: 15px;
        margin-top: 10px;
        width: 97%;
        font-size: 27px;
    }
    .txt {
        margin-left: 15px;
        font-size: 22px;
        width: 98%;
        margin-top: 10px;
    }
    .button {
        margin-left: 15px;
    }
    .date {
        margin-top: 15px;
        margin-left: 15px;
    }
}
@media (min-width: 1025px) and (max-width: 1200px) {
    .event1 {
        margin-left: 20px;
        width: 35%;
        height: 220px;
    }
    .title1 {
        font-size: 26px;
    }
    .txt {
        width: 58%;
    }
    .date {
        margin-top: -245px;
    }
    .text {
        width: 80%;
    }
}
@media (min-width: 1201px) and (max-width: 1380px) {
    .event1 {
        margin-left: 20px;
        width: 35%;
        height: 220px;
    }
    .title1 {
        font-size: 26px;
    }
    .txt {
        width: 58%;
    }
    .date {
        margin-top: -245px;
    }
    .text {
        width: 80%;
    }
}
@media (min-width: 1381px) and (max-width: 1719px) {
    .event1 {
        margin-left: 20px;
        width: 30%;
        height: 200px;
        margin-left: 18%;
    }
    .title1 {
        font-size: 26px;
        margin-left: 50%;
        width: 35%;
    }
    .txt {
        width: 38%;
        margin-left: 50%;
    }
    .date {
        margin-top: -225px;
        margin-left: 50%;
    }
    .text {
        width: 70%;
    }
    .button {
        margin-left: 50%;
    }
}
@media (min-width: 1720px) and (max-width: 2150px) {
    .event1 {
        margin-left: 20px;
        width: 30%;
        height: 200px;
        margin-left: 18%;
    }
    .title1 {
        font-size: 26px;
        margin-left: 50%;
        width: 35%;
    }
    .txt {
        width: 35%;
        margin-left: 50%;
    }
    .date {
        margin-top: -225px;
        margin-left: 50%;
    }
    .text {
        width: 70%;
    }
    .button {
        margin-left: 50%;
    }
}
</style>