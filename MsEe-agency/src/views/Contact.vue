    <template>
        <div class="back">
            <div class="container">
                <div>
                    <h1 class="title1">Let’s meet and grow your<br>business together</h1>
                    <p class="paragraph">Your success starts with a conversation.</p>
                    <button class="contact">CONTACT US</button>
                </div>
                <img alt="bot2" src="/public/bot1.jpg" class="bot2">
            </div>
            <img alt="botmini" src="/public/bot1.jpg" class="botmini">
        </div>
    </template>
<script setup>

</script>

<style scoped>
.botmini {
    display: none;
}

.contact {
    margin-left: 450px;
    height: 40px;
    width: 150px;
    border: none;
    background-color: rgb(227, 102, 0);
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 18px;
    color: rgb(0, 0, 0);
    border-radius: 10px;
}

.paragraph {
    color: rgb(227, 102, 0);
    margin-top: -20px;
    font-size: 24px;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 450px;
}

.back {
    border: 1px solid rgb(0, 0, 0);
    position: absolute;
    background-color: rgb(0, 0, 0);
    top: 130px;
    left: 0;
    width: 100%;
    height: 100%;
}

.bot2 {
    height: 600px;
    margin-left: 150px;
}

.title1 {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 77px;
    margin-left: 450px;
    margin-top: 150px;
}

.container {
    display: flex;
}

@media (max-width: 420px) {
    .title1 {
        margin-left: 20px;
        font-size: 50px;
        width: 90%;
        margin-top: 60px;
    }

    .paragraph {
        margin-left: 20px;
        font-size: 20px;
    }

    .back {
        top: 100px;
    }

    .bot2 {
        display: none;
    }

    .contact {
        margin-left: 20px;
    }

    .botmini {
        display: block;
        height: 350px;
        position: absolute;
        right: 0px;
    }
}

@media (min-width: 421px) and (max-width: 533px) {
    .title1 {
        margin-left: 20px;
        font-size: 50px;
        width: 90%;
        margin-top: 60px;
    }

    .paragraph {
        margin-left: 20px;
        font-size: 20px;
    }

    .back {
        top: 100px;
    }

    .bot2 {
        display: none;
    }

    .contact {
        margin-left: 20px;
    }

    .botmini {
        display: block;
        height: 350px;
        position: absolute;
        right: 0px;
    }
}

@media (min-width: 533px) and (max-width: 754px) {
    .title1 {
        margin-left: 20px;
        font-size: 42px;
        width: 98%;
        margin-top: 60px;
    }

    .paragraph {
        margin-left: 20px;
        font-size: 20px;
    }

    .back {
        top: 100px;
    }

    .bot2 {
        display: none;
    }

    .contact {
        margin-left: 20px;
    }

    .botmini {
        display: block;
        height: 320px;
        position: absolute;
        right: -20px;
        margin-top: -11%;
    }
}

@media (min-width: 755px) and (max-width: 768px) {
    .title1 {
        margin-left: 20px;
        font-size: 42px;
        width: 98%;
        margin-top: 60px;
    }

    .paragraph {
        margin-left: 20px;
        font-size: 20px;
    }

    .back {
        top: 100px;
    }

    .bot2 {
        display: none;
    }

    .contact {
        margin-left: 20px;
    }

    .botmini {
        display: block;
        height: 320px;
        position: absolute;
        right: -20px;
        margin-top: -29%;
    }
}
@media (min-width: 768px) and (max-width: 875px) {
    .title1 {
        margin-left: 20px;
        font-size: 42px;
        width: 98%;
        margin-top: 60px;
    }

    .paragraph {
        margin-left: 20px;
        font-size: 20px;
    }

    .back {
        top: 100px;
    }

    .bot2 {
        display: none;
    }

    .contact {
        margin-left: 20px;
    }

    .botmini {
        display: block;
        height: 330px;
        position: absolute;
        right: 10px;
        margin-top: -250px;
    }
}
@media (min-width: 876px) and (max-width: 1024px) {
    .title1 {
        margin-left: 20px;
        font-size: 50px;
        width: 98%;
        margin-top: 60px;
    }

    .paragraph {
        margin-left: 20px;
        font-size: 20px;
    }

    .back {
        top: 100px;
    }

    .bot2 {
        display: none;
    }

    .contact {
        margin-left: 20px;
    }

    .botmini {
        display: block;
        height: 380px;
        position: absolute;
        margin-left: 72%;
        margin-top: -280px;
    }
}
@media (min-width: 1025px) and (max-width: 1380px) {
    .title1 {
        margin-left: 7%;
        font-size: 55px;
        width: 100%;
        margin-top: 60px;
    }

    .paragraph {
        margin-left: 7%;
        font-size: 20px;
    }

    .back {
        top: 100px;
    }

    .bot2 {
        display: none;
    }

    .contact {
        margin-left: 7%;
    }

    .botmini {
        display: block;
        height: 400px;
        position: absolute;
        margin-left: 70%;
        margin-top: -280px;
    }
}
@media (min-width: 1381px) and (max-width: 1720px) {
    .title1 {
        margin-left: 210px;
        font-size: 60px;
        width: 100%;
        margin-top: 100px;
    }
     .back {
        top: 100px;
    }
    .bot2 {
        height: 450px;
        right: 140px;
        position: absolute;
    }
    .paragraph {
        margin-left: 210px;
    }
    .contact {
        margin-left: 210px;
    }
}
@media (min-width: 1720px) and (max-width: 2000px) {
    .title1 {
        margin-left: 320px;
        font-size: 85px;
        width: 60%;
        margin-top: 110px;
    }
    .bot2 {
        height: 550px;
        right: 230px;
        position: absolute;
    }
    .paragraph {
        margin-left: 320px;
        margin-top: -30px;
    }
    .contact {
        margin-left: 320px;
    }
}
</style>