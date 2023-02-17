<template>
  <div id="app">
    <Topbar />
    <main>
      <Navigation 
        :currentPage="navigationData.currentPage"
        :pages="navigationData.pages"
        @switchPage="switchCurrentPageData($event)"
      />
      <div class="content">
        
      </div>
    </main>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'App',
  data() {
    return {
      navigationData: {
        currentPage: "Home",
        pages: {
          0: {
            name: "Home",
            icon: "fa-solid fa-house",
          },
          1: {
            name: "Account",
            icon: "fa-solid fa-user"
          }
        }
      }
    }
  },
  components: {
    Navigation, Topbar
  },
  methods: {
    switchCurrentPageData: function (page) {
      this.navigationData.currentPage = page;
    }
  }
}
</script>

<style>
.content {
  background-color: #222;
  width: 960px;
  height: 100vh;
}
</style>
