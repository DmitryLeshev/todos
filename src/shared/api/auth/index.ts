import { base } from "../_request";

const BASE_PATH = "/auth";

const authRequest = base.apiInstance(BASE_PATH);
type AuthResponse<T> = base.BaseResponse<T>;

export enum Authorities {
  Admin = "admin",
}

export type Session = {
  accountId: number;
  data: {
    email: string;
    firstName: string;
    lastName: string;
    authorities: Authorities;
  };
  ip: string;
  sessionId: string;
  token: string | null;
};

export const DEFAULT_SESSION: Session = {
  accountId: 0,
  data: {
    authorities: Authorities.Admin,
    email: "",
    firstName: "",
    lastName: "",
  },
  ip: "",
  sessionId: "",
  token: null,
};

type DTOSignUp = {
  email: string;
  lastName: string;
  firstName: string;
  hashPassword: string;
};

const signUp = async (dto: DTOSignUp): Promise<AuthResponse<Session>> => {
  return await authRequest.post("/registration", dto);
};

type DTOSignIn = {
  email: string;
  password: string;
};

const signIn = async (dto: DTOSignIn): Promise<AuthResponse<Session>> => {
  return await authRequest.post("/sign-in", dto);
};

const signOut = async () => {
  return await authRequest.get("/sign-out");
};

const sessionInfo = async (): Promise<AuthResponse<Session>> => {
  return await authRequest.get("/session-info");
};

export { signIn, sessionInfo, signOut, signUp };
export type { DTOSignUp, DTOSignIn };
