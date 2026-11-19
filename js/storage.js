const Storage = {
    guardar(clave, valor) {
        localStorage.setItem(clave, JSON.stringify(valor));
    },

    obtener(clave, valorPorDefecto = null) {
        const dato = localStorage.getItem(clave);
        return dato ? JSON.parse(dato) : valorPorDefecto;
    },

    eliminar(clave) {
        localStorage.removeItem(clave);
    }
};
