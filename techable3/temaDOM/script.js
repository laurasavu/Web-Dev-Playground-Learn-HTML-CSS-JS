const listaElevi = [];
const noteElevi = {};

// Adăugarea unui elev
document.getElementById("adauga_elev").addEventListener("click", adaugaElev);
document.getElementById("nume_elev").addEventListener("keypress", (e) => {
  if (e.key === "Enter") adaugaElev();
});

function adaugaElev() {
  const nume = document.getElementById("nume_elev").value.trim();
  if (nume && !listaElevi.includes(nume)) {
    listaElevi.push(nume);
    noteElevi[nume] = [];
    updateTabelElevi();
  }
  document.getElementById("nume_elev").value = "";
}

function updateTabelElevi() {
  const tbody = document.querySelector("#tabel_elevi tbody");
  tbody.innerHTML = "";
  listaElevi.forEach((nume) => {
    const medie = noteElevi[nume].length
      ? (noteElevi[nume].reduce((a, b) => a + b, 0) / noteElevi[nume].length).toFixed(2)
      : 0;
    const row = `<tr>
      <td>${nume}</td>
      <td>${medie}</td>
      <td><button onclick="veziNote('${nume}')">Vezi Note</button></td>
    </tr>`;
    tbody.innerHTML += row;
  });
}

// Sortare elevi
document.getElementById("sorteaza_asc").addEventListener("click", () => {
  listaElevi.sort((a, b) => {
    const medieA = noteElevi[a].reduce((c, d) => c + d, 0) / (noteElevi[a].length || 1);
    const medieB = noteElevi[b].reduce((c, d) => c + d, 0) / (noteElevi[b].length || 1);
    return medieA - medieB;
  });
  updateTabelElevi();
});

document.getElementById("sorteaza_desc").addEventListener("click", () => {
  listaElevi.sort((a, b) => {
    const medieA = noteElevi[a].reduce((c, d) => c + d, 0) / (noteElevi[a].length || 1);
    const medieB = noteElevi[b].reduce((c, d) => c + d, 0) / (noteElevi[b].length || 1);
    return medieB - medieA;
  });
  updateTabelElevi();
});

// Vezi notele
function veziNote(nume) {
  document.getElementById("note_elev_wrapper").style.display = "block";
  document.getElementById("nume_selectat").innerText = `Note pentru: ${nume}`;

  updateTabelNote(nume);

  document.getElementById("adauga_nota").onclick = () => adaugaNota(nume);
  document.getElementById("valoare_nota").onkeypress = (e) => {
    if (e.key === "Enter") adaugaNota(nume);
  };

  document.getElementById("ascunde_note").onclick = () => {
    document.getElementById("note_elev_wrapper").style.display = "none";
  };
}

function adaugaNota(nume) {
  const valoare = parseFloat(document.getElementById("valoare_nota").value);
  if (!isNaN(valoare)) {
    noteElevi[nume].push(valoare);
    updateTabelNote(nume);
    updateTabelElevi();
  }
  document.getElementById("valoare_nota").value = "";
}

function updateTabelNote(nume) {
  const tbody = document.querySelector("#tabel_note tbody");
  tbody.innerHTML = "";
  noteElevi[nume].forEach((nota, index) => {
    tbody.innerHTML += `<tr><td>${nota}</td></tr>`;
  });

  // Sortare note
  document.getElementById("sorteaza_note_asc").onclick = () => {
    noteElevi[nume].sort((a, b) => a - b);
    updateTabelNote(nume);
  };

  document.getElementById("sorteaza_note_desc").onclick = () => {
    noteElevi[nume].sort((a, b) => b - a);
    updateTabelNote(nume);
  };
}
