import { Injectable } from '@angular/core';
import { TestDto, TestDtoList } from './Dto';

@Injectable({
  providedIn: 'root'
})
export class LbelHintServiceService {
  /** 假設要抓後端資料庫的資料 */
  TestDtoListDto: TestDto[] = [];

  constructor() {
    this.TestDtoListDto = TestDtoList;
  }

  /**
   * 取得 資料庫的資料
   */
  getData(): TestDto[] {
    return this.TestDtoListDto;
  }

}
