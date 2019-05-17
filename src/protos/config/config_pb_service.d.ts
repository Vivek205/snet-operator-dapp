// package: config
// file: src/protos/config/config.proto

import * as src_protos_config_config_pb from "../../../src/protos/config/config_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ConfigurationServiceGetConfiguration = {
  readonly methodName: string;
  readonly service: typeof ConfigurationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_protos_config_config_pb.ReadRequest;
  readonly responseType: typeof src_protos_config_config_pb.ConfigurationResponse;
};

type ConfigurationServiceUpdateConfiguration = {
  readonly methodName: string;
  readonly service: typeof ConfigurationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_protos_config_config_pb.UpdateRequest;
  readonly responseType: typeof src_protos_config_config_pb.ConfigurationResponse;
};

type ConfigurationServiceStopProcessingRequests = {
  readonly methodName: string;
  readonly service: typeof ConfigurationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_protos_config_config_pb.CommandRequest;
  readonly responseType: typeof src_protos_config_config_pb.Response;
};

type ConfigurationServiceStartProcessingRequests = {
  readonly methodName: string;
  readonly service: typeof ConfigurationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_protos_config_config_pb.CommandRequest;
  readonly responseType: typeof src_protos_config_config_pb.Response;
};

export class ConfigurationService {
  static readonly serviceName: string;
  static readonly GetConfiguration: ConfigurationServiceGetConfiguration;
  static readonly UpdateConfiguration: ConfigurationServiceUpdateConfiguration;
  static readonly StopProcessingRequests: ConfigurationServiceStopProcessingRequests;
  static readonly StartProcessingRequests: ConfigurationServiceStartProcessingRequests;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: () => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: () => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ConfigurationServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getConfiguration(
    requestMessage: src_protos_config_config_pb.ReadRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_protos_config_config_pb.ConfigurationResponse|null) => void
  ): UnaryResponse;
  getConfiguration(
    requestMessage: src_protos_config_config_pb.ReadRequest,
    callback: (error: ServiceError|null, responseMessage: src_protos_config_config_pb.ConfigurationResponse|null) => void
  ): UnaryResponse;
  updateConfiguration(
    requestMessage: src_protos_config_config_pb.UpdateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_protos_config_config_pb.ConfigurationResponse|null) => void
  ): UnaryResponse;
  updateConfiguration(
    requestMessage: src_protos_config_config_pb.UpdateRequest,
    callback: (error: ServiceError|null, responseMessage: src_protos_config_config_pb.ConfigurationResponse|null) => void
  ): UnaryResponse;
  stopProcessingRequests(
    requestMessage: src_protos_config_config_pb.CommandRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_protos_config_config_pb.Response|null) => void
  ): UnaryResponse;
  stopProcessingRequests(
    requestMessage: src_protos_config_config_pb.CommandRequest,
    callback: (error: ServiceError|null, responseMessage: src_protos_config_config_pb.Response|null) => void
  ): UnaryResponse;
  startProcessingRequests(
    requestMessage: src_protos_config_config_pb.CommandRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_protos_config_config_pb.Response|null) => void
  ): UnaryResponse;
  startProcessingRequests(
    requestMessage: src_protos_config_config_pb.CommandRequest,
    callback: (error: ServiceError|null, responseMessage: src_protos_config_config_pb.Response|null) => void
  ): UnaryResponse;
}

