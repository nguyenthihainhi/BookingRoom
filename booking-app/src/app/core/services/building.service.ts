import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Building } from '../models/building';
import { BuildingAPI } from '../config/APILinks';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {
  buildings: Building[] = [
    {
        "buildingId": 1,
        "buildingName": "Alpha",
        "totalRoom": 50,
        "description": "A modern office building with state-of-the-art facilities.",
        "buildingImg": "https://vietnamese.cri.cn/mmsource/images/2017/06/02/2a57203f38df45f68a5b566ef3757a48.jpg"
      },
      {
        "buildingId": 2,
        "buildingName": "Beta",
        "totalRoom": 120,
        "description": "A commercial building known for its architectural beauty and central location.",
        "buildingImg": "https://vietnamese.cri.cn/mmsource/images/2017/06/02/2a57203f38df45f68a5b566ef3757a48.jpg"
      },
      {
        "buildingId": 3,
        "buildingName": "Delta",
        "totalRoom": 75,
        "description": "A high-rise building offering luxury residential apartments.",
        "buildingImg": "https://vietnamese.cri.cn/mmsource/images/2017/06/02/2a57203f38df45f68a5b566ef3757a48.jpg"
      },
      {
        "buildingId": 4,
        "buildingName": "Gamma",
        "totalRoom": 90,
        "description": "A mixed-use skyscraper combining offices, retail, and residential spaces.",
        "buildingImg": "https://vietnamese.cri.cn/mmsource/images/2017/06/02/2a57203f38df45f68a5b566ef3757a48.jpg"
      }
  ];

  constructor(private http: HttpClient) { }
  getBuildings(){
    return this.buildings;
    // return this.http.get<Building[]>(BuildingAPI.GetBuildings);
  }
  getBuildingById(id: number): Building | undefined {
    return this.buildings.find(b => b.buildingId === id);
  }
  addBuilding(building: Building){
    return this.http.post(BuildingAPI.AddBuilding, building);
  }
  editBuiding(building: Building){
    return this.http.put(BuildingAPI.AddBuilding, building);
  }
}
