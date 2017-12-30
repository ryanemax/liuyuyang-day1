import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Child Page Components
import { StudentListComponent } from './student-list/student-list.component';
import { StudentItemComponent } from './student-item/student-item.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentAnalysisComponent } from './student-analysis/student-analysis.component'

// Import Shared Module
import { SharedModule } from '../../shared/shared.module'

// Providers
import { StudentService } from './student.service'

// DataTable Depand CDK Table
import { MatTableDataSource } from '@angular/material';
import {MatTableModule} from '@angular/material';
import {MatOptionModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatTabsModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatSortModule} from '@angular/material';
// End of DataTable

@NgModule({
  imports: [
     // Import Official Shared Module
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    // DataTable
    MatTableModule,
    MatOptionModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    // Import Custom Shared Module
    SharedModule,
    // Config Router
    RouterModule.forChild([
      { path: '', component: StudentListComponent, pathMatch: 'full' },
      { path: 'edit/:id', component: StudentEditComponent, pathMatch: 'full' },
      { path: 'analysis', component: StudentAnalysisComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
   StudentListComponent,
   StudentItemComponent, 
   StudentEditComponent,
   StudentAnalysisComponent,
   ],
   providers:[StudentService]
})
export class StudentModule { }
