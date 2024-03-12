<template>
    <div class="wj_main">
        <div class="service_card">
            <div class="title">
                <h2>Freelancer/Consultant</h2>
                <p>First Connect your Metamask or TrustWallet to the "Connect Wallet" on the Homepage.</p>

            </div>

            <button>Hire this service</button>
        </div>

        <div class="service_card">
            <div class="title">
                <h2>Effective Employee</h2>
                <p>First Connect your Metamask or TrustWallet to the "Connect Wallet" on the Homepage.</p>

            </div>

            <button>Hire this service</button>
        </div>

        <div class="service_card">
            <div class="title">
                <h2>With the teacher</h2>
                <p>First Connect your Metamask or TrustWallet to the "Connect Wallet" on the Homepage.</p>

            </div>

            <button>Hire this service</button>
        </div>

   
    </div>
</template>

<style scoped>
    .wj_main{
        max-width: 100%;
        display: flex;
        flex-direction: row;
        gap: 10px;
        justify-content: center;
    }

    .service_card{
        max-width: 335px;
        width: 100%; /* Inicialmente, ocupa toda a largura disponível */
        background: #1B1D22;
        padding: 20px;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    button{background: white; color: #1B1D22; font-weight: 700;}

    p{font-size: 12px;}
    h2{font-size: 20px;}


    
    @media (max-width: 102px) {
        
    }

</style>