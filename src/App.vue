<script setup lang="ts">
  import { zhCN, dateZhCN, darkTheme } from 'naive-ui';


</script>

<template>
  <NConfigProvider :locale="zhCN"
                   :theme="darkTheme"
                   :date-locale="dateZhCN"> 
    <RouterView>

    </RouterView>
  </NConfigProvider>
</template>

<style scoped>

</style>
