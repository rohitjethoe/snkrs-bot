<template>
  <header>
    <div class="sidebar">
      <div class="logo">
        <div>👋</div>
      </div>
      <div class="navigation">
        <ul>
          <li 
            v-for="item in pages"
            v-bind:key="item"
            :class="item.name == currentPage ? 'navigation-item-active' : ''"
          >
            <a 
              v-on:click="switchCurrentPage(item.name)"
            >
              <i :class="item.icon"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="version">
        <ul>
          <li>
            <i class="fa-solid fa-check"></i>
          </li>
          <li>
            <span>1.0.0</span>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
    name: "NavigationComponent",
    data() {
      return {
        time: ""
      }
    },
    props: {
      currentPage: String,
      pages: JSON
    },
    mounted() {

    },
    methods: {
      switchCurrentPage: function (pageTitle) {
        this.$emit("switchPage", pageTitle);
      }
    }
}
</script>

<style lang="scss" scoped>
.sidebar {
  background-color: #29292F;
  width: 84px;
  height: 100vh;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px 0px;
  // border-top-right-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .logo {
    div {
      background-color: #222;
      width: 48px;
      height: 48px;
      margin: 0 auto;
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      -webkit-user-select: none;
      user-select: none;
    }
  }
  .navigation {
    ul {
      display: flex;
      flex-direction: column;
      width: 48px;
      padding: 10px 0px;
      margin: 0px auto;
      border-radius: 12px;
      background-color: #222;
      gap: 10px;
      li {
        list-style-type: none;
        width: 32px;
        height: 32px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        a {
          i {
            color: #ababab;
            font-size: 12px;
            text-align: center;
            transition: 0.5s all;
          }
        }
        a:hover {
          cursor: pointer;
        }
      }
      .navigation-item-active {
        a {  
          i {
            color: #fff;
          }
        }
      }
    }
  }
  .version {
    ul {
      background-color: #222;
      border-radius: 12px;
      width: 48px;
      margin: 0px auto;
      padding: 10px 0px;
      li {
        -webkit-user-select: none;
        user-select: none;
        color: #fff;
        height: 24px;
        width: 48px;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          font-weight: 600;
        }
      }
    }
  }
}
</style>