export enum Role {
  // SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  SENDER = "SENDER",
  RECEIVER = "RECEIVER",

}
export type ProviderType = "google" | "credential";

export enum IsActive{
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  BLOCKED = "BLOCKED",
}
export interface IAuthProvider{
  provider : ProviderType;
  providerId : string;
}


export interface IUser {
  name: string;
  email: string;
  password?: string;
  phone?: string;
  isDeleted : boolean;
  isVerified  : boolean;
  role: Role;
  isActive : IsActive; 
  address ?: string;
  auths : IAuthProvider[];
}
