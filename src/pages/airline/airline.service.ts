import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Parse } from '../../cloud/cloud';

@Injectable()
export class AirlineService {
  flightList: Array<Airline>;
  // HTTP Params
  authHeaders:Headers = new Headers()
  host = "http://47.92.145.25:2337/parse"
  className = "FlightAirline"
  // airlines:Array<Airline>;
  editObject:Airline;
  constructor(private http:Http) { 
    this.authHeaders.append("X-Parse-Application-Id","dev")
    this.authHeaders.append("X-Parse-Master-Key","angulardev")
    this.authHeaders.append("Content-Type","application/json")

    // this.getAirlineByPrice("SvsaxHrECT").subscribe(data=>{
    //   console.log(data)
    // })
  }
    getAirlineByFrom(from):Observable<Airline>{
      // let contact = this.contacts.find(item=>item.name == name)
      // return Observable.of(contact)
      return
    }
    getAirlineByPrice(id):Observable<Airline>{
      // let contact = this.contacts.find(item=>item.name == name)
      // return Observable.of(contact)

      let url = this.host+"/classes/" + this.className + "/" + id
      let options = {
        headers:this.authHeaders
      }

      return this.http
      .get(url,options)
      .map(data=>data.json())
    }
    getAirlines():Observable<Array<any>>{
      let query = new Parse.Query("FlightAirline",this.http)
      return query.find()
      // let url = this.host+"/classes/" + this.className
      // let options = {
      //   headers:this.authHeaders
      // }

      // return this.http
      // .get(url,options)
      // .map(data=>data.json().results)
    }

    addAirline(airline){
      // this.http.post()
      // let contact = this.contacts.find(item=>item.name == name)
      // return Observable.of(contact)

      let url = this.host+"/classes/" + this.className
      let options = {
        headers:this.authHeaders
      }
      return this.http
      .post(url,airline,options)
    }
    saveAirline(airline){
      // this.http.post()
      let url = this.host+"/classes/" + this.className
      let options = {
        headers:this.authHeaders
      }
      if(airline.date&&!airline.date.__type){
        airline.date = {
          __type:"Date",
          iso: new Date(airline.date)
        }
      }
      if(airline.objectId){
        let id = airline.objectId
        delete airline.createdAt
        delete airline.updatedAt
        delete airline.objectId
        delete airline.ACL

        return this.http
        .put(url+"/"+id,airline,options)
        .map(data=>data.json())
      }else{
        return this.http
        .post(url,airline,options)
        .map(data=>data.json())
      }
    }
    deleteByPrice(Price){
      let url = this.host+"/classes/" + this.className + "/" +Price
      let options = {
        headers:this.authHeaders
      }

      return this.http
      .delete(url,options)
      .map(data=>data.json())
    }
  // editObject:Airline;
  // constructor() { 
  //   this.getAirlines()
  // }
  // getContactByName(price):Observable<Airline>{
  //   let airline = this.airlines.find(item=>item.price == price)
  //   return Observable.of(airline)
  // }

  // getAirlines(){
  //    this.airlines = [
  //     {from:"dalian",price:1300,to:"shanghai",year:2017,image:"../../../assets/img/flight/dalian.jpg",username:""},
  //     {from:"kaoshi",price:700,to:"beijing",year:2017,image:"../../../assets/img/flight/kaoshi.jpg",username:""},
  //     {from:"london",price:1500,to:"us",year:2017,image:"../../../assets/img/flight/london.jpg",username:""},
  //     {from:"singpore",price:3300,to:"japan",year:2017,image:"../../../assets/img/flight/singpore.jpg",username:""},
  //     {from:"vancouver",price:1000,to:"hongkong",year:2016,image:"../../../assets/img/flight/vancouver.jpg",username:""},
  //     {from:"xiamen",price:900,to:"shanghai",year:2016,image:"../../../assets/img/flight/xiamen.jpg",username:""}
  //   ]
  // }

  // addAirlines(airline){
  //   this.airlines.push(airline)
  // }
  // deleteByName(price){
  //   this.airlines.forEach((item,index,arr)=>{
  //     if(item.price == price){
  //       arr.splice(index,1)
  //     }
  //   })
  // }

}
