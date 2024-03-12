<template>
    <div class="wj_main">
        <div class="process">
            <div class="title">
                <img src="../../assets/exepIcons/flash.svg" alt="">
                <h2>Design Process</h2>
            </div>

            <div class="all_process">
                <span   @click="changeProcess('p1')">Process #1</span>
                <span   @click="changeProcess('p2')">Process #2</span>
                <span>Process #3</span>
                <span>Process #4</span>
            </div>
        </div>
    </div>
</template>


<script setup>
    import { ref } from "vue"

    const activeProcess = ref("p1")

    const changeProcess = (index) => {
     activeProcess.value = index
        console.log(`Clicou no ${index}`) 
}
</script>

<style scoped>

   /* .all_process span{color: rgb(102, 102, 102);} */

    .active{color: white;}
     .wj_main{
        max-width: 100%;
        display: flex;
        flex-direction: row;
        /* gap: 10px; */
        justify-content: center;
        position: relative;
    }

    .process{
        max-width: 100%; /* Garantir que a largura máxima seja 100% */
        width: 270px; /* Largura inicial do vídeo */
        height: 430px; /* Altura inicial do vídeo */
        border-radius: 25px;
        background: linear-gradient( to bottom, hsla(0, 0%, 100%, 0.1), #ffffff00);
        backdrop-filter: blur( 7px );
        -webkit-backdrop-filter: blur( 7px );
        font-size: 13px;
        position: relative;
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .title{display: flex; align-items: center;}
    .all_process{display: flex; flex-direction: column;gap: 20px;}
    .all_process span{color: rgb(102, 102, 102); cursor: pointer; font-size: 14px;}

    .active{color: white;}
    h2{
        filter: drop-shadow(0px 0px 30px #ffffffcc);  background: -webkit-linear-gradient(#ffffff, #ffffff);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
        font-weight: 800;
    }




</style>