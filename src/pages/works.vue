<template>
    <headVue/>
    <div class="wj_mains">
        <div class="title">
            <h1 class="l">1 of several things</h1>
            <h1 class="w">to share with you</h1>
        </div>

        <div class="cards">
            <project/>
        </div>

    </div>
</template>

<script setup>
    import project from '../components/cards/project.vue';
    import headVue from '../components/head/head.vue';


</script>

<style scoped>
    .wj_mains{
        max-width: 100%;
        width: 100%;
        padding: 0px 58px;
        display: flex;
        gap: 58px;
        flex-direction: column;
    }

    .title{display: flex; gap: 10px; max-width: 100%; justify-content: center;}
    h1{font-size: 58px;}
    .w{
        filter: drop-shadow(0px 0px 30px #ffffff63);  background: -webkit-linear-gradient(#E3E4E6, #E3E4E6);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
        font-weight: 800;
    }
     .l{
        filter: drop-shadow(0px 0px 30px #ffffff63);  background: -webkit-linear-gradient(#838487, #838487);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
        font-weight: 800;
    }
</style>