import {
  ILoginReponse,
  IRegisterDataRequest,
} from "@app/interfaces/IAuthentication";
import { IUser } from "@app/interfaces/IUserData";
import { serverFetch } from "../fetch";

export const registerUserRequest = (data: IRegisterDataRequest) => {
  return serverFetch<IUser>("/auth/register", "POST", data);
};

export const loginUserRequest = (email: string, password: string) => {
  return serverFetch<ILoginReponse>("/auth/login", "POST", {
    email,
    password,
  });
};

export const whetherUserAuthenticatedRequest = (bearer_token: string) => {
  return serverFetch<boolean>("/user/authenticated", "GET", {}, bearer_token);
};

export const currentAuthenticatedUserRequest = (bearer_token: string) => {
  return serverFetch<IUser>("/user/me", "GET", {}, bearer_token);
};

export const refreshTokenRequest = (refresh_token: string) => {
  return serverFetch<{ token: string }>("/auth/refresh-token", "POST", {
    refresh_token,
  });
};
