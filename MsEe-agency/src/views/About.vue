<template>
  <div class="about-page">

    <!-- HERO -->
    <section class="hero">
      <div class="hero-content">
        <h1>About MsEe</h1>
        <p>We are a forward-thinking digital marketing agency delivering innovative solutions that drive results.</p>
        <div class="hero-buttons">
          <button @click="goToContact">Contact Us</button>
          <button @click="learnMore">Learn More</button>
        </div>
      </div>
    </section>

    <!-- WHO WE ARE -->
    <section class="who-we-are">
      <h2>Who We Are</h2>
      <p>MsEe is a team of passionate digital experts delivering high-impact solutions in web design, branding, SEO, and online advertising.</p>
      <p>Our mission is to elevate brands with measurable results and exceptional service.</p>
      <div class="who-buttons">
        <button>Our Team</button>
        <button>Case Studies</button>
      </div>
    </section>

    <!-- APPROACH -->
    <section class="approach">
      <h2>Our Approach</h2>
      <div class="approach-grid">
        <div class="approach-item">
          <div class="icon">📊</div>
          <h3>Research & Strategy</h3>
          <p>Analyzing market trends to craft tailored strategies for your success.</p>
        </div>
        <div class="approach-item">
          <div class="icon">🎨</div>
          <h3>Creative Design</h3>
          <p>Visuals that captivate and convert visitors into loyal customers.</p>
        </div>
        <div class="approach-item">
          <div class="icon">⚡</div>
          <h3>Optimization</h3>
          <p>Continuous testing and optimization to maximize ROI.</p>
        </div>
        <div class="approach-item">
          <div class="icon">🚀</div>
          <h3>Innovation</h3>
          <p>Leveraging latest tools and AI to stay ahead of the competition.</p>
        </div>
      </div>
    </section>

    <!-- DIFFERENTIATORS -->
    <section class="differentiators">
      <h2>Why Choose MsEe</h2>
      <div class="diff-grid">
        <div class="diff-item">
          <h3>Client Focused</h3>
          <p>Custom strategies for each client’s unique goals.</p>
          <button>See Case Studies →</button>
        </div>
        <div class="diff-item">
          <h3>Results Driven</h3>
          <p>Measurable growth in traffic, leads, and conversions.</p>
          <button>Our Results →</button>
        </div>
        <div class="diff-item">
          <h3>Creative Solutions</h3>
          <p>Innovative approaches that stand out in a crowded market.</p>
          <button>Learn More →</button>
        </div>
        <div class="diff-item">
          <h3>Automation & AI</h3>
          <p>Smart tools to optimize workflows and increase efficiency.</p>
          <button>Discover Tools →</button>
        </div>
      </div>
    </section>

    <!-- FUN FACTS -->
    <section class="fun-facts">
      <h2>Fun Facts</h2>
      <div class="facts-grid">
        <div class="fact-item">🚀 100+ campaigns completed</div>
        <div class="fact-item">🎯 95% client satisfaction</div>
        <div class="fact-item">📈 Continuous innovation</div>
        <div class="fact-item">💡 Creative strategies</div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <h2>Let's Build Something Amazing Together</h2>
      <button @click="goToContact">Contact Us</button>
    </section>

  </div>
  <Footer />
</template>

<script setup>
    import Footer from '../components/footer.vue';
</script>

<style scoped>
.about-page {
  font-family: 'Arial', sans-serif;
  background-color: #000000;
  color: #eee;
}

/* HERO */
.hero { padding: 140px 20px; text-align: center; }
.hero h1 { font-size: 3.5rem; color: #ff5a00; margin-bottom: 20px; }
.hero p { font-size: 1.3rem; margin-bottom: 30px; max-width: 700px; margin-left:auto; margin-right:auto;}
.hero-buttons button {
  margin: 0 5px; padding: 16px 40px; background: #ff5a00; border: none; border-radius: 8px; font-weight: bold; color: #000; cursor: pointer; transition: 0.3s;
}
.hero-buttons button:hover { background: #e04a00; color: #fff; transform: scale(1.05); }

/* WHO WE ARE */
.who-we-are { padding: 100px 20px; text-align: center; }
.who-we-are h2 { font-size: 3rem; color: #ff5a00; margin-bottom: 20px; }
.who-we-are p { font-size: 1.2rem; margin-bottom: 15px; }
.who-buttons button { margin: 0 10px; padding: 14px 30px; background: #ff5a00; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; transition: 0.3s; }
.who-buttons button:hover { background: #e04a00; color: #fff; }

/* APPROACH */
.approach { padding: 100px 20px; text-align: center; }
.approach h2 { font-size: 3rem; color: #ff5a00; margin-bottom: 50px; }
.approach-grid { display: flex; flex-wrap: wrap; gap: 30px; justify-content: center; }
.approach-item { flex: 1 1 280px; background: #000; padding: 25px; border-radius: 12px; border: 2px solid #ff5a00; transition: transform 0.3s, box-shadow 0.3s; }
.approach-item:hover { transform: translateY(-10px); box-shadow: 0 0 20px #ff5a00; }
.approach-item h3 { font-size: 1.5rem; color: #ff5a00; margin-bottom: 10px; }
.approach-item p { color: #eee; font-size: 1rem; line-height: 1.5; }

/* DIFFERENTIATORS */
.differentiators { padding: 100px 20px; text-align: center; }
.diff-grid { display: flex; flex-wrap: wrap; gap: 30px; justify-content: center; }
.diff-item { flex: 1 1 260px; background: #000; padding: 25px; border-radius: 12px; border: 2px solid #ff5a00; text-align: center; transition: transform 0.3s, box-shadow 0.3s; }
.diff-item:hover { transform: translateY(-8px); box-shadow: 0 0 20px #ff5a00; }
.diff-item h3 { font-size: 1.5rem; color: #ff5a00; margin-bottom: 10px; }
.diff-item p { color: #eee; font-size: 1rem; margin-bottom: 15px; }
.diff-item button { padding: 10px 25px; background: #ff5a00; color: #000; border: none; border-radius: 6px; cursor: pointer; transition: 0.3s; }
.diff-item button:hover { background: #e04a00; color: #fff; transform: scale(1.05); }

/* FUN FACTS */
.fun-facts { padding: 100px 20px; text-align: center; }
.facts-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 30px; }
.fact-item { background: #000; padding: 20px; border-radius: 10px; color: #ff5a00; font-size: 1.1rem; min-width: 180px; border: 2px solid #ff5a00; transition: transform 0.3s, box-shadow 0.3s; }
.fact-item:hover { transform: translateY(-8px); box-shadow: 0 0 15px #ff5a00; }

/* CTA */
.cta { padding: 100px 20px; text-align: center; }
.cta h2 { font-size: 2.5rem; color: #ff5a00; margin-bottom: 30px; }
.cta button { padding: 18px 60px; font-weight: bold; border-radius: 10px; border: none; background: #ff5a00; color: #000; cursor: pointer; transition: 0.3s; }
.cta button:hover { background: #e04a00; color: #fff; transform: scale(1.05); }

/* Responsive */
@media(max-width:900px){ .approach-grid, .diff-grid, .facts-grid { flex-direction: column; gap: 25px; } }
</style>
