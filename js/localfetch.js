export async function localfetchData() {
  try {
    const response = await fetch(`./experience.json`);

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();

    //Scaffolder for workplace
    const container = document.querySelector(".experiencerack");

    data.Workplaces.forEach((workplace, i) => {
      const rack = document.createElement("div");
      rack.innerHTML = `
    <div class="rack1">
    <h4 id="jobTitle${i}">${workplace.Title}</h4>
      <div class="greenbox" id="jobStatus${i}">${workplace.Status}</div>
    </div>
    <div class="rack2">
      <div class="rackitem1">
        <img class="xpicon" src="/pics/officeitem.svg" alt="Office building icon">
        <a id="jobCompany${i}">${workplace.Company}</a>
      </div>
      <div class="rackitem2">
        <img class="xpicon" src="/pics/location.svg" alt="Location pin icon">
        <a id="jobCity${i}">${workplace.City}</a>
      </div>
      <div class="rackitem3">
        <img class="xpicon2" src="/pics/calender.png" alt="Calendar icon">
        <a id="jobDate${i}">${workplace.Date}</a>
      </div>
    </div>
    <hr>
  `;
      container.appendChild(rack);
    });

//for education
const educationContainer = document.querySelector('.experiencerack2');
educationContainer.innerHTML = ''; // Clear any previous racks

data.Education.forEach((edu, i) => {
  const rack = document.createElement('div');
  rack.className = `edurack edurack${i+1}`;
  rack.innerHTML = `
    <div class="rack1">
      <h4>${edu.Title}</h4>
      <div class="greenbox">${edu.Status}</div>
    </div>
    <div class="rack2">
      <div class="rackitem1">
        <img class="xpicon" src="/pics/officeitem.svg" alt="Office building icon">
        <a>${edu.School}</a>
      </div>
      <div class="rackitem2">
        <img class="xpicon" src="/pics/location.svg" alt="Location pin icon">
        <a>${edu.City}</a>
      </div>
      <div class="rackitem3">
        <img class="xpicon2" src="/pics/calender.png" alt="Calendar icon">
        <a>${edu.Date}</a>
      </div>
    </div>
    <hr>
  `;
  educationContainer.appendChild(rack);
});





  } catch (error) {
    console.log(error);
  }
}
