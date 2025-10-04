const emergencyServices = [
    {
        serviceTitle: "Police Emergency",
        serviceType: "Law Enforcement",
        serviceNumber: "999",
        serviceProviderCompany: "Bangladesh Police",
        serviceIcon: "/assets/police.png"
    },
    {
        serviceTitle: "Fire Service",
        serviceType: "Fire & Rescue",
        serviceNumber: "9555555",
        serviceProviderCompany: "Bangladesh Fire Service & Civil Defence",
        serviceIcon: "/assets/emergency.png"
    },
    {
        serviceTitle: "Ambulance Service",
        serviceType: "Medical Emergency",
        serviceNumber: "199",
        serviceProviderCompany: "Red Crescent Society",
        serviceIcon: "/assets/ambulance.png"
    },
    {
        serviceTitle: "Gas Emergency",
        serviceType: "Utility Service",
        serviceNumber: "16496",
        serviceProviderCompany: "Titas Gas Transmission & Distribution Co. Ltd.",
        serviceIcon: "/assets/emergency.png"
    },
    {
        serviceTitle: "Electricity Emergency",
        serviceType: "Utility Service",
        serviceNumber: "16200",
        serviceProviderCompany: "Bangladesh Power Development Board",
        serviceIcon: "/assets/emergency.png"
    },
    {
        serviceTitle: "Women & Child Helpline",
        serviceType: "Social Service",
        serviceNumber: "109",
        serviceProviderCompany: "Ministry of Women and Children Affairs",
        serviceIcon: "/assets/emergency.png"
    },
    {
        serviceTitle: "National Disaster Helpline",
        serviceType: "Disaster Management",
        serviceNumber: "1090",
        serviceProviderCompany: "Disaster Management & Relief Ministry",
        serviceIcon: "/assets/emergency.png"
    },
    {
        serviceTitle: "Traffic Control Room",
        serviceType: "Transportation",
        serviceNumber: "9330161",
        serviceProviderCompany: "Dhaka Metropolitan Police",
        serviceIcon: "/assets/emergency.png"
    },
    {
        serviceTitle: "Tourist Police Helpline",
        serviceType: "Tourism Assistance",
        serviceNumber: "01769690000",
        serviceProviderCompany: "Bangladesh Tourist Police",
        serviceIcon: "/assets/emergency.png"
    },
    {
        serviceTitle: "National Emergency Helpline",
        serviceType: "General Emergency",
        serviceNumber: "999",
        serviceProviderCompany: "Government of Bangladesh",
        serviceIcon: "/assets/emergency.png"
    }
];


let hotlineContainer = document.querySelector('.hotline-container');

const showAllCard = () => {
    const fragment = document.createDocumentFragment(); // ✅ improves performance (less reflow)

    emergencyServices.forEach(service => {
        const hotlineCard = document.createElement('div');
        hotlineCard.className = 'hotline-card';

        hotlineCard.innerHTML = `
      <div class="card-icon">
        <div class="emergency-icon">
          <img src="${service.serviceIcon}" alt="Emergency Icon">
        </div>
        <div class="heart-icon">
          <img class="heart-icon-img" src="./assets/blankheart.png" alt="Favorite">
        </div>
      </div>

      <div class="hotline-title">
        <h3 class = "title">${service.serviceTitle}</h3>
        <p>${service.serviceType}</p>
      </div>

      <div class="hotline-number">
        <p>${service.serviceNumber}</p>
      </div>

      <div class="hotline-type">
        <p>${service.serviceProviderCompany}</p>
      </div>

      <div class="hotline-contact">
        <button id="copy-btn">
          <div id="copy-icon">
            <img src="./assets/text.png" alt="Copy">
          </div>
          <p>Copy</p>
        </button>
        <button id="call-btn">
          <div class="call-icon">
            <img src="./assets/phone.png" alt="Call">
          </div>
          <p>Call</p>
        </button>
      </div>
    `;

        fragment.appendChild(hotlineCard);
    });

    hotlineContainer.appendChild(fragment); // ✅ single DOM update
};


hotlineContainer.addEventListener('click', (e) => {
    // Check if the clicked element or its parent is the heart icon div
    const heartIcon = e.target.closest('.heart-icon');
    const cpyBnt = e.target.closest('#copy-btn');
    const callbtn = e.target.closest('#call-btn');
    if (heartIcon) {
        const heartImg = heartIcon.querySelector('.heart-icon-img'); // select the image inside this div
        if (heartImg.src.includes('blankheart.png')) {
            heartImg.src = './assets/heart.png'; // change to filled heart
            let favCount = document.querySelector('#fav-count');
            let cnt = parseInt(favCount.innerText);
            cnt++;
            favCount.innerText = cnt;
        } else {
            heartImg.src = './assets/blankheart.png'; // toggle back to blank heart
            let favCount = document.querySelector('#fav-count');
            let cnt = parseInt(favCount.innerText);
            cnt--;
            favCount.innerText = cnt;
        }
    }

    if (cpyBnt) {
        let copyCount = document.querySelector('#num-copy');
        let cnt = parseInt(copyCount.innerText);
        cnt++;
        copyCount.innerText = cnt;
    }

    if (callbtn) {
        let historyBox = document.querySelector('.history-data');
        let card = callbtn.closest('.hotline-card');
        let title = card.querySelector('.hotline-title h3').innerText;
        let hotlineNum = card.querySelector('.hotline-number p').innerText;

        let eachCall = document.createElement('div');
        eachCall.classList.add('each-call');
        eachCall.innerHTML = `
            <div>
                <p>${title}</p>
                <p>${hotlineNum}</p>
            </div>
            <div>
                <p>11:36:58 AM</p>
            </div>
        `

        historyBox.appendChild(eachCall);
    }
});

let clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', () => {
    let historyBox = document.querySelector('.history-data');
    historyBox.innerHTML = "";
})


showAllCard();