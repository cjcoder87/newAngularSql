import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AgentComponent } from './agent/agent.component';
import { ConfidenceComponent } from './confidence/confidence.component';
import { InterpretationComponent } from './interpretation/interpretation.component';
import {MatDividerModule} from '@angular/material/divider';
import { ScopeComponent } from './scope/scope.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RibbonNavComponent } from './ribbon-nav/ribbon-nav.component';
import { InProgressComponent } from './in-progress/in-progress.component';
import { CompletedComponent } from './completed/completed.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import 'hammerjs';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { InProgress2Component } from './in-progress2/in-progress2.component';
import { ScentabComponent } from './scentab/scentab.component';
import {MatCardModule} from '@angular/material/card';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { Scentab2Component } from './scentab2/scentab2.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ScenarioService} from './services/scenario.service';
import { DataTableComponent } from './data-table/data-table.component'


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ConfidenceComponent,
    InterpretationComponent,
    AgentComponent,
    ConfidenceComponent,
    InterpretationComponent,
    ScopeComponent,
    FooterComponent,
    HeaderComponent,
    RibbonNavComponent,
    InProgressComponent,
    CompletedComponent,
    ProgressbarComponent,
    InProgress2Component,
    ScentabComponent,
    Scentab2Component,
    DataTableComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    MatButtonModule, 
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatRadioModule,
    MatTableModule,
    MatProgressBarModule,
    MatCardModule,
    MatTooltipModule,
    MatTabsModule,
    MatToolbarModule,
    MatSortModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    RouterModule.forRoot([
      //{ path: '', component: AppComponent, pathMatch: 'full' },
      { path: 'agent', component: AgentComponent },
      { path: 'interpretation', component: InterpretationComponent },
      { path: 'confidence', component: ConfidenceComponent },
      { path: 'scope', component: ScopeComponent },
      { path: 'ribbon', component: RibbonNavComponent },
      { path: 'in-progress', component: InProgressComponent },
      { path: 'in-progress2', component: InProgress2Component },
    ])
  ],
  providers: [ScenarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
