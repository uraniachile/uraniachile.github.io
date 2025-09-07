const types_insight = {
  "Z1": "Tu mente está hecha para la exploración: a menudo ves múltiples futuros antes de que otros se comprometan con uno. Esta capacidad de tolerar la ambigüedad es una fortaleza que alimenta tu creatividad y caminos poco convencionales.",
  "M1": "Te anclas en la claridad. Tiendes a enfocar tus esfuerzos alrededor de una intención central, lo que te da consistencia y profundidad. Este enfoque inicial te permite avanzar donde otros se dispersan.",

  "A2": "Piensas naturalmente en símbolos, metáforas y paralelos. Tus ideas suelen surgir de una síntesis intuitiva: ves cómo cosas distintas se conectan bajo la superficie, dándoles una profundidad poética.",
  "O2": "Confías en la arquitectura de la lógica. Ante la complejidad, organizas y aclaras. Esta disciplina mental te permite construir marcos sólidos que otros pueden seguir.",

  "T3": "Tu energía se amplifica con estímulos sensoriales ricos. Es probable que te inspiren los colores, texturas, sonidos o el movimiento — y canalizas esto en mayor compromiso y memoria.",
  "L3": "Proteges tu mundo interno del exceso. En ambientes tranquilos y ordenados, emergen tu claridad y enfoque. Sueles construir significado desde la quietud y la percepción sutil que otros no notan.",

  "E4": "Tu puerta hacia la comprensión es el cuerpo. Absorbes y expresas conocimiento a través de la acción — gestos, movimiento, herramientas. Aprendes tanto con las manos como con la mente.",
  "I4": "Tu fortaleza está en modelar internamente. Construyes sistemas complejos en tu imaginación antes de mostrarlos. Esta preparación silenciosa te permite resolver con precisión calmada.",

  "F5": "Eres emocionalmente transparente — lo que te mueve se vuelve visible, compartido y contagioso. Esta apertura puede catalizar grupos, energizar proyectos y dar forma visible a la pasión.",
  "S5": "Tiendes a transformar la emoción en privado. Tus sentimientos profundos se convierten en sabiduría a través del silencio, la escritura o el arte. Llevas una intensidad silenciosa que moldea tu forma de aprender, escuchar y liderar.",

  "U6": "Eres socialmente magnético. La conexión estimula tu aprendizaje, y las ideas florecen en intercambios en tiempo real. A menudo sintetizas ideas al compartirlas con otros.",
  "A6": "Eres socialmente selectivo, observador y reservado al principio — dejas que las dinámicas se asienten antes de revelar tu profundidad. Esta paciencia descubre verdades que otros no ven.",

  "K7": "Tu mente sigue chispazos — impredecibles pero ricos. Saltas entre ideas formando constelaciones no lineales que luego se convierten en formas novedosas.",
  "R7": "Construyes conocimiento como una catedral — capa por capa. Confías en el ritmo, la estabilidad y el progreso, lo que permite que tu maestría crezca y perdure.",

  "E8": "Eres adaptable y fluido en tus procesos — ajustas tu camino a medida que llega nueva información. Esta capacidad de respuesta te permite innovar y pivotar con naturalidad.",
  "O8": "Apuntas a la precisión y claridad desde el inicio. Un camino estructurado te da el andamiaje mental para entregar con coherencia y fiabilidad."
};

