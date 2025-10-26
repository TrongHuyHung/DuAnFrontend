let currentPrice = 0;
let currentQuantity = 1;
let sizePrices = {};

function openModal(name, defaultPrice, image, priceSmall, priceMedium, priceLarge) {
    document.getElementById('productModal').style.display = 'block';
    document.getElementById('modalProductName').textContent = name;

    sizePrices = {
        small: priceSmall || defaultPrice,
        medium: priceMedium || defaultPrice,
        large: priceLarge || (defaultPrice + 10000)
    };

    document.querySelector('.size-option:nth-child(1) .size-price').textContent =
        sizePrices.large.toLocaleString('vi-VN') + 'đ';
    document.querySelector('.size-option:nth-child(2) .size-price').textContent =
        sizePrices.medium.toLocaleString('vi-VN') + 'đ';
    document.querySelector('.size-option:nth-child(3) .size-price').textContent =
        sizePrices.small.toLocaleString('vi-VN') + 'đ';

    currentPrice = sizePrices.medium;
    document.getElementById('modalPrice').textContent = currentPrice.toLocaleString('vi-VN');

    let imagePath = image;
    if (image.startsWith('~/')) {
        imagePath = image.replace('~/', '/');
    }
    document.getElementById('modalImage').src = imagePath;

    currentQuantity = 1;
    document.getElementById('quantity').textContent = currentQuantity;
    document.body.style.overflow = 'hidden';

    document.querySelectorAll('.size-option').forEach(opt => opt.classList.remove('selected'));
    document.querySelector('.size-option:nth-child(2)').classList.add('selected');
}

function selectSize(element, sizeName) {
    document.querySelectorAll('.size-option').forEach(opt => {
        opt.classList.remove('selected');
    });

    element.classList.add('selected');

    let price;
    if (sizeName === 'Lớn') {
        price = sizePrices.large;
    } else if (sizeName === 'Vừa') {
        price = sizePrices.medium;
    } else if (sizeName === 'Nhỏ') {
        price = sizePrices.small;
    }

    currentPrice = price;
    document.getElementById('modalPrice').textContent = price.toLocaleString('vi-VN');
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeQuantity(delta) {
    currentQuantity = Math.max(1, currentQuantity + delta);
    document.getElementById('quantity').textContent = currentQuantity;
}

function selectSugar(element) {
    document.querySelectorAll('.sugar-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    element.classList.add('selected');
}

function addToCart() {
    const productName = document.getElementById('modalProductName').textContent;
    const selectedSize = document.querySelector('.size-option.selected .size-label').textContent;
    const selectedSugars = Array.from(document.querySelectorAll('.sugar-option.selected'))
        .map(el => el.textContent)
        .join(', ');

    alert(`Đã thêm vào giỏ:\n${productName}\nSize: ${selectedSize}\nSố lượng: ${currentQuantity}\nTùy chọn: ${selectedSugars}\nTổng: ${(currentPrice * currentQuantity).toLocaleString('vi-VN')}đ`);

    closeModal();
}


window.onclick = function (event) {
    const modal = document.getElementById('productModal');
    if (event.target == modal) {
        closeModal();
    }
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});