const quotes = [
    "Hajime Isyama’s favorite character is Jean Kirschtein. Cause Isayma admires how Jean says what he wants without worrying about what other people think. But it was all in the past.",
    "In more recent interviews, Isayama has stated that Reiner Bruan is his present favorite character",
    "Originally, Eren was going to know that he is a titan all along. But thankfully, Isayama scrapped the idea.",
    "Levi is the came on top in the 1st character popularity poll, Eren took the second place, While our favorite girl, Mikasa took the 3rd place. ",
    "Isayama has said that Mikasa will choose not to wear her precious scarf if it’s too hot outside.",
    "Isayama has revealed that Eren’s titan form is based on Yushin Okami, a mixed Japanese martial artist. Isayama felt that he had the ” ideal physique of a middleweight mixed martial artist”.",
    "Moblit is Hange’s second in command as well as her assistant. But that’s not all. He is also the heaviest drinker in the survey corps. Isayama has said that this is due to his unfortunate position.",
    "Marnia Inoue, the voice actor of Armin, is also the voice of the show’s narrator.",
    "Mikasa translates to 3 bamboo hats.",
    "Isayama made the theme of AOT cause he thought, ” Giants are kind of Gross”.",
    "Mike is the tallest human character in the series at a looming 6’5″.",
    "Aspects of Levi’s design and personality are were based on Rorshach from Watchmen.",
    "On average, Levi only sleeps around 2 to 3 hours a day. ",
    "Some of the titans are even modeled after friends and acquaintances of Isayama. Sometimes he even takes requests from fans .",
    "Eren has the highest kill rate of any of the 104 Trainee squad.",
    "The official website for the show confirmed that Ymir’s feelings for Krista are romantic. The anime’s producer, George Wanda, also stated that the two are a couple.",
    "Eren’s voice actor Yuki Kaji cried while reading the script of the final season.",
    "Isayama revealed that Levi sometimes wishes that he was a bit taller.",
    "Attack On Titan has 7 episodes rated 9.9 or above. While Breaking Bad and Game Of Thrones have 7 combined.",
    "The appearance of the walled city in AOT was inspired by Nordlingen in Germany.",
    "There is a crossover comic called “Attack On Avenger,” Where some of your favorite Marvel characters go against Titans. ",
    "If Isayama could say one thing to Levi, it would be ” Go quickly to sleep.” Levi suffers from slight bouts of Insomnia.",
    "The previous ‘Attack on Titan’ editor was handed an 11-year prison term for the murder of his wife.",
    "Jean is said to have a “horse face” because of his long countenance. It’s a recurring gag in the series with both Erena and Hitch bringing up.",
    "Levi Ackerman, Erwin Smith, and Eren Yeager ended up top 3 in Attack On Titan Second Character Popularity Poll.",
    "In the anime, there is a titan based on Isayama himself",
    "Brock Lesnar inspired the humanoid model for Armored Titan.",
];

const factTarget = document.getElementById("fact-target");

function randomFact() {
    let random = Math.floor(Math.random() * quotes.length);
    factTarget.style.opacity = 0;
    factTarget.textContent = quotes[random];
    factTarget.style.opacity = 1;

    setTimeout(randomFact, 10000);
}

randomFact();
/*------------JS Challenge --------------*/
const titanId = ['2', '5', '6', '7', '8', '9', '10', '11', '12'];
let imgAdded = false;
document.getElementById('target-quote').innerHTML = 'Titan name goes here!';
document.getElementById('target-button').addEventListener('click', () => {
    let id = randomIdGenerator();
    console.log(id);
    displayTitan(id);
})
const randomIdGenerator = () => {
    return titanId[Math.floor(Math.random() * 9)]
}

async function displayTitan(id) {
    let displayObj = {};
    let titanInfo = await fetchTitan(id);
    displayObj = await assignTitanInfo(titanInfo , displayObj);
    console.log(displayObj);
    await addToHtml(displayObj);
    //console.log(titanInfo);
}
async function fetchTitan(id){
    let data = await fetch(`https://attackontitanapi.herokuapp.com/api/titans/${id}`);
    console.log(`https://attackontitanapi.herokuapp.com/api/titans/${id}`)
    let titanInfo = await data.json();
    return titanInfo
}
async function assignTitanInfo(titanInfo,displayObj) {
    displayObj.name = titanInfo.name;
    displayObj.imgUrl = titanInfo.picture_url;
    return displayObj;
}
async function addToHtml (displayObj) {
    if (imgAdded){
        document.querySelector('.titan-picture').remove();
    }
    let parent = document.getElementById('container-challenge');
    let nameTag = document.getElementById('target-quote');
    nameTag.innerText = displayObj.name;
    let imgTag = createElement('img','titan-picture');
    imgTag.height = 250;
    parent.style.display = 'flex';
    imgTag.style.margin = '0 auto';
    parent.style.flexDirection = 'column';
    imgTag.src = displayObj.imgUrl;
    imgAdded = true;
    parent.appendChild(imgTag);

}
const createElement = (el , className) => {
    let element = document.createElement(el);
    element.setAttribute('class' , className);
    return element
}
/*----------edit the html with right information----------*/
let infoTags = document.querySelectorAll('.info>p');
let myAnswers = ['blue', 'koala', 'It is swimming! Lucas got it right!','Levi Ackerman','park bo-gum'];
const theHoverEffect = (p , myAnswer , org )=>{
    p.addEventListener('mouseover',() => {
        p.innerText = org;
    })
    p.addEventListener('mouseout', () => {
        p.innerText = myAnswer;
    })
}
const fixInfo = (p , myAnswer) => {
    let org = p.innerHTML;
    theHoverEffect(p , myAnswer , org );
    p.innerText = myAnswer;
}
for (let i = 0 ; i < infoTags.length; i ++){
    fixInfo(infoTags[i],myAnswers[i]);
}
/*------3 word description-------*/
let descripTag = document.querySelector('#container-description>p');
fixInfo( descripTag , 'honest , movie -tv shows- manga - kdrama - ...  addict! , cheerful');