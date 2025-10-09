<template>
  <div class="mainborder">
    <div class="container">
      <img alt="logo" src="/public/logo.jpg" class="logo">
      <h1 class="logoTitle">MsEe</h1>


      <!-- Dugme -->
      <button class="menuButton" @click="toggleMenu">
        <i class="fa-solid fa-bars"></i>
      </button>

      <!-- Padajući meni -->
      <div v-if="show" class="dropdown-content">
        <div class="toggle">

          <div class="mainborder">
            <div class="container">
              <img alt="logo" src="/public/logo.jpg" class="logo">
              <h1 class="logoTitle">MsEe</h1>
              <button class="menuButton" @click="closeMenu">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>

          <ul style="margin-top: 200px;">
            <router-link to="/" @click.native="closeMenu">
              <li class="item">HOME</li>
            </router-link>
            <router-link to="/about" @click.native="closeMenu">
              <li class="item">ABOUT US</li>
            </router-link>
            <router-link to="/services" @click.native="closeMenu">
              <li class="item">SERVICES</li>
            </router-link>
            <router-link to="/careers" @click.native="closeMenu">
              <li class="item">CAREERS</li>
            </router-link>
            <router-link to="/contact" @click.native="closeMenu">
              <li class="item">CONTACT</li>
            </router-link>
          </ul>

          <div class="extra-content">
            <div class="sticker2">
              <i class="fa-solid fa-globe"></i>
            </div>
            <div class="sticker3">
              <i class="fa-solid fa-wifi"></i>
            </div>
            <div class="sticker4">
              <i class="fa-regular fa-user"></i>
            </div>
            <div class="sticker5">
              <i class="fa-solid fa-laptop-code"></i>
            </div>


            <p class="cc">© 2025 MsEe</p>

          </div>


        </div>
      </div>



      <nav class="nav">
        <ul class="container" style="list-style: none; gap: 80px; display: flex;">
          <li>
            <router-link to="/" class="nav-item">Home</router-link>
          </li>
          <link>
          <router-link to="/about" class="nav-item">About us</router-link>
          </link>
          <li>
            <router-link to="/services" class="nav-item">Services</router-link>
          </li>
          <li>
            <router-link to="/careers" class="nav-item">Careers</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="contact-btn">Contact</router-link>
          </li>
        </ul>
      </nav>

    </div>
  </div>
</template>

<style src="/src/components/menu/menu.css"></style>
<script setup>
import { ref } from 'vue';
const show = ref(false);

const toggleMenu = () => {
  show.value = !show.value;
};

const closeMenu = () => {
  show.value = false;
};

</script>