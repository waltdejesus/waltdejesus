<template>
    <headVue/>
    <div class="wj_mains">
        <div class="work_xp">
            <div class="wEx">
                <h2>My Work Experience</h2>
                <div class="btns">
                    <img :class="{ active: activeTab === 'comp01' }" @click="changeTab('comp01')"  src="../assets/companys/Microsoft Logo.svg" alt="">
                    <img :class="{ active: activeTab === 'comp02' }" @click="changeTab('comp02')"  src="../assets/companys/Airbnb Logo.svg" alt="">
                    <img :class="{ active: activeTab === 'comp01' }" @click="changeTab('comp01')"  src="../assets/companys/FedEx Logo.svg" alt="">
                    <img :class="{ active: activeTab === 'comp01' }" @click="changeTab('comp01')"  src="../assets/companys/Frame 427319176.svg" alt="">
                    <img :class="{ active: activeTab === 'comp01' }" @click="changeTab('comp01')"  src="../assets/companys/Group 66.svg" alt="">

                </div>
            </div>
            
            <hr>
        </div>

        <div class="about">
            <div v-show="activeTab == 'comp01'">
                <comp01></comp01>
            </div>
            <div v-show="activeTab == 'comp02'">
                <comp02/>
            </div>
        </div>

    </div>

    <foo class="foo"/>
</template>

<script setup>
    import {ref} from 'vue' 
    import comp01 from '../components/companys/comp01.vue';
    import comp02 from '../components/companys/comp02.vue';
    import foo from '../components/bottom/footer.vue';
    import headVue from '../components/head/head.vue';

    const activeTab = ref("comp01")
    const changeTab = (index) =>{
        activeTab.value = index
    }

    
</script>


<style scoped>
    .wj_mains{
        max-width: 100%;
        width: 100%;
        padding: 0px 58px;
        display: flex;
        gap: 58px;
    }

    .work_xp{
        display: flex;
        gap: 58px;
    }
    .work_xp .btns{ width: 100%; display: flex; flex-direction: column; gap: 20px;}
    .btns img{cursor: pointer; width: 80px; }

    hr{height: 140vh; position: relative; z-index: 0;
    background: #1B1D22;
    border: 1px solid #1B1D22;
}
    
    .wEx{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .wEx h2{ width:120px; font-size: 15px ;}

    .foo{
        margin-top: -130px ;
    }
</style>