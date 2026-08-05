// ==========================
// BACKGROUND MUSIC
// ==========================

const music = document.getElementById("bgMusic");

function playMusic() {
    if (music) {
        music.volume = 0.5;
        music.play()
        .then(() => {
            console.log("Music Started");
        })
        .catch((error) => {
            console.log("Music Error:", error);
        });
    }
}


// ==========================
// LOADING SCREEN
// ==========================

window.addEventListener("load", () => {

    setTimeout(() => {

        const loading = document.getElementById("loadingScreen");
        const gift = document.getElementById("giftSection");

        if (loading) {
            loading.style.display = "none";
        }

        if (gift) {
            gift.classList.remove("hidden");
        }

    }, 5000);

});


// ==========================
// GIFT CLICK
// ==========================

const giftBox = document.getElementById("giftBox");

if (giftBox) {

    giftBox.addEventListener("click", () => {

        console.log("Gift Clicked");

        playMusic();

        const lid = document.querySelector(".lid");

        if (lid) {
            lid.style.transform = "translateY(-60px) rotate(-15deg)";
        }

        createHearts();


        setTimeout(() => {

            document.getElementById("giftSection").style.display = "none";

            document.getElementById("welcomeSection")
            .classList.remove("hidden");

        },2000);

    });

}


// ==========================
// HEART EFFECT
// ==========================

function createHearts(){

    for(let i=0;i<35;i++){

        let heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";
        heart.style.left=Math.random()*100+"vw";
        heart.style.top="100vh";
        heart.style.fontSize=(20+Math.random()*25)+"px";
        heart.style.transition="4s linear";

        document.body.appendChild(heart);


        setTimeout(()=>{

            heart.style.top="-100px";
            heart.style.opacity="0";

        },100);


        setTimeout(()=>{

            heart.remove();

        },4500);

    }

}


// ==========================
// MEMORIES
// ==========================

function showMemories(){

    document.getElementById("welcomeSection")
    .style.display="none";

    document.getElementById("memorySection")
    .classList.remove("hidden");

}


const photos=[

"assets/photos/photo1.jpg",
"assets/photos/photo2.jpg",
"assets/photos/photo3.jpg",
"assets/photos/photo4.jpg",
"assets/photos/photo5.jpg"

];


const captions=[

"The moment I realized how lucky I am ❤️",
"Your smile is my favorite view ❤️",
"Every memory with you is precious ❤️",
"I just want to hold you forever ❤️",
"You are my peace, happiness and home ❤️"

];


let current=0;


function nextMemory(){

    current++;


    if(current >= photos.length){

        document.getElementById("memorySection")
        .style.display="none";

        loveLetter();

        return;
    }


    document.getElementById("memoryImage").src=photos[current];

    document.getElementById("caption").innerHTML=captions[current];

}



// ==========================
// LOVE LETTER
// ==========================

const message = `

Dear Sarpanch Madam Jii ❤️

Happy Girlfriend's Day ❤️

Thank you for coming into my life.

You make every single day beautiful.

Your smile is my favorite reason to smile.

Every moment with you is special.

I promise to always respect you,
care for you,
support you
and stand beside you.

No matter what happens,

I will never stop choosing you.

Forever Yours,

❤️ Sarpanch Sahab ❤️

`;


function loveLetter(){

    document.getElementById("letterSection")
    .classList.remove("hidden");


    let i=0;


    function typing(){

        if(i < message.length){

            document.getElementById("typing").innerHTML += message.charAt(i);

            i++;

            setTimeout(typing,40);

        }

    }


    typing();

}



// ==========================
// FINAL PAGE
// ==========================

function showFinal(){

    document.getElementById("letterSection")
    .style.display="none";


    document.getElementById("finalSection")
    .classList.remove("hidden");


    heartRain();

}



// ==========================
// HEART RAIN
// ==========================

function heartRain(){

    setInterval(()=>{


        let heart=document.createElement("div");


        heart.innerHTML="❤️";


        heart.style.position="fixed";

        heart.style.left=Math.random()*100+"vw";

        heart.style.top="-50px";

        heart.style.fontSize=(20+Math.random()*35)+"px";

        heart.style.transition="6s linear";


        document.body.appendChild(heart);



        setTimeout(()=>{

            heart.style.top="110vh";

            heart.style.opacity="0";

        },100);



        setTimeout(()=>{

            heart.remove();

        },6500);


    },250);

}
