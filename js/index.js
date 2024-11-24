//回到頂部

// let test = document.querySelector('.toTop')
// test.addEventListener('click', function () {
//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: "smooth"
//     })
// })

$('.toTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
})
$(window).scroll(function () {
    //獲得一個可視窗口的高
    let height = $(this).height();
    // 如果垂直滾動超過高的一半，.toTop 就出現
    if ($(this).scrollTop() >= height / 2) {
        $('.toTop').show();
    } else {
        $('.toTop').hide();
    }
})

/* 登入&註冊 */

//登入&註冊的密碼查看
$('.password').on('click', 'span', function () {
    let password = $(this).parent();
    let eyeClose = password.find('.humbleicons--eye-close')
    let eyeOpen = password.find('.mage--eye');
    let input = password.find('input');
    if ($(this).hasClass('humbleicons--eye-close')) {
        eyeClose.toggleClass('show');
        eyeOpen.toggleClass('show');
        input.attr('type', 'text');
    } else if ($(this).hasClass('mage--eye')) {
        eyeClose.toggleClass('show');
        eyeOpen.toggleClass('show');
        input.attr('type', 'password');
    }
})

//登入&註冊時確認帳號密碼都有填寫，並且註冊時的密碼確認無誤，否則就跳出提醒
function checkLog(form) {
    form.submit(function (e) {
        e.preventDefault();
        let account = $(this).find('.phone-email input');
        let account_label = $(this).find('.phone-email label');
        let password = $(this).find('.becheck input');
        let password_label = $(this).find('.becheck label');
        let repassword = $(this).find('.recheck input');
        let repassword_label = $(this).find('.recheck label');
        let valid = true;
        if (!account.val()) {
            account_label.show();
            valid = false;
        }else{
            account_label.hide();
        }
        if (!password.val()) {
            password_label.show();
            valid = false;
        }else{
            password_label.hide();
        }
        // 檢查二次密碼是否填寫（註冊表單才檢查）
        if (repassword.length && !repassword.val()) {
            repassword_label.text('再次輸入密碼為 必填*').show();
            return
        } else {
            repassword_label.hide();
        }
        //判斷兩次密碼是否輸入一致
        if (repassword.length && repassword.val() !== password.val()) {
            repassword_label.text('兩次密碼輸入不一致').show();
            valid = false;
        }
        if(valid){
            this.submit();
        }
    })
}
checkLog($('#loginForm'));
checkLog($('#registerForm'));

//購物車數量加減&刪除
// $('.cart-content').on('click','span',function(e){
//     e.preventDefault();
//     let cart_num = $(this).siblings('.cart-number');
//     let num = $(this).siblings('.cart-number').text() - 0;
//     let cart_count = $(this).closest('.cart-content').find('.cart-count');
//     let one = $(this).closest('.cart-content').find('.cart-one').text();

//     let order_subtotal = $('.order-item span:last-child'); // 商品小計
//     let order_total = $('.order-total span:last-child'); // 訂單總計
//     let point_count = $('.point-count span:last-child'); // 會員點數


//     if($(this).hasClass('cart-reduce')){
//         num --;
//         if(num <= 1){
//             num = 1;
//         }
//         cart_num.text(num);
//         cart_count.text(`${one * num}`);

//     }else if($(this).hasClass('cart-plus')){
//         num ++;
//         cart_num.text(num);
//         cart_count.text(`${one * num}`);
//     }else if($(this).hasClass('cart-delete')){
//         $(this).closest('.cart-content').remove();
//     }

//     // 更新訂單明細
//     updateOrderDetails();
// })


// // 更新訂單明細
// function updateOrderDetails() {
//     let subtotal = 0;

//     // 計算所有商品的小計總和
//     $('.cart-content').each(function () {
//         let item_subtotal = parseInt($(this).find('.cart-count').text(), 10) || 0;
//         subtotal += item_subtotal;
//     });

//     // 更新訂單明細
//     $('.order-item span:last-child').text(`NT $ ${subtotal}`); // 商品小計
//     $('.order-total span:last-child').text(`NT $ ${subtotal}`); // 總計（假設運費和折扣為 0）
//     $('.point-count span:last-child').text(subtotal); // 點數總計（假設 1 元累積 1 點）
// }

// // 檢查取貨方式變更
// $('#getWay').on('change', function () {
//     let selectedOption = $(this).val(); // 獲取選中的值
//     let order_fare = $('.order-fare span:last-child'); // 運費節點

//     if (selectedOption === '自取') {
//         // 自取，運費設為 0
//         order_fare.text('NT $ 0');
//     } else {
//         // 非自取，運費設為 "未定"
//         order_fare.text('未定');
//     }
// });

// 購物車數量加減&刪除
$('.cart-content').on('click', 'span', function (e) {
    e.preventDefault();

    // 取得相關 DOM 節點
    let cart_num = $(this).siblings('.cart-number'); // 商品數量
    let cart_count = $(this).closest('.cart-content').find('.cart-count'); // 商品小計
    let one_price = parseInt($(this).closest('.cart-content').find('.cart-one').text(), 10); // 單價
    let num = parseInt(cart_num.text(), 10); // 數量

    if ($(this).hasClass('cart-reduce')) {
        // 減少數量
        num--;
        if (num <= 1) num = 1; // 確保數量不低於 1
    } else if ($(this).hasClass('cart-plus')) {
        // 增加數量
        num++;
    } else if ($(this).hasClass('cart-delete')) {
        // 刪除商品
        $(this).closest('.cart-content').remove();
    }

    // 更新數量和商品小計
    cart_num.text(num);
    cart_count.text(one_price * num);

    // 更新訂單明細
    updateOrderDetails();
});

