<template>
    <div class="wj">
        <div class="tape_main">
            <h1 v-for="i in 10" :key="i">tape</h1>
        </div>
    </div>
</template>

<style scoped>

    .wj{max-width: 100%; width: 100%;}
    .tape_main{
        width: 10000px;
        display: flex;
        background: white;
        color: black;
        padding: 20px;
        overflow: hidden;
    }

</style>