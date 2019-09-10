import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgMaterial } from './modules/ng-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        HttpClientModule,
        NgMaterial,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        RouterModule,
        CommonModule,
        HttpClientModule,
        NgMaterial,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [

    ]
})
export class SharedModule { }
