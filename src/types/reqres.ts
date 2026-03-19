export type ReqResUser = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type GetUsersResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: ReqResUser[];
};

export type CreateUserRequest = {
  name: string;
  job: string;
};

export type CreateUserResponse = {
  name: string;
  job: string;
  id: string;
  createdAt: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
};

export type RegisterRequest = {
  email: string;
  password: string;
};

export type RegisterResponse = {
  id: number;
  token: string;
};

export type UpdateUserRequest = {
  name: string;
  job: string;
};

export type UpdateUserResponse = {
  name: string;
  job: string;
  updatedAt: string;
};

export type Resource = {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
};

export type ListResourcesResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Resource[];
};

export type SingleResourceResponse = {
  data: Resource;
};

export type ErrorResponse = {
  error: string;
};