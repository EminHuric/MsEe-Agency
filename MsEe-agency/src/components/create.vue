<template>
    <section class="section-bg">
        <h1 class="title">Create Your Website</h1>
        <p class="p">
            Launch your online presence with a professional,
            custom-built website designed to grow your business
            and convert visitors into clients.
        </p>
        <button class="start">Start Now</button>

        <div class="cards-container">
            <div class="card">
                <h3>Landing Page</h3>
                <ul>
                    <li>Fast & responsive</li>
                    <li>Single-page design</li>
                    <li>Lead generation</li>
                </ul>
            </div>
            <div class="card">
                <h3>Business / Corporate Site</h3>
                <ul>
                    <li>Responsive & professional</li>
                    <li>5–15 pages</li>
                    <li>SEO optimized</li>
                </ul>
            </div>
            <div class="card">
                <h3>E-commerce</h3>
                <ul>
                    <li>Mobile-friendly & responsive</li>
                    <li>Secure payments</li>
                    <li>Product catalog & inventory</li>
                </ul>
            </div>
        </div>
        <h2 class="st">Schedule a Consultation</h2>
        <form action="https://formsubmit.co/msee.agency@gmail.com" method="POST">
            <div class="border">
                <input type="email" name="email" placeholder="Email" required class="email" />
                <textarea name="message" rows="5" placeholder="Describe your business" required
                    class="textarea"></textarea>
                <button type="submit" class="btn">Send</button>
                <select name="site_type" required class="select">
                    <option value="" disabled selected>Select website type</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="Business Site">Business Site</option>
                    <option value="E-commerce">E-commerce</option>
                </select>
            </div>
        </form>
    </section>
    <Footer />
</template>

<script setup>
import Footer from '../components/footer.vue'
</script>

<style scoped>
.email,
.textarea,
.select {
    width: 100%;
    padding: 12px;
    border: 2px solid #ff8a00;
    border-radius: 6px;
    background-color: transparent;
    color: rgb(0, 0, 0);
    font-size: 16px;
    background-color: rgb(255, 115, 0);
    font-family: 'Segoe UI', Tahoma, Geneva, sans-serif;
}

.border {
    border: 1px solid rgb(255, 115, 0);
    height: 420px;
    width: 800px;
    margin: 80px auto;
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

.section-bg {
    min-height: 100vh;
    background-color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 20px;
    gap: 40px;
    text-align: center;
}

.st {
    color: white;
    font-family: sans-serif;
    font-size: 50px;
    margin-top: 150px;
}

.title {
    font-size: 100px;
    /* veće */
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 6px;
    color: transparent;
    -webkit-text-stroke: 2px #ff8a00;
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, sans-serif;
    /* sans-serif font */
    margin-top: 350px;
}

.p {
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, sans-serif;
    font-size: 24px;
    /* malo veće */
    color: white;
    max-width: 750px;
    margin-top: -80px;
}

.start {
    padding: 14px 30px;
    font-size: 20px;
    /* veće */
    font-weight: bold;
    border: none;
    border-radius: 8px;
    background-color: #ff8a00;
    color: black;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: -20px;
}

.start:hover {
    background-color: #ffb347;
}

.cards-container {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 150px;
}

.card {
    border: 2px solid #ff8a00;
    border-radius: 12px;
    padding: 25px;
    /* malo veće */
    width: 280px;
    /* veće od prethodnog */
    text-align: left;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, sans-serif;
    /* sans-serif */
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.05);
}

.card:hover {
    background-color: #ff8a00;
    color: black;
}

.card h3 {
    margin-bottom: 12px;
    font-size: 22px;
    /* veći naslov kartice */
}

.card ul {
    list-style: none;
    padding-left: 0;
    line-height: 1.6;
    font-size: 18px;
    /* veći tekst stavki */
}

@media (max-width: 420px) {
    .title {
        font-size: 65px;
        margin-top: 150px;
    }

    .border {
        width: 48%;
        margin-left: 200px;
        margin-top: 20px;
    }

    .email {
        margin-left: 20px;
        width: 80%;
    }

    .textarea {
        width: 80%;
        margin-left: 20px;
    }

    .btn {
        margin-left: 70px;
    }
}

@media (min-width: 421px) and (max-width: 768px) {
    .title {
        font-size: 65px;
        margin-top: 150px;
    }

    .border {
        width: 48%;
        margin-left: 200px;
        margin-top: 20px;
    }

    .email {
        margin-left: 20px;
        width: 80%;
    }

    .textarea {
        width: 80%;
        margin-left: 20px;
    }

    .btn {
        margin-left: 70px;
    }
}
@media (min-width: 769px) and (max-width: 1024px) {
    .title {
        font-size: 65px;
        margin-top: 150px;
    }

    .border {
        width: 80%;
        margin-left: 70px;
        margin-top: 20px;
    }

    .email {
        margin-left: 20px;
        width: 80%;
    }

    .textarea {
        width: 80%;
        margin-left: 20px;
    }

    .btn {
        margin-left: 70px;
    }
}
</style>
