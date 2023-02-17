<template>
  <div id="app">
    <Topbar 
      :currentPage="navigationData.currentPage"
    />
    <main>
      <Navigation 
        :currentPage="navigationData.currentPage"
        :pages="navigationData.pages"
        @switchPage="switchCurrentPageData($event)"
      />
      <div class="content">
          <Home 
            v-if="navigationData.currentPage == 'Home'" 
          />
          <Calendar 
            v-if="navigationData.currentPage == 'Calendar'"
          />
          <Account 
            v-if="navigationData.currentPage == 'Account'"
          />
      </div>
    </main>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar.vue'
import Navigation from '@/components/Navigation.vue'

import Home from '@/layouts/Home.vue'
import Account from '@/layouts/Account.vue'
import Calendar from '@/layouts/Calendar.vue'

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
            name: "Calendar",
            icon: "fa-regular fa-calendar"
          },
          2: {
            name: "Account",
            icon: "fa-solid fa-user"
          },
          3: {
            name: "Questions",
            icon: "fa-solid fa-question"
          }
        }
      }
    }
  },
  components: {
    Navigation, Topbar, Home, Account, Calendar
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
  width: calc(100vw - 84px);
  height: 100vh;
}
</style>
