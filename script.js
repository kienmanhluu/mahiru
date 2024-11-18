// Lấy phần tử nút và hộp pop-up
const circleButton = document.querySelector('.circle-button');
const popupContainer = document.querySelector('.popup-container');

// Khi nhấn vào nút, bật/tắt hiển thị hộp pop-up
circleButton.addEventListener('click', () => {
    popupContainer.classList.toggle('show'); // Chuyển đổi lớp 'show' để hiển thị popup
});
