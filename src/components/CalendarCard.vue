<template>
  <div class="card">
    <div class="card-image">
        <img class="card-image-main" :src="content.image" alt="">
    </div>
    <div class="card-content">
        <div class="card-title">
            <h2>
                {{content.title}}
            </h2>
        </div>
        <div class="card-data">
            <div class="card-data-price">
                {{content.price}}
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "CalendarCardComponent",
    data() {
        return {
            content: {
                image: this.cardData.models[0].imageURL,
                title: `${this.cardData.title} ${this.cardData.models[0].modelName}`,
                price: `${this.cardData.models[0].currency} ${this.cardData.models[0].price}`
            }
        }
    },
    props: {
        cardData: JSON
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
    .card {
        width: 120px;
        .card-image {
            img.card-image-main {
                width: 100%;
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
            }
        }
        .card-content {
            background-color: #29292f;
            transition: 0.5s;
            color: #fff;
            padding: 10px;
            padding-top: 2px;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            height: 100px;
            -webkit-user-select: none;
            user-select: none;
            .card-title {
                h2 {
                    font-weight: 400;
                    font-size: 12px;
                }
            }
            .card-data {
                margin: 4px 0px;
                .card-data-price {
                    font-size: 12px;
                    font-weight: 700;
                }
            }
        }
    }
    .card:hover {
        cursor: pointer;
        .card-content {
            background-color: #333;
        }
    }
</style>