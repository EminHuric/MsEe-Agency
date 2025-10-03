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
            <form id="emailForm" class="heading1" action="https://formsubmit.co/ehrx09@gmail.com" method="POST">
                <h2 class="heading2">Contact form</h2>


                <div class="border">
                    <input type="text" name="name" placeholder="Name" class="name" required>
                    <input type="email" name="email" placeholder="Email" class="email" required><br>
                    <input type="text" name="phone" placeholder="Phone number" class="name">

                    <p class="before">Have you worked with us before?</p>
                    <label class="yes">
                        <input type="radio" name="workedBefore" value="Yes" required> Yes
                    </label>
                    <label class="no">
                        <input type="radio" name="workedBefore" value="No" required> No
                    </label><br>

                    <textarea name="message" placeholder="Contact message" class="message" required></textarea><br>

                    <button class="send" type="submit">Send Message</button>
                </div>
            </form>



        </div>
    </template>
<script setup>

</script>

<style scoped>
.yes {
    color: white;
    margin-left: 490px;
}
.send {
    height: 40px;
    margin-left: 100px;
    margin-top: 30px;
    width: 150px;
    font-size: 18px;
    background-color: orange;
    border: none;
    font-weight: bold;

}

.message {
    background-color: black;
    border-color: orange;
    color: white;
    margin-top: 50px;
    height: 63px;
    margin-left: 100px;
    width: 580px;
    padding: 5px;
    border-top: none;
    border-left: none;
    border-right: none;
    font-size: 17px;
}

.value {
    margin-top: -40px;
    color: white;
    margin-left: 50px;
}

.before {
    color: white;
    margin-top: -40px;
    margin-left: 450px;
}

.email {
    background-color: black;
    border-color: orange;
    color: white;
    margin-top: 50px;
    height: 30px;
    margin-left: 150px;
    width: 200px;
    padding: 5px;
    border-top: none;
    border-left: none;
    border-right: none;
    font-size: 17px;
}

input:focus,
textarea:focus {
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    font-size: 18px;
    color: rgb(255, 228, 215);
}

.name {
    background-color: black;
    border-color: orange;
    color: white;
    margin-top: 50px;
    height: 30px;
    margin-left: 100px;
    width: 200px;
    padding: 5px;
    border-top: none;
    border-left: none;
    border-right: none;
    font-size: 17px;
}

.border {
    border: 1px solid orange;
    height: 500px;
    width: 800px;
    margin-left: 33%;
    margin-top: 70px;
    border-radius: 12px;
}

.heading2 {
    margin-top: 400px;
    color: white;
    font-size: 65px;
    text-align: center;
}

.heading1 {
    font-family: Arial, Helvetica, sans-serif;
}

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
    min-height: 100%;
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
.no {
    color: white;
    margin-left: 50px;
}

@media (max-width: 420px) {
    .heading2 {
        font-size: 50px;
        margin-top: 450px;
    }
    .border {
        margin-left: 50px;
        width: 75%;
        height: 600px;
    }
    .title1 {
        margin-left: 20px;
        font-size: 50px;
        width: 90%;
        margin-top: 50px;
    }
    .name, .email {
        margin-left: 20px;
        width: 82%;
    }
    .before {
        margin: 5px;
        margin-top: 35px;
        text-align: center;
    }
    .yes {
        margin-left: 22%;
    }

    .paragraph {
        margin-left: 20px;
        font-size: 20px;
    }
    .message {
        margin-left: 20px;
        width: 81%;
    }

    .back {
        top: 100px;
        min-height: 200vh;
    }
    .send {
        margin-left: 20px;
        margin-top: 50px;
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
    .heading2 {
        font-size: 50px;
    }
    .before {
        margin: 5px;
        margin-top: 35px;
        margin-left: 20px;
        padding-bottom: 5px;
        font-size: 15px;
    }
    .name, .email {
        margin-left: 20px;
        width: 82%;
    }
    .yes {
        margin-left: 20px;
    }
    .no {
        margin-left: 30px;
    }
    .message {
        margin-left: 20px;
        width: 81%;
        border-top: block;
    }
    .send {
        margin-left: 20px;
        margin-top: 50px;
    }

    .border {
        margin-left: 40px;
        width: 85%;
        height: 600px;
    }
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
    .heading2 {
        font-size: 50px;
    }
    .before {
        margin: 5px;
        margin-top: 35px;
        margin-left: 20px;
        padding-bottom: 5px;
        font-size: 15px;
    }
    .name, .email {
        margin-left: 20px;
        width: 82%;
    }
    .yes {
        margin-left: 20px;
    }
    .no {
        margin-left: 30px;
    }
    .message {
        margin-left: 20px;
        width: 81%;
        border-top: block;
    }
    .send {
        margin-left: 20px;
        margin-top: 50px;
    }

    .border {
        margin-left: 45px;
        width: 85%;
        height: 600px;
    }
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
    .heading2 {
        font-size: 50px;
    }
    .before {
        margin: 5px;
        margin-top: 35px;
        margin-left: 20px;
        padding-bottom: 5px;
        font-size: 15px;
    }
    .name, .email {
        margin-left: 20px;
        width: 82%;
    }
    .yes {
        margin-left: 20px;
    }
    .no {
        margin-left: 30px;
    }
    .message {
        margin-left: 20px;
        width: 81%;
        border-top: block;
    }
    .send {
        margin-left: 20px;
        margin-top: 50px;
    }

    .border {
        margin-left: 60px;
        width: 85%;
        height: 600px;
    }
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
    .border {
        margin-left: 40px;
        width: 90%;
    }
    .name {
        margin-left: 70px;
        width: 30%;
    }
    .email {
        width: 30%;
        margin-left: 100px;
    }
    .before {
        margin-top: -40px;
    }
    .title1 {
        margin-left: 20px;
        font-size: 42px;
        width: 98%;
        margin-top: 60px;
    }
    .message {
        margin-left: 80px;
        width: 77%;
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
    .border {
        margin-left: 60px;
        width: 90%;
    }
    .name {
        margin-left: 70px;
        width: 30%;
    }
    .email {
        width: 30%;
        margin-left: 100px;
    }
    .before {
        margin-top: -40px;
    }
    .title1 {
        margin-left: 20px;
        font-size: 42px;
        width: 98%;
        margin-top: 60px;
    }
    .message {
        margin-left: 80px;
        width: 77%;
    }
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
    .border {
        margin-left: 12%;
        width: 75%;
        
    }
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
    .border {
        margin-left: 25%;
    }
}

@media (min-width: 1720px) and (max-width: 2000px) {
    .border {
        margin-left: 28%;
    }
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
@media (min-width: 1720px) and (max-width: 2000px) {
    .border {
        margin-left: 30%;
    }
}
</style>