<template>
  <div class="topbar">
    <div class="time">{{currentTime}}</div>
  </div>
</template>

<script>
export default {
    name: "TopbarComponent",
    data() {
        return {
            currentTime: ''
        }
    },
    methods: {
        getCurrentTime: function () {
            const date = new Date();
            const timeFormats = {
                hours: `${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}`,
                minutes: `${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getHours()}`,
                seconds: `${date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()}`,
            }
            const timeFormat = `${timeFormats.hours}:${timeFormats.minutes}:${timeFormats.seconds}`;
            this.currentTime = timeFormat;
        },
    },
    mounted() {
        this.getCurrentTime();
        window.setInterval(() => {
            this.getCurrentTime();
        }, 1000);
    }
}
</script>

<style lang="scss" scoped> 
    .topbar {
        background-color: #1e1e1e;
        -webkit-app-region: drag;
        -webkit-user-select: none;
        user-select: none;
        text-align: right;
        color: #fff;
        font-size: 12px;
        padding: 8px;
        .time {
            padding: 0px 10px;
        }
    }
</style>