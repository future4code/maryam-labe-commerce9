import React, { Component } from 'react';
import jobList from "./data/jobs.json";
import Filtros from './components/filtros/Filtros';
import Produtos from './components/produtos/Produtos';
import ProdutosCard from './components/produtos/Produtos';
import Carrinho from './components/carrinho/Carrinho';
import Cabecalho from './components/cabecalho/Cabecalho';
import { Container, Conteudo } from './Style';


export class App extends Component {

  state = {
    jobs: jobList,
    query: "",
    minPrice: "",
    maxPrice: "",
    sortingParameter: "title",
    order: 1
  }

  updateQuery = (ev) => {
    this.setState({
      query: ev.target.value
    })
  }

  updateMinPrice = (ev) => {
    this.setState({
      minPrice: ev.target.value
    })
  }

  updateMaxPrice = (ev) => {
    this.setState({
      maxPrice: ev.target.value
    })
  }

  updateSortingParameter = (ev) => {
    this.setState({
      sortingParameter: ev.target.value
    })
  }

  updateOrder = (ev) => {
    this.setState({
      order: ev.target.value
    })
  }

  render() {
    return <Container>

      <Cabecalho />

      <Conteudo>
        <Filtros
          query={this.state.query}
          updateQuery={this.updateQuery}
          updateMinPrice={this.updateMinPrice}
          updateMaxPrice={this.updateMaxPrice}
          updateSortingParameter={this.updateSortingParameter}
          updateOrder={this.updateOrder}
          minPrice={this.state.minPrice}
          maxPrice={this.state.maxPrice}
          sortingParameter={this.state.sortingParameter}
          order={this.state.order}
        />
        <div>
          {this.state.jobs
            .filter(job => {
              return job.title.toLowerCase().includes(this.state.query.toLowerCase()) ||
                job.description.toLowerCase().includes(this.state.query.toLowerCase())
            })
            .filter(job => {
              return this.state.minPrice === "" || job.price >= this.state.minPrice
            })
            .filter(job => {
              return this.state.maxPrice === "" || job.price <= this.state.maxPrice
            })
            .sort((currentJob, nextJob) => {
              switch (this.state.sortingParameter) {
                case "title":
                  return this.state.order * currentJob.title.localeCompare(nextJob.title)
                case "dueDate":
                  return this.state.order * (new Date(currentJob.dueDate).getTime() - new Date(nextJob.dueDate).getTime())
                default:
                  return this.state.order * (currentJob.price - nextJob.price)
              }
            })
            .map(job => {
              return <ProdutosCard key={job.id} job={job} />
            })}
        </div>

        <Produtos />

        <Carrinho />

      </Conteudo>

    </Container>
  }
}


