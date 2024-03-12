const btn = document.querySelector('.futuristic-circle');



const content = document.querySelector('.content');


function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Boss");
    }

    else if(hr == 12) {
        speak("Good noon Boss");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Boss");
    }

    else {
        speak("Good Evening Boss");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating Inertia");
    speak("Going online");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hi ghost') || message.includes('hello ghost')) {
        const finalText = "Hello Boss";
        speech.text = finalText;
    } 
    
    else if(message.includes('handsome')) {

        const finalText = "according to google boss Jhade is the most handsome in the Philippines ";

        speech.text = finalText;
    }
    
          else if(message.includes('boss')) {
        const finalText = "di ako si primo, pero.... labis na naiinip... nayayamot sa bawat saglit..... kapag na alala ka, wala namn, akong magawa.";

        speech.text = finalText;
    }
    
    else if(message.includes('ugly')) {

        const finalText = "you're the most ugliest in the world. so don't say ugly if you don't want to hurt your feelings";

        speech.text = finalText;
    }
    
    else if(message.includes('creator')) {

        const finalText = "The creator of Ghost Assistant is Jhade. A handsome man hailing from Tigaon, Camarines Sur, Philippines, he is already 18 years old and presently a grade 12 student at La Salvacion. As the poet Nietzsche wisely said, 'He who has a why to live can bear almost any how.' Jhade finds his inspiration in a crush he holds for Andrea Jallores from Salvacion.";

        speech.text = finalText;
    }
    
    else if(message.includes('ghost')) {

        const finalText = "la, la, la, la, la, la, a hopeless ramantic on my life, sorounding a couples all the time. i guess i take this a sign. alright, alright, I'm feeling lonely, oh i wish a find a lover that can hold me. now I'm crying in my room, so skeptical love, but i want it more, more, more.";


        speech.text = finalText;
    }
    
    
    
    else if(message.includes('how are you')) {
        const finalText = "I am fine boss tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes(' whats my name')) {
        const finalText = "your name is jhade";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}

const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    let slideIndex = 0;
    let startX = 0;
    let isDragging = false;

    function showSlide(index) {
      slider.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    }

    function nextSlide() {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide(slideIndex);
    }

    function prevSlide() {
      slideIndex = (slideIndex - 1 + slides.length) % slides.length;
      showSlide(slideIndex);
    }

    function autoSlide() {
      nextSlide();
    }

    slider.addEventListener('mousedown', e => {
      isDragging = true;
      startX = e.clientX;
    });

    slider.addEventListener('mousemove', e => {
      if (!isDragging) return;
      const deltaX = e.clientX - startX;
      const currentTranslate = -slideIndex * 100;
      slider.style.transform = `translateX(${currentTranslate + deltaX}px)`;
    });

    slider.addEventListener('mouseup', e => {
      isDragging = false;
      const deltaX = e.clientX - startX;
      if (deltaX > 50) {
        prevSlide();
      } else if (deltaX < -50) {
        nextSlide();
      } else {
        showSlide(slideIndex);
      }
    });

    slider.addEventListener('mouseleave', () => {
      isDragging = false;
      showSlide(slideIndex);
    });

    slider.addEventListener('touchstart', e => {
      isDragging = true;
      startX = e.touches[0].clientX;
    });

    slider.addEventListener('touchmove', e => {
      if (!isDragging) return;
      const deltaX = e.touches[0].clientX - startX;
      const currentTranslate = -slideIndex * 100;
      slider.style.transform = `translateX(${currentTranslate + deltaX}px)`;
    });

    slider.addEventListener('touchend', e => {
      isDragging = false;
      const deltaX = e.changedTouches[0].clientX - startX;
      if (deltaX > 50) {
        prevSlide();
      } else if (deltaX < -50) {
        nextSlide();
      } else {
        showSlide(slideIndex);
      }
    });

    setInterval(autoSlide, 3000); // Change slide every 3 seconds