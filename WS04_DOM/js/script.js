// Task 1 : changing content
// pohjatyö
const taskOneHeading = document.querySelector("#taskOneHeading");
const changeHeadingButton = document.querySelector("#changeHeadingButton");
const changeStyleButton = document.querySelector("#changeStyleButton");
const changeTextButton = document.querySelector("#changeTextButton");
const animalText = document.querySelector("#animalText");

// 1. otsikon tekstin vaihto
changeHeadingButton.addEventListener("click", () => {
    taskOneHeading.textContent = "Updated heading!";
});

// 2. lisää/poista 'highlight'-luokka otsikosta
changeStyleButton.addEventListener("click", () => {
    taskOneHeading.classList.toggle("highlight");
});

// 3. eläintekstin vaihto
changeTextButton.addEventListener("click", () => {
    animalText.textContent = "I've seen three foxes in the wild this week :)";
});

// Task 2: creating elements with JavaScript
// 1. Select the element below with the ID animalContent. 
const animalContent = document.querySelector("#animalContent");

// alatehtävät 2,3,4,6 
const heading3 = document.createElement("h3");
heading3.textContent = "Animal of the Day";
heading3.classList.add("animal-heading");

const paragraph = document.createElement("p");
paragraph.textContent = "The Snow Leopard lives in the mountains";

const img = document.createElement("img");
img.src = "images/snow_leopard.png";
img.alt = "Snow Leopard";

// 5. Attach the elements to the page with append(). 
animalContent.append(heading3, paragraph, img);

// Show ja Hide painikkeet
const hideAnimalButton = document.querySelector("#hideAnimalButton");
const showAnimalButton = document.querySelector("#showAnimalButton");

hideAnimalButton.addEventListener("click", () => {
    animalContent.style.display = "none";
});

showAnimalButton.addEventListener("click", () => {
    animalContent.style.display = "block";
});


// Task 3: Selecting an animal
// käytän annettua esimerkkiä
const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

// listener for the select element from the drop down list.

animalSelect.addEventListener("change", function () {

    const selectedAnimal = animalSelect.value;

    // function to update the DOM based on the selected animal

    console.log("Selected animal:", selectedAnimal);

    if (selectedAnimal === "tiger") {
        animalName.textContent = "Tiger";
        animalImage.src = "images/tiger.png";
        animalImage.alt = "Tiger";
        animalDescription.textContent =
            "Tigers are the largest members of the cat family.";
    }

    if (selectedAnimal === "elephant") {
        animalName.textContent = "Elephant";
        animalImage.src = "images/elephant.png";
        animalImage.alt = "Elephant";
        animalDescription.textContent =
            "Elephants are the largest land animals on Earth.";
    }

    if (selectedAnimal === "penguin") {
        animalName.textContent = "Penguin";
        animalImage.src = "images/penguin.png";
        animalImage.alt = "Penguin";
        animalDescription.textContent =
            "Penguins are flightless birds that live in the Southern Hemisphere.";
    }

    if (selectedAnimal === "panda") {
        animalName.textContent = "Panda";
        animalImage.src = "images/panda.png";
        animalImage.alt = "Panda";
        animalDescription.textContent =
            "Giant pandas are native to China and are known for their distinctive black and white fur.";
    }   

// mouseenter ja mouseleave
animalImage.addEventListener("mouseenter", () => {
        animalImage.classList.add("image-highlight");
    });

    animalImage.addEventListener("mouseleave", () => {
        animalImage.classList.remove("image-highlight");
    });

});

// Task 4: Adding animal observations
const animalForm = document.querySelector("#animalForm");
const observationAnimal = document.querySelector("#observationAnimal");
const observationLocation = document.querySelector("#observationLocation");
const observationDate = document.querySelector("#observationDate");
const observationTableBody = document.querySelector("#observationTableBody");

animalForm.addEventListener("submit", (event) => {
    // Estetään lomakkeen oletustoiminto
    event.preventDefault();

    const animalVal = observationAnimal.value.trim();
    const locationVal = observationLocation.value.trim();
    const dateVal = observationDate.value;

    // tyhjien kenttien tarkistus
    if (!animalVal || !locationVal || !dateVal) {
        alert("Please fill in all fields.");
        return;
    }

    // uusi rivi ja solut
    const newRow = document.createElement("tr");

    const tdAnimal = document.createElement("td");
    tdAnimal.textContent = animalVal;

    const tdLocation = document.createElement("td");
    tdLocation.textContent = locationVal;

    const tdDate = document.createElement("td");
    tdDate.textContent = dateVal;

    // solujen lisäys
    newRow.append(tdAnimal, tdLocation, tdDate);

    // rivin lisäys tbody elementtiin
    observationTableBody.appendChild(newRow);

});