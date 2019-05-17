export const serviceConfigJSON = {
    "nested": {
        "config": {
            "nested": {
                "ConfigurationService": {
                    "GetConfiguration": {
                        "requestType": "ReadRequest",
                        "responseType": "ConfigurationResponse"
                    }
                },
                "ReadRequest": {
                    "fields": {
                        "signature": {
                            "type": "bytes",
                            "id": 1
                        }
                    }
                },
                "ConfigurationResponse": {
                    "fields": {
                        "signature": {
                            "type": "bytes",
                            "id": 1
                        },
                        "json_data": {
                            "type": "string",
                            "id": 2
                        }
                    }
                }
            }
        }
    }
}