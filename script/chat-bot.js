let pizzaBtn = document.querySelector('.pizza');
let container =  document.querySelector('.chatbot__messages-container');

function orderPizza () {
    let newMsg = document.createElement('div');
    newMsg.classList.add('msg-client');
    newMsg.innerHTML = "Заказать пиццу.";
    console.log('заказ пицы')
    container.appendChild(newMsg)
    scrollToBottom();
}

pizzaBtn.addEventListener('click', orderPizza);


function scrollToBottom() {
    container.scrollTop = container.scrollHeight;
}

scrollToBottom();
