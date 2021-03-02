import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'ตัวอย่างระบบ DIP';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  redirectTo(route: string){
    this.router.navigate([route])
  }
}
