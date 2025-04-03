import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IJsonData } from '@core/interfaces/init-data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly _httpClient = inject(HttpClient);
  private static initData?: IJsonData;

  get data() {
    return DataService.initData;
  }

  constructor() { }

  async loadData() {
    const data$ = lastValueFrom(
      this._httpClient.get<IJsonData>('assets/data/data.json')
    );

    DataService.initData = await data$;
  }

}
