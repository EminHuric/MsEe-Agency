<template>
  <div class="comments-carousel-section">
    <!-- Toggle jezika -->
    <div class="lang-toggle">
      <button :class="{ active: currentLang === 'EN' }" @click="currentLang = 'EN'">EN</button>
      <button :class="{ active: currentLang === 'SR' }" @click="currentLang = 'SR'">SR</button>
    </div>

    <!-- Naslov i podnaslov -->
    <h2 class="title">{{ texts[currentLang].commentsTitle }}</h2>
    <p class="subtitle">{{ texts[currentLang].commentsSubtitle }}</p>

    <!-- Carousel komentara -->
    <div class="comments-carousel">
      <div class="carousel-track">
        <div 
          class="comment-box" 
          v-for="(comment, index) in comments" 
          :key="index"
        >
          <div class="initials">{{ getInitials(comment[currentLang]) }}</div>
          <p>{{ comment[currentLang] }}</p>
        </div>

        <!-- Duplication za beskonačnu animaciju -->
        <div 
          class="comment-box" 
          v-for="(comment, index) in comments" 
          :key="'dup-' + index"
        >
          <div class="initials">{{ getInitials(comment[currentLang]) }}</div>
          <p>{{ comment[currentLang] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// trenutni jezik
const currentLang = ref('EN');

// naslov i podnaslov
const texts = {
  EN: {
    commentsTitle: 'Comments',
    commentsSubtitle: 'These are some of our client feedbacks'
  },
  SR: {
    commentsTitle: 'Komentari',
    commentsSubtitle: 'Ovo su neki od komentara naših klijenata'
  }
};

// komentari sa prevodom
const comments = ref([
  { 
    EN: "Great collaboration! Their marketing increased our sales.", 
    SR: "Odlična saradnja! Njihov marketing nam je povećao prodaju." 
  },
  { 
    EN: "The software they developed saved us a lot of time.", 
    SR: "Softver koji su napravili nam je uštedio puno vremena." 
  },
  { 
    EN: "Process automation completely changed our workflow.", 
    SR: "Automatizacija procesa je potpuno promenila naš rad." 
  },
  { 
    EN: "All recommendations!", 
    SR: "Sve preporuke!" 
  },
  { 
    EN: "I hired 20 agencies to sell me an apartment, they sold it with one free campaign.", 
    SR: "Angazovao zam 20 agencija da mi prodaju stan, oni su jednom besplatnom kampanjom prodali." 
  },
  
]);

const getInitials = (text) => {
  const words = text.split(' ');
  return words.slice(0, 2).map(w => w[0].toUpperCase()).join('');
};
</script>

<style scoped>
.comments-carousel-section {
  max-width: 1500px;
  margin: 200px auto 0 auto;
  text-align: center;
  padding: 20px;
  color: white;
}

/* Toggle dugmad */
.lang-toggle {
  margin-bottom: 15px;
}

.lang-toggle button {
  background: none;
  border: 1px solid #ff6600;
  color: white;
  padding: 5px 12px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;
}

.lang-toggle button.active {
  background-color: #ff6600;
  color: white;
}

.title {
  font-size: 60px;
  margin-bottom: 10px;
  font-family: Arial, Helvetica, sans-serif;
}

.subtitle {
  font-size: 24px;
  color: #ccc;
  margin-bottom: 30px;
  font-family: Arial, Helvetica, sans-serif;
}

.comments-carousel {
  overflow: hidden;
  width: 100%;
  background-color: #000000;
  padding: 20px 0;
}

.carousel-track {
  display: flex;
  width: max-content;
  animation: scroll-left 20s linear infinite;
  gap: 20px;
}

.comment-box {
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #ff6600;
  color: white;
  border-radius: 10px;
  padding: 15px 20px;
  min-width: 300px;
  background-color: #1a1a1a;
}

.comment-box .initials {
  font-weight: bold;
  background-color: #fff3e0;
  color: #ff6600;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>
