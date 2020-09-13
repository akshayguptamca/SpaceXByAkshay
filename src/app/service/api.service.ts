import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ConfigService {

constructor(private http: HttpClient) { }


configUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';

getSpaceX() {
    return this.http.get(this.configUrl);
}

getSpaceXLaunch(launch) {
    return this.http.get(`https://api.spaceXdata.com/v3/launches?limit=100&&launch_success=${launch}`);
}

getSpaceXLand(land) {
    return this.http.get(`https://api.spaceXdata.com/v3/launches?limit=100&land_success=${land}`);
}

getSpaceXByYear(year) {
    return this.http.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${year}`);
}

}