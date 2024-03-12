<template>
    <headVue class="h"/>

    <div class="wj_main">
        
        <div class="work_xp">
            <div class="wEx">
                <h2>My Work Experience</h2>
                <div class="companys" v-for="(experience, key) in storeExperience" :key="key">
                    <div class="c" >
                        <span @click="seeCompany(experience)">{{ experience.company }}</span>
                    </div>
                </div>
            </div>
            
            <hr>
        </div>

        <div class="aboutExep" v-if="selectedCompany">
            <div class="center_content">
                <div class="head">
                    <div class="ligth">
                        <img src="../assets/exepIcons/job.svg" alt="">
                        <span>My Load</span>
                    </div>
                    <h1>{{ selectedCompany.company }}</h1>
                    <div class="details">
                        <img src="../assets/exepIcons/local.svg" alt="">
                        <span>{{ selectedCompany.mode }} - {{ selectedCompany.country }} -  {{selectedCompany.duration}}</span>
                    </div>
                </div>
                <hr>

                <div class="experience">
                
                    <div class="content">
                        <div class="title">
                        <img src="../assets/exepIcons/briefcase.svg" alt="">
                        <h2>Job Description and Responsibilities</h2>
                    </div>
                        <span>
                        {{ selectedCompany.responsabilites }}
                        </span>
                    </div>

                    <div class="high">
                        <div class="icon">
                            <img src="../assets/exepIcons/flash.svg" alt="">
                            <h2>Values</h2>
                        </div>
                        <p>{{ selectedCompany.winsResume }}</p>

                    </div>
                    
                </div>
            </div>

            <div class="rigth_content">
                <div class="top_info">
                    <h2>Sobre a empresa</h2>
                    <img src="../assets/companys/Microsoft Logo.svg" alt="">
                </div>

                <div class="resume">
                    <span>
                        {{ selectedCompany.aboutCompany }}
                    </span>
                    <a href="">www.linkdaempresa.co.ao</a>
                </div>
                <i></i>
            </div>
        </div>

    </div>

   <!-- <div class="services_container">
        <div class="title">
            <h1 class="l">Let´s </h1>
            <h1 class="w">Work Together</h1>
        </div>

        <services/>
    </div> -->
    <foo class="f"/>

</template>

<script setup>
    import { ref } from "vue";

    import services from "../components/cards/service.vue";
    import headVue from "../components/head/head.vue";
    import foo from '../components/bottom/footer.vue'
    import storeExperience from "../getters/getExp";

    const selectedCompany = ref(storeExperience.value[0])
    const seeCompany = (index) =>{
        console.log(`Voce selecionou a empresa ${selectedCompany.value = index}`)
    }

    console.log(storeExperience)

</script>

<style scoped>

.wj_main{
    max-width: 100%;
    display: flex;
    padding: 43px 58px;
    gap: 58px;
}

    .center_content{
        max-width: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    hr{
        border: 1px solid #1B1D22;
    }
    
    .work_xp{
        display: flex;
        /* gap: 58px; */

    }

    .h{margin-bottom: -20px;}
    .f{margin-top: 100px;}
    .work_xp .btns{ width: 100%; display: flex; flex-direction: column; gap: 20px;}
    .btns img{cursor: pointer; width: 80px; }

    .work_xp hr{height: 120vh; position: relative; z-index: 0;
    background: #1B1D22;
    border: 1px solid #1B1D22;
}
    
    .wEx{
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .wEx h2{ width:120px; font-size: 15px ;}

    .title{display: flex; align-items: center;}
    .title h2{font-size: 20px; font-weight: 800;   filter: drop-shadow(0px 0px 30px #ffffff63);  background: -webkit-linear-gradient(#E3E4E6, #a0a0a0);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
        font-weight: 800;}
    .head .ligth{
       display: flex;
       align-items: center;

    }

    .head{display: flex; flex-direction: column; gap: 10px;}
    .head h1{font-size: 35px; font-weight: 800;   filter: drop-shadow(0px 0px 30px #ffffff63);  background: -webkit-linear-gradient(#E3E4E6, #747474);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
        font-weight: 800;}

    .head .details{
        display: flex;
        align-items: center;
        font-size: 13px;
        gap: 10px;
        color: #ADADAF;
        font-weight: 600;
    }


.content{
    font-size: 13px;
    color: #A99D9D;
}

.high{
    background: #070707;
    padding: 30px;
    border-radius: 20px;
}

.high p{font-size: 13px; color: #A99D9D;}
.high h2{font-size: 20px; font-weight: 800;   filter: drop-shadow(0px 0px 30px #ffffff63);  background: -webkit-linear-gradient(#E3E4E6, #a0a0a0);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
        font-weight: 800;}
.icon{display: flex; align-items: center;}

.experience{
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.rigth_content{
    max-width: 100%;
        width: 413px; /* Inicialmente, ocupa toda a largura disponível */
        height: 420px;
        display: flex; 
        flex-direction: column;
        /* gap: 10px; */
        flex-wrap: wrap; /* Permitir que os elementos quebrem para a próxima linha em telas menores */
        /* justify-content: space-between; */
        padding: 20px;
        /* align-items: center; */
        border-radius: 30px;
        word-break: break-all;
        background: linear-gradient( to bottom, hsla(0, 0%, 100%, 0.1), #ffffff00);
        backdrop-filter: blur( 7px );
        -webkit-backdrop-filter: blur( 10px );
        font-size: 13px;
        border: 2px solid rgba(255, 255, 255, 0.1);
        
        position: relative; /* Adicionamos position: relative para que o elemento pseudo tenha como referência */

}

.top_info{display: flex; flex-direction: column; gap: 10px;}

.top_info img{width: 100px;}

.resume{display: flex; flex-direction: column; margin-top: 20px; gap: 10px; font-size: 13px; color: #A8A8A8;}
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

@keyframes move {
  0% {
    left: 0;
    opacity: 0;
  }
  5% {
    opacity: 0.0;
  }
  48% {
    opacity: 0.2;
  }
  80% {
    opacity: 0.0;
  }
  100% {
    left: 82%;
  }
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
        /* gap: 40px; */
        margin-top: -450px;
    }
    .services_container .title{display: flex; gap: 20px;}


    .aboutExep{display: flex; justify-content: space-between; max-width: 100%; width: 100%; gap: 58px;}


    .companys{
        width: 150px;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .companys div span{cursor: pointer;}

</style>