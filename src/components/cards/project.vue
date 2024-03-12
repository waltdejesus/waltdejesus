<template>
    <div class="cards">
        <div class="card" v-for="i in 3" :key="i">
            <div class="img">
                <img :src="coverprj" alt="coverPrj">
            </div>

            <div class="info">
                <h2>project Name</h2>
                <span class="tag">Finance Project</span>
                <p>First Connect your Metamask or TrustWallet to the "Connect Wallet" on the Homepage.</p>
            </div>
            <button>
                <router-link to="/prj">View this Case</router-link>
            </button>
            <i></i>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    const coverprj = ref('https://i.ytimg.com/an_webp/Icuj-YnWaBE/mqdefault_6s.webp?du=3000&sqp=CMy8h68G&rs=AOn4CLCnaOVb_J7Ffvx1Hyw6pGQkHAxfJA')

</script>

<style scoped>
    .cards{max-width: 100%; display: flex; gap: 30px; flex-wrap: wrap;}

    .card{
        max-width: 100%; /* Garantir que a largura máxima seja 100% */
        width: 333px; /* Largura inicial do vídeo */
        height: 430px; /* Altura inicial do vídeo */
        border-radius: 25px;
        background: linear-gradient( to bottom, hsla(0, 0%, 100%, 0.1), #ffffff00);
        backdrop-filter: blur( 7px );
        -webkit-backdrop-filter: blur( 7px );
        font-size: 13px;
        border: 2px solid rgba(255, 255, 255, 0.062);
        position: relative;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .img{
        background: black;
        width: 100%;
        height: 202px;
        border-radius: 20px;
    }

    .img img{
        width: 100%;
        height: 202px;
        border-radius: 20px;
    }

    .info{display: flex; gap: 5px; flex-direction: column;}
    .info p{font: 12px; color: #919191; font-weight: 500;}

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

button{
    background: black;
    font-weight: 700;
    display: flex;
    justify-content: center;
    margin-top: 20px;

}
button:hover, a:hover{
    background: rgb(255, 255, 255);
    color: black;
    font-weight: 700;
}

.tag{
    
    width: 130px;
    color:#69FB45 ;
    background: rgba(0, 255, 102, 0.13);
    border-radius: 6px;
    padding: 5px 10px;
    font-size: 10px;
    letter-spacing: 1px ;
    font-weight: 700;
}

a{
    width: 100%;
    height: 100%;
    color: white;
    font-weight: 700;
    padding: 5px 10px;
    


}

a:hover{
    color: black;
    font-weight: 700;
}
</style>