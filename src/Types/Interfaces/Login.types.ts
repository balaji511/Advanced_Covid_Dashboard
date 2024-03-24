export interface IInputFeild {
  value: string;
  valid: boolean;
  required: boolean;
  label: string;
  fieldName: string;
}

export interface IUserObject {
  username: IInputFeild;
  password: IInputFeild;
}
