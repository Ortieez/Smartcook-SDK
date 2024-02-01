export enum Status {
  ok = 'ok',
  error = 'fail'
}

export type DefaultResponse = {
  stat: Status.ok;
  mess: string;
  docu: string;
  user: number;
  time: number;
  sign: string;
};

export type EchoResponse = {
  stat: Status.ok;
  data: Record<string, any>;
  user: number;
  time: number;
  sign: string;
};

export type ErrorResponse = {
  stat: Status.error;
  mess: string;
  user: number;
  time: number;
  sign: string;
};

export type ValidResponse = {
  stat: Status.ok;
  mess: string;
  user: number;
  time: number;
  sign: string;
};

export type RecipeResponse = {
  stat: Status.ok;
  mess: string;
  data: Record<string, any>;
  user: number;
  time: number;
  sign: string;
}
