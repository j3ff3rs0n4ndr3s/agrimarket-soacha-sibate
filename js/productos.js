const productosBase = [
  { id: 1, nombre: "Papa criolla", precio: 4500, unidad: "kg", productor: "Martha Rojas", categoria: "tuberculos", disponible: true, imagen: "../assets/img/papa-criolla.jpg", fecha: 24 },
  { id: 2, nombre: "Papa pastusa", precio: 3900, unidad: "kg", productor: "Jorge Ramírez", categoria: "tuberculos", disponible: true, imagen: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Potatoes.jpg", fecha: 23 },
  { id: 3, nombre: "Tomate chonto", precio: 5000, unidad: "kg", productor: "Carlos Méndez", categoria: "verduras", disponible: true, imagen: "../assets/img/tomate.jpg", fecha: 22 },
  { id: 4, nombre: "Tomate cherry", precio: 6800, unidad: "kg", productor: "Sandra Ruiz", categoria: "verduras", disponible: true, imagen: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/Cherry_Tomatoes.jpg/960px-Cherry_Tomatoes.jpg", fecha: 21 },
  { id: 5, nombre: "Zanahoria", precio: 3800, unidad: "kg", productor: "Ana Torres", categoria: "verduras", disponible: true, imagen: "../assets/img/zanahoria.jpg", fecha: 20 },
  { id: 6, nombre: "Lechuga crespa", precio: 2500, unidad: "und", productor: "Luis Pérez", categoria: "verduras", disponible: true, imagen: "../assets/img/lechuga.jpg", fecha: 19 },

  { id: 7, nombre: "Lechuga batavia", precio: 2800, unidad: "und", productor: "Diana Vargas", categoria: "verduras", disponible: true, imagen: "../assets/img/productos/lechuga-batavia.jpg", fecha: 18 },
  { id: 8, nombre: "Cebolla larga", precio: 4200, unidad: "kg", productor: "Pedro Cárdenas", categoria: "verduras", disponible: true, imagen: "../assets/img/productos/cebolla-larga.webp", fecha: 17 },
  { id: 9, nombre: "Cebolla cabezona", precio: 4700, unidad: "kg", productor: "Gloria Sánchez", categoria: "verduras", disponible: true, imagen: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Onion.jpg/960px-Onion.jpg", fecha: 16 },
  { id: 10, nombre: "Cilantro", precio: 1800, unidad: "manojo", productor: "Hernando López", categoria: "verduras", disponible: true, imagen: "../assets/img/productos/cilantro.jpg", fecha: 15 },
  { id: 11, nombre: "Espinaca", precio: 3200, unidad: "manojo", productor: "Diana Vargas", categoria: "verduras", disponible: true, imagen: "../assets/img/productos/espinaca.jpg", fecha: 14 },
  { id: 12, nombre: "Pepino cohombro", precio: 3500, unidad: "kg", productor: "Óscar Medina", categoria: "verduras", disponible: true, imagen: "../assets/img/productos/pepino-cohombro.jpg", fecha: 13 },

  { id: 13, nombre: "Habichuela", precio: 5400, unidad: "kg", productor: "Martha Rojas", categoria: "verduras", disponible: true, imagen: "../assets/img/productos/habichuela.jpg", fecha: 12 },
  { id: 14, nombre: "Arveja verde", precio: 6500, unidad: "kg", productor: "Jorge Ramírez", categoria: "granos", disponible: true, imagen: "../assets/img/productos/arveja.jpg", fecha: 11 },
  { id: 15, nombre: "Pimentón rojo", precio: 6200, unidad: "kg", productor: "Carlos Méndez", categoria: "verduras", disponible: true, imagen: "../assets/img/productos/pimenton.jpg", fecha: 10 },
  { id: 16, nombre: "Remolacha", precio: 4100, unidad: "kg", productor: "Ana Torres", categoria: "verduras", disponible: true, imagen: "../assets/img/productos/remolacha.jpg", fecha: 9 },
  { id: 17, nombre: "Repollo", precio: 3600, unidad: "und", productor: "Pedro Cárdenas", categoria: "verduras", disponible: true, imagen: "../assets/img/productos/repollo.jpg", fecha: 8 },
  { id: 18, nombre: "Rábano", precio: 2900, unidad: "manojo", productor: "Gloria Sánchez", categoria: "verduras", disponible: true, imagen: "../assets/img/productos/rabano.jpg", fecha: 7 },

  { id: 19, nombre: "Aguacate", precio: 7500, unidad: "kg", productor: "Hernando López", categoria: "frutas", disponible: true, imagen: "../assets/img/productos/aguacate.jpg", fecha: 6 },
  { id: 20, nombre: "Maíz tierno", precio: 4000, unidad: "kg", productor: "Óscar Medina", categoria: "granos", disponible: true, imagen: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/A_shot_of_Sweet_corn.jpg/960px-A_shot_of_Sweet_corn.jpg", fecha: 5 },
  { id: 21, nombre: "Yuca", precio: 3300, unidad: "kg", productor: "Sandra Ruiz", categoria: "tuberculos", disponible: true, imagen: "../assets/img/productos/yuca.webp", fecha: 4 },
  { id: 22, nombre: "Plátano", precio: 4200, unidad: "kg", productor: "Luis Pérez", categoria: "frutas", disponible: true, imagen: "../assets/img/productos/platano.jpg", fecha: 3 },
  { id: 23, nombre: "Fresa", precio: 9000, unidad: "kg", productor: "Diana Vargas", categoria: "frutas", disponible: true, imagen: "../assets/img/productos/fresas.jpg", fecha: 2 },
  { id: 24, nombre: "Mora", precio: 7800, unidad: "kg", productor: "Jorge Ramírez", categoria: "frutas", disponible: true, imagen: "../assets/img/productos/mora.jpg", fecha: 1 }
];

const PAGE_SIZE = 6;
let paginaActual = 1;
let filtrosAplicados = {
  texto: "",
  categorias: [],
  min: null,
  max: null,
  disponibles: false,
  agotados: false
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function favoritosGuardados() {
  try {
    return JSON.parse(localStorage.getItem("agrimarket_favoritos") || "[]");
  } catch {
    return [];
  }
}

function guardarFavoritos(ids) {
  localStorage.setItem("agrimarket_favoritos", JSON.stringify(ids));
}

function toggleFavorito(id) {
  const favoritos = favoritosGuardados();
  const existe = favoritos.includes(id);
  const nuevos = existe ? favoritos.filter(item => item !== id) : [...favoritos, id];
  guardarFavoritos(nuevos);
  render();
}

function leerFiltros() {
  const texto = ($("#catalog-search")?.value || $("#sidebar-search")?.value || "").trim().toLowerCase();
  const categorias = $$('input[name="categoria"]:checked').map(input => input.value);
  const minValue = Number($("#precio-min")?.value);
  const maxValue = Number($("#precio-max")?.value);

  filtrosAplicados = {
    texto,
    categorias,
    min: $("#precio-min")?.value ? minValue : null,
    max: $("#precio-max")?.value ? maxValue : null,
    disponibles: Boolean($("#disponibles")?.checked),
    agotados: Boolean($("#agotados")?.checked)
  };
}

function aplicarFiltros(productos) {
  return productos.filter(producto => {
    const coincideTexto =
      !filtrosAplicados.texto ||
      producto.nombre.toLowerCase().includes(filtrosAplicados.texto) ||
      producto.productor.toLowerCase().includes(filtrosAplicados.texto);

    const coincideCategoria =
      filtrosAplicados.categorias.length === 0 ||
      filtrosAplicados.categorias.includes(producto.categoria);

    const coincideMin = filtrosAplicados.min === null || producto.precio >= filtrosAplicados.min;
    const coincideMax = filtrosAplicados.max === null || producto.precio <= filtrosAplicados.max;

    let coincideDisponibilidad = true;
    if (filtrosAplicados.disponibles && !filtrosAplicados.agotados) coincideDisponibilidad = producto.disponible;
    if (!filtrosAplicados.disponibles && filtrosAplicados.agotados) coincideDisponibilidad = !producto.disponible;

    return coincideTexto && coincideCategoria && coincideMin && coincideMax && coincideDisponibilidad;
  });
}

function ordenarProductos(productos) {
  const orden = $("#ordenar-productos")?.value || "recientes";
  const copia = [...productos];

  if (orden === "precio-asc") copia.sort((a, b) => a.precio - b.precio);
  if (orden === "precio-desc") copia.sort((a, b) => b.precio - a.precio);
  if (orden === "nombre") copia.sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));
  if (orden === "recientes") copia.sort((a, b) => b.fecha - a.fecha);

  return copia;
}

function formatoPrecio(valor) {
  return new Intl.NumberFormat("es-CO").format(valor);
}

function tarjetaProducto(producto, favoritos) {
  const esFavorito = favoritos.includes(producto.id);

  return `
    <article class="catalog-product-card">
      <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">
      <div class="product-content">
        <h3>${producto.nombre}</h3>
        <strong>$${formatoPrecio(producto.precio)}/${producto.unidad}</strong>
        <p>Productor: ${producto.productor}</p>
        <div class="product-actions">
          <a class="btn btn-primary product-button" href="producto.html?producto=${producto.id}">Ver producto</a>
          <button
            class="favorite ${esFavorito ? "is-favorite" : ""}"
            type="button"
            data-favorito="${producto.id}"
            aria-label="${esFavorito ? "Quitar" : "Agregar"} ${producto.nombre} ${esFavorito ? "de" : "a"} favoritos"
          >${esFavorito ? "♥" : "♡"}</button>
        </div>
      </div>
    </article>
  `;
}

function renderPaginacion(total) {
  const contenedor = $("#catalog-pagination");
  if (!contenedor) return;

  const paginas = Math.max(1, Math.ceil(total / PAGE_SIZE));
  if (paginaActual > paginas) paginaActual = paginas;

  let html = "";
  for (let pagina = 1; pagina <= paginas; pagina++) {
    html += `<button class="page-number ${pagina === paginaActual ? "active" : ""}" type="button" data-pagina="${pagina}">${pagina}</button>`;
  }

  if (paginaActual < paginas) {
    html += `<button class="page-next" type="button" data-pagina="${paginaActual + 1}">Siguiente →</button>`;
  }

  contenedor.innerHTML = html;

  $$("[data-pagina]").forEach(boton => {
    boton.addEventListener("click", () => {
      paginaActual = Number(boton.dataset.pagina);
      render();
      document.querySelector(".catalog-content")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function render() {
  const grid = $("#catalog-product-grid");
  if (!grid) return;

  const filtrados = ordenarProductos(aplicarFiltros(productosBase));
  const inicio = (paginaActual - 1) * PAGE_SIZE;
  const pagina = filtrados.slice(inicio, inicio + PAGE_SIZE);
  const favoritos = favoritosGuardados();

  $("#product-count").textContent = filtrados.length;
  grid.innerHTML = pagina.map(producto => tarjetaProducto(producto, favoritos)).join("");

  const vacio = $("#empty-state");
  if (vacio) vacio.hidden = filtrados.length !== 0;

  renderPaginacion(filtrados.length);

  $$("[data-favorito]").forEach(boton => {
    boton.addEventListener("click", () => toggleFavorito(Number(boton.dataset.favorito)));
  });
}

function sincronizarBuscadores(origen, destino) {
  if (!origen || !destino) return;
  origen.addEventListener("input", () => {
    destino.value = origen.value;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const buscadorPrincipal = $("#catalog-search");
  const buscadorLateral = $("#sidebar-search");

  sincronizarBuscadores(buscadorPrincipal, buscadorLateral);
  sincronizarBuscadores(buscadorLateral, buscadorPrincipal);

  $("#aplicar-filtros")?.addEventListener("click", () => {
    paginaActual = 1;
    leerFiltros();
    render();
  });

  $("#ordenar-productos")?.addEventListener("change", () => {
    paginaActual = 1;
    render();
  });

  buscadorPrincipal?.addEventListener("input", () => {
    paginaActual = 1;
    filtrosAplicados.texto = buscadorPrincipal.value.trim().toLowerCase();
    render();
  });

  buscadorLateral?.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      event.preventDefault();
      paginaActual = 1;
      leerFiltros();
      render();
    }
  });

  filtrosAplicados = {
    texto: "",
    categorias: [],
    min: null,
    max: null,
    disponibles: false,
    agotados: false
  };

  render();
});
