const tasks = [
  { id: 1, title: "Concluir projeto 4", completed: true, priority: "alta" },
  { id: 2, title: "Fazer projeto pessoal", completed: true, priority: "média" },
  { id: 3, title: "Participar da tutoria", completed: false, priority: "alta" },
  {
    id: 4,
    title: "Limpar caixa de entrada do e-mail",
    completed: true,
    priority: "baixa",
  },
  { id: 5, title: "Estudar JavaScript", completed: false, priority: "alta" },
];

// Use findIndex para encontrar a posição da primeira tarefa incompleta
const primeiraTarefaIncompleta = tasks.findIndex((task) => !task.completed);
console.log(
  "Posição da primeira tarefa incompleta: Posição - ",
  primeiraTarefaIncompleta
);

// Use some para verificar se existe alguma tarefa de baixa prioridade completa
const existeTarefaComBaixaPrioridadeCompleta = tasks.some(
  (task) => task.priority === "baixa" && task.completed
);
console.log(
  "Existe alguma tarefa de baixa prioridade completa:",
  existeTarefaComBaixaPrioridadeCompleta ? "Sim, existe" : "Não, não existe"
);

// Use every para verificar se todas as tarefas de alta prioridade estão incompletas
const todasTarefasAltaPrioridadeIncompletas = tasks
  .filter((task) => task.priority === "alta")
  .every((task) => !task.completed);
console.log(
  "Todas as tarefas de alta prioridade estão incompletas:",
  todasTarefasAltaPrioridadeIncompletas ? "Sim, estão" : "Não, não estão"
);

// Use findIndex para encontrar a posição de uma tarefa com id = 10. Lide com o caso em que a tarefa não existe (dica: findIndex retorna -1 quando não encontra)
const tarefaComID10 = tasks.findIndex((task) => task.id === 10);
if (tarefaComID10 === -1) {
  console.log("Tarefa com ID 10 não encontrada.");
} else {
  console.log("Posição da tarefa com ID 10:", tarefaComID10);
}
