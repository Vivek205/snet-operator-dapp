/* eslint-disable */
// package: config
// file: src/protos/config/config.proto

var src_protos_config_config_pb = require("../../../src/protos/config/config_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ConfigurationService = (function () {
  function ConfigurationService() {}
  ConfigurationService.serviceName = "config.ConfigurationService";
  return ConfigurationService;
}());

ConfigurationService.GetConfiguration = {
  methodName: "GetConfiguration",
  service: ConfigurationService,
  requestStream: false,
  responseStream: false,
  requestType: src_protos_config_config_pb.ReadRequest,
  responseType: src_protos_config_config_pb.ConfigurationResponse
};

ConfigurationService.UpdateConfiguration = {
  methodName: "UpdateConfiguration",
  service: ConfigurationService,
  requestStream: false,
  responseStream: false,
  requestType: src_protos_config_config_pb.UpdateRequest,
  responseType: src_protos_config_config_pb.ConfigurationResponse
};

ConfigurationService.StopProcessingRequests = {
  methodName: "StopProcessingRequests",
  service: ConfigurationService,
  requestStream: false,
  responseStream: false,
  requestType: src_protos_config_config_pb.CommandRequest,
  responseType: src_protos_config_config_pb.Response
};

ConfigurationService.StartProcessingRequests = {
  methodName: "StartProcessingRequests",
  service: ConfigurationService,
  requestStream: false,
  responseStream: false,
  requestType: src_protos_config_config_pb.CommandRequest,
  responseType: src_protos_config_config_pb.Response
};

exports.ConfigurationService = ConfigurationService;

function ConfigurationServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ConfigurationServiceClient.prototype.getConfiguration = function getConfiguration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConfigurationService.GetConfiguration, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ConfigurationServiceClient.prototype.updateConfiguration = function updateConfiguration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConfigurationService.UpdateConfiguration, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ConfigurationServiceClient.prototype.stopProcessingRequests = function stopProcessingRequests(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConfigurationService.StopProcessingRequests, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ConfigurationServiceClient.prototype.startProcessingRequests = function startProcessingRequests(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConfigurationService.StartProcessingRequests, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.ConfigurationServiceClient = ConfigurationServiceClient;

