// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ActionTypes = {
  "ADD": "ADD",
  "DELETE": "DELETE",
  "SET": "SET"
};

const CombinatorType = {
  "AND": "and",
  "OR": "or"
};

const CarrierFormConfigurationFieldType = {
  "TEXT": "TEXT",
  "NUMBER": "NUMBER",
  "SELECT": "SELECT",
  "PASSWORD": "PASSWORD",
  "RADIO": "RADIO",
  "CHECKBOX": "CHECKBOX"
};

const CarrierFormConfigurationAuthType = {
  "QUERY_STRING": "QUERY_STRING",
  "HEADER": "HEADER"
};

const CarrierPricingType = {
  "FREE": "FREE",
  "TRANSACTIONS_FEE": "TRANSACTIONS_FEE",
  "MONTHLY_FEE": "MONTHLY_FEE"
};

const CarrierIntegrationMethod = {
  "POST": "POST",
  "PATCH": "PATCH",
  "PUT": "PUT",
  "GET": "GET"
};

const CarrierIntegrationProtocol = {
  "HTTP": "HTTP",
  "HTTPS": "HTTPS"
};

const CEnvironment = {
  "DEV": "DEV",
  "PROD": "PROD"
};

const CAppliedAutomationStatus = {
  "SUCCESS": "SUCCESS",
  "ERROR": "ERROR",
  "WARNING": "WARNING"
};

const InsightsTimeFilter = {
  "LAST_DAY": "last_day",
  "LAST_SEVEN_DAYS": "last_seven_days",
  "LAST_FIFTEEN_DAYS": "last_fifteen_days",
  "LAST_MONTH": "last_month",
  "LAST_SIX_MONTHS": "last_six_months"
};

const InsightsTimeRange = {
  "ACTUAL_DAY": "ACTUAL_DAY",
  "LAST_DAY": "LAST_DAY",
  "LAST_SEVEN_DAYS": "LAST_SEVEN_DAYS",
  "LAST_MONTH": "LAST_MONTH",
  "LAST_THREE_MONTHS": "LAST_THREE_MONTHS",
  "LAST_SIX_MONTHS": "LAST_SIX_MONTHS"
};

const QueryTypeCatalog = {
  "SKU": "SKU",
  "REFID": "REFID"
};

const TokenType = {
  "NOTIFICATION": "NOTIFICATION",
  "REAL_TIME": "REAL_TIME"
};

const ItemTransferStatus = {
  "PENDING": "PENDING",
  "APPROVED": "APPROVED",
  "REJECTED": "REJECTED",
  "COMPLETED": "COMPLETED",
  "DELIVERED": "DELIVERED"
};

const ItemNoteType = {
  "CLIENT": "CLIENT",
  "ADMIN": "ADMIN",
  "PICKER": "PICKER"
};

const ItemType = {
  "ORDER": "ORDER",
  "RMA": "RMA"
};

const ItemTransferDetailStatus = {
  "PENDING": "PENDING",
  "APPROVED": "APPROVED",
  "REJECTED": "REJECTED",
  "ASSIGNED": "ASSIGNED"
};

const ItemStatus = {
  "PENDING": "PENDING",
  "ASSIGNED": "ASSIGNED",
  "COLLECTED": "COLLECTED",
  "REPLACED": "REPLACED",
  "REJECTED": "REJECTED",
  "REFUNDED": "REFUNDED",
  "RETURNED": "RETURNED",
  "CANCELLED": "CANCELLED",
  "PENDING_TRANSFERRED": "PENDING_TRANSFERRED",
  "TRANSFERRED": "TRANSFERRED",
  "COMPLETED": "COMPLETED",
  "READY_FOR_PACKING": "READY_FOR_PACKING",
  "READY_FOR_SHIPPING": "READY_FOR_SHIPPING",
  "SHIPPED": "SHIPPED",
  "DELIVERED": "DELIVERED",
  "PACKED": "PACKED",
  "PAUSED": "PAUSED"
};

const Temperature = {
  "FROZEN": "FROZEN",
  "COLD": "COLD",
  "AMBIENT": "AMBIENT"
};

const NotFoundOptions = {
  "REPLACE": "REPLACE",
  "SUGGEST": "SUGGEST",
  "REFUND": "REFUND"
};

const UnitOfMeasure = {
  "KILOGRAMS": "KILOGRAMS",
  "GRAMS": "GRAMS",
  "POUNDS": "POUNDS",
  "UNITS": "UNITS",
  "OUNCES": "OUNCES",
  "MILLIGRAMS": "MILLIGRAMS"
};

const OrderNoteType = {
  "CUSTOMER": "CUSTOMER",
  "STORE": "STORE"
};

