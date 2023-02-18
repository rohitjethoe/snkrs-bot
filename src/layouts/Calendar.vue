<template>
  <div id="calendar">
    <div class="header">
      <h1>Upcoming calendar loaded for NL</h1>
      <p>{{Object.keys(data).length}} products loaded</p>
    </div>
    <div class="cards" v-if="Object.keys(data).length > 0">
      <CalendarCard 
        v-for="item in data"
        v-bind:key="item"
        :cardData="item"
      />
    </div>
  </div>
</template>

<script>
import CalendarCard from '@/components/CalendarCard.vue'

export default {
    name: "CalendarLayout",
    data() {
      return {
        stockModel: 0
      }
    },
    props: {
      data: JSON
    },
    components: {
      CalendarCard
    },
    methods: {
      changeStockData: function(model) {
        this.stockModel = model;
      }
    }
}
</script>

<style lang="scss" scoped>
  #calendar {
    padding: 20px;
    .header {
      margin-bottom: 20px;
      h1 {
        color: #fff;
        text-transform: uppercase;
        font-weight: 400;
        font-size: 16px;
      }
      p {
        color: #ababab;
        text-transform: uppercase;
        font-size: 12px;
        margin: 5px 0px;
      }
    }
    .cards {
      display: flex;
      gap: 16px;
      overflow-x: scroll;
    }
  }
</style>