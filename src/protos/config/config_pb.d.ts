// package: config
// file: src/protos/config/config.proto

import * as jspb from "google-protobuf";

export class ReadRequest extends jspb.Message {
  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadRequest): ReadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadRequest;
  static deserializeBinaryFromReader(message: ReadRequest, reader: jspb.BinaryReader): ReadRequest;
}

export namespace ReadRequest {
  export type AsObject = {
    signature: Uint8Array | string,
  }
}

export class NameValue extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NameValue.AsObject;
  static toObject(includeInstance: boolean, msg: NameValue): NameValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NameValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NameValue;
  static deserializeBinaryFromReader(message: NameValue, reader: jspb.BinaryReader): NameValue;
}

export namespace NameValue {
  export type AsObject = {
    name: string,
    value: string,
  }
}

export class UpdateRequest extends jspb.Message {
  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  clearUpdatedConfigurationList(): void;
  getUpdatedConfigurationList(): Array<NameValue>;
  setUpdatedConfigurationList(value: Array<NameValue>): void;
  addUpdatedConfiguration(value?: NameValue, index?: number): NameValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRequest): UpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRequest;
  static deserializeBinaryFromReader(message: UpdateRequest, reader: jspb.BinaryReader): UpdateRequest;
}

export namespace UpdateRequest {
  export type AsObject = {
    signature: Uint8Array | string,
    updatedConfigurationList: Array<NameValue.AsObject>,
  }
}

export class CommandRequest extends jspb.Message {
  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommandRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CommandRequest): CommandRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommandRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommandRequest;
  static deserializeBinaryFromReader(message: CommandRequest, reader: jspb.BinaryReader): CommandRequest;
}

export namespace CommandRequest {
  export type AsObject = {
    signature: Uint8Array | string,
  }
}

export class Response extends jspb.Message {
  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    signature: Uint8Array | string,
  }
}

export class ConfigurationParameter extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getMandatory(): boolean;
  setMandatory(value: boolean): void;

  getDescription(): string;
  setDescription(value: string): void;

  getType(): ConfigurationParameter.Type;
  setType(value: ConfigurationParameter.Type): void;

  getEditable(): boolean;
  setEditable(value: boolean): void;

  getRestartDaemon(): ConfigurationParameter.UpdateAction;
  setRestartDaemon(value: ConfigurationParameter.UpdateAction): void;

  getSection(): string;
  setSection(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigurationParameter.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigurationParameter): ConfigurationParameter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigurationParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigurationParameter;
  static deserializeBinaryFromReader(message: ConfigurationParameter, reader: jspb.BinaryReader): ConfigurationParameter;
}

export namespace ConfigurationParameter {
  export type AsObject = {
    name: string,
    value: string,
    mandatory: boolean,
    description: string,
    type: ConfigurationParameter.Type,
    editable: boolean,
    restartDaemon: ConfigurationParameter.UpdateAction,
    section: string,
  }

  export enum Type {
    STRING = 0,
    INTEGER = 1,
    URL = 3,
    BOOLEAN = 4,
  }

  export enum UpdateAction {
    RESTART = 0,
    NO_IMPACT = 1,
  }
}

export class ConfigurationResponse extends jspb.Message {
  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  clearConfigurationList(): void;
  getConfigurationList(): Array<ConfigurationParameter>;
  setConfigurationList(value: Array<ConfigurationParameter>): void;
  addConfiguration(value?: ConfigurationParameter, index?: number): ConfigurationParameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigurationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigurationResponse): ConfigurationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigurationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigurationResponse;
  static deserializeBinaryFromReader(message: ConfigurationResponse, reader: jspb.BinaryReader): ConfigurationResponse;
}

export namespace ConfigurationResponse {
  export type AsObject = {
    signature: Uint8Array | string,
    configurationList: Array<ConfigurationParameter.AsObject>,
  }
}