const OrderStatus = {
  "READY_FOR_HANDLING": "READY_FOR_HANDLING",
  "READY_FOR_PICKING": "READY_FOR_PICKING",
  "PICKING": "PICKING",
  "PARTIAL_COLLECTED": "PARTIAL_COLLECTED",
  "COLLECTED": "COLLECTED",
  "READY_FOR_PACKING": "READY_FOR_PACKING",
  "PACKING": "PACKING",
  "PARTIAL_PACKED": "PARTIAL_PACKED",
  "PREPARING_SHIPPING": "PREPARING_SHIPPING",
  "READY_FOR_SHIPPING": "READY_FOR_SHIPPING",
  "PARTIAL_SHIPPED": "PARTIAL_SHIPPED",
  "SHIPPING": "SHIPPING",
  "DELIVERED": "DELIVERED",
  "REJECTED": "REJECTED",
  "CANCELED": "CANCELED",
  "PAUSED": "PAUSED"
};

const SortDirection = {
  "ASC": "ASC",
  "DESC": "DESC"
};

const OrderSortField = {
  "SHIPPING_ESTIMATED_DATE_MIN": "shippingEstimatedDateMin",
  "ORDER_DATE": "orderDate",
  "INVOICE_DATE": "invoiceDate"
};

const VtexOrderStatus = {
  "HANDLING": "HANDLING",
  "INVOICED": "INVOICED",
  "PAYMENT_APPROVED": "PAYMENT_APPROVED",
  "READY_FOR_HANDLING": "READY_FOR_HANDLING",
  "REPLACED": "REPLACED",
  "WAITING_FOR_SELLER_DECISION": "WAITING_FOR_SELLER_DECISION"
};

const ShippingType = {
  "SHIP_FROM_STORE": "SHIP_FROM_STORE",
  "PICKUP_IN_STORE": "PICKUP_IN_STORE",
  "DRIVE_THRU": "DRIVE_THRU"
};

const DocType = {
  "POS": "POS",
  "WIDE": "WIDE"
};

const PackageType = {
  "ORDER": "ORDER",
  "RMA": "RMA"
};

const PackageStatus = {
  "PENDING": "PENDING",
  "READY_FOR_SHIPPING": "READY_FOR_SHIPPING",
  "PACKED": "PACKED",
  "SHIPPED": "SHIPPED",
  "DELIVERED": "DELIVERED",
  "RETURNED": "RETURNED"
};

const PickingActionFrom = {
  "ADMIN": "ADMIN",
  "MOBILE": "MOBILE"
};

const PickingActionStatus = {
  "PENDING": "PENDING",
  "APPROVED": "APPROVED",
  "REJECTED": "REJECTED"
};

const PickingActionType = {
  "REPLACE": "REPLACE",
  "REJECT": "REJECT",
  "ADD_ITEM": "ADD_ITEM",
  "ADD_QUANTITY": "ADD_QUANTITY"
};

const ItemRequestType = {
  "RETURN": "RETURN",
  "EXCHANGE": "EXCHANGE",
  "WARRANTY": "WARRANTY"
};

const RmaTransactionStatus = {
  "PENDING": "PENDING",
  "ACTIVE": "ACTIVE",
  "COMPLETED": "COMPLETED",
  "REJECTED": "REJECTED",
  "EXPIRED": "EXPIRED"
};

const RmaTransactionType = {
  "GIFT_CARD": "GIFT_CARD",
  "VOUCHER": "VOUCHER",
  "COUPON": "COUPON",
  "REFUND": "REFUND",
  "PAYMENT": "PAYMENT",
  "OTHER": "OTHER"
};

const ReturnStatus = {
  "NEW": "NEW",
  "HANDLING": "HANDLING",
  "COMPLETED": "COMPLETED",
  "SHIPPING": "SHIPPING",
  "CANCELED": "CANCELED",
  "REFUNDED": "REFUNDED",
  "PENDING": "PENDING"
};

const ItemReturnStatus = {
  "REQUESTED": "REQUESTED",
  "RECEIVED": "RECEIVED",
  "MISSING": "MISSING",
  "DAMAGED": "DAMAGED"
};

const RmaShippingTypes = {
  "PICKUP": "PICKUP",
  "DELIVERY_TO_STORE": "DELIVERY_TO_STORE",
  "DELIVERY_TO_ADDRESS": "DELIVERY_TO_ADDRESS"
};

const RmaShippingStatus = {
  "PENDING": "PENDING",
  "PICKED_UP": "PICKED_UP",
  "DELIVERED": "DELIVERED"
};

const RmaItemsStatus = {
  "NEW": "NEW",
  "REQUESTED": "REQUESTED",
  "RECEIVED": "RECEIVED",
  "ACCEPTED": "ACCEPTED",
  "REJECTED": "REJECTED",
  "MISSING": "MISSING",
  "DAMAGED": "DAMAGED",
  "REFUNDED": "REFUNDED"
};

