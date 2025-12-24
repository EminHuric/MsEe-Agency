<template>
  <div class="newsletter-section">
    <h2 class="title">NEWSLETTER</h2>
    <hr class="line">
    <p class="text">
      Stay up to date with our latest events, promotions, and marketing news.
      Subscribe and never miss an update!
    </p>
    
    <form 
      id="emailForm" 
      class="newsletter-form" 
      action="https://formsubmit.co/ehrx09@gmail.com" 
      method="POST"
      target="_blank"
    >
      <input class="polje" 
        type="email" 
        name="email"
        placeholder="Enter your email" 
        required
      />
      <button type="submit">Subscribe</button>
    </form>
  </div>
</template>

<script setup>
</script>

<style scoped>
.newsletter-section {
  text-align: center;
  margin-top: 200px;
}

.title {
  color: white;
  font-family: sans-serif;
  font-size: 45px;
}

.text {
  color: white;
  font-size: 24px;
  margin: 35px auto;
  width: 45%;
  font-family: sans-serif;
}

.line {
  margin-left: 40%;
  width: 150px;
  margin: -20px auto 30px auto;
  border: none;
  height: 3px;
  background-color: rgb(206, 93, 0);
}

/* Forma */
.newsletter-form {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 200px;
}

.newsletter-form input {
  padding: 15px 20px; /* povećano za lakši unos */
  border-radius: 5px;
  border: 2px solid #ff6600; /* narandžasti border umesto belog */
  min-width: 300px; /* veće polje */
  font-size: 18px; /* veći font */
  background-color: black;
  color: white;
}

.newsletter-form input::placeholder {
  color: #ccc
}

.newsletter-form button {
  padding: 15px 25px; /* veće dugme */
  border: none;
  background-color: #ff6600;
  color: white;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

.newsletter-form button:hover {
  background-color: #e65c00;
}

@media (max-width: 420px) {
    .title {
        margin-top: -80px;
    }
    .text {
        width: 90%;
    }
    .button {
        margin-top: 120px;
    }
}
@media (min-width: 421px) and (max-width: 533px) {
    .title {
        margin-top: -80px;
    }
    .text {
        width: 90%;
    }
    .button {
        margin-top: 120px;
    }
}
@media (min-width: 533px) and (max-width: 754px) {
    .title {
        margin-top: -80px;
    }
    .text {
        width: 90%;
    }
    .button {
        margin-top: 120px;
    }
}
@media (min-width: 755px) and (max-width: 768px) {
    .title {
        margin-top: -80px;
    }
    .text {
        width: 90%;
    }
    .button {
        margin-top: 120px;
    }
}
@media (min-width: 768px) and (max-width: 875px) {
    .title {
        margin-top: -80px;
    }
    .text {
        width: 90%;
    }
    .button {
        margin-top: 120px;
    }
}
@media (min-width: 876px) and (max-width: 1024px) {
    .title {
        margin-top: -80px;
    }
    .text {
        width: 90%;
    }
    .button {
        margin-top: 120px;
    }
}
@media (min-width: 1025px) and (max-width: 1200px) {
    .title {
        margin-top: -60px;
    }
    .text {
        width: 90%;
    }
    .button {
        margin-top: 120px;
    }
}
@media (min-width: 1201px) and (max-width: 1380px) {
    .title {
        margin-top: -20px;
    }
    .text {
        width: 90%;
    }
    .button {
        margin-top: 120px;
    }
}
</style>
