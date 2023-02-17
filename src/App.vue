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
            :data="calendarData.data"
            v-if="navigationData.currentPage == 'Calendar'"
          />
          <Account 
            v-if="navigationData.currentPage == 'Account'"
          />
          <Questions 
            v-if="navigationData.currentPage == 'Questions'"
          />
      </div>
    </main>
  </div>
</template>

<script>
import calendarModule from '@/modules/calendar/main';

import Topbar from '@/components/Topbar.vue'
import Navigation from '@/components/Navigation.vue'

import Home from '@/layouts/Home.vue'
import Account from '@/layouts/Account.vue'
import Calendar from '@/layouts/Calendar.vue'
import Questions from '@/layouts/Questions.vue'

export default {
  name: 'App',
  data() {
    return {
      calendarData: [],
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
    Navigation, Topbar, Home, Account, Calendar, Questions
  },
  methods: {
    switchCurrentPageData: function (page) {
      this.navigationData.currentPage = page;
    },

    fetchCalendarData: async function () {
        this.calendarData = await calendarModule.fetchData('NL', 'nl');
    }
  },
  created() {
    this.fetchCalendarData();
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
