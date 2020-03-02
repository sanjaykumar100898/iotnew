import { Component, OnInit, NgModule } from '@angular/core';
import { Http,Response,Headers} from '@angular/http';
//import {HttpClientModule} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { jsonpFactory } from '@angular/http/src/http_module';
import { JsonPipe } from '@angular/common';
//import { HttpClient ,HttpHeaders,HttpParams ,HttpRequest} from '@angular/common/http';

@Component({
  selector: 'app-fault',
  templateUrl: './fault.component.html',
  styleUrls: ['./fault.component.css']
})

export class FaultComponent  {
  res: any[];
  json;
  json1;
  
  constructor(private http : Http) {
    
   }

 public myalert(){
    alert('error');
    const data = {
      "jsonrpc" : "2.0",
      "method" : "getall",
      "id" : "1",
      "params": {'name' : 'water' }
  }
  
  
     //const headers = new Headers({'Content-Type':'application/json'});
     //this.http.post('http://localhost:80/jsonrpc',data,{headers:headers}).pipe(
     //map((res: Response)=> console.log(res)));
     //catch((error:Response) =>console.log(error)));
      
     // 1 success
     this.http.post('http://localhost:80/jsonrpc',data).subscribe( res => alert(this.json =res.text()))

     // 2 try
     //this.http.post('http://localhost:80/jsonrpc',data).subscribe( Response => alert(this.json =Response.text()))
      
     //map((res: Response) => {
        //return res || {}; })
     
        // 1 success
        // return this.json
      this.json = JSON.stringify(this.json) 
      return this.json
    };
     // this.json=JSON.stringify(data.json)
    
    // alert("completed request");
   
  }

  

