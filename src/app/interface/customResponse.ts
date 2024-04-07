import { Server } from "./server";

export interface CustomResponse{
  timeSpamp: Date;
  statusCode: number;
  status: string;
  reason: string;
  message: string;
  developerMessage: string;
  data: { servers?: Server[], serve?: Server}; //? for optional
}