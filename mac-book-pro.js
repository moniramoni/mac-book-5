

const memoryCost = document.getElementById('memory-cost')
const storageCost = document.getElementById('storage-cost')
const deliveryCost = document.getElementById('delivery-charge')
const total = document.getElementById('total')
const macBookPrice = document.getElementById('best-price')
const promoInput = document.getElementById('promo-input')
const discountPriceText = document.getElementById('discount-price')

//   memory cost
document.getElementById('memory-8GB').addEventListener('click', function () {
    memoryCost.innerText = '0'
    updateTotal()
})
document.getElementById('memory-16GB').addEventListener('click', function () {
    memoryCost.innerText = '180'
    updateTotal()
})
// storage cost
document.getElementById('storage-256GB').addEventListener('click', function () {
    storageCost.innerText = '0'
    updateTotal()
})
document.getElementById('storage-512GB').addEventListener('click', function () {
    storageCost.innerText = '100'
    updateTotal()
})
document.getElementById('storage-1TB').addEventListener('click', function () {
    storageCost.innerText = '180'
    updateTotal()
})
// delivery cost
document.getElementById('free-delivery-charge').addEventListener('click', function () {
    deliveryCost.innerText = '0'
    updateTotal()
})
document.getElementById('delivery-charge-20$').addEventListener('click', function () {
    deliveryCost.innerText = '20'
    updateTotal()
})
document.getElementById('promo-btn').addEventListener('click', function () {
    discount()
})
function updateTotal() {
    const bestPrice = parseInt(macBookPrice.innerText)
    const extraMemoryCost = parseInt(memoryCost.innerText);
    const extraStorageCost = parseInt(storageCost.innerText)
    const extraDeliveryCost = parseInt(deliveryCost.innerText)
    const grandTotal = bestPrice + extraMemoryCost + extraStorageCost + extraDeliveryCost
    total.innerText = grandTotal
    discountPriceText.innerText = total.innerText
}
function discount(){
    let discountPrice = parseInt(discountPriceText.innerText)
    promoCode = promoInput.value
    if (promoCode == 'stevekaku') {
        discountPriceText.innerText = parseInt((total.innerText /100)*80)
    }
    else (
        alert('you have enterd wrong promo code')
    )
    promoInput.value = ''
}