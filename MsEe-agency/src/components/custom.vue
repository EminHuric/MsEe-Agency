<template>
    <h1 class="title">Custom Software That Works for You</h1>
    <p class="paragraph">Unlock the full potential of your business
        with tailored software solutions.
        From web apps to intelligent automation,
        we create custom software designed to streamline
        your processes, increase efficiency, and accelerate growth.</p>
    <form action="https://formsubmit.co/msee.agency@gmail.com" method="POST">
        <div class="border">
            <input type="email" name="email" placeholder="Email" required class="email" />
            <textarea
      name="message"
      rows="5"
      placeholder="Describe your project"
      required
      class="textarea"
    ></textarea>
    <button type="submit" class="btn">Send</button>
        </div>
    </form>
    <Footer />
</template>
<script setup>
import Footer from '../components/footer.vue'
</script>
<style scoped>
.title {
    text-align: center;
    color: white;
    font-family: sans-serif;
    margin-top: 350px;
    font-size: 60px;
}

.paragraph {
    color: white;
    text-align: center;
    font-size: 24px;
    font-family: sans-serif;
    width: 50%;
    margin: 20px auto;
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
@media (max-width: 420px) {
    .title {
        font-size: 35px;
        margin-top: 200px;
    }
    .paragraph {
        width: 90%;
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
@media (min-width: 421px) and (max-width: 768px) {
    .title {
        font-size: 35px;
        margin-top: 200px;
    }
    .paragraph {
        width: 90%;
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
        margin: 50px 25%;
    }
}
@media (min-width: 769px) and (max-width: 1024px) {
    .title {
        font-size: 50px;
        padding: 10px;
        margin-top: 200px;
    }
    .paragraph {
        width: 90%;
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
        width: 83%;
    }
    .btn {
        margin: 50px 25%;
    }
}
</style>