import { AppPipeModule } from './../shared/pipe/app-pipe.module';
import { StarModule } from './../shared/components/star/star.module';
import { StarComponent } from '../shared/components/star/star.component';
import { RouterModule } from '@angular/router';
import { CourseInfoComponent } from './courses.info.components';
import { CourseListComponent } from './courses-list.component';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { ReplacePipe } from '../shared/pipe/replace.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        CourseListComponent,    
        
        CourseInfoComponent
       
    ],
    imports: [
        FormsModule,
        CommonModule,
        StarModule,
        AppPipeModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent 
              },
              {
                path: 'courses/info/:id', component: CourseInfoComponent 
              }
        ])
    ]

    
})
export class CourseModule{

}