// 更新訂單明細
function updateOrderDetails() {
    let subtotal = 0;

    // 計算所有已選取商品的小計總和
    $('.cart-content input[type="checkbox"]:checked').each(function () {
        let item_subtotal = parseInt($(this).closest('.cart-content').find('.cart-count').text(), 10) || 0;
        subtotal += item_subtotal;
    });

    // 更新訂單明細
    $('.order-item span:last-child').text(`NT $ ${subtotal}`); // 商品小計
    $('.order-total span:last-child').text(`NT $ ${subtotal}`); // 總計
    $('.point-count span:last-child').text(subtotal); // 點數總計
}

// 檢查取貨方式變更
$('#getWay').on('change', function () {
    let selectedOption = $(this).val(); // 獲取選中的值
    let order_fare = $('.order-fare span:last-child'); // 運費節點

    if (selectedOption === '自取') {
        // 自取，運費設為 0
        order_fare.text('NT $ 0');
    } else {
        // 非自取，運費設為 "未定"
        order_fare.text('未定');
    }
});

// Checkbox 全選/取消全選功能
$('.cart-title input[type="checkbox"]').on('change', function () {
    let isChecked = $(this).prop('checked');
    $('.cart-content input[type="checkbox"]').prop('checked', isChecked);
    updateOrderDetails();
});

// 單個商品 Checkbox 狀態變更
$('.cart-content input[type="checkbox"]').on('change', function () {
    // 如果有任意未選取，取消全選
    if ($('.cart-content input[type="checkbox"]:not(:checked)').length > 0) {
        $('.cart-title input[type="checkbox"]').prop('checked', false);
    } else {
        // 如果所有都選取，啟用全選
        $('.cart-title input[type="checkbox"]').prop('checked', true);
    }

    // 更新訂單明細
    updateOrderDetails();
});


//收件人資訊地址地區動態改變
const areas = {
    '基隆市': ['仁愛區', '信義區', '中正區', '中山區', '安樂區', '暖暖區', '七堵區'],
    '台北市': ['中正區', '大同區', '中山區', '松山區', '大安區', '萬華區', '信義區', '士林區', '北投區', '內湖區', '南港區', '文山區'],
    '新北市': ['萬里區', '金山區', '板橋區', '汐止區', '深坑區', '石碇區', '瑞芳區', '平溪區', '雙溪區', '貢寮區', '新店區', '坪林區', '烏來區', '永和區', '中和區', '土城區', '三峽區', '樹林區', '鶯歌區', '三重區', '新莊區', '泰山區', '林口區', '蘆洲區', '五股區', '八里區', '淡水區', '三芝區', '石門區'],
    '桃園市': ['中壢區', '平鎮區', '龍潭區', '楊梅區', '新屋區', '觀音區', '桃園區', '龜山區', '八德區', '大溪區', '復興區', '大園區', '蘆竹區'],
    '新竹縣': ['竹北市', '湖口鄉', '新豐鄉', '新埔鎮', '關西鎮', '芎林鄉', '寶山鄉', '竹東鎮', '五峰鄉', '橫山鄉', '尖石鄉', '北埔鄉', '峨眉鄉'],
    '新竹市': ['東區', '北區', '香山區'],
    '苗栗縣': ['竹南鎮', '頭份市', '三灣鄉', '南庄鄉', '獅潭鄉', '後龍鎮', '通霄鎮', '苑裡鎮', '苗栗市', '造橋鄉', '頭屋鄉', '公館鄉', '大湖鄉', '泰安鄉', '銅鑼鄉', '三義鄉', '西湖鄉', '卓蘭鎮'],
    '台中市': ['中區', '東區', '南區', '西區', '北區', '北屯區', '西屯區', '南屯區', '太平區', '大里區', '霧峰區', '烏日區', '豐原區', '后里區', '石岡區', '東勢區', '和平區', '新社區', '潭子區', '大雅區', '神岡區', '大肚區', '沙鹿區', '龍井區', '梧棲區', '清水區', '大甲區', '外埔區', '大安區'],
    '彰化縣': ['彰化市', '芬園鄉', '花壇鄉', '秀水鄉', '大村鄉', '福興鄉', '線西鄉', '和美鎮', '伸港鄉', '員林市', '社頭鄉', '永靖鄉', '埔心鄉', '溪湖鎮', '大村鄉']
}

$('#receiveAddress1').on('change', function() {
    const selectedCity = $(this).val();
    const cityAreas = areas[selectedCity] || [];

    // 清空區域選單
    $('#receiveAddress2').empty();
    $('#receiveAddress2').append('<option value="" disabled selected>區域</option>');

    // 動態添加區域選項
    $.each(cityAreas, function(index, area) {
        $('#receiveAddress2').append(`<option value="${area}">${area}</option>`);
    });
});