const ItemResolutionType = {
  "REPLACEMENT": "REPLACEMENT",
  "REFUND": "REFUND",
  "STORE_CREDIT": "STORE_CREDIT"
};

const ReasonTypeItem = {
  "DAMAGED": "DAMAGED",
  "WRONG": "WRONG",
  "NOT_NEEDED": "NOT_NEEDED",
  "COLOR": "COLOR",
  "SIZE": "SIZE",
  "OTHER": "OTHER"
};

const TypeAttachment = {
  "IMAGE": "IMAGE",
  "VIDEO": "VIDEO",
  "AUDIO": "AUDIO",
  "FILE": "FILE"
};

const RmaNotesTypes = {
  "INTERNAL": "INTERNAL",
  "CUSTOMER": "CUSTOMER"
};

const RmaReplacementStatus = {
  "NEW": "NEW",
  "REQUESTED": "REQUESTED",
  "RECEIVED": "RECEIVED",
  "ACCEPTED": "ACCEPTED",
  "REJECTED": "REJECTED",
  "MISSING": "MISSING",
  "DAMAGED": "DAMAGED"
};

const RmaRefundStatus = {
  "PENDING": "PENDING",
  "APPROVED": "APPROVED",
  "REJECTED": "REJECTED"
};

const RmaStoreCreditReason = {
  "BONUS": "BONUS",
  "REFUND": "REFUND",
  "REPLACEMENT": "REPLACEMENT",
  "OTHER": "OTHER"
};

const RmaStoreCreditType = {
  "GIFT_CARD": "GIFT_CARD",
  "VOUCHER": "VOUCHER",
  "COUPON": "COUPON"
};

const RmaStoreCreditStatus = {
  "ACTIVE": "ACTIVE",
  "USED": "USED",
  "EXPIRED": "EXPIRED"
};

const RmaSettingFieldType = {
  "TEXT": "TEXT",
  "TEXTAREA": "TEXTAREA",
  "SELECT": "SELECT",
  "RADIO": "RADIO",
  "CHECKBOX": "CHECKBOX",
  "FILE": "FILE",
  "IMAGE": "IMAGE",
  "VIDEO": "VIDEO",
  "AUDIO": "AUDIO"
};

const RmaPerksType = {
  "STORE_CREDIT": "STORE_CREDIT",
  "FREE_SHIPPING": "FREE_SHIPPING",
  "DISCOUNT": "DISCOUNT",
  "OTHER": "OTHER"
};

const RmaReturnReasonsType = {
  "DAMAGED": "DAMAGED",
  "WRONG": "WRONG",
  "NOT_NEEDED": "NOT_NEEDED",
  "COLOR": "COLOR",
  "SIZE": "SIZE",
  "OTHER": "OTHER"
};

const RmaPoliciesType = {
  "WARRANTY": "WARRANTY",
  "RETURN": "RETURN",
  "EXCHANGE": "EXCHANGE"
};

const ItemInformation = {
  "EAN": "EAN",
  "CATEGORY": "CATEGORY",
  "BRAND": "BRAND",
  "REFID": "REFID",
  "SKU": "SKU",
  "NAME": "NAME",
  "SELLING_PRICE": "SELLING_PRICE",
  "ITEM_ID": "ITEM_ID"
};

const FieldTypeEnum = {
  "DEFAULT": "DEFAULT"
};

const IdEnum = {
  "ZONE": "ZONE",
  "SECTION": "SECTION",
  "AISLE": "AISLE",
  "SHELF": "SHELF",
  "BIN": "BIN"
};

const AccountTypes = {
  "ECOMMERCE": "ECOMMERCE",
  "CALL_CENTER": "CALL_CENTER",
  "MOBILE_APP": "MOBILE_APP",
  "MARKETPLACE": "MARKETPLACE",
  "OFFLINE": "OFFLINE",
  "POS": "POS"
};

const ItemIdentifierModel = {
  "REFID": "REFID",
  "SKU": "SKU"
};

const ServiceStatus = {
  "CREATED": "CREATED",
  "PENDING": "PENDING",
  "ASSIGNED": "ASSIGNED",
  "PICKED": "PICKED",
  "ON_ROUTE": "ON_ROUTE",
  "INCIDENT": "INCIDENT",
  "RETURNED": "RETURNED",
  "DELIVERED": "DELIVERED",
  "CANCELED": "CANCELED",
  "ON_HOLD": "ON_HOLD",
  "TRANSFER": "TRANSFER"
};

const ServiceVehicle = {
  "SCOOTER": "SCOOTER",
  "VAN": "VAN",
  "CAR": "CAR",
  "TRUCK": "TRUCK",
  "BIKE": "BIKE",
  "WALK": "WALK",
  "DRONE": "DRONE"
};

