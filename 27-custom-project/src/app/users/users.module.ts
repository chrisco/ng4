import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
    declarations: [UsersComponent],
    imports: [CommonModule, UsersRoutingModule]
})
export class UsersModule {}