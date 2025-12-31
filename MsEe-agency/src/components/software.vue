<template>
    <section class="section-bg">
        <h1 class="title">Ms Software</h1>
        <p class="paragraph">
            Digital Solutions That Make Your Business Unstoppable.<br>
            We build custom websites, advanced software solutions,
            and intelligent digital systems designed to accelerate growth,
            boost performance, maximize efficiency, and help you dominate your market.
            Every product is tailored, reliable,
            and focused on delivering measurable results for your business.
        </p>

        <!-- Hero buttons -->
        <div class="hero-buttons">
            <router-link to="/create-website">
                <button class="web">Start Your Website</button>
            </router-link>
            <router-link to="/custom-software">
                <button class="custom">Get Custom Software</button>
            </router-link>
        </div>

        <!-- Headline + Subtitle + Subtext -->
        <p class="headline">Web & Custom Software</p>
        <h2 class="subtitle">Building the Future Together</h2>
        <p class="subtext">Empowering businesses with web and software solutions</p>

        <!-- Cards -->
        <div class="container">
  <router-link to="/create-website" class="square">Create Website</router-link>
  <router-link to="/custom-software" class="square">Custom Software</router-link>
</div>
        <div class="container">
            <div class="square1">⚡ Fast Delivery</div>
            <div class="square2">🛡️ Reliable & Securey</div>
            <div class="square3">🕒 24/7 Supporty</div>
            <div class="square4">🎯 Custom Solutions</div>
            <div class="square5">🚀 Built to Scale</div>
        </div>
        <h2 class="sub1">Schedule a Free Consultation</h2>
        <p class="pp">Let’s turn your idea into a powerful digital solution.</p>
        <form action="https://formsubmit.co/msee.agency@gmail.com" method="POST">
            <input type="email" name="email" placeholder="Email" required class="input2" />
             <button type="submit" class="btn2">Send</button>
            
        </form>
        
    </section>
    <Footer />
</template>
    <script setup>
        import Footer from '../components/footer.vue'
    </script>
<style scoped>
/* Sekcija sa mrežastom pozadinom */
.section-bg {
    position: relative;
    /* za pseudo-element */
    min-height: 100vh;
    background-color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 80px 20px;
    overflow: hidden;
}

/* Mrežasta animirana pozadina */
.section-bg::before {
    content: "";
    position: absolute;
    inset: 0;
    /* pokriva celu sekciju */
    background-image:
        linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
    background-size: 40px 40px;
    animation: moveGrid 20s linear infinite;
    z-index: 0;
    /* iza sadržaja */
}

/* Sadržaj iznad mreže */
.section-bg>* {
    position: relative;
    z-index: 1;
}

/* Animacija mreže */
@keyframes moveGrid {
    from {
        background-position: 0 0, 0 0;
    }

    to {
        background-position: 400px 400px, 400px 400px;
    }
}

/* Hero tekst */
.title {
    font-size: 100px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 6px;
    color: transparent;
    -webkit-text-stroke: 2px #ff8a00;
    margin-bottom: 20px;
    font-family: sans-serif;
    margin-top: 300px;
}

.paragraph {
    color: white;
    text-align: center;
    font-size: 24px;
    font-family: sans-serif;
    width: 50%;
}

/* Hero dugmad */
.hero-buttons {
    display: flex;
    gap: 50px;
    margin-top: 50px;
}

.web {
    border: 1px solid rgb(255, 115, 0);
    background-color: transparent;
    color: white;
    height: 75px;
    width: 300px;
    font-size: 20px;
    font-family: sans-serif;
    border-radius: 8px;
    font-weight: normal;
    cursor: pointer;
}

.custom {
    border: 1px solid rgb(255, 115, 0);
    background-color: rgb(255, 102, 0);
    color: rgb(0, 0, 0);
    font-weight: bold;
    height: 75px;
    width: 300px;
    font-size: 22px;
    font-family: sans-serif;
    border-radius: 8px;
    cursor: pointer;
}

/* Headline & subtitle */
.headline {
    color: rgb(218, 84, 12);
    text-align: center;
    margin-top: 320px;
    font-size: 20px;
    font-family: sans-serif;
}