const ServiceType = {
  "PICKUP": "PICKUP",
  "DELIVERY": "DELIVERY",
  "PICKUP_DELIVERY": "PICKUP_DELIVERY",
  "TRANSFER": "TRANSFER",
  "RETURN": "RETURN"
};

const ServiceNotesType = {
  "COMMENT": "COMMENT",
  "ERROR": "ERROR"
};

const ServiceEvidenceType = {
  "TEXT": "TEXT",
  "IMAGE": "IMAGE"
};

const PickingMethod = {
  "BATCH": "BATCH",
  "WAVES": "WAVES"
};

const TagModel = {
  "SHIPPING_SERVICES": "SHIPPING_SERVICES",
  "ORDER": "ORDER",
  "WORKSHEET": "WORKSHEET",
  "BATCH": "BATCH",
  "PICKER": "PICKER",
  "PACKING": "PACKING"
};

const ServiceLabelType = {
  "PDF": "PDF",
  "BASE64": "BASE64",
  "TEXT": "TEXT",
  "ZPL": "ZPL"
};

const TrackingTimelineType = {
  "STATUS": "STATUS",
  "EVIDENCE": "EVIDENCE",
  "NOTE": "NOTE",
  "LABEL": "LABEL",
  "OTHER": "OTHER"
};

const WebhookType = {
  "INVOICING": "INVOICING",
  "ORDER_STATUS": "ORDER_STATUS",
  "WORKSHEET_STATUS": "WORKSHEET_STATUS",
  "RETURN_STATUS": "RETURN_STATUS",
  "SHIPPING_SERVICE_STATUS": "SHIPPING_SERVICE_STATUS"
};

const RestType = {
  "GET": "GET",
  "POST": "POST",
  "PUT": "PUT",
  "PATCH": "PATCH"
};

const PauseReasonType = {
  "TIMEOUT": "TIMEOUT",
  "ERROR": "ERROR",
  "CUSTOMER_CONTACT": "CUSTOMER_CONTACT",
  "CUSTOMER_REQUEST": "CUSTOMER_REQUEST",
  "INVENTORY_ISSUE": "INVENTORY_ISSUE"
};

const WorksheetSortField = {
  "CREATED_AT": "createdAt"
};

const AssignmentMethod = {
  "AUTOMATIC": "AUTOMATIC",
  "MANUAL": "MANUAL"
};

const WorksheetStatus = {
  "IN_PROGRESS": "IN_PROGRESS",
  "PENDING": "PENDING",
  "COLLECTED": "COLLECTED",
  "COMPLETED": "COMPLETED",
  "READY_FOR_PACKING": "READY_FOR_PACKING",
  "PACKING": "PACKING",
  "PACKED": "PACKED",
  "SORTING": "SORTING",
  "CANCELLED": "CANCELLED",
  "REJECTED": "REJECTED"
};

const ItemInWorksheetStatus = {
  "PENDING": "PENDING",
  "ASSIGNED": "ASSIGNED",
  "IN_PROGRESS": "IN_PROGRESS",
  "PENDING_TRANSFER": "PENDING_TRANSFER",
  "TRANSFERRED": "TRANSFERRED",
  "COMPLETED": "COMPLETED",
  "PAUSED": "PAUSED",
  "CANCELED": "CANCELED"
};

