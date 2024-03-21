<template>
    <div class="about">
        <div class="video_info">
        <!-- <img src="../../assets/Cover.jpg" alt=""> -->
        </div>

        <div class="text_info">
            <div class="main">
                <h1 style="font-size: 20px; color: #A8A8A8;">Eu sou o  Walt De Jesus</h1>
                
                <h2 style="font-size: 60px; font-weight: 800; filter: drop-shadow(0px 0px 30px #ffffff63);  background: -webkit-linear-gradient(#ffffff, #BCBCBC);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;">
                UX/UI & Product Designer
                </h2>
                
                <p style="font-size: 12px; color: #A8A8A8;">
                  Com mais de  <strong style="color: white"> 5 Anos de Experiência na área </strong>. Sou apaixonado por criar
experiências excepcionais que impulsionam resultados de negócios.
Especializado em liderar equipes dinâmicas de design, colaboro estreitamente com equipes multidisciplinares e
partes interessadas para potencializar as experiências dos usuários
                </p>
            </div>
            <div class="cta">
              <button>
                  <router-link to="/cv">
                    Look my Experience or CV
                  </router-link>
                </button>
                <button>
                  <router-link to="/work">
                    Look my Portifolio
                  </router-link>
                </button>
                <button @click="$emit('navegate')" >Look my Services</button>

            </div>
        </div>
        <i></i>

    </div>
</template>

<script setup>
  import {ref} from 'vue'
  const coverprj = ref('https://i.ytimg.com/an_webp/Icuj-YnWaBE/mqdefault_6s.webp?du=3000&sqp=CMy8h68G&rs=AOn4CLCnaOVb_J7Ffvx1Hyw6pGQkHAxfJA')

  
</script>

<style scoped>

    .about{
        max-width: 1371px;
        width: 100%; /* Inicialmente, ocupa toda a largura disponível */
        display: flex; 
        /* flex-wrap: wrap; */
        justify-content: space-between;
        padding: 40px 50px;
        align-items: center;
        border-radius: 60px;
        word-break: break-all;
        background: linear-gradient( to bottom, hsla(0, 0%, 100%, 0.1), #ffffff00);
        backdrop-filter: blur( 7px );
        -webkit-backdrop-filter: blur( 7px );
        font-size: 13px;
        border: 2px solid rgba(255, 255, 255, 0.1);
        position: relative; /* Adicionamos position: relative para que o elemento pseudo tenha como referência */
box-shadow: 0px 0px 60px 0px rgba(255, 255, 255, 0.115);
      }

    button{
        background: linear-gradient( to bottom, hsla(0, 0%, 100%, 0.1), #ffffff00);
        backdrop-filter: blur( 7px );
        -webkit-backdrop-filter: blur( 7px );
        font-size: 13px;
    }

    .video_info{
        max-width: 100%; /* Garantir que a largura máxima seja 100% */
        width: 450px; /* Largura inicial do vídeo */
        height: 550px; /* Altura inicial do vídeo */
        border-radius: 40px;
        background: linear-gradient( to bottom, hsla(0, 0%, 100%, 0.1), #ffffff00);
        backdrop-filter: blur( 7px );
        -webkit-backdrop-filter: blur( 7px );
        font-size: 13px;
        border: 2px solid rgba(255, 255, 255, 0.062);
        position: relative;
    }

    .video_info img {
      max-width: 100%; /* Garantir que a largura máxima seja 100% */
        width: 340px; /* Largura inicial do vídeo */
        height: 450px; /* Altura inicial do vídeo */
        border-radius: 40px;
        background: linear-gradient( to bottom, hsla(0, 0%, 100%, 0.1), #ffffff00);
        backdrop-filter: blur( 7px );
        -webkit-backdrop-filter: blur( 7px );
        font-size: 13px;
        border: 2px solid rgba(255, 255, 255, 0.062);
        position: relative;
        opacity: .3;
    }

    .text_info{
        max-width: 100%; /* Use max-width para evitar que o texto fique muito longo em telas maiores */
        width: 780px; /* Ajuste conforme necessário */

        word-break: break-all;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .cta{display: flex; gap: 10px;}

a {
  color: white;
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

    @media (max-width: 1024px) {
        .about {
            flex-direction: column;
            align-items: stretch; 
        }
        .video_info, .text_info {
            width: 100%; 
            max-width: 100%; 
        }

        h2{font-size: 20px;}

        .video_info{height: 200px;}
    } 


    @media (max-width: 1667px) {
       .about{
        max-width: 85%;
        display: flex;
        gap: 30px;
        

       }

       .main h2{
        line-height: 60px;
        margin-bottom: 20px;
       }

       .video_info{
        max-width: 100%;
        height: 400px;
       }


    }

 



    


</style>