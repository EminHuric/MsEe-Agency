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

            <div>
                <h2 class="want">Want to meet us?</h2>
                <p class="txt">Here's where you'll find us.</p>
                <hr class="line">

                <img src="/photo.png" alt="photo" class="photo">
                <div class="window">
                    <p class="p">Worldwide <span style="color: orange;">marketing agency</span> empowering brands with
                        cutting-edge software, digital tools, and
                        global growth strategies.</p>
                </div>
                <h3 class="contact1">CONTACT</h3>
                <p class="not">For more information give us a call</p>
                <h3 class="phonenumber">+381 65 220 62 69</h3>
                <h3 class="email1">E-MAIL US</h3>
                <p class="not">Tell us about your awesome project, or just say hi at</p>
                <h3 class="emaill">msee5623@gmail.com</h3>
                <p class="not1">We are a team of multi-skilled professionals,
                    driven by creativity and innovation, developing
                    marketing solutions, digital tools, and software
                     that empower brands to grow, connect with audiences,
                    and deliver experiences that make a lasting impact worldwide.</p>
            </div>

            <form id="emailForm" class="heading1" action="https://formsubmit.co/ehrx09@gmail.com" method="POST">
                <h2 class="heading2">Contact form</h2>
                <p class="txt">What are you waiting for? Contact us and let’s go for new victories together!</p>
                <hr class="line">


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
                <img alt="photoo" src="/post.jpg" class="post">
            </form>


            <Footer />
        </div>
    </template>
<script setup>
import Footer from '../components/footer.vue'
</script>

<style scoped>
.txt {
    font-family: Arial, Helvetica, sans-serif;
    color: orange;
    text-align: center;
    margin-top: -30px;
}
.not1 {
    color: white;
    margin-left: 43%;
    margin-top: -40px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    width: 40%;
}
.emaill {
    color: rgb(216, 97, 23);
    margin-left: 43%;
    margin-top: -5px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 55px;
}

.email1 {
    color: white;
    margin-left: 43%;
    margin-top: -20px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 55px;
}

.phonenumber {
    color: rgb(216, 97, 23);
    margin-left: 43%;
    margin-top: -5px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 55px;
}

.not {
    color: white;
    margin-left: 43%;
    margin-top: -40px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
}

.contact1 {
    color: white;
    margin-left: 43%;
    margin-top: -550px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 55px;
}

.p {
    color: white;
    padding: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
}

.window {
    border: 1px solid rgb(14, 13, 12);
    height: 150px;
    width: 350px;
    margin-left: 22.5%;
    margin-top: -600px;
    position: absolute;
}

.photo {
    height: 650px;
    border: 3px solid rgb(18, 17, 16);
    margin-left: 20%;
    margin-top: 50px;
}

