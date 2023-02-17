const axios = require('axios');

const fetchNikeLaunchDates = {
    url: new URL('https://api.nike.com/product_feed/threads/v2/'),
    data: {},
    fetchData: async (marketplace, language) => {
        const url = fetchNikeLaunchDates.url;
        url.searchParams.append('filter', `marketplace(${marketplace})`);
        url.searchParams.append('filter', `language(${language})`);
        url.searchParams.append('filter', 'channelId(010794e5-35fe-4e32-aaff-cd2c74f89d61)');
        url.searchParams.append('filter', 'upcoming(true)');
        url.searchParams.append('filter', 'exclusiveAccess(true, false)');

        const data = await axios.get(url)
        .then((res) => {
            return (res.data.objects);
        });

        const products = {
            data: []
        };

        for (const release of data) {
            const slug = {
                slug: release.publishedContent.properties.seo.slug,
                title: release.publishedContent.properties.title,
                models: []
            }
            
            for (const product of release.productInfo) {
                const model = {
                    modelName: product.productContent.colorDescription,
                    id: product.merchProduct.id,
                    imageURL: product.imageUrls.productImageUrl,
                    price: product.merchPrice.fullPrice,
                    currency: product.merchPrice.currency,
                    sizes: [],
                    stock: []
                }

                for (const sizeId of product.skus) {
                    const size = {};
                    const validSizeFormat = sizeId.nikeSize.replace('.', '_');
                    size[validSizeFormat] = sizeId.id;
                    model.sizes.push(size);
                }

                for (const skuStock of product.availableSkus) {
                    const stock = {};
                    stock[skuStock.skuId] = skuStock.level;
                    model.stock.push(stock);
                }

                slug.models.push(model);
            }

            products.data.push(slug);
        }

        return(await products);
    }
}

module.exports = fetchNikeLaunchDates;