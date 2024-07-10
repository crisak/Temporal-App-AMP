export const schema = {
    "models": {
        "Account": {
            "name": "Account",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "groups": {
                    "name": "groups",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "activeAccount": {
                    "name": "activeAccount",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "isVtexAccount": {
                    "name": "isVtexAccount",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "salesChannels": {
                    "name": "salesChannels",
                    "isArray": true,
                    "type": {
                        "model": "SalesChannel"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "accountSalesChannelsId"
                        ]
                    }
                },
                "storeConfig": {
                    "name": "storeConfig",
                    "isArray": true,
                    "type": {
                        "model": "StoreConfig"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "accountStoreConfigId"
                        ]
                    }
                },
                "maxMonthlyOrders": {
                    "name": "maxMonthlyOrders",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "actualOrders": {
                    "name": "actualOrders",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "configuration": {
                    "name": "configuration",
                    "isArray": true,
                    "type": {
                        "nonModel": "CConfigurations"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "country": {
                    "name": "country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "demo": {
                    "name": "demo",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "contract": {
                    "name": "contract",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "logo": {
                    "name": "logo",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "contact": {
                    "name": "contact",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pro": {
                    "name": "pro",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "plan": {
                    "name": "plan",
                    "isArray": false,
                    "type": {
                        "nonModel": "Plan"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Accounts",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groupsField": "groups",
                                "groupField": "groups",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Automation": {
            "name": "Automation",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "seller": {
                    "name": "seller",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "model": {
                    "name": "model",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "facilities": {
                    "name": "facilities",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "typeMethod": {
                    "name": "typeMethod",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "actions": {
                    "name": "actions",
                    "isArray": true,
                    "type": {
                        "nonModel": "Actions"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "query": {
                    "name": "query",
                    "isArray": false,
                    "type": {
                        "nonModel": "AutomationQuery"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "isActive": {
                    "name": "isActive",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Automations",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byTypeAndSeller",
                        "queryField": "automationByTypeAndSeller",
                        "fields": [
                            "typeMethod",
                            "seller"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "gsi-RMASettings.automations",
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Carrier": {
            "name": "Carrier",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "agencyId": {
                    "name": "agencyId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "logo": {
                    "name": "logo",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "authorized": {
                    "name": "authorized",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "active": {
                    "name": "active",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "cancelable": {
                    "name": "cancelable",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "onHoldServices": {
                    "name": "onHoldServices",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "countries": {
                    "name": "countries",
                    "isArray": true,
                    "type": "String",
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "formConfiguration": {
                    "name": "formConfiguration",
                    "isArray": true,
                    "type": {
                        "nonModel": "CarrierFormConfigurationField"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "withQueues": {
                    "name": "withQueues",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "allocationTime": {
                    "name": "allocationTime",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "pricing": {
                    "name": "pricing",
                    "isArray": false,
                    "type": {
                        "nonModel": "CarrierPricing"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "integration": {
                    "name": "integration",
                    "isArray": false,
                    "type": {
                        "nonModel": "CarrierIntegration"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "shippingPaymentMethods": {
                    "name": "shippingPaymentMethods",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "hasDevEnvironment": {
                    "name": "hasDevEnvironment",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Carriers",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "subscriptions": null
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byAgencyId",
                        "fields": [
                            "agencyId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "Agency",
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "CarriersStoreConfig": {
            "name": "CarriersStoreConfig",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "carrierId": {
                    "name": "carrierId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "account": {
                    "name": "account",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "active": {
                    "name": "active",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "config": {
                    "name": "config",
                    "isArray": true,
                    "type": {
                        "nonModel": "CarrierStoreConfigSettings"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "deliveryMethod": {
                    "name": "deliveryMethod",
                    "isArray": true,
                    "type": {
                        "nonModel": "DeliveryMethod"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "env": {
                    "name": "env",
                    "isArray": false,
                    "type": {
                        "enum": "CEnvironment"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "createService": {
                    "name": "createService",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "replicateConfig": {
                    "name": "replicateConfig",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "CarriersStoreConfigs",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byAccount",
                        "fields": [
                            "account"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "CatalogHistory": {
            "name": "CatalogHistory",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "productId": {
                    "name": "productId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "catalogName": {
                    "name": "catalogName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "user": {
                    "name": "user",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": {
                        "nonModel": "DescriptionChange"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "messageChange": {
                    "name": "messageChange",
                    "isArray": false,
                    "type": {
                        "nonModel": "MessageChange"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "CatalogHistories",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "subscriptions": null
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byProductId",
                        "fields": [
                            "productId",
                            "catalogName"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Customer": {
            "name": "Customer",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "groups": {
                    "name": "groups",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "profileId": {
                    "name": "profileId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "publicName": {
                    "name": "publicName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "firstName": {
                    "name": "firstName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "lastName": {
                    "name": "lastName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "document": {
                    "name": "document",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "documentType": {
                    "name": "documentType",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "anonymized": {
                    "name": "anonymized",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "phone": {
                    "name": "phone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "hashedEmail": {
                    "name": "hashedEmail",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "addresses": {
                    "name": "addresses",
                    "isArray": true,
                    "type": {
                        "model": "Address"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "customer"
                        ]
                    }
                },
                "orders": {
                    "name": "orders",
                    "isArray": true,
                    "type": {
                        "model": "Order"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "customer"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Customers",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groupsField": "groups",
                                "groupField": "groups",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Address": {
            "name": "Address",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "groups": {
                    "name": "groups",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "contactName": {
                    "name": "contactName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "contactPhone": {
                    "name": "contactPhone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "customer": {
                    "name": "customer",
                    "isArray": false,
                    "type": {
                        "model": "Customer"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "customerId"
                        ]
                    }
                },
                "customerId": {
                    "name": "customerId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "publicContactName": {
                    "name": "publicContactName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "city": {
                    "name": "city",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "country": {
                    "name": "country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "neighborhood": {
                    "name": "neighborhood",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "address": {
                    "name": "address",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "addressComplement": {
                    "name": "addressComplement",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "reference": {
                    "name": "reference",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "number": {
                    "name": "number",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "zipCode": {
                    "name": "zipCode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "location": {
                    "name": "location",
                    "isArray": false,
                    "type": {
                        "nonModel": "Location"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "orders": {
                    "name": "orders",
                    "isArray": true,
                    "type": {
                        "model": "Order"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "address"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Addresses",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byCustomer",
                        "fields": [
                            "customerId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groupsField": "groups",
                                "groupField": "groups",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "HistoricalOrder": {
            "name": "HistoricalOrder",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "orderId": {
                    "name": "orderId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "lastStatus": {
                    "name": "lastStatus",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "orderStatus": {
                    "name": "orderStatus",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "source": {
                    "name": "source",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "user": {
                    "name": "user",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "metadata": {
                    "name": "metadata",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "HistoricalOrders",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "subscriptions": null
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byOrder",
                        "fields": [
                            "orderId",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "HistoricalWorksheet": {
            "name": "HistoricalWorksheet",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "worksheetId": {
                    "name": "worksheetId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "lastStatus": {
                    "name": "lastStatus",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "worksheetStatus": {
                    "name": "worksheetStatus",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "source": {
                    "name": "source",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "user": {
                    "name": "user",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "metadata": {
                    "name": "metadata",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "HistoricalWorksheets",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "subscriptions": null
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byWorksheet",
                        "fields": [
                            "worksheetId",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "ItemTransfer": {
            "name": "ItemTransfer",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "ItemTransferStatus"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "sourceHostname": {
                    "name": "sourceHostname",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "destinationHostname": {
                    "name": "destinationHostname",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sourceFulfillmentId": {
                    "name": "sourceFulfillmentId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "destinationFulfillmentId": {
                    "name": "destinationFulfillmentId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "sourceFacility": {
                    "name": "sourceFacility",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "destinationFacility": {
                    "name": "destinationFacility",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "orderId": {
                    "name": "orderId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "item": {
                    "name": "item",
                    "isArray": false,
                    "type": {
                        "nonModel": "ItemsByTransfer"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "sourceWorksheetId": {
                    "name": "sourceWorksheetId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "destinationWorksheetId": {
                    "name": "destinationWorksheetId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "userApproval": {
                    "name": "userApproval",
                    "isArray": false,
                    "type": {
                        "nonModel": "ActionRegister"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "ItemTransfers",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "bySourceFacility",
                        "queryField": "transfersBySourceFacility",
                        "fields": [
                            "sourceFacility"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byDestinationFacility",
                        "queryField": "transfersByDestinationFacility",
                        "fields": [
                            "destinationFacility"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byOrderId",
                        "queryField": "transfersByOrderId",
                        "fields": [
                            "orderId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "bySourceWorksheet",
                        "queryField": "transfersbySourceWorksheet",
                        "fields": [
                            "sourceWorksheetId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byDestinationWorksheet",
                        "queryField": "transfersbyDestinationWorksheet",
                        "fields": [
                            "destinationWorksheetId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "ItemV2": {
            "name": "ItemV2",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "pickers": {
                    "name": "pickers",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "groups": {
                    "name": "groups",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "images": {
                    "name": "images",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "itemId": {
                    "name": "itemId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "productId": {
                    "name": "productId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "orderId": {
                    "name": "orderId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "fulfillment": {
                    "name": "fulfillment",
                    "isArray": true,
                    "type": {
                        "model": "FulfillmentV2"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "itemV2FulfillmentId"
                        ]
                    }
                },
                "eans": {
                    "name": "eans",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "skus": {
                    "name": "skus",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "refs": {
                    "name": "refs",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "isWeighable": {
                    "name": "isWeighable",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "currencyCode": {
                    "name": "currencyCode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "unitOfMeasure": {
                    "name": "unitOfMeasure",
                    "isArray": false,
                    "type": {
                        "enum": "UnitOfMeasure"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "completedQuantity": {
                    "name": "completedQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "unitMultiplier": {
                    "name": "unitMultiplier",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "listPrice": {
                    "name": "listPrice",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "sellingPrice": {
                    "name": "sellingPrice",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "brand": {
                    "name": "brand",
                    "isArray": false,
                    "type": {
                        "nonModel": "Taxonomy"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "categories": {
                    "name": "categories",
                    "isArray": true,
                    "type": {
                        "nonModel": "Taxonomy"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "notes": {
                    "name": "notes",
                    "isArray": true,
                    "type": {
                        "nonModel": "ItemNotes"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "temperature": {
                    "name": "temperature",
                    "isArray": false,
                    "type": {
                        "enum": "Temperature"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "dimensions": {
                    "name": "dimensions",
                    "isArray": false,
                    "type": {
                        "nonModel": "Dimension"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "ItemStatus"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "pickingOptions": {
                    "name": "pickingOptions",
                    "isArray": false,
                    "type": {
                        "nonModel": "ItemPickingOptions"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "invoices": {
                    "name": "invoices",
                    "isArray": true,
                    "type": {
                        "nonModel": "ItemInvoice"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "transfers": {
                    "name": "transfers",
                    "isArray": true,
                    "type": {
                        "nonModel": "ItemTransferDetail"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "returns": {
                    "name": "returns",
                    "isArray": true,
                    "type": {
                        "nonModel": "ItemReturns"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "weighableProduct": {
                    "name": "weighableProduct",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "addedOnFulfillment": {
                    "name": "addedOnFulfillment",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "account": {
                    "name": "account",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "warehouse": {
                    "name": "warehouse",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "metaData": {
                    "name": "metaData",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "location": {
                    "name": "location",
                    "isArray": true,
                    "type": {
                        "nonModel": "CatalogLocation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "facility": {
                    "name": "facility",
                    "isArray": true,
                    "type": {
                        "nonModel": "ItemFacility"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "inventoryData": {
                    "name": "inventoryData",
                    "isArray": true,
                    "type": {
                        "nonModel": "InventoryData"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "ItemType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "rmaId": {
                    "name": "rmaId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "rmaItemId": {
                    "name": "rmaItemId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "clusterId": {
                    "name": "clusterId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "ItemV2s",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byOrder",
                        "queryField": "itemsByOrder",
                        "fields": [
                            "orderId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groupsField": "groups",
                                "groupField": "groups",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "provider": "userPools",
                                "ownerField": "pickers",
                                "allow": "owner",
                                "identityClaim": "cognito:username",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "FulfillmentV2": {
            "name": "FulfillmentV2",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "groups": {
                    "name": "groups",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "item": {
                    "name": "item",
                    "isArray": false,
                    "type": {
                        "model": "ItemV2"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "itemV2FulfillmentId"
                        ]
                    }
                },
                "itemId": {
                    "name": "itemId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "orderId": {
                    "name": "orderId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "worksheetId": {
                    "name": "worksheetId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "assignedAt": {
                    "name": "assignedAt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pickingStartedAt": {
                    "name": "pickingStartedAt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pickedAt": {
                    "name": "pickedAt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "packingStartedAt": {
                    "name": "packingStartedAt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "packedAt": {
                    "name": "packedAt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "facility": {
                    "name": "facility",
                    "isArray": false,
                    "type": {
                        "nonModel": "FacilityInfo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "hostname": {
                    "name": "hostname",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "itemLocation": {
                    "name": "itemLocation",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "originalQuantity": {
                    "name": "originalQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "originalUnitMultiplier": {
                    "name": "originalUnitMultiplier",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "addedOnFulfillment": {
                    "name": "addedOnFulfillment",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "isReplacement": {
                    "name": "isReplacement",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "isTransfer": {
                    "name": "isTransfer",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "priority": {
                    "name": "priority",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "pickerId": {
                    "name": "pickerId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "picking": {
                    "name": "picking",
                    "isArray": false,
                    "type": {
                        "nonModel": "PickingDetail"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "packing": {
                    "name": "packing",
                    "isArray": true,
                    "type": {
                        "nonModel": "PackingDetail"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "sorted": {
                    "name": "sorted",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "isCompleted": {
                    "name": "isCompleted",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "isCancelled": {
                    "name": "isCancelled",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "picker_facility": {
                    "name": "picker_facility",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "itemV2FulfillmentId": {
                    "name": "itemV2FulfillmentId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "worksheetFulfillmentId": {
                    "name": "worksheetFulfillmentId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "FulfillmentV2s",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byOrder",
                        "queryField": "fulfillmentsByOrder",
                        "fields": [
                            "orderId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byPickerFacility",
                        "queryField": "fulfillmentsByPickerFacility",
                        "fields": [
                            "picker_facility"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "gsi-Worksheet.fulfillment",
                        "fields": [
                            "worksheetFulfillmentId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groupsField": "groups",
                                "groupField": "groups",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "OMSChanges": {
            "name": "OMSChanges",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "fulfillmentId": {
                    "name": "fulfillmentId",
                    "isArray": true,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "itemId": {
                    "name": "itemId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "orderId": {
                    "name": "orderId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "sentToOMS": {
                    "name": "sentToOMS",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "payload": {
                    "name": "payload",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "response": {
                    "name": "response",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "OMSChanges",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "subscriptions": null
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byItemId",
                        "fields": [
                            "itemId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byOrderId",
                        "fields": [
                            "orderId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Order": {
            "name": "Order",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "groups": {
                    "name": "groups",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "billing": {
                    "name": "billing",
                    "isArray": false,
                    "type": {
                        "nonModel": "Billing"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "affiliateId": {
                    "name": "affiliateId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "conversationID": {
                    "name": "conversationID",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "notificationsID": {
                    "name": "notificationsID",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "customer": {
                    "name": "customer",
                    "isArray": false,
                    "type": {
                        "model": "Customer"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "customerId"
                        ]
                    }
                },
                "customerId": {
                    "name": "customerId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "address": {
                    "name": "address",
                    "isArray": false,
                    "type": {
                        "model": "Address"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "addressId"
                        ]
                    }
                },
                "addressId": {
                    "name": "addressId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "deliveryDate": {
                    "name": "deliveryDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "deliveryChannel": {
                    "name": "deliveryChannel",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "finishedDate": {
                    "name": "finishedDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "categoriesIds": {
                    "name": "categoriesIds",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "hostname": {
                    "name": "hostname",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "parentAccount": {
                    "name": "parentAccount",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "invoices": {
                    "name": "invoices",
                    "isArray": true,
                    "type": {
                        "nonModel": "Invoice"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "totalItems": {
                    "name": "totalItems",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "totalUnits": {
                    "name": "totalUnits",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "totalCompletedItems": {
                    "name": "totalCompletedItems",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "totalCompletedUnits": {
                    "name": "totalCompletedUnits",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "model": "ItemV2"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "orderId"
                        ]
                    }
                },
                "isInvoiced": {
                    "name": "isInvoiced",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "isOrderSplit": {
                    "name": "isOrderSplit",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "metaData": {
                    "name": "metaData",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "marketingData": {
                    "name": "marketingData",
                    "isArray": false,
                    "type": {
                        "nonModel": "MarketingData"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "notes": {
                    "name": "notes",
                    "isArray": true,
                    "type": {
                        "nonModel": "OrderNotes"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "observations": {
                    "name": "observations",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "orderAssignment": {
                    "name": "orderAssignment",
                    "isArray": true,
                    "type": {
                        "nonModel": "OrderAssignment"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "orderId": {
                    "name": "orderId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "payment": {
                    "name": "payment",
                    "isArray": true,
                    "type": {
                        "nonModel": "Payment"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "prepareDate": {
                    "name": "prepareDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "collectedDate": {
                    "name": "collectedDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "salesSourceId": {
                    "name": "salesSourceId",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "salesChannel": {
                    "name": "salesChannel",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "commercialPolicy": {
                    "name": "commercialPolicy",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sequence": {
                    "name": "sequence",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "shipping": {
                    "name": "shipping",
                    "isArray": false,
                    "type": {
                        "nonModel": "Shipping"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "shippingEstimatedDateMin": {
                    "name": "shippingEstimatedDateMin",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "OrderStatus"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "lastStatus": {
                    "name": "lastStatus",
                    "isArray": false,
                    "type": {
                        "enum": "OrderStatus"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "lastStatusChange": {
                    "name": "lastStatusChange",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "storeConfigId": {
                    "name": "storeConfigId",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "transactionDate": {
                    "name": "transactionDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pickingStartedAt": {
                    "name": "pickingStartedAt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pickedAt": {
                    "name": "pickedAt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "packingStartedAt": {
                    "name": "packingStartedAt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "packedAt": {
                    "name": "packedAt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "packages": {
                    "name": "packages",
                    "isArray": true,
                    "type": {
                        "model": "Package"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "orderId"
                        ]
                    }
                },
                "historicalOrder": {
                    "name": "historicalOrder",
                    "isArray": true,
                    "type": {
                        "model": "HistoricalOrder"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "orderId"
                        ]
                    }
                },
                "tags": {
                    "name": "tags",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "appliedAutomations": {
                    "name": "appliedAutomations",
                    "isArray": true,
                    "type": {
                        "nonModel": "CAppliedAutomation"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "totals": {
                    "name": "totals",
                    "isArray": true,
                    "type": {
                        "nonModel": "Totals"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "hasPendingRmas": {
                    "name": "hasPendingRmas",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Orders",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "orderId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byCustomer",
                        "fields": [
                            "customerId",
                            "orderId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byAddress",
                        "fields": [
                            "addressId",
                            "orderId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byStatusAndHostname",
                        "queryField": "ordersByStatusAndHostname",
                        "fields": [
                            "status",
                            "hostname"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groupsField": "groups",
                                "groupField": "groups",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "ItemLogs": {
            "name": "ItemLogs",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "orderId": {
                    "name": "orderId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "itemId": {
                    "name": "itemId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "uniqueId": {
                    "name": "uniqueId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "lastStatus": {
                    "name": "lastStatus",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "metadata": {
                    "name": "metadata",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "timestamp": {
                    "name": "timestamp",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "ItemLogs",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byUniqueId",
                        "queryField": "logsByUniqueId",
                        "fields": [
                            "uniqueId",
                            "id"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Package": {
            "name": "Package",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "groups": {
                    "name": "groups",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "orderId": {
                    "name": "orderId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "envelope": {
                    "name": "envelope",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "courier": {
                    "name": "courier",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "PackageType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "ItemOrderPackage"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "dimensions": {
                    "name": "dimensions",
                    "isArray": false,
                    "type": {
                        "nonModel": "Dimensions"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "PackageStatus"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "storeConfigId": {
                    "name": "storeConfigId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "packageLocation": {
                    "name": "packageLocation",
                    "isArray": true,
                    "type": {
                        "nonModel": "PackageLocation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Packages",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byOrder",
                        "queryField": "packagesByOrderId",
                        "fields": [
                            "orderId",
                            "id"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groupsField": "groups",
                                "groupField": "groups",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "PickingActions": {
            "name": "PickingActions",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "PickingActionType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "worksheetId": {
                    "name": "worksheetId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "worksheetSequence": {
                    "name": "worksheetSequence",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "storeConfigId": {
                    "name": "storeConfigId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "orderId": {
                    "name": "orderId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "conversationID": {
                    "name": "conversationID",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdFrom": {
                    "name": "createdFrom",
                    "isArray": false,
                    "type": {
                        "enum": "PickingActionFrom"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "actionCreated": {
                    "name": "actionCreated",
                    "isArray": false,
                    "type": {
                        "nonModel": "ActionRegister"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "actionApproved": {
                    "name": "actionApproved",
                    "isArray": false,
                    "type": {
                        "nonModel": "ActionRegister"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "actionConfirmed": {
                    "name": "actionConfirmed",
                    "isArray": false,
                    "type": {
                        "nonModel": "ActionRegister"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "PickingActionStatus"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "payload": {
                    "name": "payload",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "PickingActions",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byWorksheet",
                        "queryField": "pickingActionsByWorksheet",
                        "fields": [
                            "worksheetId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byStoreConfig",
                        "queryField": "pickingActionsByStoreConfig",
                        "fields": [
                            "storeConfigId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byOrder",
                        "queryField": "pickingActionsByOrder",
                        "fields": [
                            "orderId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Return": {
            "name": "Return",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "orderId": {
                    "name": "orderId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "sequence": {
                    "name": "sequence",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "ReturnStatus"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "hostname": {
                    "name": "hostname",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "storeConfigId": {
                    "name": "storeConfigId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "order": {
                    "name": "order",
                    "isArray": false,
                    "type": {
                        "nonModel": "OrderRMA"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "customer": {
                    "name": "customer",
                    "isArray": false,
                    "type": {
                        "nonModel": "CustomerRMA"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "tags": {
                    "name": "tags",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "shippingRequest": {
                    "name": "shippingRequest",
                    "isArray": false,
                    "type": {
                        "model": "RMAShipping"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "returnShippingRequestId"
                        ]
                    }
                },
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "model": "RMAItems"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "rmaId"
                        ]
                    }
                },
                "notes": {
                    "name": "notes",
                    "isArray": true,
                    "type": {
                        "nonModel": "RMANotes"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "nps": {
                    "name": "nps",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "history": {
                    "name": "history",
                    "isArray": true,
                    "type": {
                        "model": "RMAHistory"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "rmaId"
                        ]
                    }
                },
                "transactions": {
                    "name": "transactions",
                    "isArray": true,
                    "type": {
                        "model": "RMATransaction"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "rmaId"
                        ]
                    }
                },
                "service": {
                    "name": "service",
                    "isArray": false,
                    "type": {
                        "nonModel": "RMAServiceTracking"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "deliveryReference": {
                    "name": "deliveryReference",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "appliedAutomations": {
                    "name": "appliedAutomations",
                    "isArray": true,
                    "type": {
                        "nonModel": "CAppliedAutomation"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "returnShippingRequestId": {
                    "name": "returnShippingRequestId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Returns",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byOrder",
                        "queryField": "returnsByOrder",
                        "fields": [
                            "orderId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "RMAShipping": {
            "name": "RMAShipping",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "RmaShippingTypes"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "current": {
                    "name": "current",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "pickupAddress": {
                    "name": "pickupAddress",
                    "isArray": false,
                    "type": {
                        "nonModel": "PickupAddress"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "store": {
                    "name": "store",
                    "isArray": false,
                    "type": {
                        "nonModel": "Store"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "deliveryAddress": {
                    "name": "deliveryAddress",
                    "isArray": false,
                    "type": {
                        "nonModel": "DeliveryAddress"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "shippingServiceId": {
                    "name": "shippingServiceId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "creationDate": {
                    "name": "creationDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "pickupDate": {
                    "name": "pickupDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "deliveryDate": {
                    "name": "deliveryDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "shippingPrice": {
                    "name": "shippingPrice",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "RmaShippingStatus"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "deliverySlot": {
                    "name": "deliverySlot",
                    "isArray": false,
                    "type": {
                        "nonModel": "RMAShippingDeliverySlot"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "RMAShippings",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byServiceId",
                        "queryField": "shippingByServiceId",
                        "fields": [
                            "shippingServiceId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "RMAItems": {
            "name": "RMAItems",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "rmaId": {
                    "name": "rmaId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "itemId": {
                    "name": "itemId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "orderId": {
                    "name": "orderId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "image": {
                    "name": "image",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "sellingPrice": {
                    "name": "sellingPrice",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "currencyCode": {
                    "name": "currencyCode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "RmaItemsStatus"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "storeConfigId": {
                    "name": "storeConfigId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "deliveryReference": {
                    "name": "deliveryReference",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sage": {
                    "name": "sage",
                    "isArray": false,
                    "type": {
                        "model": "RMASageItem"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "rMAItemsSageId"
                        ]
                    }
                },
                "requestedResolution": {
                    "name": "requestedResolution",
                    "isArray": false,
                    "type": {
                        "enum": "ItemResolutionType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "requestType": {
                    "name": "requestType",
                    "isArray": false,
                    "type": {
                        "enum": "ItemRequestType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "input": {
                    "name": "input",
                    "isArray": false,
                    "type": {
                        "nonModel": "RMAItemInput"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "shipping": {
                    "name": "shipping",
                    "isArray": true,
                    "type": {
                        "nonModel": "ItemShipping"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "notes": {
                    "name": "notes",
                    "isArray": true,
                    "type": {
                        "nonModel": "RMANotes"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "resolution": {
                    "name": "resolution",
                    "isArray": false,
                    "type": {
                        "model": "RMAItemResolution"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "rMAItemsResolutionId"
                        ]
                    }
                },
                "itemLogs": {
                    "name": "itemLogs",
                    "isArray": true,
                    "type": {
                        "model": "ItemLogs"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "uniqueId"
                        ]
                    }
                },
                "policyId": {
                    "name": "policyId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "rMAItemsSageId": {
                    "name": "rMAItemsSageId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "rMAItemsResolutionId": {
                    "name": "rMAItemsResolutionId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "RMAItems",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byRma",
                        "fields": [
                            "rmaId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byOrder",
                        "fields": [
                            "orderId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "RMAReplacement": {
            "name": "RMAReplacement",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "itemId": {
                    "name": "itemId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "rmaId": {
                    "name": "rmaId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "replacementItem": {
                    "name": "replacementItem",
                    "isArray": false,
                    "type": {
                        "nonModel": "RMAReplacementItem"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "recommendedItem": {
                    "name": "recommendedItem",
                    "isArray": false,
                    "type": {
                        "nonModel": "RMAReplacementItem"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "refund": {
                    "name": "refund",
                    "isArray": false,
                    "type": {
                        "model": "RMARefund"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "rMAReplacementRefundId"
                        ]
                    }
                },
                "storeCredit": {
                    "name": "storeCredit",
                    "isArray": false,
                    "type": {
                        "model": "RMAStoreCredit"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "rMAReplacementStoreCreditId"
                        ]
                    }
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "RmaReplacementStatus"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "storeConfigId": {
                    "name": "storeConfigId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "worksheetId": {
                    "name": "worksheetId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "fulfillmentStatus": {
                    "name": "fulfillmentStatus",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "shipping": {
                    "name": "shipping",
                    "isArray": false,
                    "type": {
                        "nonModel": "ItemShipping"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "approvedBy": {
                    "name": "approvedBy",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "action": {
                    "name": "action",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "rMAReplacementRefundId": {
                    "name": "rMAReplacementRefundId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "rMAReplacementStoreCreditId": {
                    "name": "rMAReplacementStoreCreditId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "RMAReplacements",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "subscriptions": null
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byRma",
                        "fields": [
                            "rmaId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "RMARefund": {
            "name": "RMARefund",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "storeConfigId": {
                    "name": "storeConfigId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "storeId": {
                    "name": "storeId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "transactionId": {
                    "name": "transactionId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "confirmationId": {
                    "name": "confirmationId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "customerId": {
                    "name": "customerId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "paymentMethod": {
                    "name": "paymentMethod",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "paymentData": {
                    "name": "paymentData",
                    "isArray": false,
                    "type": {
                        "nonModel": "Payment"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "rmaId": {
                    "name": "rmaId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "itemId": {
                    "name": "itemId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "amount": {
                    "name": "amount",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "RmaRefundStatus"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "confirmationDate": {
                    "name": "confirmationDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "itemQuantity": {
                    "name": "itemQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "createdBy": {
                    "name": "createdBy",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "approvedBy": {
                    "name": "approvedBy",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "metadata": {
                    "name": "metadata",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "attachments": {
                    "name": "attachments",
                    "isArray": true,
                    "type": {
                        "nonModel": "ItemAttachment"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "RMARefunds",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "RMAStoreCredit": {
            "name": "RMAStoreCredit",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "rmaId": {
                    "name": "rmaId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "itemId": {
                    "name": "itemId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "orderId": {
                    "name": "orderId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "customerId": {
                    "name": "customerId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "currencyCode": {
                    "name": "currencyCode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "storeConfigId": {
                    "name": "storeConfigId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "reason": {
                    "name": "reason",
                    "isArray": false,
                    "type": {
                        "enum": "RmaStoreCreditReason"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "RmaStoreCreditType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "storeCreditId": {
                    "name": "storeCreditId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "creationDate": {
                    "name": "creationDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "startDate": {
                    "name": "startDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "expirationDate": {
                    "name": "expirationDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "amount": {
                    "name": "amount",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "RmaStoreCreditStatus"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "approvedBy": {
                    "name": "approvedBy",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "metadata": {
                    "name": "metadata",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "RMAStoreCredits",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "RMASageItem": {
            "name": "RMASageItem",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "rmaId": {
                    "name": "rmaId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "itemId": {
                    "name": "itemId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "approved": {
                    "name": "approved",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "storeConfigId": {
                    "name": "storeConfigId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "images": {
                    "name": "images",
                    "isArray": true,
                    "type": {
                        "nonModel": "RMASageItemImage"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "productMatch": {
                    "name": "productMatch",
                    "isArray": false,
                    "type": {
                        "nonModel": "RMASageItemProductMatch"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "justification": {
                    "name": "justification",
                    "isArray": false,
                    "type": {
                        "nonModel": "RMASageItemJustification"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "accuracy": {
                    "name": "accuracy",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "result": {
                    "name": "result",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "shortDescription": {
                    "name": "shortDescription",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "errors": {
                    "name": "errors",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "lang": {
                    "name": "lang",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "RMASageItems",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "RMAItemResolution": {
            "name": "RMAItemResolution",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "backToStockQuantity": {
                    "name": "backToStockQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "approved": {
                    "name": "approved",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "ItemResolutionType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "replacement": {
                    "name": "replacement",
                    "isArray": false,
                    "type": {
                        "model": "RMAReplacement"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "rMAItemResolutionReplacementId"
                        ]
                    }
                },
                "refund": {
                    "name": "refund",
                    "isArray": false,
                    "type": {
                        "model": "RMARefund"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "rMAItemResolutionRefundId"
                        ]
                    }
                },
                "storeCredit": {
                    "name": "storeCredit",
                    "isArray": false,
                    "type": {
                        "model": "RMAStoreCredit"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "rMAItemResolutionStoreCreditId"
                        ]
                    }
                },
                "coupon": {
                    "name": "coupon",
                    "isArray": false,
                    "type": {
                        "nonModel": "ResolutionCoupon"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "giftcard": {
                    "name": "giftcard",
                    "isArray": false,
                    "type": {
                        "nonModel": "ResolutionGiftCard"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "attachments": {
                    "name": "attachments",
                    "isArray": true,
                    "type": {
                        "nonModel": "ItemAttachment"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "action": {
                    "name": "action",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "transaction": {
                    "name": "transaction",
                    "isArray": false,
                    "type": {
                        "nonModel": "RMAResolutionTransaction"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "rMAItemResolutionReplacementId": {
                    "name": "rMAItemResolutionReplacementId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "rMAItemResolutionRefundId": {
                    "name": "rMAItemResolutionRefundId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "rMAItemResolutionStoreCreditId": {
                    "name": "rMAItemResolutionStoreCreditId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "RMAItemResolutions",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "RMATransaction": {
            "name": "RMATransaction",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "transactionId": {
                    "name": "transactionId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "rmaId": {
                    "name": "rmaId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "orderId": {
                    "name": "orderId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "itemId": {
                    "name": "itemId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "RmaTransactionType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "action": {
                    "name": "action",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdBy": {
                    "name": "createdBy",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "account": {
                    "name": "account",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "amount": {
                    "name": "amount",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "creationDate": {
                    "name": "creationDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "RmaTransactionStatus"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "data": {
                    "name": "data",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "RMATransactions",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byRma",
                        "fields": [
                            "rmaId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "RMAHistory": {
            "name": "RMAHistory",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "rmaId": {
                    "name": "rmaId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "lastStatus": {
                    "name": "lastStatus",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "rmaStatus": {
                    "name": "rmaStatus",
                    "isArray": false,
                    "type": {
                        "enum": "ReturnStatus"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "source": {
                    "name": "source",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "user": {
                    "name": "user",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "metadata": {
                    "name": "metadata",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "RMAHistories",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byRma",
                        "fields": [
                            "rmaId",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "RMASettings": {
            "name": "RMASettings",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "active": {
                    "name": "active",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "storeConfigId": {
                    "name": "storeConfigId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "hostname": {
                    "name": "hostname",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "parentAccount": {
                    "name": "parentAccount",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "rmaIdFormat": {
                    "name": "rmaIdFormat",
                    "isArray": false,
                    "type": {
                        "nonModel": "RMASettingsIdFormat"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "rmaStatus": {
                    "name": "rmaStatus",
                    "isArray": true,
                    "type": {
                        "nonModel": "RMASettingsStatus"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "tags": {
                    "name": "tags",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "policies": {
                    "name": "policies",
                    "isArray": true,
                    "type": {
                        "model": "RMAPolicies"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "rmaSettingsId"
                        ]
                    }
                },
                "forms": {
                    "name": "forms",
                    "isArray": true,
                    "type": {
                        "model": "RMAForms"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "rmaSettingId"
                        ]
                    }
                },
                "perks": {
                    "name": "perks",
                    "isArray": true,
                    "type": {
                        "model": "RMAPerks"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "rmaSettingsId"
                        ]
                    }
                },
                "returnReasons": {
                    "name": "returnReasons",
                    "isArray": true,
                    "type": {
                        "model": "RMAReturnReasons"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "rmaSettingsId"
                        ]
                    }
                },
                "automations": {
                    "name": "automations",
                    "isArray": true,
                    "type": {
                        "model": "Automation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "id"
                        ]
                    }
                },
                "termsAndConditions": {
                    "name": "termsAndConditions",
                    "isArray": true,
                    "type": {
                        "nonModel": "RMASettingTermAndCondition"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "deliveryMethods": {
                    "name": "deliveryMethods",
                    "isArray": true,
                    "type": {
                        "model": "RMASettingDeliveryMethod"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "rmaSettingsId"
                        ]
                    }
                },
                "logistics": {
                    "name": "logistics",
                    "isArray": true,
                    "type": {
                        "model": "RMALogistics"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "rmaSettingsId"
                        ]
                    }
                },
                "iaSetting": {
                    "name": "iaSetting",
                    "isArray": false,
                    "type": {
                        "nonModel": "IASettingRMA"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "RMASettings",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byAccount",
                        "fields": [
                            "hostname"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "RMAPolicies": {
            "name": "RMAPolicies",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": true,
                    "type": {
                        "enum": "RmaPoliciesType"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "storeConfigId": {
                    "name": "storeConfigId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "rmaSettingsId": {
                    "name": "rmaSettingsId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "group": {
                    "name": "group",
                    "isArray": false,
                    "type": {
                        "model": "RMAPoliciesGroup"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "rMAPoliciesGroupId"
                        ]
                    }
                },
                "active": {
                    "name": "active",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "rules": {
                    "name": "rules",
                    "isArray": true,
                    "type": {
                        "model": "RMAPoliciesRules"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "rmaPolicyId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "rMAPoliciesGroupId": {
                    "name": "rMAPoliciesGroupId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "RMAPolicies",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "subscriptions": null
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "bySetting",
                        "fields": [
                            "rmaSettingsId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "RMAPoliciesRules": {
            "name": "RMAPoliciesRules",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "rmaPolicyId": {
                    "name": "rmaPolicyId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "query": {
                    "name": "query",
                    "isArray": false,
                    "type": {
                        "nonModel": "AutomationQuery"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "RMAPoliciesRules",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byPolicy",
                        "fields": [
                            "rmaPolicyId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "RMAPoliciesGroup": {
            "name": "RMAPoliciesGroup",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "storeConfigId": {
                    "name": "storeConfigId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "rmaSettingsId": {
                    "name": "rmaSettingsId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "active": {
                    "name": "active",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "RMAPoliciesGroups",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "subscriptions": null
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "RMAForms": {
            "name": "RMAForms",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "rmaSettingId": {
                    "name": "rmaSettingId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "website_url": {
                    "name": "website_url",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "returnReasons": {
                    "name": "returnReasons",
                    "isArray": true,
                    "type": {
                        "model": "RMAReturnReasons"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "id"
                        ]
                    }
                },
                "policyGroup": {
                    "name": "policyGroup",
                    "isArray": false,
                    "type": {
                        "model": "RMAPoliciesGroup"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "rMAFormsPolicyGroupId"
                        ]
                    }
                },
                "fields": {
                    "name": "fields",
                    "isArray": true,
                    "type": {
                        "nonModel": "RMASettingField"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "finalInstructions": {
                    "name": "finalInstructions",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "rMAFormsPolicyGroupId": {
                    "name": "rMAFormsPolicyGroupId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "RMAForms",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "subscriptions": null
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "bySetting",
                        "fields": [
                            "rmaSettingId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "RMAPerks": {
            "name": "RMAPerks",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "storeConfigId": {
                    "name": "storeConfigId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "rmaSettingsId": {
                    "name": "rmaSettingsId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "RmaPerksType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "active": {
                    "name": "active",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "RMAPerks",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "subscriptions": null
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "bySetting",
                        "fields": [
                            "rmaSettingsId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "RMAReturnReasons": {
            "name": "RMAReturnReasons",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "priority": {
                    "name": "priority",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "rmaSettingsId": {
                    "name": "rmaSettingsId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "RmaReturnReasonsType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "active": {
                    "name": "active",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "RMAReturnReasons",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "subscriptions": null
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "bySetting",
                        "fields": [
                            "rmaSettingsId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "gsi-RMAForms.returnReasons",
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "RMASettingDeliveryMethod": {
            "name": "RMASettingDeliveryMethod",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "rmaSettingsId": {
                    "name": "rmaSettingsId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "pickup": {
                    "name": "pickup",
                    "isArray": false,
                    "type": {
                        "nonModel": "DeliveryMethodPickup"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "deliveryToStore": {
                    "name": "deliveryToStore",
                    "isArray": false,
                    "type": {
                        "nonModel": "DeliveryMethodDeliveryToStore"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "deliveryToAddress": {
                    "name": "deliveryToAddress",
                    "isArray": false,
                    "type": {
                        "nonModel": "DeliveryMethodDeliveryToAddress"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "RMASettingDeliveryMethods",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "subscriptions": null
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "bySetting",
                        "fields": [
                            "rmaSettingsId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "RMALogistics": {
            "name": "RMALogistics",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "rmaSettingsId": {
                    "name": "rmaSettingsId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "office": {
                    "name": "office",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "city": {
                    "name": "city",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "country": {
                    "name": "country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "hours": {
                    "name": "hours",
                    "isArray": true,
                    "type": {
                        "nonModel": "RMALogisticsHours"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "RMALogistics",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "subscriptions": null
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "bySetting",
                        "fields": [
                            "rmaSettingsId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "SalesChannel": {
            "name": "SalesChannel",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "groups": {
                    "name": "groups",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "salesSource": {
                    "name": "salesSource",
                    "isArray": true,
                    "type": {
                        "model": "SalesSource"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "salesChannelSalesSourceId"
                        ]
                    }
                },
                "account": {
                    "name": "account",
                    "isArray": false,
                    "type": {
                        "model": "Account"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "accountSalesChannelsId"
                        ]
                    }
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "AccountTypes"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "isActive": {
                    "name": "isActive",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "paymentMethods": {
                    "name": "paymentMethods",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "shippingMethods": {
                    "name": "shippingMethods",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "shippingTypes": {
                    "name": "shippingTypes",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "commercialPolicies": {
                    "name": "commercialPolicies",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "orderTags": {
                    "name": "orderTags",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "packages": {
                    "name": "packages",
                    "isArray": true,
                    "type": {
                        "nonModel": "AvailablePackages"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "globalOrders": {
                    "name": "globalOrders",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "localOrders": {
                    "name": "localOrders",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "pickingMethod": {
                    "name": "pickingMethod",
                    "isArray": false,
                    "type": {
                        "enum": "PickingMethod"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "allowQuickCollection": {
                    "name": "allowQuickCollection",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "allowOrderNotes": {
                    "name": "allowOrderNotes",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "allowItemNotes": {
                    "name": "allowItemNotes",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "allowAutomaticPacking": {
                    "name": "allowAutomaticPacking",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "allowMultiPicking": {
                    "name": "allowMultiPicking",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "allowExpressFulfillment": {
                    "name": "allowExpressFulfillment",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "allowWorksheetsReAssign": {
                    "name": "allowWorksheetsReAssign",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "allowStartedWorksheetsReAssign": {
                    "name": "allowStartedWorksheetsReAssign",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "allowPackagesReport": {
                    "name": "allowPackagesReport",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "allowItemTransfers": {
                    "name": "allowItemTransfers",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "autoAcceptIncomingTransfers": {
                    "name": "autoAcceptIncomingTransfers",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "enableWorksheetsNotes": {
                    "name": "enableWorksheetsNotes",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "enableReplacementOptions": {
                    "name": "enableReplacementOptions",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "enableSupportChat": {
                    "name": "enableSupportChat",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "needsApproval": {
                    "name": "needsApproval",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "changesConfig": {
                    "name": "changesConfig",
                    "isArray": false,
                    "type": {
                        "nonModel": "ChangesConfig"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "preparationTime": {
                    "name": "preparationTime",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "webhooks": {
                    "name": "webhooks",
                    "isArray": true,
                    "type": {
                        "model": "Webhook"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "salesChannelId"
                        ]
                    }
                },
                "dynamicBarcodes": {
                    "name": "dynamicBarcodes",
                    "isArray": false,
                    "type": {
                        "nonModel": "DynamicBarcodes"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "printing": {
                    "name": "printing",
                    "isArray": false,
                    "type": {
                        "nonModel": "PrintingConfiguration"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "isMigratedFromFulfillment": {
                    "name": "isMigratedFromFulfillment",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "itemsLocation": {
                    "name": "itemsLocation",
                    "isArray": false,
                    "type": {
                        "nonModel": "ItemsLocation"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "itemInformation": {
                    "name": "itemInformation",
                    "isArray": true,
                    "type": {
                        "enum": "ItemInformation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "showOrdersInfoTab": {
                    "name": "showOrdersInfoTab",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "showCustomerInfoPerOrder": {
                    "name": "showCustomerInfoPerOrder",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "askPickingConfirmation": {
                    "name": "askPickingConfirmation",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "forceConfirmEANs": {
                    "name": "forceConfirmEANs",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "accountSalesChannelsId": {
                    "name": "accountSalesChannelsId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "SalesChannels",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groupsField": "groups",
                                "groupField": "groups",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Service": {
            "name": "Service",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "orderId": {
                    "name": "orderId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "carrierId": {
                    "name": "carrierId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "serviceId": {
                    "name": "serviceId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "carrierLogo": {
                    "name": "carrierLogo",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "carrierName": {
                    "name": "carrierName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "seller": {
                    "name": "seller",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "ServiceStatus"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "labels": {
                    "name": "labels",
                    "isArray": true,
                    "type": {
                        "model": "TrackingLabel"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "serviceID"
                        ]
                    }
                },
                "sender": {
                    "name": "sender",
                    "isArray": false,
                    "type": {
                        "nonModel": "ServiceSender"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "receiver": {
                    "name": "receiver",
                    "isArray": false,
                    "type": {
                        "nonModel": "ServiceReceiver"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "agent": {
                    "name": "agent",
                    "isArray": false,
                    "type": {
                        "nonModel": "ServiceAgent"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "trackingUrl": {
                    "name": "trackingUrl",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "totalDistanceTraveled": {
                    "name": "totalDistanceTraveled",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "rating": {
                    "name": "rating",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "comments": {
                    "name": "comments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "evidences": {
                    "name": "evidences",
                    "isArray": true,
                    "type": {
                        "nonModel": "ServiceEvidence"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "packages": {
                    "name": "packages",
                    "isArray": true,
                    "type": {
                        "nonModel": "PackageService"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "timeline": {
                    "name": "timeline",
                    "isArray": true,
                    "type": {
                        "model": "TrackingTimeline"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "serviceID"
                        ]
                    }
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "ServiceType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "notes": {
                    "name": "notes",
                    "isArray": true,
                    "type": {
                        "nonModel": "ServiceNotes"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "orderValue": {
                    "name": "orderValue",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "paymentMethod": {
                    "name": "paymentMethod",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "carrierServiceType": {
                    "name": "carrierServiceType",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "rate": {
                    "name": "rate",
                    "isArray": false,
                    "type": {
                        "nonModel": "ServiceRate"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "shippingEstimatedDate": {
                    "name": "shippingEstimatedDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "shippingFinishedDate": {
                    "name": "shippingFinishedDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "metaData": {
                    "name": "metaData",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "timezone": {
                    "name": "timezone",
                    "isArray": false,
                    "type": {
                        "nonModel": "CTimezone"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "tags": {
                    "name": "tags",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "appliedAutomations": {
                    "name": "appliedAutomations",
                    "isArray": true,
                    "type": {
                        "nonModel": "CAppliedAutomation"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "deliveredDate": {
                    "name": "deliveredDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "collection": {
                    "name": "collection",
                    "isArray": false,
                    "type": {
                        "nonModel": "ServiceCollection"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "transferManagement": {
                    "name": "transferManagement",
                    "isArray": false,
                    "type": {
                        "nonModel": "ServiceTransferManagement"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "rmaId": {
                    "name": "rmaId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Services",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byOrderId",
                        "queryField": "servicesByOrderId",
                        "fields": [
                            "orderId",
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byCarrierId",
                        "fields": [
                            "carrierId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "StoreConfig": {
            "name": "StoreConfig",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "groups": {
                    "name": "groups",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "general": {
                    "name": "general",
                    "isArray": false,
                    "type": {
                        "nonModel": "GeneralConfig"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "categories": {
                    "name": "categories",
                    "isArray": true,
                    "type": {
                        "nonModel": "CategoriesConfiguration"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "batchInterval": {
                    "name": "batchInterval",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "maxItemsPerBatch": {
                    "name": "maxItemsPerBatch",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "maxItemsPerWorksheet": {
                    "name": "maxItemsPerWorksheet",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "salesSources": {
                    "name": "salesSources",
                    "isArray": true,
                    "type": {
                        "model": "SalesSource"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "storeConfigSalesSourcesId"
                        ]
                    }
                },
                "salesChannel": {
                    "name": "salesChannel",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "timezone": {
                    "name": "timezone",
                    "isArray": false,
                    "type": {
                        "nonModel": "CTimezone"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "accountStoreConfigId": {
                    "name": "accountStoreConfigId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "StoreConfigs",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "bySalesChannel",
                        "queryField": "storeConfigBySalesChannel",
                        "fields": [
                            "salesChannel",
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "gsi-Account.storeConfig",
                        "fields": [
                            "accountStoreConfigId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groupsField": "groups",
                                "groupField": "groups",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Tags": {
            "name": "Tags",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "seller": {
                    "name": "seller",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "model": {
                    "name": "model",
                    "isArray": false,
                    "type": {
                        "enum": "TagModel"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "tags": {
                    "name": "tags",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Tags",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "subscriptions": null
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id",
                            "seller",
                            "model"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "bySeller",
                        "fields": [
                            "seller"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byModel",
                        "fields": [
                            "model"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "TrackingLabel": {
            "name": "TrackingLabel",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "serviceID": {
                    "name": "serviceID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "url": {
                    "name": "url",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "ServiceLabelType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "TrackingLabels",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "ByServiceId",
                        "fields": [
                            "serviceID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "TrackingSettings": {
            "name": "TrackingSettings",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "account": {
                    "name": "account",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "country": {
                    "name": "country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "city": {
                    "name": "city",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "address": {
                    "name": "address",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "additionalAddress": {
                    "name": "additionalAddress",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "neighborhood": {
                    "name": "neighborhood",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "number": {
                    "name": "number",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "reference": {
                    "name": "reference",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "zipCode": {
                    "name": "zipCode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "timeZone": {
                    "name": "timeZone",
                    "isArray": false,
                    "type": {
                        "nonModel": "CTimezone"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "latitude": {
                    "name": "latitude",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "longitude": {
                    "name": "longitude",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "contactName": {
                    "name": "contactName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "phone": {
                    "name": "phone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "authorized": {
                    "name": "authorized",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "inheritSettings": {
                    "name": "inheritSettings",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "shareCustomerInformationWithCarriers": {
                    "name": "shareCustomerInformationWithCarriers",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "TrackingSettings",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "TrackingTimeline": {
            "name": "TrackingTimeline",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "serviceID": {
                    "name": "serviceID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "TrackingTimelineType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "author": {
                    "name": "author",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "metaData": {
                    "name": "metaData",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "TrackingTimelines",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "subscriptions": null
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "ByServiceId",
                        "fields": [
                            "serviceID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "SalesSource": {
            "name": "SalesSource",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "groups": {
                    "name": "groups",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "warehouseId": {
                    "name": "warehouseId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "warehouseName": {
                    "name": "warehouseName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "salesChannel": {
                    "name": "salesChannel",
                    "isArray": false,
                    "type": {
                        "model": "SalesChannel"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "salesChannelSalesSourceId"
                        ]
                    }
                },
                "storeConfig": {
                    "name": "storeConfig",
                    "isArray": false,
                    "type": {
                        "model": "StoreConfig"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "storeConfigSalesSourcesId"
                        ]
                    }
                },
                "configuration": {
                    "name": "configuration",
                    "isArray": true,
                    "type": {
                        "nonModel": "CConfigurations"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "downloadOrders": {
                    "name": "downloadOrders",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "salesChannelSalesSourceId": {
                    "name": "salesChannelSalesSourceId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "storeConfigSalesSourcesId": {
                    "name": "storeConfigSalesSourcesId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "SalesSources",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byName",
                        "fields": [
                            "warehouseName"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groupsField": "groups",
                                "groupField": "groups",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Webhook": {
            "name": "Webhook",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "salesChannelId": {
                    "name": "salesChannelId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "active": {
                    "name": "active",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "WebhookType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "url": {
                    "name": "url",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "restType": {
                    "name": "restType",
                    "isArray": false,
                    "type": {
                        "enum": "RestType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "headers": {
                    "name": "headers",
                    "isArray": true,
                    "type": {
                        "nonModel": "WebhookVariables"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "params": {
                    "name": "params",
                    "isArray": true,
                    "type": {
                        "nonModel": "WebhookVariables"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "facilities": {
                    "name": "facilities",
                    "isArray": true,
                    "type": "String",
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "showItems": {
                    "name": "showItems",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "showChanges": {
                    "name": "showChanges",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Webhooks",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "BySalesChannelId",
                        "fields": [
                            "salesChannelId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "CustomerService",
                                    "Admin",
                                    "Picker",
                                    "SuperAdmin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Worksheet": {
            "name": "Worksheet",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "groups": {
                    "name": "groups",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "storeConfig": {
                    "name": "storeConfig",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "hostname": {
                    "name": "hostname",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "fulfillment": {
                    "name": "fulfillment",
                    "isArray": true,
                    "type": {
                        "model": "FulfillmentV2"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "worksheetFulfillmentId"
                        ]
                    }
                },
                "categoriesIds": {
                    "name": "categoriesIds",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "conversationID": {
                    "name": "conversationID",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "notificationsID": {
                    "name": "notificationsID",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "initDate": {
                    "name": "initDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "finishedDate": {
                    "name": "finishedDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "finishEstimatedDate": {
                    "name": "finishEstimatedDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "worksheetId": {
                    "name": "worksheetId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "isPaused": {
                    "name": "isPaused",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "pauses": {
                    "name": "pauses",
                    "isArray": true,
                    "type": {
                        "nonModel": "Pauses"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "ordersIds": {
                    "name": "ordersIds",
                    "isArray": true,
                    "type": {
                        "nonModel": "OrderPriority"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "pickerAssignment": {
                    "name": "pickerAssignment",
                    "isArray": true,
                    "type": {
                        "nonModel": "PickerAssignment"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "WorksheetStatus"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "lastPickedItemTime": {
                    "name": "lastPickedItemTime",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "lastStatusChangeTime": {
                    "name": "lastStatusChangeTime",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "pickingStartedAt": {
                    "name": "pickingStartedAt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pickedAt": {
                    "name": "pickedAt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "packingStartedAt": {
                    "name": "packingStartedAt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "packedAt": {
                    "name": "packedAt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "totalItems": {
                    "name": "totalItems",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "totalUnits": {
                    "name": "totalUnits",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "totalCompletedItems": {
                    "name": "totalCompletedItems",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "totalCompletedUnits": {
                    "name": "totalCompletedUnits",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "totalPackedItems": {
                    "name": "totalPackedItems",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "totalPackedUnits": {
                    "name": "totalPackedUnits",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "totalItemsToPack": {
                    "name": "totalItemsToPack",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "totalUnitsToPack": {
                    "name": "totalUnitsToPack",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "priority": {
                    "name": "priority",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "historicalWorksheet": {
                    "name": "historicalWorksheet",
                    "isArray": true,
                    "type": {
                        "model": "HistoricalWorksheet"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "worksheetId"
                        ]
                    }
                },
                "tags": {
                    "name": "tags",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "appliedAutomations": {
                    "name": "appliedAutomations",
                    "isArray": true,
                    "type": {
                        "nonModel": "CAppliedAutomation"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "notes": {
                    "name": "notes",
                    "isArray": true,
                    "type": {
                        "nonModel": "WorksheetNotes"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "picker_facility": {
                    "name": "picker_facility",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Worksheets",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "id"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byStoreConfig",
                        "queryField": "worksheetsByStoreConfig",
                        "fields": [
                            "storeConfig"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byWorksheet",
                        "queryField": "worksheetsByWorksheetId",
                        "fields": [
                            "worksheetId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byPickerFacility",
                        "queryField": "worksheetsByPickerFacility",
                        "fields": [
                            "picker_facility"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "apiKey",
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groupsField": "groups",
                                "groupField": "groups",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "ActionTypes": {
            "name": "ActionTypes",
            "values": [
                "ADD",
                "DELETE",
                "SET"
            ]
        },
        "CombinatorType": {
            "name": "CombinatorType",
            "values": [
                "and",
                "or"
            ]
        },
        "CarrierFormConfigurationFieldType": {
            "name": "CarrierFormConfigurationFieldType",
            "values": [
                "TEXT",
                "NUMBER",
                "SELECT",
                "PASSWORD",
                "RADIO",
                "CHECKBOX"
            ]
        },
        "CarrierFormConfigurationAuthType": {
            "name": "CarrierFormConfigurationAuthType",
            "values": [
                "QUERY_STRING",
                "HEADER"
            ]
        },
        "CarrierPricingType": {
            "name": "CarrierPricingType",
            "values": [
                "FREE",
                "TRANSACTIONS_FEE",
                "MONTHLY_FEE"
            ]
        },
        "CarrierIntegrationMethod": {
            "name": "CarrierIntegrationMethod",
            "values": [
                "POST",
                "PATCH",
                "PUT",
                "GET"
            ]
        },
        "CarrierIntegrationProtocol": {
            "name": "CarrierIntegrationProtocol",
            "values": [
                "HTTP",
                "HTTPS"
            ]
        },
        "CEnvironment": {
            "name": "CEnvironment",
            "values": [
                "DEV",
                "PROD"
            ]
        },
        "CAppliedAutomationStatus": {
            "name": "CAppliedAutomationStatus",
            "values": [
                "SUCCESS",
                "ERROR",
                "WARNING"
            ]
        },
        "InsightsTimeFilter": {
            "name": "InsightsTimeFilter",
            "values": [
                "last_day",
                "last_seven_days",
                "last_fifteen_days",
                "last_month",
                "last_six_months"
            ]
        },
        "InsightsTimeRange": {
            "name": "InsightsTimeRange",
            "values": [
                "ACTUAL_DAY",
                "LAST_DAY",
                "LAST_SEVEN_DAYS",
                "LAST_MONTH",
                "LAST_THREE_MONTHS",
                "LAST_SIX_MONTHS"
            ]
        },
        "QueryTypeCatalog": {
            "name": "QueryTypeCatalog",
            "values": [
                "SKU",
                "REFID"
            ]
        },
        "TokenType": {
            "name": "TokenType",
            "values": [
                "NOTIFICATION",
                "REAL_TIME"
            ]
        },
        "ItemTransferStatus": {
            "name": "ItemTransferStatus",
            "values": [
                "PENDING",
                "APPROVED",
                "REJECTED",
                "COMPLETED",
                "DELIVERED"
            ]
        },
        "ItemNoteType": {
            "name": "ItemNoteType",
            "values": [
                "CLIENT",
                "ADMIN",
                "PICKER"
            ]
        },
        "ItemType": {
            "name": "ItemType",
            "values": [
                "ORDER",
                "RMA"
            ]
        },
        "ItemTransferDetailStatus": {
            "name": "ItemTransferDetailStatus",
            "values": [
                "PENDING",
                "APPROVED",
                "REJECTED",
                "ASSIGNED"
            ]
        },
        "ItemStatus": {
            "name": "ItemStatus",
            "values": [
                "PENDING",
                "ASSIGNED",
                "COLLECTED",
                "REPLACED",
                "REJECTED",
                "REFUNDED",
                "RETURNED",
                "CANCELLED",
                "PENDING_TRANSFERRED",
                "TRANSFERRED",
                "COMPLETED",
                "READY_FOR_PACKING",
                "READY_FOR_SHIPPING",
                "SHIPPED",
                "DELIVERED",
                "PACKED",
                "PAUSED"
            ]
        },
        "Temperature": {
            "name": "Temperature",
            "values": [
                "FROZEN",
                "COLD",
                "AMBIENT"
            ]
        },
        "NotFoundOptions": {
            "name": "NotFoundOptions",
            "values": [
                "REPLACE",
                "SUGGEST",
                "REFUND"
            ]
        },
        "UnitOfMeasure": {
            "name": "UnitOfMeasure",
            "values": [
                "KILOGRAMS",
                "GRAMS",
                "POUNDS",
                "UNITS",
                "OUNCES",
                "MILLIGRAMS"
            ]
        },
        "OrderNoteType": {
            "name": "OrderNoteType",
            "values": [
                "CUSTOMER",
                "STORE"
            ]
        },
        "OrderStatus": {
            "name": "OrderStatus",
            "values": [
                "READY_FOR_HANDLING",
                "READY_FOR_PICKING",
                "PICKING",
                "PARTIAL_COLLECTED",
                "COLLECTED",
                "READY_FOR_PACKING",
                "PACKING",
                "PARTIAL_PACKED",
                "PREPARING_SHIPPING",
                "READY_FOR_SHIPPING",
                "PARTIAL_SHIPPED",
                "SHIPPING",
                "DELIVERED",
                "REJECTED",
                "CANCELED",
                "PAUSED"
            ]
        },
        "SortDirection": {
            "name": "SortDirection",
            "values": [
                "ASC",
                "DESC"
            ]
        },
        "OrderSortField": {
            "name": "OrderSortField",
            "values": [
                "shippingEstimatedDateMin",
                "orderDate",
                "invoiceDate"
            ]
        },
        "VtexOrderStatus": {
            "name": "VtexOrderStatus",
            "values": [
                "HANDLING",
                "INVOICED",
                "PAYMENT_APPROVED",
                "READY_FOR_HANDLING",
                "REPLACED",
                "WAITING_FOR_SELLER_DECISION"
            ]
        },
        "ShippingType": {
            "name": "ShippingType",
            "values": [
                "SHIP_FROM_STORE",
                "PICKUP_IN_STORE",
                "DRIVE_THRU"
            ]
        },
        "DocType": {
            "name": "DocType",
            "values": [
                "POS",
                "WIDE"
            ]
        },
        "PackageType": {
            "name": "PackageType",
            "values": [
                "ORDER",
                "RMA"
            ]
        },
        "PackageStatus": {
            "name": "PackageStatus",
            "values": [
                "PENDING",
                "READY_FOR_SHIPPING",
                "PACKED",
                "SHIPPED",
                "DELIVERED",
                "RETURNED"
            ]
        },
        "PickingActionFrom": {
            "name": "PickingActionFrom",
            "values": [
                "ADMIN",
                "MOBILE"
            ]
        },
        "PickingActionStatus": {
            "name": "PickingActionStatus",
            "values": [
                "PENDING",
                "APPROVED",
                "REJECTED"
            ]
        },
        "PickingActionType": {
            "name": "PickingActionType",
            "values": [
                "REPLACE",
                "REJECT",
                "ADD_ITEM",
                "ADD_QUANTITY"
            ]
        },
        "ItemRequestType": {
            "name": "ItemRequestType",
            "values": [
                "RETURN",
                "EXCHANGE",
                "WARRANTY"
            ]
        },
        "RmaTransactionStatus": {
            "name": "RmaTransactionStatus",
            "values": [
                "PENDING",
                "ACTIVE",
                "COMPLETED",
                "REJECTED",
                "EXPIRED"
            ]
        },
        "RmaTransactionType": {
            "name": "RmaTransactionType",
            "values": [
                "GIFT_CARD",
                "VOUCHER",
                "COUPON",
                "REFUND",
                "PAYMENT",
                "OTHER"
            ]
        },
        "ReturnStatus": {
            "name": "ReturnStatus",
            "values": [
                "NEW",
                "HANDLING",
                "COMPLETED",
                "SHIPPING",
                "CANCELED",
                "REFUNDED",
                "PENDING"
            ]
        },
        "ItemReturnStatus": {
            "name": "ItemReturnStatus",
            "values": [
                "REQUESTED",
                "RECEIVED",
                "MISSING",
                "DAMAGED"
            ]
        },
        "RmaShippingTypes": {
            "name": "RmaShippingTypes",
            "values": [
                "PICKUP",
                "DELIVERY_TO_STORE",
                "DELIVERY_TO_ADDRESS"
            ]
        },
        "RmaShippingStatus": {
            "name": "RmaShippingStatus",
            "values": [
                "PENDING",
                "PICKED_UP",
                "DELIVERED"
            ]
        },
        "RmaItemsStatus": {
            "name": "RmaItemsStatus",
            "values": [
                "NEW",
                "REQUESTED",
                "RECEIVED",
                "ACCEPTED",
                "REJECTED",
                "MISSING",
                "DAMAGED",
                "REFUNDED"
            ]
        },
        "ItemResolutionType": {
            "name": "ItemResolutionType",
            "values": [
                "REPLACEMENT",
                "REFUND",
                "STORE_CREDIT"
            ]
        },
        "ReasonTypeItem": {
            "name": "ReasonTypeItem",
            "values": [
                "DAMAGED",
                "WRONG",
                "NOT_NEEDED",
                "COLOR",
                "SIZE",
                "OTHER"
            ]
        },
        "TypeAttachment": {
            "name": "TypeAttachment",
            "values": [
                "IMAGE",
                "VIDEO",
                "AUDIO",
                "FILE"
            ]
        },
        "RmaNotesTypes": {
            "name": "RmaNotesTypes",
            "values": [
                "INTERNAL",
                "CUSTOMER"
            ]
        },
        "RmaReplacementStatus": {
            "name": "RmaReplacementStatus",
            "values": [
                "NEW",
                "REQUESTED",
                "RECEIVED",
                "ACCEPTED",
                "REJECTED",
                "MISSING",
                "DAMAGED"
            ]
        },
        "RmaRefundStatus": {
            "name": "RmaRefundStatus",
            "values": [
                "PENDING",
                "APPROVED",
                "REJECTED"
            ]
        },
        "RmaStoreCreditReason": {
            "name": "RmaStoreCreditReason",
            "values": [
                "BONUS",
                "REFUND",
                "REPLACEMENT",
                "OTHER"
            ]
        },
        "RmaStoreCreditType": {
            "name": "RmaStoreCreditType",
            "values": [
                "GIFT_CARD",
                "VOUCHER",
                "COUPON"
            ]
        },
        "RmaStoreCreditStatus": {
            "name": "RmaStoreCreditStatus",
            "values": [
                "ACTIVE",
                "USED",
                "EXPIRED"
            ]
        },
        "RmaSettingFieldType": {
            "name": "RmaSettingFieldType",
            "values": [
                "TEXT",
                "TEXTAREA",
                "SELECT",
                "RADIO",
                "CHECKBOX",
                "FILE",
                "IMAGE",
                "VIDEO",
                "AUDIO"
            ]
        },
        "RmaPerksType": {
            "name": "RmaPerksType",
            "values": [
                "STORE_CREDIT",
                "FREE_SHIPPING",
                "DISCOUNT",
                "OTHER"
            ]
        },
        "RmaReturnReasonsType": {
            "name": "RmaReturnReasonsType",
            "values": [
                "DAMAGED",
                "WRONG",
                "NOT_NEEDED",
                "COLOR",
                "SIZE",
                "OTHER"
            ]
        },
        "RmaPoliciesType": {
            "name": "RmaPoliciesType",
            "values": [
                "WARRANTY",
                "RETURN",
                "EXCHANGE"
            ]
        },
        "ItemInformation": {
            "name": "ItemInformation",
            "values": [
                "EAN",
                "CATEGORY",
                "BRAND",
                "REFID",
                "SKU",
                "NAME",
                "SELLING_PRICE",
                "ITEM_ID"
            ]
        },
        "FieldTypeEnum": {
            "name": "FieldTypeEnum",
            "values": [
                "DEFAULT"
            ]
        },
        "IdEnum": {
            "name": "IdEnum",
            "values": [
                "ZONE",
                "SECTION",
                "AISLE",
                "SHELF",
                "BIN"
            ]
        },
        "AccountTypes": {
            "name": "AccountTypes",
            "values": [
                "ECOMMERCE",
                "CALL_CENTER",
                "MOBILE_APP",
                "MARKETPLACE",
                "OFFLINE",
                "POS"
            ]
        },
        "ItemIdentifierModel": {
            "name": "ItemIdentifierModel",
            "values": [
                "REFID",
                "SKU"
            ]
        },
        "ServiceStatus": {
            "name": "ServiceStatus",
            "values": [
                "CREATED",
                "PENDING",
                "ASSIGNED",
                "PICKED",
                "ON_ROUTE",
                "INCIDENT",
                "RETURNED",
                "DELIVERED",
                "CANCELED",
                "ON_HOLD",
                "TRANSFER"
            ]
        },
        "ServiceVehicle": {
            "name": "ServiceVehicle",
            "values": [
                "SCOOTER",
                "VAN",
                "CAR",
                "TRUCK",
                "BIKE",
                "WALK",
                "DRONE"
            ]
        },
        "ServiceType": {
            "name": "ServiceType",
            "values": [
                "PICKUP",
                "DELIVERY",
                "PICKUP_DELIVERY",
                "TRANSFER",
                "RETURN"
            ]
        },
        "ServiceNotesType": {
            "name": "ServiceNotesType",
            "values": [
                "COMMENT",
                "ERROR"
            ]
        },
        "ServiceEvidenceType": {
            "name": "ServiceEvidenceType",
            "values": [
                "TEXT",
                "IMAGE"
            ]
        },
        "PickingMethod": {
            "name": "PickingMethod",
            "values": [
                "BATCH",
                "WAVES"
            ]
        },
        "TagModel": {
            "name": "TagModel",
            "values": [
                "SHIPPING_SERVICES",
                "ORDER",
                "WORKSHEET",
                "BATCH",
                "PICKER",
                "PACKING"
            ]
        },
        "ServiceLabelType": {
            "name": "ServiceLabelType",
            "values": [
                "PDF",
                "BASE64",
                "TEXT",
                "ZPL"
            ]
        },
        "TrackingTimelineType": {
            "name": "TrackingTimelineType",
            "values": [
                "STATUS",
                "EVIDENCE",
                "NOTE",
                "LABEL",
                "OTHER"
            ]
        },
        "WebhookType": {
            "name": "WebhookType",
            "values": [
                "INVOICING",
                "ORDER_STATUS",
                "WORKSHEET_STATUS",
                "RETURN_STATUS",
                "SHIPPING_SERVICE_STATUS"
            ]
        },
        "RestType": {
            "name": "RestType",
            "values": [
                "GET",
                "POST",
                "PUT",
                "PATCH"
            ]
        },
        "PauseReasonType": {
            "name": "PauseReasonType",
            "values": [
                "TIMEOUT",
                "ERROR",
                "CUSTOMER_CONTACT",
                "CUSTOMER_REQUEST",
                "INVENTORY_ISSUE"
            ]
        },
        "WorksheetSortField": {
            "name": "WorksheetSortField",
            "values": [
                "createdAt"
            ]
        },
        "AssignmentMethod": {
            "name": "AssignmentMethod",
            "values": [
                "AUTOMATIC",
                "MANUAL"
            ]
        },
        "WorksheetStatus": {
            "name": "WorksheetStatus",
            "values": [
                "IN_PROGRESS",
                "PENDING",
                "COLLECTED",
                "COMPLETED",
                "READY_FOR_PACKING",
                "PACKING",
                "PACKED",
                "SORTING",
                "CANCELLED",
                "REJECTED"
            ]
        },
        "ItemInWorksheetStatus": {
            "name": "ItemInWorksheetStatus",
            "values": [
                "PENDING",
                "ASSIGNED",
                "IN_PROGRESS",
                "PENDING_TRANSFER",
                "TRANSFERRED",
                "COMPLETED",
                "PAUSED",
                "CANCELED"
            ]
        }
    },
    "nonModels": {
        "Plan": {
            "name": "Plan",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "ppo": {
                    "name": "ppo",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "appo": {
                    "name": "appo",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "orders": {
                    "name": "orders",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "maxOrders": {
                    "name": "maxOrders",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "initialDate": {
                    "name": "initialDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "validUntil": {
                    "name": "validUntil",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "active": {
                    "name": "active",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "metadata": {
                    "name": "metadata",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "AccountIsMarketplace": {
            "name": "AccountIsMarketplace",
            "fields": {
                "isParent": {
                    "name": "isParent",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "parent": {
                    "name": "parent",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "AccountSeller": {
            "name": "AccountSeller",
            "fields": {
                "UrlLogo": {
                    "name": "UrlLogo",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "SellerId": {
                    "name": "SellerId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Name": {
                    "name": "Name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Email": {
                    "name": "Email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "IsActive": {
                    "name": "IsActive",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "IsBetterScope": {
                    "name": "IsBetterScope",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "SellerType": {
                    "name": "SellerType",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "VTEXCatalogCategory": {
            "name": "VTEXCatalogCategory",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "hasChildren": {
                    "name": "hasChildren",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "children": {
                    "name": "children",
                    "isArray": true,
                    "type": {
                        "nonModel": "VTEXCatalogCategory2"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "Title": {
                    "name": "Title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "MetaTagDescription": {
                    "name": "MetaTagDescription",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "VTEXCatalogCategory2": {
            "name": "VTEXCatalogCategory2",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "hasChildren": {
                    "name": "hasChildren",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "children": {
                    "name": "children",
                    "isArray": true,
                    "type": {
                        "nonModel": "VTEXCatalogCategory3"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "Title": {
                    "name": "Title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "MetaTagDescription": {
                    "name": "MetaTagDescription",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "VTEXCatalogCategory3": {
            "name": "VTEXCatalogCategory3",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "hasChildren": {
                    "name": "hasChildren",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "Title": {
                    "name": "Title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "MetaTagDescription": {
                    "name": "MetaTagDescription",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "VTEXUserslist": {
            "name": "VTEXUserslist",
            "fields": {
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "VTEXUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "paging": {
                    "name": "paging",
                    "isArray": false,
                    "type": {
                        "nonModel": "VTEXPaging"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "VTEXPaging": {
            "name": "VTEXPaging",
            "fields": {
                "page": {
                    "name": "page",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "perPage": {
                    "name": "perPage",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "total": {
                    "name": "total",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "pages": {
                    "name": "pages",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "VTEXUser": {
            "name": "VTEXUser",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "isAdmin": {
                    "name": "isAdmin",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "isReliable": {
                    "name": "isReliable",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "isBlocked": {
                    "name": "isBlocked",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "roles": {
                    "name": "roles",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "accountNames": {
                    "name": "accountNames",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Actions": {
            "name": "Actions",
            "fields": {
                "action": {
                    "name": "action",
                    "isArray": false,
                    "type": {
                        "enum": "ActionTypes"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "field": {
                    "name": "field",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "model": {
                    "name": "model",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "metadata": {
                    "name": "metadata",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "AutomationQuery": {
            "name": "AutomationQuery",
            "fields": {
                "not": {
                    "name": "not",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "field": {
                    "name": "field",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "operator": {
                    "name": "operator",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "combinator": {
                    "name": "combinator",
                    "isArray": false,
                    "type": {
                        "enum": "CombinatorType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "rules": {
                    "name": "rules",
                    "isArray": true,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "CarrierIntegration": {
            "name": "CarrierIntegration",
            "fields": {
                "dev": {
                    "name": "dev",
                    "isArray": false,
                    "type": {
                        "nonModel": "CarrierIntegrationEndpoints"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "prod": {
                    "name": "prod",
                    "isArray": false,
                    "type": {
                        "nonModel": "CarrierIntegrationEndpoints"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CarrierIntegrationEndpoints": {
            "name": "CarrierIntegrationEndpoints",
            "fields": {
                "endpoint": {
                    "name": "endpoint",
                    "isArray": false,
                    "type": {
                        "nonModel": "CarrierIntegrationEndpoint"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "cancelEndpoint": {
                    "name": "cancelEndpoint",
                    "isArray": false,
                    "type": {
                        "nonModel": "CarrierIntegrationEndpoint"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "pauseEndpoint": {
                    "name": "pauseEndpoint",
                    "isArray": false,
                    "type": {
                        "nonModel": "CarrierIntegrationEndpoint"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "rateEndpoint": {
                    "name": "rateEndpoint",
                    "isArray": false,
                    "type": {
                        "nonModel": "CarrierIntegrationEndpoint"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "carriersEndpoint": {
                    "name": "carriersEndpoint",
                    "isArray": false,
                    "type": {
                        "nonModel": "CarrierIntegrationEndpoint"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "webhookEndpoint": {
                    "name": "webhookEndpoint",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CarrierIntegrationEndpoint": {
            "name": "CarrierIntegrationEndpoint",
            "fields": {
                "url": {
                    "name": "url",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "method": {
                    "name": "method",
                    "isArray": false,
                    "type": {
                        "enum": "CarrierIntegrationMethod"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "protocol": {
                    "name": "protocol",
                    "isArray": false,
                    "type": {
                        "enum": "CarrierIntegrationProtocol"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "variables": {
                    "name": "variables",
                    "isArray": true,
                    "type": {
                        "nonModel": "CarrierFormConfigurationAuth"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "CarrierPricing": {
            "name": "CarrierPricing",
            "fields": {
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "CarrierPricingType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CarrierFormConfigurationField": {
            "name": "CarrierFormConfigurationField",
            "fields": {
                "key": {
                    "name": "key",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "label": {
                    "name": "label",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "CarrierFormConfigurationFieldType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "required": {
                    "name": "required",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "min": {
                    "name": "min",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "max": {
                    "name": "max",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "options": {
                    "name": "options",
                    "isArray": true,
                    "type": {
                        "nonModel": "CarrierFormConfigurationFieldOption"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "priority": {
                    "name": "priority",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CarrierFormConfigurationAuth": {
            "name": "CarrierFormConfigurationAuth",
            "fields": {
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "CarrierFormConfigurationAuthType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "key": {
                    "name": "key",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "CarrierFormConfigurationFieldOption": {
            "name": "CarrierFormConfigurationFieldOption",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "label": {
                    "name": "label",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CarrierStoreConfigSettings": {
            "name": "CarrierStoreConfigSettings",
            "fields": {
                "key": {
                    "name": "key",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "label": {
                    "name": "label",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "DeliveryMethod": {
            "name": "DeliveryMethod",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "serviceType": {
                    "name": "serviceType",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "paymentMethod": {
                    "name": "paymentMethod",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CarriersStoreConfigSearch": {
            "name": "CarriersStoreConfigSearch",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "account": {
                    "name": "account",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "active": {
                    "name": "active",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "carrierId": {
                    "name": "carrierId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "isBroker": {
                    "name": "isBroker",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "countries": {
                    "name": "countries",
                    "isArray": true,
                    "type": "String",
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "shippingTypes": {
                    "name": "shippingTypes",
                    "isArray": true,
                    "type": "String",
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "logo": {
                    "name": "logo",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "SearchCatalogResponse": {
            "name": "SearchCatalogResponse",
            "fields": {
                "skuId": {
                    "name": "skuId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "productId": {
                    "name": "productId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "eans": {
                    "name": "eans",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "skus": {
                    "name": "skus",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "ref": {
                    "name": "ref",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "price": {
                    "name": "price",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "listPrice": {
                    "name": "listPrice",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "stockBalance": {
                    "name": "stockBalance",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "imageUrl": {
                    "name": "imageUrl",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "specifications": {
                    "name": "specifications",
                    "isArray": true,
                    "type": {
                        "nonModel": "Specification"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "categories": {
                    "name": "categories",
                    "isArray": true,
                    "type": {
                        "nonModel": "Categories"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "unitMultiplier": {
                    "name": "unitMultiplier",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "unitOfMeasurement": {
                    "name": "unitOfMeasurement",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "location": {
                    "name": "location",
                    "isArray": true,
                    "type": {
                        "nonModel": "CatalogLocation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "CatalogLocation": {
            "name": "CatalogLocation",
            "fields": {
                "location": {
                    "name": "location",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "hostname": {
                    "name": "hostname",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "warehouse": {
                    "name": "warehouse",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Specification": {
            "name": "Specification",
            "fields": {
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Categories": {
            "name": "Categories",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "main": {
                    "name": "main",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ListCatalogResponse": {
            "name": "ListCatalogResponse",
            "fields": {
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "ListCatalogProducts"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "pagination": {
                    "name": "pagination",
                    "isArray": false,
                    "type": {
                        "nonModel": "CatalogPaginationResponse"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CatalogPaginationResponse": {
            "name": "CatalogPaginationResponse",
            "fields": {
                "total": {
                    "name": "total",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "page": {
                    "name": "page",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "from": {
                    "name": "from",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "to": {
                    "name": "to",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "perPage": {
                    "name": "perPage",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CatalogMetaData": {
            "name": "CatalogMetaData",
            "fields": {
                "commercialPolicy": {
                    "name": "commercialPolicy",
                    "isArray": true,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "CatalogDimensions": {
            "name": "CatalogDimensions",
            "fields": {
                "cubicweight": {
                    "name": "cubicweight",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "height": {
                    "name": "height",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "length": {
                    "name": "length",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "weight": {
                    "name": "weight",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "width": {
                    "name": "width",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CatalogBrand": {
            "name": "CatalogBrand",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ListCatalogProducts": {
            "name": "ListCatalogProducts",
            "fields": {
                "active": {
                    "name": "active",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "productId": {
                    "name": "productId",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "imageUrl": {
                    "name": "imageUrl",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "isWeighable": {
                    "name": "isWeighable",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "keywords": {
                    "name": "keywords",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "soldBy": {
                    "name": "soldBy",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "specifications": {
                    "name": "specifications",
                    "isArray": true,
                    "type": {
                        "nonModel": "Specification"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "sku": {
                    "name": "sku",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "ref": {
                    "name": "ref",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "metaData": {
                    "name": "metaData",
                    "isArray": false,
                    "type": {
                        "nonModel": "CatalogMetaData"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "ean": {
                    "name": "ean",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "dimensions": {
                    "name": "dimensions",
                    "isArray": false,
                    "type": {
                        "nonModel": "CatalogDimensions"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "categories": {
                    "name": "categories",
                    "isArray": true,
                    "type": {
                        "nonModel": "Categories"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "brand": {
                    "name": "brand",
                    "isArray": false,
                    "type": {
                        "nonModel": "CatalogBrand"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "temperature": {
                    "name": "temperature",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "location": {
                    "name": "location",
                    "isArray": true,
                    "type": {
                        "nonModel": "CatalogLocation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "CreateCatalogResponse": {
            "name": "CreateCatalogResponse",
            "fields": {
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "message": {
                    "name": "message",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "totalProducts": {
                    "name": "totalProducts",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "MessageChange": {
            "name": "MessageChange",
            "fields": {
                "EN": {
                    "name": "EN",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "ES": {
                    "name": "ES",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "DescriptionChange": {
            "name": "DescriptionChange",
            "fields": {
                "newItem": {
                    "name": "newItem",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": true,
                    "attributes": []
                },
                "oldItem": {
                    "name": "oldItem",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "CLocation": {
            "name": "CLocation",
            "fields": {
                "latitude": {
                    "name": "latitude",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "longitude": {
                    "name": "longitude",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CConfigurations": {
            "name": "CConfigurations",
            "fields": {
                "key": {
                    "name": "key",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Affiliate": {
            "name": "Affiliate",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "WorksheetSummary": {
            "name": "WorksheetSummary",
            "fields": {
                "fulfillmentRate": {
                    "name": "fulfillmentRate",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "ordersInWorksheet": {
                    "name": "ordersInWorksheet",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "createdDate": {
                    "name": "createdDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "assignedDate": {
                    "name": "assignedDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pickedItems": {
                    "name": "pickedItems",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "rejectedItems": {
                    "name": "rejectedItems",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "replacedItems": {
                    "name": "replacedItems",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "pickingTime": {
                    "name": "pickingTime",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "timePerItem": {
                    "name": "timePerItem",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "picker": {
                    "name": "picker",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "packagesCreated": {
                    "name": "packagesCreated",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "envelopesUsed": {
                    "name": "envelopesUsed",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "packingTime": {
                    "name": "packingTime",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "packer": {
                    "name": "packer",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "worksheetId": {
                    "name": "worksheetId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "WorksheetStatus"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "ordersIds": {
                    "name": "ordersIds",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "CAppliedAutomation": {
            "name": "CAppliedAutomation",
            "fields": {
                "automationId": {
                    "name": "automationId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "action": {
                    "name": "action",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "lastInvocation": {
                    "name": "lastInvocation",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "CAppliedAutomationStatus"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "requestId": {
                    "name": "requestId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "metadata": {
                    "name": "metadata",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CTimezone": {
            "name": "CTimezone",
            "fields": {
                "offset": {
                    "name": "offset",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "label": {
                    "name": "label",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ShippingPolicy": {
            "name": "ShippingPolicy",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "shippingMethod": {
                    "name": "shippingMethod",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "VtexOrders": {
            "name": "VtexOrders",
            "fields": {
                "list": {
                    "name": "list",
                    "isArray": true,
                    "type": {
                        "nonModel": "ListOrders"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "paging": {
                    "name": "paging",
                    "isArray": false,
                    "type": {
                        "nonModel": "Paging"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ListOrders": {
            "name": "ListOrders",
            "fields": {
                "orderId": {
                    "name": "orderId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "creationDate": {
                    "name": "creationDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "totalValue": {
                    "name": "totalValue",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "customer": {
                    "name": "customer",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "items": {
                    "name": "items",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Paging": {
            "name": "Paging",
            "fields": {
                "total": {
                    "name": "total",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "pages": {
                    "name": "pages",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "currentPage": {
                    "name": "currentPage",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "perPage": {
                    "name": "perPage",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Totals": {
            "name": "Totals",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "alternativeTotals": {
                    "name": "alternativeTotals",
                    "isArray": true,
                    "type": {
                        "nonModel": "AlternativeTotals"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "AlternativeTotals": {
            "name": "AlternativeTotals",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CurrencyFormatInfo": {
            "name": "CurrencyFormatInfo",
            "fields": {
                "CurrencyDecimalDigits": {
                    "name": "CurrencyDecimalDigits",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "CurrencyDecimalSeparator": {
                    "name": "CurrencyDecimalSeparator",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "CurrencyGroupSeparator": {
                    "name": "CurrencyGroupSeparator",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "CurrencyGroupSize": {
                    "name": "CurrencyGroupSize",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "StartsWithCurrencySymbol": {
                    "name": "StartsWithCurrencySymbol",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "StorePreferencesData": {
            "name": "StorePreferencesData",
            "fields": {
                "countryCode": {
                    "name": "countryCode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "currencyCode": {
                    "name": "currencyCode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "currencyLocale": {
                    "name": "currencyLocale",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "currencySymbol": {
                    "name": "currencySymbol",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "timeZone": {
                    "name": "timeZone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "currencyFormatInfo": {
                    "name": "currencyFormatInfo",
                    "isArray": false,
                    "type": {
                        "nonModel": "CurrencyFormatInfo"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Payments": {
            "name": "Payments",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "paymentSystem": {
                    "name": "paymentSystem",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "paymentSystemName": {
                    "name": "paymentSystemName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "installments": {
                    "name": "installments",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "group": {
                    "name": "group",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "tid": {
                    "name": "tid",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "lastDigits": {
                    "name": "lastDigits",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "redemptionCode": {
                    "name": "redemptionCode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "cardHolder": {
                    "name": "cardHolder",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "firstDigits": {
                    "name": "firstDigits",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "authId": {
                    "name": "authId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "giftCardId": {
                    "name": "giftCardId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "UserPaymentInfo": {
            "name": "UserPaymentInfo",
            "fields": {
                "paymentMethods": {
                    "name": "paymentMethods",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "InvoiceData": {
            "name": "InvoiceData",
            "fields": {
                "address": {
                    "name": "address",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "userPaymentInfo": {
                    "name": "userPaymentInfo",
                    "isArray": false,
                    "type": {
                        "nonModel": "UserPaymentInfo"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "PackageAttachment": {
            "name": "PackageAttachment",
            "fields": {
                "packages": {
                    "name": "packages",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "SelectedAddresses": {
            "name": "SelectedAddresses",
            "fields": {
                "addressId": {
                    "name": "addressId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "addressType": {
                    "name": "addressType",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "receiverName": {
                    "name": "receiverName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "street": {
                    "name": "street",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "number": {
                    "name": "number",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "complement": {
                    "name": "complement",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "neighborhood": {
                    "name": "neighborhood",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "postalCode": {
                    "name": "postalCode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "city": {
                    "name": "city",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "country": {
                    "name": "country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "reference": {
                    "name": "reference",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "geoCoordinates": {
                    "name": "geoCoordinates",
                    "isArray": true,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "PickupStoreInfo": {
            "name": "PickupStoreInfo",
            "fields": {
                "friendlyName": {
                    "name": "friendlyName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "isPickupStore": {
                    "name": "isPickupStore",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "DeliveryIds": {
            "name": "DeliveryIds",
            "fields": {
                "courierId": {
                    "name": "courierId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "courierName": {
                    "name": "courierName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "dockId": {
                    "name": "dockId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "warehouseId": {
                    "name": "warehouseId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "accountCarrierName": {
                    "name": "accountCarrierName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "LogisticsInfo": {
            "name": "LogisticsInfo",
            "fields": {
                "selectedSla": {
                    "name": "selectedSla",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "addressId": {
                    "name": "addressId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pickupPointId": {
                    "name": "pickupPointId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "lockTTL": {
                    "name": "lockTTL",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "transitTime": {
                    "name": "transitTime",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sellingPrice": {
                    "name": "sellingPrice",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "shippingEstimate": {
                    "name": "shippingEstimate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "shippingEstimateDate": {
                    "name": "shippingEstimateDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pickupStoreInfo": {
                    "name": "pickupStoreInfo",
                    "isArray": false,
                    "type": {
                        "nonModel": "PickupStoreInfo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "deliveryWindow": {
                    "name": "deliveryWindow",
                    "isArray": false,
                    "type": {
                        "nonModel": "DeliveryWindowProxy"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "deliveryIds": {
                    "name": "deliveryIds",
                    "isArray": true,
                    "type": {
                        "nonModel": "DeliveryIds"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "DeliveryWindowProxy": {
            "name": "DeliveryWindowProxy",
            "fields": {
                "startDateUtc": {
                    "name": "startDateUtc",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "endDateUtc": {
                    "name": "endDateUtc",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "price": {
                    "name": "price",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ShippingData": {
            "name": "ShippingData",
            "fields": {
                "selectedAddresses": {
                    "name": "selectedAddresses",
                    "isArray": true,
                    "type": {
                        "nonModel": "SelectedAddresses"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "logisticsInfo": {
                    "name": "logisticsInfo",
                    "isArray": true,
                    "type": {
                        "nonModel": "LogisticsInfo"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "Fields": {
            "name": "Fields",
            "fields": {
                "criterio_sustitucion": {
                    "name": "criterio_sustitucion",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "redime_puntos": {
                    "name": "redime_puntos",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Pago_en_linea": {
                    "name": "Pago_en_linea",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Devolucin_de_dinero": {
                    "name": "Devolucin_de_dinero",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "beneficio_serfinanza": {
                    "name": "beneficio_serfinanza",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CustomApps": {
            "name": "CustomApps",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "major": {
                    "name": "major",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "fields": {
                    "name": "fields",
                    "isArray": false,
                    "type": {
                        "nonModel": "Fields"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CustomData": {
            "name": "CustomData",
            "fields": {
                "customApps": {
                    "name": "customApps",
                    "isArray": true,
                    "type": {
                        "nonModel": "CustomApps"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "Marketplace": {
            "name": "Marketplace",
            "fields": {
                "baseURL": {
                    "name": "baseURL",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "isCertified": {
                    "name": "isCertified",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Sellers": {
            "name": "Sellers",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "logo": {
                    "name": "logo",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "fulfillmentEndpoint": {
                    "name": "fulfillmentEndpoint",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Picked": {
            "name": "Picked",
            "fields": {
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "SellingPrices": {
            "name": "SellingPrices",
            "fields": {
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "PriceDefinition": {
            "name": "PriceDefinition",
            "fields": {
                "calculatedSellingPrice": {
                    "name": "calculatedSellingPrice",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "total": {
                    "name": "total",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "sellingPrices": {
                    "name": "sellingPrices",
                    "isArray": true,
                    "type": {
                        "nonModel": "SellingPrices"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "ProductCategories": {
            "name": "ProductCategories",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Brand": {
            "name": "Brand",
            "fields": {
                "brandId": {
                    "name": "brandId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "brandName": {
                    "name": "brandName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Dimension": {
            "name": "Dimension",
            "fields": {
                "cubicweight": {
                    "name": "cubicweight",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "height": {
                    "name": "height",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "length": {
                    "name": "length",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "weight": {
                    "name": "weight",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "width": {
                    "name": "width",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Items": {
            "name": "Items",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "seller": {
                    "name": "seller",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "ean": {
                    "name": "ean",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "refId": {
                    "name": "refId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "productId": {
                    "name": "productId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "listPrice": {
                    "name": "listPrice",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "price": {
                    "name": "price",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "sellingPrice": {
                    "name": "sellingPrice",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "tax": {
                    "name": "tax",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "taxCode": {
                    "name": "taxCode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "rewardValue": {
                    "name": "rewardValue",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "skuName": {
                    "name": "skuName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "imageUrl": {
                    "name": "imageUrl",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "isGift": {
                    "name": "isGift",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "measurementUnit": {
                    "name": "measurementUnit",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "manualPrice": {
                    "name": "manualPrice",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "preSaleDate": {
                    "name": "preSaleDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "unitMultiplier": {
                    "name": "unitMultiplier",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "picked": {
                    "name": "picked",
                    "isArray": false,
                    "type": {
                        "nonModel": "Picked"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "priceTags": {
                    "name": "priceTags",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "priceDefinition": {
                    "name": "priceDefinition",
                    "isArray": false,
                    "type": {
                        "nonModel": "PriceDefinition"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "bundleItems": {
                    "name": "bundleItems",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "components": {
                    "name": "components",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "attachments": {
                    "name": "attachments",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "assemblies": {
                    "name": "assemblies",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "productCategories": {
                    "name": "productCategories",
                    "isArray": true,
                    "type": {
                        "nonModel": "ProductCategories"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "brand": {
                    "name": "brand",
                    "isArray": false,
                    "type": {
                        "nonModel": "Brand"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "dimension": {
                    "name": "dimension",
                    "isArray": false,
                    "type": {
                        "nonModel": "Dimension"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ClientProfileData": {
            "name": "ClientProfileData",
            "fields": {
                "firstName": {
                    "name": "firstName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "lastName": {
                    "name": "lastName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "document": {
                    "name": "document",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "documentType": {
                    "name": "documentType",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "phone": {
                    "name": "phone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "userProfileId": {
                    "name": "userProfileId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "VtexOrder": {
            "name": "VtexOrder",
            "fields": {
                "affiliateId": {
                    "name": "affiliateId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "marketplaceOrderId": {
                    "name": "marketplaceOrderId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sellerOrderId": {
                    "name": "sellerOrderId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "orderId": {
                    "name": "orderId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sequence": {
                    "name": "sequence",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "hostname": {
                    "name": "hostname",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "creationDate": {
                    "name": "creationDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "openTextField": {
                    "name": "openTextField",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "shippingEstimatedDateMin": {
                    "name": "shippingEstimatedDateMin",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "salesChannel": {
                    "name": "salesChannel",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "clientName": {
                    "name": "clientName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "lastChange": {
                    "name": "lastChange",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "deliveryChannel": {
                    "name": "deliveryChannel",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "courierName": {
                    "name": "courierName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "itemsCategories": {
                    "name": "itemsCategories",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "itemsCategoriesIds": {
                    "name": "itemsCategoriesIds",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "paymentMethodsName": {
                    "name": "paymentMethodsName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "orderTotalValue": {
                    "name": "orderTotalValue",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "orderItemsCount": {
                    "name": "orderItemsCount",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "totals": {
                    "name": "totals",
                    "isArray": true,
                    "type": {
                        "nonModel": "Totals"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "storePreferencesData": {
                    "name": "storePreferencesData",
                    "isArray": false,
                    "type": {
                        "nonModel": "StorePreferencesData"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "payment": {
                    "name": "payment",
                    "isArray": false,
                    "type": {
                        "nonModel": "Payment"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "invoiceData": {
                    "name": "invoiceData",
                    "isArray": false,
                    "type": {
                        "nonModel": "InvoiceData"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "packageAttachment": {
                    "name": "packageAttachment",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "shippingData": {
                    "name": "shippingData",
                    "isArray": false,
                    "type": {
                        "nonModel": "ShippingData"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "customData": {
                    "name": "customData",
                    "isArray": false,
                    "type": {
                        "nonModel": "CustomData"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "marketingData": {
                    "name": "marketingData",
                    "isArray": false,
                    "type": {
                        "nonModel": "MarketingData"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "pickingPriority": {
                    "name": "pickingPriority",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "rejectedItems": {
                    "name": "rejectedItems",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "pickedItems": {
                    "name": "pickedItems",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "marketplace": {
                    "name": "marketplace",
                    "isArray": false,
                    "type": {
                        "nonModel": "Marketplace"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "sellers": {
                    "name": "sellers",
                    "isArray": true,
                    "type": {
                        "nonModel": "Sellers"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "Items"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "clientProfileData": {
                    "name": "clientProfileData",
                    "isArray": false,
                    "type": {
                        "nonModel": "ClientProfileData"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ServiceResponse": {
            "name": "ServiceResponse",
            "fields": {
                "services": {
                    "name": "services",
                    "isArray": true,
                    "type": {
                        "nonModel": "ServiceOpenSearch"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "pagination": {
                    "name": "pagination",
                    "isArray": false,
                    "type": {
                        "nonModel": "PaginationResponse"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "PaginationResponse": {
            "name": "PaginationResponse",
            "fields": {
                "totalItems": {
                    "name": "totalItems",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "page": {
                    "name": "page",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "pageSize": {
                    "name": "pageSize",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "totalPages": {
                    "name": "totalPages",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "from": {
                    "name": "from",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "to": {
                    "name": "to",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "DeliveryMethodAggregationsResponse": {
            "name": "DeliveryMethodAggregationsResponse",
            "fields": {
                "comparedDate": {
                    "name": "comparedDate",
                    "isArray": false,
                    "type": {
                        "nonModel": "DeliveryDate"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "referenceDate": {
                    "name": "referenceDate",
                    "isArray": false,
                    "type": {
                        "nonModel": "DeliveryDate"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "DeliveryDate": {
            "name": "DeliveryDate",
            "fields": {
                "from": {
                    "name": "from",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "to": {
                    "name": "to",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "totalDeliveries": {
                    "name": "totalDeliveries",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "deliveryMethods": {
                    "name": "deliveryMethods",
                    "isArray": true,
                    "type": {
                        "nonModel": "DeliveryMethodResponse"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "DeliveryMethodResponse": {
            "name": "DeliveryMethodResponse",
            "fields": {
                "deliveryMethod": {
                    "name": "deliveryMethod",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CarriersNameAggregationsResponse": {
            "name": "CarriersNameAggregationsResponse",
            "fields": {
                "comparedDate": {
                    "name": "comparedDate",
                    "isArray": false,
                    "type": {
                        "nonModel": "CarriersDate"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "referenceDate": {
                    "name": "referenceDate",
                    "isArray": false,
                    "type": {
                        "nonModel": "CarriersDate"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CarriersDate": {
            "name": "CarriersDate",
            "fields": {
                "from": {
                    "name": "from",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "to": {
                    "name": "to",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "totalDeliveries": {
                    "name": "totalDeliveries",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "servicesByCarriers": {
                    "name": "servicesByCarriers",
                    "isArray": true,
                    "type": {
                        "nonModel": "CarriersNameResponse"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "CarriersNameResponse": {
            "name": "CarriersNameResponse",
            "fields": {
                "carrierName": {
                    "name": "carrierName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "StatusAggregationsResponse": {
            "name": "StatusAggregationsResponse",
            "fields": {
                "comparedDate": {
                    "name": "comparedDate",
                    "isArray": false,
                    "type": {
                        "nonModel": "StatusDate"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "referenceDate": {
                    "name": "referenceDate",
                    "isArray": false,
                    "type": {
                        "nonModel": "StatusDate"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "StatusDate": {
            "name": "StatusDate",
            "fields": {
                "from": {
                    "name": "from",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "to": {
                    "name": "to",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "totalDeliveries": {
                    "name": "totalDeliveries",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "servicesByStatus": {
                    "name": "servicesByStatus",
                    "isArray": true,
                    "type": {
                        "nonModel": "StatusResponse"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "StatusResponse": {
            "name": "StatusResponse",
            "fields": {
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "AverageDistanceResponse": {
            "name": "AverageDistanceResponse",
            "fields": {
                "comparedDate": {
                    "name": "comparedDate",
                    "isArray": false,
                    "type": {
                        "nonModel": "AverageDistanceDate"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "referenceDate": {
                    "name": "referenceDate",
                    "isArray": false,
                    "type": {
                        "nonModel": "AverageDistanceDate"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "AverageDistanceDate": {
            "name": "AverageDistanceDate",
            "fields": {
                "from": {
                    "name": "from",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "to": {
                    "name": "to",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "totalDeliveries": {
                    "name": "totalDeliveries",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "completedDeliveries": {
                    "name": "completedDeliveries",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "averageDistance": {
                    "name": "averageDistance",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "AverageRatingResponse": {
            "name": "AverageRatingResponse",
            "fields": {
                "comparedDate": {
                    "name": "comparedDate",
                    "isArray": false,
                    "type": {
                        "nonModel": "AverageRatingDate"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "referenceDate": {
                    "name": "referenceDate",
                    "isArray": false,
                    "type": {
                        "nonModel": "AverageRatingDate"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "AverageRatingDate": {
            "name": "AverageRatingDate",
            "fields": {
                "from": {
                    "name": "from",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "to": {
                    "name": "to",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "totalDeliveries": {
                    "name": "totalDeliveries",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "ordersWithRating": {
                    "name": "ordersWithRating",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "averageRating": {
                    "name": "averageRating",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "AverageOrdersOnTimeResponse": {
            "name": "AverageOrdersOnTimeResponse",
            "fields": {
                "comparedDate": {
                    "name": "comparedDate",
                    "isArray": false,
                    "type": {
                        "nonModel": "AverageOrdersOnTimeDate"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "referenceDate": {
                    "name": "referenceDate",
                    "isArray": false,
                    "type": {
                        "nonModel": "AverageOrdersOnTimeDate"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "AverageOrdersOnTimeDate": {
            "name": "AverageOrdersOnTimeDate",
            "fields": {
                "from": {
                    "name": "from",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "to": {
                    "name": "to",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "totalDeliveries": {
                    "name": "totalDeliveries",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "ordersOnTime": {
                    "name": "ordersOnTime",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "averageTime": {
                    "name": "averageTime",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "VerifyTeamResponse": {
            "name": "VerifyTeamResponse",
            "fields": {
                "teamName": {
                    "name": "teamName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "teamId": {
                    "name": "teamId",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "teams": {
                    "name": "teams",
                    "isArray": true,
                    "type": {
                        "nonModel": "Team"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "Team": {
            "name": "Team",
            "fields": {
                "tags": {
                    "name": "tags",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "battery_usage": {
                    "name": "battery_usage",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "team_id": {
                    "name": "team_id",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "team_name": {
                    "name": "team_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "address": {
                    "name": "address",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "latitude": {
                    "name": "latitude",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "longitude": {
                    "name": "longitude",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ListOrdersResponse": {
            "name": "ListOrdersResponse",
            "fields": {
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "OrderOpenSearch"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "pagination": {
                    "name": "pagination",
                    "isArray": false,
                    "type": {
                        "nonModel": "ResponsePagination"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ListCarriersStoreConfigsResponse": {
            "name": "ListCarriersStoreConfigsResponse",
            "fields": {
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "CarriersStoreConfigSearch"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "pagination": {
                    "name": "pagination",
                    "isArray": false,
                    "type": {
                        "nonModel": "ResponsePagination"
                    },
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "ListWorksheetsResponse": {
            "name": "ListWorksheetsResponse",
            "fields": {
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "WorksheetOpenSearch"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "pagination": {
                    "name": "pagination",
                    "isArray": false,
                    "type": {
                        "nonModel": "ResponsePagination"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ResponsePagination": {
            "name": "ResponsePagination",
            "fields": {
                "total": {
                    "name": "total",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "from": {
                    "name": "from",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "to": {
                    "name": "to",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "PickerInsightsResponse": {
            "name": "PickerInsightsResponse",
            "fields": {
                "pickerInsights": {
                    "name": "pickerInsights",
                    "isArray": false,
                    "type": {
                        "nonModel": "PickerInsightsData"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "PickerInsightsData": {
            "name": "PickerInsightsData",
            "fields": {
                "histogram": {
                    "name": "histogram",
                    "isArray": false,
                    "type": {
                        "nonModel": "Histogram"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "totalPickedOrders": {
                    "name": "totalPickedOrders",
                    "isArray": false,
                    "type": {
                        "nonModel": "TotalPicked"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "totalPickedItems": {
                    "name": "totalPickedItems",
                    "isArray": false,
                    "type": {
                        "nonModel": "TotalPicked"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "pendingWorksheets": {
                    "name": "pendingWorksheets",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "ordersToPack": {
                    "name": "ordersToPack",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "unnasignedOrders": {
                    "name": "unnasignedOrders",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "avgTimePickerPerItemCurrentPeriod": {
                    "name": "avgTimePickerPerItemCurrentPeriod",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "avgTimePickerPerItemLastPeriod": {
                    "name": "avgTimePickerPerItemLastPeriod",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "avgTimePickerPerOrderCurrentPeriod": {
                    "name": "avgTimePickerPerOrderCurrentPeriod",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "avgTimePickerPerOrderLastPeriod": {
                    "name": "avgTimePickerPerOrderLastPeriod",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "chartPerItem": {
                    "name": "chartPerItem",
                    "isArray": false,
                    "type": {
                        "nonModel": "ChartInsights"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "chartPerOrder": {
                    "name": "chartPerOrder",
                    "isArray": false,
                    "type": {
                        "nonModel": "ChartInsights"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ChartInsights": {
            "name": "ChartInsights",
            "fields": {
                "minSellerTime": {
                    "name": "minSellerTime",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "maxSellerTime": {
                    "name": "maxSellerTime",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "minPickerTime": {
                    "name": "minPickerTime",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "maxPickerTime": {
                    "name": "maxPickerTime",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "avgPickerTime": {
                    "name": "avgPickerTime",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "avgSellerTime": {
                    "name": "avgSellerTime",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Histogram": {
            "name": "Histogram",
            "fields": {
                "lastPeriod": {
                    "name": "lastPeriod",
                    "isArray": true,
                    "type": {
                        "nonModel": "TPeriod"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "currentPeriod": {
                    "name": "currentPeriod",
                    "isArray": true,
                    "type": {
                        "nonModel": "TPeriod"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "HistogramResponse": {
            "name": "HistogramResponse",
            "fields": {
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "currentPeriod": {
                    "name": "currentPeriod",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "lastPeriod": {
                    "name": "lastPeriod",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "TPeriod": {
            "name": "TPeriod",
            "fields": {
                "label": {
                    "name": "label",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "TotalPicked": {
            "name": "TotalPicked",
            "fields": {
                "lastPeriod": {
                    "name": "lastPeriod",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "currentPeriod": {
                    "name": "currentPeriod",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "PaymentMethodListResponse": {
            "name": "PaymentMethodListResponse",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "label": {
                    "name": "label",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CommercialConditionsResponse": {
            "name": "CommercialConditionsResponse",
            "fields": {
                "Id": {
                    "name": "Id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Name": {
                    "name": "Name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "IsActive": {
                    "name": "IsActive",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "AvgTimePickerPerItem": {
            "name": "AvgTimePickerPerItem",
            "fields": {
                "avgTimePickerPerItemCurrentPeriod": {
                    "name": "avgTimePickerPerItemCurrentPeriod",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "avgTimePickerPerItemLastPeriod": {
                    "name": "avgTimePickerPerItemLastPeriod",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "AvgTimePerItemByHostname": {
            "name": "AvgTimePerItemByHostname",
            "fields": {
                "avgTimePerItemCurrentPeriod": {
                    "name": "avgTimePerItemCurrentPeriod",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "avgTimePerItemLastPeriod": {
                    "name": "avgTimePerItemLastPeriod",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "AvgTimePerOrderProcess": {
            "name": "AvgTimePerOrderProcess",
            "fields": {
                "picking": {
                    "name": "picking",
                    "isArray": false,
                    "type": {
                        "nonModel": "TotalPicked"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "packing": {
                    "name": "packing",
                    "isArray": false,
                    "type": {
                        "nonModel": "TotalPicked"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "shipping": {
                    "name": "shipping",
                    "isArray": false,
                    "type": {
                        "nonModel": "TotalPicked"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "totalProcess": {
                    "name": "totalProcess",
                    "isArray": false,
                    "type": {
                        "nonModel": "TotalPicked"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "pickedOrders": {
                    "name": "pickedOrders",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "deliveredOrders": {
                    "name": "deliveredOrders",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "canceledOrders": {
                    "name": "canceledOrders",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ItemsHandledResponse": {
            "name": "ItemsHandledResponse",
            "fields": {
                "lastPeriod": {
                    "name": "lastPeriod",
                    "isArray": false,
                    "type": {
                        "nonModel": "ItemsHandledData"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "currentPeriod": {
                    "name": "currentPeriod",
                    "isArray": false,
                    "type": {
                        "nonModel": "ItemsHandledData"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ItemsHandledData": {
            "name": "ItemsHandledData",
            "fields": {
                "avgPickingTime": {
                    "name": "avgPickingTime",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "itemsPicked": {
                    "name": "itemsPicked",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "fillRate": {
                    "name": "fillRate",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ItemsHistogramResponse": {
            "name": "ItemsHistogramResponse",
            "fields": {
                "itemsPicked": {
                    "name": "itemsPicked",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "unitsPicked": {
                    "name": "unitsPicked",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "unitsRejected": {
                    "name": "unitsRejected",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "histogram": {
                    "name": "histogram",
                    "isArray": true,
                    "type": {
                        "nonModel": "ItemsHistogramData"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "ItemsHistogramData": {
            "name": "ItemsHistogramData",
            "fields": {
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "itemsPicked": {
                    "name": "itemsPicked",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "unitsPicked": {
                    "name": "unitsPicked",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "unitsRejected": {
                    "name": "unitsRejected",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "HeatmapResponse": {
            "name": "HeatmapResponse",
            "fields": {
                "data": {
                    "name": "data",
                    "isArray": true,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "days": {
                    "name": "days",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "PickersData": {
            "name": "PickersData",
            "fields": {
                "picker": {
                    "name": "picker",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "orders": {
                    "name": "orders",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "items": {
                    "name": "items",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "units": {
                    "name": "units",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "timePerOrder": {
                    "name": "timePerOrder",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "timePerItem": {
                    "name": "timePerItem",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "timePerPackingOrder": {
                    "name": "timePerPackingOrder",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "fillRate": {
                    "name": "fillRate",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CapacityResponse": {
            "name": "CapacityResponse",
            "fields": {
                "estimatedCapacity": {
                    "name": "estimatedCapacity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "currentWorkload": {
                    "name": "currentWorkload",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "ordersPerHour": {
                    "name": "ordersPerHour",
                    "isArray": false,
                    "type": {
                        "nonModel": "TotalPicked"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "itemsPerHour": {
                    "name": "itemsPerHour",
                    "isArray": false,
                    "type": {
                        "nonModel": "TotalPicked"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "itemsPerDay": {
                    "name": "itemsPerDay",
                    "isArray": false,
                    "type": {
                        "nonModel": "TotalPicked"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "OrdersBySeller": {
            "name": "OrdersBySeller",
            "fields": {
                "seller": {
                    "name": "seller",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "onTime": {
                    "name": "onTime",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "late": {
                    "name": "late",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "canceled": {
                    "name": "canceled",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "total": {
                    "name": "total",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "StoreOrdersResponse": {
            "name": "StoreOrdersResponse",
            "fields": {
                "totalOrders": {
                    "name": "totalOrders",
                    "isArray": false,
                    "type": {
                        "nonModel": "TotalPicked"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "ordersBySeller": {
                    "name": "ordersBySeller",
                    "isArray": true,
                    "type": {
                        "nonModel": "OrdersBySeller"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "StoreDetails": {
            "name": "StoreDetails",
            "fields": {
                "order": {
                    "name": "order",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "facility": {
                    "name": "facility",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "status": {
                    "name": "status",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "StoreDetailsResponse": {
            "name": "StoreDetailsResponse",
            "fields": {
                "storeDetails": {
                    "name": "storeDetails",
                    "isArray": true,
                    "type": {
                        "nonModel": "StoreDetails"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "generalOrders": {
                    "name": "generalOrders",
                    "isArray": false,
                    "type": {
                        "nonModel": "TotalPicked"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "generalWorksheets": {
                    "name": "generalWorksheets",
                    "isArray": false,
                    "type": {
                        "nonModel": "TotalPicked"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "ordersInPicking": {
                    "name": "ordersInPicking",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "ordersInPacking": {
                    "name": "ordersInPacking",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "ordersInShipping": {
                    "name": "ordersInShipping",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "StorePickersResponse": {
            "name": "StorePickersResponse",
            "fields": {
                "picker": {
                    "name": "picker",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "orders": {
                    "name": "orders",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "online": {
                    "name": "online",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "RMAServiceResponse": {
            "name": "RMAServiceResponse",
            "fields": {
                "serviceId": {
                    "name": "serviceId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "RMAValidatePoliciesResponse": {
            "name": "RMAValidatePoliciesResponse",
            "fields": {
                "orderId": {
                    "name": "orderId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "isValidPolicy": {
                    "name": "isValidPolicy",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "policies": {
                    "name": "policies",
                    "isArray": true,
                    "type": {
                        "nonModel": "RMAPoliciesApplying"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "RMAPoliciesApplying": {
            "name": "RMAPoliciesApplying",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "SuggestedItemTransfer": {
            "name": "SuggestedItemTransfer",
            "fields": {
                "orderId": {
                    "name": "orderId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "worksheetId": {
                    "name": "worksheetId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "salesChannelId": {
                    "name": "salesChannelId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "accountName": {
                    "name": "accountName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "itemToTransfer": {
                    "name": "itemToTransfer",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "quantityToTransfer": {
                    "name": "quantityToTransfer",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "availableWarehouses": {
                    "name": "availableWarehouses",
                    "isArray": true,
                    "type": {
                        "nonModel": "TransferWarehouse"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "TransferLocation": {
            "name": "TransferLocation",
            "fields": {
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "coordinates": {
                    "name": "coordinates",
                    "isArray": true,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "TransferSalesSource": {
            "name": "TransferSalesSource",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "warehouseName": {
                    "name": "warehouseName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "warehouseId": {
                    "name": "warehouseId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "hostname": {
                    "name": "hostname",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "TransferWarehouse": {
            "name": "TransferWarehouse",
            "fields": {
                "_id": {
                    "name": "_id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "account": {
                    "name": "account",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "location": {
                    "name": "location",
                    "isArray": false,
                    "type": {
                        "nonModel": "TransferLocation"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "salesSources": {
                    "name": "salesSources",
                    "isArray": true,
                    "type": {
                        "nonModel": "TransferSalesSource"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "SuggestedWorksheet": {
            "name": "SuggestedWorksheet",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "storeConfigId": {
                    "name": "storeConfigId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "orders": {
                    "name": "orders",
                    "isArray": true,
                    "type": {
                        "nonModel": "SuggestedOrder"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                }
            }
        },
        "SuggestedItem": {
            "name": "SuggestedItem",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "SuggestedOrder": {
            "name": "SuggestedOrder",
            "fields": {
                "orderId": {
                    "name": "orderId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "Item"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": false
                }
            }
        },
        "SummaryTimeResponse": {
            "name": "SummaryTimeResponse",
            "fields": {
                "timeInPicking": {
                    "name": "timeInPicking",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "timeInPacking": {
                    "name": "timeInPacking",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ResponseClosePackage": {
            "name": "ResponseClosePackage",
            "fields": {
                "data": {
                    "name": "data",
                    "isArray": true,
                    "type": {
                        "model": "Order"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "requestedId": {
                    "name": "requestedId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "warnings": {
                    "name": "warnings",
                    "isArray": true,
                    "type": {
                        "nonModel": "WarningResponse"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "WarningResponse": {
            "name": "WarningResponse",
            "fields": {
                "code": {
                    "name": "code",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "data": {
                    "name": "data",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "SearchOrdersResponse": {
            "name": "SearchOrdersResponse",
            "fields": {
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "message": {
                    "name": "message",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "PackedItemSuggest": {
            "name": "PackedItemSuggest",
            "fields": {
                "itemId": {
                    "name": "itemId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Bin": {
            "name": "Bin",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "PackedItemSuggest"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "PackedData": {
            "name": "PackedData",
            "fields": {
                "packedBins": {
                    "name": "packedBins",
                    "isArray": true,
                    "type": {
                        "nonModel": "Bin"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "remainingItems": {
                    "name": "remainingItems",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "unfitItems": {
                    "name": "unfitItems",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "getWorksheetMetricsResponse": {
            "name": "getWorksheetMetricsResponse",
            "fields": {
                "_id": {
                    "name": "_id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "handledWorksheets": {
                    "name": "handledWorksheets",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "handledOrders": {
                    "name": "handledOrders",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "AvgPickingTimePerOrder": {
                    "name": "AvgPickingTimePerOrder",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "AvgPickingTimePerWorksheet": {
                    "name": "AvgPickingTimePerWorksheet",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "AvgPickingTimePerItem": {
                    "name": "AvgPickingTimePerItem",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "currentWorksheets": {
                    "name": "currentWorksheets",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "getWorksheetMetricsDateResponse": {
            "name": "getWorksheetMetricsDateResponse",
            "fields": {
                "handledWorksheets": {
                    "name": "handledWorksheets",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "handledOrders": {
                    "name": "handledOrders",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "AvgPickingTimePerOrder": {
                    "name": "AvgPickingTimePerOrder",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "AvgPickingTimePerWorksheet": {
                    "name": "AvgPickingTimePerWorksheet",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "AvgPickingTimePerItem": {
                    "name": "AvgPickingTimePerItem",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "currentWorksheets": {
                    "name": "currentWorksheets",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "pickerId": {
                    "name": "pickerId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "GetReturnsResponse": {
            "name": "GetReturnsResponse",
            "fields": {
                "_id": {
                    "name": "_id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sequence": {
                    "name": "sequence",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "orderId": {
                    "name": "orderId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "hostname": {
                    "name": "hostname",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "storeConfigId": {
                    "name": "storeConfigId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pickupDate": {
                    "name": "pickupDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "orderDate": {
                    "name": "orderDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "tags": {
                    "name": "tags",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "shippingMethod": {
                    "name": "shippingMethod",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "RMAItemResponse"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "ListReturnsResponse": {
            "name": "ListReturnsResponse",
            "fields": {
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "GetReturnsResponse"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "pagination": {
                    "name": "pagination",
                    "isArray": false,
                    "type": {
                        "nonModel": "RMAPaginationResponse"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "RMAPaginationResponse": {
            "name": "RMAPaginationResponse",
            "fields": {
                "total": {
                    "name": "total",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "from": {
                    "name": "from",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "to": {
                    "name": "to",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "RMAItemResponse": {
            "name": "RMAItemResponse",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "itemId": {
                    "name": "itemId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "image": {
                    "name": "image",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sellingPrice": {
                    "name": "sellingPrice",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "currencyCode": {
                    "name": "currencyCode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "typeResolution": {
                    "name": "typeResolution",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "requestType": {
                    "name": "requestType",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ConfirmResolutionResponse": {
            "name": "ConfirmResolutionResponse",
            "fields": {
                "success": {
                    "name": "success",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "resolutionIds": {
                    "name": "resolutionIds",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "rmaId": {
                    "name": "rmaId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "RMAItemResolutionResponse": {
            "name": "RMAItemResolutionResponse",
            "fields": {
                "resolution": {
                    "name": "resolution",
                    "isArray": false,
                    "type": {
                        "model": "RMAItemResolution"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "success": {
                    "name": "success",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "rmaId": {
                    "name": "rmaId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ConfirmDeliveryClientResponse": {
            "name": "ConfirmDeliveryClientResponse",
            "fields": {
                "rmaId": {
                    "name": "rmaId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "success": {
                    "name": "success",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CouriersResponse": {
            "name": "CouriersResponse",
            "fields": {
                "message": {
                    "name": "message",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "data": {
                    "name": "data",
                    "isArray": true,
                    "type": {
                        "nonModel": "CourierDetail"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "CourierDetail": {
            "name": "CourierDetail",
            "fields": {
                "fleet_id": {
                    "name": "fleet_id",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "device_type": {
                    "name": "device_type",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "total_rating": {
                    "name": "total_rating",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "total_rated_tasks": {
                    "name": "total_rated_tasks",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "is_active": {
                    "name": "is_active",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "has_gps_accuracy": {
                    "name": "has_gps_accuracy",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "username": {
                    "name": "username",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "login_id": {
                    "name": "login_id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "transport_type": {
                    "name": "transport_type",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "transport_desc": {
                    "name": "transport_desc",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "license": {
                    "name": "license",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "phone": {
                    "name": "phone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "battery_level": {
                    "name": "battery_level",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "registration_status": {
                    "name": "registration_status",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "latitude": {
                    "name": "latitude",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "is_available": {
                    "name": "is_available",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "longitude": {
                    "name": "longitude",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "tags": {
                    "name": "tags",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "fleet_thumb_image": {
                    "name": "fleet_thumb_image",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "fleet_image": {
                    "name": "fleet_image",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "timezone": {
                    "name": "timezone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "fleet_type": {
                    "name": "fleet_type",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "block_reason": {
                    "name": "block_reason",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "team_id": {
                    "name": "team_id",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CourierResponse": {
            "name": "CourierResponse",
            "fields": {
                "message": {
                    "name": "message",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "data": {
                    "name": "data",
                    "isArray": false,
                    "type": {
                        "nonModel": "DataCourierResponse"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "DataCourierResponse": {
            "name": "DataCourierResponse",
            "fields": {
                "fleet_details": {
                    "name": "fleet_details",
                    "isArray": true,
                    "type": {
                        "nonModel": "DetailDataCourierResponse"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "DetailDataCourierResponse": {
            "name": "DetailDataCourierResponse",
            "fields": {
                "fleet_id": {
                    "name": "fleet_id",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "is_deleted": {
                    "name": "is_deleted",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "dispatcher_id": {
                    "name": "dispatcher_id",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "access_token": {
                    "name": "access_token",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "first_name": {
                    "name": "first_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "last_name": {
                    "name": "last_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "login_id": {
                    "name": "login_id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "tags": {
                    "name": "tags",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "username": {
                    "name": "username",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "phone": {
                    "name": "phone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "latitude": {
                    "name": "latitude",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "longitude": {
                    "name": "longitude",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "location_update_datetime": {
                    "name": "location_update_datetime",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "last_updated_local_time": {
                    "name": "last_updated_local_time",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "fleet_image": {
                    "name": "fleet_image",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "fleet_thumb_image": {
                    "name": "fleet_thumb_image",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "device_type": {
                    "name": "device_type",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "device_token": {
                    "name": "device_token",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "voice_token": {
                    "name": "voice_token",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "device_os": {
                    "name": "device_os",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "device_desc": {
                    "name": "device_desc",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "battery_level": {
                    "name": "battery_level",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "has_gps_accuracy": {
                    "name": "has_gps_accuracy",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "has_network": {
                    "name": "has_network",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "has_mock_loc": {
                    "name": "has_mock_loc",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "store_version": {
                    "name": "store_version",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "imei_number": {
                    "name": "imei_number",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "app_versioncode": {
                    "name": "app_versioncode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "verification_token": {
                    "name": "verification_token",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "registration_status": {
                    "name": "registration_status",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "transport_type": {
                    "name": "transport_type",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "transport_desc": {
                    "name": "transport_desc",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "license": {
                    "name": "license",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "color": {
                    "name": "color",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "user_id": {
                    "name": "user_id",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "is_active": {
                    "name": "is_active",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "is_available": {
                    "name": "is_available",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "total_rating": {
                    "name": "total_rating",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "total_rated_tasks": {
                    "name": "total_rated_tasks",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "noti_tone": {
                    "name": "noti_tone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "creation_datetime": {
                    "name": "creation_datetime",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "updation_datetime": {
                    "name": "updation_datetime",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "last_login_datetime": {
                    "name": "last_login_datetime",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "timezone": {
                    "name": "timezone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "external_fleet_id": {
                    "name": "external_fleet_id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "bearing": {
                    "name": "bearing",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "terms_and_conditions": {
                    "name": "terms_and_conditions",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "is_first_time_login": {
                    "name": "is_first_time_login",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "monibyte_id": {
                    "name": "monibyte_id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "block_reason": {
                    "name": "block_reason",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "gps_device_id": {
                    "name": "gps_device_id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "fleet_type": {
                    "name": "fleet_type",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "is_blocked_by_subscription": {
                    "name": "is_blocked_by_subscription",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "fuel_level": {
                    "name": "fuel_level",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "vehicle_calibration_id": {
                    "name": "vehicle_calibration_id",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "lang": {
                    "name": "lang",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "total_capacity": {
                    "name": "total_capacity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "available_capacity": {
                    "name": "available_capacity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CourierLocationResponse": {
            "name": "CourierLocationResponse",
            "fields": {
                "message": {
                    "name": "message",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "data": {
                    "name": "data",
                    "isArray": true,
                    "type": {
                        "nonModel": "CourierLocation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "CourierLocation": {
            "name": "CourierLocation",
            "fields": {
                "latitude": {
                    "name": "latitude",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "longitude": {
                    "name": "longitude",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ResponseGetCourierTeams": {
            "name": "ResponseGetCourierTeams",
            "fields": {
                "message": {
                    "name": "message",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "data": {
                    "name": "data",
                    "isArray": true,
                    "type": {
                        "nonModel": "CourierTeamData"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "ResponseGetCourierTasks": {
            "name": "ResponseGetCourierTasks",
            "fields": {
                "message": {
                    "name": "message",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "data": {
                    "name": "data",
                    "isArray": true,
                    "type": {
                        "nonModel": "CourierTasksData"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "CourierTasksData": {
            "name": "CourierTasksData",
            "fields": {
                "fleet_id": {
                    "name": "fleet_id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "order_id": {
                    "name": "order_id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "user_id": {
                    "name": "user_id",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "job_pickup_name": {
                    "name": "job_pickup_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "job_latitude": {
                    "name": "job_latitude",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "job_longitude": {
                    "name": "job_longitude",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "job_address": {
                    "name": "job_address",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "job_status": {
                    "name": "job_status",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "has_pickup": {
                    "name": "has_pickup",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "pickup_delivery_relationship": {
                    "name": "pickup_delivery_relationship",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "completed_by_admin": {
                    "name": "completed_by_admin",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "job_pickup_datetime": {
                    "name": "job_pickup_datetime",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "job_type": {
                    "name": "job_type",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "job_delivery_datetime": {
                    "name": "job_delivery_datetime",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "job_pickup_latitude": {
                    "name": "job_pickup_latitude",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "job_pickup_longitude": {
                    "name": "job_pickup_longitude",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "job_pickup_address": {
                    "name": "job_pickup_address",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "customer_id": {
                    "name": "customer_id",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "customer_username": {
                    "name": "customer_username",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "customer_phone": {
                    "name": "customer_phone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "customer_email": {
                    "name": "customer_email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "started_datetime": {
                    "name": "started_datetime",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "completed_datetime": {
                    "name": "completed_datetime",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "acknowledged_datetime": {
                    "name": "acknowledged_datetime",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "arrived_datetime": {
                    "name": "arrived_datetime",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "total_distance_travelled": {
                    "name": "total_distance_travelled",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "team_id": {
                    "name": "team_id",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "fleet_rating": {
                    "name": "fleet_rating",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CourierTeamData": {
            "name": "CourierTeamData",
            "fields": {
                "tags": {
                    "name": "tags",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "battery_usage": {
                    "name": "battery_usage",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "team_id": {
                    "name": "team_id",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "team_name": {
                    "name": "team_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "address": {
                    "name": "address",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "latitude": {
                    "name": "latitude",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "longitude": {
                    "name": "longitude",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ResponseGetCourierDetail": {
            "name": "ResponseGetCourierDetail",
            "fields": {
                "message": {
                    "name": "message",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "data": {
                    "name": "data",
                    "isArray": true,
                    "type": {
                        "nonModel": "alternateCourierDetail"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "alternateCourierDetail": {
            "name": "alternateCourierDetail",
            "fields": {
                "fleet_id": {
                    "name": "fleet_id",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "gps_device_id": {
                    "name": "gps_device_id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "fuel_level": {
                    "name": "fuel_level",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "monibyte_id": {
                    "name": "monibyte_id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "fleet_name": {
                    "name": "fleet_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "first_name": {
                    "name": "first_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "last_name": {
                    "name": "last_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "login_id": {
                    "name": "login_id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "transport_type": {
                    "name": "transport_type",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "transport_desc": {
                    "name": "transport_desc",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "license": {
                    "name": "license",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "color": {
                    "name": "color",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "latitude": {
                    "name": "latitude",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "longitude": {
                    "name": "longitude",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "username": {
                    "name": "username",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "phone": {
                    "name": "phone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "registration_status": {
                    "name": "registration_status",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "is_active": {
                    "name": "is_active",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "is_available": {
                    "name": "is_available",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "fleet_image": {
                    "name": "fleet_image",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "fleet_thumb_image": {
                    "name": "fleet_thumb_image",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "tags": {
                    "name": "tags",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "fleet_type": {
                    "name": "fleet_type",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "view_status": {
                    "name": "view_status",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "edit_status": {
                    "name": "edit_status",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "teams": {
                    "name": "teams",
                    "isArray": true,
                    "type": {
                        "nonModel": "courierDetailTeam"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "rule_id": {
                    "name": "rule_id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "rule_name": {
                    "name": "rule_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "battery_level": {
                    "name": "battery_level",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "home_address": {
                    "name": "home_address",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "home_latitude": {
                    "name": "home_latitude",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "home_longitude": {
                    "name": "home_longitude",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "capacity": {
                    "name": "capacity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "available_capacity": {
                    "name": "available_capacity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "courierDetailTeam": {
            "name": "courierDetailTeam",
            "fields": {
                "team_id": {
                    "name": "team_id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "team_name": {
                    "name": "team_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ResponseUpdateAgent": {
            "name": "ResponseUpdateAgent",
            "fields": {
                "message": {
                    "name": "message",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ResponseSendNotificationAgent": {
            "name": "ResponseSendNotificationAgent",
            "fields": {
                "message": {
                    "name": "message",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "data": {
                    "name": "data",
                    "isArray": false,
                    "type": {
                        "nonModel": "DataSendNotification"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "DataSendNotification": {
            "name": "DataSendNotification",
            "fields": {
                "total_fleets": {
                    "name": "total_fleets",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "valid_fleets": {
                    "name": "valid_fleets",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "logged_in_fleets": {
                    "name": "logged_in_fleets",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "logged_in_fleet_ids": {
                    "name": "logged_in_fleet_ids",
                    "isArray": true,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "push_limit_reached_fleets": {
                    "name": "push_limit_reached_fleets",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "duplicate_push_fleets": {
                    "name": "duplicate_push_fleets",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "ResponseAddAgent": {
            "name": "ResponseAddAgent",
            "fields": {
                "message": {
                    "name": "message",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "data": {
                    "name": "data",
                    "isArray": false,
                    "type": {
                        "nonModel": "ResponseAddAgentData"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ResponseAssignCourier": {
            "name": "ResponseAssignCourier",
            "fields": {
                "message": {
                    "name": "message",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ResponseAddAgentData": {
            "name": "ResponseAddAgentData",
            "fields": {
                "fleet_id": {
                    "name": "fleet_id",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ResponseGetCustomFields": {
            "name": "ResponseGetCustomFields",
            "fields": {
                "message": {
                    "name": "message",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "data": {
                    "name": "data",
                    "isArray": true,
                    "type": {
                        "nonModel": "UserLayoutFields"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "AppOptionalFields": {
            "name": "AppOptionalFields",
            "fields": {
                "label": {
                    "name": "label",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "required": {
                    "name": "required",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "UserTemplateFields": {
            "name": "UserTemplateFields",
            "fields": {
                "app_optional_fields": {
                    "name": "app_optional_fields",
                    "isArray": true,
                    "type": {
                        "nonModel": "AppOptionalFields"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "custom_field": {
                    "name": "custom_field",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "UserLayoutFields": {
            "name": "UserLayoutFields",
            "fields": {
                "fields": {
                    "name": "fields",
                    "isArray": false,
                    "type": {
                        "nonModel": "UserTemplateFields"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "layout_type": {
                    "name": "layout_type",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "trackingImage": {
                    "name": "trackingImage",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "userEmails": {
                    "name": "userEmails",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "user_id": {
                    "name": "user_id",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "_id": {
                    "name": "_id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ResponseCreateCustomTemplate": {
            "name": "ResponseCreateCustomTemplate",
            "fields": {
                "message": {
                    "name": "message",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ItemsByTransfer": {
            "name": "ItemsByTransfer",
            "fields": {
                "itemId": {
                    "name": "itemId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "itemName": {
                    "name": "itemName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "image": {
                    "name": "image",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "isWeighable": {
                    "name": "isWeighable",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "unitMultiplier": {
                    "name": "unitMultiplier",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "unitOfMeasurement": {
                    "name": "unitOfMeasurement",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ItemNotes": {
            "name": "ItemNotes",
            "fields": {
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "ItemNoteType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "PickingAudit": {
            "name": "PickingAudit",
            "fields": {
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "unitMultiplier": {
                    "name": "unitMultiplier",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "unitOfMeasure": {
                    "name": "unitOfMeasure",
                    "isArray": false,
                    "type": {
                        "enum": "UnitOfMeasure"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "listPrice": {
                    "name": "listPrice",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "sellingPrice": {
                    "name": "sellingPrice",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "audit": {
                    "name": "audit",
                    "isArray": true,
                    "type": {
                        "nonModel": "Reason"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "ReplacementAudit": {
            "name": "ReplacementAudit",
            "fields": {
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "replacements": {
                    "name": "replacements",
                    "isArray": true,
                    "type": {
                        "nonModel": "ReplacementAuditInfo"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "ReplacementAuditInfo": {
            "name": "ReplacementAuditInfo",
            "fields": {
                "replacedBy": {
                    "name": "replacedBy",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "unitMultiplier": {
                    "name": "unitMultiplier",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "listPrice": {
                    "name": "listPrice",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "sellingPrice": {
                    "name": "sellingPrice",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "audit": {
                    "name": "audit",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "PickingDetail": {
            "name": "PickingDetail",
            "fields": {
                "added": {
                    "name": "added",
                    "isArray": false,
                    "type": {
                        "nonModel": "PickingAudit"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "picked": {
                    "name": "picked",
                    "isArray": false,
                    "type": {
                        "nonModel": "PickingAudit"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "replaced": {
                    "name": "replaced",
                    "isArray": false,
                    "type": {
                        "nonModel": "ReplacementAudit"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "rejected": {
                    "name": "rejected",
                    "isArray": false,
                    "type": {
                        "nonModel": "PickingAudit"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "transferred": {
                    "name": "transferred",
                    "isArray": false,
                    "type": {
                        "nonModel": "TransferAudit"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "TransferAudit": {
            "name": "TransferAudit",
            "fields": {
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "transferredTo": {
                    "name": "transferredTo",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "ItemTransferDetailStatus"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "audit": {
                    "name": "audit",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "PackingDetail": {
            "name": "PackingDetail",
            "fields": {
                "packageID": {
                    "name": "packageID",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "unitMultiplier": {
                    "name": "unitMultiplier",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "listPrice": {
                    "name": "listPrice",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "sellingPrice": {
                    "name": "sellingPrice",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "packedQuantity": {
                    "name": "packedQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "packageLocation": {
                    "name": "packageLocation",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ItemTransferDetail": {
            "name": "ItemTransferDetail",
            "fields": {
                "rejectedWorksheetId": {
                    "name": "rejectedWorksheetId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "transferredWorksheetId": {
                    "name": "transferredWorksheetId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "ItemTransferDetailStatus"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ItemReturns": {
            "name": "ItemReturns",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "stockedQuantity": {
                    "name": "stockedQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ItemInvoice": {
            "name": "ItemInvoice",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ItemPickingOptions": {
            "name": "ItemPickingOptions",
            "fields": {
                "onNotFound": {
                    "name": "onNotFound",
                    "isArray": false,
                    "type": {
                        "enum": "NotFoundOptions"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "alternateOptions": {
                    "name": "alternateOptions",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "Taxonomy": {
            "name": "Taxonomy",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "children": {
                    "name": "children",
                    "isArray": true,
                    "type": {
                        "nonModel": "TaxonomyChild"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "TaxonomyChild": {
            "name": "TaxonomyChild",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "children": {
                    "name": "children",
                    "isArray": true,
                    "type": {
                        "nonModel": "TaxonomyChild2"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "TaxonomyChild2": {
            "name": "TaxonomyChild2",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Dimensions": {
            "name": "Dimensions",
            "fields": {
                "width": {
                    "name": "width",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "height": {
                    "name": "height",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "length": {
                    "name": "length",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "weight": {
                    "name": "weight",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "cubicweight": {
                    "name": "cubicweight",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ItemFacility": {
            "name": "ItemFacility",
            "fields": {
                "facilityId": {
                    "name": "facilityId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "isAssigned": {
                    "name": "isAssigned",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "FacilityInfo": {
            "name": "FacilityInfo",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "LogOpenSearch": {
            "name": "LogOpenSearch",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "dateRequest": {
                    "name": "dateRequest",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "body": {
                    "name": "body",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "response": {
                    "name": "response",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "tag": {
                    "name": "tag",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "OrderNotes": {
            "name": "OrderNotes",
            "fields": {
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "OrderNoteType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "OrderStatsResponse": {
            "name": "OrderStatsResponse",
            "fields": {
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pendingOrders": {
                    "name": "pendingOrders",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "completedOrders": {
                    "name": "completedOrders",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "totalOrders": {
                    "name": "totalOrders",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "OrderAssignment": {
            "name": "OrderAssignment",
            "fields": {
                "hostname": {
                    "name": "hostname",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "worksheetId": {
                    "name": "worksheetId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "initDate": {
                    "name": "initDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "finishedDate": {
                    "name": "finishedDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "MarketingData": {
            "name": "MarketingData",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "utmSource": {
                    "name": "utmSource",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "utmPartner": {
                    "name": "utmPartner",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "utmMedium": {
                    "name": "utmMedium",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "utmCampaign": {
                    "name": "utmCampaign",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "utmipage": {
                    "name": "utmipage",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "utmiPart": {
                    "name": "utmiPart",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "utmiCampaign": {
                    "name": "utmiCampaign",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "marketingTags": {
                    "name": "marketingTags",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "coupon": {
                    "name": "coupon",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Invoice": {
            "name": "Invoice",
            "fields": {
                "invoiceKey": {
                    "name": "invoiceKey",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "invoiceSubtotal": {
                    "name": "invoiceSubtotal",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "invoiceTaxes": {
                    "name": "invoiceTaxes",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "invoiceTotal": {
                    "name": "invoiceTotal",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "invoiceUrl": {
                    "name": "invoiceUrl",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "invoiceCreationDate": {
                    "name": "invoiceCreationDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "invoiceReceiptDate": {
                    "name": "invoiceReceiptDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "invoiceNumber": {
                    "name": "invoiceNumber",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "packages": {
                    "name": "packages",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "Payment": {
            "name": "Payment",
            "fields": {
                "paymentId": {
                    "name": "paymentId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "paymentName": {
                    "name": "paymentName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "paymentHolder": {
                    "name": "paymentHolder",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "baseTotal": {
                    "name": "baseTotal",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "discount": {
                    "name": "discount",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "tax": {
                    "name": "tax",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "grandTotal": {
                    "name": "grandTotal",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "currency": {
                    "name": "currency",
                    "isArray": false,
                    "type": {
                        "nonModel": "Currrency"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "method": {
                    "name": "method",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "transactionId": {
                    "name": "transactionId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "transactionRef": {
                    "name": "transactionRef",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "authorization": {
                    "name": "authorization",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "lastDigits": {
                    "name": "lastDigits",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "firstDigits": {
                    "name": "firstDigits",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "installments": {
                    "name": "installments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "cardNumber": {
                    "name": "cardNumber",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "plcConversionRate": {
                    "name": "plcConversionRate",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "priceListCurrency": {
                    "name": "priceListCurrency",
                    "isArray": false,
                    "type": {
                        "nonModel": "Currrency"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Shipping": {
            "name": "Shipping",
            "fields": {
                "shippingInfo": {
                    "name": "shippingInfo",
                    "isArray": true,
                    "type": {
                        "nonModel": "ShippingInfo"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "orderUniqueAddress": {
                    "name": "orderUniqueAddress",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "tracking": {
                    "name": "tracking",
                    "isArray": true,
                    "type": {
                        "nonModel": "Tracking"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "Tracking": {
            "name": "Tracking",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "trackingKey": {
                    "name": "trackingKey",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "trackingUrl": {
                    "name": "trackingUrl",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "carrier": {
                    "name": "carrier",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "packages": {
                    "name": "packages",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "delivered": {
                    "name": "delivered",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "createDate": {
                    "name": "createDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "deliveredDate": {
                    "name": "deliveredDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ShippingInfo": {
            "name": "ShippingInfo",
            "fields": {
                "itemId": {
                    "name": "itemId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "shippingType": {
                    "name": "shippingType",
                    "isArray": false,
                    "type": {
                        "enum": "ShippingType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "schedule": {
                    "name": "schedule",
                    "isArray": false,
                    "type": {
                        "nonModel": "Schedule"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "selectedSla": {
                    "name": "selectedSla",
                    "isArray": true,
                    "type": {
                        "nonModel": "ShippingInfoCarrier"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "Billing": {
            "name": "Billing",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "discount": {
                    "name": "discount",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "tax": {
                    "name": "tax",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "freighAmount": {
                    "name": "freighAmount",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "total": {
                    "name": "total",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Location": {
            "name": "Location",
            "fields": {
                "lat": {
                    "name": "lat",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "lng": {
                    "name": "lng",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "alt": {
                    "name": "alt",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Schedule": {
            "name": "Schedule",
            "fields": {
                "fromDate": {
                    "name": "fromDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "toDate": {
                    "name": "toDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ShippingInfoCarrier": {
            "name": "ShippingInfoCarrier",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "courierName": {
                    "name": "courierName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Currrency": {
            "name": "Currrency",
            "fields": {
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "code": {
                    "name": "code",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "symbol": {
                    "name": "symbol",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "decimalDigits": {
                    "name": "decimalDigits",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "decimalSeparator": {
                    "name": "decimalSeparator",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "groupSeparator": {
                    "name": "groupSeparator",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "groupSize": {
                    "name": "groupSize",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Item": {
            "name": "Item",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "uniqueId": {
                    "name": "uniqueId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "itemName": {
                    "name": "itemName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sku": {
                    "name": "sku",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "additionalSku": {
                    "name": "additionalSku",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "EAN": {
                    "name": "EAN",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "additionalEAN": {
                    "name": "additionalEAN",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "referenceCode": {
                    "name": "referenceCode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "additionalReferenceCode": {
                    "name": "additionalReferenceCode",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "basePrice": {
                    "name": "basePrice",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "price": {
                    "name": "price",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "listPrice": {
                    "name": "listPrice",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "pickingPrice": {
                    "name": "pickingPrice",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "currencyCode": {
                    "name": "currencyCode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "tax": {
                    "name": "tax",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "isTaxable": {
                    "name": "isTaxable",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "weighableProduct": {
                    "name": "weighableProduct",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "categories": {
                    "name": "categories",
                    "isArray": true,
                    "type": {
                        "nonModel": "Taxonomy"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "brand": {
                    "name": "brand",
                    "isArray": false,
                    "type": {
                        "nonModel": "Taxonomy"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "unitOfMeasure": {
                    "name": "unitOfMeasure",
                    "isArray": false,
                    "type": {
                        "enum": "UnitOfMeasure"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "unitMultiplier": {
                    "name": "unitMultiplier",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "originalUnitMultiplier": {
                    "name": "originalUnitMultiplier",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "dimensions": {
                    "name": "dimensions",
                    "isArray": false,
                    "type": {
                        "nonModel": "Dimensions"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "isCombo": {
                    "name": "isCombo",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "images": {
                    "name": "images",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "label": {
                    "name": "label",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "qrCodeContent": {
                    "name": "qrCodeContent",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pickingOptions": {
                    "name": "pickingOptions",
                    "isArray": false,
                    "type": {
                        "nonModel": "ItemPickingOptions"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "observations": {
                    "name": "observations",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "notes": {
                    "name": "notes",
                    "isArray": true,
                    "type": {
                        "nonModel": "WorksheetNotes"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "inventoryData": {
                    "name": "inventoryData",
                    "isArray": true,
                    "type": {
                        "nonModel": "InventoryData"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "metaData": {
                    "name": "metaData",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "temperature": {
                    "name": "temperature",
                    "isArray": false,
                    "type": {
                        "enum": "Temperature"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "storeConfig": {
                    "name": "storeConfig",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "isOriginal": {
                    "name": "isOriginal",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "ItemStatus"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "pickedQuantity": {
                    "name": "pickedQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "transferredQuantity": {
                    "name": "transferredQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "dynamicBarcode": {
                    "name": "dynamicBarcode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "rejectedQuantity": {
                    "name": "rejectedQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "replacedQuantity": {
                    "name": "replacedQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "replacedBy": {
                    "name": "replacedBy",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "itemLogs": {
                    "name": "itemLogs",
                    "isArray": true,
                    "type": {
                        "nonModel": "ItemLog"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "changeQuantityReasons": {
                    "name": "changeQuantityReasons",
                    "isArray": true,
                    "type": {
                        "nonModel": "Reasons"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "changePriceReasons": {
                    "name": "changePriceReasons",
                    "isArray": true,
                    "type": {
                        "nonModel": "Reasons"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "location": {
                    "name": "location",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ItemLog": {
            "name": "ItemLog",
            "fields": {
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "metadata": {
                    "name": "metadata",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "timestamp": {
                    "name": "timestamp",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "InventoryData": {
            "name": "InventoryData",
            "fields": {
                "warehouseId": {
                    "name": "warehouseId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "warehouseName": {
                    "name": "warehouseName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "OrderOpenSearch": {
            "name": "OrderOpenSearch",
            "fields": {
                "customerId": {
                    "name": "customerId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "addressId": {
                    "name": "addressId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "shippingEstimatedDateMin": {
                    "name": "shippingEstimatedDateMin",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "orderDate": {
                    "name": "orderDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "finishedDate": {
                    "name": "finishedDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "orderStatus": {
                    "name": "orderStatus",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "invoiceDate": {
                    "name": "invoiceDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "invoiceNumbers": {
                    "name": "invoiceNumbers",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "orderId": {
                    "name": "orderId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "commercialPolicy": {
                    "name": "commercialPolicy",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "salesChannel": {
                    "name": "salesChannel",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "warehouseId": {
                    "name": "warehouseId",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "storeConfigId": {
                    "name": "storeConfigId",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "worksheetId": {
                    "name": "worksheetId",
                    "isArray": true,
                    "type": {
                        "nonModel": "WorksheetIdList"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "hostname": {
                    "name": "hostname",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "itemsQuantity": {
                    "name": "itemsQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "unitsQuantity": {
                    "name": "unitsQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "completedItemsQuantity": {
                    "name": "completedItemsQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "completedUnitsQuantity": {
                    "name": "completedUnitsQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "packedItemsQuantity": {
                    "name": "packedItemsQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "packedUnitsQuantity": {
                    "name": "packedUnitsQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "categoriesIds": {
                    "name": "categoriesIds",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "paymentMethodId": {
                    "name": "paymentMethodId",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "paymentMethodName": {
                    "name": "paymentMethodName",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "shippingCarrier": {
                    "name": "shippingCarrier",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "shippingType": {
                    "name": "shippingType",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "currency": {
                    "name": "currency",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "tags": {
                    "name": "tags",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "totalValue": {
                    "name": "totalValue",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "hasPendingPackages": {
                    "name": "hasPendingPackages",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "WorksheetIdList": {
            "name": "WorksheetIdList",
            "fields": {
                "worksheetId": {
                    "name": "worksheetId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ItemOrderPackage": {
            "name": "ItemOrderPackage",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "ean": {
                    "name": "ean",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "refId": {
                    "name": "refId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "imageUrl": {
                    "name": "imageUrl",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "PackageLocation": {
            "name": "PackageLocation",
            "fields": {
                "storeConfigId": {
                    "name": "storeConfigId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "location": {
                    "name": "location",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "assignedDate": {
                    "name": "assignedDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "current": {
                    "name": "current",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ActionRegister": {
            "name": "ActionRegister",
            "fields": {
                "userId": {
                    "name": "userId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "RMANotes": {
            "name": "RMANotes",
            "fields": {
                "note": {
                    "name": "note",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "RmaNotesTypes"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "createdBy": {
                    "name": "createdBy",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "creationDate": {
                    "name": "creationDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "RMAResolutionTransaction": {
            "name": "RMAResolutionTransaction",
            "fields": {
                "transactionId": {
                    "name": "transactionId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "RmaTransactionStatus"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "OrderRMA": {
            "name": "OrderRMA",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "total": {
                    "name": "total",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "paymentMethod": {
                    "name": "paymentMethod",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CustomerRMA": {
            "name": "CustomerRMA",
            "fields": {
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "identification": {
                    "name": "identification",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "PickupAddress": {
            "name": "PickupAddress",
            "fields": {
                "street": {
                    "name": "street",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "city": {
                    "name": "city",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "zip": {
                    "name": "zip",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "country": {
                    "name": "country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "Store": {
            "name": "Store",
            "fields": {
                "storeConfigId": {
                    "name": "storeConfigId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "address": {
                    "name": "address",
                    "isArray": false,
                    "type": {
                        "nonModel": "PickupAddress"
                    },
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "DeliveryAddress": {
            "name": "DeliveryAddress",
            "fields": {
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "address": {
                    "name": "address",
                    "isArray": false,
                    "type": {
                        "nonModel": "PickupAddress"
                    },
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "RMAItemInput": {
            "name": "RMAItemInput",
            "fields": {
                "reasonId": {
                    "name": "reasonId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "returnReason": {
                    "name": "returnReason",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "reasonType": {
                    "name": "reasonType",
                    "isArray": false,
                    "type": {
                        "enum": "ReasonTypeItem"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "attachments": {
                    "name": "attachments",
                    "isArray": true,
                    "type": {
                        "nonModel": "ItemAttachment"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "recommendedItem": {
                    "name": "recommendedItem",
                    "isArray": false,
                    "type": {
                        "nonModel": "RMAReplacementItem"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ItemAttachment": {
            "name": "ItemAttachment",
            "fields": {
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "TypeAttachment"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "URL": {
                    "name": "URL",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ItemShipping": {
            "name": "ItemShipping",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "packageID": {
                    "name": "packageID",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "RMAReplacementItem": {
            "name": "RMAReplacementItem",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "storeId": {
                    "name": "storeId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "image": {
                    "name": "image",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "sellingPrice": {
                    "name": "sellingPrice",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "adjustedPrice": {
                    "name": "adjustedPrice",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "difference": {
                    "name": "difference",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "additionalCost": {
                    "name": "additionalCost",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "paymentType": {
                    "name": "paymentType",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "RMASageItemImage": {
            "name": "RMASageItemImage",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "URL": {
                    "name": "URL",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "tags": {
                    "name": "tags",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "RMASageItemProductMatch": {
            "name": "RMASageItemProductMatch",
            "fields": {
                "brand": {
                    "name": "brand",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "model": {
                    "name": "model",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "color": {
                    "name": "color",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "product": {
                    "name": "product",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "size": {
                    "name": "size",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "image": {
                    "name": "image",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "RMASageItemJustification": {
            "name": "RMASageItemJustification",
            "fields": {
                "imageMatchProduct": {
                    "name": "imageMatchProduct",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "accurateDescription": {
                    "name": "accurateDescription",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CreateRMAResolutionItemResponse": {
            "name": "CreateRMAResolutionItemResponse",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "success": {
                    "name": "success",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "RMAServiceTracking": {
            "name": "RMAServiceTracking",
            "fields": {
                "serviceId": {
                    "name": "serviceId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "labelUrl": {
                    "name": "labelUrl",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "RMAShippingDeliverySlot": {
            "name": "RMAShippingDeliverySlot",
            "fields": {
                "from": {
                    "name": "from",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "to": {
                    "name": "to",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ResolutionCoupon": {
            "name": "ResolutionCoupon",
            "fields": {
                "idCalculatorConfiguration": {
                    "name": "idCalculatorConfiguration",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "beginDateUtc": {
                    "name": "beginDateUtc",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "endDateUtc": {
                    "name": "endDateUtc",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "utmSource": {
                    "name": "utmSource",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "utmCampaign": {
                    "name": "utmCampaign",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "amount": {
                    "name": "amount",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ResolutionGiftCard": {
            "name": "ResolutionGiftCard",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "redemptionCode": {
                    "name": "redemptionCode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "expiringDate": {
                    "name": "expiringDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "emissionDate": {
                    "name": "emissionDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "amount": {
                    "name": "amount",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "IASettingRMA": {
            "name": "IASettingRMA",
            "fields": {
                "active": {
                    "name": "active",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "language": {
                    "name": "language",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "RMASettingsIdFormat": {
            "name": "RMASettingsIdFormat",
            "fields": {
                "prefix": {
                    "name": "prefix",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "suffix": {
                    "name": "suffix",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "separator": {
                    "name": "separator",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "RMASettingsStatus": {
            "name": "RMASettingsStatus",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "color": {
                    "name": "color",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "active": {
                    "name": "active",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "RMASettingField": {
            "name": "RMASettingField",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "RmaSettingFieldType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "required": {
                    "name": "required",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "options": {
                    "name": "options",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "metadata": {
                    "name": "metadata",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "RMASettingTermAndCondition": {
            "name": "RMASettingTermAndCondition",
            "fields": {
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "url": {
                    "name": "url",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "DeliveryMethodPickup": {
            "name": "DeliveryMethodPickup",
            "fields": {
                "active": {
                    "name": "active",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "metadata": {
                    "name": "metadata",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "DeliveryMethodDeliveryToStore": {
            "name": "DeliveryMethodDeliveryToStore",
            "fields": {
                "active": {
                    "name": "active",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "availableStores": {
                    "name": "availableStores",
                    "isArray": true,
                    "type": {
                        "nonModel": "DeliveryMethodAvailableStores"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "DeliveryMethodAvailableStores": {
            "name": "DeliveryMethodAvailableStores",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "active": {
                    "name": "active",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "DeliveryMethodDeliveryToAddress": {
            "name": "DeliveryMethodDeliveryToAddress",
            "fields": {
                "account": {
                    "name": "account",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "availableAddress": {
                    "name": "availableAddress",
                    "isArray": true,
                    "type": {
                        "nonModel": "DeliveryMethodAvailableAddress"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "DeliveryMethodAvailableAddress": {
            "name": "DeliveryMethodAvailableAddress",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "active": {
                    "name": "active",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "courierId": {
                    "name": "courierId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "courierName": {
                    "name": "courierName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "courierLogo": {
                    "name": "courierLogo",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "address": {
                    "name": "address",
                    "isArray": true,
                    "type": {
                        "nonModel": "DeliveryMethodAvailableAddressAddress"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "DeliveryMethodAvailableAddressAddress": {
            "name": "DeliveryMethodAvailableAddressAddress",
            "fields": {
                "street": {
                    "name": "street",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "city": {
                    "name": "city",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "zip": {
                    "name": "zip",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "country": {
                    "name": "country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "RMALogisticsHours": {
            "name": "RMALogisticsHours",
            "fields": {
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "weekDay": {
                    "name": "weekDay",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "initialHour": {
                    "name": "initialHour",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "finalHour": {
                    "name": "finalHour",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ItemsLocation": {
            "name": "ItemsLocation",
            "fields": {
                "active": {
                    "name": "active",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "fields": {
                    "name": "fields",
                    "isArray": true,
                    "type": {
                        "nonModel": "Field"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "codeFormat": {
                    "name": "codeFormat",
                    "isArray": true,
                    "type": {
                        "nonModel": "CodeFormat"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "separator": {
                    "name": "separator",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "categoryLink": {
                    "name": "categoryLink",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "brandLink": {
                    "name": "brandLink",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Field": {
            "name": "Field",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": {
                        "enum": "IdEnum"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "label": {
                    "name": "label",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "FieldTypeEnum"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CodeFormat": {
            "name": "CodeFormat",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": {
                        "enum": "IdEnum"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "characters": {
                    "name": "characters",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "order": {
                    "name": "order",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "AvailablePackages": {
            "name": "AvailablePackages",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "code": {
                    "name": "code",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "dimensions": {
                    "name": "dimensions",
                    "isArray": false,
                    "type": {
                        "nonModel": "Dimensions"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "DynamicBarcodes": {
            "name": "DynamicBarcodes",
            "fields": {
                "allowDynamicBarcodes": {
                    "name": "allowDynamicBarcodes",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "productIdAsNumber": {
                    "name": "productIdAsNumber",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "weight": {
                    "name": "weight",
                    "isArray": false,
                    "type": {
                        "nonModel": "DynamicBarcode"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "price": {
                    "name": "price",
                    "isArray": false,
                    "type": {
                        "nonModel": "DynamicBarcode"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": {
                        "nonModel": "DynamicBarcode"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "DynamicBarcode": {
            "name": "DynamicBarcode",
            "fields": {
                "prefix": {
                    "name": "prefix",
                    "isArray": false,
                    "type": {
                        "nonModel": "Prefix"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "itemIdentifier": {
                    "name": "itemIdentifier",
                    "isArray": false,
                    "type": {
                        "nonModel": "ItemIdentifier"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "decimals": {
                    "name": "decimals",
                    "isArray": false,
                    "type": {
                        "nonModel": "Decimals"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Decimals": {
            "name": "Decimals",
            "fields": {
                "digits": {
                    "name": "digits",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Prefix": {
            "name": "Prefix",
            "fields": {
                "digits": {
                    "name": "digits",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "values": {
                    "name": "values",
                    "isArray": true,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "ItemIdentifier": {
            "name": "ItemIdentifier",
            "fields": {
                "digits": {
                    "name": "digits",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "model": {
                    "name": "model",
                    "isArray": false,
                    "type": {
                        "enum": "ItemIdentifierModel"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ChangesConfig": {
            "name": "ChangesConfig",
            "fields": {
                "allowAddItems": {
                    "name": "allowAddItems",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "allowLimitOrderTotalChanges": {
                    "name": "allowLimitOrderTotalChanges",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "allowPriceChanges": {
                    "name": "allowPriceChanges",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "allowQuantityChanges": {
                    "name": "allowQuantityChanges",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "allowItemReplacements": {
                    "name": "allowItemReplacements",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "allowItemRejections": {
                    "name": "allowItemRejections",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "sendChangesToVtexOms": {
                    "name": "sendChangesToVtexOms",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "itemChangesPriceThreshold": {
                    "name": "itemChangesPriceThreshold",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "itemChangesQuantityThreshold": {
                    "name": "itemChangesQuantityThreshold",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "orderChangesTotalThreshold": {
                    "name": "orderChangesTotalThreshold",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "rejectionReasons": {
                    "name": "rejectionReasons",
                    "isArray": true,
                    "type": {
                        "nonModel": "ChangeReasons"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "replacementReasons": {
                    "name": "replacementReasons",
                    "isArray": true,
                    "type": {
                        "nonModel": "ChangeReasons"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "priceChangeReasons": {
                    "name": "priceChangeReasons",
                    "isArray": true,
                    "type": {
                        "nonModel": "ChangeReasons"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "ChangeReasons": {
            "name": "ChangeReasons",
            "fields": {
                "key": {
                    "name": "key",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Value": {
                    "name": "Value",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "PrintingConfiguration": {
            "name": "PrintingConfiguration",
            "fields": {
                "comanda": {
                    "name": "comanda",
                    "isArray": false,
                    "type": {
                        "nonModel": "PrintingConfigurationDataComanda"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "packages": {
                    "name": "packages",
                    "isArray": false,
                    "type": {
                        "nonModel": "PrintingConfigurationDataPackages"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "delivery": {
                    "name": "delivery",
                    "isArray": false,
                    "type": {
                        "nonModel": "PrintingConfigurationDataDelivery"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "PrintingConfigurationDataPackages": {
            "name": "PrintingConfigurationDataPackages",
            "fields": {
                "active": {
                    "name": "active",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "dimensions": {
                    "name": "dimensions",
                    "isArray": false,
                    "type": {
                        "nonModel": "PrintingConfigurationDimensions"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "fontSize": {
                    "name": "fontSize",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "margin": {
                    "name": "margin",
                    "isArray": false,
                    "type": {
                        "nonModel": "PrintingConfigurationMargin"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "properties": {
                    "name": "properties",
                    "isArray": false,
                    "type": {
                        "nonModel": "PackagesProperties"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "PackagesProperties": {
            "name": "PackagesProperties",
            "fields": {
                "showPackagesQuantity": {
                    "name": "showPackagesQuantity",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "showPackageLocation": {
                    "name": "showPackageLocation",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "packageBarcode": {
                    "name": "packageBarcode",
                    "isArray": false,
                    "type": {
                        "nonModel": "PackageBarcodeConfiguration"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "orderInformation": {
                    "name": "orderInformation",
                    "isArray": false,
                    "type": {
                        "nonModel": "OrderInformationConfiguration"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "customerInformation": {
                    "name": "customerInformation",
                    "isArray": false,
                    "type": {
                        "nonModel": "CustomerInformationConfiguration"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "shippingInformation": {
                    "name": "shippingInformation",
                    "isArray": false,
                    "type": {
                        "nonModel": "ShippingInformationConfiguration"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "pickingInformation": {
                    "name": "pickingInformation",
                    "isArray": false,
                    "type": {
                        "nonModel": "PickingInformationConfiguration"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "itemsInformation": {
                    "name": "itemsInformation",
                    "isArray": false,
                    "type": {
                        "nonModel": "ItemsInformationConfiguration"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "PackageBarcodeConfiguration": {
            "name": "PackageBarcodeConfiguration",
            "fields": {
                "show": {
                    "name": "show",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "options": {
                    "name": "options",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "OrderInformationConfiguration": {
            "name": "OrderInformationConfiguration",
            "fields": {
                "show": {
                    "name": "show",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "options": {
                    "name": "options",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "ShippingInformationConfiguration": {
            "name": "ShippingInformationConfiguration",
            "fields": {
                "show": {
                    "name": "show",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "options": {
                    "name": "options",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "PickingInformationConfiguration": {
            "name": "PickingInformationConfiguration",
            "fields": {
                "show": {
                    "name": "show",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "options": {
                    "name": "options",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "ItemsInformationConfiguration": {
            "name": "ItemsInformationConfiguration",
            "fields": {
                "show": {
                    "name": "show",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "options": {
                    "name": "options",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "PrintingConfigurationDataComanda": {
            "name": "PrintingConfigurationDataComanda",
            "fields": {
                "active": {
                    "name": "active",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "dimensions": {
                    "name": "dimensions",
                    "isArray": false,
                    "type": {
                        "nonModel": "PrintingConfigurationDimensions"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "fontSize": {
                    "name": "fontSize",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "margin": {
                    "name": "margin",
                    "isArray": false,
                    "type": {
                        "nonModel": "PrintingConfigurationMargin"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "properties": {
                    "name": "properties",
                    "isArray": false,
                    "type": {
                        "nonModel": "ComandaProperties"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ComandaProperties": {
            "name": "ComandaProperties",
            "fields": {
                "showOrderIds": {
                    "name": "showOrderIds",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "splitItemsWithOrders": {
                    "name": "splitItemsWithOrders",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "comandaBarcodes": {
                    "name": "comandaBarcodes",
                    "isArray": false,
                    "type": {
                        "nonModel": "ComandaBarcodesConfiguration"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "customerInformation": {
                    "name": "customerInformation",
                    "isArray": false,
                    "type": {
                        "nonModel": "CustomerInformationConfiguration"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ComandaBarcodesConfiguration": {
            "name": "ComandaBarcodesConfiguration",
            "fields": {
                "show": {
                    "name": "show",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "options": {
                    "name": "options",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "CustomerInformationConfiguration": {
            "name": "CustomerInformationConfiguration",
            "fields": {
                "show": {
                    "name": "show",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "options": {
                    "name": "options",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "PrintingConfigurationDataDelivery": {
            "name": "PrintingConfigurationDataDelivery",
            "fields": {
                "active": {
                    "name": "active",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "dimensions": {
                    "name": "dimensions",
                    "isArray": false,
                    "type": {
                        "nonModel": "PrintingConfigurationDimensions"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "fontSize": {
                    "name": "fontSize",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "margin": {
                    "name": "margin",
                    "isArray": false,
                    "type": {
                        "nonModel": "PrintingConfigurationMargin"
                    },
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "PrintingConfigurationMargin": {
            "name": "PrintingConfigurationMargin",
            "fields": {
                "left": {
                    "name": "left",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "right": {
                    "name": "right",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "top": {
                    "name": "top",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "bottom": {
                    "name": "bottom",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "PrintingConfigurationDimensions": {
            "name": "PrintingConfigurationDimensions",
            "fields": {
                "width": {
                    "name": "width",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "height": {
                    "name": "height",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ServiceRate": {
            "name": "ServiceRate",
            "fields": {
                "shippingPrice": {
                    "name": "shippingPrice",
                    "isArray": false,
                    "type": {
                        "nonModel": "ServiceRateValue"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "insurancePrice": {
                    "name": "insurancePrice",
                    "isArray": false,
                    "type": {
                        "nonModel": "ServiceRateValue"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ServiceRateValue": {
            "name": "ServiceRateValue",
            "fields": {
                "currency": {
                    "name": "currency",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "ServiceOpenSearch": {
            "name": "ServiceOpenSearch",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "serviceId": {
                    "name": "serviceId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "orderId": {
                    "name": "orderId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "customerId": {
                    "name": "customerId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "customerAddressId": {
                    "name": "customerAddressId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "carrierId": {
                    "name": "carrierId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "courierId": {
                    "name": "courierId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "source": {
                    "name": "source",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "destination": {
                    "name": "destination",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "deliveredDate": {
                    "name": "deliveredDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "courierName": {
                    "name": "courierName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "hostname": {
                    "name": "hostname",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "storeConfigId": {
                    "name": "storeConfigId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "packagesQuantity": {
                    "name": "packagesQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "itemsQuantity": {
                    "name": "itemsQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "carrierLogo": {
                    "name": "carrierLogo",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "carrierName": {
                    "name": "carrierName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "paymentMethod": {
                    "name": "paymentMethod",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "serviceType": {
                    "name": "serviceType",
                    "isArray": false,
                    "type": {
                        "enum": "ServiceType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "tags": {
                    "name": "tags",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "deadline": {
                    "name": "deadline",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "creationDate": {
                    "name": "creationDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "metaData": {
                    "name": "metaData",
                    "isArray": false,
                    "type": {
                        "nonModel": "SearchServiceMetaData"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "transferManagement": {
                    "name": "transferManagement",
                    "isArray": false,
                    "type": {
                        "nonModel": "ServiceTransferManagement"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "SearchServiceMetaData": {
            "name": "SearchServiceMetaData",
            "fields": {
                "carrier": {
                    "name": "carrier",
                    "isArray": false,
                    "type": {
                        "nonModel": "SearchServiceCarrierMeteData"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "SearchServiceCarrierMeteData": {
            "name": "SearchServiceCarrierMeteData",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "image": {
                    "name": "image",
                    "isArray": false,
                    "type": {
                        "nonModel": "SearchServiceImageMeteData"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "nonModel": "SearchServiceType"
                    },
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "SearchServiceImageMeteData": {
            "name": "SearchServiceImageMeteData",
            "fields": {
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "SearchServiceType": {
            "name": "SearchServiceType",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "ServiceEvidence": {
            "name": "ServiceEvidence",
            "fields": {
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "ServiceEvidenceType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "author": {
                    "name": "author",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ServiceSender": {
            "name": "ServiceSender",
            "fields": {
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "phone": {
                    "name": "phone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "city": {
                    "name": "city",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "country": {
                    "name": "country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "neighborhood": {
                    "name": "neighborhood",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "address": {
                    "name": "address",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "addressComplement": {
                    "name": "addressComplement",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "reference": {
                    "name": "reference",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "number": {
                    "name": "number",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "location": {
                    "name": "location",
                    "isArray": false,
                    "type": {
                        "nonModel": "CLocation"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "pickupDate": {
                    "name": "pickupDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "deliveryWindow": {
                    "name": "deliveryWindow",
                    "isArray": false,
                    "type": {
                        "nonModel": "ServiceDeliveryWindow"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "zipCode": {
                    "name": "zipCode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ServiceReceiver": {
            "name": "ServiceReceiver",
            "fields": {
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "phone": {
                    "name": "phone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "city": {
                    "name": "city",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "country": {
                    "name": "country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "neighborhood": {
                    "name": "neighborhood",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "address": {
                    "name": "address",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "addressComplement": {
                    "name": "addressComplement",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "reference": {
                    "name": "reference",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "number": {
                    "name": "number",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "location": {
                    "name": "location",
                    "isArray": false,
                    "type": {
                        "nonModel": "CLocation"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "identification": {
                    "name": "identification",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "deliveryDate": {
                    "name": "deliveryDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "deliveryWindow": {
                    "name": "deliveryWindow",
                    "isArray": false,
                    "type": {
                        "nonModel": "ServiceDeliveryWindow"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "contactName": {
                    "name": "contactName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "zipCode": {
                    "name": "zipCode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ServiceDeliveryWindow": {
            "name": "ServiceDeliveryWindow",
            "fields": {
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "initialDate": {
                    "name": "initialDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "finalDate": {
                    "name": "finalDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ServiceAgent": {
            "name": "ServiceAgent",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "identification": {
                    "name": "identification",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "phone": {
                    "name": "phone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "vehicle": {
                    "name": "vehicle",
                    "isArray": false,
                    "type": {
                        "enum": "ServiceVehicle"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "PackageService": {
            "name": "PackageService",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "orderId": {
                    "name": "orderId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "envelope": {
                    "name": "envelope",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "dimensions": {
                    "name": "dimensions",
                    "isArray": false,
                    "type": {
                        "nonModel": "ServiceDimensionsPacking"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "weight": {
                    "name": "weight",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "totalValue": {
                    "name": "totalValue",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "ServiceItemsPackage"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "categories": {
                    "name": "categories",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ServiceDimensionsPacking": {
            "name": "ServiceDimensionsPacking",
            "fields": {
                "width": {
                    "name": "width",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "height": {
                    "name": "height",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "length": {
                    "name": "length",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ServiceItemsPackage": {
            "name": "ServiceItemsPackage",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "ean": {
                    "name": "ean",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "refId": {
                    "name": "refId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "image": {
                    "name": "image",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "price": {
                    "name": "price",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "weight": {
                    "name": "weight",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "ServiceTimeline": {
            "name": "ServiceTimeline",
            "fields": {
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "ServiceStatus"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "ServiceNotes": {
            "name": "ServiceNotes",
            "fields": {
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "ServiceNotesType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "author": {
                    "name": "author",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ServiceCollection": {
            "name": "ServiceCollection",
            "fields": {
                "confirmationDate": {
                    "name": "confirmationDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "code": {
                    "name": "code",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "ServiceTransferManagement": {
            "name": "ServiceTransferManagement",
            "fields": {
                "fromService": {
                    "name": "fromService",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "newService": {
                    "name": "newService",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "storeConfig": {
                    "name": "storeConfig",
                    "isArray": false,
                    "type": {
                        "nonModel": "ServiceStoreConfig"
                    },
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "ServiceStoreConfig": {
            "name": "ServiceStoreConfig",
            "fields": {
                "storeConfigOrigin": {
                    "name": "storeConfigOrigin",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "storeConfigDestination": {
                    "name": "storeConfigDestination",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "salesSourceNameOrigin": {
                    "name": "salesSourceNameOrigin",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "salesSourceNameDestination": {
                    "name": "salesSourceNameDestination",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "salesChannelNameOrigin": {
                    "name": "salesChannelNameOrigin",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "salesChannelNameDestination": {
                    "name": "salesChannelNameDestination",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CategoriesConfiguration": {
            "name": "CategoriesConfiguration",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "priority": {
                    "name": "priority",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "parentId": {
                    "name": "parentId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "hasChildren": {
                    "name": "hasChildren",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "url": {
                    "name": "url",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "metaTagDescription": {
                    "name": "metaTagDescription",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "left": {
                    "name": "left",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "right": {
                    "name": "right",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "GeneralConfig": {
            "name": "GeneralConfig",
            "fields": {
                "address": {
                    "name": "address",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "addressComplement": {
                    "name": "addressComplement",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "neighborhood": {
                    "name": "neighborhood",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "postalCode": {
                    "name": "postalCode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "reference": {
                    "name": "reference",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "number": {
                    "name": "number",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "city": {
                    "name": "city",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "changePricesReasons": {
                    "name": "changePricesReasons",
                    "isArray": true,
                    "type": {
                        "nonModel": "Reason"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "contactInformation": {
                    "name": "contactInformation",
                    "isArray": false,
                    "type": {
                        "nonModel": "ContactInformation"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "country": {
                    "name": "country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "deliveryWindow": {
                    "name": "deliveryWindow",
                    "isArray": true,
                    "type": {
                        "nonModel": "DeliveryWindow"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "location": {
                    "name": "location",
                    "isArray": false,
                    "type": {
                        "nonModel": "StoreLocation"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "measurementUnit": {
                    "name": "measurementUnit",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "replacementReasons": {
                    "name": "replacementReasons",
                    "isArray": true,
                    "type": {
                        "nonModel": "Reason"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "DeliveryWindow": {
            "name": "DeliveryWindow",
            "fields": {
                "finalHour": {
                    "name": "finalHour",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "initialHour": {
                    "name": "initialHour",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "weekDay": {
                    "name": "weekDay",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Reason": {
            "name": "Reason",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "StoreLocation": {
            "name": "StoreLocation",
            "fields": {
                "latitude": {
                    "name": "latitude",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "longitude": {
                    "name": "longitude",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ContactInformation": {
            "name": "ContactInformation",
            "fields": {
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "phone": {
                    "name": "phone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Dock": {
            "name": "Dock",
            "fields": {
                "dockId": {
                    "name": "dockId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "time": {
                    "name": "time",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "cost": {
                    "name": "cost",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Warehouse": {
            "name": "Warehouse",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "warehouseDocks": {
                    "name": "warehouseDocks",
                    "isArray": true,
                    "type": {
                        "nonModel": "Dock"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "pickupPointIds": {
                    "name": "pickupPointIds",
                    "isArray": true,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "priority": {
                    "name": "priority",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "isActive": {
                    "name": "isActive",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "WebhookVariables": {
            "name": "WebhookVariables",
            "fields": {
                "key": {
                    "name": "key",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Pauses": {
            "name": "Pauses",
            "fields": {
                "startDate": {
                    "name": "startDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "endDate": {
                    "name": "endDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "reason": {
                    "name": "reason",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "user": {
                    "name": "user",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "reasonType": {
                    "name": "reasonType",
                    "isArray": false,
                    "type": {
                        "enum": "PauseReasonType"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "WorksheetNotes": {
            "name": "WorksheetNotes",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "user": {
                    "name": "user",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "note": {
                    "name": "note",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "OrderPriority": {
            "name": "OrderPriority",
            "fields": {
                "orderId": {
                    "name": "orderId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "shippingEstimatedDate": {
                    "name": "shippingEstimatedDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "totalValue": {
                    "name": "totalValue",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "priority": {
                    "name": "priority",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "isInvoiced": {
                    "name": "isInvoiced",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "itemsQuantity": {
                    "name": "itemsQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "unitsQuantity": {
                    "name": "unitsQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "paymentMethodName": {
                    "name": "paymentMethodName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "paymentMethodId": {
                    "name": "paymentMethodId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "shippingMethodName": {
                    "name": "shippingMethodName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "shippingMethodType": {
                    "name": "shippingMethodType",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "shippingMethodId": {
                    "name": "shippingMethodId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "customer": {
                    "name": "customer",
                    "isArray": false,
                    "type": {
                        "nonModel": "CustomerWorksheet"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CustomerWorksheet": {
            "name": "CustomerWorksheet",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "profileId": {
                    "name": "profileId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "publicName": {
                    "name": "publicName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "firstName": {
                    "name": "firstName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "lastName": {
                    "name": "lastName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "document": {
                    "name": "document",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "documentType": {
                    "name": "documentType",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "phone": {
                    "name": "phone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "SubstituteItem": {
            "name": "SubstituteItem",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "refId": {
                    "name": "refId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "ean": {
                    "name": "ean",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "price": {
                    "name": "price",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "image": {
                    "name": "image",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "categories": {
                    "name": "categories",
                    "isArray": true,
                    "type": {
                        "nonModel": "Category"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "Category": {
            "name": "Category",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "PickerAssignment": {
            "name": "PickerAssignment",
            "fields": {
                "active": {
                    "name": "active",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "pickerId": {
                    "name": "pickerId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "method": {
                    "name": "method",
                    "isArray": false,
                    "type": {
                        "enum": "AssignmentMethod"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "assignmentDate": {
                    "name": "assignmentDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "finishedDate": {
                    "name": "finishedDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "notes": {
                    "name": "notes",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "ItemsByWorksheet": {
            "name": "ItemsByWorksheet",
            "fields": {
                "categories": {
                    "name": "categories",
                    "isArray": true,
                    "type": {
                        "nonModel": "Category"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "brand": {
                    "name": "brand",
                    "isArray": false,
                    "type": {
                        "nonModel": "Taxonomy"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "itemAssignment": {
                    "name": "itemAssignment",
                    "isArray": false,
                    "type": {
                        "nonModel": "ItemAssignment"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "originalQuantity": {
                    "name": "originalQuantity",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "orderSource": {
                    "name": "orderSource",
                    "isArray": true,
                    "type": {
                        "nonModel": "OrderSource"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "temperature": {
                    "name": "temperature",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "isWeighable": {
                    "name": "isWeighable",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "completedQuantity": {
                    "name": "completedQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "pickedQuantity": {
                    "name": "pickedQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "rejectedQuantity": {
                    "name": "rejectedQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "replacedQuantity": {
                    "name": "replacedQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "skus": {
                    "name": "skus",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "eans": {
                    "name": "eans",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "refs": {
                    "name": "refs",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "image": {
                    "name": "image",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ReplacedItemsByWorksheet": {
            "name": "ReplacedItemsByWorksheet",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "originalQuantity": {
                    "name": "originalQuantity",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "orderSource": {
                    "name": "orderSource",
                    "isArray": true,
                    "type": {
                        "nonModel": "ReplacedOrderSource"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "temperature": {
                    "name": "temperature",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "isWeighable": {
                    "name": "isWeighable",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "replacedQuantity": {
                    "name": "replacedQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "image": {
                    "name": "image",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ReplacedOrderSource": {
            "name": "ReplacedOrderSource",
            "fields": {
                "orderId": {
                    "name": "orderId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "sellingPrice": {
                    "name": "sellingPrice",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "listPrice": {
                    "name": "listPrice",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "currencyCode": {
                    "name": "currencyCode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "unitOfMeasure": {
                    "name": "unitOfMeasure",
                    "isArray": false,
                    "type": {
                        "enum": "UnitOfMeasure"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "unitMultiplier": {
                    "name": "unitMultiplier",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "originalUnitMultiplier": {
                    "name": "originalUnitMultiplier",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "replacedQuantity": {
                    "name": "replacedQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "replacedBy": {
                    "name": "replacedBy",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "reasons": {
                    "name": "reasons",
                    "isArray": true,
                    "type": {
                        "nonModel": "Reasons"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "RejectedItemsByWorksheet": {
            "name": "RejectedItemsByWorksheet",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "originalQuantity": {
                    "name": "originalQuantity",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "orderSource": {
                    "name": "orderSource",
                    "isArray": true,
                    "type": {
                        "nonModel": "RejectedOrderSource"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "temperature": {
                    "name": "temperature",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "isWeighable": {
                    "name": "isWeighable",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "rejectedQuantity": {
                    "name": "rejectedQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "image": {
                    "name": "image",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "RejectedOrderSource": {
            "name": "RejectedOrderSource",
            "fields": {
                "orderId": {
                    "name": "orderId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "sellingPrice": {
                    "name": "sellingPrice",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "listPrice": {
                    "name": "listPrice",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "unitOfMeasure": {
                    "name": "unitOfMeasure",
                    "isArray": false,
                    "type": {
                        "enum": "UnitOfMeasure"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "unitMultiplier": {
                    "name": "unitMultiplier",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "originalUnitMultiplier": {
                    "name": "originalUnitMultiplier",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "currencyCode": {
                    "name": "currencyCode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "rejectedQuantity": {
                    "name": "rejectedQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "reasons": {
                    "name": "reasons",
                    "isArray": true,
                    "type": {
                        "nonModel": "Reasons"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            }
        },
        "Reasons": {
            "name": "Reasons",
            "fields": {
                "reasonType": {
                    "name": "reasonType",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "reasonDetail": {
                    "name": "reasonDetail",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "PickedItemsByWorksheet": {
            "name": "PickedItemsByWorksheet",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "originalQuantity": {
                    "name": "originalQuantity",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "orderSource": {
                    "name": "orderSource",
                    "isArray": true,
                    "type": {
                        "nonModel": "PickedOrderSource"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "temperature": {
                    "name": "temperature",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "isWeighable": {
                    "name": "isWeighable",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "pickedQuantity": {
                    "name": "pickedQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "packedQuantity": {
                    "name": "packedQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "dynamicBarcode": {
                    "name": "dynamicBarcode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "image": {
                    "name": "image",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "PickedOrderSource": {
            "name": "PickedOrderSource",
            "fields": {
                "orderId": {
                    "name": "orderId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sellingPrice": {
                    "name": "sellingPrice",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "listPrice": {
                    "name": "listPrice",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "currencyCode": {
                    "name": "currencyCode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "unitOfMeasure": {
                    "name": "unitOfMeasure",
                    "isArray": false,
                    "type": {
                        "enum": "UnitOfMeasure"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "unitMultiplier": {
                    "name": "unitMultiplier",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "originalUnitMultiplier": {
                    "name": "originalUnitMultiplier",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "pickedQuantity": {
                    "name": "pickedQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "packedQuantity": {
                    "name": "packedQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ItemAssignment": {
            "name": "ItemAssignment",
            "fields": {
                "assignedAt": {
                    "name": "assignedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "startPickingAt": {
                    "name": "startPickingAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "finishedAt": {
                    "name": "finishedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "OrderSource": {
            "name": "OrderSource",
            "fields": {
                "orderId": {
                    "name": "orderId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sellingPrice": {
                    "name": "sellingPrice",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "listPrice": {
                    "name": "listPrice",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "quantity": {
                    "name": "quantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "unitOfMeasure": {
                    "name": "unitOfMeasure",
                    "isArray": false,
                    "type": {
                        "enum": "UnitOfMeasure"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "unitMultiplier": {
                    "name": "unitMultiplier",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "originalUnitMultiplier": {
                    "name": "originalUnitMultiplier",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "currencyCode": {
                    "name": "currencyCode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pickedQuantity": {
                    "name": "pickedQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "rejectedQuantity": {
                    "name": "rejectedQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "replacedQuantity": {
                    "name": "replacedQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "replacedBy": {
                    "name": "replacedBy",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "transferredWorksheetId": {
                    "name": "transferredWorksheetId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "isTransferred": {
                    "name": "isTransferred",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "transferredStoreConfigId": {
                    "name": "transferredStoreConfigId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "notes": {
                    "name": "notes",
                    "isArray": true,
                    "type": {
                        "nonModel": "WorksheetNotes"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "ItemInWorksheetStatus"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "pickingOptions": {
                    "name": "pickingOptions",
                    "isArray": false,
                    "type": {
                        "nonModel": "ItemPickingOptions"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "location": {
                    "name": "location",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "WorksheetStatsResponse": {
            "name": "WorksheetStatsResponse",
            "fields": {
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pendingWorksheets": {
                    "name": "pendingWorksheets",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "completedWorksheets": {
                    "name": "completedWorksheets",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "totalWorksheets": {
                    "name": "totalWorksheets",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "OrderIdsOpenSearch": {
            "name": "OrderIdsOpenSearch",
            "fields": {
                "orderId": {
                    "name": "orderId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "itemsQuantity": {
                    "name": "itemsQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "unitsQuantity": {
                    "name": "unitsQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "WorksheetOpenSearch": {
            "name": "WorksheetOpenSearch",
            "fields": {
                "worksheetId": {
                    "name": "worksheetId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "isPaused": {
                    "name": "isPaused",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "pauses": {
                    "name": "pauses",
                    "isArray": true,
                    "type": {
                        "nonModel": "Pauses"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "WorksheetStatus"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "ordersIds": {
                    "name": "ordersIds",
                    "isArray": true,
                    "type": {
                        "nonModel": "OrderIdsOpenSearch"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "storeConfig": {
                    "name": "storeConfig",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "hostname": {
                    "name": "hostname",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "categoriesIds": {
                    "name": "categoriesIds",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "pickerAssignment": {
                    "name": "pickerAssignment",
                    "isArray": true,
                    "type": {
                        "nonModel": "PickerAssignment"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "itemsQuantity": {
                    "name": "itemsQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "unitsQuantity": {
                    "name": "unitsQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "completedUnitsQuantity": {
                    "name": "completedUnitsQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "packedUnitsQuantity": {
                    "name": "packedUnitsQuantity",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "deliveryWindow": {
                    "name": "deliveryWindow",
                    "isArray": false,
                    "type": {
                        "nonModel": "DeliveryWindow"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "finishedDate": {
                    "name": "finishedDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "finishEstimatedDate": {
                    "name": "finishEstimatedDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "initDate": {
                    "name": "initDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "codegenVersion": "3.4.4",
    "version": "a18d2f98f1cddefa320131113779233d"
};