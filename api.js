
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
        // console.log(aiHub)
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
                <button onClick="aiDetails('${aiHub.id}')" data-bs-toggle="modal" data-bs-target="#exampleModal" class="position-absolute end-0 mx-3 text-danger bg-danger-subtle rounded-5 border-0 fs-6"><i class="bi bi-arrow-right fs-5"></i></button>
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



const showAllData = () => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then(res => res.json())
    .then(data => displayAi(data.data.tools))
}


const aiDetails = (id)=> {
    const url =`https://openapi.programming-hero.com/api/ai/tool/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayAiDetails(data.data))

}

const displayAiDetails = aiDetails => {
    console.log(aiDetails)
    const modalBody = document.getElementById('modal-body')
    modalBody.innerHTML = `
    <div class=" row row-cols-1 row-cols-lg-2 g-4">
    <div class="col p-3">
      <div class="card h-100 bg-danger-subtle">
        <div class="card-body">
            <h3 class="lh-base p-4">${aiDetails.description}</h3>
            <div class="d-flex justify-content-around text-center gap-3 my-3">
              <div class="bg-light text-wrap p-3 rounded-3 fw-bold text-success">${aiDetails.pricing[0].price} ${aiDetails.pricing[0].plan}</div>
              <div class="bg-light text-wrap p-3 rounded-3 fw-bold text-warning">${aiDetails.pricing[1].price} ${aiDetails.pricing[1].plan}</div>
              <div class="bg-light text-wrap p-3 rounded-3 fw-bold text-danger">${aiDetails.pricing[2].price} ${aiDetails.pricing[2].plan}</div>
            </div>
            <div class="d-flex justify-content-around">
              <div>
                <h3>Features</h3>
                <ul>
                  <li>${aiDetails.features[1].feature_name ? aiDetails.features[1].feature_name : 'No data found!'}</li>
                  <li>${aiDetails.features[2].feature_name ? aiDetails.features[2].feature_name : 'No data found!'}</li>
                  <li>${aiDetails.features[3].feature_name ? aiDetails.features[3].feature_name : 'No data found!'}</li>
                </ul>
              </div>
              <div>
                <h3>Integrations</h3>
                <ul>
                  <li>${aiDetails.integrations[0] ? aiDetails.integrations[0] : "No data found!"}</li>
                  <li>${aiDetails.integrations[1] ? aiDetails.integrations[1] : "No data found!"}</li>
                  <li>${aiDetails.integrations[2] ? aiDetails.integrations[2] : "No data found!"}</li>
                  <li>${aiDetails.integrations[3] ? aiDetails.integrations[3] : "No data found!"}</li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
    <div class="col p-3">
      <div class="card h-100 position-relative">
        <img src="${aiDetails.image_link[0]}" class="card-img-top p-4" alt="...">
        <div class="card-body">
          <h3 class="card-title text-center">${aiDetails.input_output_examples[0].input}</h3>
          <p class="card-text text-center">${aiDetails.input_output_examples[0].output}</p>
        </div>
      </div>
    </div>
  </div>
    `;
}

loadAi()



// dataArray.sort((a, b) => new Date(a.published_in) - new Date(b.published_in));