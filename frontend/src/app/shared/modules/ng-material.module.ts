import { NgModule } from '@angular/core';
import {
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatButtonModule,
    MatRippleModule
} from '@angular/material';

@NgModule({
    declarations: [],
    imports: [
        MatInputModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatButtonModule,
        MatRippleModule,
    ],
    exports: [
        MatInputModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatButtonModule,
        MatRippleModule,
    ]
})

export class NgMaterial { }