const types_insight_combined = {
  "Z1M1": "Tu curiosidad expansiva te impulsa a explorar múltiples caminos, pero tu claridad complementaria te permite a veces enfocar esa energía en una sola dirección fuerte — lo que te hace tanto imaginativo como eficaz.",
  "M1Z1": "Sueles comprometerte con un objetivo claro con enfoque firme, pero tu apertura complementaria te da la flexibilidad para redefinir y adaptar tus metas sobre la marcha.",

  "A2O2": "Piensas en símbolos y asociaciones, lo que te ayuda a conectar ideas abstractas que otros no ven, mientras que tu razonamiento lógico complementario mantiene tu creatividad con los pies en la tierra.",
  "O2A2": "Confías en el razonamiento paso a paso, pero tu mente simbólica complementaria te permite notar patrones intuitivos que enriquecen tu lógica con profundidad inesperada.",

  "T3L3": "Te estimulan los ambientes vibrantes y buscas variedad sensorial, pero tu calma interior complementaria te permite retirarte e integrar tus experiencias en soledad.",
  "L3T3": "Valoras ambientes tranquilos y sin distracciones, pero tu deseo sensorial complementario invita ráfagas de color, sonido o movimiento que refrescan tu enfoque.",

  "E4I4": "Procesas mejor a través del movimiento y la interacción física, pero tu modelado abstracto complementario te permite visualizar ideas internamente — combinando intuición y cuerpo.",
  "I4E4": "Tu aprendizaje florece con el modelado interno y la simulación visual, pero tu participación física complementaria te ayuda a dar vida a esas ideas de forma tangible.",

  "F5S5": "Expresas tus emociones con libertad, compartiendo tu energía con los demás, pero tu lado reflexivo te permite a veces pausar y refinar lo que sientes antes de expresarlo.",
  "S5F5": "Procesas las emociones en silencio y creces a través de la reflexión, pero tu contraparte expresiva te ayuda a liberar esa sabiduría en momentos poderosos de conexión.",

  "U6A6": "Te energiza la interacción social, pero tu lado introspectivo te permite reflexionar antes de reaccionar — lo que da profundidad a tu presencia.",
  "A6U6": "Sueles observar y pensar antes de involucrarte, pero tu flexibilidad social te permite conectar rápidamente cuando lo necesitas — equilibrando sensibilidad y adaptabilidad.",

  "K7R7": "Saltas entre ideas impulsado por la inspiración, pero tu ritmo estructurado ayuda a convertirlas en resultados coherentes — lo que te vuelve visionario y fiable.",
  "R7K7": "Sigues un camino constante y enfocado, pero tu espontaneidad permite ráfagas de inspiración que sacuden tu ritmo y abren paso a avances inesperados.",

  "E8O8": "Prefieres finales flexibles que evolucionen con el proceso, pero tu lado estructurado asegura que no te disperses — anclando la creatividad con intención.",
  "O8E8": "Sueles ceñirte a planes claros y resultados definidos, pero tu contraparte adaptable te ayuda a cambiar de rumbo cuando es necesario — evitando la rigidez y abriendo paso a la innovación."
};

const practical_tips = {
  "Z1": "Comienza proyectos con mapas mentales o ramas de ideas. Permítete explorar antes de comprometerte.",
  "M1": "Define tu objetivo con claridad antes de empezar una actividad. Usa listas de verificación o frases-guía para mantener el enfoque.",

  "A2": "Usa analogías, metáforas o símbolos visuales para conectar ideas abstractas. Haz garabatos o esquemas mientras piensas.",
  "O2": "Descompón los conceptos en pasos. Usa diagramas de flujo u ordenamientos lineales para retener información compleja.",

  "T3": "Involucra múltiples sentidos al aprender — prueba con audio, notas codificadas por colores o herramientas prácticas.",
  "L3": "Crea un entorno de estudio minimalista y silencioso. Usa luz suave y silencio para mantener las distracciones lejos.",

  "E4": "Aprende haciendo — camina mientras memorizas, haz gestos al explicar, o usa objetos para fijar ideas.",
  "I4": "Pausa para simular mentalmente lo que aprendes. Usa diagramas, visualizaciones internas y reflexión escrita.",

  "F5": "Expresa lo que aprendes a través de historias o conversaciones. Compartir en voz alta te ayuda a interiorizarlo.",
  "S5": "Date tiempo para reflexionar en silencio. Escribe en un diario lo que aprendes y deja que las ideas maduren.",

  "U6": "Únete a grupos de estudio o discute ideas con otros. La interacción social potencia tu compromiso.",
  "A6": "Establece intenciones personales antes de participar en grupo. Reflexiona antes de hablar para aportar más profundidad.",

  "K7": "Usa sesiones cortas y variados temas para mantener el interés. Acepta tus ráfagas creativas como parte del proceso.",
  "R7": "Sigue una rutina constante de aprendizaje. Usa horarios fijos y hábitos repetibles para mantenerte centrado.",

  "E8": "Mantén tus metas flexibles. Usa herramientas adaptativas como post-its, tableros Kanban o cronogramas que evolucionen.",
  "O8": "Sigue un proceso estructurado. Planifica por etapas y adhiérete a tu hoja de ruta siempre que sea posible."
};