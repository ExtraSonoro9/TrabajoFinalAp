import { Component } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
  
public  educations:Educacion[]=[];

constructor (private educacionService:EducacionService){




}

ngOnInit(): void {
this.getEducations();


}
public getEducations():void{
  this.educacionService.getEducation().subscribe({
next:(Response: Educacion[]) =>{
this.educations=Response;
  },
  error:(error:HttpErrorResponse)=>{
    alert(error.message);
  }

})}
}
