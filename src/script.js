let homepage = document.querySelector(".homepage")
let desktop = document.getElementById("desktop");
let tablet = document.getElementById("tablet");
let mobileOpen = document.getElementById("mobileOpen");
let mobileClosed = document.getElementById("mobileClosed");

if(window.innerWidth>1024){
  tablet.style.display ="none";
  mobileOpen.style.display = "none";
  mobileClosed.style.display = "none";
}
else if (window.innerWidth>=768 && window.innerWidth<=1024){
  desktop.style.display ="none";
  mobileOpen.style.display = "none";
  mobileClosed.style.display = "none";
}
else if(window.innerWidth<768){
  desktop.style.display ="none";
  mobileOpen.style.display = "none";
  tablet.style.display ="none";
}

const menuClose = ()=>{
  mobileOpen.style.display ="none";
  mobileClosed.style.display ="block";
}
const menuOpen = () =>{
  mobileOpen.style.display ="block";
  mobileClosed.style.display ="none";
}

const data ={
  "destinations": [
    {
      "name": "Moon",
      "images": {
        "png": "./src/assets/destination/image-moon.png",
        "webp": "./src/assets/destination/image-moon.webp"
      },
      "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384,400 km",
      "travel": "3 days"
    },
    {
      "name": "Mars",
      "images": {
        "png": "./src/assets/destination/image-mars.png",
        "webp": "./src/assets/destination/image-mars.webp"
      },
      "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      "distance": "225 mil. km",
      "travel": "9 months"
    },
    {
      "name": "Europa",
      "images": {
        "png": "./src/assets/destination/image-europa.png",
        "webp": "./src/assets/destination/image-europa.webp"
      },
      "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      "distance": "628 mil. km",
      "travel": "3 years"
    },
    {
      "name": "Titan",
      "images": {
        "png": "./src/assets/destination/image-titan.png",
        "webp": "./src/assets/destination/image-titan.webp"
      },
      "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      "distance": "1.6 bil. km",
      "travel": "7 years"
    }
  ],
  "crew": [
    {
      "name": "Douglas Hurley",
      "images": {
        "png": "./src/assets/crew/image-douglas-hurley.png",
        "webp": "./src/assets/crew/image-douglas-hurley.webp"
      },
      "role": "Commander",
      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      "name": "Mark Shuttleworth",
      "images": {
        "png": "./src/assets/crew/image-mark-shuttleworth.png",
        "webp": "./src/assets/crew/image-mark-shuttleworth.webp"
      },
      "role": "Mission Specialist",
      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
      "name": "Victor Glover",
      "images": {
        "png": "./src/assets/crew/image-victor-glover.png",
        "webp": "./src/assets/crew/image-victor-glover.webp"
      },
      "role": "Pilot",
      "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
      "name": "Anousheh Ansari",
      "images": {
        "png": "./src/assets/crew/image-anousheh-ansari.png",
        "webp": "./src/assets/crew/image-anousheh-ansari.webp"
      },
      "role": "Flight Engineer",
      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
  ],
  "technology": [
    {
      "name": "Launch vehicle",
      "images": {
        "portrait": "./src/assets/technology/image-launch-vehicle-portrait.jpg",
        "landscape": "./src/assets/technology/image-launch-vehicle-landscape.jpg"
      },
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      "name": "Spaceport",
      "images": {
        "portrait": "./src/assets/technology/image-spaceport-portrait.jpg",
        "landscape": "./src/assets/technology/image-spaceport-landscape.jpg"
      },
      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      "name": "Space capsule",
      "images": {
        "portrait": "./src/assets/technology/image-space-capsule-portrait.jpg",
        "landscape": "./src/assets/technology/image-space-capsule-landscape.jpg"
      },
      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ]
};

let tap = homepage.getAttribute("id")
if(window.innerWidth>1024){
  homepage.style.backgroundImage = `url("./src/assets/${tap}/background-${tap}-desktop.jpg")`
}
else if (window.innerWidth>=768 && window.innerWidth<=1024){
  homepage.style.backgroundImage = `url("./src/assets/${tap}/background-${tap}-tablet.jpg")`
}
else if(window.innerWidth<768){
  homepage.style.backgroundImage = `url("./src/assets/${tap}/background-${tap}-mobile.jpg")`
}

if(tap ==="destination"){
  let destinationImg = document.getElementById("destinationImg");
  let imgbox = document.querySelector(".imgBox");
  let planetName = document.getElementById("planetName");
  let planetInfo = document.getElementById("planetInfo");
  let avgDis = document.getElementById("avgDis");
  let estTrav = document.getElementById("estTrav")
  let currentImg = imgbox.getAttribute("id");
  

  if(currentImg==="Moon"){
    destinationImg.src = data.destinations[0].images.webp;
    planetName.innerHTML = "Moon";
    planetInfo.innerHTML = data.destinations[0].description;
    avgDis.innerHTML = data.destinations[0].distance;
    estTrav.innerHTML = data.destinations[0].travel;
  }
  else if(currentImg==="Mars"){
    destinationImg.src = data.destinations[1].images.webp;
    planetName.innerHTML = "Mars";
    planetInfo.innerHTML = data.destinations[1].description;
    avgDis.innerHTML = data.destinations[1].distance;
    estTrav.innerHTML = data.destinations[1].travel;
  }
  else if(currentImg ==="Europa"){
    destinationImg.src = data.destinations[2].images.webp;
    planetName.innerHTML = "Europa";
    planetInfo.innerHTML = data.destinations[2].description;
    avgDis.innerHTML = data.destinations[2].distance;
    estTrav.innerHTML = data.destinations[2].travel;
  }
  else if(currentImg ==="Titan"){
    destinationImg.src = data.destinations[3].images.webp;
    planetName.innerHTML = "Titan";
    planetInfo.innerHTML = data.destinations[3].description;
    avgDis.innerHTML = data.destinations[3].distance;
    estTrav.innerHTML = data.destinations[3].travel;
  }
}

if(tap ==="crew"){
  let crewImg = document.getElementById("crewImg");
  let imgbox = document.querySelector(".crewImgBox");
  let currentImg = imgbox.getAttribute("id");
  let title = document.getElementById("title");
  let crewName = document.getElementById("crewName");
  let crewInfo = document.getElementById("crewInfo");
  
  if(currentImg==="Commander"){
    crewImg.src = data.crew[0].images.webp;
    title.innerHTML = currentImg;
    crewName.innerHTML = data.crew[0].name;
    crewInfo.innerHTML = data.crew[0].bio;
    document.getElementById("0").style.color = "#f7f7f7";
  }
  else if(currentImg==="Mission Specialist"){
    crewImg.src = data.crew[1].images.webp;
    title.innerHTML = currentImg;
    crewName.innerHTML = data.crew[1].name;
    crewInfo.innerHTML = data.crew[1].bio;
    document.getElementById("1").style.color = "#f7f7f7";
  }
  else if(currentImg ==="Pilot"){
    crewImg.src = data.crew[2].images.webp;
    title.innerHTML = currentImg;
    crewName.innerHTML = data.crew[2].name;
    crewInfo.innerHTML = data.crew[2].bio;
    document.getElementById("2").style.color = "#f7f7f7";
  }
  else if(currentImg ==="Flight Engineer"){
    crewImg.src = data.crew[3].images.webp;
    title.innerHTML = currentImg;
    crewName.innerHTML = data.crew[3].name;
    crewInfo.innerHTML = data.crew[3].bio;
    document.getElementById("3").style.color = "#f7f7f7";
  }
}

if(tap==="technology"){
  let techImg = document.getElementById("techImg");
  let imgbox = document.querySelector(".techImgBox");
  let currentImg = imgbox.getAttribute("id");
  let techName = document.getElementById("techName");
  let techInfo = document.getElementById("techInfo");
  
  if(currentImg==="Vehicle"){
    if(window.innerWidth>1024){
      techImg.src = data.technology[0].images.portrait;
    }
    else if(window.innerWidth<=1024){
      techImg.src = data.technology[0].images.landscape;
    }
    techName.innerHTML = data.technology[0].name;
    techInfo.innerHTML = data.technology[0].description;
    document.getElementById("0").style.background = "#f7f7f7";
    document.getElementById("0").style.color = "#080808";
    document.getElementById("0").style.borderColor = "#f7f7f7";
  }
  else if(currentImg==="Spaceport"){
    if(window.innerWidth>1024){
      techImg.src = data.technology[1].images.portrait;
    }
    else if(window.innerWidth<=1024){
      techImg.src = data.technology[1].images.landscape;
    }
    techName.innerHTML = data.technology[1].name;
    techInfo.innerHTML = data.technology[1].description;
    document.getElementById("1").style.background = "#f7f7f7";
    document.getElementById("1").style.color = "#080808";
    document.getElementById("0").style.borderColor = "#f7f7f7";
  }
  else if(currentImg ==="Capsure"){
    if(window.innerWidth>1024){
      techImg.src = data.technology[2].images.portrait;
    }
    else if(window.innerWidth<=1024){
      techImg.src = data.technology[2].images.landscape;
    }
    techName.innerHTML = data.technology[2].name;
    techInfo.innerHTML = data.technology[2].description;
    document.getElementById("2").style.background = "#f7f7f7";
    document.getElementById("2").style.color = "#080808";
    document.getElementById("0").style.borderColor = "#f7f7f7";
  }
}