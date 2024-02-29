import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  peso = 60;
  edad = 25;
  altura = 170;
  sexo = 'Masculino';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  calcularBMI() {
    const bmi = this.peso / Math.pow(this.altura / 100, 2);
    console.log(bmi);

    this.router.navigate(['/resultado', bmi.toFixed(1)]);

  }

  cambiarAltura(event: any) {
    this.altura = event.target.value;
  }

  masculino() {
    this.sexo = 'Masculino';
  }
  femenino() {
    this.sexo = 'Femenino';
  }

}
