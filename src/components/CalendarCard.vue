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
        <div class="card-sizes">
            <div 
                v-for="size in content.sizes"
                v-bind:key="size"
                class="size"
                :class="size.stock"
            >
                    {{ size.id }}
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
                price: `${this.cardData.models[0].currency} ${this.cardData.models[0].price}`,
                sizes: []
            }
        }
    },
    props: {
        cardData: JSON
    },
    methods: {
        getStockData: function () {
            for (const size of this.cardData.models[0].sizes) {
                const sizeTag = Object.keys(size)[0];
                const sizeKey = size[sizeTag];
                console.log(sizeKey);
                for (const stock of this.cardData.models[0].stock) {
                    if (Object.keys(stock)[0] == sizeKey) {
                        const size = {
                            id: sizeTag.replace("_", "."),
                            stock: stock[sizeKey]
                        }

                        this.content.sizes.push(size)
                    }
                }
            }
        }
    },
    mounted() {
        this.getStockData();
    }
}
</script>

<style lang="scss" scoped>
    .card {
        width: 120px;
        max-height: 400px;
        .card-image {
            img.card-image-main {
                width: 120px;
                height: 120px;
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
            }
        }
        .card-content {
            width: 100px;
            background-color: #29292F;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            color: #fff;
            padding: 8px 10px;
            .card-title {
                padding: 2px 0px;
                h2 {
                    font-size: 10px;
                    height: 50px;
                    font-weight: 400;
                }
                
            }
            .card-data {
                padding: 2px 0px;
                .card-data-price {
                    font-size: 10px;
                    font-weight: 600;
                }
            }
            .card-sizes {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                padding: 10px 0px;
                .size {
                    background-color: #222;
                    font-size: 10px;
                    width: 20px;
                    height: 20px;
                    padding: 2px;
                    font-weight: 600;
                    text-align: center;
                    border-radius: 4px;
                }
                .HIGH {
                    background-color: #2db66b;
                }
                .LOW {
                    background-color: #b62d2d
                }
                .MEDIUM {
                    background-color: #e1af19
                }
                .OOS {
                    display: none;
                }
            }
        }
    }
</style>