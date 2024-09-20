const menuItems = [
    {
        name: "Mammoth Steak",
        image: 'assests/steak.jpg',
        description: "16 oz tender Mammoth steak just like your ancestor use to make",
        price:55 
    },
    {
        name: "Dolphin Ribs", 
        image: 'assests/dolphinribs.jpg',
        description: "Organic Ribs for the health nut in your family",
        price: 35
    },
    {
        name: "Mammoth Burger",
        image: 'assests/burger.jpg',
        description: "1lb burger with meat from our very rare Mammoth. This isn't your everyday quarter pounder with cheese.",
        price: 30
    },
    {
        name: "Kalimari",
        image: 'assests/shrimp.jpg',
        description: ".5lb of fresh Kalimari stright from the ocean",
        price: 25,
    },
    {
        name:"Mac and Cheese", 
        image: 'assests/mac.jpg',
        description: "Everyone's favorite Mac & Cheese kraft",
        price: 60,
    }
];


let index = 0;

function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price);
}

function updateCard() {
    document.getElementById('item-title').textContent = menuItems[index].name;
    document.getElementById('item-description').textContent = menuItems[index].description;
    document.getElementById('card_picture').src = menuItems[index].image;
    document.getElementById('card_picture').alt = menuItems[index].name;
    document.getElementById('card_price').textContent = formatPrice(menuItems[index].price);
}
document.getElementById('prevBtn').addEventListener('click', () => {
    index = (index > 0) ? index - 1 : menuItems.length - 1;
    updateCard();
});
document.getElementById('nextBtn').addEventListener('click', () => {
    index = (index < menuItems.length-1) ? index + 1 : 0;
    updateCard();
});


updateCard();



//Hiring js
    
    
































