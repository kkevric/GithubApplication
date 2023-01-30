import { Component } from "react";

import Form from "./Form";
import korisnik from "./Korisnik";
import repo from "./repo";
import Table from "./Table";


export default class App extends  Component
{
  state = {
    showTable: false,
    user:
      {
        avatar_url:'',
        name:'',
        location:'',
        bio:''
      }
    ,
    repo:[{
      id:'',
      name:''
    }
    ]
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.childNodes[1].value;
  
   
    const datauser = korisnik(inputValue);
    datauser.then((results) => {
      this.setState({
        user : results
      })
    })
   
    const datarepo = repo(inputValue);
    datarepo.then((results) => {
      this.setState({
        repo : results
      })
      console.log(results)
    })

    this.setState({
      showTable:true
     })

    // const results = Promise.all([korisnik(inputValue), repo(inputValue)]);
    // results.then((results) =>{
    //   this.setState({
    //     user: results[0],
    //     repo: results[1],
    //     // showTable: true


        
    //   });
    // })

  }

  onResetButton = () =>{
    this.setState({showTable:false})
  }




  render(){
    const {user, showTable, repo}=this.state;
    return(

    
      <div>

        {/* <Form handleSubmit={this.handleSubmit}/>
        <Table user={user}  repo={repo} handleClick={this.onResetButton}></Table> */}

        {
          !showTable &&  <Form handleSubmit={this.handleSubmit}/>
      
        }
        {
          showTable && <Table user={user}  repo={repo} handleClick={this.onResetButton}></Table>
        }

    
       
        

        
        
      </div>
    )
  }


}