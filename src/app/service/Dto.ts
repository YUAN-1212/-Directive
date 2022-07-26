
/** 後端json的欄位 */
export interface TestDto {
  /** 標題 */
  caption: string;

  /** 學生姓名 */
  S_Name: string;

  /** 學生年齡 */
  S_Age: string;

  /** 數學成績 */
  S_Math: string;

  /** 國文成績 */
  S_Chinese: string;

  /** 自然成績 */
  S_Scientist: string;

  /** 老師評語 */
  T_Note: string;

  /** 學生心得 */
  S_Note: string;
}

/** 寫死的資料來源 */
export let TestDtoList: TestDto[] = [
  {
    caption: '張小明的成績單',
    S_Name: '張小明',
    S_Age: '19',
    S_Math: '80',
    S_Chinese: '99',
    S_Scientist: '77',
    T_Note: '很好!請繼續保持!',
    S_Note: '這學習很認真學習，老師也教得很辛苦',
  },
  {
    caption: '王加佳的成績單',
    S_Name: '王加佳',
    S_Age: '19',
    S_Math: '50',
    S_Chinese: '66',
    S_Scientist: '71',
    T_Note: '請繼續努力喔~!',
    S_Note: '有點疏於念書了，下次要再加油!',
  }
];
