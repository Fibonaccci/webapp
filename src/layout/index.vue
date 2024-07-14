<template>
  <div>
    layout index
    <br>
    <ul>
      <li><RouterLink to="./console">console</RouterLink></li>
      <li><RouterLink to="./monitor">monitor</RouterLink></li>
      <li><RouterLink to="./workplace">workplace</RouterLink></li>
    </ul>
    <MainView />
  </div>
</template>

<script lang="ts" setup>
    import { MainView } from './components/Main/';
</script>