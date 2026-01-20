import React, { Component } from "react";

// form
import { FaPlus } from "react-icons/fa";

// tarefas
import { FaEdit, FaWindowClose } from "react-icons/fa";

import "./main.css";

export default class Main extends Component {
  state = {
    novaTarefa: "",
    tarefas: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("ola mundo");

    const { tarefas } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();
    if (tarefas.indexOf(novaTarefa) !== -1) return;
    if (novaTarefa === "") return;

    const novasTarefas = [...tarefas];
    this.setState({
      tarefas: [...novasTarefas, novaTarefa],
      novaTarefa: "",
    });
  };

  handleChange = (e) => {
    this.setState({ novaTarefa: e.target.value });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas {novaTarefa}</h1>

        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Adicionar nova tarefa"
            value={novaTarefa}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={index}>
              {tarefa}
              <span>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
