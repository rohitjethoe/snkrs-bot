<template>
  <div id="calendar">
    <div class="header">
      <h1>Upcoming items for NL</h1>
      <p>{{Object.keys(data).length}} items found</p>
    </div>
    <div class="cards" v-if="Object.keys(data).length > 0">
      <CalendarCard 
        @click="changeStockData(0)"
        :cardData="data[0]"
      />
      <CalendarCard 
        @click="changeStockData(1)"
        :cardData="data[1]"
      />
      <CalendarCard 
        @click="changeStockData(2)"
        :cardData="data[2]"
      />
      <CalendarCard 
        @click="changeStockData(3)"
        :cardData="data[3]"
      />
      <CalendarCard 
        @click="changeStockData(4)"
        :cardData="data[4]"
      />
      <CalendarCard 
        @click="changeStockData(5)"
        :cardData="data[5]"
      />
    </div>
<!-- Coming Soon...    
    <div class="stock">
        {{data[stockModel].models[0]}}
    </div> -->
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
    }
  }
</style>