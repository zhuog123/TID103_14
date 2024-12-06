let productInfo = [
    { id: 1, image: './img/p1.jpg', name: '焦糖蘋果布蕾', price: '120', category: '其他蛋糕點心類' },
    { id: 2, image: './img/p2.jpg', name: '翻轉蘋果蛋糕', price: '500', category: '其他蛋糕點心類' },
    { id: 3, image: './img/p3.jpg', name: '蘋果千層酥派', price: '500', category: '其他蛋糕點心類' },
    { id: 4, image: './img/p4.jpg', name: '蛋白霜檸檬塔', price: '495', category: '本月限定塔類甜點' },
    { id: 5, image: './img/p5.jpg', name: '柚香焙茶栗子塔', price: '495', category: '本月限定塔類甜點' },
    { id: 6, image: './img/p6.jpg', name: '焦糖核果蜂蜜乳酪塔', price: '535', category: '本月限定塔類甜點' },
    { id: 7, image: './img/p7.jpg', name: '蒙布朗栗子塔', price: '615', category: '本月限定塔類甜點' },
    { id: 8, image: './img/p8.jpg', name: '生巧克力塔', price: '370', category: '巧克力塔類甜點' },
    { id: 9, image: './img/p9.jpg', name: '萬丹紅豆抹茶塔', price: '495', category: '本月限定塔類甜點' },
    { id: 10, image: './img/p10.jpg', name: '提拉米蘇塔', price: '440', category: '本月限定塔類甜點' },
    { id: 11, image: './img/p11.jpg', name: '酒漬葡萄布丁塔', price: '495', category: '本月限定塔類甜點' },
    { id: 12, image: './img/p12.jpg', name: '酒漬葡萄超厚層布丁塔', price: '625', category: '本月限定塔類甜點' },
    { id: 13, image: './img/p13.jpg', name: '黑櫻桃巧克力布丁塔', price: '495', category: '巧克力塔類甜點' },
    { id: 14, image: './img/p14.jpg', name: '巧克力肉桂楓糖米布丁', price: '150', category: '其他蛋糕點心類' },
    { id: 15, image: './img/p15.jpg', name: '北海道芒果重乳酪蛋糕', price: '420', category: '北海道重乳酪蛋糕' },
    { id: 16, image: './img/p16.jpg', name: '綜合野莓塔', price: '380', category: '水果塔類甜點' },
    { id: 17, image: './img/p17.jpg', name: '抹茶重乳酪蛋糕', price: '480', category: '北海道重乳酪蛋糕' },
    { id: 18, image: './img/p18.jpg', name: '當季甜點雙拼（乳酪草莓塔＋提拉米蘇塔）', price: '680', category: '本月限定塔類甜點' },
    { id: 19, image: './img/p19.jpg', name: '大黃根塔', price: '390', category: '水果塔類甜點' },
    { id: 20, image: './img/p20.jpg', name: '紅酒洋梨塔', price: '690', category: '水果塔類甜點' },
    { id: 21, image: './img/p21.jpg', name: '當季甜點雙拼組合（蒙布朗栗子塔＋生巧克力塔）', price: '520', category: '本月限定塔類甜點' },
    { id: 22, image: './img/p22.jpg', name: '北海道草莓重乳酪蛋糕', price: '420', category: '北海道重乳酪蛋糕' },
    { id: 23, image: './img/p23.jpg', name: '北海道巧克力重乳酪蛋糕', price: '420', category: '北海道重乳酪蛋糕' },
    { id: 24, image: './img/p24.jpg', name: '黑櫻桃巧克力超厚層布丁塔', price: '625', category: '本月限定塔類甜點' },
    { id: 25, image: './img/p25.jpg', name: '歐洲小藍莓塔', price: '390', category: '水果塔類甜點' },
    { id: 26, image: './img/p26.jpg', name: '北海道重乳酪蛋糕', price: '380', category: '北海道重乳酪蛋糕' },
    { id: 27, image: './img/p27.jpg', name: '馬達加斯加香草重乳酪蛋糕', price: '420', category: '北海道重乳酪蛋糕' },
    { id: 28, image: './img/p28.jpg', name: '北海道重乳酪蛋糕佐藍莓醬', price: '440', category: '北海道重乳酪蛋糕' },
    { id: 29, image: './img/p29.jpg', name: '香橙橘瓣塔', price: '390', category: '水果塔類甜點' },
    { id: 30, image: './img/p30.jpg', name: '大黃根生巧克力塔', price: '495', category: '巧克力塔類甜點' },
    { id: 31, image: './img/p31.jpg', name: '榛果生巧克力塔', price: '495', category: '巧克力塔類甜點' },
    { id: 32, image: './img/p32.jpg', name: '法國栗子雙夾生巧黑加利塔', price: '615', category: '巧克力塔類甜點' },
    { id: 33, image: './img/p33.jpg', name: '艾許奶油蝴蝶酥', price: '220', category: '其他蛋糕點心類' },
    { id: 34, image: './img/p34.jpg', name: '伯爵紅茶瑪德蓮', price: '330', category: '其他蛋糕點心類' },
    { id: 35, image: './img/p35.jpg', name: '瑪德蓮佐生巧克力', price: '160', category: '其他蛋糕點心類' },
    { id: 36, image: './img/p36.jpg', name: '原味瑪德蓮', price: '330', category: '其他蛋糕點心類' },
    { id: 37, image: './img/p37.jpg', name: '莊園巧克力餅乾', price: '300', category: '其他蛋糕點心類' },
    { id: 38, image: './img/p38.jpg', name: '覆盆子生巧克力塔', price: '495', category: '巧克力塔類甜點' },
];