const { Account, Automation, Carrier, CarriersStoreConfig, CatalogHistory, Customer, Address, HistoricalOrder, HistoricalWorksheet, ItemTransfer, ItemV2, FulfillmentV2, OMSChanges, Order, ItemLogs, Package, PickingActions, Return, RMAShipping, RMAItems, RMAReplacement, RMARefund, RMAStoreCredit, RMASageItem, RMAItemResolution, RMATransaction, RMAHistory, RMASettings, RMAPolicies, RMAPoliciesRules, RMAPoliciesGroup, RMAForms, RMAPerks, RMAReturnReasons, RMASettingDeliveryMethod, RMALogistics, SalesChannel, Service, StoreConfig, Tags, TrackingLabel, TrackingSettings, TrackingTimeline, SalesSource, Webhook, Worksheet, Plan, AccountIsMarketplace, AccountSeller, VTEXCatalogCategory, VTEXCatalogCategory2, VTEXCatalogCategory3, VTEXUserslist, VTEXPaging, VTEXUser, Actions, AutomationQuery, CarrierIntegration, CarrierIntegrationEndpoints, CarrierIntegrationEndpoint, CarrierPricing, CarrierFormConfigurationField, CarrierFormConfigurationAuth, CarrierFormConfigurationFieldOption, CarrierStoreConfigSettings, DeliveryMethod, CarriersStoreConfigSearch, SearchCatalogResponse, CatalogLocation, Specification, Categories, ListCatalogResponse, CatalogPaginationResponse, CatalogMetaData, CatalogDimensions, CatalogBrand, ListCatalogProducts, CreateCatalogResponse, MessageChange, DescriptionChange, CLocation, CConfigurations, Affiliate, WorksheetSummary, CAppliedAutomation, CTimezone, ShippingPolicy, VtexOrders, ListOrders, Paging, Totals, AlternativeTotals, CurrencyFormatInfo, StorePreferencesData, Payments, UserPaymentInfo, InvoiceData, PackageAttachment, SelectedAddresses, PickupStoreInfo, DeliveryIds, LogisticsInfo, DeliveryWindowProxy, ShippingData, Fields, CustomApps, CustomData, Marketplace, Sellers, Picked, SellingPrices, PriceDefinition, ProductCategories, Brand, Dimension, Items, ClientProfileData, VtexOrder, ServiceResponse, PaginationResponse, DeliveryMethodAggregationsResponse, DeliveryDate, DeliveryMethodResponse, CarriersNameAggregationsResponse, CarriersDate, CarriersNameResponse, StatusAggregationsResponse, StatusDate, StatusResponse, AverageDistanceResponse, AverageDistanceDate, AverageRatingResponse, AverageRatingDate, AverageOrdersOnTimeResponse, AverageOrdersOnTimeDate, VerifyTeamResponse, Team, ListOrdersResponse, ListCarriersStoreConfigsResponse, ListWorksheetsResponse, ResponsePagination, PickerInsightsResponse, PickerInsightsData, ChartInsights, Histogram, HistogramResponse, TPeriod, TotalPicked, PaymentMethodListResponse, CommercialConditionsResponse, AvgTimePickerPerItem, AvgTimePerItemByHostname, AvgTimePerOrderProcess, ItemsHandledResponse, ItemsHandledData, ItemsHistogramResponse, ItemsHistogramData, HeatmapResponse, PickersData, CapacityResponse, OrdersBySeller, StoreOrdersResponse, StoreDetails, StoreDetailsResponse, StorePickersResponse, RMAServiceResponse, RMAValidatePoliciesResponse, RMAPoliciesApplying, SuggestedItemTransfer, TransferLocation, TransferSalesSource, TransferWarehouse, SuggestedWorksheet, SuggestedItem, SuggestedOrder, SummaryTimeResponse, ResponseClosePackage, WarningResponse, SearchOrdersResponse, PackedItemSuggest, Bin, PackedData, getWorksheetMetricsResponse, getWorksheetMetricsDateResponse, GetReturnsResponse, ListReturnsResponse, RMAPaginationResponse, RMAItemResponse, ConfirmResolutionResponse, RMAItemResolutionResponse, ConfirmDeliveryClientResponse, CouriersResponse, CourierDetail, CourierResponse, DataCourierResponse, DetailDataCourierResponse, CourierLocationResponse, CourierLocation, ResponseGetCourierTeams, ResponseGetCourierTasks, CourierTasksData, CourierTeamData, ResponseGetCourierDetail, alternateCourierDetail, courierDetailTeam, ResponseUpdateAgent, ResponseSendNotificationAgent, DataSendNotification, ResponseAddAgent, ResponseAssignCourier, ResponseAddAgentData, ResponseGetCustomFields, AppOptionalFields, UserTemplateFields, UserLayoutFields, ResponseCreateCustomTemplate, ItemsByTransfer, ItemNotes, PickingAudit, ReplacementAudit, ReplacementAuditInfo, PickingDetail, TransferAudit, PackingDetail, ItemTransferDetail, ItemReturns, ItemInvoice, ItemPickingOptions, Taxonomy, TaxonomyChild, TaxonomyChild2, Dimensions, ItemFacility, FacilityInfo, LogOpenSearch, OrderNotes, OrderStatsResponse, OrderAssignment, MarketingData, Invoice, Payment, Shipping, Tracking, ShippingInfo, Billing, Location, Schedule, ShippingInfoCarrier, Currrency, Item, ItemLog, InventoryData, OrderOpenSearch, WorksheetIdList, ItemOrderPackage, PackageLocation, ActionRegister, RMANotes, RMAResolutionTransaction, OrderRMA, CustomerRMA, PickupAddress, Store, DeliveryAddress, RMAItemInput, ItemAttachment, ItemShipping, RMAReplacementItem, RMASageItemImage, RMASageItemProductMatch, RMASageItemJustification, CreateRMAResolutionItemResponse, RMAServiceTracking, RMAShippingDeliverySlot, ResolutionCoupon, ResolutionGiftCard, IASettingRMA, RMASettingsIdFormat, RMASettingsStatus, RMASettingField, RMASettingTermAndCondition, DeliveryMethodPickup, DeliveryMethodDeliveryToStore, DeliveryMethodAvailableStores, DeliveryMethodDeliveryToAddress, DeliveryMethodAvailableAddress, DeliveryMethodAvailableAddressAddress, RMALogisticsHours, ItemsLocation, Field, CodeFormat, AvailablePackages, DynamicBarcodes, DynamicBarcode, Decimals, Prefix, ItemIdentifier, ChangesConfig, ChangeReasons, PrintingConfiguration, PrintingConfigurationDataPackages, PackagesProperties, PackageBarcodeConfiguration, OrderInformationConfiguration, ShippingInformationConfiguration, PickingInformationConfiguration, ItemsInformationConfiguration, PrintingConfigurationDataComanda, ComandaProperties, ComandaBarcodesConfiguration, CustomerInformationConfiguration, PrintingConfigurationDataDelivery, PrintingConfigurationMargin, PrintingConfigurationDimensions, ServiceRate, ServiceRateValue, ServiceOpenSearch, SearchServiceMetaData, SearchServiceCarrierMeteData, SearchServiceImageMeteData, SearchServiceType, ServiceEvidence, ServiceSender, ServiceReceiver, ServiceDeliveryWindow, ServiceAgent, PackageService, ServiceDimensionsPacking, ServiceItemsPackage, ServiceTimeline, ServiceNotes, ServiceCollection, ServiceTransferManagement, ServiceStoreConfig, CategoriesConfiguration, GeneralConfig, DeliveryWindow, Reason, StoreLocation, ContactInformation, Dock, Warehouse, WebhookVariables, Pauses, WorksheetNotes, OrderPriority, CustomerWorksheet, SubstituteItem, Category, PickerAssignment, ItemsByWorksheet, ReplacedItemsByWorksheet, ReplacedOrderSource, RejectedItemsByWorksheet, RejectedOrderSource, Reasons, PickedItemsByWorksheet, PickedOrderSource, ItemAssignment, OrderSource, WorksheetStatsResponse, OrderIdsOpenSearch, WorksheetOpenSearch } = initSchema(schema);

