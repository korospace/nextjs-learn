export type ApiRes = {
  status: boolean;
  code?: number;
  message: string;
  data?: any;
};

export type LoginReq = {
  email: string;
  password: string;
};

export type RegisterReq = {
  full_name: string;
} & LoginReq;

export type UserDocument = {
  docId?: string;
  type?: string;
} & RegisterReq & {
    role: string;
  };