.subtitle {
    text-align: center;
    color: white;
    font-family: sans-serif;
    font-size: 55px;
    margin-top: -10px;
}

.subtext {
    text-align: center;
    color: white;
    font-size: 20px;
    font-family: sans-serif;
    margin-top: -20px;
}

/* Cards container */
.container {
    display: flex;
    gap: 50px;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 50px;
}

/* Cards */
.square {
    flex: 1 1 400px;
    min-width: 300px;
    max-width: 500px;
    height: 400px;
    background-color: rgba(255, 115, 0, 0.05);
    border: 2px solid #ff8a00;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: white;
    font-weight: bold;
    text-align: center;
    border-radius: 12px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.square:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(255, 115, 0, 0.4);
}

.square1 {
    color: white;
    font-family: sans-serif;
    border: 1px solid orange;
    padding: 15px;
    font-size: 20px;
    border-radius: 40px;
    margin-top: 100px;
}

.square2 {
    color: white;
    font-family: sans-serif;
    border: 1px solid orange;
    padding: 15px;
    font-size: 20px;
    border-radius: 40px;
    margin-top: 100px;
}

.square3 {
    color: white;
    font-family: sans-serif;
    border: 1px solid orange;
    padding: 15px;
    font-size: 20px;
    border-radius: 40px;
    margin-top: 100px;
}

.square4 {
    color: white;
    font-family: sans-serif;
    border: 1px solid orange;
    padding: 15px;
    font-size: 20px;
    border-radius: 40px;
    margin-top: 100px;
}

.square5 {
    color: white;
    font-family: sans-serif;
    border: 1px solid orange;
    padding: 15px;
    font-size: 20px;
    border-radius: 40px;
    margin-top: 100px;
}

.sub1 {
    color: white;
    margin-top: 150px;
    font-family: sans-serif;
    font-size: 50px;
}

.pp {
    color: white;
    font-family: sans-serif;
    font-size: 20px;
    margin-top: -20px;
}


.input2 {
    margin-top: 30px;
    width: 450px;
    height: 45px;
    font-size: 20px;
    background-color: #000;
    border-color: #ff8a00;
    padding: 10px;
    color: white;
}
.btn2 {
    background: #000000;
    border: none;
    height: 65px;
    color: #ff8a00;
    font-size: 20px;
    font-family: sans-serif;
    margin-left: -80px;

    
}
@media (max-width: 420px) {
    .title {
        font-size: 45px;
        margin-top: 100px;
    }
    .paragraph {
        width: 98%;
    }
    .web {
        margin-left: 0px;
    }
    .custom {
        margin-top: 100px;
        margin-left: -350px;
    }
    .headline {
        margin-top: 50px;
    }
    .sub1 {
        font-size: 40px;
    }
    .input2 {
        width: 100%;
        margin-left: -15px;
    }
    .btn2 {
        margin-left: 0px;
    }
    .square {
        color: white;
    }
}
@media (min-width: 421px) and (max-width: 768px) {
    .square {
        color: white !important;
        text-decoration: none;
    }
    .title {
        font-size: 45px;
        margin-top: 100px;
    }
    .paragraph {
        width: 98%;
    }
    .web {
        margin-left: 0px;
    }
    .custom {
        margin-top: 100px;
        margin-left: -350px;
    }
    .headline {
        margin-top: 50px;
    }
    .sub1 {
        font-size: 40px;
    }
    .input2 {
        width: 100%;
        margin-left: -15px;
    }
    .btn2 {
        margin-left: 0px;
    }
}
@media (min-width: 769px) and (max-width: 1024px) {
    .square {
        color: white !important;
        text-decoration: none;
    }
    .title {
        font-size: 65px;
        margin-top: 150px;
    }
    .paragraph {
        width: 90%;
    }
    .headline {
        margin-top: 150px;
    }

}
@media (min-width: 1025px) {
    .title {
        font-size: 65px;
        margin-top: 200px;
    }
    .square {
        color: white !important;
        text-decoration: none;
    }
}
</style>