.want {
    color: white;
    text-align: center;
    margin-top: 420px;
    font-size: 60px;
    font-family: Arial, Helvetica, sans-serif;
}

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
.post {
    height: 700px;
    margin-left: 60%;
    margin-top: -700px;
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
    margin-left: 20%;
    margin-top: 150px;
    border-radius: 12px;
}
.line {
    border: none;
    height: 3px;
    background-color: orange;
    width: 5%;
    margin-top: 40px;
    border-radius: 2px;
}
.heading2 {
    margin-top: 450px;
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
    .txt {
        margin: 10px;
    }
    .post {
        margin-left: 20px;
        height: 300px;
        margin-top: 0px;
        margin-left: 15%;
    }
    .photo {
        margin-left: 10px;
        width: 93%;
        height: 520px;
    }
    .window {
        margin-left: 25px;
        width: 85%;
        margin-top: -500px;
    }
    .contact1 {
        margin-top: 20%;
        font-size: 40px;
        margin-left: 20px;
    }
    .not {
        margin-left: 20px;
        margin-right: 20px;
        margin-top: -25px;
        font-size: 18px;
    }
    .email1 {
        font-size: 40px;
        margin-left: 20px;
        margin-top: 50px;
    }
    .emaill {
        font-size: 30px;
        margin-left: 20px;
    }
    .phonenumber {
        margin-left: 20px;
        font-size: 30px;
    }
    .not1 {
        margin-left: 20px;
        margin-top: -15px;
        width: 90%;
    }
    .line {
        margin-top: 20px;
        width: 15%;
    }
    .want {
        font-size: 40px;
        padding: 5px;
    }
    .heading2 {
        font-size: 50px;
        margin-top: 150px;
    }

    .border {
        margin-left: 50px;
        width: 75%;
        height: 600px;
        margin-top: 50px;
    }

    .title1 {
        margin-left: 20px;
        font-size: 50px;
        width: 90%;
        margin-top: 50px;
    }

    .name,
    .email {
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

    .name,
    .email {
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
        width: 90%;
        height: 600px;
    }

    .title1 {
        margin-left: 30px;
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


    .want {
        font-size: 40px;
        padding: 5px;
    }
    .txt {
        margin: 10px;
    }
    .line {
        margin-top: 40px;
        width: 15%;
    }
    .photo {
        margin-left: 10px;
        width: 93%;
        height: 520px;
    }
    .window {
        margin-left: 25px;
        width: 85%;
        margin-top: -500px;
    }
    .contact1 {
        margin-top: 20%;
        font-size: 40px;
        margin-left: 20px;
    }
    .not {
        margin-left: 20px;
        margin-right: 20px;
        margin-top: -25px;
        font-size: 18px;
    }
    .email1 {
        font-size: 40px;
        margin-left: 20px;
        margin-top: 50px;
    }
    .emaill {
        font-size: 30px;
        margin-left: 20px;
    }
    .phonenumber {
        margin-left: 20px;
        font-size: 30px;
    }
    .not1 {
        margin-left: 20px;
        margin-top: -15px;
        width: 90%;
    }
    .heading2 {
        font-size: 50px;
        margin-top: 150px;
    }
    .not1 {
        margin-left: 20px;
        margin-top: -15px;
        width: 90%;
    }
    .border {
        margin-left: 50px;
        width: 75%;
        height: 600px;
        margin-top: 50px;
    }
    .post {
        margin-left: 20px;
        height: 300px;
        margin-top: 0px;
        margin-left: 15%;
    }
}

@media (min-width: 533px) and (max-width: 754px) {
    .want {
        font-size: 40px;
        padding: 5px;
    }
    .txt {
        margin: 10px;
    }
    .line {
        margin-top: 40px;
        width: 15%;
    }
    .photo {
        margin-left: 10px;
        width: 93%;
        height: 650px;
    }
    .window {
        margin-left: 40px;
        width: 85%;
        margin-top: -600px;
    }
    .contact1 {
        margin-top: 15%;
        font-size: 40px;
        margin-left: 20px;
    }
    .not {
        margin-left: 20px;
        margin-right: 20px;
        margin-top: -25px;
        font-size: 18px;
    }
    .email1 {
        font-size: 40px;
        margin-left: 20px;
        margin-top: 50px;
    }
    .emaill {
        font-size: 30px;
        margin-left: 20px;
    }
    .phonenumber {
        margin-left: 20px;
        font-size: 30px;
    }
    .not1 {
        margin-left: 20px;
        margin-top: -15px;
        width: 90%;
    }
    .heading2 {
        font-size: 50px;
        margin-top: 150px;
    }
    .not1 {
        margin-left: 20px;
        margin-top: -15px;
        width: 90%;
    }
    .border {
        margin-left: 50px;
        width: 75%;
        height: 600px;
        margin-top: 50px;
    }
    .post {
        height: 300px;
        margin-top: 0px;
        margin-left: 25%;
    }



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

    .name,
    .email {
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

    .photo {
        margin-left: 50px;
        width: 85%;
        height: 620px;
    }
    .window {
        margin-left: 60px;
        width: 83%;
        margin-top: -600px;
    }
    .contact1 {
        margin-top: 15%;
        font-size: 40px;
        margin-left: 55px;
    }
    .not {
        margin-left: 50px;
        margin-right: 20px;
        margin-top: -25px;
        font-size: 18px;
    }
    .email1 {
        font-size: 40px;
        margin-left: 50px;
        margin-top: 50px;
    }
    .emaill {
        font-size: 30px;
        margin-left: 50px;
    }
    .phonenumber {
        margin-left: 50px;
        font-size: 30px;
    }
    .not1 {
        margin-left: 50px;
        margin-top: -15px;
        width: 90%;
    }
    .heading2 {
        font-size: 50px;
        margin-top: 150px;
    }
    .not1 {
        margin-left: 50px;
        margin-top: -15px;
        width: 85%;
    }
    .border {
        margin-left: 50px;
        width: 75%;
        height: 600px;
        margin-top: 50px;
    }
    .post {
        height: 300px;
        margin-top: 0px;
        margin-left: 25%;
    }


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

    .name,
    .email {
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
    .send {
        margin-left: 80px;
    }
    .p {
        font-size: 22px;
        margin-left: 10px;
    }
    .photo {
        margin-left: 70px;
        width: 85%;
        height: 720px;
    }
    .window {
        margin-left: 80px;
        width: 83%;
        margin-top: -700px;
    }
    .contact1 {
        margin-top: 15%;
        font-size: 40px;
        margin-left: 70px;
    }
    .not {
        margin-left: 70px;
        margin-right: 20px;
        margin-top: -25px;
        font-size: 18px;
    }
    .email1 {
        font-size: 40px;
        margin-left: 70px;
        margin-top: 50px;
    }
    .emaill {
        font-size: 30px;
        margin-left: 70px;
    }
    .phonenumber {
        margin-left: 70px;
        font-size: 30px;
    }
    .not1 {
        margin-left: 70px;
        margin-top: -15px;
        width: 90%;
    }
    .heading2 {
        font-size: 50px;
        margin-top: 150px;
    }
    .not1 {
        margin-left: 70px;
        margin-top: -15px;
        width: 85%;
    }
    .border {
        margin-left: 70px;
        width: 75%;
        height: 600px;
        margin-top: 50px;
    }
    .post {
        height: 350px;
        margin-top: 0px;
        margin-left: 35%;
    }

    .border {
        margin-left: 70px;
        width: 85%;
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
        margin-left: 400px;
    }
    .yes {
        margin-left: 450px;
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

    .send {
        margin-left: 80px;
    }
    .p {
        font-size: 22px;
        margin-left: 10px;
    }
    .photo {
        margin-left: 100px;
        width: 80%;
        height: 720px;
    }
    .window {
        margin-left: 120px;
        width: 76%;
        margin-top: -700px;
    }
    .contact1 {
        margin-top: 15%;
        font-size: 40px;
        margin-left: 70px;
    }
    .not {
        margin-left: 70px;
        margin-right: 20px;
        margin-top: -25px;
        font-size: 18px;
    }
    .email1 {
        font-size: 40px;
        margin-left: 70px;
        margin-top: 50px;
    }
    .emaill {
        font-size: 30px;
        margin-left: 70px;
    }
    .phonenumber {
        margin-left: 70px;
        font-size: 30px;
    }
    .not1 {
        margin-left: 70px;
        margin-top: -15px;
        width: 90%;
    }
    .heading2 {
        font-size: 50px;
        margin-top: 150px;
    }
    .not1 {
        margin-left: 70px;
        margin-top: -15px;
        width: 85%;
    }
    .border {
        margin-left: 70px;
        width: 75%;
        height: 600px;
        margin-top: 50px;
    }
    .post {
        height: 350px;
        margin-top: 0px;
        margin-left: 35%;
    }


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

    .photo {
        margin-left: 4%;
        width: 400px;
    }
    .window {
        margin-left: 75px;
    }
    .contact1 {
        margin-left: 500px;
        margin-top: -550px;
        font-size: 50px;
    }
        .not {
        margin-left: 500px;
        margin-right: 20px;
        margin-top: -25px;
        font-size: 18px;
    }
    .email1 {
        font-size: 40px;
        margin-left: 500px;
        margin-top: 50px;
    }
    .emaill {
        font-size: 30px;
        margin-left: 500px;
    }
    .phonenumber {
        margin-left: 500px;
        font-size: 30px;
    }
    .not1 {
        margin-left: 500px;
        margin-top: -15px;
        width: 90%;
    }
    .heading2 {
        font-size: 50px;
        margin-top: 250px;
    }
    .not1 {
        margin-left: 500px;
        margin-top: -15px;
        width: 50%;
    }
    .border {
        margin-left: 4%;
        width: 53%;
    }
    .name {
        margin-left: 20px;
        width: 38%;
    }
    .before {
        margin-left: 400px;
    }
    .yes {
        margin-left: 420px;
    }
    .message {
        margin-left: 50px;
        width: 80%;
    }
    .before {
        margin-left: 350px;
        font-size: 15px;
    }
    .email {
        margin-left: 50px;
    }
    .yes {
        margin-left: 380px;
    }
    .send {
        margin-left: 50px;
    }
    .post {
        height: 550px;
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

    .photo {
        margin-left: 17%;
        width: 400px;
    }
    .contact1 {
        margin-left: 48%;
    }
    .not {
        margin-left: 48.5%;
        margin-right: 20px;
        margin-top: -25px;
        font-size: 18px;
    }
    .email1 {
        font-size: 40px;
        margin-left: 48.5%;
        margin-top: 50px;
    }
    .emaill {
        font-size: 30px;
        margin-left: 48.5%;
    }
    .phonenumber {
        margin-left: 48.5%;
        font-size: 30px;
    }
    .not1 {
        margin-left: 48.5%;
        margin-top: -15px;
        width: 40%;
    }
    .border {
        margin-left: 17% !important;
        width: 40%;
    }
    .name {
        margin-left: 50px;
        width: 30%;
    }
    .email {
        margin-left: 80px;
        width: 30%;
    }
    .before {
        margin-left: 280px;
    }
    .yes {
        margin-left: 300px;
    }
    .message {
        margin-left: 50px;
        width: 80%;
    }
    .send {
        margin-left: 50px;
    }
    .post {
        margin-left: 62%;
        height: 600px;
        width: 410px;
    }

    .title1 {
        margin-left: 210px;
        font-size: 60px;
        width: 100%;
        margin-top: 100px;
    }

    .back {
        top: 100px;
    }
    .window {
        margin-left: 18.6%;
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

    .contact1 {
        margin-left: 48%;
    }
    .not {
        margin-left: 48.5%;
        margin-right: 20px;
        margin-top: -25px;
        font-size: 18px;
    }
    .email1 {
        font-size: 40px;
        margin-left: 48.5%;
        margin-top: 50px;
    }
    .emaill {
        font-size: 30px;
        margin-left: 48.5%;
    }
    .phonenumber {
        margin-left: 48.5%;
        font-size: 30px;
    }
    .not1 {
        margin-left: 48.5%;
        margin-top: -15px;
        width: 40%;
    }
    .border {
        margin-left: 20% !important;
        width: 40%;
    }
    .name {
        margin-left: 50px;
        width: 30%;
    }
    .email {
        margin-left: 80px;
        width: 30%;
    }
    .before {
        margin-left: 350px;
    }
    .yes {
        margin-left: 390px;
    }
    .message {
        margin-left: 50px;
        width: 80%;
    }
    .send {
        margin-left: 50px;
    }
    .post {
        margin-left: 62%;
        height: 600px;
        width: 410px;
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
@media (min-width: 2000px) {
    .contact1 {
        margin-left: 48%;
    }
    .not {
        margin-left: 48.5%;
        margin-right: 20px;
        margin-top: -25px;
        font-size: 18px;
    }
    .email1 {
        font-size: 40px;
        margin-left: 48.5%;
        margin-top: 50px;
    }
    .emaill {
        font-size: 30px;
        margin-left: 48.5%;
    }
    .phonenumber {
        margin-left: 48.5%;
        font-size: 30px;
    }
    .not1 {
        margin-left: 48.5%;
        margin-top: -15px;
        width: 40%;
    }
}
</style>