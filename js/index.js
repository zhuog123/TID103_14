// 獲取 Cookie
function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) {
            return decodeURIComponent(value);
        }
    }
    return null;
}

//index 的輪播圖
let mySwiper = document.querySelector('.mySwiper')
var swiper = new Swiper(mySwiper, {
    loop:true,
    lazy: true,
    rewind: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//店家公告
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    responsive: {
        0: {
            items: 1.2
        },
        769: {
            items: 3
        }
    }
})

// // 檢查登入狀態並更新 header
// function updateHeader() {
//     const isLoggedIn = getCookie('isLoggedIn');
//     const username = getCookie('username');

//     const loginLink = document.querySelector('header nav ul li:nth-child(5) a'); // 鎖定「登入/註冊」連結
//     if (isLoggedIn === 'true' && username) {
//         // 如果已登入，更新連結為「登出」
//         loginLink.textContent = '登出';
//         loginLink.href = '#'; // 清除連結跳轉功能
//         loginLink.onclick = logout; // 綁定登出功能
//     }
// }

// // 登出
// function logout() {
//     // 清除登入相關 Cookie
//     document.cookie = 'isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
//     document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
//     alert('您已成功登出');
//     window.location.href = '/login.html';
// }

// // 初始化
// document.addEventListener('DOMContentLoaded', function () {
//     updateHeader();
// });
