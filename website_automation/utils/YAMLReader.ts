import * as fs from 'fs';
import * as path from 'path';
import YAML from 'yaml';
import { testConfig } from './../test-config';

export class YamlReader {
  private yamlData: any;
  private kindElement: string;
  private view: string;

  constructor(filePath: string) {
    // Config element file (webView/mobileView)
    this.view = testConfig.view;

    /*
    ---------------------------------------------------------
      Split String Path & Assign YAML File Path & Assign Key
    ---------------------------------------------------------
    ==> Result [folder, fileName, elementKey] --> ['saucedemo', 'commonELement', 'usernameField']
    */
    const [folder, fileName, elementKey] = filePath.split('/');
    filePath = `website_automation/element/${folder}/${fileName}.yaml`;
    this.kindElement = elementKey;

    if (!fs.existsSync(filePath)) {
      throw new Error(`YAML file not found at: ${filePath}`);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    this.yamlData = YAML.parse(fileContent);
  }

  /*
  ----------------------------------------------------
    Split String Element Dots & Assign Value String
  ----------------------------------------------------
  ==> Result elementIndent --> objectModels.usernameField.webView
  */
  getValueElement() {
    let elementIndent = `objectModels.${this.kindElement}.${this.view}`;
    let value = this.yamlData;

    value = elementIndent.split('.').reduce((acc, part) => acc?.[part], this.yamlData);

    return value;
  }
}
