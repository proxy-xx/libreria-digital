const manuales = [
  {
    numeroSerie: "f2333gh",
    nombre: "manual de mantenimiento torno-f2333gh.pdf",
    url: "https://drive.google.com/file/d/1zWJ_6bgQZAXIQvfw0tcAEFKAadUTPRip/view"
  },
  {
    numeroSerie: "hg455r",
    nombre: "manual de mantenimiento fresadora-hg455r.pdf",
    url: "https://drive.google.com/file/d/1qm6QqOob9tmCFc451kZqAgK1ad26WLZS/view"
  },
  {
    numeroSerie: "fr456d",
    nombre: "manual de mantenimiento cnc-fr456d.pdf",
    url: "https://drive.google.com/file/d/12NTyWk9sy3tdBZ0AQFhz3-XvLiXLt6mh/view"
  },
  {
    numeroSerie: "de342f",
    nombre: "manual de mantenimiento prensa-de342f.pdf",
    url: "https://drive.google.com/file/d/1GAynO-h54VKisZKG_QNLv6xMmfdRGUFd/view"
  },
  {
    numeroSerie: "gh345f",
    nombre: "manual de mantenimiento radial-gh345f.pdf",
    url: "https://drive.google.com/file/d/1tJQkGUO2qIw0O0_FMC7HTMm9GwwVg8UJ/view"
  },
  {
    numeroSerie: "trm39",
    nombre: "manual de uso multímetro-trm39.pdf",
    url: "https://drive.google.com/file/d/19SCdrOxiDQpt8hWhJcx7zUa5OQLhOxr_/view"
  },
  {
    numeroSerie: "r4ic1",
    nombre: "manual de uso soldadora-r4ic1.pdf",
    url: "https://drive.google.com/file/d/1yN7Z3ZMLv_nbF9TxdVE-AoPCE1sx9U6X/view"
  },
   {
    numeroSerie: "simb1234",
    nombre: "manual de simbolos simb1234.pdf",
    url: "https://drive.google.com/drive/folders/12SvPRwNHSoaYe1L_CzrFHPYUcLnzsuPR?usp=drive_link"
  }
];


function buscarManual() {
  const input = document.getElementById("buscador").value.toLowerCase().trim();
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = "";

  if (input === "") return;

  const resultados = manuales.filter(manual =>
    manual.numeroSerie.toLowerCase().includes(input) ||
    manual.nombre.toLowerCase().includes(input)
  );

  if (resultados.length === 0) {
    resultadosDiv.innerHTML = "<p>No se encontraron manuales con ese número de serie.</p>";
    return;
  }

  resultados.forEach(manual => {
    const div = document.createElement("div");
    div.className = "manual";
    div.onclick = () => window.open(manual.url, "_blank");

    div.innerHTML = `
      <span class="manual-icono"><i class="fas fa-file-alt"></i></span>
      <span class="manual-texto">${manual.nombre}</span>
    `;

    resultadosDiv.appendChild(div);
  });
}

function limpiarBusqueda() {
  document.getElementById("buscador").value = "";
  document.getElementById("resultados").innerHTML = "";
}

