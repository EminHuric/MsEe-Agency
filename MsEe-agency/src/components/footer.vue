<template>
    <div class="footer">

        <img alt="logo" src="/lg.png" class="logo">
        <h2 class="name">MsEe</h2>
        <p class="paragraph">Our mission is to empower businesses to thrive
            in the digital world by delivering innovative
            solutions, maximizing growth, and creating exceptional experiences for every user.</p>




        <div class="dd">
            <h3 class="links">Links</h3>
            <router-link to="/" class="footer-link">Home</router-link>
            <router-link to="/about" class="footer-link">About us</router-link>
            <router-link to="/services" class="footer-link">Services</router-link>
            <router-link to="/careers" class="footer-link">Careers</router-link>
            <router-link to="/contact" class="footer-link">Contact</router-link>
        </div>
        <div class="d2">
            <h3 class="follow">Follow Us</h3>
            <a href="https://www.instagram.com/mse.e4/" target="_blank" rel="noopener noreferrer" class="follow-link">
                Instagram
            </a>
            <a href="https://www.facebook.com/share/1DZFQAKKdX/" target="_blank" rel="noopener noreferrer"
                class="follow-link">
                Facebook
            </a>
        </div>

        <div class="d3">
            <h3 class="contact">Contact</h3>
            <a href="https://mail.google.com/mail/?view=cm&to=msee.agency@gmail.com" target="_blank"
                class="email-link">Email</a>
            <a href="tel:+381652206269" class="phone-link">Phone</a>
        </div>

        <div class="d4">
            <h3 class="services">Services</h3>
            <router-link to="/software" class="footer-link1">Ms Software</router-link>
            <router-link to="/ms-marketing" class="footer-link1">Ms Marketing</router-link>
            <router-link to="/ms-automation" class="footer-link1"> Ms automation</router-link>
            <router-link to="/ms-tv" class="footer-link1">Ms Tv</router-link>

        </div>
        <hr class="line">
        <p class="msee">© 2026 MsEe</p>
    </div>
    
</template>
<style scoped>
.logo {
    height: 100px;
    margin-left: 19%;
    margin-top: 110px;
}

.dd {
    width: 65px;
    margin-left: 43%;
}

.d2 {
    width: 89px;
    margin-left: 51%;
}

.d3 {
    width: 89px;
    margin-left: 60%;
}

.d4 {
    width: 105px;
    margin-left: 68%;
}

.name {
    color: white;
    font-family: sans-serif;
    font-size: 50px;
    margin-left: 24%;
    margin-top: 145px;
}

.paragraph {
    color: white;
    margin-left: 20%;
    font-size: 18px;
    font-family: sans-serif;
    width: 18%;
    margin-top: -10px;
}

.footer-link {
    display: block;
    margin-top: 9px;
    text-decoration: none;
    font-family: sans-serif;
    color: white;
}

.footer-link1 {
    display: block;
    margin-top: 9px;
    text-decoration: none;
    font-family: sans-serif;
    color: white;
}

.follow-link {
    display: block;
    margin-top: 9px;
    text-decoration: none;
    font-family: sans-serif;
    color: white;
}

.email-link {
    display: block;
    margin-top: 9px;
    text-decoration: none;
    font-family: sans-serif;
    color: white;
}

.phone-link {
    display: block;
    margin-top: 9px;
    text-decoration: none;
    font-family: sans-serif;
    color: white;
}

.links {
    font-family: sans-serif;
    color: rgb(235, 102, 1);
    font-weight: bold;
    margin-top: -165px;
    margin-bottom: 20px;
}

.contact {
    font-family: sans-serif;
    color: rgb(235, 102, 1);
    font-weight: bold;
    margin-top: -90px;
    margin-bottom: 20px;
}

.services {
    font-family: sans-serif;
    color: rgb(235, 102, 1);
    font-weight: bold;
    margin-top: -90px;
    margin-bottom: 20px;
}

.follow {
    font-family: sans-serif;
    color: rgb(235, 102, 1);
    font-weight: bold;
    margin-top: -175px;
    margin-bottom: 20px;
}

.msee {
    color: white;
    position: absolute;
    bottom: 40px;
    margin-left: 20%;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
}

