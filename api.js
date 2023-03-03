console.log('loded')

const loadAi = () =>{
    fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then(res => res.json())
    .then(data => displayAi(data.data.tools.slice(0, 6)))
}



const displayAi = aiHubs =>{

// Remove Show all button
    const showAll = document.getElementById('show-all')
    if(aiHubs.length < 10){  
    showAll.classList.remove('d-none')
    }
    else{
    showAll.classList.add('d-none')
    }


    const aiContainer = document.getElementById('ai-container');
    aiContainer.innerHTML = ''; 
    toggleSpinner(true);
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
                <p>3.${aiHub.features[2] ? aiHub.features[2] : "No data found!" }</p>
            </div>
        </div>
        <div class="card-footer">
            <div class="d-flex align-items-center">
                <div>
                <h5>${aiHub.name}</h5>
                <i class="bi bi-calendar3"></i>
                <span>${aiHub.published_in}</span>
                </div>
                <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="position-absolute end-0 mx-3 text-danger  px-1 bg-danger-subtle bg-opacity-10 rounded-circle border-none border border-0 fs-6"><i class="bi bi-arrow-right"></i></button>
            </div>
        </div>
      </div>
        `;
        aiContainer.appendChild(aiDiv);
    })
    toggleSpinner(false);
}


// toggleSpinner =============================================
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none')
    }
}


loadAi()

const showAllData = () => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then(res => res.json())
    .then(data => displayAi(data.data.tools))
}