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

    const cambiarStatusTarea = (divTarea) => {
        divTarea.addEventListener("click", (event) => {
            if (divTarea.classList.contains("tareas__tarea--completada")){
                divTarea.classList.remove("tareas__tarea--completada");
                divTarea.classList.add("tareas__tarea--pendiente");
        }else{
            divTarea.classList.remove("tareas__tarea--pendiente");
            divTarea.classList.add("tareas__tarea--completada");
        }
        });
    }

    const sectionTareas = document.querySelector(".tareas"); 

        for (const tarea of tareas) {
            const divTarea = crearTarea(tarea.id, tarea.nombre, tarea.completada);
            sectionTareas.appendChild(divTarea);
            cambiarStatusTarea(divTarea);
    }

    const formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        const nombreTarea = event.target.nombre.value;
        const statusTarea = event.target.status.checked;
        
        const idTarea = new Date().getTime();

        const divTarea = crearTarea(idTarea, nombreTarea, statusTarea);
        sectionTareas.appendChild(divTarea);
    })
}

window.onload = render;

