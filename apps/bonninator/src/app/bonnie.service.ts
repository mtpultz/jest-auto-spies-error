import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BonnieService {
  private _bonnieId!: number;

  public set bonnieId(bonnieId: number) {
    this._bonnieId = bonnieId;
  }

  public get bonnieId(): number {
    return this._bonnieId;
  }
}
