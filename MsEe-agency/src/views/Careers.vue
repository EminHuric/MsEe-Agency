<template>
  <div class="careers-page">

    <!-- HERO -->
    <section class="hero">
      <div class="hero-content">
        <h1>Join MsEe</h1>
        <p>Become part of a leading digital marketing agency. Collaborate, innovate, and grow with us!</p>
        <div class="hero-buttons">
          <button @click="scrollToApplication">Apply Now</button>
          <button @click="scrollToPartners">See Partners</button>
        </div>
      </div>
    </section>

    <!-- WHY WORK WITH US -->
    <section class="why-work">
      <h2>Why Work With Us</h2>
      <div class="benefits-grid">
        <div class="benefit-item">
          <h3>Innovative Projects</h3>
          <p>Work on high-impact campaigns that drive results worldwide.</p>
        </div>
        <div class="benefit-item">
          <h3>Career Growth</h3>
          <p>Learn, develop, and grow in a fast-paced environment.</p>
        </div>
        <div class="benefit-item">
          <h3>Creative Freedom</h3>
          <p>Bring your ideas to life in a collaborative space with passionate experts.</p>
        </div>
        <div class="benefit-item">
          <h3>Flexible Work</h3>
          <p>Remote or office – choose the way that suits you best.</p>
        </div>
      </div>
    </section>

    <!-- OPEN POSITIONS -->
    <section class="open-positions">
      <h2>Open Positions</h2>
      <div class="positions-grid">
        <div class="position-card">
          <h3>Sales Executive</h3>
          <p>Drive sales and connect clients with MsEe solutions.</p>
          <button @click="scrollToApplication">Apply →</button>
        </div>
        <div class="position-card">
          <h3>Marketing Specialist</h3>
          <p>Design campaigns, manage social media, and boost engagement.</p>
          <button @click="scrollToApplication">Apply →</button>
        </div>
        <div class="position-card">
          <h3>Frontend Developer</h3>
          <p>Build web experiences that captivate and convert users.</p>
          <button @click="scrollToApplication">Apply →</button>
        </div>
        <div class="position-card">
          <h3>Graphic Designer</h3>
          <p>Create visuals, branding, and creative content for clients.</p>
          <button @click="scrollToApplication">Apply →</button>
        </div>
      </div>
    </section>

    <!-- PARTNERS -->
    <section class="partners" id="partners">
      <h2>Our Partners</h2>
      <div class="partners-grid">
        <div class="partner-card">
          <div class="partner-logo">🌐</div>
          <h3>Marketing Co.</h3>
          <p>Advertising campaigns and strategic consulting.</p>
          <a href="#" target="_blank">Visit Website →</a>
        </div>
        <div class="partner-card">
          <div class="partner-logo">💡</div>
          <h3>Creative Studio</h3>
          <p>Branding, design, and creative production.</p>
          <a href="#" target="_blank">Visit Website →</a>
        </div>
        <div class="partner-card">
          <div class="partner-logo">⚡</div>
          <h3>SEO Experts</h3>
          <p>Improve search engine rankings and online visibility.</p>
          <a href="#" target="_blank">Visit Website →</a>
        </div>
        <div class="partner-card">
          <div class="partner-logo">🚀</div>
          <h3>Ads Agency</h3>
          <p>Paid campaigns and ROI-driven advertising.</p>
          <a href="#" target="_blank">Visit Website →</a>
        </div>
      </div>
    </section>

    <!-- FUN FACTS -->
    <section class="fun-facts">
      <h2>Fun Facts About MsEe</h2>
      <div class="facts-grid">
        <div class="fact-item">🚀 120+ campaigns completed</div>
        <div class="fact-item">🎯 98% client satisfaction</div>
        <div class="fact-item">📈 50+ partner collaborations</div>
        <div class="fact-item">💡 200+ creative projects</div>
      </div>
    </section>

    <!-- APPLICATION FORM -->
    <section class="application-form" id="application">
      <h2>Apply for a Position</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label>Name:</label>
          <input type="text" v-model="form.name" required placeholder="Your full name" />
        </div>
        <div class="form-group">
          <label>Age:</label>
          <input type="number" v-model="form.age" required min="17" placeholder="Your age" />
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" v-model="form.email" required placeholder="Your email" />
        </div>
        <div class="form-group">
          <label>Position Interested In:</label>
          <select v-model="form.position" required>
            <option disabled value="">Select position</option>
            <option>Sales Executive</option>
            <option>Marketing Specialist</option>
            <option>Frontend Developer</option>
            <option>Graphic Designer</option>
          </select>
        </div>
        <div class="form-group">
          <label>Why do you want to join MsEe?</label>
          <textarea v-model="form.reason" required placeholder="Share your motivation"></textarea>
        </div>
        <button type="submit">Submit Application</button>
      </form>
      <p v-if="submitted" class="success-msg">Thank you! Your application has been submitted.</p>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Footer from '../components/footer.vue';
import { ref } from 'vue';

const form = ref({ name:'', age:null, email:'', position:'', reason:'' });
const submitted = ref(false);

