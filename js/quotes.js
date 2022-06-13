const quotes = [
    {
        quote : "삶이 있는 한 희망은 있다",
        author : "키케로",
    },
    {
        quote : "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에",
        author : "엘사 맥스웰",
    },
    {
        quote : "아침에 눈을 떠서 어제보다 나은 하루를 만들지 않으면, 실패한 것이다.",
        author : "로버트 나델리",
    },
    {
        quote : "상상할 수 없는 꿈을 꾸고 있다면, 상상할 수 없는 노력을 해라.",
        author : "열정맨",
    },
    {
        quote : "인생은 스스로 알아서 하지 않으면 아무도 아무것도 가르쳐 주지 않는다.",
        author : "빌게이츠",
    },
    {
        quote : "성공으로 가는 길과 실패로 가는 길은 거의 똑같다.",
        author : "콜린 R,데이비스",
    },
    {
        quote : "세상에서 가장 중요한 일들 대부분은 아무도 도와주지 않을 때에도 계속 노력한 사람들에 의해 이루어졌다.",
        author : "데일 카네기",
    },
    {
        quote : "진짜 어려움은 극복할 수 있다. 정복할 수 없는 것은 상상속의 어려움들 뿐이다. ",
        author : "시어도어N.베일",
    },
    {
        quote : "노력을 이기는 재능은 없고, 노력을 외면하는 결과도 없다. ",
        author : "열정맨",
    },
    {
        quote : "지옥을 겪고 있다면, 계속 겪어 나가라.",
        author : "윈스턴 처칠",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;