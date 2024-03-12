<template>
    <div class="about">
        <div class="video_info">
        <!-- <img src="../../assets/Cover.jpg" alt=""> -->
        </div>

        <div class="text_info">
            <div class="main">
                <h1>I'm <br> Walt De Jesus</h1>
                
                <h2 style="font-size: 60px; font-weight: 800; filter: drop-shadow(0px 0px 30px #ffffff63);  background: -webkit-linear-gradient(#ffffff, #BCBCBC);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;">
                UX & Product Designer
                </h2>
                
                <p style="font-size: 20px;">
                My Job short job description
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
        max-width: 1261px;
        width: 100%; /* Inicialmente, ocupa toda a largura disponível */
        display: flex; 
        flex-wrap: wrap; /* Permitir que os elementos quebrem para a próxima linha em telas menores */
        justify-content: space-between;
        padding: 40px 50px;
        align-items: center;
        border-radius: 50px;
        word-break: break-all;
        background: linear-gradient( to bottom, hsla(0, 0%, 100%, 0.1), #ffffff00);
        backdrop-filter: blur( 7px );
        -webkit-backdrop-filter: blur( 7px );
        font-size: 13px;
        border: 2px solid rgba(255, 255, 255, 0.1);
        
        position: relative; /* Adicionamos position: relative para que o elemento pseudo tenha como referência */
    }

    button{
        background: linear-gradient( to bottom, hsla(0, 0%, 100%, 0.1), #ffffff00);
        backdrop-filter: blur( 7px );
        -webkit-backdrop-filter: blur( 7px );
        font-size: 13px;
    }

    .video_info{
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
        width: 63%; /* Ajuste conforme necessário */
        max-width: 715px; /* Use max-width para evitar que o texto fique muito longo em telas maiores */
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

    @media (max-width: 1182px) {
        .about {
            flex-direction: column; /* Alterar para layout de coluna em telas menores */
            align-items: stretch; /* Esticar os itens para ocupar a largura total */
        }
        .video_info, .text_info {
            width: 100%; /* Ajustar para ocupar a largura total em telas menores */
            max-width: 100%; /* Remover a restrição de largura máxima */
        }
    }


</style>