const scrollToApplication = () => {
  const el = document.getElementById('application');
  if(el) el.scrollIntoView({ behavior: 'smooth' });
};

const scrollToPartners = () => {
  const el = document.getElementById('partners');
  if(el) el.scrollIntoView({ behavior: 'smooth' });
};

const submitForm = () => {
  console.log('Application submitted:', form.value);
  submitted.value = true;
  form.value = { name:'', age:null, email:'', position:'', reason:'' };
};
</script>

<style scoped>
.careers-page { font-family:'Arial', sans-serif; background:#000; color:#eee; }

/* HERO */
.hero { padding: 140px 20px; text-align:center; }
.hero h1 { font-size:3.5rem; color:#ff5a00; margin-bottom:20px; }
.hero p { max-width:700px; margin:0 auto 30px; font-size:1.3rem; line-height:1.6; }
.hero-buttons button { margin:0 10px; padding:16px 40px; background:#ff5a00; border:none; border-radius:8px; font-weight:bold; color:#000; cursor:pointer; transition:.3s; }
.hero-buttons button:hover { background:#e04a00; color:#fff; transform:scale(1.05); }

/* Benefits */
.benefits-grid { display:flex; flex-wrap:wrap; justify-content:center; gap:25px; margin-top:40px; }
.benefit-item { flex:1 1 250px; background:#111; border:2px solid #ff5a00; border-radius:12px; padding:25px; text-align:center; transition:.3s; }
.benefit-item:hover { transform:translateY(-8px); box-shadow:0 0 20px #ff5a00; }
.benefit-item h3 { color:#ff5a00; font-size:1.4rem; margin-bottom:10px; }
.benefit-item p { color:#eee; font-size:1rem; line-height:1.5; }

/* Positions */
.positions-grid { display:flex; flex-wrap:wrap; justify-content:center; gap:25px; margin-top:40px; }
.position-card { flex:1 1 250px; background:#111; border:2px solid #ff5a00; border-radius:12px; padding:25px; text-align:center; transition:.3s; }
.position-card:hover { transform:translateY(-8px); box-shadow:0 0 20px #ff5a00; }
.position-card h3 { color:#ff5a00; margin-bottom:10px; font-size:1.4rem; }
.position-card p { color:#eee; font-size:1rem; margin-bottom:15px; }
.position-card button { padding:10px 25px; background:#ff5a00; color:#000; border:none; border-radius:6px; cursor:pointer; transition:.3s; }
.position-card button:hover { background:#e04a00; color:#fff; transform:scale(1.05); }

/* Partners */
.partners { padding:80px 20px; text-align:center; background:#111; }
.partners h2 { font-size:2.5rem; color:#ff5a00; margin-bottom:50px; }
.partners-grid { display:flex; flex-wrap:wrap; justify-content:center; gap:30px; }
.partner-card { background:#000; border:2px solid #ff5a00; border-radius:12px; padding:25px; flex:1 1 250px; text-align:center; transition:.3s; }
.partner-card:hover { transform:translateY(-8px); box-shadow:0 0 20px #ff5a00; }
.partner-logo { font-size:3rem; margin-bottom:15px; }
.partner-card h3 { color:#ff5a00; margin-bottom:10px; font-size:1.3rem; }
.partner-card p { color:#eee; font-size:1rem; margin-bottom:10px; }
.partner-card a { color:#ff5a00; font-weight:bold; text-decoration:none; transition:.3s; }
.partner-card a:hover { color:#e04a00; }

/* Fun Facts */
.fun-facts { padding:80px 20px; text-align:center; }
.facts-grid { display:flex; flex-wrap:wrap; justify-content:center; gap:25px; }
.fact-item { flex:1 1 200px; background:#111; border:2px solid #ff5a00; border-radius:12px; padding:20px; font-size:1.1rem; transition:.3s; }
.fact-item:hover { transform:translateY(-8px); box-shadow:0 0 15px #ff5a00; }

/* Application Form */
.application-form { padding:80px 20px; max-width:700px; margin:0 auto; text-align:left; }
.application-form h2 { text-align:center; color:#ff5a00; margin-bottom:30px; font-size:2.5rem; }
.form-group { margin-bottom:20px; display:flex; flex-direction:column; }
.form-group label { margin-bottom:5px; color:#ff5a00; font-weight:bold; }
.form-group input, .form-group select, .form-group textarea { padding:12px; border-radius:6px; border:2px solid #ff5a00; background:#111; color:#eee; font-size:1rem; }
.form-group textarea { min-height:100px; resize:vertical; }
.application-form button { display:block; margin:0 auto; padding:16px 40px; background:#ff5a00; border:none; border-radius:8px; color:#000; font-weight:bold; cursor:pointer; transition:.3s; }
.application-form button:hover { background:#e04a00; color:#fff; transform:scale(1.05); }
.success-msg { color:#00ff7f; text-align:center; margin-top:20px; font-weight:bold; }

/* Responsive */
@media(max-width:900px){
  .benefits-grid, .positions-grid, .partners-grid, .facts-grid { flex-direction:column; gap:20px; }
}
</style>
