/* 通用 header + footer */

//漢堡選單點擊展開
$('.fa-bars').click(function () {
    $('.nav-list').fadeIn();
    $('.fa-xmark').css({
        transition: 'transform 1s ease',
        transform: 'rotate(180deg)'
    })
    $('.menu-wrapper').animate({
        left: 0,
    })

})
//點擊遮罩或叉叉收起清單
function closeList(item) {
    item.click(function () {
        $('.fa-xmark').css({
            transform: 'rotate(-180deg)'
        })
        $('.menu-wrapper').animate({
            left: '-80vw',
        }, function () {
            $('.nav-list').fadeOut()
        })
    })
}
closeList($('.fa-xmark'));
closeList($('.nav-cover'));


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

//copyright 跑馬燈
function Marquee() {
    let containerWidth = parseInt($('.copyright-text').width()) + 2; //+2防止網頁拉動的誤差值
    let containWidth = parseInt($('.copyright-text-left')[0].scrollWidth);
    let p = $('.copyright-text-left p')
    //當 containerWidth 的寬 小於 containWidth 的寬，的時候，才執行
    if (containerWidth - containWidth < 0) {
        // console.log('跑馬燈執行')
        //修改父元素樣式
        $('.copyright-text-left').css({
            height: '20px'
        })
        //修改自己的樣式
        p.css({
            position: 'absolute',
            top: '-22px',
            left: 0,
        })
        //每隔 10 秒輪到自己的時候加上 .active，除了自己以外都去掉 .active
        //有 .active 的 p 樣式發生改變
        let index = 0;
        function animateMarquee() {
            p.css({ top: '-22px', left: 0, }).removeClass('active');
            p.filter(`:eq(${index})`).addClass('active');
            $('.copyright-text-left p.active')
                .stop(true, true)
                .animate({
                    top: 0,
                }, 1000, function () {
                    $(this).animate({
                        left: -containWidth,
                    }, {
                        duration: 8000,
                        easing: 'linear'
                    })
                })
            index++;
            if (index > p.length - 1) {
                index = 0
            }
        }
        //一開網頁就先執行
        animateMarquee();
        //接著每隔 10 秒執行
        let timer = setInterval(function () {
            animateMarquee();
        }, 10000)
        // 保存定時器的引用，以便後續清除  
        $('.copyright-text-left').data('marqueeTimer', timer);


    } else {
        // 停止動畫並恢復樣式  
        let timer = $('.copyright-text-left').data('marqueeTimer');
        if (timer) {
            clearInterval(timer); // 清除定時器  
            $('.copyright-text-left').removeData('marqueeTimer'); // 移除定時器引用  
        }

        $('.copyright-text-left').css({
            height: 'auto',
        });
        p.stop(true, true).css({
            position: 'relative',
            top: 0,
            left: 0,
        }).removeClass('active');
    }
}

//可視窗口改變時
let resizeTimer; // 防止頻繁觸發
$(window).on('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(Marquee, 3000); // 延遲執行，防止重複觸發
});

// 初始化顯示當前尺寸
$(document).ready(Marquee);

// // 頁面切換處理
// $(window).on('pageshow', function () {
//     let timer = $('.copyright-text-left').data('marqueeTimer');
//     if (timer) {
//         clearInterval(timer); // 停止定時器
//         $('.copyright-text-left').removeData('marqueeTimer');
//     }
//     // 重新執行跑馬燈
//     Marquee();
// });


/* ----- index ----- */

//滑動函數
// function enableTouchScroll(containerSelector, contentSelector) {
//     let startX = 0; // 起始的水平坐標
//     let startY = 0; // 起始的垂直坐標
//     let currentLeft = 0; // 當前的內容偏移量
//     let maxLeft = 0; // 最大向右偏移量
//     let isHorizontal = false; // 是否為水平滑動

//     $(containerSelector).each(function () {
//         let $container = $(this);
//         let $content = $container.find(contentSelector);

//         // 根據容器和內容的寬度計算滑動範圍
//         let containerWidth = $container.width();
//         let totalWidth = $content[0].scrollWidth;
//         let minLeft = containerWidth - totalWidth;

