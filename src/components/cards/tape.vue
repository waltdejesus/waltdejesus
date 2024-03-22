<template>
    <div class="wj">
        <div class="tape_main">
            <div class="logos">
                <div class="logos-slide">
  
                <!-- <h1 v-for="i in 10" :key="i" style="color: black;">Teste</h1> -->
                <img src="../../assets/logos/3m.svg" />
                <img src="../../assets/logos/barstool-store.svg" />
                <img src="../../assets/logos/budweiser.svg" />
                <img src="../../assets/logos/buzzfeed.svg" />
                <img src="../../assets/logos/forbes.svg" />
                <img src="../../assets/logos/macys.svg" />
                <img src="../../assets/logos/menshealth.svg" />
                <img src="../../assets/logos/mrbeast.svg" />
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const copy = ref(null);
  
  onMounted(() => {
  copy.value = document.querySelector('.logos-slide').cloneNode(true);
  document.querySelector('.logos').appendChild(copy.value);
  });
  </script>
  <style scoped>
  
    .wj{max-width: 100%; width: 100%;}
    .tape_main{
        width: 10000px;
        display: flex;
        background: rgb(16, 19, 195);
        color: black;
        overflow: hidden;
        font-size: 13px;
        position: relative;
        margin-left: -30px;
        gap: 30px;
    }
  
   
  
    @keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
  }
  
  
  .logos {
  overflow: hidden;
  padding: 30px 0;
  background: white;
  white-space: nowrap;
  position: relative;
  width: 100%;
  display: flex;
  gap: 30px;
  }
  
  .logos:before,
  .logos:after {
  position: absolute;
  top: 0;
  width: 250px;
  height: 100%;
  content: '';
  z-index: 2;
  }
  
  .logos:before {
  left: 0;
  background: linear-gradient(to left, rgba(255, 255, 255, 0), white);
  }
  
  .logos:after {
  right: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
  }
  
  .logos:hover .logos-slide {
  animation-play-state: paused;
  }
  
  .logos-slide {
  display: inline-block;
  animation: 35s slide infinite linear;
  display: flex;
  gap: 70px;
  }
  
  .logos-slide img {
  height: 30px;
  }
  
  </style>