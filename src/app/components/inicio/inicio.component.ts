import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  peso = 60;
  edad = 25;

  constructor() { }

  ngOnInit(): void {
  }

}
