const container =  document.querySelector('.chatbot__messages-container');

const goodLuckBtn = document.getElementById("goodLuck");
const supportBtn = document.getElementById("support");
const jokeBtn = document.getElementById("joke");

const sendBtn = document.querySelector('.send-btn');
const containerBtn = document.querySelector('.btn__container');
const closeBtn = document.querySelector('.close-btn');

// Функция скролла
function scrollToBottom() {
    container.scrollTop = container.scrollHeight;
}
// Функция создает новое сообщение
function createMessage (text, status) {
            const msg = document.createElement('div');
            msg.classList.add(`msg-${status}`);
            msg.textContent = `${text}`;

        return msg;
}
// бот желает удачи
function wishGoodLuck () {
    const newMsg = createMessage('Пожелать удачи', 'client');
    container.appendChild(newMsg);
    scrollToBottom();
    containerBtn.classList.add('hidden');

    setTimeout(() => {
        const newMsg = createMessage('Удачи =)', 'bot');
        container.appendChild(newMsg)
        scrollToBottom();
    }, 2000);
}
// бот рассказывает анекдот
function supportMe () {
    const newMsg = createMessage('Поддержать меня', 'client');
    container.appendChild(newMsg)
    containerBtn.classList.add('hidden');

    setTimeout(() => {
        const text = "Ты не можешь изменить направление ветра, но ты можешь наполнить им паруса и отправиться к мечтам"
        const newMsg = createMessage( text, 'bot');
        container.appendChild(newMsg)
        scrollToBottom();
    }, 2000);
    scrollToBottom();
}
// рендерит анекдот
function tellJoke () {
    const newMsg = createMessage('Рассказать анекдот', 'client');
    container.appendChild(newMsg)
    containerBtn.classList.add('hidden');

    setTimeout(() => {
        const joke = ["- Если небо покраснело что это значит?", "- Это закат", "- Закат??? Во рту???", "Ахахаха"];
        joke.map((elem, index)=>{
            setTimeout(()=>{
                const newMsg = createMessage( elem, 'bot');
                container.appendChild(newMsg) 
                scrollToBottom();
            }, 2000*index);
        });

    }, 2000);

    scrollToBottom();
}
// Отправка сообщений 
function sendMessage (evt) {
    evt.preventDefault();
    let newMsg = document.createElement('div');
    let input = document.querySelector('input');
    newMsg.classList.add('msg-client');

    if (!input.value){
        return false;
    }

    if (input.value === "/m"){
        const text = `${input.value}`;
        const newMsg = createMessage( text, 'client');
        container.appendChild(newMsg);
        input.value = '';
        scrollToBottom();

        return containerBtn.classList.remove('hidden')
    }
    if (input.value){
        const text = `${input.value}`;
        const newMsg = createMessage( text, 'client');
        container.appendChild(newMsg);
        input.value = '';
        scrollToBottom();
         return containerBtn.classList.add('hidden')
    }
};
// Обработчики событий 
goodLuckBtn.addEventListener('click', wishGoodLuck);
supportBtn.addEventListener('click', supportMe);
jokeBtn.addEventListener('click', tellJoke);
closeBtn.addEventListener('click', ()=>{containerBtn.classList.add('hidden')});
sendBtn.addEventListener('click', sendMessage);