export {
  Account,
  Automation,
  Carrier,
  CarriersStoreConfig,
  CatalogHistory,
  Customer,
  Address,
  HistoricalOrder,
  HistoricalWorksheet,
  ItemTransfer,
  ItemV2,
  FulfillmentV2,
  OMSChanges,
  Order,
  ItemLogs,
  Package,
  PickingActions,
  Return,
  RMAShipping,
  RMAItems,
  RMAReplacement,
  RMARefund,
  RMAStoreCredit,
  RMASageItem,
  RMAItemResolution,
  RMATransaction,
  RMAHistory,
  RMASettings,
  RMAPolicies,
  RMAPoliciesRules,
  RMAPoliciesGroup,
  RMAForms,
  RMAPerks,
  RMAReturnReasons,
  RMASettingDeliveryMethod,
  RMALogistics,
  SalesChannel,
  Service,
  StoreConfig,
  Tags,
  TrackingLabel,
  TrackingSettings,
  TrackingTimeline,
  SalesSource,
  Webhook,
  Worksheet,
  ActionTypes,
  CombinatorType,
  CarrierFormConfigurationFieldType,
  CarrierFormConfigurationAuthType,
  CarrierPricingType,
  CarrierIntegrationMethod,
  CarrierIntegrationProtocol,
  CEnvironment,
  CAppliedAutomationStatus,
  InsightsTimeFilter,
  InsightsTimeRange,
  QueryTypeCatalog,
  TokenType,
  ItemTransferStatus,
  ItemNoteType,
  ItemType,
  ItemTransferDetailStatus,
  ItemStatus,
  Temperature,
  NotFoundOptions,
  UnitOfMeasure,
  OrderNoteType,
  OrderStatus,
  SortDirection,
  OrderSortField,
  VtexOrderStatus,
  ShippingType,
  DocType,
  PackageType,
  PackageStatus,
  PickingActionFrom,
  PickingActionStatus,
  PickingActionType,
  ItemRequestType,
  RmaTransactionStatus,
  RmaTransactionType,
  ReturnStatus,
  ItemReturnStatus,
  RmaShippingTypes,
  RmaShippingStatus,
  RmaItemsStatus,
  ItemResolutionType,
  ReasonTypeItem,
  TypeAttachment,
  RmaNotesTypes,
  RmaReplacementStatus,
  RmaRefundStatus,
  RmaStoreCreditReason,
  RmaStoreCreditType,
  RmaStoreCreditStatus,
  RmaSettingFieldType,
  RmaPerksType,
  RmaReturnReasonsType,
  RmaPoliciesType,
  ItemInformation,
  FieldTypeEnum,
  IdEnum,
  AccountTypes,
  ItemIdentifierModel,
  ServiceStatus,
  ServiceVehicle,
  ServiceType,
  ServiceNotesType,
  ServiceEvidenceType,
  PickingMethod,
  TagModel,
  ServiceLabelType,
  TrackingTimelineType,
  WebhookType,
  RestType,
  PauseReasonType,
  WorksheetSortField,
  AssignmentMethod,
  WorksheetStatus,
  ItemInWorksheetStatus,
  Plan,
  AccountIsMarketplace,
  AccountSeller,
  VTEXCatalogCategory,
  VTEXCatalogCategory2,
  VTEXCatalogCategory3,
  VTEXUserslist,
  VTEXPaging,
  VTEXUser,
  Actions,
  AutomationQuery,
  CarrierIntegration,
  CarrierIntegrationEndpoints,
  CarrierIntegrationEndpoint,
  CarrierPricing,
  CarrierFormConfigurationField,
  CarrierFormConfigurationAuth,
  CarrierFormConfigurationFieldOption,
  CarrierStoreConfigSettings,
  DeliveryMethod,
  CarriersStoreConfigSearch,
  SearchCatalogResponse,
  CatalogLocation,
  Specification,
  Categories,
  ListCatalogResponse,
  CatalogPaginationResponse,
  CatalogMetaData,
  CatalogDimensions,
  CatalogBrand,
  ListCatalogProducts,
  CreateCatalogResponse,
  MessageChange,
  DescriptionChange,
  CLocation,
  CConfigurations,
  Affiliate,
  WorksheetSummary,
  CAppliedAutomation,
  CTimezone,
  ShippingPolicy,
  VtexOrders,
  ListOrders,
  Paging,
  Totals,
  AlternativeTotals,
  CurrencyFormatInfo,
  StorePreferencesData,
  Payments,
  UserPaymentInfo,
  InvoiceData,
  PackageAttachment,
  SelectedAddresses,
  PickupStoreInfo,
  DeliveryIds,
  LogisticsInfo,
  DeliveryWindowProxy,
  ShippingData,
  Fields,
  CustomApps,
  CustomData,
  Marketplace,
  Sellers,
  Picked,
  SellingPrices,
  PriceDefinition,
  ProductCategories,
  Brand,
  Dimension,
  Items,
  ClientProfileData,
  VtexOrder,
  ServiceResponse,
  PaginationResponse,
  DeliveryMethodAggregationsResponse,
  DeliveryDate,
  DeliveryMethodResponse,
  CarriersNameAggregationsResponse,
  CarriersDate,
  CarriersNameResponse,
  StatusAggregationsResponse,
  StatusDate,
  StatusResponse,
  AverageDistanceResponse,
  AverageDistanceDate,
  AverageRatingResponse,
  AverageRatingDate,
  AverageOrdersOnTimeResponse,
  AverageOrdersOnTimeDate,
  VerifyTeamResponse,
  Team,
  ListOrdersResponse,
  ListCarriersStoreConfigsResponse,
  ListWorksheetsResponse,
  ResponsePagination,
  PickerInsightsResponse,
  PickerInsightsData,
  ChartInsights,
  Histogram,
  HistogramResponse,
  TPeriod,
  TotalPicked,
  PaymentMethodListResponse,
  CommercialConditionsResponse,
  AvgTimePickerPerItem,
  AvgTimePerItemByHostname,
  AvgTimePerOrderProcess,
  ItemsHandledResponse,
  ItemsHandledData,
  ItemsHistogramResponse,
  ItemsHistogramData,
  HeatmapResponse,
  PickersData,
  CapacityResponse,
  OrdersBySeller,
  StoreOrdersResponse,
  StoreDetails,
  StoreDetailsResponse,
  StorePickersResponse,
  RMAServiceResponse,
  RMAValidatePoliciesResponse,
  RMAPoliciesApplying,
  SuggestedItemTransfer,
  TransferLocation,
  TransferSalesSource,
  TransferWarehouse,
  SuggestedWorksheet,
  SuggestedItem,
  SuggestedOrder,
  SummaryTimeResponse,
  ResponseClosePackage,
  WarningResponse,
  SearchOrdersResponse,
  PackedItemSuggest,
  Bin,
  PackedData,
  getWorksheetMetricsResponse,
  getWorksheetMetricsDateResponse,
  GetReturnsResponse,
  ListReturnsResponse,
  RMAPaginationResponse,
  RMAItemResponse,
  ConfirmResolutionResponse,
  RMAItemResolutionResponse,
  ConfirmDeliveryClientResponse,
  CouriersResponse,
  CourierDetail,
  CourierResponse,
  DataCourierResponse,
  DetailDataCourierResponse,
  CourierLocationResponse,
  CourierLocation,
  ResponseGetCourierTeams,
  ResponseGetCourierTasks,
  CourierTasksData,
  CourierTeamData,
  ResponseGetCourierDetail,
  alternateCourierDetail,
  courierDetailTeam,
  ResponseUpdateAgent,
  ResponseSendNotificationAgent,
  DataSendNotification,
  ResponseAddAgent,
  ResponseAssignCourier,
  ResponseAddAgentData,
  ResponseGetCustomFields,
  AppOptionalFields,
  UserTemplateFields,
  UserLayoutFields,
  ResponseCreateCustomTemplate,
  ItemsByTransfer,
  ItemNotes,
  PickingAudit,
  ReplacementAudit,
  ReplacementAuditInfo,
  PickingDetail,
  TransferAudit,
  PackingDetail,
  ItemTransferDetail,
  ItemReturns,
  ItemInvoice,
  ItemPickingOptions,
  Taxonomy,
  TaxonomyChild,
  TaxonomyChild2,
  Dimensions,
  ItemFacility,
  FacilityInfo,
  LogOpenSearch,
  OrderNotes,
  OrderStatsResponse,
  OrderAssignment,
  MarketingData,
  Invoice,
  Payment,
  Shipping,
  Tracking,
  ShippingInfo,
  Billing,
  Location,
  Schedule,
  ShippingInfoCarrier,
  Currrency,
  Item,
  ItemLog,
  InventoryData,
  OrderOpenSearch,
  WorksheetIdList,
  ItemOrderPackage,
  PackageLocation,
  ActionRegister,
  RMANotes,
  RMAResolutionTransaction,
  OrderRMA,
  CustomerRMA,
  PickupAddress,
  Store,
  DeliveryAddress,
  RMAItemInput,
  ItemAttachment,
  ItemShipping,
  RMAReplacementItem,
  RMASageItemImage,
  RMASageItemProductMatch,
  RMASageItemJustification,
  CreateRMAResolutionItemResponse,
  RMAServiceTracking,
  RMAShippingDeliverySlot,
  ResolutionCoupon,
  ResolutionGiftCard,
  IASettingRMA,
  RMASettingsIdFormat,
  RMASettingsStatus,
  RMASettingField,
  RMASettingTermAndCondition,
  DeliveryMethodPickup,
  DeliveryMethodDeliveryToStore,
  DeliveryMethodAvailableStores,
  DeliveryMethodDeliveryToAddress,
  DeliveryMethodAvailableAddress,
  DeliveryMethodAvailableAddressAddress,
  RMALogisticsHours,
  ItemsLocation,
  Field,
  CodeFormat,
  AvailablePackages,
  DynamicBarcodes,
  DynamicBarcode,
  Decimals,
  Prefix,
  ItemIdentifier,
  ChangesConfig,
  ChangeReasons,
  PrintingConfiguration,
  PrintingConfigurationDataPackages,
  PackagesProperties,
  PackageBarcodeConfiguration,
  OrderInformationConfiguration,
  ShippingInformationConfiguration,
  PickingInformationConfiguration,
  ItemsInformationConfiguration,
  PrintingConfigurationDataComanda,
  ComandaProperties,
  ComandaBarcodesConfiguration,
  CustomerInformationConfiguration,
  PrintingConfigurationDataDelivery,
  PrintingConfigurationMargin,
  PrintingConfigurationDimensions,
  ServiceRate,
  ServiceRateValue,
  ServiceOpenSearch,
  SearchServiceMetaData,
  SearchServiceCarrierMeteData,
  SearchServiceImageMeteData,
  SearchServiceType,
  ServiceEvidence,
  ServiceSender,
  ServiceReceiver,
  ServiceDeliveryWindow,
  ServiceAgent,
  PackageService,
  ServiceDimensionsPacking,
  ServiceItemsPackage,
  ServiceTimeline,
  ServiceNotes,
  ServiceCollection,
  ServiceTransferManagement,
  ServiceStoreConfig,
  CategoriesConfiguration,
  GeneralConfig,
  DeliveryWindow,
  Reason,
  StoreLocation,
  ContactInformation,
  Dock,
  Warehouse,
  WebhookVariables,
  Pauses,
  WorksheetNotes,
  OrderPriority,
  CustomerWorksheet,
  SubstituteItem,
  Category,
  PickerAssignment,
  ItemsByWorksheet,
  ReplacedItemsByWorksheet,
  ReplacedOrderSource,
  RejectedItemsByWorksheet,
  RejectedOrderSource,
  Reasons,
  PickedItemsByWorksheet,
  PickedOrderSource,
  ItemAssignment,
  OrderSource,
  WorksheetStatsResponse,
  OrderIdsOpenSearch,
  WorksheetOpenSearch
};