let slideIndex = 0;
const slides = document.getElementsByClassName("carousel-item");

function showSlides(n) {
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${slideIndex * 100}%)`;
    }
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Initialize carousel
showSlides(slideIndex);

// //////////////////////////////////////////

let items = document.querySelectorAll('.slider .item');
let next1 = document.getElementById('next1');
let prev1 = document.getElementById('prev1');
// let apple = document.getElementsByClassName('apple');


function apples(){
    window.location.href="card1.html";
}


let active = 0;

function loadshow() {
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = '1';

    for (let i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? '0' : '0.6';
    }
    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? '0' : '0.6';
    }
}

loadshow();

next1.onclick = function () {
    active = active + 1 < items.length ? active + 1 : active;
    loadshow();
}

prev1.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : active;
    loadshow();
}











const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
navToggle.addEventListener('click', () =>{
   navMenu.classList.add('show-menu')
})

/* Menu hidden */
navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show-menu')
})

/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close')

/* Search show */
searchBtn.addEventListener('click', () =>{
   search.classList.add('show-search')
})

/* Search hidden */
searchClose.addEventListener('click', () =>{
   search.classList.remove('show-search')
})

/*=============== LOGIN ===============*/
const login = document.getElementById('login'),
      loginBtn = document.getElementById('login-btn'),
      loginClose = document.getElementById('login-close')

/* Login show */
loginBtn.addEventListener('click', () =>{
   login.classList.add('show-login')
})

/* Login hidden */
loginClose.addEventListener('click', () =>{
   login.classList.remove('show-login')
})





let firstMessage = true;

// تحميل الرسائل المخزنة من Local Storage
document.addEventListener("DOMContentLoaded", function() {
    const chatlog = document.getElementById('chatlog');
    const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    
    messages.forEach(message => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${message.sender}`;
        messageDiv.textContent = message.text;
        chatlog.appendChild(messageDiv);
    });

    chatlog.scrollTop = chatlog.scrollHeight;
    firstMessage = messages.length === 0;
});

function toggleChatbox() {
    const chatbox = document.getElementById('chatbox');
    chatbox.style.display = chatbox.style.display === 'none' || chatbox.style.display === '' ? 'block' : 'none';
}

function sendMessage(event) {
    if (event.key === 'Enter') {
        const userInput = document.getElementById('userInput');
        const chatlog = document.getElementById('chatlog');
        
        if (userInput.value.trim() !== "") {
            // إضافة رسالة المستخدم إلى صندوق المحادثة
            const userMessage = document.createElement('div');
            userMessage.className = 'message user';
            userMessage.textContent = userInput.value;
            chatlog.appendChild(userMessage);

            // حفظ الرسالة في Local Storage
            saveMessage(userInput.value, 'user');

            // عرض رسالة الترحيب عند أول رسالة فقط
            if (firstMessage) {
                const welcomeMessage = document.createElement('div');
                welcomeMessage.className = 'message';
                welcomeMessage.textContent = '  آهلٱ وسهلٱ  بكم أترك لنا آستفسارك وسيتم الرد بأقرب وقت للأتصال 0598188707 خدمة التوصيل متاحة لجميع مناطق 🏃🏃الضفة 20 والقدس 30 والداخل';
                chatlog.appendChild(welcomeMessage);

                // حفظ رسالة الترحيب في Local Storage
                saveMessage('  آهلٱ وسهلٱ  بكم أترك لنا آستفسارك وسيتم الرد بأقرب وقت للأتصال 0598188707 خدمة التوصيل متاحة لجميع مناطق 🏃🏃الضفة 20 والقدس 30 والداخل', 'bot');
                firstMessage = false;
            }

            // مسح حقل الإدخال
            userInput.value = "";
            
            // تحريك الصندوق إلى الأسفل لرؤية الرسائل الجديدة
            chatlog.scrollTop = chatlog.scrollHeight;
        }
    }
}

function saveMessage(text, sender) {
    const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    messages.push({ text, sender });
    localStorage.setItem('chatMessages', JSON.stringify(messages));
}

