(function() {
    // ====== 6 PRODUCTS ======
    const products = [{
        id: 1,
        name: 'Dubai Pistachio Kunafa Bar',
        price: 320,
        desc: 'This premium treat combines an ultra-crispy, golden Middle Eastern kunafa pastry with a rich, velvety pistachio cream and a hint of authentic tahini',
        image: 'https://bulkeatswarehouse.com.au/cdn/shop/files/PistachioKunafaChocolateBlockImage3_7df688e4-b00f-4524-8f79-4e5bd6838c64.jpg?v=1768878633&width=480'
    }, {
        id: 2,
        name: 'Dubai Chewy Cookie 10 Pcs',
        price: 500,
        desc: 'It takes the viral flavors of the original Dubai Pistachio Kunafa Chocolate bar and transforms them into a soft, pillowy, mochi-like chocolate treat.',
        image: 'https://rricoid-assets.obs.ap-southeast-4.myhuaweicloud.com/berita/Batam/o/1770541964063-b2592304d2fdeaf9fc58d682438c29fb/kcos64m5jc2hqzn.jpeg'
    }, {
        id: 3,
        name: 'Pistachio Crunch Cake',
        price: 850,
        desc: 'This masterpiece features layers of ultra-moist chocolate sponge, decadent chocolate mousse, and a velvety pistachio cream.',
        image: 'https://www.contis.ph/cdn/shop/files/ContisVday0970final2.jpg?v=1739192149'
    }, {
        id: 4,
        name: 'Pistachio Jam',
        price: 290,
        desc: 'A unique, ultra-premium sweet spread that represents the gourmet pinnacle of the global pistachio trend.',
        image: 'https://ohcrema.com/cdn/shop/articles/4_65a7bcce-81c2-4675-a84f-cc3c1687cd98.webp?v=1754616200'
    }, {
        id: 5,
        name: 'Pistachio Cream Cookies 20 Pcs',
        price: 400,
        desc: 'Unlike a basic chocolate chip cookie, this creation focuses entirely on highlighting the rich, nutty, and vibrant green flavors of premium pistachios.',
        image: 'https://teakandthyme.com/wp-content/uploads/2024/12/pistachio-cream-cookies-DSC_3367-1x1-1200.jpg'
    }, {
        id: 6,
        name: 'Pistachio Butter',
        price: 420,
        desc: 'It is widely considered the luxury equivalent of peanut butter or almond butter due to its rich, complex flavor and higher price point.',
        image: 'https://www.epicuricloud.com/wp-content/uploads/2025/07/Pistachio-Butter-1-scaled.jpg'
    }];

    // ====== RENDER PRODUCTS ======
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';

    products.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';

        card.innerHTML = `
            <div class="product-img">${imgHtml}</div>
            <div class="product-name">${p.name}</div>
            <div class="product-desc">${p.desc}</div>
            <div class="product-price">₱${p.price}</div>
        `;
        grid.appendChild(card);
    });
})();
