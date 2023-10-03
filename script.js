const render = () => {
    const tareas = [
        {
            id: 1,
            nombre: "Enseñar fundamentos",
            completada: false
        },

        {
            id: 2,
            nombre: "Dormir",
            completada: true
        },

        {
            id: 3,
            nombre: "Desayunar",
            completada: true
        },

    ]

    const crearTarea = (id, nombreTarea, estaCompletada) => {
        const divisor = document.createElement("div");
        divisor.innerHTML = nombreTarea;
        divisor.setAttribute("id", id);
        divisor.classList.add("tareas__tarea");

        if(estaCompletada === true) {
            divisor.classList.add("tareas__tarea--completada");
        } else {
            divisor.classList.add("tareas__tarea--pendiente");
        }
        return divisor;
    
    }

    const sectionTareas = document.querySelector(".tareas"); 
        for (const tarea of tareas) {
            const divTarea = crearTarea(tarea.id, tarea.nombre, tarea.completada);
            sectionTareas.appendChild(divTarea);
        

    }
}

window.onload = render;

