let productInfo = [
    { image: './img/p1.jpg', name: '焦糖蘋果布蕾', price: '120' },
    { image: './img/p2.jpg', name: '翻轉蘋果蛋糕', price: '500' },
    { image: './img/p3.jpg', name: '蘋果千層酥派', price: '500' },
    { image: './img/p4.jpg', name: '蛋白霜檸檬塔', price: '495' },
    { image: './img/p5.jpg', name: '柚香焙茶栗子塔', price: '495' },
    { image: './img/p6.jpg', name: '焦糖核果蜂蜜乳酪塔', price: '535' },
    { image: './img/p7.jpg', name: '蒙布朗栗子塔', price: '615' },
    { image: './img/p8.jpg', name: '生巧克力塔', price: '370', category: '巧克力塔類甜點' },
    { image: './img/p9.jpg', name: '萬丹紅豆抹茶塔', price: '495' },
    { image: './img/p10.jpg', name: '提拉米蘇塔', price: '440' },
    { image: './img/p11.jpg', name: '酒漬葡萄布丁塔', price: '495' },
    { image: './img/p12.jpg', name: '酒漬葡萄超厚層布丁塔', price: '625' },
    { image: './img/p13.jpg', name: '黑櫻桃巧克力布丁塔', price: '495', category: '巧克力塔類甜點'  },
    { image: './img/p14.jpg', name: '巧克力肉桂楓糖米布丁', price: '150' },
    { image: './img/p15.jpg', name: '北海道芒果重乳酪蛋糕', price: '420' },
    { image: './img/p16.jpg', name: '綜合野莓塔', price: '380' },
    { image: './img/p17.jpg', name: '深法抹茶重乳酪蛋糕', price: '480' },
    { image: './img/p18.jpg', name: '當季甜點雙拼（乳酪草莓塔＋提拉米蘇）', price: '680' },
    { image: './img/p19.jpg', name: '大黃根塔', price: '390' },
    { image: './img/p20.jpg', name: '紅酒洋梨塔', price: '690' },
    { image: './img/p21.jpg', name: '當季甜點雙拼組合（蒙布朗栗子塔＋生巧克力塔）', price: '520' },
    { image: './img/p22.jpg', name: '北海道草莓重乳酪蛋糕', price: '420' },
    { image: './img/p23.jpg', name: '北海道巧克力重乳酪蛋糕', price: '420' },
    { image: './img/p24.jpg', name: '黑櫻桃巧克力超厚層布丁塔', price: '625' },
    { image: './img/p25.jpg', name: '歐洲小藍莓塔', price: '390' },
    { image: './img/p26.jpg', name: '北海道重乳酪蛋糕', price: '380' },
    { image: './img/p27.jpg', name: '馬達加斯加香草重乳酪蛋糕', price: '420' },
    { image: './img/p28.jpg', name: '北海道重乳酪蛋糕佐藍莓醬', price: '440' },
    { image: './img/p29.jpg', name: '香橙橘瓣塔', price: '390' },
    { image: './img/p30.jpg', name: '大黃根生巧克力塔', price: '495', category: '巧克力塔類甜點'  },
    { image: './img/p31.jpg', name: '榛果生巧克力塔', price: '495', category: '巧克力塔類甜點'  },
    { image: './img/p32.jpg', name: '法國栗子雙夾生巧黑加利塔', price: '615' },

];


let product_container = $('.product-container'); //ul
let prevbtn = $('.pages-prev'); //上一頁
let nextbtn = $('.pages-next'); //下一頁
let pages = $('.pages ul'); //頁數盒子
let currentPage = 1; //當前頁面
let totalPage; //頁數總數量
//商品資訊頁面渲染
function bindProduct() {
    //頁面
    let temArr = [];
    temArr = productInfo.slice((currentPage - 1) * 12, currentPage * 12)

    let li = '';
    temArr.forEach((item) => {
        li += `
        <li>
            <div class="product-container-img">
                <img src="${item.image}" alt="${item.name}">
                <a href="./item.html"></a>
                <span>加入購物車</span>
            </div>
            <a href="./item.html">${item.name}</a>
            <p>NT $ <span>${item.price}</span></p>
        </li>
        `;
    })
    product_container.html(li);

    //頁數
    totalPage = Math.ceil(productInfo.length / 12);
    let page = '';
    for (let i = 1; i <= totalPage; i++) {
        page += `
        <li class="${i === currentPage ? 'current' : ''}">
            <span>${i}</span>
        </li>
        `;
    }

    if (currentPage > 1) {
        page = `
        <li class="pages-prev">
            <i class="fa-solid fa-chevron-left"></i>
        </li>
        ` + page;
    }

    if (currentPage < totalPage) {
        page += `
        <li class="pages-next">
            <i class="fa-solid fa-chevron-right"></i>
        </li>
        `;
    }
    pages.html(page);

    //渲染完畢回到頂部
    $('html, body').animate({ scrollTop: 0 }, 500);
}
bindProduct();

//翻頁
$('.pages').on('click', 'li', function (e) {
    // console.log(currentPage)
    if ($(this).hasClass('pages-prev')) {
        if (currentPage <= 1) return
        currentPage--;
        bindProduct();
    }

    if ($(this).hasClass('pages-next')) {
        if (currentPage >= totalPage) return
        currentPage++;
        bindProduct();
    }
})