function initHorizontalSwipe(ulElement) {
    let startX = 0; // 起始 X 座標
    let scrollStartX = 0; // 起始滾動位置
    let isDragging = false; // 是否正在拖動

    ulElement.style.overflow = 'hidden'; // 隱藏溢出的部分
    ulElement.style.whiteSpace = 'nowrap'; // 保持橫向排列
    ulElement.style.touchAction = 'pan-y'; // 僅允許垂直方向的預設滾動

    // 處理觸摸開始
    ulElement.addEventListener('touchstart', (event) => {
        const touch = event.touches[0];
        startX = touch.clientX;
        scrollStartX = ulElement.scrollLeft; // 紀錄初始滾動位置
        isDragging = true;
        ulElement.style.scrollBehavior = 'auto'; // 禁用平滑滾動
    });

    // 處理觸摸移動
    ulElement.addEventListener('touchmove', (event) => {
        if (!isDragging) return;
        const touch = event.touches[0];
        const diffX = startX - touch.clientX; // 計算滑動距離
        ulElement.scrollLeft = scrollStartX + diffX; // 更新滾動位置
    });

    // 處理觸摸結束
    ulElement.addEventListener('touchend', () => {
        isDragging = false;
        ulElement.style.scrollBehavior = 'smooth'; // 恢復平滑滾動
    });

    // 防止點擊事件被阻止
    ulElement.addEventListener('click', (event) => {
        if (isDragging) {
            event.preventDefault();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const Box = document.querySelector('.member-level-introduction-center'); // 選擇外層 ul
    initHorizontalSwipe(Box);
});