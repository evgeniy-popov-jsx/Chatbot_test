const container =  document.querySelector('.chatbot__messages-container');

const pizzaBtn = document.querySelector('.pizza');
const alarmBtn = document.querySelector('.alarm');
const weatherBtn = document.querySelector('.weather');
const sendBtn = document.querySelector('.send');

function scrollToBottom() {
    container.scrollTop = container.scrollHeight;
}

function getPizza () {
    let newMsg = document.createElement('div');
    newMsg.classList.add('msg-client');
    newMsg.textContent = "Закажи пиццу";
    container.appendChild(newMsg)
    scrollToBottom();

    setTimeout(() => {
        let newMsg = document.createElement('div');
        newMsg.classList.add('msg-bot');
        newMsg.textContent = "Хорошо, я закажу пиццу. Что еще я могу для Вас сделать?";
        container.appendChild(newMsg)
        scrollToBottom();
    }, 1000);
}

function getAlarm () {
    let newMsg = document.createElement('div');
    newMsg.classList.add('msg-client');
    newMsg.textContent = "Установи будильник";
    container.appendChild(newMsg)

    setTimeout(() => {
        let newMsg = document.createElement('div');
        newMsg.classList.add('msg-bot');
        newMsg.textContent = "Хорошо, я установлю будильник. Что еще я могу для вас сделать?";
        container.appendChild(newMsg)
        scrollToBottom();
    }, 1000);

    scrollToBottom();
}

function getWeather () {
    let newMsg = document.createElement('div');
    newMsg.classList.add('msg-client');
    newMsg.textContent = "Покажи погоду";
    container.appendChild(newMsg)

    setTimeout(() => {
        let newMsg = document.createElement('div');
        newMsg.classList.add('msg-bot');
        newMsg.textContent = "Хорошо, я покажу погоду. Что еще я могу для вас сделать?";
        container.appendChild(newMsg)
        scrollToBottom();
    }, 1000);

    scrollToBottom();
}
function sendMessage (evt) {
    evt.preventDefault();
    let newMsg = document.createElement('div');
    let input = document.querySelector('input');
    newMsg.classList.add('msg-client');
    newMsg.textContent = `${input.value}`;
    container.appendChild(newMsg);
    scrollToBottom();
    input.value = '';
};

pizzaBtn.addEventListener('click', getPizza);
alarmBtn.addEventListener('click', getAlarm);
weatherBtn.addEventListener('click', getWeather);
sendBtn.addEventListener('click', sendMessage);


