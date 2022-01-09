const quotes = [
    {
        quote: "행동하기 어려워지면 정보를 수집하라. 정보를 수집하기 어려워지면 잠을 자라",
        author: "Ursula K. Le Guin"
    },
    {
        quote: "사람들은 컴퓨터 과학을 천재들의 작품으로 생각하지만 실제 현실은 그와 반대로 작은 돌로 만들어진 하나의 벽처럼 많은 사람이 서로 도와가며 발전시킨 것이다.",
        author: "Donald Knuth"
    },
    {
        quote: "두 차례에 걸쳐 '머신에 잘못된 수치를 넣으면 올바른 답이 나올까요?'라는 질문을 받았다... 나는 그런 의문이 들게 만드는 혼란스러운 생각을 잘 이해할 수 없다.",
        author: "Charles Babbage"
    },
    {
        quote: "소프트웨어 설계에는 두 가지 방법이 있습니다. 한 가지 방법은 명백히 결함이 없도록 간단하게 만드는 것이고 다른 방법은 결함이 눈에 띄지 않도록 아주 복잡하게 만드는 것입니다.",
        author: "C.A.R. Hoare"
    },
    {
        quote: "추상적 자료형은 실행하는 관점에서 이 자료형을 정의하는 특정 프로그램을 작성함으로써 실체화됩니다.",
        author: "Barbara Liskov"
    },
    {
        quote: "기계가 생각할 수 있느냐는 질문은 잠수함이 수영을 할 수 있느냐는 질문과 같은 의미입니다.",
        author: "Edsger Dijkstra"
    },
    {
        quote: "디버깅은 코드를 처음 작성하는 것보다 배나 어렵다. 따라서 기발하게 코드를 작성하게 되면 당연히 코드 디버깅이 어려워진다.",
        author: "Brian Kernighan & P.J. Plauger"
    }
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

function makeQuote() {
    let randomQuote = Math.floor(Math.random() * 7);

    quote.innerText = quotes[randomQuote].quote;
    author.innerText = quotes[randomQuote].author;
}

makeQuote();