<template>
    <!-- HERO SECTION -->
    <section class="hero-section">
        <div class="hero-bg"></div>
        <div class="hero-content">
            <h1>Your Entertainment, Uninterrupted</h1>
            <p>All in one place — watch anytime, anywhere!</p>
            <a href="#form"><button class="cta-btn">Start Watching</button></a>
        </div>
    </section>

    <!-- MAIN IMAGE -->
    <img alt="tv2" src="/tvp.jpeg" class="photo">

    <!-- DESCRIPTION -->
    <h2 class="tt">Streaming You Can Trust</h2>
    <p class="pp">
        MsTv, Europe’s Most Trusted and Proven TV Service. Try it free for 48 hours and see for yourself.
        No contracts, no hidden fees.
    </p>

    <!-- FEATURES -->
    <p class="chanels"><i class="fa-solid fa-tv"></i> 1,600 channels from around the world</p>
    <p class="chanels"><i class="fa-solid fa-film"></i> 7,000+ movies</p>
    <p class="chanels"><i class="fa-solid fa-film"></i> 20,000 series episodes</p>

    <a href="#form"><button class="free">48h Free Trial</button></a>

    <!-- PACKAGES / CENOVNICI -->
    <section class="packages-section">
        <h2>Choose Your Package</h2>
        <div class="packages-container">
            <div class="package-card popular">
                <h3>1 Month</h3>
                <p class="price">€9.99</p>
                <p>Try free for 48 hours</p>
                <a href="#form"><button class="cta-btn">Start Watching</button></a>
            </div>

            <div class="package-card popular">
                <h3>3 Months</h3>
                <p class="price">€24.99</p>
                <p>Most popular — Try free for 48 hours</p>
                <a href="#form"><button class="cta-btn">Start Watching</button></a>
            </div>

            <div class="package-card popular">
                <h3>6 Months</h3>
                <p class="price">€44.99</p>
                <p>Save more — Try free for 48 hours</p>
                <a href="#form"><button class="cta-btn">Start Watching</button></a>
            </div>

            <div class="package-card popular">
                <h3>12 Months</h3>
                <p class="price">83.99</p>
                <p>Best value — Try free for 48 hours</p>
                <a href="#form"><button class="cta-btn">Start Watching</button></a>
            </div>
        </div>
    </section>

    <!-- TV OFFER SECTION -->
    <section class="tv-offer-section" id="tv-offer">
        <h2 class="offer-title">Options</h2>
        <div class="offer-container">

            <!-- TEST FORM -->
            <div class="offer-card">
                <h3>Free 48h Test</h3>
                <p>Leave your basic information and test MS TV</p>

                <form action="https://formsubmit.co/msee.agency@gmail.com" method="POST">
                    <input type="hidden" name="_subject" value="MS TV – Test">
                    <input type="hidden" name="_captcha" value="false">

                    <input class="offer-input" type="text" name="first_name" placeholder="First Name" required>
                    <input class="offer-input" type="text" name="last_name" placeholder="Last Name" required>
                    <input class="offer-input" type="email" name="email" placeholder="Email Address" required>
                    <input class="offer-input" type="tel" name="phone" placeholder="Phone Number">
                    <input class="offer-input" type="text" name="company" placeholder="Company Name">

                    <button class="offer-btn" type="submit">
                        Request Test
                    </button>
                </form>
            </div>

            <!-- BUY FORM -->
            <div class="offer-card premium">
                <h3>Buy</h3>
                <p>Select duration and apply promo code if you have one.</p>

                <form action="https://formsubmit.co/msee.agency@gmail.com" method="POST" id="form">
                    <input type="hidden" name="_subject" value="MS TV – Purchase">
                    <input type="hidden" name="_captcha" value="false">

                    <select class="offer-input" name="months" required>
                        <option value="">Select duration</option>
                        <option value="1 month">1 Month</option>
                        <option value="3 months">3 Months</option>
                        <option value="6 months">6 Months</option>
                        <option value="12 months">12 Months</option>
                    </select>

                    <input class="offer-input" type="text" name="promo_code" placeholder="Promo Code (optional)">
                    <input class="offer-input" type="email" name="email" placeholder="Email Address" required>

                    <button class="offer-btn outline" type="submit">
                        Send Purchase Request
                    </button>
                </form>
            </div>

        </div>
    </section>
</template>


<style scoped>
/* HERO SECTION */

/* SECTION */
.tv-offer-section {
  padding: 120px 6%;
  background: #0d0d0d;
  color: #fff;
  font-family: sans-serif;
}

/* TITLE */
.offer-title {
  text-align: center;
  font-size: 46px;
  font-weight: 800;
  letter-spacing: 3px;
  margin-bottom: 80px;
  color: transparent;
  -webkit-text-stroke: 2px #ff8a00;
  text-transform: uppercase;
}

/* CONTAINER */
.offer-container {
  display: flex;
  gap: 50px;
  justify-content: center;
  flex-wrap: wrap;
}

/* CARD */
.offer-card {
  background: #111;
  border: 2px solid #222;
  padding: 40px 35px;
  width: 420px;
  border-radius: 16px;
  transition: 0.3s ease;
}

.offer-card:hover {
  border-color: #ff8a00;
  transform: translateY(-6px);
}

/* PREMIUM */
.offer-card.premium {
  border-color: #ff8a00;
  box-shadow: 0 0 25px rgba(255,138,0,0.15);
}

/* CARD TITLE */
.offer-card h3 {
  font-size: 28px;
  margin-bottom: 10px;
}

/* CARD TEXT */
.offer-card p {
  font-size: 15px;
  color: #bbb;
  margin-bottom: 25px;
}

