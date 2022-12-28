<template>
  <div>
    <span class="collapse-icon" @click="toggleSidebar" :class="{'rotate-180': collapsed}">
     <i class="fas fa-angle-double-left"/>
    </span>
    <div class="sidebar" :style="{width: sidebarWidth}">
     <div class="p-4">
        <div class="d-flex flex-column gap-4 text-s">
          <div>
            <a href="#" class="d-flex justify-content-center">
              <img class="logo" src="../../assets/images/logo.png" alt="logo" />
            </a>
          </div>
          <div class="text-light nav-text" v-if="!collapsed">Навигация</div>
        </div>
        <div class="d-flex gap-4 flex-column py-4">
          <LeftSideMenuItems />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LeftSideMenuItems from './LeftSideMenuItems.vue';
  import {collapsed, toggleSidebar, sidebarWidth} from '../../store/store';
  export default {
    name: "LeftSideMenu",
    components: {
      LeftSideMenuItems,
    },
    setup(){
      return{
        collapsed,
        toggleSidebar,
        sidebarWidth,
      }
    }
  }

</script>

<style scoped>
  .logo{
    height: 64px;
  }
  .nav-text{
    font-size: 14px;
  }
  .sidebar{
    background: linear-gradient(90deg, rgba(3, 110, 195, 0.85) 0, #ffffff 109%);
    float: left;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1;

    transition: 0.3s ease;
    display: flex;
    flex-direction: column;
  }
 
  .collapse-icon{
    position: fixed;
    bottom: 0;
    padding: 0.75em;

    color: rgba(255, 255, 255, 0.7);

    transition: 0.2s linear;
    z-index: 100;
}
.rotate-180{
  transform: rotate(180deg);
  transition: 0.2s linear;
}
@media screen and (max-width: 768px){

}
</style>