.line {
    position: absolute;
    bottom: 100px;
    left: 18%;
    margin: 0;
    border: 2px solid orange;
    width: 65%;
}

.footer {
    border: 3px solid rgb(8, 5, 1);
    position: relative;
    bottom: 0px;
    margin-top: 350px;
    height: 500px;
    width: 100%;
    background-color: rgb(10, 6, 1);
}

@media (max-width: 420px) {
    .footer {
        width: 100%;
        background-color: rgb(15, 9, 2);
        border: none;
        margin-top: 250px;
        height: auto;
        
    }
    .line {
        position: relative;
        bottom: 0px;
        margin-top: 30px;
    }
    .msee {
        position: relative;
        bottom:0px;

    }

    .logo {
        height: 100px;
        margin-left: -10px;
        margin-top: 10px;
        z-index: 1;
    }

    .name {
        margin-left: 100px;
        padding-top: 50px;
    }

    .paragraph {
        margin-left: 20px;
        width: 90%;
    }

    .links {
        margin-top: 50px;
        text-align: center;
    }

    .follow {
        text-align: center !important;
        margin-top: 30px;
        margin-left: -85px;
    }

    .footer-link {
        text-align: center;
        color:  white !important;
    }

    .follow-link {
        text-align: center;
        margin-left: -85px;
    }

    .contact {
        margin-top: 30px;
        text-align: center;
        margin-left: -155px;
    }

    .email-link,
    .phone-link {
        text-align: center;
        margin-left: -155px;
    }

    .services {
        margin-top: 30px;
        text-align: center;
        margin-left: -230px;
    }

    .footer-link1 {
        margin-left: -230px;
        text-align: center;
    }

}

@media (min-width: 421px) and (max-width: 533px) {
    .footer {
        width: 100%;
        background-color: rgb(15, 9, 2);
        border: none;
        margin-top: 250px;
        height: auto;
        
    }
    .line {
        position: relative;
        bottom: 0px;
        margin-top: 30px;
    }
    .msee {
        position: relative;
        bottom: 0px;

    }

    .logo {
        height: 100px;
        margin-left: -10px;
        margin-top: 10px;
        z-index: 1;
    }

    .name {
        margin-left: 100px;
        padding-top: 50px;
    }

    .paragraph {
        margin-left: 20px;
        width: 90%;
    }

    .links {
        margin-top: 50px;
        text-align: center;
    }

    .follow {
        text-align: center !important;
        margin-top: 30px;
        margin-left: -85px;
    }

    .footer-link {
        text-align: center;
        color: white !important;
    }

    .follow-link {
        text-align: center;
        margin-left: -85px;
        color: white !important;
    }

    .contact {
        margin-top: 30px;
        text-align: center;
        margin-left: -155px;
    }

    .email-link,
    .phone-link {
        text-align: center;
        margin-left: -155px;
        color: white !important;
    }

    .services {
        margin-top: 30px;
        text-align: center;
        margin-left: -230px;
    }

    .footer-link1 {
        margin-left: -230px;
        text-align: center;
        color: white !important;
    }

}

@media (min-width: 533px) and (max-width: 754px) {
    .footer {
        width: 100%;
        background-color: rgb(15, 9, 2);
        border: none;
        margin-top: 250px;
        height: auto;
        
    }
    .line {
        position: relative;
        bottom: 0px;
        margin-top: 30px;
    }
    .msee {
        position: relative;
        bottom: 0px;

    }

    .logo {
        height: 100px;
        margin-left: -10px;
        margin-top: 10px;
        z-index: 1;
    }

    .name {
        margin-left: 100px;
        padding-top: 50px;
    }

    .paragraph {
        margin-left: 20px;
        width: 90%;
    }

    .links {
        margin-top: 50px;
        text-align: center;
    }

    .follow {
        text-align: center !important;
        margin-top: 30px;
        margin-left: -120px;
    }

    .footer-link {
        text-align: center;
        color: white !important;
    }

    .follow-link {
        text-align: center;
        margin-left: -120px;
        color: white !important;
    }

    .contact {
        margin-top: 30px;
        text-align: center;
        margin-left: -225px;
    }

    .email-link,
    .phone-link {
        text-align: center;
        margin-left: -225px;
        color: white !important;
    }

    .services {
        margin-top: 30px;
        text-align: center;
        margin-left: -340px;
    }

    .footer-link1 {
        margin-left: -330px;
        text-align: center;
        color: white !important;
    }

}

