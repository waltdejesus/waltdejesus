<template>
    <div class="wj_main">
        <div class="logo_container">
            <img src="../../assets/logo .svg" width="200" alt="">
        </div>
        <ul>
            <li>
                <router-link to="/">Apresentation</router-link>
            </li>
            <li>
                <router-link to="/cv">CV & Experiência</router-link>
            </li>
            <li>
                <router-link to="/work">Portifólio</router-link>
            </li>
        </ul>

        <div class="social_links">
            <span>Follow Too:</span>
            <div class="links">
                <img src="../../assets/social/yt.svg" title="Siga-me no YouTube" alt="youtube_icon">
                <img src="../../assets/social/ig.svg" title="Siga-me no Instagram" alt="instagram_icon">
                <img src="../../assets/social/lk.svg" title="Siga-me no Linkedin" alt="linkedin_icon">
            </div>
        </div>
    </div>
</template>


<style scoped>

    .wj_main{
        max-width: 100%;
        padding: 43px 58px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        z-index: 12;
    }

    ul{
        display: flex; gap: 20px;
        padding: 25px 40px;
        align-items: center;
        border-radius: 50px;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur( 7px );
        -webkit-backdrop-filter: blur( 7px );
        font-size: 13px;
    }


    .social_links{display: flex; gap: 10px; font-size: 13px; align-items: center;}
    .social_links .links{display: flex; gap: 10px;}
    .social_links .links img{width: 25px;}

    a{color: white;}



</style>