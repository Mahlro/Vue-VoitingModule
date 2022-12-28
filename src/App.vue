<script setup></script>

<template>
  <div class="bg">
      <RouterView />
  </div>
</template>

<style scoped>
.bg{
    background: url("./assets/images/bg.jpg") no-repeat center fixed;
    background-size: cover;
    min-height: 100vh;
  }
</style>

