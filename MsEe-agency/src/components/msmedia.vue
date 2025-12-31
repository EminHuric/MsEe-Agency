<template>
  <!-- Hero Section -->
  <img alt="ms-photos" src="/photom.jpeg" class="photom">
  <h2 class="title"> Turn Ideas into<br> Real Impact</h2>
  <p class="subtitle">We transform bold ideas into strategies that grow your brand, boost visibility, and deliver real results.</p>
  <a href="#contactForm"><button class="start">Start now</button></a>

  <!-- Our Services Section -->
  <p class="headline">Make Your Brand Unstoppable</p>
  <h2 class="title2">Our Services</h2>
  <hr class="line">
  <p class="paragraph">
    We create powerful marketing strategies that help brands grow, increase visibility, and achieve real results.
    Combining creativity, data, and experience, we deliver solutions that leave a lasting impact.
    Explore below how these services can elevate your business and take it to the next level.
  </p>

  <!-- Services Grid -->
  <div class="services-grid">
    <div class="service-card">
      <div class="icon">🎯</div>
      <h4 class="service-title">Google Ads & PPC Campaigns</h4>
      <p class="service-desc">Targeted online campaigns to boost leads and sales.</p>
    </div>
    <div class="service-card">
      <div class="icon">🔍</div>
      <h4 class="service-title">SEO Optimization</h4>
      <p class="service-desc">Improve your website ranking and drive organic traffic.</p>
    </div>
    <div class="service-card">
      <div class="icon">📱</div>
      <h4 class="service-title">Social Media Management</h4>
      <p class="service-desc">Engaging content and targeted ads for all platforms.</p>
    </div>
    <div class="service-card">
      <div class="icon">✍️</div>
      <h4 class="service-title">Content Creation</h4>
      <p class="service-desc">Graphics, videos, and text to support all digital channels.</p>
    </div>
    <div class="service-card">
      <div class="icon">💡</div>
      <h4 class="service-title">Brand Strategy</h4>
      <p class="service-desc">Positioning and long-term growth strategies for your brand.</p>
    </div>
    <div class="service-card">
      <div class="icon">📊</div>
      <h4 class="service-title">Analytics & Reporting</h4>
      <p class="service-desc">Track performance, measure results, and optimize campaigns.</p>
    </div>
  </div>

  <!-- CTA Button -->
  <div class="cta-container">
    <a href="#contactForm"><button class="cta-btn">Start Your Project</button></a>
  </div>
  <form action="https://formsubmit.co/msee.agency@gmail.com" method="POST" id="contactForm">
        <div class="border">
            <input type="email" name="email" placeholder="Email" required class="email" />
            <textarea
      name="message"
      rows="5"
      placeholder="Describe your business"
      required
      class="textarea"
    ></textarea>
    <button type="submit" class="btn">Send</button>
        </div>
    </form>
    <Footer />
</template>

<script setup>
import Footer from './footer.vue';
</script>

<style scoped>
.title {
  color: rgb(255, 111, 0);
  margin-top: -450px;
  margin-left: 18%;
  font-size: 100px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.subtitle {
  color: white;
  font-size: 26px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin-left: 18.5%;
  width: 32%;
  margin-top: -50px;
}

.photom {
  height: 550px;
  margin-left: 55%;
  margin-top: 200px;
  transition: height 0.3s, margin 0.3s;
}

.start {
  height: 50px;
  width: 140px;
  font-size: 20px;
  border: none;
  background-color: rgb(255, 111, 0);
  font-weight: bold;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin-left: 18.5%;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.3s;
}

.start:hover {
  background-color: black;
  border: 2px solid rgb(255, 111, 0);
  color: white;
}

.photom:hover {
  height: 540px;
}

/* Our Services Section */
.headline {
  color: rgb(255, 111, 0);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 22px;
  text-align: center;
  margin-top: 50px;
}

.title2 {
  text-align: center;
  color: white;
  font-size: 55px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin-top: 10px;
}

.line {
  border: none;
  height: 4px;
  background-color: orange;
  width: 6%;
  margin: 10px auto 30px auto;
  border-radius: 2px;
}

.paragraph {
  color: white;
  font-size: 23px;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 55%;
  margin: 0 auto 50px auto;
  line-height: 1.6;
}

/* Services Grid - 3 kolone = 2 reda po 3 kartice */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 kolone na desktopu */
  gap: 25px;
  max-width: 1300px;
  margin: 50px auto;
}

@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr); /* tablet 2 kolone */
  }
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr; /* mobilni 1 kolona */
    gap: 20px;
  }
}

.service-card {
  background-color: black;
  border: 3px solid orange;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.35);
}

.icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: orange;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.service-desc {
  font-size: 1.1rem;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.5;
}

