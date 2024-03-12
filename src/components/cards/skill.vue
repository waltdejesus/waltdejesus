<template>
    <div class="wj_main">
        <div class="skill_card" v-for="c in 8" :key="c">
            <div class="icon">
                <img src="../../assets/social/lk.svg" alt="">
            </div>

            <div class="title">
                <h2>Your Tutle Skiil Here</h2>
            </div>
            <p>First Connect your Metamask or TrustWallet to the "Connect Wallet" on the Homepage.</p>
        </div>
    </div>
</template>

<style scoped>
    .wj_main{
        max-width: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 100px;
        margin-top: -60px;
        margin-bottom: 200px;
        flex-wrap: wrap;
        gap: 20px;
    }

    .skill_card{
        max-width: 220px;
        width: 100%;
        /* background: #1B1D22; */
        /* padding: 20px; */
        border-radius: 20px;
    }

    .skill_card img{
        width: 20px;
    }

    p{font-size: 10px;}
    h2{font-size: 13px;}


    
    @media (max-width: 102px) {
        
    }

</style>