import axios, { AxiosInstance, AxiosResponse } from 'axios';
import dotenv from 'dotenv';
import {
  CreateUserRequest,
  CreateUserResponse,
  GetUsersResponse,
  ListResourcesResponse,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  SingleResourceResponse,
  UpdateUserRequest,
  UpdateUserResponse
} from '../types/reqres';

dotenv.config();

export class ReqResClient {
  private readonly client: AxiosInstance;

  constructor() {
    const baseURL = process.env.REQRES_BASE_URL ?? 'https://reqres.in/api';
    const apiKey = process.env.REQRES_API_KEY;

    if (!apiKey) {
      throw new Error('Missing REQRES_API_KEY in environment variables.');
    }

    this.client = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
      }
    });
  }

  getUsers(page: number): Promise<AxiosResponse<GetUsersResponse>> {
    return this.client.get<GetUsersResponse>('/users', {
      params: { page }
    });
  }

  createUser(payload: CreateUserRequest): Promise<AxiosResponse<CreateUserResponse>> {
    return this.client.post<CreateUserResponse>('/users', payload);
  }

  login(payload: LoginRequest): Promise<AxiosResponse<LoginResponse>> {
    return this.client.post<LoginResponse>('/login', payload);
  }

  register(payload: RegisterRequest): Promise<AxiosResponse<RegisterResponse>> {
    return this.client.post<RegisterResponse>('/register', payload);
  }

  updateUserPut(id: number, payload: UpdateUserRequest): Promise<AxiosResponse<UpdateUserResponse>> {
    return this.client.put<UpdateUserResponse>(`/users/${id}`, payload);
  }

  updateUserPatch(id: number, payload: UpdateUserRequest): Promise<AxiosResponse<UpdateUserResponse>> {
    return this.client.patch<UpdateUserResponse>(`/users/${id}`, payload);
  }

  deleteUser(id: number): Promise<AxiosResponse<void>> {
    return this.client.delete<void>(`/users/${id}`);
  }

  listResources(): Promise<AxiosResponse<ListResourcesResponse>> {
    return this.client.get<ListResourcesResponse>('/unknown');
  }

  getSingleResource(id: number): Promise<AxiosResponse<SingleResourceResponse>> {
    return this.client.get<SingleResourceResponse>(`/unknown/${id}`);
  }
}