/* CTA button below services */
.cta-container {
  text-align: center;
  margin-top: 40px;
}

.cta-btn {
  padding: 16px 36px;
  background-color: rgb(255,111,0);
  color: white;
  font-weight: bold;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
}

.cta-btn:hover {
  background-color: black;
  border: 2px solid rgb(255,111,0);
}
.border {
    border: 1px solid rgb(255, 115, 0);
    height: 420px;
    width: 800px;
    margin: 150px auto;
}

.email {
    background-color: black;
    color: white;
    border-color: rgb(255, 119, 0);
    height: 40px;
    width: 400px;
    margin: 50px 190px;
    font-size: 20px;
    border-top: none;
    border-left: none;
    border-right: none;
}
.textarea {
    width: 380px;
    margin: -20px 190px;
    height: 150px;
    font-family: sans-serif;
    font-size: 20px;
    padding: 10px;
    background-color: black;
    color: white;
    border-color: rgb(255, 106, 0);
}
.btn {
    width: 180px;
    margin: 50px 300px;
    height: 50px;
    font-family: sans-serif;
    font-size: 20px;
    padding: 10px;
    background-color: black;
    color: white;
    border-color: rgb(255, 106, 0);
} 
/* Full Responsive Adjustments */
@media (max-width: 2000px) {
  .title {
    font-size: 65px;
    margin-left: 19%;
    margin-top: -380px;
  }
  .subtitle {
    width: 29%;
    margin-left: 19%;
    font-size: 22px;
    margin-top: -30px;
  }
  .photom {
    margin-left: 50%;
    height: 400px;
    margin-top: 180px;
  }
  .start {
    margin-left: 19%;
  }
  .headline {
    margin-top: 200px;
  }
}
@media (max-width: 1720px) {
  .title {
    font-size: 65px;
    margin-left: 14%;
    margin-top: -380px;
  }
  .subtitle {
    width: 33%;
    margin-left: 14%;
    font-size: 22px;
    margin-top: -30px;
  }
  .photom {
    margin-left: 50%;
    height: 450px;
    margin-top: 180px;
  }
  .start {
    margin-left: 14%;
  }
  .headline {
    margin-top: 200px;
  }
}
@media (max-width: 1200px) {
  .title {
    font-size: 50px;
    margin-left: 5%;
    margin-top: -350px;
  }
  .subtitle {
    width: 35%;
    margin-left: 5%;
    font-size: 20px;
    margin-top: -30px;
  }
  .photom {
    margin-left: 45%;
    height: 400px;
    margin-top: 150px;
  }
  .start {
    margin-left: 5%;
  }
  .headline {
    margin-top: 200px;
  }
}

@media (max-width: 1024px) {
  .title {
    font-size: 50px;
    margin-left: 5%;
    margin-top: 20px;
  }
  .subtitle {
    font-size: 20px;
    width: 80%;
    margin-left: 5%;
    margin-top: -20px;
  }
  .photom {
    width: 95%;
    height: 450px;
    margin-left: 2%;
  }
  .start {
    margin-left: 5%;
  }
  .paragraph {
    width: 80%;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 50px;
    margin-left: 5%;
    margin-top: 20px;
  }
  .subtitle {
    font-size: 20px;
    width: 80%;
    margin-left: 5%;
    margin-top: -20px;
  }
  .photom {
    width: 95%;
    height: 350px;
    margin-left: 2%;
  }
  .start {
    margin-left: 5%;
  }
  .paragraph {
    width: 80%;
  }
  .border {
        width: 90%;
    }
    .email {
        margin-left: 20px;
        width: 85%;
    }
    .textarea {
        margin-left: 20px;
        width: 80%;
    }
    .btn {
        margin: 50px 75px;
    }
}

@media (max-width: 480px) {
  .title {
    font-size: 40px;
    margin-left: 5%;
    margin-top: 20px;
  }
  .subtitle {
    font-size: 16px;
    width: 80%;
    margin-left: 5%;
    margin-top: -20px;
  }
  .photom {
    width: 95%;
    height: 300px;
    margin-left: 2%;
  }
  .start {
    margin-left: 5%;
  }
  .paragraph {
    width: 90%;
    font-size: 18px;
  }
  .service-card {
    padding: 20px;
  }
  .service-title {
    font-size: 1.3rem;
  }
  .service-desc {
    font-size: 1rem;
  }
  .cta-btn {
    padding: 14px 28px;
    font-size: 16px;
  }
  .border {
        width: 90%;
    }
    .email {
        margin-left: 20px;
        width: 85%;
    }
    .textarea {
        margin-left: 20px;
        width: 80%;
    }
    .btn {
        margin: 50px 75px;
    }
}  

</style>
