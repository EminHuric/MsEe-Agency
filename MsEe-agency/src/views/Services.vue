<template>
  <div class="services-page">

    <!-- HERO -->
    <section class="hero">
      <div class="hero-content">
        <h1>Our Services</h1>
        <p>MsEe delivers innovative digital solutions designed to elevate your business and maximize results.</p>
        <div class="hero-buttons">
          <button @click="scrollToSection('services-list')">Explore Services</button>
          <button @click="scrollToForm">Contact Us</button>
        </div>
      </div>
    </section>

    <!-- SERVICES LIST -->
    <section id="services-list" class="services-list">
      <div class="service-item software">
    <div class="icon">💻</div>
    <h2>Software</h2>
    <p>Custom software solutions to automate processes, increase efficiency, and drive growth.</p>
    <button @click="$router.push('/software')">Learn More →</button>
  </div>

      <div class="service-item ms-marketing">
        <div class="icon">📣</div>
        <h2>Ms Marketing</h2>
        <p>Creative marketing campaigns, social media management, and brand strategy for measurable impact.</p>
        <button @click="goToService('marketing')">Learn More →</button>
      </div>

      <div class="service-item ms-automation">
        <div class="icon">⚡</div>
        <h2>Ms Automation</h2>
        <p>Automate workflows, leads, and customer engagement using smart AI-powered tools.</p>
        <button @click="goToService('automation')">Learn More →</button>
      </div>

      <div class="service-item ms-tv">
        <div class="icon">📺</div>
        <h2>Ms TV</h2>
        <p>Interactive digital TV and online streaming solutions to reach your audience effectively.</p>
        <button @click="goToService('tv')">Learn More →</button>
      </div>

      <div class="service-item ms-ads">
        <div class="icon">🚀</div>
        <h2>Ms Ads</h2>
        <p>Targeted online advertising campaigns to maximize conversions and ROI.</p>
        <button @click="goToService('ads')">Learn More →</button>
      </div>

      <div class="service-item ms-consulting">
        <div class="icon">🎯</div>
        <h2>Ms Consulting</h2>
        <p>Expert advice and strategy to help your business grow and innovate online.</p>
        <button @click="goToService('consulting')">Learn More →</button>
      </div>
    </section>

    <!-- FUN FACTS -->
    <section class="fun-facts">
      <h2>Why Choose MsEe?</h2>
      <div class="facts-grid">
        <div class="fact-item">🚀 100+ campaigns completed</div>
        <div class="fact-item">🎯 95% client satisfaction</div>
        <div class="fact-item">📈 Continuous innovation</div>
        <div class="fact-item">💡 Creative strategies</div>
        <div class="fact-item">🌐 Global clients served</div>
        <div class="fact-item">⚡ Rapid deployment & delivery</div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <h2>Ready to Elevate Your Business?</h2>
      <button @click="scrollToForm">Contact Us</button>
    </section>

    <!-- CONTACT FORM -->
    <section ref="contactForm" class="contact-form-section">
      <h2>Get in Touch</h2>
      <p>Fill out the form to discuss your project or services needs with MsEe.</p>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <input type="text" v-model="form.name" placeholder="Your Name" required />
        </div>
        <div class="form-group">
          <input type="email" v-model="form.email" placeholder="Your Email" required />
        </div>
        <div class="form-group">
          <input type="text" v-model="form.phone" placeholder="Phone (optional)" />
        </div>
        <div class="form-group">
          <input type="text" v-model="form.company" placeholder="Company (optional)" />
        </div>
        <div class="form-group">
          <textarea v-model="form.message" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit">Send Request</button>
      </form>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import Footer from '../components/footer.vue';

const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  message: ''
});

const submitForm = () => {
  console.log('Form submitted:', form);
  alert('Thank you! We will contact you soon.');
  // ovde kasnije ubaciš backend handler
};

const goToService = (service) => {
  console.log('Redirect to service:', service);
  // Kasnije ubaci pravi link ili router.push
};

const contactForm = ref(null);
const scrollToForm = () => {
  contactForm.value.scrollIntoView({ behavior: 'smooth' });
};

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};
</script>

