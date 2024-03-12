<template>
    <div>
      <h1>Lista de Empresas</h1>
      <ul>
        <li v-for="empresa in empresas" :key="empresa.id" @click="exibirDetalhes(empresa)">
          {{ empresa.nome }} - {{ empresa.localizacao }}
        </li>
      </ul>
  
      <div v-if="empresaSelecionada">
        <h2>Detalhes da Empresa</h2>
        <p>Nome: {{ empresaSelecionada.nome }}</p>
        <p>Localização: {{ empresaSelecionada.localizacao }}</p>
        <!-- Adicione outras informações da empresa aqui -->
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const empresas = ref([
    { id: 1, nome: 'Empresa A', localizacao: 'Local A' },
    { id: 2, nome: 'Empresa B', localizacao: 'Local B' },
    { id: 3, nome: 'Empresa C', localizacao: 'Local C' }
  ]);
  
  const empresaSelecionada = ref(empresas.value[0]); // Definindo a primeira empresa como selecionada por padrão
  
  const exibirDetalhes = (empresa) => {
    empresaSelecionada.value = empresa;
  };
  </script>
  