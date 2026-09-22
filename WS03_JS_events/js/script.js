// Add your JavaScript solutions here.

// exercise 1

function showTable() {
    // contents for table
    const animal = "Tiger";
    const habitat = "Forest";
    const diet = "Carnivore";

    const animal1 = "Elephant";
    const habitat1 = "Savanna";
    const diet1 = "Herbivore";

    // table with animal data and backticks
    const tableHTML = `
        <table class="display">
            <thead>
                <tr>
                    <th>Animal</th>
                    <th>Habitat</th>
                    <th>Diet</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${animal}</td>
                    <td>${habitat}</td>
                    <td>${diet}</td>
                </tr>
                <tr>
                    <td>${animal1}</td>
                    <td>${habitat1}</td>
                    <td>${diet1}</td>
                </tr>
            </tbody>
        </table>
    `;

    // 5. Select the destination element and insert the table (tätä en ihan ymmärtänyt mut studio code tän mulle täytti ja toimii)
    const container = document.querySelector("#tableContainer");
    if (container) {
        container.innerHTML = tableHTML;
    }
}

// exercise 2

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Select headings using document.querySelector() and CSS selectors
    // Selects <h2> with text "Exercise 2..." (or by finding its position)
    const HeadingEx2 = document.querySelectorAll("h2")[1]; 
    const HeadingEx1 = document.querySelector("h2"); // First <h2> on page (Exercise 1)

    // hiiren tallomistapahtuma teht 2 otsikolle
    if (HeadingEx2) {
        HeadingEx2.addEventListener("mouseover", () => {
            console.log("Stepped over me with a mouse!");
        });
    }

    // hiiren klikkaustapahtuma teht 1 otsikolle
    if (HeadingEx1) {
        HeadingEx1.addEventListener("click", () => {
            HeadingEx1.style.color = "red";
            HeadingEx1.innerHTML = "Bye bye mouse!";
        });
    }

});

// exercise 3

const textarea = document.querySelector("#feedback");
const statusSpan = document.querySelector("#status");
const charcountSpan = document.querySelector("#charcount");
const previewDiv = document.querySelector("#preview");

if (textarea) {
    // 1. Focus event: Show status message and highlight background
    textarea.addEventListener("focus", () => {
        statusSpan.textContent = "Writing feedback...";
        textarea.style.backgroundColor = "#fffde7"; // Soft yellow background
    });

    // 2. Blur event: Clear status message and restore original background
    textarea.addEventListener("blur", () => {
        statusSpan.textContent = "";
        textarea.style.backgroundColor = ""; // Restores CSS default
    });

    // 3. Input event: Update character count and preview in real-time
    textarea.addEventListener("input", () => {
        const currentLength = textarea.value.length;

        // Update character count (format: X/200)
        charcountSpan.textContent = `${currentLength}/200`;

        // Update live preview (show fallback text if empty)
        previewDiv.textContent = textarea.value || "(The preview will appear here)";
    });
}
// rehellisesti tämä meni visual studion coden tabia painelemalla läpi

// exercise 4

const feedbackForm = document.querySelector("#feedbackForm");

if (feedbackForm) {
    feedbackForm.addEventListener("submit", (event) => {
        // 1. Prevent default page reload
        event.preventDefault();

        // Get value and trim whitespace from start and end
        const feedbackText = textarea.value.trim();
        const textLength = feedbackText.length;

        // 2. Validate character length (must be between 10 and 200)
        if (textLength < 10 || textLength > 200) {
            statusSpan.style.color = "red";
            statusSpan.textContent = "Error: Feedback must be between 10 and 200 characters long.";
        } else {
            // 3. Clear the field and show success message
            statusSpan.style.color = "green";
            statusSpan.textContent = "Thank you for your feedback!";

            // Reset inputs and preview
            textarea.value = "";
            charcountSpan.textContent = "0/200";
            previewDiv.textContent = "(The preview will appear here)";
        }
    });
}

//tämä myös, pahoittelut nyt jää vähän ajatus hommasta pois

// exercise 5

const keybox = document.querySelector("#keybox");
const keyinfo = document.querySelector("#keyinfo");

document.addEventListener("keydown", (event) => {
    // 1. Log the event object to the console
    console.log(event);

    // 2. Display key and code in #keyinfo
    keyinfo.textContent = `Key: ${event.key} | Code: ${event.code}`;

    // 3. Display the pressed key in a large font inside #keybox
    keybox.innerHTML = `<span style="font-size: 2.5em; font-weight: bold;">${event.key}</span>`;
});ASD