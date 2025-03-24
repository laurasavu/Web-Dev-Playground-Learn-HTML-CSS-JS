document.addEventListener("DOMContentLoaded", function() {
    //scriptul va rula doar după ce întreaga pagină a fost încărcată.
    //Selectarea elementelor HTML
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const addButton = document.getElementById("add-btn");
    const contactList = document.getElementById("contact-list");


    let editIndex = -1;
    let contacts = []; //listă unde vom stoca contactele.

    function renderContacts() {
        contactList.innerHTML = "";
        contacts.forEach((contact, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${contact.name}</td>
                <td>${contact.phone}</td>
                <td><button onclick="editContact(${index})">Modifică</button></td>
                <td><button onclick="deleteContact(${index})">Șterge</button></td>
            `;
            contactList.appendChild(row);
        });
    }

    function addOrUpdateContact() {
        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();
        
        if (name === "" || phone === "") {
            alert("Completați ambele câmpuri!");
            return;
        }

        if (editIndex === -1) {
            contacts.push({ name, phone });
        } else {
            contacts[editIndex] = { name, phone };
            editIndex = -1;
            addButton.textContent = "ADAUGĂ CONTACT";
        }
        
        nameInput.value = "";
        phoneInput.value = "";
        renderContacts();
    }

    function editContact(index) {
        nameInput.value = contacts[index].name;
        phoneInput.value = contacts[index].phone;
        editIndex = index;
        addButton.textContent = "MODIFICĂ CONTACT";
    }

    function deleteContact(index) {
        contacts.splice(index, 1);
        renderContacts();
    }

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            addOrUpdateContact();
        }
    }

    addButton.addEventListener("click", addOrUpdateContact);
    phoneInput.addEventListener("keypress", handleKeyPress);
});