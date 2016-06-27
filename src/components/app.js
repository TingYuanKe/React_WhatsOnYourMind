import React from 'react';
import {Component} from 'react';
import Header from './header.js';
import Input from './input';
import DataLists from'./datalist';
import Footer from'./footer';
export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
                  listinfos:[],
                };
    this.initMind();
  }
  render(){
      return(
        <div>
          <Header />
          <div><Input onPostTermChange = {data => this.postMind(data)} /></div>
          <DataLists            listinfos = {this.state.listinfos}
                               onDataDel = {updatedData => this.deleteMind(updatedData)} />
        </div>

    );
  }
  initMind(){
    $.ajax({
        type:'GET',
        url:'/initmind'
    }).done((datainfos)=>{
      this.setState(datainfos);
    });
  }
  postMind(data){
    $.ajax({
      type:'POST',
      url:'/',
      data:data,
      dataType:'JSON'
    }).done((listinfos)=>{
        this.setState(listinfos);
    });
  }
  deleteMind(dataId){
    $.ajax({
      type:'DELETE',
      url:'/data/'+dataId
    }).done((listinfos)=>{
        this.setState(listinfos);
    });
  }

}
