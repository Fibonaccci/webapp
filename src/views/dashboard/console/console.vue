<template>
  <div class="console">
    console page
    <n-input v-model:value="msg" :style="{textColor:'000'}"/>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const msg = ref("");
</script>

<style lang="less" scoped></style>
