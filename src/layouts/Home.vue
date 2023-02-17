<template>
  <div id="home">
    <div class="header">
      <h1>Welcome to NIKE SWIFT 🚀</h1>
      <p>Need help? See <i class="fa-solid fa-question"></i> in the navigation.</p>
    </div>
    <div class="data">
      <div class="successful">
        <div class="successful-title">
          <div>
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
          <h2>
            Successful purchases
          </h2>
        </div>
        <div class="successful-list">
          <p class="successful-list-notfound">No purchases found</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "HomeLayout"
}
</script>

<style lang="scss" scoped>
  #home {
    padding: 20px;
    .header {
      -webkit-user-select: none;
      user-select: none;
      background-color: #29292F;
      width: 48%;
      padding: 20px;
      border-radius: 12px;
      color: #fff;
      h1 {
        font-weight: 400;
      }
      p {
        font-weight: 300;
        color: #ababab;
        i {
          color: #fff;
        }
      }
    }
    .data {
      .successful {
        background-color: #29292F;
        width: 30%;
        height: 160px;
        padding: 20px;
        border-radius: 12px;
        margin: 20px 0px;
        .successful-title {
          text-align: center;
          color: #fff;
          h2 {
            margin: 6px 0px;
            font-size: 16px;
            font-weight: 500;
            text-transform: uppercase;
          }
        }
        .successful-list {
          margin: 10px 0px;
          .successful-list-notfound {
            font-size: 14px;
            color: #ababab;
            text-align: center;
          }
        }
      }
    }
  }
</style>