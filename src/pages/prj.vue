<template>
    <div class="wj_main">
        <div class="cta">
            <router-link to="/work">
                < back to home
            </router-link>
        </div>

        <div class="content">
            <div class="proces">
                <process class="fix"/>
            </div>
            <div class="main_content">
                <div class="prj_name">
                    <h1 style="font-size: 60px;">Hello Prj Name</h1>
                </div>

                <div class="contentFul">
                    <div class="preview">
                        <img src="../assets/prj/prj01.png" alt="">
                    </div>

                    <div class="p1" v-for="i in 10" :key="i">
                        <div class="head">
                            <div class="cap">
                                <img src="../assets/exepIcons/section.svg" alt="">
                                <h3>Process name</h3>
                            </div>
                            <h1>Resume Title</h1>
                        </div>
                        <div class="description">
                            <div class="pr1">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptates corporis dolorem velit obcaecati cupiditate distinctio error harum laudantium, nisi ab doloremque quis, temporibus ipsum aspernatur laborum alias sed libero.</p>
                            </div>
                            <div class="pr1">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptates corporis dolorem velit obcaecati cupiditate distinctio error harum laudantium, nisi ab doloremque quis, temporibus ipsum aspernatur laborum alias sed libero.</p>
                            </div>
                        </div>
                        <div class="preview">
                        <img src="../assets/prj/prj02.png" alt="">
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import process from '../components/head/process.vue';
</script>


<style scoped>
  .wj_main{
        max-width: 100%;
        width: 100%;
        padding: 00px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .content{
        max-width: 100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .cta{
        padding: 43px 58px;
        width: 100%;
        text-align: center;
    }

    .proces{
        position: relative;
    }
    /* .fix {
        position: sticky;
        top: 0; 
    } */

    .main_content{max-width: 100%; width: 100%; display: flex; flex-direction: column; gap: 40px;}
    .prj_name{width: 100%; text-align: center;}
    .contentFul{max-width: 100%; width: 100%;}

    .preview{width: 100%;}
    .preview img{width: 100%;}

    .p1{max-width: 100%; width: 100%; display: flex; flex-direction: column; gap: 30px;}
    .description{width: 100%; display: flex; font-size: 14px; color: #A8A8A8; gap: 20px;}
    .cap{display: flex; align-items: center; font-size: 15px; font-weight: 500;}

    h1{
         font-weight:900; filter: drop-shadow(0px 0px 30px #ffffff63);  background: -webkit-linear-gradient(#ffffff, #BCBCBC);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
    }

    .head h1{font-size: 40px;}

    a{
    
    width: 130px;
    color:#69FB45 ;
    background: rgba(0, 255, 102, 0.13);
    border-radius: 6px;
    padding: 10px 10px;
    font-size: 10px;
    letter-spacing: 1px ;
    font-weight: 700;
}
   
</style>