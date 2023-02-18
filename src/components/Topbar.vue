<template>
  <div class="topbar">
    <div class="current-page">
        {{currentPage}}
    </div>
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
    props: {
        currentPage: String
    },
    methods: {
        getCurrentTime: function () {
            const date = new Date();
            const timeFormats = {
                hours: `${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}`,
                minutes: `${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`,
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
        color: #fff;
        font-size: 12px;
        padding: 8px;
        .current-page {
            float: left;
            margin-left: 84px;
            text-transform: uppercase;
            font-weight: 700;
        }
        .time {
            float: right;
            padding: 0px 10px;
        }
    }
    .topbar::after {
        clear: both;
        content: "";
        display: table;
    }
</style>