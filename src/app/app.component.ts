import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  private readonly apiKey = environment.api_key;

  @ViewChild('map') mapRef: ElementRef<HTMLElement> = {} as ElementRef;
  private map: GoogleMap = {} as GoogleMap;
  constructor(){
  }
  ngAfterViewInit(): void {
    this.configureMap();
  }

  async configureMap(): Promise<void> {
    this.map = await GoogleMap.create({
      id: 'map',
      element: this.mapRef.nativeElement,
      apiKey: this.apiKey,
      config: {
        center: {
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 8,
      },
    });
    await this.map.addMarkers(
      [
        {
          coordinate: {
          lat: 33.6,
          lng: -117.9,
          },
          title: 'Hello ArboStar <3!',
        },
        {
          coordinate: {
          lat: 33.0,
          lng: -117.9,
          },
          title: 'More!',
        },
        {
          coordinate: {
          lat: 32.6,
          lng: -117.9,
          },
          title: 'We need more!',
        }
      ]
    );
  }
}