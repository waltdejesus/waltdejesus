<template>
    <div class="wj_foo">
        <div class="yt_el">
            <div class="avatar">
                <img :src="image" alt="">
            </div>
            <div class="live_sub">
                <h2>3,489 Subscribers</h2>
            </div>
            <div class="cta">
                <button>Subscribe in my YouTube</button>
            </div>
        </div>
        <div class="cc">
            <span>© 2024 Walt De Jesus. All Rights Reserved.</span>
        </div>
        <hr>

    </div>
</template>

<script setup>
    import {ref} from 'vue'
    const image = ref('https://yt3.googleusercontent.com/DB7llA6vehNOE9C_Bpa0XimBoFy3kaKKL2-w-Q6gv_kXhSiQ1ZWor75nv-UvpsjSQTTgIHH2=s176-c-k-c0x00ffffff-no-rj')
</script>

<style scoped>


    .wj_foo{
        max-width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 60px 0;
        gap: 30px;
        position: relative;
    }
    hr{
    width: 100%;
    position: absolute;
    top: 130px;
    background: #1B1D22;
    color: #1B1D22;
    border: 1px solid #1B1D22;
}

    .yt_el{
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 5px;
        z-index: 344;
        
    }
    button{
        background: rgb(255, 28, 28);
    }


    .yt_el .avatar{
        width: 151px;
        height: 151px;
        background: black;
        border-radius: 50%;
    }
    .yt_el .avatar img{
        width: 151px;
        height: 151px;
        border-radius: 50%;
    }
</style>