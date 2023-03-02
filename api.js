console.log('loded')

const loadAI = async() => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    displayAI(data.data.tools);
}

const displayAI = AI =>{
    console.log(AI)
}



loadAi()