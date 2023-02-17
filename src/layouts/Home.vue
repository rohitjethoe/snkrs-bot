<template>
  <div id="home">
    <div class="header">
      <h1>Welcome to NIKE SWIFT 🚀</h1>
      <p>Need help? See <i class="fa-solid fa-question"></i> in the navigation.</p>
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
      width: 50%;
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
  }
</style>