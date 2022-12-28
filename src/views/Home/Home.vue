<template>
  <div>
      <div>
        <LeftSideMenu />
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <VoiceModule />
      </div>
      <div>
        <PopupEdit  />
      </div>
    </div>
</template>

<script>
  import LeftSideMenu from '../../components/LeftSideMenu/LeftSideMenu.vue';
  import VoiceModule from '../../components/VoiceModule/VoiceModule.vue';
  import PopupEdit from '../../components/PopupEdit/PopupEdit.vue'
  export default {
    name: "Home",
    components: {
      LeftSideMenu,
      VoiceModule,
      PopupEdit,
    },
    setup(){
      return{
        PopupEdit,
      }
    }
  }
</script>

<style scoped>
 #navigation-icon{
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;
 }
 i{
  font-size: 2rem;
 }
</style>