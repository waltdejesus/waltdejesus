<template>
    <div class="wj_main">
        <div class="center_content">
            <div class="head">
                <div class="ligth">
                    <img src="../../assets/exepIcons/job.svg" alt="">
                    <span>My Lead</span>
                </div>
                <h1>Sr Experience Designer</h1>
                <div class="details">
                    <img src="../../assets/exepIcons/local.svg" alt="">
                    <span>Full-time - Remoto - California, United States - Nov  2023 - dez 2024</span>
                </div>
            </div>
            <hr>

            <div class="experience">
               
                <div class="content">
                    <div class="title">
                    <img src="../../assets/exepIcons/briefcase.svg" alt="">
                    <h2>Job Description and Responsibilities</h2>
                </div>
                    <span>
                        • Aplicação e acompanhamento das pesquisas, traduzindo os insights em sugestões de melhorias para oproduto;  <br>
• Execução do layout completo das telas do sistema; <br>
• Participação em reuniões de discussão sobre novas funcionalidades com o cliente. <br>
• Participação em agendas estratégicas da definição e implementação do Roadmap do produto; <br> • Condução das etapas de Discovery para a implementação de novas funcionalidades no sistema e fornecer
uma experiência melhor aos usuários. <br>• Prototipação de soluções, e validações técnicas e estratégicas com os Stakeholders e Clientes. <br>• Acompanhamento e validação da execução de projetos e funcionalidades junto com as equipes de
desenvolvimento; <br> • Garantir a consistência da interface/experiência em todos os pontos de contato <br>• Executação de Testes de Usuabi
lidades e Entrevistas com os usuários.
                    </span>
                </div>

                <div class="high">
                    <div class="icon">
                        <img src="../../assets/exepIcons/flash.svg" alt="">
                        <h2>Values</h2>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste earum nihil inventore consectetur explicabo quis quos nesciunt saepe vitae dignissimos quas at, dolorum tempore omnis nam soluta in aperiam necessitatibus!</p>

                </div>
                
            </div>

            <div class="services_container">
                <div class="title">
                    <h1 class="l">Let´s </h1>
                    <h1 class="w">Work Together</h1>
                </div>

                <services/>
            </div>

        </div>

        <div class="rigth_content">
            <div class="top_info">
                <h2>Sobre a empresa</h2>
                <img src="../../assets/companys/Microsoft Logo.svg" alt="">
            </div>

            <div class="resume">
                <span>
                    UX/UI e Product Designer experiente, com mais de 4 anos de atuação no setor. Sou apaixonado por criarexperiências excepcionais que impulsionam resultados de negócios.

                    Especializado em liderar equipes dinâmicas de design, colaboro estreitamente com equipes multidisciplinares epartes interessadas para potencializar as experiências dos usuários.

                    Meu foco vai desde a estratégia e pesquisa até o design de interação e prototipagem, sempre com o objetivo deagregar valor mensurável aos projetos.

                    Ao longo da minha carreira, tive o privilégio de trabalhar com empresas nacionais e internacionais, entregandoresultados tangíveis em projetos tanto remotos quanto presenciais.
                </span>
                <a href="">www.linkdaempresa.co.ao</a>
            </div>
            <i></i>
        </div>

    </div>
</template>

<script setup>
import services from "../cards/service.vue";

</script>

<style scoped>

.wj_main{
    max-width: 100%;
    display: flex;
    gap: 58px;
}

    .center_content{
        max-width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    hr{
        border: 1px solid #1B1D22;
    }

    .title{display: flex; align-items: center;}
    .title h2{font-size: 20px; font-weight: 800;   filter: drop-shadow(0px 0px 30px #ffffff63);  background: -webkit-linear-gradient(#E3E4E6, #a0a0a0);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
        font-weight: 800;}
    .head .ligth{
       display: flex;
       align-items: center;

    }

    .head{display: flex; flex-direction: column; gap: 10px;}
    .head h1{font-size: 35px; font-weight: 800;   filter: drop-shadow(0px 0px 30px #ffffff63);  background: -webkit-linear-gradient(#E3E4E6, #747474);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
        font-weight: 800;}

    .head .details{
        display: flex;
        align-items: center;
        font-size: 13px;
        gap: 10px;
        color: #ADADAF;
        font-weight: 600;
    }


.content{
    font-size: 13px;
    color: #A99D9D;
}

.high{
    background: #070707;
    padding: 30px;
    border-radius: 20px;
}

.high p{font-size: 13px; color: #A99D9D;}
.high h2{font-size: 20px; font-weight: 800;   filter: drop-shadow(0px 0px 30px #ffffff63);  background: -webkit-linear-gradient(#E3E4E6, #a0a0a0);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
        font-weight: 800;}
.icon{display: flex; align-items: center;}

.experience{
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.rigth_content{
    max-width: 349px;
        width: 100%; /* Inicialmente, ocupa toda a largura disponível */
        height: 420px;
        display: flex; 
        gap: 10px;
        flex-wrap: wrap; /* Permitir que os elementos quebrem para a próxima linha em telas menores */
        justify-content: space-between;
        padding: 20px;
        align-items: center;
        border-radius: 30px;
        word-break: break-all;
        background: linear-gradient( to bottom, hsla(0, 0%, 100%, 0.1), #ffffff00);
        backdrop-filter: blur( 7px );
        -webkit-backdrop-filter: blur( 10px );
        font-size: 13px;
        border: 2px solid rgba(255, 255, 255, 0.1);
        
        position: relative; /* Adicionamos position: relative para que o elemento pseudo tenha como referência */

}

.top_info{display: flex; flex-direction: column; gap: 10px;}

.top_info img{width: 100px;}

.resume{display: flex; flex-direction: column; gap: 10px; font-size: 13px; color: #A8A8A8;}
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

.services_container .w{
        filter: drop-shadow(0px 0px 30px #ffffff63);  background: -webkit-linear-gradient(#E3E4E6, #E3E4E6);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
        font-weight: 800;
    }
    .services_container .l{
        filter: drop-shadow(0px 0px 30px #ffffff63);  background: -webkit-linear-gradient(#838487, #838487);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
        font-weight: 800;
    }

    .services_container {
        max-width: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        margin-top: 150px;
    }
    .services_container .title{display: flex; gap: 20px;}

</style>