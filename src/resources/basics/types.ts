export enum Status {
  OK = 'ok',
  ERROR = 'fail'
}

export type ValidResponse = {
  stat: Status.OK;
  mess?: string;
  docu?: string;
  data?: Record<string, any>;
  user: number;
  time: number;
  sign: string;
};

export type ErrorResponse = {
  stat: Status.ERROR;
  mess: string;
  user: number;
  time: number;
  sign: string;
};