<style scoped>
.services-page { font-family:'Arial', sans-serif; background:#000; color:#eee; }

/* HERO */
.hero { text-align:center; padding:140px 20px; }
.hero h1 { font-size:3.5rem; color:#ff5a00; margin-bottom:20px; }
.hero p { max-width:700px; margin:0 auto 30px; font-size:1.3rem; line-height:1.6; }
.hero-buttons button {
  margin:0 10px; padding:16px 40px; background:#ff5a00; color:#000; border:none; border-radius:8px; font-weight:bold; cursor:pointer; transition:.3s;
}
.hero-buttons button:hover { background:#e04a00; color:#fff; transform:scale(1.05); }

/* SERVICES LIST */
.services-list { display:flex; flex-wrap:wrap; justify-content:center; gap:30px; padding:60px 20px; }
.service-item { flex:1 1 280px; background:#111; border:2px solid #ff5a00; border-radius:16px; padding:30px; text-align:center; transition: transform .3s, box-shadow .3s; position: relative; overflow:hidden; }
.service-item:hover { transform:translateY(-10px); box-shadow:0 0 20px #ff5a00; }
.service-item .icon { font-size:3rem; margin-bottom:15px; color:#ff5a00; }
.service-item h2 { font-size:1.8rem; margin-bottom:10px; color:#ff5a00; }
.service-item p { color:#eee; font-size:1rem; line-height:1.5; margin-bottom:20px; }
.service-item button { padding:12px 30px; background:#ff5a00; color:#000; border:none; border-radius:8px; cursor:pointer; font-weight:bold; transition:.3s; }
.service-item button:hover { background:#e04a00; color:#fff; transform:scale(1.05); }

/* DIFFERENT STYLING PER SERVICE */
.ms-software:hover { box-shadow: 0 0 25px #ff7f50; }
.ms-marketing:hover { box-shadow: 0 0 25px #ffb347; }
.ms-automation:hover { box-shadow: 0 0 25px #ffa500; }
.ms-tv:hover { box-shadow: 0 0 25px #ff4500; }
.ms-ads:hover { box-shadow: 0 0 25px #ff8c00; }
.ms-consulting:hover { box-shadow: 0 0 25px #ff6347; }

/* FUN FACTS */
.fun-facts { padding:100px 20px; text-align:center; border-top:2px solid #ff5a00; }
.facts-grid { display:flex; flex-wrap:wrap; justify-content:center; gap:30px; }
.fact-item { background:#111; padding:20px; border-radius:12px; color:#ff5a00; font-size:1.1rem; min-width:180px; border:2px solid #ff5a00; transition: transform .3s, box-shadow .3s; }
.fact-item:hover { transform:translateY(-8px); box-shadow:0 0 15px #ff5a00; }

/* CTA */
.cta { padding:80px 20px; text-align:center; border-top:2px solid #ff5a00; }
.cta h2 { font-size:2.5rem; color:#ff5a00; margin-bottom:30px; }
.cta button { padding:16px 50px; font-weight:bold; border-radius:10px; border:none; background:#ff5a00; color:#000; cursor:pointer; transition:.3s; }
.cta button:hover { background:#e04a00; color:#fff; transform:scale(1.05); }

/* CONTACT FORM */
.contact-form-section { padding:80px 20px; text-align:center; background:#000; border-top:2px solid #ff5a00; }
.contact-form-section h2 { font-size:2.5rem; color:#ff5a00; margin-bottom:20px; }
.contact-form-section p { font-size:1.1rem; color:#eee; margin-bottom:40px; }
form { max-width:600px; margin:auto; display:flex; flex-direction:column; gap:20px; }
input, textarea { padding:14px 20px; border-radius:8px; border:2px solid #ff5a00; background:#111; color:#eee; font-size:1rem; }
input:focus, textarea:focus { outline:none; border-color:#ffa500; box-shadow:0 0 10px #ff5a00; }
textarea { min-height:120px; resize:none; }
form button { padding:16px 40px; background:#ff5a00; color:#000; border:none; border-radius:8px; font-weight:bold; cursor:pointer; transition:.3s; }
form button:hover { background:#e04a00; color:#fff; transform:scale(1.05); }

/* Responsive */
@media(max-width:900px){ 
  .services-list, .facts-grid { flex-direction:column; gap:25px; }
  .hero h1 { font-size:2.5rem; }
  .hero p { font-size:1.1rem; }
}
</style>
