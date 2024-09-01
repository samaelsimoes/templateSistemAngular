import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from '../index/index.component';
import { AuthGuard } from '../auth/AuthGuard';

const routes: Routes = [
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: IndexComponent,
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
    }
];

@NgModule({
    declarations: [
        IndexComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuard,
    ],
})
export class DashBoardModule { }