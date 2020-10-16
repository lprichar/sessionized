import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TracksComponent } from './tracks/tracks.component';
import { TwitterCardsComponent } from './twitter-cards/twitter-cards.component';
import { HomeComponent } from './home/home.component';
import { SpeakerComponentComponent } from './speaker/speaker.component';
import { TwitterUsernameComponent } from './twitter-username/twitter-username.component';
import { NoVaNavComponent } from './no-va-nav/no-va-nav.component';
import { TransitionScreensComponent } from './transition-screens/transition-screens.component';
import { FormsModule } from '@angular/forms';
import { NowShowingComponent } from './now-showing/now-showing.component';
import { SmallSpeakerComponent } from './small-speaker/small-speaker.component';
import { ExportComponent } from './export/export.component';

@NgModule({
  declarations: [
    AppComponent,
    TracksComponent,
    TwitterCardsComponent,
    HomeComponent,
    SpeakerComponentComponent,
    TwitterUsernameComponent,
    NoVaNavComponent,
    TransitionScreensComponent,
    NowShowingComponent,
    SmallSpeakerComponent,
    ExportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
