import { apiInstance, BaseResponse } from "../request/base"

const BASE_PATH = "/auth"

const authRequest = apiInstance(BASE_PATH);

export enum Authorities {
    Admin = 'admin',
}

export type Session = {
    accountId: number
    data: { email: string, firstName: string, lastName: string, authorities: Authorities }
    ip: string
    sessionId: string
    token: string | null
}

type DTOSignUp = {
    "email": string,
    "lastName": string,
    "firstName": string,
    "hashPassword": string
}

const signUp = async (dto: DTOSignUp): Promise<BaseResponse<Session>> => {
    return await authRequest.post("/registration", dto);
}

type DTOSignIn = {
    "email": string,
    "password": string
}

const signIn = async (dto: DTOSignIn): Promise<BaseResponse<Session>> => {
    return await authRequest.post("/sign-in", dto);
}

const signOut = async () => {
    return await authRequest.get("/sign-out");
}

const sessionInfo = async (): Promise<BaseResponse<Session>> => {
    return await authRequest.get("/session-info");
}

export { signIn, sessionInfo, signOut, signUp };
export type { DTOSignUp, DTOSignIn }