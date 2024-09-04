export class CampusAPI{
    static GetCampus = 'https://localhost:5001/api/Campus';
}
export class ExternalLoginAPI{
    static GetToken = 'http://localhost:5100/api/Authentication';
}
export class BuildingAPI{
    static GetBuildings = 'https://localhost:5001/api/Building';
    static AddBuilding = 'https://localhost:5001/api/Building';
    static EditBuilding = 'https://localhost:5001/api/Building';
}
export class RoomAPI{
    static GetRooms = 'https://localhost:5001/api/Building';
}