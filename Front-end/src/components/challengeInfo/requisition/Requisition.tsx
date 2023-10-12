const Requisition = () => {
  return (
    <div className="text-zinc-400 space-y-7 md:w-[80%]">
      <div className="space-y-4">
        <h1 className="text-white text-xl font-bold">Requisitos</h1>
        <p>
          Você deve criar uma interface de usuário para um aplicativo de lista
          de tarefas simples.
        </p>

        <p>
          A interface deve incluir uma lista de tarefas a serem concluídas, bem
          como um formulário para adicionar novas tarefas.
        </p>
        <p>
          Cada item da lista de tarefas deve incluir um botão de conclusão e um
          botão de exclusão.
        </p>
        <p>
          Quando o usuário clicar no botão de conclusão, o item da lista de
          tarefas deve ser marcado como concluído.
        </p>
        <p>
          Quando o usuário clicar no botão de exclusão, o item da lista de
          tarefas deve ser removido da lista.
        </p>
        <p>
          A interface deve ser projetada com um layout responsivo para que seja
          fácil de usar em dispositivos móveis e desktops.
        </p>
      </div>
    </div>
  );
};

export default Requisition;
