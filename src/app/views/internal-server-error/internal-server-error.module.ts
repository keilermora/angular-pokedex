import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { InternalServerErrorComponent } from './internal-server-error.component';

const routes: Routes = [
  {
    path: '',
    component: InternalServerErrorComponent,
  },
];

@NgModule({
  declarations: [InternalServerErrorComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class InternalServerErrorModule {}
