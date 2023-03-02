console.log('loded')

const loadAi = async() => {
    // const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    displayAi(data.data.tools);
}

const displayAi = aiHubs =>{
    const aiContainer = document.getElementById('ai-container');
    aiHubs.forEach(aiHub =>{
        console.log(aiHub)
        const aiDiv = document.createElement('div');
        aiDiv.classList.add('col');
        aiDiv.innerHTML = `
        <div class="card h-100">
        <img src="${aiHub.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Features</h5>
            <div>
                <p>1.${aiHub.features[0]}</p>
                <p>2.${aiHub.features[1]}</p>
                <p>3.${aiHub.features[2]}</p>
            </div>
        </div>
        <div class="card-footer">
            <h5>${aiHub.name}</h5>
            <div>
                <i class="bi bi-calendar3"></i>
                <span>date</span>
            </div>
        </div>
      </div>
        `;
        aiContainer.appendChild(aiDiv);
    })
}

loadAi()