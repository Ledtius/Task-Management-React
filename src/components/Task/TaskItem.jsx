const TaskItem = ({ idTask, TaskName, taskDescrip, taskStatus }) => {
  return (
    <li>
      <article>
        <input type="checkbox" name="" id="" />
        <section>
          <header>
            <span>{TaskName}</span>
            <button>Editar</button>
          </header>
          {/* Panel cuando das a editar */}
          <div>
            <input type="text" placeholder={"Editando nombre..."} />
            <nav>
              <button>Aceptar</button>
              <button>Cancelar</button>
            </nav>
          </div>
          <footer>
            <small>Añadir descripción</small>
            <button>Añadir</button>
          </footer>
          {/* Cuando se añada la tarea */}
          <div>
            <small>{taskDescrip}</small>
            <button>Editar</button>
          </div>

          {/* Panel cuando das a editar */}
          <div>
            <input type="text" placeholder={"Editando descripción..."} />
            <nav>
              <button>Aceptar</button>
              <button>Cancelar</button>
            </nav>
          </div>
        </section>
        <button>Eliminar</button>
      </article>
    </li>
  );
};

export default TaskItem;