@media (min-width: 755px) and (max-width: 875px) {
    .footer {
        width: 99%;
        background-color: rgb(15, 9, 2);
        border: none;
        margin-top: 250px;
        height: 480px;
        
    }
    .line {
        position: absolute;
        bottom: 10px;
    }
    .msee {
        position: absolute;
        bottom: -40px;
    }
    .logo {
        margin-left: 10px;
        margin-top: -10px;
    }
    .name {
        padding-top: 32px !important;
        margin-left: 120px;
    }
    .paragraph {
        margin-left: 40px;
        width: 85%;
    }
    .dd {
        margin-top: 250px;
        margin-left: 100px;
    }
    .d2 {
        margin-top: 8px;
        margin-left: 250px;
    }
    .d3 {
        margin-top: 0px;
        margin-left: 400px;
    }
    .d4 {
        margin-top: 0px;
        margin-left: 550px;
    }
}
@media (min-width: 876px) and (max-width: 1024px) {
    .footer {
        width: 100%;
        background-color: rgb(15, 9, 2);
        border: none;
        margin-top: 250px;
        height: 480px;
        
    }
    .line {
        position: absolute;
        bottom: 10px;
        width: 90%;
        left: 10px;
    }
    .msee {
        position: absolute;
        bottom: -40px;
    }
    .logo {
        margin-left: 10px;
        margin-top: -10px;
    }
    .name {
        padding-top: 32px !important;
        margin-left: 120px;
    }
    .paragraph {
        margin-left: 40px;
        width: 85%;
    }
    .dd {
        margin-top: 250px;
        margin-left: 150px;
    }
    .d2 {
        margin-top: 8px;
        margin-left: 300px;
    }
    .d3 {
        margin-top: 0px;
        margin-left: 450px;
    }
    .d4 {
        margin-top: 0px;
        margin-left: 600px;
    }
}
@media (min-width: 1025px) and (max-width: 1200px) {
    .logo {
        margin-left: 10px;
        margin-top: 10px;
    }
    .name {
        margin-left: 130px;
        margin-top: 55px;
    }
    .paragraph {
        margin-left: 30px;
        width: 35%;
    }
    .dd {
        margin-left: 470px;
    }
    .d2 {
        margin-left: 610px;
        margin-top: 5px;
    }
    .d3 {
        margin-left: 760px;
    }
    .d4 {
        margin-left: 890px;
    }
    .line {
        width: 100%;
        left: 0px;
    }
    .msee {
        margin-left: 50px;
    }
}
@media (min-width: 1201px) and (max-width: 1380px) {
    .logo {
        margin-left: 10px;
        margin-top: 10px;
    }
    .name {
        margin-left: 130px;
        margin-top: 55px;
    }
    .paragraph {
        margin-left: 30px;
        width: 35%;
    }
    .dd {
        margin-left: 550px;
    }
    .d2 {
        margin-left: 680px;
        margin-top: 5px;
    }
    .d3 {
        margin-left: 820px;
    }
    .d4 {
        margin-left: 960px;
    }
    .line {
        width: 100%;
        left: 0px;
    }
    .msee {
        margin-left: 50px;
    }
}
@media (min-width: 1381px) and (max-width: 1719px) {
    .logo {
        margin-left: 13%;
        height: 80px;
        margin-top: 0px;
    }
    .name {
        margin-left: 310px;
        margin-top: 40px;
        font-size: 45px;
    }
    .paragraph {
        margin-left: 30px;
        width: 22%;
        margin-left: 15%;
    }
    .dd {
        margin-left: 680px;
    }
    .d2 {
        margin-left: 800px;
        margin-top: 5px;
    }
    .d3 {
        margin-left: 930px;
    }
    .d4 {
        margin-left: 1050px;
    }
    .line {
        width: 100%;
        left: 0px;
    }
    .msee {
        margin-left: 50px;
    }
}
@media (min-width: 1720px) and (max-width: 2120px) {
    .name {
        margin-left: 26%;
        margin-top: 35px;
    }
    .logo {
        margin-top: 0px;
    }
}

</style>