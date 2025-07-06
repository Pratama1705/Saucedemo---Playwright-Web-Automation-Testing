import * as fs from 'fs';
import * as path from 'path';
import { testConfig } from './../test-config';

export class DataReader {
  private env: string;
  private dataRaw: any;
  private dataValue: string;

  constructor(filePath: string) {
    /*
    ---------------------------------------------------------
    Split String Path & Assign JSON File Path & Assign Key
    ---------------------------------------------------------
    ==> Result [folder, fileName, dataKey] --> ['saucedemo', 'data-login', 'username']
    */
    const [folder, fileName, dataKey] = filePath.split('/');
    filePath = `website_automation/data/${folder}/${fileName}.json`;
    this.dataValue = dataKey;

    if (!fs.existsSync(filePath)) {
      throw new Error(`JSON file not found at: ${filePath}`);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    this.dataRaw = JSON.parse(fileContent);
  }

  /*
  ----------------------------------------------------
    Split String Element Dots & Assign Value String
  ----------------------------------------------------
  ==> Result elementIndent --> staging.username
  */
  getValueData() {
    this.env = testConfig.env;
    let elementIndent = `${this.env}.${this.dataValue}`;
    let value = this.dataRaw;

    value = elementIndent.split('.').reduce((acc, part) => acc?.[part], this.dataRaw);

    console.log(value);
    return value;
  }
}
