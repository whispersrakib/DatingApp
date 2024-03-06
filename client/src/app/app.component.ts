import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DatingApp';
  users:any;
  constructor(private Http:HttpClient){}

  ngOnInit(): void {
    
    this.Http.get("http://localhost:5000/api/Users").subscribe({
      next:response => this.users =response,
      error: error => console.log(error),
      complete: () => console.log("completed")
      
      
    })
  }
}