let product_container = $('.product-container'); //ul
let prevbtn = $('.pages-prev'); //上一頁
let nextbtn = $('.pages-next'); //下一頁
let pages = $('.pages ul'); //頁數盒子
let currentPage = 1; //當前頁面
let totalPage; //頁數總數量

//商品資訊頁面渲染
function bindProduct(infoArr = productInfo) {
    //頁面
    let temArr = [];
    temArr = infoArr.slice((currentPage - 1) * 12, currentPage * 12)

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
    totalPage = Math.ceil(infoArr.length / 12);
    let page = '';
    for (let i = 1; i <= totalPage; i++) {
        page += `
        <li data-page="${i}" class="${i === currentPage ? 'current' : ''}" style="${i === currentPage ? 'cursor: text;' : 'cursor: pointer;'}">
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
    $('html, body').animate({ scrollTop: 0 }, 800);
}
bindProduct();

//翻頁
$('.pages').on('click', 'li', function (e) {
    let cateVal = $('.category-selector').val();
    let priVal = $('.sorting-selector').val();
    if ($(this).hasClass('pages-prev')) {
        if (currentPage <= 1) return
        currentPage--;
        productSort(cateVal, priVal);
    }

    if ($(this).hasClass('pages-next')) {
        if (currentPage >= totalPage) return
        currentPage++;
        productSort(cateVal, priVal);
    }

    if ($(this).hasClass('current')) {
        return;
    }

    if ($(this).data('page')) {
        currentPage = $(this).data('page');
        productSort(cateVal, priVal);
    }
})

//選擇類別或排序
$('.selector').on('change', 'select', function () {
    currentPage = 1;
    let cateVal = $('.category-selector').val();
    let priVal = $('.sorting-selector').val();
    productSort(cateVal, priVal);
})

//確認選取的類別和排序
function productSort(cateVal, priVal) {
    let getArr = categorySort(cateVal); //取得該類別的陣列
    let temArr = [...getArr]; //有需要使用淺拷貝??
    if (priVal === '默認排序') {
        temArr.sort((a, b) => {
            return a.id - b.id;
        })
    } else if (priVal === '價格高到低') {
        temArr.sort((a, b) => {
            return b.price - a.price;
        })
    } else if (priVal === '價格低到高') {
        temArr.sort((a, b) => {
            return a.price - b.price;
        })
    }
    bindProduct(temArr);
}

//取得選取類別的值之後返回新的商品陣列
function categorySort(cateVal) {
    if (cateVal === '全部品項') {
        return productInfo;
    };
    let temArr = [];
    temArr = productInfo.filter((item) => {
        return item.category === cateVal;
    })
    return temArr;
}
