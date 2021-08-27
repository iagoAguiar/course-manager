import { CouseService } from './courses.service';
import { Component ,OnInit } from "@angular/core";
import { Course } from "./course";
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
    templateUrl: './courses-list.component.html' 
})
export class CourseListComponent implements OnInit{
    
    filtredCourses : Course[] = [];
    _courses : Course[] = [];

    _filterBy!: string;
    
    constructor( private coursesService:  CouseService){}

    ngOnInit(): void{
        this._courses = this.coursesService.retriveAll();
        this.filtredCourses = this._courses;
    }

    set filter(valor: string){
        this._filterBy = this.filter;
        this.filtredCourses = this._courses.filter((course:Course) => createOfflineCompileUrlResolver.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter(){
        return this._filterBy;
    }

    
}