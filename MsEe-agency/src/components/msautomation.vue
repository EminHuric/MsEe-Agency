<template>
    <h1 class="title"> This page is currently unavailable.</h1>
    <p class="p">If you are interested in more information, please contact us.</p>
    <router-link to="/contact">
        <button class="contact">Contact</button>
    </router-link>

<Footer />
</template>

<script setup>
import Footer from './footer.vue';
</script>

<style scoped>
.title {
    color: white;
    font-size: 60px;
    margin-top: 400px;
    text-align: center;
    font-family: sans-serif;
}

.p {
    color: white;
    font-size: 20px;
    margin-top: -20px;
    text-align: center;
    font-family: sans-serif;
}

.contact {

    margin-left: 47%;
    height: 50px;
    width: 150px;
    font-weight: bold;
    border: none;
    background-color: rgb(255, 119, 0);
    font-size: 22px;
    margin-top: 20px;
}
</style>