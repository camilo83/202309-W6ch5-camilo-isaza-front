import { Element } from '../model/element';

export type MenuOption = {
  label: string;
  path: string;
};

export type Apiresponse = {
  elements: Element[];
};