/* INPUTS */
.offer-input {
  width: 90%;
  padding: 14px 16px;
  margin-bottom: 15px;
  background: #0b0b0b;
  border: 1px solid #333;
  color: #fff;
  font-size: 15px;
  border-radius: 8px;
  outline: none;
}

.offer-input::placeholder {
  color: #777;
}

.offer-input:focus {
  border-color: #ff8a00;
}

/* BUTTON */
.offer-btn {
  width: 100%;
  padding: 14px;
  font-size: 16px;
  font-weight: 700;
  background: #ff8a00;
  border: none;
  color: #000;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.25s ease;
}

.offer-btn:hover {
  background: #ffa733;
}

/* OUTLINE BUTTON */
.offer-btn.outline {
  background: transparent;
  color: #ff8a00;
  border: 2px solid #ff8a00;
}

.offer-btn.outline:hover {
  background: #ff8a00;
  color: #000;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .offer-container {
    gap: 30px;
  }

  .offer-card {
    width: 100%;
    max-width: 500px;
  }

  .offer-title {
    font-size: 34px;
    -webkit-text-stroke: 1.5px #ff8a00;
  }
  .photo {
        margin: 150px auto;
        width: 90%;
    }
    .tt {
        margin-left: 5%;
        margin-top: -80px;
    }
    .pp {
        margin-left: 5%;
        width: 90%;
    }
    .chanels {
        margin-left: 5%;
    }
    .free {
        margin-left: 5%;
    }
}



.hero-section {
    position: relative;
    width: 100%;
    height: 60vh;
    min-height: 300px;
    overflow: hidden;
}

.hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/tvv.jpeg");
    background-size: cover;
    background-position: center;
    filter: brightness(0.4);
    z-index: 1;
}

.hero-content {
    position: relative;
    z-index: 2;
    color: white;
    text-align: center;
    padding: 1rem;
    top: 50%;
    transform: translateY(-50%);
    font-family: sans-serif;
}

.hero-content h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
}

.cta-btn {
    background-color: #ff6600;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1.1rem;
    color: rgb(0, 0, 0);
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s;
    font-weight: bold;
}

.cta-btn:hover {
    background-color: #e65c00;
}

/* MAIN IMAGE */
.photo {
    height: 580px;
    width: 800px;
    margin-top: 250px;
    margin-left: 15%;
}

/* DESCRIPTION TEXT */
.tt {
    color: white;
    font-size: 60px;
    font-family: sans-serif;
    margin-top: -490px;
    margin-left: 51%;
}

.pp {
    color: white;
    font-size: 24px;
    font-family: sans-serif;
    margin-top: -30px;
    margin-left: 51.5%;
    width: 30%;
}

/* FEATURES */
.chanels {
    margin-left: 51.5%;
    color: white;
    font-family: sans-serif;
    font-size: 24px;
    margin-top: 50px;
}

.free {
    height: 40px;
    width: 135px;
    font-size: 18px;
    margin-left: 51.5%;
    margin-top: 20px;
    background-color: #e65c00;
    font-weight: bold;
    border: none;
}

/* PACKAGES SECTION */
.packages-section {
    text-align: center;
    padding: 3rem 1rem;
    background-color: #0e0903;
    margin-top: 120px;
    font-family: Arial, Helvetica, sans-serif;
}

.packages-section h2 {
    color: white;
    font-size: 2.5rem;
    margin-bottom: 2rem;
}

.packages-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
}

.package-card {
    background: #000000;
    padding: 2rem 1rem;
    border-radius: 10px;
    width: 220px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    font-family: sans-serif;
}

.package-card.popular {
    border: 1px solid #ff6600;
}

.package-card h3 {
    color: white;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.package-card .price {
    color: #ff6600;
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.package-card p {
    margin-bottom: 1rem;
    color: #ccc;
}

.package-card .cta-btn {
    background-color: #ff6600;
    color: black;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    padding: 0.7rem 1.2rem;
    cursor: pointer;
    transition: 0.3s;
}

.package-card .cta-btn:hover {
    background-color: #e65c00;
}

/* Responsive */
@media (max-width: 2500px) {
    .photo {
        margin-left: 13%;
        width: 38%;
    }
    .tt {
        font-size: 60px;
        margin-left: 55%;
        margin-top: -550px;
        width: 30%;
    }
    .pp {
        margin-left: 55%;
    }
    .chanels {
        margin-left: 55%;
    }
    .free {
        margin-left: 55%;
    }
}
@media (max-width: 1719px) {
    .photo {
        margin-left: 0%;
        width: 48%;
    }
    .tt {
        font-size: 60px;
        margin-left: 55%;
        margin-top: -550px;
    }
    .pp {
        margin-left: 55%;
    }
    .chanels {
        margin-left: 55%;
    }
    .free {
        margin-left: 55%;
    }
}

@media (max-width: 1200px) {
    .photo {
        margin: 150px auto;
        width: 90%;
    }
    .tt {
        margin-left: 5%;
        margin-top: -80px;
    }
    .pp {
        margin-left: 5%;
        width: 90%;
    }
    .chanels {
        margin-left: 5%;
    }
    .free {
        margin-left: 5%;
    }
}
@media (max-width: 768px) {
    .hero-section {
        height: 45vh;
    }

    .hero-content h1 {
        font-size: 2rem;
    }

    .hero-content p {
        font-size: 1rem;
    }

    .cta-btn {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
    }

    .packages-container {
        flex-direction: column;
        align-items: center;
    }

    .package-card {
        width: 80%;
    }
    .photo {
        margin: 150px auto;
        width: 90%;
    }
    .tt {
        margin-left: 5%;
        margin-top: -80px;
    }
    .pp {
        margin-left: 5%;
        width: 90%;
    }
    .chanels {
        margin-left: 5%;
    }
    .free {
        margin-left: 5%;
    }
}

</style>
