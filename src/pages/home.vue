<template>
    <headVue/>

    <div class="banner">
        <img src="../assets/grid.svg" alt="">
    </div>
    <div class="wj_mains">
        <aboutVue @navegate="goTo" class="about"/>

        <div class="skiils_container">
            <div class="resume">
                <span style="font-size: 60px; font-weight: 800; filter: drop-shadow(0px 0px 30px #ffffff63);  background: -webkit-linear-gradient(#ffffff, #a3a3a3);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent; line-height: 46px;">
                    Minhas habilidades abrangem desde: <br>  estratégia, pesquisa, análise,  design <br> de interação e prototipagem e Testes 
                </span>
                <i></i>
            </div>

            <!-- <div class="other">
                <h2>E não menos importante</h2>
                <h3>
                    Ajudo você a idenficar problemas de <br> Experiência e resolve-los com <br> habilidades
                </h3>

            </div> -->

        </div>
        <skillVue />

        <div ref="targetSection" class="services_container">
            <div class="title">
                <h1 class="l">Let´s </h1>
                <h1 class="w">Work Together</h1>
            </div>

            <service/>
        </div>
    </div>

    <foo/>
</template>

<script setup>

    import aboutVue from '../components/about/about.vue';
    import skillVue from '../components/cards/skill.vue';
    import service from '../components/cards/services.vue'
    import foo from '../components/bottom/footer.vue'
    import teste from '../components/about/teste.vue'
    import { ref } from 'vue';
    import headVue from '../components/head/head.vue';


    const targetSection = ref()

    const goTo = () =>{
        if(targetSection.value){
            targetSection.value.scrollIntoView({ behavior: 'smooth' })
        }
    }

</script>

<style scoped>
    .wj_mains{
        max-width: 100%;
        width: 100%;
        padding: 43px 58px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    i {
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  width: 20%;
  height: 100%;
  transform: skew(-10deg, 0deg);
  background: linear-gradient(to right, rgba(28, 28, 28, 0) 0%, rgba(233, 8, 8, 0.03) 1%, rgba(70, 70, 70, 0.6) 30%, rgba(255, 255, 255, 0.273) 50%, rgba(255, 255, 255, 0.372) 70%, rgba(255, 255, 255, 0.548) 71%, rgba(255, 255, 255, 0) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff', endColorstr='#00ffffff', GradientType=1);
  animation: move 4s infinite 1s;
}
    .banner{
        width: 100%;
        position: absolute;
        top: -10px;
    }

    .banner img{
        width: 100%;
    }

    .about{
        margin-top: 100px;
        margin-bottom: 100px;
    }
    .skiils_container{
        margin-top: 50px;
        display: flex;
        justify-content: center;
        gap: 40px;
        margin-top: 130px;
        margin-bottom: 160px;
    }

    .services_container .w{
        filter: drop-shadow(0px 0px 30px #ffffff63);  background: -webkit-linear-gradient(#E3E4E6, #E3E4E6);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
        font-weight: 800;
    }
    .services_container .l{
        filter: drop-shadow(0px 0px 30px #ffffff63);  background: -webkit-linear-gradient(#838487, #838487);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
        font-weight: 800;
    }

    .services_container {
        max-width: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }
    .services_container .title{display: flex; gap: 20px;}
</style>