//         // 監聽 touchstart 事件
//         $content.on('touchstart', function (event) {
//             let touch = event.originalEvent.touches[0];
//             startX = touch.clientX; // 起始的 X 坐標
//             startY = touch.clientY; // 起始的 Y 坐標
//             currentLeft = parseInt($content.css('left')) || 0; // 當前的 left 值
//             isHorizontal = false; // 重置水平滑動判斷
//             $content.css('transition', 'none'); // 移除過渡動畫
//         });

//         // 監聽 touchmove 事件
//         $content.on('touchmove', function (event) {
//             let touch = event.originalEvent.touches[0];
//             let deltaX = touch.clientX - startX; // 水平滑動距離
//             let deltaY = touch.clientY - startY; // 垂直滑動距離

//             // 判斷滑動方向
//             if (!isHorizontal && Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
//                 isHorizontal = true; // 確認為水平滑動
//                 event.preventDefault(); // 阻止垂直滾動
//             }

//             if (isHorizontal) {
//                 let newLeft = currentLeft + deltaX; // 計算新的 left 值

//                 // 限制滑動範圍
//                 newLeft = Math.min(maxLeft, Math.max(newLeft, minLeft));

//                 // 更新 left 值
//                 $content.css('left', newLeft + 'px');
//             }
//         });

//         // 監聽 touchend 事件
//         $content.on('touchend', function () {
//             if (isHorizontal) {
//                 $content.css('transition', 'left 0.3s ease'); // 恢復過渡動畫
//             }
//         });
//     });
// }

// // enableTouchScroll('.post', 'ul');
// enableTouchScroll('.index-feature', 'ul');

/* ----- login & register ----- */

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
        } else {
            account_label.hide();
        }
        if (!password.val()) {
            password_label.show();
            valid = false;
        } else {
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
        if (valid) {
            this.submit();
        }
    })
}
checkLog($('#loginForm'));
checkLog($('#registerForm'));

/* ----- product ----- */

//加入購物車
function addToCart(container) {
    let span = container.find('span');
    let cart = $('.fa-cart-shopping').siblings('span');
    let num = parseInt(cart[0].innerText);
    span.click(function () {
        num++;
        swal("1 件商品成功加入購物車", '', "success");
        cart.text(num);
    })
}
addToCart($('.product-container-img'));
addToCart($('.product-bottom-img'));

/* ----- item ----- */

//單一商品的加入購物車
$('.add-to-cart').on('click', 'span', function () {
    let cart = $('.fa-cart-shopping').siblings('span');
    let num = parseInt(cart[0].innerText);
    let input = $('.item-counter input');
    let amount = parseInt(input.val());
    //點擊加入購物車按鈕
    if ($(this).hasClass('add-btn')) {
        //判斷數字決定要給 span 加多少
        num += amount
        swal(`${amount} 件商品成功加入購物車`, '', "success");
        cart.text(num);
    }
    //點擊加減數量按鈕
    if ($(this).hasClass('item-plus')) {
        //加數量
        amount++;
        input.val(amount);
    } else if ($(this).hasClass('item-reduce')) {
        //減數量
        amount--
        if (amount <= 1) {
            amount = 1;
        }
        input.val(amount);
    }
})

//選擇尺寸或種類按鈕顏色切換 + 價格切換 -----------------------------------------未完
$('.item-size').on('click', 'li', function () {
    $(this).addClass('choose-size').siblings().removeClass('choose-size');
})




/* ----- contact ----- */
//聯絡我們確認填寫  -----------------------------------------未完
$('.contact-table form').submit(function (e) {
    e.preventDefault();


})




/* ----- cart ----- */

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

$('#receiveAddress1').on('change', function () {
    const selectedCity = $(this).val();
    const cityAreas = areas[selectedCity] || [];

    // 清空區域選單
    $('#receiveAddress2').empty();
    $('#receiveAddress2').append('<option value="" disabled selected>區域</option>');

    // 動態添加區域選項
    $.each(cityAreas, function (index, area) {
        $('#receiveAddress2').append(`<option value="${area}">${area}</option>`);
    });
});

//購物車個人資料勾選一致
$('#same-info').change(function () {
    if ($(this).is(':checked')) {
        $('#receiveName').val($('#orderName').val());
        $('#receivePhone').val($('#orderPhone').val());
    } else {
        $('#receiveName').val('');
        $('#receivePhone').val('');
    }
})

