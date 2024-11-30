// function setCookie(name, value, days) {
//     const expires = new Date();
//     expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
//     document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/`;
// }

// function login(event) {
//     event.preventDefault(); // 阻止表單默認提交行為

//     // 獲取用戶輸入
//     const username = document.querySelector('#phone-email').value;
//     const password = document.querySelector('#password').value;

//     // 簡單驗證
//     if (username && password) {
//         setCookie('isLoggedIn', 'true', 7); // 設置登入狀態
//         setCookie('username', username, 7); // 設置用戶名
//         alert('登入成功');
//         window.location.href = '/'; // 跳轉到首頁
//     } 
// }

// // 綁定表單提交事件
// window.onload = function () {
//     const loginForm = document.getElementById('loginForm');
//     loginForm.addEventListener('submit', login);
// };