import { ModelInit, MutableModel, __modelMeta__, OptionallyManagedIdentifier, ManagedIdentifier, CustomIdentifier, CompositeIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum ActionTypes {
  ADD = "ADD",
  DELETE = "DELETE",
  SET = "SET"
}

export enum CombinatorType {
  AND = "and",
  OR = "or"
}

export enum CarrierFormConfigurationFieldType {
  TEXT = "TEXT",
  NUMBER = "NUMBER",
  SELECT = "SELECT",
  PASSWORD = "PASSWORD",
  RADIO = "RADIO",
  CHECKBOX = "CHECKBOX"
}

export enum CarrierFormConfigurationAuthType {
  QUERY_STRING = "QUERY_STRING",
  HEADER = "HEADER"
}

export enum CarrierPricingType {
  FREE = "FREE",
  TRANSACTIONS_FEE = "TRANSACTIONS_FEE",
  MONTHLY_FEE = "MONTHLY_FEE"
}

export enum CarrierIntegrationMethod {
  POST = "POST",
  PATCH = "PATCH",
  PUT = "PUT",
  GET = "GET"
}

export enum CarrierIntegrationProtocol {
  HTTP = "HTTP",
  HTTPS = "HTTPS"
}

export enum CEnvironment {
  DEV = "DEV",
  PROD = "PROD"
}

export enum CAppliedAutomationStatus {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  WARNING = "WARNING"
}

export enum InsightsTimeFilter {
  LAST_DAY = "last_day",
  LAST_SEVEN_DAYS = "last_seven_days",
  LAST_FIFTEEN_DAYS = "last_fifteen_days",
  LAST_MONTH = "last_month",
  LAST_SIX_MONTHS = "last_six_months"
}

export enum InsightsTimeRange {
  ACTUAL_DAY = "ACTUAL_DAY",
  LAST_DAY = "LAST_DAY",
  LAST_SEVEN_DAYS = "LAST_SEVEN_DAYS",
  LAST_MONTH = "LAST_MONTH",
  LAST_THREE_MONTHS = "LAST_THREE_MONTHS",
  LAST_SIX_MONTHS = "LAST_SIX_MONTHS"
}

export enum QueryTypeCatalog {
  SKU = "SKU",
  REFID = "REFID"
}

export enum TokenType {
  NOTIFICATION = "NOTIFICATION",
  REAL_TIME = "REAL_TIME"
}

export enum ItemTransferStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
  COMPLETED = "COMPLETED",
  DELIVERED = "DELIVERED"
}

export enum ItemNoteType {
  CLIENT = "CLIENT",
  ADMIN = "ADMIN",
  PICKER = "PICKER"
}

export enum ItemType {
  ORDER = "ORDER",
  RMA = "RMA"
}

export enum ItemTransferDetailStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
  ASSIGNED = "ASSIGNED"
}

export enum ItemStatus {
  PENDING = "PENDING",
  ASSIGNED = "ASSIGNED",
  COLLECTED = "COLLECTED",
  REPLACED = "REPLACED",
  REJECTED = "REJECTED",
  REFUNDED = "REFUNDED",
  RETURNED = "RETURNED",
  CANCELLED = "CANCELLED",
  PENDING_TRANSFERRED = "PENDING_TRANSFERRED",
  TRANSFERRED = "TRANSFERRED",
  COMPLETED = "COMPLETED",
  READY_FOR_PACKING = "READY_FOR_PACKING",
  READY_FOR_SHIPPING = "READY_FOR_SHIPPING",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  PACKED = "PACKED",
  PAUSED = "PAUSED"
}

export enum Temperature {
  FROZEN = "FROZEN",
  COLD = "COLD",
  AMBIENT = "AMBIENT"
}

export enum NotFoundOptions {
  REPLACE = "REPLACE",
  SUGGEST = "SUGGEST",
  REFUND = "REFUND"
}

export enum UnitOfMeasure {
  KILOGRAMS = "KILOGRAMS",
  GRAMS = "GRAMS",
  POUNDS = "POUNDS",
  UNITS = "UNITS",
  OUNCES = "OUNCES",
  MILLIGRAMS = "MILLIGRAMS"
}

export enum OrderNoteType {
  CUSTOMER = "CUSTOMER",
  STORE = "STORE"
}

export enum OrderStatus {
  READY_FOR_HANDLING = "READY_FOR_HANDLING",
  READY_FOR_PICKING = "READY_FOR_PICKING",
  PICKING = "PICKING",
  PARTIAL_COLLECTED = "PARTIAL_COLLECTED",
  COLLECTED = "COLLECTED",
  READY_FOR_PACKING = "READY_FOR_PACKING",
  PACKING = "PACKING",
  PARTIAL_PACKED = "PARTIAL_PACKED",
  PREPARING_SHIPPING = "PREPARING_SHIPPING",
  READY_FOR_SHIPPING = "READY_FOR_SHIPPING",
  PARTIAL_SHIPPED = "PARTIAL_SHIPPED",
  SHIPPING = "SHIPPING",
  DELIVERED = "DELIVERED",
  REJECTED = "REJECTED",
  CANCELED = "CANCELED",
  PAUSED = "PAUSED"
}

export enum SortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export enum OrderSortField {
  SHIPPING_ESTIMATED_DATE_MIN = "shippingEstimatedDateMin",
  ORDER_DATE = "orderDate",
  INVOICE_DATE = "invoiceDate"
}

export enum VtexOrderStatus {
  HANDLING = "HANDLING",
  INVOICED = "INVOICED",
  PAYMENT_APPROVED = "PAYMENT_APPROVED",
  READY_FOR_HANDLING = "READY_FOR_HANDLING",
  REPLACED = "REPLACED",
  WAITING_FOR_SELLER_DECISION = "WAITING_FOR_SELLER_DECISION"
}

export enum ShippingType {
  SHIP_FROM_STORE = "SHIP_FROM_STORE",
  PICKUP_IN_STORE = "PICKUP_IN_STORE",
  DRIVE_THRU = "DRIVE_THRU"
}

export enum DocType {
  POS = "POS",
  WIDE = "WIDE"
}

export enum PackageType {
  ORDER = "ORDER",
  RMA = "RMA"
}

export enum PackageStatus {
  PENDING = "PENDING",
  READY_FOR_SHIPPING = "READY_FOR_SHIPPING",
  PACKED = "PACKED",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  RETURNED = "RETURNED"
}

export enum PickingActionFrom {
  ADMIN = "ADMIN",
  MOBILE = "MOBILE"
}

export enum PickingActionStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED"
}

export enum PickingActionType {
  REPLACE = "REPLACE",
  REJECT = "REJECT",
  ADD_ITEM = "ADD_ITEM",
  ADD_QUANTITY = "ADD_QUANTITY"
}

export enum ItemRequestType {
  RETURN = "RETURN",
  EXCHANGE = "EXCHANGE",
  WARRANTY = "WARRANTY"
}

export enum RmaTransactionStatus {
  PENDING = "PENDING",
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
  REJECTED = "REJECTED",
  EXPIRED = "EXPIRED"
}

export enum RmaTransactionType {
  GIFT_CARD = "GIFT_CARD",
  VOUCHER = "VOUCHER",
  COUPON = "COUPON",
  REFUND = "REFUND",
  PAYMENT = "PAYMENT",
  OTHER = "OTHER"
}

export enum ReturnStatus {
  NEW = "NEW",
  HANDLING = "HANDLING",
  COMPLETED = "COMPLETED",
  SHIPPING = "SHIPPING",
  CANCELED = "CANCELED",
  REFUNDED = "REFUNDED",
  PENDING = "PENDING"
}

export enum ItemReturnStatus {
  REQUESTED = "REQUESTED",
  RECEIVED = "RECEIVED",
  MISSING = "MISSING",
  DAMAGED = "DAMAGED"
}

export enum RmaShippingTypes {
  PICKUP = "PICKUP",
  DELIVERY_TO_STORE = "DELIVERY_TO_STORE",
  DELIVERY_TO_ADDRESS = "DELIVERY_TO_ADDRESS"
}

export enum RmaShippingStatus {
  PENDING = "PENDING",
  PICKED_UP = "PICKED_UP",
  DELIVERED = "DELIVERED"
}

export enum RmaItemsStatus {
  NEW = "NEW",
  REQUESTED = "REQUESTED",
  RECEIVED = "RECEIVED",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
  MISSING = "MISSING",
  DAMAGED = "DAMAGED",
  REFUNDED = "REFUNDED"
}

export enum ItemResolutionType {
  REPLACEMENT = "REPLACEMENT",
  REFUND = "REFUND",
  STORE_CREDIT = "STORE_CREDIT"
}

export enum ReasonTypeItem {
  DAMAGED = "DAMAGED",
  WRONG = "WRONG",
  NOT_NEEDED = "NOT_NEEDED",
  COLOR = "COLOR",
  SIZE = "SIZE",
  OTHER = "OTHER"
}

export enum TypeAttachment {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  AUDIO = "AUDIO",
  FILE = "FILE"
}

export enum RmaNotesTypes {
  INTERNAL = "INTERNAL",
  CUSTOMER = "CUSTOMER"
}

export enum RmaReplacementStatus {
  NEW = "NEW",
  REQUESTED = "REQUESTED",
  RECEIVED = "RECEIVED",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
  MISSING = "MISSING",
  DAMAGED = "DAMAGED"
}

export enum RmaRefundStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED"
}

export enum RmaStoreCreditReason {
  BONUS = "BONUS",
  REFUND = "REFUND",
  REPLACEMENT = "REPLACEMENT",
  OTHER = "OTHER"
}

export enum RmaStoreCreditType {
  GIFT_CARD = "GIFT_CARD",
  VOUCHER = "VOUCHER",
  COUPON = "COUPON"
}

export enum RmaStoreCreditStatus {
  ACTIVE = "ACTIVE",
  USED = "USED",
  EXPIRED = "EXPIRED"
}

export enum RmaSettingFieldType {
  TEXT = "TEXT",
  TEXTAREA = "TEXTAREA",
  SELECT = "SELECT",
  RADIO = "RADIO",
  CHECKBOX = "CHECKBOX",
  FILE = "FILE",
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  AUDIO = "AUDIO"
}

export enum RmaPerksType {
  STORE_CREDIT = "STORE_CREDIT",
  FREE_SHIPPING = "FREE_SHIPPING",
  DISCOUNT = "DISCOUNT",
  OTHER = "OTHER"
}

export enum RmaReturnReasonsType {
  DAMAGED = "DAMAGED",
  WRONG = "WRONG",
  NOT_NEEDED = "NOT_NEEDED",
  COLOR = "COLOR",
  SIZE = "SIZE",
  OTHER = "OTHER"
}

export enum RmaPoliciesType {
  WARRANTY = "WARRANTY",
  RETURN = "RETURN",
  EXCHANGE = "EXCHANGE"
}

export enum ItemInformation {
  EAN = "EAN",
  CATEGORY = "CATEGORY",
  BRAND = "BRAND",
  REFID = "REFID",
  SKU = "SKU",
  NAME = "NAME",
  SELLING_PRICE = "SELLING_PRICE",
  ITEM_ID = "ITEM_ID"
}

export enum FieldTypeEnum {
  DEFAULT = "DEFAULT"
}

export enum IdEnum {
  ZONE = "ZONE",
  SECTION = "SECTION",
  AISLE = "AISLE",
  SHELF = "SHELF",
  BIN = "BIN"
}

export enum AccountTypes {
  ECOMMERCE = "ECOMMERCE",
  CALL_CENTER = "CALL_CENTER",
  MOBILE_APP = "MOBILE_APP",
  MARKETPLACE = "MARKETPLACE",
  OFFLINE = "OFFLINE",
  POS = "POS"
}

export enum ItemIdentifierModel {
  REFID = "REFID",
  SKU = "SKU"
}

export enum ServiceStatus {
  CREATED = "CREATED",
  PENDING = "PENDING",
  ASSIGNED = "ASSIGNED",
  PICKED = "PICKED",
  ON_ROUTE = "ON_ROUTE",
  INCIDENT = "INCIDENT",
  RETURNED = "RETURNED",
  DELIVERED = "DELIVERED",
  CANCELED = "CANCELED",
  ON_HOLD = "ON_HOLD",
  TRANSFER = "TRANSFER"
}

export enum ServiceVehicle {
  SCOOTER = "SCOOTER",
  VAN = "VAN",
  CAR = "CAR",
  TRUCK = "TRUCK",
  BIKE = "BIKE",
  WALK = "WALK",
  DRONE = "DRONE"
}

export enum ServiceType {
  PICKUP = "PICKUP",
  DELIVERY = "DELIVERY",
  PICKUP_DELIVERY = "PICKUP_DELIVERY",
  TRANSFER = "TRANSFER",
  RETURN = "RETURN"
}

export enum ServiceNotesType {
  COMMENT = "COMMENT",
  ERROR = "ERROR"
}

export enum ServiceEvidenceType {
  TEXT = "TEXT",
  IMAGE = "IMAGE"
}

export enum PickingMethod {
  BATCH = "BATCH",
  WAVES = "WAVES"
}

export enum TagModel {
  SHIPPING_SERVICES = "SHIPPING_SERVICES",
  ORDER = "ORDER",
  WORKSHEET = "WORKSHEET",
  BATCH = "BATCH",
  PICKER = "PICKER",
  PACKING = "PACKING"
}

export enum ServiceLabelType {
  PDF = "PDF",
  BASE64 = "BASE64",
  TEXT = "TEXT",
  ZPL = "ZPL"
}

export enum TrackingTimelineType {
  STATUS = "STATUS",
  EVIDENCE = "EVIDENCE",
  NOTE = "NOTE",
  LABEL = "LABEL",
  OTHER = "OTHER"
}

export enum WebhookType {
  INVOICING = "INVOICING",
  ORDER_STATUS = "ORDER_STATUS",
  WORKSHEET_STATUS = "WORKSHEET_STATUS",
  RETURN_STATUS = "RETURN_STATUS",
  SHIPPING_SERVICE_STATUS = "SHIPPING_SERVICE_STATUS"
}

export enum RestType {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH"
}

export enum PauseReasonType {
  TIMEOUT = "TIMEOUT",
  ERROR = "ERROR",
  CUSTOMER_CONTACT = "CUSTOMER_CONTACT",
  CUSTOMER_REQUEST = "CUSTOMER_REQUEST",
  INVENTORY_ISSUE = "INVENTORY_ISSUE"
}

export enum WorksheetSortField {
  CREATED_AT = "createdAt"
}

export enum AssignmentMethod {
  AUTOMATIC = "AUTOMATIC",
  MANUAL = "MANUAL"
}

export enum WorksheetStatus {
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
  COLLECTED = "COLLECTED",
  COMPLETED = "COMPLETED",
  READY_FOR_PACKING = "READY_FOR_PACKING",
  PACKING = "PACKING",
  PACKED = "PACKED",
  SORTING = "SORTING",
  CANCELLED = "CANCELLED",
  REJECTED = "REJECTED"
}

export enum ItemInWorksheetStatus {
  PENDING = "PENDING",
  ASSIGNED = "ASSIGNED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING_TRANSFER = "PENDING_TRANSFER",
  TRANSFERRED = "TRANSFERRED",
  COMPLETED = "COMPLETED",
  PAUSED = "PAUSED",
  CANCELED = "CANCELED"
}

type EagerPlan = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly ppo?: number | null;
  readonly appo?: number | null;
  readonly orders?: number | null;
  readonly maxOrders?: number | null;
  readonly initialDate?: string | null;
  readonly validUntil?: string | null;
  readonly active?: boolean | null;
  readonly metadata?: string | null;
}

type LazyPlan = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly ppo?: number | null;
  readonly appo?: number | null;
  readonly orders?: number | null;
  readonly maxOrders?: number | null;
  readonly initialDate?: string | null;
  readonly validUntil?: string | null;
  readonly active?: boolean | null;
  readonly metadata?: string | null;
}

export declare type Plan = LazyLoading extends LazyLoadingDisabled ? EagerPlan : LazyPlan

export declare const Plan: (new (init: ModelInit<Plan>) => Plan)

type EagerAccountIsMarketplace = {
  readonly isParent?: boolean | null;
  readonly parent?: string | null;
}

type LazyAccountIsMarketplace = {
  readonly isParent?: boolean | null;
  readonly parent?: string | null;
}

export declare type AccountIsMarketplace = LazyLoading extends LazyLoadingDisabled ? EagerAccountIsMarketplace : LazyAccountIsMarketplace

export declare const AccountIsMarketplace: (new (init: ModelInit<AccountIsMarketplace>) => AccountIsMarketplace)

type EagerAccountSeller = {
  readonly UrlLogo?: string | null;
  readonly SellerId?: string | null;
  readonly Name?: string | null;
  readonly Email?: string | null;
  readonly IsActive?: boolean | null;
  readonly IsBetterScope?: boolean | null;
  readonly SellerType?: number | null;
}

type LazyAccountSeller = {
  readonly UrlLogo?: string | null;
  readonly SellerId?: string | null;
  readonly Name?: string | null;
  readonly Email?: string | null;
  readonly IsActive?: boolean | null;
  readonly IsBetterScope?: boolean | null;
  readonly SellerType?: number | null;
}

export declare type AccountSeller = LazyLoading extends LazyLoadingDisabled ? EagerAccountSeller : LazyAccountSeller

export declare const AccountSeller: (new (init: ModelInit<AccountSeller>) => AccountSeller)

type EagerVTEXCatalogCategory = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly hasChildren?: boolean | null;
  readonly children?: (VTEXCatalogCategory2 | null)[] | null;
  readonly Title?: string | null;
  readonly MetaTagDescription?: string | null;
}

type LazyVTEXCatalogCategory = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly hasChildren?: boolean | null;
  readonly children?: (VTEXCatalogCategory2 | null)[] | null;
  readonly Title?: string | null;
  readonly MetaTagDescription?: string | null;
}

export declare type VTEXCatalogCategory = LazyLoading extends LazyLoadingDisabled ? EagerVTEXCatalogCategory : LazyVTEXCatalogCategory

export declare const VTEXCatalogCategory: (new (init: ModelInit<VTEXCatalogCategory>) => VTEXCatalogCategory)

type EagerVTEXCatalogCategory2 = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly hasChildren?: boolean | null;
  readonly children?: (VTEXCatalogCategory3 | null)[] | null;
  readonly Title?: string | null;
  readonly MetaTagDescription?: string | null;
}

type LazyVTEXCatalogCategory2 = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly hasChildren?: boolean | null;
  readonly children?: (VTEXCatalogCategory3 | null)[] | null;
  readonly Title?: string | null;
  readonly MetaTagDescription?: string | null;
}

export declare type VTEXCatalogCategory2 = LazyLoading extends LazyLoadingDisabled ? EagerVTEXCatalogCategory2 : LazyVTEXCatalogCategory2

export declare const VTEXCatalogCategory2: (new (init: ModelInit<VTEXCatalogCategory2>) => VTEXCatalogCategory2)

type EagerVTEXCatalogCategory3 = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly hasChildren?: boolean | null;
  readonly Title?: string | null;
  readonly MetaTagDescription?: string | null;
}

type LazyVTEXCatalogCategory3 = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly hasChildren?: boolean | null;
  readonly Title?: string | null;
  readonly MetaTagDescription?: string | null;
}

export declare type VTEXCatalogCategory3 = LazyLoading extends LazyLoadingDisabled ? EagerVTEXCatalogCategory3 : LazyVTEXCatalogCategory3

export declare const VTEXCatalogCategory3: (new (init: ModelInit<VTEXCatalogCategory3>) => VTEXCatalogCategory3)

type EagerVTEXUserslist = {
  readonly items?: (VTEXUser | null)[] | null;
  readonly paging?: VTEXPaging | null;
}

type LazyVTEXUserslist = {
  readonly items?: (VTEXUser | null)[] | null;
  readonly paging?: VTEXPaging | null;
}

export declare type VTEXUserslist = LazyLoading extends LazyLoadingDisabled ? EagerVTEXUserslist : LazyVTEXUserslist

export declare const VTEXUserslist: (new (init: ModelInit<VTEXUserslist>) => VTEXUserslist)

type EagerVTEXPaging = {
  readonly page?: number | null;
  readonly perPage?: number | null;
  readonly total?: number | null;
  readonly pages?: number | null;
}

type LazyVTEXPaging = {
  readonly page?: number | null;
  readonly perPage?: number | null;
  readonly total?: number | null;
  readonly pages?: number | null;
}

export declare type VTEXPaging = LazyLoading extends LazyLoadingDisabled ? EagerVTEXPaging : LazyVTEXPaging

export declare const VTEXPaging: (new (init: ModelInit<VTEXPaging>) => VTEXPaging)

type EagerVTEXUser = {
  readonly id?: string | null;
  readonly email?: string | null;
  readonly isAdmin?: boolean | null;
  readonly isReliable?: boolean | null;
  readonly isBlocked?: boolean | null;
  readonly roles?: (string | null)[] | null;
  readonly accountNames?: (string | null)[] | null;
  readonly name?: string | null;
}

type LazyVTEXUser = {
  readonly id?: string | null;
  readonly email?: string | null;
  readonly isAdmin?: boolean | null;
  readonly isReliable?: boolean | null;
  readonly isBlocked?: boolean | null;
  readonly roles?: (string | null)[] | null;
  readonly accountNames?: (string | null)[] | null;
  readonly name?: string | null;
}

export declare type VTEXUser = LazyLoading extends LazyLoadingDisabled ? EagerVTEXUser : LazyVTEXUser

export declare const VTEXUser: (new (init: ModelInit<VTEXUser>) => VTEXUser)

type EagerActions = {
  readonly action?: ActionTypes | keyof typeof ActionTypes | null;
  readonly field?: string | null;
  readonly value?: string | null;
  readonly model?: string | null;
  readonly metadata?: string | null;
}

type LazyActions = {
  readonly action?: ActionTypes | keyof typeof ActionTypes | null;
  readonly field?: string | null;
  readonly value?: string | null;
  readonly model?: string | null;
  readonly metadata?: string | null;
}

export declare type Actions = LazyLoading extends LazyLoadingDisabled ? EagerActions : LazyActions

export declare const Actions: (new (init: ModelInit<Actions>) => Actions)

type EagerAutomationQuery = {
  readonly not?: boolean | null;
  readonly field?: string | null;
  readonly value?: string | null;
  readonly operator?: string | null;
  readonly combinator?: CombinatorType | keyof typeof CombinatorType | null;
  readonly rules?: (string | null)[] | null;
}

type LazyAutomationQuery = {
  readonly not?: boolean | null;
  readonly field?: string | null;
  readonly value?: string | null;
  readonly operator?: string | null;
  readonly combinator?: CombinatorType | keyof typeof CombinatorType | null;
  readonly rules?: (string | null)[] | null;
}

export declare type AutomationQuery = LazyLoading extends LazyLoadingDisabled ? EagerAutomationQuery : LazyAutomationQuery

export declare const AutomationQuery: (new (init: ModelInit<AutomationQuery>) => AutomationQuery)

type EagerCarrierIntegration = {
  readonly dev?: CarrierIntegrationEndpoints | null;
  readonly prod?: CarrierIntegrationEndpoints | null;
}

type LazyCarrierIntegration = {
  readonly dev?: CarrierIntegrationEndpoints | null;
  readonly prod?: CarrierIntegrationEndpoints | null;
}

export declare type CarrierIntegration = LazyLoading extends LazyLoadingDisabled ? EagerCarrierIntegration : LazyCarrierIntegration

export declare const CarrierIntegration: (new (init: ModelInit<CarrierIntegration>) => CarrierIntegration)

type EagerCarrierIntegrationEndpoints = {
  readonly endpoint?: CarrierIntegrationEndpoint | null;
  readonly cancelEndpoint?: CarrierIntegrationEndpoint | null;
  readonly pauseEndpoint?: CarrierIntegrationEndpoint | null;
  readonly rateEndpoint?: CarrierIntegrationEndpoint | null;
  readonly carriersEndpoint?: CarrierIntegrationEndpoint | null;
  readonly webhookEndpoint?: string | null;
}

type LazyCarrierIntegrationEndpoints = {
  readonly endpoint?: CarrierIntegrationEndpoint | null;
  readonly cancelEndpoint?: CarrierIntegrationEndpoint | null;
  readonly pauseEndpoint?: CarrierIntegrationEndpoint | null;
  readonly rateEndpoint?: CarrierIntegrationEndpoint | null;
  readonly carriersEndpoint?: CarrierIntegrationEndpoint | null;
  readonly webhookEndpoint?: string | null;
}

export declare type CarrierIntegrationEndpoints = LazyLoading extends LazyLoadingDisabled ? EagerCarrierIntegrationEndpoints : LazyCarrierIntegrationEndpoints

export declare const CarrierIntegrationEndpoints: (new (init: ModelInit<CarrierIntegrationEndpoints>) => CarrierIntegrationEndpoints)

type EagerCarrierIntegrationEndpoint = {
  readonly url: string;
  readonly method: CarrierIntegrationMethod | keyof typeof CarrierIntegrationMethod;
  readonly protocol: CarrierIntegrationProtocol | keyof typeof CarrierIntegrationProtocol;
  readonly variables?: (CarrierFormConfigurationAuth | null)[] | null;
}

type LazyCarrierIntegrationEndpoint = {
  readonly url: string;
  readonly method: CarrierIntegrationMethod | keyof typeof CarrierIntegrationMethod;
  readonly protocol: CarrierIntegrationProtocol | keyof typeof CarrierIntegrationProtocol;
  readonly variables?: (CarrierFormConfigurationAuth | null)[] | null;
}

export declare type CarrierIntegrationEndpoint = LazyLoading extends LazyLoadingDisabled ? EagerCarrierIntegrationEndpoint : LazyCarrierIntegrationEndpoint

export declare const CarrierIntegrationEndpoint: (new (init: ModelInit<CarrierIntegrationEndpoint>) => CarrierIntegrationEndpoint)

type EagerCarrierPricing = {
  readonly type?: CarrierPricingType | keyof typeof CarrierPricingType | null;
  readonly value?: number | null;
}

type LazyCarrierPricing = {
  readonly type?: CarrierPricingType | keyof typeof CarrierPricingType | null;
  readonly value?: number | null;
}

export declare type CarrierPricing = LazyLoading extends LazyLoadingDisabled ? EagerCarrierPricing : LazyCarrierPricing

export declare const CarrierPricing: (new (init: ModelInit<CarrierPricing>) => CarrierPricing)

type EagerCarrierFormConfigurationField = {
  readonly key: string;
  readonly label: string;
  readonly type: CarrierFormConfigurationFieldType | keyof typeof CarrierFormConfigurationFieldType;
  readonly required: boolean;
  readonly description?: string | null;
  readonly value?: string | null;
  readonly min?: string | null;
  readonly max?: string | null;
  readonly options?: (CarrierFormConfigurationFieldOption | null)[] | null;
  readonly priority?: number | null;
}

type LazyCarrierFormConfigurationField = {
  readonly key: string;
  readonly label: string;
  readonly type: CarrierFormConfigurationFieldType | keyof typeof CarrierFormConfigurationFieldType;
  readonly required: boolean;
  readonly description?: string | null;
  readonly value?: string | null;
  readonly min?: string | null;
  readonly max?: string | null;
  readonly options?: (CarrierFormConfigurationFieldOption | null)[] | null;
  readonly priority?: number | null;
}

export declare type CarrierFormConfigurationField = LazyLoading extends LazyLoadingDisabled ? EagerCarrierFormConfigurationField : LazyCarrierFormConfigurationField

export declare const CarrierFormConfigurationField: (new (init: ModelInit<CarrierFormConfigurationField>) => CarrierFormConfigurationField)

type EagerCarrierFormConfigurationAuth = {
  readonly type: CarrierFormConfigurationAuthType | keyof typeof CarrierFormConfigurationAuthType;
  readonly key: string;
  readonly value: string;
}

type LazyCarrierFormConfigurationAuth = {
  readonly type: CarrierFormConfigurationAuthType | keyof typeof CarrierFormConfigurationAuthType;
  readonly key: string;
  readonly value: string;
}

export declare type CarrierFormConfigurationAuth = LazyLoading extends LazyLoadingDisabled ? EagerCarrierFormConfigurationAuth : LazyCarrierFormConfigurationAuth

export declare const CarrierFormConfigurationAuth: (new (init: ModelInit<CarrierFormConfigurationAuth>) => CarrierFormConfigurationAuth)

type EagerCarrierFormConfigurationFieldOption = {
  readonly id?: string | null;
  readonly label?: string | null;
  readonly value?: string | null;
}

type LazyCarrierFormConfigurationFieldOption = {
  readonly id?: string | null;
  readonly label?: string | null;
  readonly value?: string | null;
}

export declare type CarrierFormConfigurationFieldOption = LazyLoading extends LazyLoadingDisabled ? EagerCarrierFormConfigurationFieldOption : LazyCarrierFormConfigurationFieldOption

export declare const CarrierFormConfigurationFieldOption: (new (init: ModelInit<CarrierFormConfigurationFieldOption>) => CarrierFormConfigurationFieldOption)

type EagerCarrierStoreConfigSettings = {
  readonly key?: string | null;
  readonly label?: string | null;
  readonly value?: string | null;
}

type LazyCarrierStoreConfigSettings = {
  readonly key?: string | null;
  readonly label?: string | null;
  readonly value?: string | null;
}

export declare type CarrierStoreConfigSettings = LazyLoading extends LazyLoadingDisabled ? EagerCarrierStoreConfigSettings : LazyCarrierStoreConfigSettings

export declare const CarrierStoreConfigSettings: (new (init: ModelInit<CarrierStoreConfigSettings>) => CarrierStoreConfigSettings)

type EagerDeliveryMethod = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly serviceType: string;
  readonly paymentMethod?: string | null;
}

type LazyDeliveryMethod = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly serviceType: string;
  readonly paymentMethod?: string | null;
}

export declare type DeliveryMethod = LazyLoading extends LazyLoadingDisabled ? EagerDeliveryMethod : LazyDeliveryMethod

export declare const DeliveryMethod: (new (init: ModelInit<DeliveryMethod>) => DeliveryMethod)

type EagerCarriersStoreConfigSearch = {
  readonly id: string;
  readonly account: string;
  readonly active: boolean;
  readonly carrierId: string;
  readonly name: string;
  readonly isBroker: boolean;
  readonly countries: string[];
  readonly shippingTypes: string[];
  readonly logo?: string | null;
}

type LazyCarriersStoreConfigSearch = {
  readonly id: string;
  readonly account: string;
  readonly active: boolean;
  readonly carrierId: string;
  readonly name: string;
  readonly isBroker: boolean;
  readonly countries: string[];
  readonly shippingTypes: string[];
  readonly logo?: string | null;
}

export declare type CarriersStoreConfigSearch = LazyLoading extends LazyLoadingDisabled ? EagerCarriersStoreConfigSearch : LazyCarriersStoreConfigSearch

export declare const CarriersStoreConfigSearch: (new (init: ModelInit<CarriersStoreConfigSearch>) => CarriersStoreConfigSearch)

type EagerSearchCatalogResponse = {
  readonly skuId?: string | null;
  readonly productId?: string | null;
  readonly eans?: (string | null)[] | null;
  readonly skus?: (string | null)[] | null;
  readonly ref?: (string | null)[] | null;
  readonly name?: string | null;
  readonly price?: number | null;
  readonly listPrice?: number | null;
  readonly stockBalance?: number | null;
  readonly imageUrl?: string | null;
  readonly specifications?: (Specification | null)[] | null;
  readonly categories?: (Categories | null)[] | null;
  readonly unitMultiplier?: number | null;
  readonly unitOfMeasurement?: string | null;
  readonly location?: (CatalogLocation | null)[] | null;
}

type LazySearchCatalogResponse = {
  readonly skuId?: string | null;
  readonly productId?: string | null;
  readonly eans?: (string | null)[] | null;
  readonly skus?: (string | null)[] | null;
  readonly ref?: (string | null)[] | null;
  readonly name?: string | null;
  readonly price?: number | null;
  readonly listPrice?: number | null;
  readonly stockBalance?: number | null;
  readonly imageUrl?: string | null;
  readonly specifications?: (Specification | null)[] | null;
  readonly categories?: (Categories | null)[] | null;
  readonly unitMultiplier?: number | null;
  readonly unitOfMeasurement?: string | null;
  readonly location?: (CatalogLocation | null)[] | null;
}

export declare type SearchCatalogResponse = LazyLoading extends LazyLoadingDisabled ? EagerSearchCatalogResponse : LazySearchCatalogResponse

export declare const SearchCatalogResponse: (new (init: ModelInit<SearchCatalogResponse>) => SearchCatalogResponse)

type EagerCatalogLocation = {
  readonly location?: string | null;
  readonly hostname?: string | null;
  readonly warehouse?: string | null;
}

type LazyCatalogLocation = {
  readonly location?: string | null;
  readonly hostname?: string | null;
  readonly warehouse?: string | null;
}

export declare type CatalogLocation = LazyLoading extends LazyLoadingDisabled ? EagerCatalogLocation : LazyCatalogLocation

export declare const CatalogLocation: (new (init: ModelInit<CatalogLocation>) => CatalogLocation)

type EagerSpecification = {
  readonly name?: string | null;
  readonly type?: string | null;
  readonly value?: string | null;
}

type LazySpecification = {
  readonly name?: string | null;
  readonly type?: string | null;
  readonly value?: string | null;
}

export declare type Specification = LazyLoading extends LazyLoadingDisabled ? EagerSpecification : LazySpecification

export declare const Specification: (new (init: ModelInit<Specification>) => Specification)

type EagerCategories = {
  readonly id?: string | null;
  readonly main?: boolean | null;
  readonly name?: string | null;
}

type LazyCategories = {
  readonly id?: string | null;
  readonly main?: boolean | null;
  readonly name?: string | null;
}

export declare type Categories = LazyLoading extends LazyLoadingDisabled ? EagerCategories : LazyCategories

export declare const Categories: (new (init: ModelInit<Categories>) => Categories)

type EagerListCatalogResponse = {
  readonly items?: (ListCatalogProducts | null)[] | null;
  readonly pagination?: CatalogPaginationResponse | null;
}

type LazyListCatalogResponse = {
  readonly items?: (ListCatalogProducts | null)[] | null;
  readonly pagination?: CatalogPaginationResponse | null;
}

export declare type ListCatalogResponse = LazyLoading extends LazyLoadingDisabled ? EagerListCatalogResponse : LazyListCatalogResponse

export declare const ListCatalogResponse: (new (init: ModelInit<ListCatalogResponse>) => ListCatalogResponse)

type EagerCatalogPaginationResponse = {
  readonly total?: number | null;
  readonly page?: number | null;
  readonly from?: number | null;
  readonly to?: number | null;
  readonly perPage?: number | null;
}

type LazyCatalogPaginationResponse = {
  readonly total?: number | null;
  readonly page?: number | null;
  readonly from?: number | null;
  readonly to?: number | null;
  readonly perPage?: number | null;
}

export declare type CatalogPaginationResponse = LazyLoading extends LazyLoadingDisabled ? EagerCatalogPaginationResponse : LazyCatalogPaginationResponse

export declare const CatalogPaginationResponse: (new (init: ModelInit<CatalogPaginationResponse>) => CatalogPaginationResponse)

type EagerCatalogMetaData = {
  readonly commercialPolicy?: (number | null)[] | null;
}

type LazyCatalogMetaData = {
  readonly commercialPolicy?: (number | null)[] | null;
}

export declare type CatalogMetaData = LazyLoading extends LazyLoadingDisabled ? EagerCatalogMetaData : LazyCatalogMetaData

export declare const CatalogMetaData: (new (init: ModelInit<CatalogMetaData>) => CatalogMetaData)

type EagerCatalogDimensions = {
  readonly cubicweight?: number | null;
  readonly height?: number | null;
  readonly length?: number | null;
  readonly weight?: number | null;
  readonly width?: number | null;
}

type LazyCatalogDimensions = {
  readonly cubicweight?: number | null;
  readonly height?: number | null;
  readonly length?: number | null;
  readonly weight?: number | null;
  readonly width?: number | null;
}

export declare type CatalogDimensions = LazyLoading extends LazyLoadingDisabled ? EagerCatalogDimensions : LazyCatalogDimensions

export declare const CatalogDimensions: (new (init: ModelInit<CatalogDimensions>) => CatalogDimensions)

type EagerCatalogBrand = {
  readonly id?: string | null;
  readonly name?: string | null;
}

type LazyCatalogBrand = {
  readonly id?: string | null;
  readonly name?: string | null;
}

export declare type CatalogBrand = LazyLoading extends LazyLoadingDisabled ? EagerCatalogBrand : LazyCatalogBrand

export declare const CatalogBrand: (new (init: ModelInit<CatalogBrand>) => CatalogBrand)

type EagerListCatalogProducts = {
  readonly active?: boolean | null;
  readonly id?: number | null;
  readonly productId?: number | null;
  readonly imageUrl?: string | null;
  readonly isWeighable?: boolean | null;
  readonly keywords?: string | null;
  readonly name?: string | null;
  readonly soldBy?: string | null;
  readonly specifications?: (Specification | null)[] | null;
  readonly sku?: (string | null)[] | null;
  readonly ref?: (string | null)[] | null;
  readonly metaData?: CatalogMetaData | null;
  readonly ean?: (string | null)[] | null;
  readonly dimensions?: CatalogDimensions | null;
  readonly categories?: (Categories | null)[] | null;
  readonly brand?: CatalogBrand | null;
  readonly temperature?: string | null;
  readonly location?: (CatalogLocation | null)[] | null;
}

type LazyListCatalogProducts = {
  readonly active?: boolean | null;
  readonly id?: number | null;
  readonly productId?: number | null;
  readonly imageUrl?: string | null;
  readonly isWeighable?: boolean | null;
  readonly keywords?: string | null;
  readonly name?: string | null;
  readonly soldBy?: string | null;
  readonly specifications?: (Specification | null)[] | null;
  readonly sku?: (string | null)[] | null;
  readonly ref?: (string | null)[] | null;
  readonly metaData?: CatalogMetaData | null;
  readonly ean?: (string | null)[] | null;
  readonly dimensions?: CatalogDimensions | null;
  readonly categories?: (Categories | null)[] | null;
  readonly brand?: CatalogBrand | null;
  readonly temperature?: string | null;
  readonly location?: (CatalogLocation | null)[] | null;
}

export declare type ListCatalogProducts = LazyLoading extends LazyLoadingDisabled ? EagerListCatalogProducts : LazyListCatalogProducts

export declare const ListCatalogProducts: (new (init: ModelInit<ListCatalogProducts>) => ListCatalogProducts)

type EagerCreateCatalogResponse = {
  readonly status?: number | null;
  readonly message?: string | null;
  readonly totalProducts?: number | null;
}

type LazyCreateCatalogResponse = {
  readonly status?: number | null;
  readonly message?: string | null;
  readonly totalProducts?: number | null;
}

export declare type CreateCatalogResponse = LazyLoading extends LazyLoadingDisabled ? EagerCreateCatalogResponse : LazyCreateCatalogResponse

export declare const CreateCatalogResponse: (new (init: ModelInit<CreateCatalogResponse>) => CreateCatalogResponse)

type EagerMessageChange = {
  readonly EN?: string | null;
  readonly ES?: string | null;
}

type LazyMessageChange = {
  readonly EN?: string | null;
  readonly ES?: string | null;
}

export declare type MessageChange = LazyLoading extends LazyLoadingDisabled ? EagerMessageChange : LazyMessageChange

export declare const MessageChange: (new (init: ModelInit<MessageChange>) => MessageChange)

type EagerDescriptionChange = {
  readonly newItem: string;
  readonly oldItem: string;
}

type LazyDescriptionChange = {
  readonly newItem: string;
  readonly oldItem: string;
}

export declare type DescriptionChange = LazyLoading extends LazyLoadingDisabled ? EagerDescriptionChange : LazyDescriptionChange

export declare const DescriptionChange: (new (init: ModelInit<DescriptionChange>) => DescriptionChange)

type EagerCLocation = {
  readonly latitude?: number | null;
  readonly longitude?: number | null;
}

type LazyCLocation = {
  readonly latitude?: number | null;
  readonly longitude?: number | null;
}

export declare type CLocation = LazyLoading extends LazyLoadingDisabled ? EagerCLocation : LazyCLocation

export declare const CLocation: (new (init: ModelInit<CLocation>) => CLocation)

type EagerCConfigurations = {
  readonly key?: string | null;
}

type LazyCConfigurations = {
  readonly key?: string | null;
}

export declare type CConfigurations = LazyLoading extends LazyLoadingDisabled ? EagerCConfigurations : LazyCConfigurations

export declare const CConfigurations: (new (init: ModelInit<CConfigurations>) => CConfigurations)

type EagerAffiliate = {
  readonly id?: string | null;
  readonly name?: string | null;
}

type LazyAffiliate = {
  readonly id?: string | null;
  readonly name?: string | null;
}

export declare type Affiliate = LazyLoading extends LazyLoadingDisabled ? EagerAffiliate : LazyAffiliate

export declare const Affiliate: (new (init: ModelInit<Affiliate>) => Affiliate)

type EagerWorksheetSummary = {
  readonly fulfillmentRate?: number | null;
  readonly ordersInWorksheet?: number | null;
  readonly createdDate?: string | null;
  readonly assignedDate?: string | null;
  readonly pickedItems?: number | null;
  readonly rejectedItems?: number | null;
  readonly replacedItems?: number | null;
  readonly pickingTime?: number | null;
  readonly timePerItem?: number | null;
  readonly picker?: string | null;
  readonly packagesCreated?: number | null;
  readonly envelopesUsed?: number | null;
  readonly packingTime?: number | null;
  readonly packer?: string | null;
  readonly worksheetId?: string | null;
  readonly status?: WorksheetStatus | keyof typeof WorksheetStatus | null;
  readonly ordersIds?: (string | null)[] | null;
}

type LazyWorksheetSummary = {
  readonly fulfillmentRate?: number | null;
  readonly ordersInWorksheet?: number | null;
  readonly createdDate?: string | null;
  readonly assignedDate?: string | null;
  readonly pickedItems?: number | null;
  readonly rejectedItems?: number | null;
  readonly replacedItems?: number | null;
  readonly pickingTime?: number | null;
  readonly timePerItem?: number | null;
  readonly picker?: string | null;
  readonly packagesCreated?: number | null;
  readonly envelopesUsed?: number | null;
  readonly packingTime?: number | null;
  readonly packer?: string | null;
  readonly worksheetId?: string | null;
  readonly status?: WorksheetStatus | keyof typeof WorksheetStatus | null;
  readonly ordersIds?: (string | null)[] | null;
}

export declare type WorksheetSummary = LazyLoading extends LazyLoadingDisabled ? EagerWorksheetSummary : LazyWorksheetSummary

export declare const WorksheetSummary: (new (init: ModelInit<WorksheetSummary>) => WorksheetSummary)

type EagerCAppliedAutomation = {
  readonly automationId: string;
  readonly action: string;
  readonly value: string;
  readonly lastInvocation: string;
  readonly status: CAppliedAutomationStatus | keyof typeof CAppliedAutomationStatus;
  readonly requestId: string;
  readonly metadata?: string | null;
}

type LazyCAppliedAutomation = {
  readonly automationId: string;
  readonly action: string;
  readonly value: string;
  readonly lastInvocation: string;
  readonly status: CAppliedAutomationStatus | keyof typeof CAppliedAutomationStatus;
  readonly requestId: string;
  readonly metadata?: string | null;
}

export declare type CAppliedAutomation = LazyLoading extends LazyLoadingDisabled ? EagerCAppliedAutomation : LazyCAppliedAutomation

export declare const CAppliedAutomation: (new (init: ModelInit<CAppliedAutomation>) => CAppliedAutomation)

type EagerCTimezone = {
  readonly offset?: number | null;
  readonly value?: string | null;
  readonly label?: string | null;
}

type LazyCTimezone = {
  readonly offset?: number | null;
  readonly value?: string | null;
  readonly label?: string | null;
}

export declare type CTimezone = LazyLoading extends LazyLoadingDisabled ? EagerCTimezone : LazyCTimezone

export declare const CTimezone: (new (init: ModelInit<CTimezone>) => CTimezone)

type EagerShippingPolicy = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly shippingMethod?: string | null;
}

type LazyShippingPolicy = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly shippingMethod?: string | null;
}

export declare type ShippingPolicy = LazyLoading extends LazyLoadingDisabled ? EagerShippingPolicy : LazyShippingPolicy

export declare const ShippingPolicy: (new (init: ModelInit<ShippingPolicy>) => ShippingPolicy)

type EagerVtexOrders = {
  readonly list?: (ListOrders | null)[] | null;
  readonly paging?: Paging | null;
}

type LazyVtexOrders = {
  readonly list?: (ListOrders | null)[] | null;
  readonly paging?: Paging | null;
}

export declare type VtexOrders = LazyLoading extends LazyLoadingDisabled ? EagerVtexOrders : LazyVtexOrders

export declare const VtexOrders: (new (init: ModelInit<VtexOrders>) => VtexOrders)

type EagerListOrders = {
  readonly orderId?: string | null;
  readonly creationDate?: string | null;
  readonly totalValue?: number | null;
  readonly status?: string | null;
  readonly customer?: string | null;
  readonly items?: number | null;
}

type LazyListOrders = {
  readonly orderId?: string | null;
  readonly creationDate?: string | null;
  readonly totalValue?: number | null;
  readonly status?: string | null;
  readonly customer?: string | null;
  readonly items?: number | null;
}

export declare type ListOrders = LazyLoading extends LazyLoadingDisabled ? EagerListOrders : LazyListOrders

export declare const ListOrders: (new (init: ModelInit<ListOrders>) => ListOrders)

type EagerPaging = {
  readonly total?: number | null;
  readonly pages?: number | null;
  readonly currentPage?: number | null;
  readonly perPage?: number | null;
}

type LazyPaging = {
  readonly total?: number | null;
  readonly pages?: number | null;
  readonly currentPage?: number | null;
  readonly perPage?: number | null;
}

export declare type Paging = LazyLoading extends LazyLoadingDisabled ? EagerPaging : LazyPaging

export declare const Paging: (new (init: ModelInit<Paging>) => Paging)

type EagerTotals = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly value?: number | null;
  readonly alternativeTotals?: (AlternativeTotals | null)[] | null;
}

type LazyTotals = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly value?: number | null;
  readonly alternativeTotals?: (AlternativeTotals | null)[] | null;
}

export declare type Totals = LazyLoading extends LazyLoadingDisabled ? EagerTotals : LazyTotals

export declare const Totals: (new (init: ModelInit<Totals>) => Totals)

type EagerAlternativeTotals = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly value?: number | null;
}

type LazyAlternativeTotals = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly value?: number | null;
}

export declare type AlternativeTotals = LazyLoading extends LazyLoadingDisabled ? EagerAlternativeTotals : LazyAlternativeTotals

export declare const AlternativeTotals: (new (init: ModelInit<AlternativeTotals>) => AlternativeTotals)

type EagerCurrencyFormatInfo = {
  readonly CurrencyDecimalDigits?: number | null;
  readonly CurrencyDecimalSeparator?: string | null;
  readonly CurrencyGroupSeparator?: string | null;
  readonly CurrencyGroupSize?: number | null;
  readonly StartsWithCurrencySymbol?: boolean | null;
}

type LazyCurrencyFormatInfo = {
  readonly CurrencyDecimalDigits?: number | null;
  readonly CurrencyDecimalSeparator?: string | null;
  readonly CurrencyGroupSeparator?: string | null;
  readonly CurrencyGroupSize?: number | null;
  readonly StartsWithCurrencySymbol?: boolean | null;
}

export declare type CurrencyFormatInfo = LazyLoading extends LazyLoadingDisabled ? EagerCurrencyFormatInfo : LazyCurrencyFormatInfo

export declare const CurrencyFormatInfo: (new (init: ModelInit<CurrencyFormatInfo>) => CurrencyFormatInfo)

type EagerStorePreferencesData = {
  readonly countryCode?: string | null;
  readonly currencyCode?: string | null;
  readonly currencyLocale?: number | null;
  readonly currencySymbol?: string | null;
  readonly timeZone?: string | null;
  readonly currencyFormatInfo?: CurrencyFormatInfo | null;
}

type LazyStorePreferencesData = {
  readonly countryCode?: string | null;
  readonly currencyCode?: string | null;
  readonly currencyLocale?: number | null;
  readonly currencySymbol?: string | null;
  readonly timeZone?: string | null;
  readonly currencyFormatInfo?: CurrencyFormatInfo | null;
}

export declare type StorePreferencesData = LazyLoading extends LazyLoadingDisabled ? EagerStorePreferencesData : LazyStorePreferencesData

export declare const StorePreferencesData: (new (init: ModelInit<StorePreferencesData>) => StorePreferencesData)

type EagerPayments = {
  readonly id?: string | null;
  readonly paymentSystem?: string | null;
  readonly paymentSystemName?: string | null;
  readonly value?: number | null;
  readonly installments?: number | null;
  readonly group?: string | null;
  readonly tid?: string | null;
  readonly lastDigits?: string | null;
  readonly redemptionCode?: string | null;
  readonly cardHolder?: string | null;
  readonly firstDigits?: string | null;
  readonly authId?: string | null;
  readonly giftCardId?: string | null;
}

type LazyPayments = {
  readonly id?: string | null;
  readonly paymentSystem?: string | null;
  readonly paymentSystemName?: string | null;
  readonly value?: number | null;
  readonly installments?: number | null;
  readonly group?: string | null;
  readonly tid?: string | null;
  readonly lastDigits?: string | null;
  readonly redemptionCode?: string | null;
  readonly cardHolder?: string | null;
  readonly firstDigits?: string | null;
  readonly authId?: string | null;
  readonly giftCardId?: string | null;
}

export declare type Payments = LazyLoading extends LazyLoadingDisabled ? EagerPayments : LazyPayments

export declare const Payments: (new (init: ModelInit<Payments>) => Payments)

type EagerUserPaymentInfo = {
  readonly paymentMethods?: (string | null)[] | null;
}

type LazyUserPaymentInfo = {
  readonly paymentMethods?: (string | null)[] | null;
}

export declare type UserPaymentInfo = LazyLoading extends LazyLoadingDisabled ? EagerUserPaymentInfo : LazyUserPaymentInfo

export declare const UserPaymentInfo: (new (init: ModelInit<UserPaymentInfo>) => UserPaymentInfo)

type EagerInvoiceData = {
  readonly address?: string | null;
  readonly userPaymentInfo?: UserPaymentInfo | null;
}

type LazyInvoiceData = {
  readonly address?: string | null;
  readonly userPaymentInfo?: UserPaymentInfo | null;
}

export declare type InvoiceData = LazyLoading extends LazyLoadingDisabled ? EagerInvoiceData : LazyInvoiceData

export declare const InvoiceData: (new (init: ModelInit<InvoiceData>) => InvoiceData)

type EagerPackageAttachment = {
  readonly packages?: (string | null)[] | null;
}

type LazyPackageAttachment = {
  readonly packages?: (string | null)[] | null;
}

export declare type PackageAttachment = LazyLoading extends LazyLoadingDisabled ? EagerPackageAttachment : LazyPackageAttachment

export declare const PackageAttachment: (new (init: ModelInit<PackageAttachment>) => PackageAttachment)

type EagerSelectedAddresses = {
  readonly addressId?: string | null;
  readonly addressType?: string | null;
  readonly receiverName?: string | null;
  readonly street?: string | null;
  readonly number?: string | null;
  readonly complement?: string | null;
  readonly neighborhood?: string | null;
  readonly postalCode?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly country?: string | null;
  readonly reference?: string | null;
  readonly geoCoordinates?: (number | null)[] | null;
}

type LazySelectedAddresses = {
  readonly addressId?: string | null;
  readonly addressType?: string | null;
  readonly receiverName?: string | null;
  readonly street?: string | null;
  readonly number?: string | null;
  readonly complement?: string | null;
  readonly neighborhood?: string | null;
  readonly postalCode?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly country?: string | null;
  readonly reference?: string | null;
  readonly geoCoordinates?: (number | null)[] | null;
}

export declare type SelectedAddresses = LazyLoading extends LazyLoadingDisabled ? EagerSelectedAddresses : LazySelectedAddresses

export declare const SelectedAddresses: (new (init: ModelInit<SelectedAddresses>) => SelectedAddresses)

type EagerPickupStoreInfo = {
  readonly friendlyName?: string | null;
  readonly isPickupStore?: boolean | null;
}

type LazyPickupStoreInfo = {
  readonly friendlyName?: string | null;
  readonly isPickupStore?: boolean | null;
}

export declare type PickupStoreInfo = LazyLoading extends LazyLoadingDisabled ? EagerPickupStoreInfo : LazyPickupStoreInfo

export declare const PickupStoreInfo: (new (init: ModelInit<PickupStoreInfo>) => PickupStoreInfo)

type EagerDeliveryIds = {
  readonly courierId?: string | null;
  readonly courierName?: string | null;
  readonly dockId?: string | null;
  readonly quantity?: number | null;
  readonly warehouseId?: string | null;
  readonly accountCarrierName?: string | null;
}

type LazyDeliveryIds = {
  readonly courierId?: string | null;
  readonly courierName?: string | null;
  readonly dockId?: string | null;
  readonly quantity?: number | null;
  readonly warehouseId?: string | null;
  readonly accountCarrierName?: string | null;
}

export declare type DeliveryIds = LazyLoading extends LazyLoadingDisabled ? EagerDeliveryIds : LazyDeliveryIds

export declare const DeliveryIds: (new (init: ModelInit<DeliveryIds>) => DeliveryIds)

type EagerLogisticsInfo = {
  readonly selectedSla?: string | null;
  readonly addressId?: string | null;
  readonly pickupPointId?: string | null;
  readonly lockTTL?: string | null;
  readonly transitTime?: string | null;
  readonly sellingPrice?: number | null;
  readonly shippingEstimate?: string | null;
  readonly shippingEstimateDate?: string | null;
  readonly pickupStoreInfo?: PickupStoreInfo | null;
  readonly deliveryWindow?: DeliveryWindowProxy | null;
  readonly deliveryIds?: (DeliveryIds | null)[] | null;
}

type LazyLogisticsInfo = {
  readonly selectedSla?: string | null;
  readonly addressId?: string | null;
  readonly pickupPointId?: string | null;
  readonly lockTTL?: string | null;
  readonly transitTime?: string | null;
  readonly sellingPrice?: number | null;
  readonly shippingEstimate?: string | null;
  readonly shippingEstimateDate?: string | null;
  readonly pickupStoreInfo?: PickupStoreInfo | null;
  readonly deliveryWindow?: DeliveryWindowProxy | null;
  readonly deliveryIds?: (DeliveryIds | null)[] | null;
}

export declare type LogisticsInfo = LazyLoading extends LazyLoadingDisabled ? EagerLogisticsInfo : LazyLogisticsInfo

export declare const LogisticsInfo: (new (init: ModelInit<LogisticsInfo>) => LogisticsInfo)

type EagerDeliveryWindowProxy = {
  readonly startDateUtc?: string | null;
  readonly endDateUtc?: string | null;
  readonly price?: number | null;
}

type LazyDeliveryWindowProxy = {
  readonly startDateUtc?: string | null;
  readonly endDateUtc?: string | null;
  readonly price?: number | null;
}

export declare type DeliveryWindowProxy = LazyLoading extends LazyLoadingDisabled ? EagerDeliveryWindowProxy : LazyDeliveryWindowProxy

export declare const DeliveryWindowProxy: (new (init: ModelInit<DeliveryWindowProxy>) => DeliveryWindowProxy)

type EagerShippingData = {
  readonly selectedAddresses?: (SelectedAddresses | null)[] | null;
  readonly logisticsInfo?: (LogisticsInfo | null)[] | null;
}

type LazyShippingData = {
  readonly selectedAddresses?: (SelectedAddresses | null)[] | null;
  readonly logisticsInfo?: (LogisticsInfo | null)[] | null;
}

export declare type ShippingData = LazyLoading extends LazyLoadingDisabled ? EagerShippingData : LazyShippingData

export declare const ShippingData: (new (init: ModelInit<ShippingData>) => ShippingData)

type EagerFields = {
  readonly criterio_sustitucion?: string | null;
  readonly redime_puntos?: string | null;
  readonly Pago_en_linea?: string | null;
  readonly Devolucin_de_dinero?: string | null;
  readonly beneficio_serfinanza?: string | null;
}

type LazyFields = {
  readonly criterio_sustitucion?: string | null;
  readonly redime_puntos?: string | null;
  readonly Pago_en_linea?: string | null;
  readonly Devolucin_de_dinero?: string | null;
  readonly beneficio_serfinanza?: string | null;
}

export declare type Fields = LazyLoading extends LazyLoadingDisabled ? EagerFields : LazyFields

export declare const Fields: (new (init: ModelInit<Fields>) => Fields)

type EagerCustomApps = {
  readonly id?: string | null;
  readonly major?: number | null;
  readonly fields?: Fields | null;
}

type LazyCustomApps = {
  readonly id?: string | null;
  readonly major?: number | null;
  readonly fields?: Fields | null;
}

export declare type CustomApps = LazyLoading extends LazyLoadingDisabled ? EagerCustomApps : LazyCustomApps

export declare const CustomApps: (new (init: ModelInit<CustomApps>) => CustomApps)

type EagerCustomData = {
  readonly customApps?: (CustomApps | null)[] | null;
}

type LazyCustomData = {
  readonly customApps?: (CustomApps | null)[] | null;
}

export declare type CustomData = LazyLoading extends LazyLoadingDisabled ? EagerCustomData : LazyCustomData

export declare const CustomData: (new (init: ModelInit<CustomData>) => CustomData)

type EagerMarketplace = {
  readonly baseURL?: string | null;
  readonly isCertified?: boolean | null;
  readonly name?: string | null;
}

type LazyMarketplace = {
  readonly baseURL?: string | null;
  readonly isCertified?: boolean | null;
  readonly name?: string | null;
}

export declare type Marketplace = LazyLoading extends LazyLoadingDisabled ? EagerMarketplace : LazyMarketplace

export declare const Marketplace: (new (init: ModelInit<Marketplace>) => Marketplace)

type EagerSellers = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly logo?: string | null;
  readonly fulfillmentEndpoint?: string | null;
}

type LazySellers = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly logo?: string | null;
  readonly fulfillmentEndpoint?: string | null;
}

export declare type Sellers = LazyLoading extends LazyLoadingDisabled ? EagerSellers : LazySellers

export declare const Sellers: (new (init: ModelInit<Sellers>) => Sellers)

type EagerPicked = {
  readonly quantity?: number | null;
}

type LazyPicked = {
  readonly quantity?: number | null;
}

export declare type Picked = LazyLoading extends LazyLoadingDisabled ? EagerPicked : LazyPicked

export declare const Picked: (new (init: ModelInit<Picked>) => Picked)

type EagerSellingPrices = {
  readonly value?: number | null;
  readonly quantity?: number | null;
}

type LazySellingPrices = {
  readonly value?: number | null;
  readonly quantity?: number | null;
}

export declare type SellingPrices = LazyLoading extends LazyLoadingDisabled ? EagerSellingPrices : LazySellingPrices

export declare const SellingPrices: (new (init: ModelInit<SellingPrices>) => SellingPrices)

type EagerPriceDefinition = {
  readonly calculatedSellingPrice?: number | null;
  readonly total?: number | null;
  readonly sellingPrices?: (SellingPrices | null)[] | null;
}

type LazyPriceDefinition = {
  readonly calculatedSellingPrice?: number | null;
  readonly total?: number | null;
  readonly sellingPrices?: (SellingPrices | null)[] | null;
}

export declare type PriceDefinition = LazyLoading extends LazyLoadingDisabled ? EagerPriceDefinition : LazyPriceDefinition

export declare const PriceDefinition: (new (init: ModelInit<PriceDefinition>) => PriceDefinition)

type EagerProductCategories = {
  readonly id?: number | null;
  readonly name?: string | null;
}

type LazyProductCategories = {
  readonly id?: number | null;
  readonly name?: string | null;
}

export declare type ProductCategories = LazyLoading extends LazyLoadingDisabled ? EagerProductCategories : LazyProductCategories

export declare const ProductCategories: (new (init: ModelInit<ProductCategories>) => ProductCategories)

type EagerBrand = {
  readonly brandId?: string | null;
  readonly brandName?: string | null;
}

type LazyBrand = {
  readonly brandId?: string | null;
  readonly brandName?: string | null;
}

export declare type Brand = LazyLoading extends LazyLoadingDisabled ? EagerBrand : LazyBrand

export declare const Brand: (new (init: ModelInit<Brand>) => Brand)

type EagerDimension = {
  readonly cubicweight?: number | null;
  readonly height?: number | null;
  readonly length?: number | null;
  readonly weight?: number | null;
  readonly width?: number | null;
}

type LazyDimension = {
  readonly cubicweight?: number | null;
  readonly height?: number | null;
  readonly length?: number | null;
  readonly weight?: number | null;
  readonly width?: number | null;
}

export declare type Dimension = LazyLoading extends LazyLoadingDisabled ? EagerDimension : LazyDimension

export declare const Dimension: (new (init: ModelInit<Dimension>) => Dimension)

type EagerItems = {
  readonly id?: string | null;
  readonly seller?: string | null;
  readonly quantity?: number | null;
  readonly description?: string | null;
  readonly ean?: string | null;
  readonly refId?: string | null;
  readonly productId?: string | null;
  readonly listPrice?: number | null;
  readonly price?: number | null;
  readonly sellingPrice?: number | null;
  readonly tax?: number | null;
  readonly taxCode?: string | null;
  readonly rewardValue?: number | null;
  readonly skuName?: string | null;
  readonly imageUrl?: string | null;
  readonly name?: string | null;
  readonly isGift?: boolean | null;
  readonly measurementUnit?: string | null;
  readonly manualPrice?: string | null;
  readonly preSaleDate?: string | null;
  readonly unitMultiplier?: number | null;
  readonly picked?: Picked | null;
  readonly priceTags?: (string | null)[] | null;
  readonly priceDefinition?: PriceDefinition | null;
  readonly bundleItems?: (string | null)[] | null;
  readonly components?: (string | null)[] | null;
  readonly attachments?: (string | null)[] | null;
  readonly assemblies?: (string | null)[] | null;
  readonly productCategories?: (ProductCategories | null)[] | null;
  readonly brand?: Brand | null;
  readonly dimension?: Dimension | null;
}

type LazyItems = {
  readonly id?: string | null;
  readonly seller?: string | null;
  readonly quantity?: number | null;
  readonly description?: string | null;
  readonly ean?: string | null;
  readonly refId?: string | null;
  readonly productId?: string | null;
  readonly listPrice?: number | null;
  readonly price?: number | null;
  readonly sellingPrice?: number | null;
  readonly tax?: number | null;
  readonly taxCode?: string | null;
  readonly rewardValue?: number | null;
  readonly skuName?: string | null;
  readonly imageUrl?: string | null;
  readonly name?: string | null;
  readonly isGift?: boolean | null;
  readonly measurementUnit?: string | null;
  readonly manualPrice?: string | null;
  readonly preSaleDate?: string | null;
  readonly unitMultiplier?: number | null;
  readonly picked?: Picked | null;
  readonly priceTags?: (string | null)[] | null;
  readonly priceDefinition?: PriceDefinition | null;
  readonly bundleItems?: (string | null)[] | null;
  readonly components?: (string | null)[] | null;
  readonly attachments?: (string | null)[] | null;
  readonly assemblies?: (string | null)[] | null;
  readonly productCategories?: (ProductCategories | null)[] | null;
  readonly brand?: Brand | null;
  readonly dimension?: Dimension | null;
}

export declare type Items = LazyLoading extends LazyLoadingDisabled ? EagerItems : LazyItems

export declare const Items: (new (init: ModelInit<Items>) => Items)

type EagerClientProfileData = {
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly document?: string | null;
  readonly documentType?: string | null;
  readonly phone?: string | null;
  readonly userProfileId?: string | null;
}

type LazyClientProfileData = {
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly document?: string | null;
  readonly documentType?: string | null;
  readonly phone?: string | null;
  readonly userProfileId?: string | null;
}

export declare type ClientProfileData = LazyLoading extends LazyLoadingDisabled ? EagerClientProfileData : LazyClientProfileData

export declare const ClientProfileData: (new (init: ModelInit<ClientProfileData>) => ClientProfileData)

type EagerVtexOrder = {
  readonly affiliateId?: string | null;
  readonly marketplaceOrderId?: string | null;
  readonly sellerOrderId?: string | null;
  readonly orderId?: string | null;
  readonly sequence?: string | null;
  readonly hostname?: string | null;
  readonly status?: string | null;
  readonly creationDate?: string | null;
  readonly openTextField?: string | null;
  readonly shippingEstimatedDateMin?: string | null;
  readonly salesChannel?: string | null;
  readonly clientName?: string | null;
  readonly lastChange?: string | null;
  readonly deliveryChannel?: string | null;
  readonly value?: number | null;
  readonly courierName?: string | null;
  readonly itemsCategories?: string | null;
  readonly itemsCategoriesIds?: string | null;
  readonly paymentMethodsName?: string | null;
  readonly orderTotalValue?: number | null;
  readonly orderItemsCount?: number | null;
  readonly totals?: (Totals | null)[] | null;
  readonly storePreferencesData?: StorePreferencesData | null;
  readonly payment?: Payment | null;
  readonly invoiceData?: InvoiceData | null;
  readonly packageAttachment?: string | null;
  readonly shippingData?: ShippingData | null;
  readonly customData?: CustomData | null;
  readonly marketingData?: MarketingData | null;
  readonly pickingPriority?: (string | null)[] | null;
  readonly rejectedItems?: (string | null)[] | null;
  readonly pickedItems?: (string | null)[] | null;
  readonly marketplace?: Marketplace | null;
  readonly sellers?: (Sellers | null)[] | null;
  readonly items?: (Items | null)[] | null;
  readonly clientProfileData?: ClientProfileData | null;
}

type LazyVtexOrder = {
  readonly affiliateId?: string | null;
  readonly marketplaceOrderId?: string | null;
  readonly sellerOrderId?: string | null;
  readonly orderId?: string | null;
  readonly sequence?: string | null;
  readonly hostname?: string | null;
  readonly status?: string | null;
  readonly creationDate?: string | null;
  readonly openTextField?: string | null;
  readonly shippingEstimatedDateMin?: string | null;
  readonly salesChannel?: string | null;
  readonly clientName?: string | null;
  readonly lastChange?: string | null;
  readonly deliveryChannel?: string | null;
  readonly value?: number | null;
  readonly courierName?: string | null;
  readonly itemsCategories?: string | null;
  readonly itemsCategoriesIds?: string | null;
  readonly paymentMethodsName?: string | null;
  readonly orderTotalValue?: number | null;
  readonly orderItemsCount?: number | null;
  readonly totals?: (Totals | null)[] | null;
  readonly storePreferencesData?: StorePreferencesData | null;
  readonly payment?: Payment | null;
  readonly invoiceData?: InvoiceData | null;
  readonly packageAttachment?: string | null;
  readonly shippingData?: ShippingData | null;
  readonly customData?: CustomData | null;
  readonly marketingData?: MarketingData | null;
  readonly pickingPriority?: (string | null)[] | null;
  readonly rejectedItems?: (string | null)[] | null;
  readonly pickedItems?: (string | null)[] | null;
  readonly marketplace?: Marketplace | null;
  readonly sellers?: (Sellers | null)[] | null;
  readonly items?: (Items | null)[] | null;
  readonly clientProfileData?: ClientProfileData | null;
}

export declare type VtexOrder = LazyLoading extends LazyLoadingDisabled ? EagerVtexOrder : LazyVtexOrder

export declare const VtexOrder: (new (init: ModelInit<VtexOrder>) => VtexOrder)

type EagerServiceResponse = {
  readonly services?: (ServiceOpenSearch | null)[] | null;
  readonly pagination?: PaginationResponse | null;
}

type LazyServiceResponse = {
  readonly services?: (ServiceOpenSearch | null)[] | null;
  readonly pagination?: PaginationResponse | null;
}

export declare type ServiceResponse = LazyLoading extends LazyLoadingDisabled ? EagerServiceResponse : LazyServiceResponse

export declare const ServiceResponse: (new (init: ModelInit<ServiceResponse>) => ServiceResponse)

type EagerPaginationResponse = {
  readonly totalItems?: number | null;
  readonly page?: number | null;
  readonly pageSize?: number | null;
  readonly totalPages?: number | null;
  readonly from?: number | null;
  readonly to?: number | null;
}

type LazyPaginationResponse = {
  readonly totalItems?: number | null;
  readonly page?: number | null;
  readonly pageSize?: number | null;
  readonly totalPages?: number | null;
  readonly from?: number | null;
  readonly to?: number | null;
}

export declare type PaginationResponse = LazyLoading extends LazyLoadingDisabled ? EagerPaginationResponse : LazyPaginationResponse

export declare const PaginationResponse: (new (init: ModelInit<PaginationResponse>) => PaginationResponse)

type EagerDeliveryMethodAggregationsResponse = {
  readonly comparedDate?: DeliveryDate | null;
  readonly referenceDate?: DeliveryDate | null;
}

type LazyDeliveryMethodAggregationsResponse = {
  readonly comparedDate?: DeliveryDate | null;
  readonly referenceDate?: DeliveryDate | null;
}

export declare type DeliveryMethodAggregationsResponse = LazyLoading extends LazyLoadingDisabled ? EagerDeliveryMethodAggregationsResponse : LazyDeliveryMethodAggregationsResponse

export declare const DeliveryMethodAggregationsResponse: (new (init: ModelInit<DeliveryMethodAggregationsResponse>) => DeliveryMethodAggregationsResponse)

type EagerDeliveryDate = {
  readonly from?: string | null;
  readonly to?: string | null;
  readonly totalDeliveries?: number | null;
  readonly deliveryMethods?: (DeliveryMethodResponse | null)[] | null;
}

type LazyDeliveryDate = {
  readonly from?: string | null;
  readonly to?: string | null;
  readonly totalDeliveries?: number | null;
  readonly deliveryMethods?: (DeliveryMethodResponse | null)[] | null;
}

export declare type DeliveryDate = LazyLoading extends LazyLoadingDisabled ? EagerDeliveryDate : LazyDeliveryDate

export declare const DeliveryDate: (new (init: ModelInit<DeliveryDate>) => DeliveryDate)

type EagerDeliveryMethodResponse = {
  readonly deliveryMethod?: string | null;
  readonly value?: number | null;
}

type LazyDeliveryMethodResponse = {
  readonly deliveryMethod?: string | null;
  readonly value?: number | null;
}

export declare type DeliveryMethodResponse = LazyLoading extends LazyLoadingDisabled ? EagerDeliveryMethodResponse : LazyDeliveryMethodResponse

export declare const DeliveryMethodResponse: (new (init: ModelInit<DeliveryMethodResponse>) => DeliveryMethodResponse)

type EagerCarriersNameAggregationsResponse = {
  readonly comparedDate?: CarriersDate | null;
  readonly referenceDate?: CarriersDate | null;
}

type LazyCarriersNameAggregationsResponse = {
  readonly comparedDate?: CarriersDate | null;
  readonly referenceDate?: CarriersDate | null;
}

export declare type CarriersNameAggregationsResponse = LazyLoading extends LazyLoadingDisabled ? EagerCarriersNameAggregationsResponse : LazyCarriersNameAggregationsResponse

export declare const CarriersNameAggregationsResponse: (new (init: ModelInit<CarriersNameAggregationsResponse>) => CarriersNameAggregationsResponse)

type EagerCarriersDate = {
  readonly from?: string | null;
  readonly to?: string | null;
  readonly totalDeliveries?: number | null;
  readonly servicesByCarriers?: (CarriersNameResponse | null)[] | null;
}

type LazyCarriersDate = {
  readonly from?: string | null;
  readonly to?: string | null;
  readonly totalDeliveries?: number | null;
  readonly servicesByCarriers?: (CarriersNameResponse | null)[] | null;
}

export declare type CarriersDate = LazyLoading extends LazyLoadingDisabled ? EagerCarriersDate : LazyCarriersDate

export declare const CarriersDate: (new (init: ModelInit<CarriersDate>) => CarriersDate)

type EagerCarriersNameResponse = {
  readonly carrierName?: string | null;
  readonly value?: number | null;
}

type LazyCarriersNameResponse = {
  readonly carrierName?: string | null;
  readonly value?: number | null;
}

export declare type CarriersNameResponse = LazyLoading extends LazyLoadingDisabled ? EagerCarriersNameResponse : LazyCarriersNameResponse

export declare const CarriersNameResponse: (new (init: ModelInit<CarriersNameResponse>) => CarriersNameResponse)

type EagerStatusAggregationsResponse = {
  readonly comparedDate?: StatusDate | null;
  readonly referenceDate?: StatusDate | null;
}

type LazyStatusAggregationsResponse = {
  readonly comparedDate?: StatusDate | null;
  readonly referenceDate?: StatusDate | null;
}

export declare type StatusAggregationsResponse = LazyLoading extends LazyLoadingDisabled ? EagerStatusAggregationsResponse : LazyStatusAggregationsResponse

export declare const StatusAggregationsResponse: (new (init: ModelInit<StatusAggregationsResponse>) => StatusAggregationsResponse)

type EagerStatusDate = {
  readonly from?: string | null;
  readonly to?: string | null;
  readonly totalDeliveries?: number | null;
  readonly servicesByStatus?: (StatusResponse | null)[] | null;
}

type LazyStatusDate = {
  readonly from?: string | null;
  readonly to?: string | null;
  readonly totalDeliveries?: number | null;
  readonly servicesByStatus?: (StatusResponse | null)[] | null;
}

export declare type StatusDate = LazyLoading extends LazyLoadingDisabled ? EagerStatusDate : LazyStatusDate

export declare const StatusDate: (new (init: ModelInit<StatusDate>) => StatusDate)

type EagerStatusResponse = {
  readonly status?: string | null;
  readonly value?: number | null;
}

type LazyStatusResponse = {
  readonly status?: string | null;
  readonly value?: number | null;
}

export declare type StatusResponse = LazyLoading extends LazyLoadingDisabled ? EagerStatusResponse : LazyStatusResponse

export declare const StatusResponse: (new (init: ModelInit<StatusResponse>) => StatusResponse)

type EagerAverageDistanceResponse = {
  readonly comparedDate?: AverageDistanceDate | null;
  readonly referenceDate?: AverageDistanceDate | null;
}

type LazyAverageDistanceResponse = {
  readonly comparedDate?: AverageDistanceDate | null;
  readonly referenceDate?: AverageDistanceDate | null;
}

export declare type AverageDistanceResponse = LazyLoading extends LazyLoadingDisabled ? EagerAverageDistanceResponse : LazyAverageDistanceResponse

export declare const AverageDistanceResponse: (new (init: ModelInit<AverageDistanceResponse>) => AverageDistanceResponse)

type EagerAverageDistanceDate = {
  readonly from?: string | null;
  readonly to?: string | null;
  readonly totalDeliveries?: number | null;
  readonly completedDeliveries?: number | null;
  readonly averageDistance?: number | null;
}

type LazyAverageDistanceDate = {
  readonly from?: string | null;
  readonly to?: string | null;
  readonly totalDeliveries?: number | null;
  readonly completedDeliveries?: number | null;
  readonly averageDistance?: number | null;
}

export declare type AverageDistanceDate = LazyLoading extends LazyLoadingDisabled ? EagerAverageDistanceDate : LazyAverageDistanceDate

export declare const AverageDistanceDate: (new (init: ModelInit<AverageDistanceDate>) => AverageDistanceDate)

type EagerAverageRatingResponse = {
  readonly comparedDate?: AverageRatingDate | null;
  readonly referenceDate?: AverageRatingDate | null;
}

type LazyAverageRatingResponse = {
  readonly comparedDate?: AverageRatingDate | null;
  readonly referenceDate?: AverageRatingDate | null;
}

export declare type AverageRatingResponse = LazyLoading extends LazyLoadingDisabled ? EagerAverageRatingResponse : LazyAverageRatingResponse

export declare const AverageRatingResponse: (new (init: ModelInit<AverageRatingResponse>) => AverageRatingResponse)

type EagerAverageRatingDate = {
  readonly from?: string | null;
  readonly to?: string | null;
  readonly totalDeliveries?: number | null;
  readonly ordersWithRating?: number | null;
  readonly averageRating?: number | null;
}

type LazyAverageRatingDate = {
  readonly from?: string | null;
  readonly to?: string | null;
  readonly totalDeliveries?: number | null;
  readonly ordersWithRating?: number | null;
  readonly averageRating?: number | null;
}

export declare type AverageRatingDate = LazyLoading extends LazyLoadingDisabled ? EagerAverageRatingDate : LazyAverageRatingDate

export declare const AverageRatingDate: (new (init: ModelInit<AverageRatingDate>) => AverageRatingDate)

type EagerAverageOrdersOnTimeResponse = {
  readonly comparedDate?: AverageOrdersOnTimeDate | null;
  readonly referenceDate?: AverageOrdersOnTimeDate | null;
}

type LazyAverageOrdersOnTimeResponse = {
  readonly comparedDate?: AverageOrdersOnTimeDate | null;
  readonly referenceDate?: AverageOrdersOnTimeDate | null;
}

export declare type AverageOrdersOnTimeResponse = LazyLoading extends LazyLoadingDisabled ? EagerAverageOrdersOnTimeResponse : LazyAverageOrdersOnTimeResponse

export declare const AverageOrdersOnTimeResponse: (new (init: ModelInit<AverageOrdersOnTimeResponse>) => AverageOrdersOnTimeResponse)

type EagerAverageOrdersOnTimeDate = {
  readonly from?: string | null;
  readonly to?: string | null;
  readonly totalDeliveries?: number | null;
  readonly ordersOnTime?: number | null;
  readonly averageTime?: number | null;
}

type LazyAverageOrdersOnTimeDate = {
  readonly from?: string | null;
  readonly to?: string | null;
  readonly totalDeliveries?: number | null;
  readonly ordersOnTime?: number | null;
  readonly averageTime?: number | null;
}

export declare type AverageOrdersOnTimeDate = LazyLoading extends LazyLoadingDisabled ? EagerAverageOrdersOnTimeDate : LazyAverageOrdersOnTimeDate

export declare const AverageOrdersOnTimeDate: (new (init: ModelInit<AverageOrdersOnTimeDate>) => AverageOrdersOnTimeDate)

type EagerVerifyTeamResponse = {
  readonly teamName?: string | null;
  readonly teamId?: number | null;
  readonly teams?: (Team | null)[] | null;
}

type LazyVerifyTeamResponse = {
  readonly teamName?: string | null;
  readonly teamId?: number | null;
  readonly teams?: (Team | null)[] | null;
}

export declare type VerifyTeamResponse = LazyLoading extends LazyLoadingDisabled ? EagerVerifyTeamResponse : LazyVerifyTeamResponse

export declare const VerifyTeamResponse: (new (init: ModelInit<VerifyTeamResponse>) => VerifyTeamResponse)

type EagerTeam = {
  readonly tags?: string | null;
  readonly battery_usage?: number | null;
  readonly team_id?: number | null;
  readonly team_name?: string | null;
  readonly address?: string | null;
  readonly latitude?: string | null;
  readonly longitude?: string | null;
}

type LazyTeam = {
  readonly tags?: string | null;
  readonly battery_usage?: number | null;
  readonly team_id?: number | null;
  readonly team_name?: string | null;
  readonly address?: string | null;
  readonly latitude?: string | null;
  readonly longitude?: string | null;
}

export declare type Team = LazyLoading extends LazyLoadingDisabled ? EagerTeam : LazyTeam

export declare const Team: (new (init: ModelInit<Team>) => Team)

type EagerListOrdersResponse = {
  readonly items?: (OrderOpenSearch | null)[] | null;
  readonly pagination?: ResponsePagination | null;
}

type LazyListOrdersResponse = {
  readonly items?: (OrderOpenSearch | null)[] | null;
  readonly pagination?: ResponsePagination | null;
}

export declare type ListOrdersResponse = LazyLoading extends LazyLoadingDisabled ? EagerListOrdersResponse : LazyListOrdersResponse

export declare const ListOrdersResponse: (new (init: ModelInit<ListOrdersResponse>) => ListOrdersResponse)

type EagerListCarriersStoreConfigsResponse = {
  readonly items: CarriersStoreConfigSearch[];
  readonly pagination: ResponsePagination;
}

type LazyListCarriersStoreConfigsResponse = {
  readonly items: CarriersStoreConfigSearch[];
  readonly pagination: ResponsePagination;
}

export declare type ListCarriersStoreConfigsResponse = LazyLoading extends LazyLoadingDisabled ? EagerListCarriersStoreConfigsResponse : LazyListCarriersStoreConfigsResponse

export declare const ListCarriersStoreConfigsResponse: (new (init: ModelInit<ListCarriersStoreConfigsResponse>) => ListCarriersStoreConfigsResponse)

type EagerListWorksheetsResponse = {
  readonly items?: (WorksheetOpenSearch | null)[] | null;
  readonly pagination?: ResponsePagination | null;
}

type LazyListWorksheetsResponse = {
  readonly items?: (WorksheetOpenSearch | null)[] | null;
  readonly pagination?: ResponsePagination | null;
}

export declare type ListWorksheetsResponse = LazyLoading extends LazyLoadingDisabled ? EagerListWorksheetsResponse : LazyListWorksheetsResponse

export declare const ListWorksheetsResponse: (new (init: ModelInit<ListWorksheetsResponse>) => ListWorksheetsResponse)

type EagerResponsePagination = {
  readonly total?: number | null;
  readonly from?: number | null;
  readonly to?: number | null;
}

type LazyResponsePagination = {
  readonly total?: number | null;
  readonly from?: number | null;
  readonly to?: number | null;
}

export declare type ResponsePagination = LazyLoading extends LazyLoadingDisabled ? EagerResponsePagination : LazyResponsePagination

export declare const ResponsePagination: (new (init: ModelInit<ResponsePagination>) => ResponsePagination)

type EagerPickerInsightsResponse = {
  readonly pickerInsights?: PickerInsightsData | null;
}

type LazyPickerInsightsResponse = {
  readonly pickerInsights?: PickerInsightsData | null;
}

export declare type PickerInsightsResponse = LazyLoading extends LazyLoadingDisabled ? EagerPickerInsightsResponse : LazyPickerInsightsResponse

export declare const PickerInsightsResponse: (new (init: ModelInit<PickerInsightsResponse>) => PickerInsightsResponse)

type EagerPickerInsightsData = {
  readonly histogram?: Histogram | null;
  readonly totalPickedOrders?: TotalPicked | null;
  readonly totalPickedItems?: TotalPicked | null;
  readonly pendingWorksheets?: number | null;
  readonly ordersToPack?: number | null;
  readonly unnasignedOrders?: number | null;
  readonly avgTimePickerPerItemCurrentPeriod?: number | null;
  readonly avgTimePickerPerItemLastPeriod?: number | null;
  readonly avgTimePickerPerOrderCurrentPeriod?: number | null;
  readonly avgTimePickerPerOrderLastPeriod?: number | null;
  readonly chartPerItem?: ChartInsights | null;
  readonly chartPerOrder?: ChartInsights | null;
}

type LazyPickerInsightsData = {
  readonly histogram?: Histogram | null;
  readonly totalPickedOrders?: TotalPicked | null;
  readonly totalPickedItems?: TotalPicked | null;
  readonly pendingWorksheets?: number | null;
  readonly ordersToPack?: number | null;
  readonly unnasignedOrders?: number | null;
  readonly avgTimePickerPerItemCurrentPeriod?: number | null;
  readonly avgTimePickerPerItemLastPeriod?: number | null;
  readonly avgTimePickerPerOrderCurrentPeriod?: number | null;
  readonly avgTimePickerPerOrderLastPeriod?: number | null;
  readonly chartPerItem?: ChartInsights | null;
  readonly chartPerOrder?: ChartInsights | null;
}

export declare type PickerInsightsData = LazyLoading extends LazyLoadingDisabled ? EagerPickerInsightsData : LazyPickerInsightsData

export declare const PickerInsightsData: (new (init: ModelInit<PickerInsightsData>) => PickerInsightsData)

type EagerChartInsights = {
  readonly minSellerTime?: number | null;
  readonly maxSellerTime?: number | null;
  readonly minPickerTime?: number | null;
  readonly maxPickerTime?: number | null;
  readonly avgPickerTime?: number | null;
  readonly avgSellerTime?: number | null;
}

type LazyChartInsights = {
  readonly minSellerTime?: number | null;
  readonly maxSellerTime?: number | null;
  readonly minPickerTime?: number | null;
  readonly maxPickerTime?: number | null;
  readonly avgPickerTime?: number | null;
  readonly avgSellerTime?: number | null;
}

export declare type ChartInsights = LazyLoading extends LazyLoadingDisabled ? EagerChartInsights : LazyChartInsights

export declare const ChartInsights: (new (init: ModelInit<ChartInsights>) => ChartInsights)

type EagerHistogram = {
  readonly lastPeriod?: (TPeriod | null)[] | null;
  readonly currentPeriod?: (TPeriod | null)[] | null;
}

type LazyHistogram = {
  readonly lastPeriod?: (TPeriod | null)[] | null;
  readonly currentPeriod?: (TPeriod | null)[] | null;
}

export declare type Histogram = LazyLoading extends LazyLoadingDisabled ? EagerHistogram : LazyHistogram

export declare const Histogram: (new (init: ModelInit<Histogram>) => Histogram)

type EagerHistogramResponse = {
  readonly name?: string | null;
  readonly currentPeriod?: number | null;
  readonly lastPeriod?: number | null;
}

type LazyHistogramResponse = {
  readonly name?: string | null;
  readonly currentPeriod?: number | null;
  readonly lastPeriod?: number | null;
}

export declare type HistogramResponse = LazyLoading extends LazyLoadingDisabled ? EagerHistogramResponse : LazyHistogramResponse

export declare const HistogramResponse: (new (init: ModelInit<HistogramResponse>) => HistogramResponse)

type EagerTPeriod = {
  readonly label?: string | null;
  readonly value?: number | null;
}

type LazyTPeriod = {
  readonly label?: string | null;
  readonly value?: number | null;
}

export declare type TPeriod = LazyLoading extends LazyLoadingDisabled ? EagerTPeriod : LazyTPeriod

export declare const TPeriod: (new (init: ModelInit<TPeriod>) => TPeriod)

type EagerTotalPicked = {
  readonly lastPeriod?: number | null;
  readonly currentPeriod?: number | null;
}

type LazyTotalPicked = {
  readonly lastPeriod?: number | null;
  readonly currentPeriod?: number | null;
}

export declare type TotalPicked = LazyLoading extends LazyLoadingDisabled ? EagerTotalPicked : LazyTotalPicked

export declare const TotalPicked: (new (init: ModelInit<TotalPicked>) => TotalPicked)

type EagerPaymentMethodListResponse = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly label?: string | null;
}

type LazyPaymentMethodListResponse = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly label?: string | null;
}

export declare type PaymentMethodListResponse = LazyLoading extends LazyLoadingDisabled ? EagerPaymentMethodListResponse : LazyPaymentMethodListResponse

export declare const PaymentMethodListResponse: (new (init: ModelInit<PaymentMethodListResponse>) => PaymentMethodListResponse)

type EagerCommercialConditionsResponse = {
  readonly Id?: string | null;
  readonly Name?: string | null;
  readonly IsActive?: boolean | null;
}

type LazyCommercialConditionsResponse = {
  readonly Id?: string | null;
  readonly Name?: string | null;
  readonly IsActive?: boolean | null;
}

export declare type CommercialConditionsResponse = LazyLoading extends LazyLoadingDisabled ? EagerCommercialConditionsResponse : LazyCommercialConditionsResponse

export declare const CommercialConditionsResponse: (new (init: ModelInit<CommercialConditionsResponse>) => CommercialConditionsResponse)

type EagerAvgTimePickerPerItem = {
  readonly avgTimePickerPerItemCurrentPeriod?: number | null;
  readonly avgTimePickerPerItemLastPeriod?: number | null;
}

type LazyAvgTimePickerPerItem = {
  readonly avgTimePickerPerItemCurrentPeriod?: number | null;
  readonly avgTimePickerPerItemLastPeriod?: number | null;
}

export declare type AvgTimePickerPerItem = LazyLoading extends LazyLoadingDisabled ? EagerAvgTimePickerPerItem : LazyAvgTimePickerPerItem

export declare const AvgTimePickerPerItem: (new (init: ModelInit<AvgTimePickerPerItem>) => AvgTimePickerPerItem)

type EagerAvgTimePerItemByHostname = {
  readonly avgTimePerItemCurrentPeriod?: number | null;
  readonly avgTimePerItemLastPeriod?: number | null;
}

type LazyAvgTimePerItemByHostname = {
  readonly avgTimePerItemCurrentPeriod?: number | null;
  readonly avgTimePerItemLastPeriod?: number | null;
}

export declare type AvgTimePerItemByHostname = LazyLoading extends LazyLoadingDisabled ? EagerAvgTimePerItemByHostname : LazyAvgTimePerItemByHostname

export declare const AvgTimePerItemByHostname: (new (init: ModelInit<AvgTimePerItemByHostname>) => AvgTimePerItemByHostname)

type EagerAvgTimePerOrderProcess = {
  readonly picking?: TotalPicked | null;
  readonly packing?: TotalPicked | null;
  readonly shipping?: TotalPicked | null;
  readonly totalProcess?: TotalPicked | null;
  readonly pickedOrders?: number | null;
  readonly deliveredOrders?: number | null;
  readonly canceledOrders?: number | null;
}

type LazyAvgTimePerOrderProcess = {
  readonly picking?: TotalPicked | null;
  readonly packing?: TotalPicked | null;
  readonly shipping?: TotalPicked | null;
  readonly totalProcess?: TotalPicked | null;
  readonly pickedOrders?: number | null;
  readonly deliveredOrders?: number | null;
  readonly canceledOrders?: number | null;
}

export declare type AvgTimePerOrderProcess = LazyLoading extends LazyLoadingDisabled ? EagerAvgTimePerOrderProcess : LazyAvgTimePerOrderProcess

export declare const AvgTimePerOrderProcess: (new (init: ModelInit<AvgTimePerOrderProcess>) => AvgTimePerOrderProcess)

type EagerItemsHandledResponse = {
  readonly lastPeriod?: ItemsHandledData | null;
  readonly currentPeriod?: ItemsHandledData | null;
}

type LazyItemsHandledResponse = {
  readonly lastPeriod?: ItemsHandledData | null;
  readonly currentPeriod?: ItemsHandledData | null;
}

export declare type ItemsHandledResponse = LazyLoading extends LazyLoadingDisabled ? EagerItemsHandledResponse : LazyItemsHandledResponse

export declare const ItemsHandledResponse: (new (init: ModelInit<ItemsHandledResponse>) => ItemsHandledResponse)

type EagerItemsHandledData = {
  readonly avgPickingTime?: number | null;
  readonly itemsPicked?: number | null;
  readonly fillRate?: number | null;
}

type LazyItemsHandledData = {
  readonly avgPickingTime?: number | null;
  readonly itemsPicked?: number | null;
  readonly fillRate?: number | null;
}

export declare type ItemsHandledData = LazyLoading extends LazyLoadingDisabled ? EagerItemsHandledData : LazyItemsHandledData

export declare const ItemsHandledData: (new (init: ModelInit<ItemsHandledData>) => ItemsHandledData)

type EagerItemsHistogramResponse = {
  readonly itemsPicked?: number | null;
  readonly unitsPicked?: number | null;
  readonly unitsRejected?: number | null;
  readonly histogram?: (ItemsHistogramData | null)[] | null;
}

type LazyItemsHistogramResponse = {
  readonly itemsPicked?: number | null;
  readonly unitsPicked?: number | null;
  readonly unitsRejected?: number | null;
  readonly histogram?: (ItemsHistogramData | null)[] | null;
}

export declare type ItemsHistogramResponse = LazyLoading extends LazyLoadingDisabled ? EagerItemsHistogramResponse : LazyItemsHistogramResponse

export declare const ItemsHistogramResponse: (new (init: ModelInit<ItemsHistogramResponse>) => ItemsHistogramResponse)

type EagerItemsHistogramData = {
  readonly name?: string | null;
  readonly itemsPicked?: number | null;
  readonly unitsPicked?: number | null;
  readonly unitsRejected?: number | null;
}

type LazyItemsHistogramData = {
  readonly name?: string | null;
  readonly itemsPicked?: number | null;
  readonly unitsPicked?: number | null;
  readonly unitsRejected?: number | null;
}

export declare type ItemsHistogramData = LazyLoading extends LazyLoadingDisabled ? EagerItemsHistogramData : LazyItemsHistogramData

export declare const ItemsHistogramData: (new (init: ModelInit<ItemsHistogramData>) => ItemsHistogramData)

type EagerHeatmapResponse = {
  readonly data?: (number | null)[] | null;
  readonly days?: (string | null)[] | null;
}

type LazyHeatmapResponse = {
  readonly data?: (number | null)[] | null;
  readonly days?: (string | null)[] | null;
}

export declare type HeatmapResponse = LazyLoading extends LazyLoadingDisabled ? EagerHeatmapResponse : LazyHeatmapResponse

export declare const HeatmapResponse: (new (init: ModelInit<HeatmapResponse>) => HeatmapResponse)

type EagerPickersData = {
  readonly picker?: string | null;
  readonly orders?: number | null;
  readonly items?: number | null;
  readonly units?: number | null;
  readonly timePerOrder?: number | null;
  readonly timePerItem?: number | null;
  readonly timePerPackingOrder?: number | null;
  readonly fillRate?: number | null;
}

type LazyPickersData = {
  readonly picker?: string | null;
  readonly orders?: number | null;
  readonly items?: number | null;
  readonly units?: number | null;
  readonly timePerOrder?: number | null;
  readonly timePerItem?: number | null;
  readonly timePerPackingOrder?: number | null;
  readonly fillRate?: number | null;
}

export declare type PickersData = LazyLoading extends LazyLoadingDisabled ? EagerPickersData : LazyPickersData

export declare const PickersData: (new (init: ModelInit<PickersData>) => PickersData)

type EagerCapacityResponse = {
  readonly estimatedCapacity?: number | null;
  readonly currentWorkload?: number | null;
  readonly ordersPerHour?: TotalPicked | null;
  readonly itemsPerHour?: TotalPicked | null;
  readonly itemsPerDay?: TotalPicked | null;
}

type LazyCapacityResponse = {
  readonly estimatedCapacity?: number | null;
  readonly currentWorkload?: number | null;
  readonly ordersPerHour?: TotalPicked | null;
  readonly itemsPerHour?: TotalPicked | null;
  readonly itemsPerDay?: TotalPicked | null;
}

export declare type CapacityResponse = LazyLoading extends LazyLoadingDisabled ? EagerCapacityResponse : LazyCapacityResponse

export declare const CapacityResponse: (new (init: ModelInit<CapacityResponse>) => CapacityResponse)

type EagerOrdersBySeller = {
  readonly seller?: string | null;
  readonly onTime?: number | null;
  readonly late?: number | null;
  readonly canceled?: number | null;
  readonly total?: number | null;
}

type LazyOrdersBySeller = {
  readonly seller?: string | null;
  readonly onTime?: number | null;
  readonly late?: number | null;
  readonly canceled?: number | null;
  readonly total?: number | null;
}

export declare type OrdersBySeller = LazyLoading extends LazyLoadingDisabled ? EagerOrdersBySeller : LazyOrdersBySeller

export declare const OrdersBySeller: (new (init: ModelInit<OrdersBySeller>) => OrdersBySeller)

type EagerStoreOrdersResponse = {
  readonly totalOrders?: TotalPicked | null;
  readonly ordersBySeller?: (OrdersBySeller | null)[] | null;
}

type LazyStoreOrdersResponse = {
  readonly totalOrders?: TotalPicked | null;
  readonly ordersBySeller?: (OrdersBySeller | null)[] | null;
}

export declare type StoreOrdersResponse = LazyLoading extends LazyLoadingDisabled ? EagerStoreOrdersResponse : LazyStoreOrdersResponse

export declare const StoreOrdersResponse: (new (init: ModelInit<StoreOrdersResponse>) => StoreOrdersResponse)

type EagerStoreDetails = {
  readonly order?: (string | null)[] | null;
  readonly items?: (string | null)[] | null;
  readonly facility?: (string | null)[] | null;
  readonly status?: (string | null)[] | null;
}

type LazyStoreDetails = {
  readonly order?: (string | null)[] | null;
  readonly items?: (string | null)[] | null;
  readonly facility?: (string | null)[] | null;
  readonly status?: (string | null)[] | null;
}

export declare type StoreDetails = LazyLoading extends LazyLoadingDisabled ? EagerStoreDetails : LazyStoreDetails

export declare const StoreDetails: (new (init: ModelInit<StoreDetails>) => StoreDetails)

type EagerStoreDetailsResponse = {
  readonly storeDetails?: (StoreDetails | null)[] | null;
  readonly generalOrders?: TotalPicked | null;
  readonly generalWorksheets?: TotalPicked | null;
  readonly ordersInPicking?: number | null;
  readonly ordersInPacking?: number | null;
  readonly ordersInShipping?: number | null;
}

type LazyStoreDetailsResponse = {
  readonly storeDetails?: (StoreDetails | null)[] | null;
  readonly generalOrders?: TotalPicked | null;
  readonly generalWorksheets?: TotalPicked | null;
  readonly ordersInPicking?: number | null;
  readonly ordersInPacking?: number | null;
  readonly ordersInShipping?: number | null;
}

export declare type StoreDetailsResponse = LazyLoading extends LazyLoadingDisabled ? EagerStoreDetailsResponse : LazyStoreDetailsResponse

export declare const StoreDetailsResponse: (new (init: ModelInit<StoreDetailsResponse>) => StoreDetailsResponse)

type EagerStorePickersResponse = {
  readonly picker?: string | null;
  readonly orders?: number | null;
  readonly online?: boolean | null;
}

type LazyStorePickersResponse = {
  readonly picker?: string | null;
  readonly orders?: number | null;
  readonly online?: boolean | null;
}

export declare type StorePickersResponse = LazyLoading extends LazyLoadingDisabled ? EagerStorePickersResponse : LazyStorePickersResponse

export declare const StorePickersResponse: (new (init: ModelInit<StorePickersResponse>) => StorePickersResponse)

type EagerRMAServiceResponse = {
  readonly serviceId?: string | null;
}

type LazyRMAServiceResponse = {
  readonly serviceId?: string | null;
}

export declare type RMAServiceResponse = LazyLoading extends LazyLoadingDisabled ? EagerRMAServiceResponse : LazyRMAServiceResponse

export declare const RMAServiceResponse: (new (init: ModelInit<RMAServiceResponse>) => RMAServiceResponse)

type EagerRMAValidatePoliciesResponse = {
  readonly orderId?: string | null;
  readonly isValidPolicy?: boolean | null;
  readonly policies?: (RMAPoliciesApplying | null)[] | null;
}

type LazyRMAValidatePoliciesResponse = {
  readonly orderId?: string | null;
  readonly isValidPolicy?: boolean | null;
  readonly policies?: (RMAPoliciesApplying | null)[] | null;
}

export declare type RMAValidatePoliciesResponse = LazyLoading extends LazyLoadingDisabled ? EagerRMAValidatePoliciesResponse : LazyRMAValidatePoliciesResponse

export declare const RMAValidatePoliciesResponse: (new (init: ModelInit<RMAValidatePoliciesResponse>) => RMAValidatePoliciesResponse)

type EagerRMAPoliciesApplying = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly description?: string | null;
}

type LazyRMAPoliciesApplying = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly description?: string | null;
}

export declare type RMAPoliciesApplying = LazyLoading extends LazyLoadingDisabled ? EagerRMAPoliciesApplying : LazyRMAPoliciesApplying

export declare const RMAPoliciesApplying: (new (init: ModelInit<RMAPoliciesApplying>) => RMAPoliciesApplying)

type EagerSuggestedItemTransfer = {
  readonly orderId?: string | null;
  readonly worksheetId?: string | null;
  readonly salesChannelId?: string | null;
  readonly accountName?: string | null;
  readonly itemToTransfer?: string | null;
  readonly quantityToTransfer?: number | null;
  readonly availableWarehouses?: (TransferWarehouse | null)[] | null;
}

type LazySuggestedItemTransfer = {
  readonly orderId?: string | null;
  readonly worksheetId?: string | null;
  readonly salesChannelId?: string | null;
  readonly accountName?: string | null;
  readonly itemToTransfer?: string | null;
  readonly quantityToTransfer?: number | null;
  readonly availableWarehouses?: (TransferWarehouse | null)[] | null;
}

export declare type SuggestedItemTransfer = LazyLoading extends LazyLoadingDisabled ? EagerSuggestedItemTransfer : LazySuggestedItemTransfer

export declare const SuggestedItemTransfer: (new (init: ModelInit<SuggestedItemTransfer>) => SuggestedItemTransfer)

type EagerTransferLocation = {
  readonly type?: string | null;
  readonly coordinates?: (number | null)[] | null;
}

type LazyTransferLocation = {
  readonly type?: string | null;
  readonly coordinates?: (number | null)[] | null;
}

export declare type TransferLocation = LazyLoading extends LazyLoadingDisabled ? EagerTransferLocation : LazyTransferLocation

export declare const TransferLocation: (new (init: ModelInit<TransferLocation>) => TransferLocation)

type EagerTransferSalesSource = {
  readonly id?: string | null;
  readonly warehouseName?: string | null;
  readonly warehouseId?: string | null;
  readonly quantity?: number | null;
  readonly hostname?: string | null;
}

type LazyTransferSalesSource = {
  readonly id?: string | null;
  readonly warehouseName?: string | null;
  readonly warehouseId?: string | null;
  readonly quantity?: number | null;
  readonly hostname?: string | null;
}

export declare type TransferSalesSource = LazyLoading extends LazyLoadingDisabled ? EagerTransferSalesSource : LazyTransferSalesSource

export declare const TransferSalesSource: (new (init: ModelInit<TransferSalesSource>) => TransferSalesSource)

type EagerTransferWarehouse = {
  readonly _id?: string | null;
  readonly account?: string | null;
  readonly location?: TransferLocation | null;
  readonly name?: string | null;
  readonly salesSources?: (TransferSalesSource | null)[] | null;
}

type LazyTransferWarehouse = {
  readonly _id?: string | null;
  readonly account?: string | null;
  readonly location?: TransferLocation | null;
  readonly name?: string | null;
  readonly salesSources?: (TransferSalesSource | null)[] | null;
}

export declare type TransferWarehouse = LazyLoading extends LazyLoadingDisabled ? EagerTransferWarehouse : LazyTransferWarehouse

export declare const TransferWarehouse: (new (init: ModelInit<TransferWarehouse>) => TransferWarehouse)

type EagerSuggestedWorksheet = {
  readonly id: string;
  readonly storeConfigId: string;
  readonly orders: (SuggestedOrder | null)[];
}

type LazySuggestedWorksheet = {
  readonly id: string;
  readonly storeConfigId: string;
  readonly orders: (SuggestedOrder | null)[];
}

export declare type SuggestedWorksheet = LazyLoading extends LazyLoadingDisabled ? EagerSuggestedWorksheet : LazySuggestedWorksheet

export declare const SuggestedWorksheet: (new (init: ModelInit<SuggestedWorksheet>) => SuggestedWorksheet)

type EagerSuggestedItem = {
  readonly id: string;
  readonly name: string;
  readonly quantity: number;
}

type LazySuggestedItem = {
  readonly id: string;
  readonly name: string;
  readonly quantity: number;
}

export declare type SuggestedItem = LazyLoading extends LazyLoadingDisabled ? EagerSuggestedItem : LazySuggestedItem

export declare const SuggestedItem: (new (init: ModelInit<SuggestedItem>) => SuggestedItem)

type EagerSuggestedOrder = {
  readonly orderId: string;
  readonly items: Item[];
}

type LazySuggestedOrder = {
  readonly orderId: string;
  readonly items: Item[];
}

export declare type SuggestedOrder = LazyLoading extends LazyLoadingDisabled ? EagerSuggestedOrder : LazySuggestedOrder

export declare const SuggestedOrder: (new (init: ModelInit<SuggestedOrder>) => SuggestedOrder)

type EagerSummaryTimeResponse = {
  readonly timeInPicking?: number | null;
  readonly timeInPacking?: number | null;
}

type LazySummaryTimeResponse = {
  readonly timeInPicking?: number | null;
  readonly timeInPacking?: number | null;
}

export declare type SummaryTimeResponse = LazyLoading extends LazyLoadingDisabled ? EagerSummaryTimeResponse : LazySummaryTimeResponse

export declare const SummaryTimeResponse: (new (init: ModelInit<SummaryTimeResponse>) => SummaryTimeResponse)

type EagerResponseClosePackage = {
  readonly data?: (Order | null)[] | null;
  readonly requestedId?: string | null;
  readonly warnings?: (WarningResponse | null)[] | null;
}

type LazyResponseClosePackage = {
  readonly data: AsyncCollection<Order>;
  readonly requestedId?: string | null;
  readonly warnings?: (WarningResponse | null)[] | null;
}

export declare type ResponseClosePackage = LazyLoading extends LazyLoadingDisabled ? EagerResponseClosePackage : LazyResponseClosePackage

export declare const ResponseClosePackage: (new (init: ModelInit<ResponseClosePackage>) => ResponseClosePackage)

type EagerWarningResponse = {
  readonly code?: string | null;
  readonly data?: string | null;
}

type LazyWarningResponse = {
  readonly code?: string | null;
  readonly data?: string | null;
}

export declare type WarningResponse = LazyLoading extends LazyLoadingDisabled ? EagerWarningResponse : LazyWarningResponse

export declare const WarningResponse: (new (init: ModelInit<WarningResponse>) => WarningResponse)

type EagerSearchOrdersResponse = {
  readonly status?: boolean | null;
  readonly message?: string | null;
}

type LazySearchOrdersResponse = {
  readonly status?: boolean | null;
  readonly message?: string | null;
}

export declare type SearchOrdersResponse = LazyLoading extends LazyLoadingDisabled ? EagerSearchOrdersResponse : LazySearchOrdersResponse

export declare const SearchOrdersResponse: (new (init: ModelInit<SearchOrdersResponse>) => SearchOrdersResponse)

type EagerPackedItemSuggest = {
  readonly itemId?: string | null;
  readonly quantity?: number | null;
}

type LazyPackedItemSuggest = {
  readonly itemId?: string | null;
  readonly quantity?: number | null;
}

export declare type PackedItemSuggest = LazyLoading extends LazyLoadingDisabled ? EagerPackedItemSuggest : LazyPackedItemSuggest

export declare const PackedItemSuggest: (new (init: ModelInit<PackedItemSuggest>) => PackedItemSuggest)

type EagerBin = {
  readonly id?: string | null;
  readonly items?: (PackedItemSuggest | null)[] | null;
}

type LazyBin = {
  readonly id?: string | null;
  readonly items?: (PackedItemSuggest | null)[] | null;
}

export declare type Bin = LazyLoading extends LazyLoadingDisabled ? EagerBin : LazyBin

export declare const Bin: (new (init: ModelInit<Bin>) => Bin)

type EagerPackedData = {
  readonly packedBins?: (Bin | null)[] | null;
  readonly remainingItems?: (string | null)[] | null;
  readonly unfitItems?: (string | null)[] | null;
}

type LazyPackedData = {
  readonly packedBins?: (Bin | null)[] | null;
  readonly remainingItems?: (string | null)[] | null;
  readonly unfitItems?: (string | null)[] | null;
}

export declare type PackedData = LazyLoading extends LazyLoadingDisabled ? EagerPackedData : LazyPackedData

export declare const PackedData: (new (init: ModelInit<PackedData>) => PackedData)

type EagergetWorksheetMetricsResponse = {
  readonly _id: string;
  readonly handledWorksheets: number;
  readonly handledOrders: number;
  readonly AvgPickingTimePerOrder: number;
  readonly AvgPickingTimePerWorksheet: number;
  readonly AvgPickingTimePerItem: number;
  readonly currentWorksheets: number;
}

type LazygetWorksheetMetricsResponse = {
  readonly _id: string;
  readonly handledWorksheets: number;
  readonly handledOrders: number;
  readonly AvgPickingTimePerOrder: number;
  readonly AvgPickingTimePerWorksheet: number;
  readonly AvgPickingTimePerItem: number;
  readonly currentWorksheets: number;
}

export declare type getWorksheetMetricsResponse = LazyLoading extends LazyLoadingDisabled ? EagergetWorksheetMetricsResponse : LazygetWorksheetMetricsResponse

export declare const getWorksheetMetricsResponse: (new (init: ModelInit<getWorksheetMetricsResponse>) => getWorksheetMetricsResponse)

type EagergetWorksheetMetricsDateResponse = {
  readonly handledWorksheets: number;
  readonly handledOrders: number;
  readonly AvgPickingTimePerOrder: number;
  readonly AvgPickingTimePerWorksheet: number;
  readonly AvgPickingTimePerItem: number;
  readonly currentWorksheets: number;
  readonly pickerId: string;
  readonly date: string;
}

type LazygetWorksheetMetricsDateResponse = {
  readonly handledWorksheets: number;
  readonly handledOrders: number;
  readonly AvgPickingTimePerOrder: number;
  readonly AvgPickingTimePerWorksheet: number;
  readonly AvgPickingTimePerItem: number;
  readonly currentWorksheets: number;
  readonly pickerId: string;
  readonly date: string;
}

export declare type getWorksheetMetricsDateResponse = LazyLoading extends LazyLoadingDisabled ? EagergetWorksheetMetricsDateResponse : LazygetWorksheetMetricsDateResponse

export declare const getWorksheetMetricsDateResponse: (new (init: ModelInit<getWorksheetMetricsDateResponse>) => getWorksheetMetricsDateResponse)

type EagerGetReturnsResponse = {
  readonly _id?: string | null;
  readonly sequence?: string | null;
  readonly orderId?: string | null;
  readonly status?: string | null;
  readonly hostname?: string | null;
  readonly storeConfigId?: string | null;
  readonly createdAt?: string | null;
  readonly pickupDate?: string | null;
  readonly orderDate?: string | null;
  readonly tags?: (string | null)[] | null;
  readonly shippingMethod?: string | null;
  readonly items?: (RMAItemResponse | null)[] | null;
}

type LazyGetReturnsResponse = {
  readonly _id?: string | null;
  readonly sequence?: string | null;
  readonly orderId?: string | null;
  readonly status?: string | null;
  readonly hostname?: string | null;
  readonly storeConfigId?: string | null;
  readonly createdAt?: string | null;
  readonly pickupDate?: string | null;
  readonly orderDate?: string | null;
  readonly tags?: (string | null)[] | null;
  readonly shippingMethod?: string | null;
  readonly items?: (RMAItemResponse | null)[] | null;
}

export declare type GetReturnsResponse = LazyLoading extends LazyLoadingDisabled ? EagerGetReturnsResponse : LazyGetReturnsResponse

export declare const GetReturnsResponse: (new (init: ModelInit<GetReturnsResponse>) => GetReturnsResponse)

type EagerListReturnsResponse = {
  readonly items?: (GetReturnsResponse | null)[] | null;
  readonly pagination?: RMAPaginationResponse | null;
}

type LazyListReturnsResponse = {
  readonly items?: (GetReturnsResponse | null)[] | null;
  readonly pagination?: RMAPaginationResponse | null;
}

export declare type ListReturnsResponse = LazyLoading extends LazyLoadingDisabled ? EagerListReturnsResponse : LazyListReturnsResponse

export declare const ListReturnsResponse: (new (init: ModelInit<ListReturnsResponse>) => ListReturnsResponse)

type EagerRMAPaginationResponse = {
  readonly total?: number | null;
  readonly from?: number | null;
  readonly to?: number | null;
}

type LazyRMAPaginationResponse = {
  readonly total?: number | null;
  readonly from?: number | null;
  readonly to?: number | null;
}

export declare type RMAPaginationResponse = LazyLoading extends LazyLoadingDisabled ? EagerRMAPaginationResponse : LazyRMAPaginationResponse

export declare const RMAPaginationResponse: (new (init: ModelInit<RMAPaginationResponse>) => RMAPaginationResponse)

type EagerRMAItemResponse = {
  readonly id: string;
  readonly itemId?: string | null;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly sellingPrice?: number | null;
  readonly currencyCode?: string | null;
  readonly status?: string | null;
  readonly typeResolution?: string | null;
  readonly quantity?: number | null;
  readonly requestType?: string | null;
}

type LazyRMAItemResponse = {
  readonly id: string;
  readonly itemId?: string | null;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly sellingPrice?: number | null;
  readonly currencyCode?: string | null;
  readonly status?: string | null;
  readonly typeResolution?: string | null;
  readonly quantity?: number | null;
  readonly requestType?: string | null;
}

export declare type RMAItemResponse = LazyLoading extends LazyLoadingDisabled ? EagerRMAItemResponse : LazyRMAItemResponse

export declare const RMAItemResponse: (new (init: ModelInit<RMAItemResponse>) => RMAItemResponse)

type EagerConfirmResolutionResponse = {
  readonly success?: boolean | null;
  readonly resolutionIds?: (string | null)[] | null;
  readonly rmaId?: string | null;
}

type LazyConfirmResolutionResponse = {
  readonly success?: boolean | null;
  readonly resolutionIds?: (string | null)[] | null;
  readonly rmaId?: string | null;
}

export declare type ConfirmResolutionResponse = LazyLoading extends LazyLoadingDisabled ? EagerConfirmResolutionResponse : LazyConfirmResolutionResponse

export declare const ConfirmResolutionResponse: (new (init: ModelInit<ConfirmResolutionResponse>) => ConfirmResolutionResponse)

type EagerRMAItemResolutionResponse = {
  readonly resolution?: RMAItemResolution | null;
  readonly success?: boolean | null;
  readonly rmaId?: string | null;
}

type LazyRMAItemResolutionResponse = {
  readonly resolution: AsyncItem<RMAItemResolution | undefined>;
  readonly success?: boolean | null;
  readonly rmaId?: string | null;
}

export declare type RMAItemResolutionResponse = LazyLoading extends LazyLoadingDisabled ? EagerRMAItemResolutionResponse : LazyRMAItemResolutionResponse

export declare const RMAItemResolutionResponse: (new (init: ModelInit<RMAItemResolutionResponse>) => RMAItemResolutionResponse)

type EagerConfirmDeliveryClientResponse = {
  readonly rmaId?: string | null;
  readonly success?: boolean | null;
}

type LazyConfirmDeliveryClientResponse = {
  readonly rmaId?: string | null;
  readonly success?: boolean | null;
}

export declare type ConfirmDeliveryClientResponse = LazyLoading extends LazyLoadingDisabled ? EagerConfirmDeliveryClientResponse : LazyConfirmDeliveryClientResponse

export declare const ConfirmDeliveryClientResponse: (new (init: ModelInit<ConfirmDeliveryClientResponse>) => ConfirmDeliveryClientResponse)

type EagerCouriersResponse = {
  readonly message?: string | null;
  readonly status?: number | null;
  readonly data?: (CourierDetail | null)[] | null;
}

type LazyCouriersResponse = {
  readonly message?: string | null;
  readonly status?: number | null;
  readonly data?: (CourierDetail | null)[] | null;
}

export declare type CouriersResponse = LazyLoading extends LazyLoadingDisabled ? EagerCouriersResponse : LazyCouriersResponse

export declare const CouriersResponse: (new (init: ModelInit<CouriersResponse>) => CouriersResponse)

type EagerCourierDetail = {
  readonly fleet_id?: number | null;
  readonly device_type?: number | null;
  readonly total_rating?: number | null;
  readonly total_rated_tasks?: number | null;
  readonly is_active?: number | null;
  readonly has_gps_accuracy?: number | null;
  readonly username?: string | null;
  readonly name?: string | null;
  readonly login_id?: string | null;
  readonly transport_type?: number | null;
  readonly transport_desc?: string | null;
  readonly license?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly battery_level?: number | null;
  readonly registration_status?: number | null;
  readonly latitude?: string | null;
  readonly is_available?: number | null;
  readonly longitude?: string | null;
  readonly tags?: string | null;
  readonly fleet_thumb_image?: string | null;
  readonly fleet_image?: string | null;
  readonly status?: number | null;
  readonly timezone?: string | null;
  readonly fleet_type?: number | null;
  readonly block_reason?: string | null;
  readonly team_id?: number | null;
}

type LazyCourierDetail = {
  readonly fleet_id?: number | null;
  readonly device_type?: number | null;
  readonly total_rating?: number | null;
  readonly total_rated_tasks?: number | null;
  readonly is_active?: number | null;
  readonly has_gps_accuracy?: number | null;
  readonly username?: string | null;
  readonly name?: string | null;
  readonly login_id?: string | null;
  readonly transport_type?: number | null;
  readonly transport_desc?: string | null;
  readonly license?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly battery_level?: number | null;
  readonly registration_status?: number | null;
  readonly latitude?: string | null;
  readonly is_available?: number | null;
  readonly longitude?: string | null;
  readonly tags?: string | null;
  readonly fleet_thumb_image?: string | null;
  readonly fleet_image?: string | null;
  readonly status?: number | null;
  readonly timezone?: string | null;
  readonly fleet_type?: number | null;
  readonly block_reason?: string | null;
  readonly team_id?: number | null;
}

export declare type CourierDetail = LazyLoading extends LazyLoadingDisabled ? EagerCourierDetail : LazyCourierDetail

export declare const CourierDetail: (new (init: ModelInit<CourierDetail>) => CourierDetail)

type EagerCourierResponse = {
  readonly message?: string | null;
  readonly status?: number | null;
  readonly data?: DataCourierResponse | null;
}

type LazyCourierResponse = {
  readonly message?: string | null;
  readonly status?: number | null;
  readonly data?: DataCourierResponse | null;
}

export declare type CourierResponse = LazyLoading extends LazyLoadingDisabled ? EagerCourierResponse : LazyCourierResponse

export declare const CourierResponse: (new (init: ModelInit<CourierResponse>) => CourierResponse)

type EagerDataCourierResponse = {
  readonly fleet_details?: (DetailDataCourierResponse | null)[] | null;
}

type LazyDataCourierResponse = {
  readonly fleet_details?: (DetailDataCourierResponse | null)[] | null;
}

export declare type DataCourierResponse = LazyLoading extends LazyLoadingDisabled ? EagerDataCourierResponse : LazyDataCourierResponse

export declare const DataCourierResponse: (new (init: ModelInit<DataCourierResponse>) => DataCourierResponse)

type EagerDetailDataCourierResponse = {
  readonly fleet_id?: number | null;
  readonly is_deleted?: number | null;
  readonly dispatcher_id?: number | null;
  readonly email?: string | null;
  readonly access_token?: string | null;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly login_id?: string | null;
  readonly tags?: string | null;
  readonly username?: string | null;
  readonly phone?: string | null;
  readonly latitude?: string | null;
  readonly longitude?: string | null;
  readonly location_update_datetime?: string | null;
  readonly last_updated_local_time?: string | null;
  readonly fleet_image?: string | null;
  readonly fleet_thumb_image?: string | null;
  readonly device_type?: number | null;
  readonly device_token?: string | null;
  readonly voice_token?: string | null;
  readonly device_os?: string | null;
  readonly device_desc?: string | null;
  readonly battery_level?: number | null;
  readonly has_gps_accuracy?: number | null;
  readonly has_network?: number | null;
  readonly has_mock_loc?: number | null;
  readonly store_version?: string | null;
  readonly imei_number?: string | null;
  readonly app_versioncode?: string | null;
  readonly verification_token?: string | null;
  readonly registration_status?: number | null;
  readonly transport_type?: number | null;
  readonly transport_desc?: string | null;
  readonly license?: string | null;
  readonly color?: string | null;
  readonly user_id?: number | null;
  readonly is_active?: number | null;
  readonly is_available?: number | null;
  readonly status?: number | null;
  readonly total_rating?: number | null;
  readonly total_rated_tasks?: number | null;
  readonly noti_tone?: string | null;
  readonly creation_datetime?: string | null;
  readonly updation_datetime?: string | null;
  readonly last_login_datetime?: string | null;
  readonly timezone?: string | null;
  readonly external_fleet_id?: string | null;
  readonly bearing?: string | null;
  readonly terms_and_conditions?: number | null;
  readonly is_first_time_login?: number | null;
  readonly monibyte_id?: string | null;
  readonly block_reason?: string | null;
  readonly gps_device_id?: string | null;
  readonly fleet_type?: number | null;
  readonly is_blocked_by_subscription?: number | null;
  readonly fuel_level?: number | null;
  readonly vehicle_calibration_id?: number | null;
  readonly lang?: string | null;
  readonly total_capacity?: number | null;
  readonly available_capacity?: number | null;
}

type LazyDetailDataCourierResponse = {
  readonly fleet_id?: number | null;
  readonly is_deleted?: number | null;
  readonly dispatcher_id?: number | null;
  readonly email?: string | null;
  readonly access_token?: string | null;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly login_id?: string | null;
  readonly tags?: string | null;
  readonly username?: string | null;
  readonly phone?: string | null;
  readonly latitude?: string | null;
  readonly longitude?: string | null;
  readonly location_update_datetime?: string | null;
  readonly last_updated_local_time?: string | null;
  readonly fleet_image?: string | null;
  readonly fleet_thumb_image?: string | null;
  readonly device_type?: number | null;
  readonly device_token?: string | null;
  readonly voice_token?: string | null;
  readonly device_os?: string | null;
  readonly device_desc?: string | null;
  readonly battery_level?: number | null;
  readonly has_gps_accuracy?: number | null;
  readonly has_network?: number | null;
  readonly has_mock_loc?: number | null;
  readonly store_version?: string | null;
  readonly imei_number?: string | null;
  readonly app_versioncode?: string | null;
  readonly verification_token?: string | null;
  readonly registration_status?: number | null;
  readonly transport_type?: number | null;
  readonly transport_desc?: string | null;
  readonly license?: string | null;
  readonly color?: string | null;
  readonly user_id?: number | null;
  readonly is_active?: number | null;
  readonly is_available?: number | null;
  readonly status?: number | null;
  readonly total_rating?: number | null;
  readonly total_rated_tasks?: number | null;
  readonly noti_tone?: string | null;
  readonly creation_datetime?: string | null;
  readonly updation_datetime?: string | null;
  readonly last_login_datetime?: string | null;
  readonly timezone?: string | null;
  readonly external_fleet_id?: string | null;
  readonly bearing?: string | null;
  readonly terms_and_conditions?: number | null;
  readonly is_first_time_login?: number | null;
  readonly monibyte_id?: string | null;
  readonly block_reason?: string | null;
  readonly gps_device_id?: string | null;
  readonly fleet_type?: number | null;
  readonly is_blocked_by_subscription?: number | null;
  readonly fuel_level?: number | null;
  readonly vehicle_calibration_id?: number | null;
  readonly lang?: string | null;
  readonly total_capacity?: number | null;
  readonly available_capacity?: number | null;
}

export declare type DetailDataCourierResponse = LazyLoading extends LazyLoadingDisabled ? EagerDetailDataCourierResponse : LazyDetailDataCourierResponse

export declare const DetailDataCourierResponse: (new (init: ModelInit<DetailDataCourierResponse>) => DetailDataCourierResponse)

type EagerCourierLocationResponse = {
  readonly message?: string | null;
  readonly status?: number | null;
  readonly data?: (CourierLocation | null)[] | null;
}

type LazyCourierLocationResponse = {
  readonly message?: string | null;
  readonly status?: number | null;
  readonly data?: (CourierLocation | null)[] | null;
}

export declare type CourierLocationResponse = LazyLoading extends LazyLoadingDisabled ? EagerCourierLocationResponse : LazyCourierLocationResponse

export declare const CourierLocationResponse: (new (init: ModelInit<CourierLocationResponse>) => CourierLocationResponse)

type EagerCourierLocation = {
  readonly latitude?: string | null;
  readonly longitude?: string | null;
}

type LazyCourierLocation = {
  readonly latitude?: string | null;
  readonly longitude?: string | null;
}

export declare type CourierLocation = LazyLoading extends LazyLoadingDisabled ? EagerCourierLocation : LazyCourierLocation

export declare const CourierLocation: (new (init: ModelInit<CourierLocation>) => CourierLocation)

type EagerResponseGetCourierTeams = {
  readonly message?: string | null;
  readonly status?: number | null;
  readonly data?: (CourierTeamData | null)[] | null;
}

type LazyResponseGetCourierTeams = {
  readonly message?: string | null;
  readonly status?: number | null;
  readonly data?: (CourierTeamData | null)[] | null;
}

export declare type ResponseGetCourierTeams = LazyLoading extends LazyLoadingDisabled ? EagerResponseGetCourierTeams : LazyResponseGetCourierTeams

export declare const ResponseGetCourierTeams: (new (init: ModelInit<ResponseGetCourierTeams>) => ResponseGetCourierTeams)

type EagerResponseGetCourierTasks = {
  readonly message?: string | null;
  readonly status?: number | null;
  readonly data?: (CourierTasksData | null)[] | null;
}

type LazyResponseGetCourierTasks = {
  readonly message?: string | null;
  readonly status?: number | null;
  readonly data?: (CourierTasksData | null)[] | null;
}

export declare type ResponseGetCourierTasks = LazyLoading extends LazyLoadingDisabled ? EagerResponseGetCourierTasks : LazyResponseGetCourierTasks

export declare const ResponseGetCourierTasks: (new (init: ModelInit<ResponseGetCourierTasks>) => ResponseGetCourierTasks)

type EagerCourierTasksData = {
  readonly fleet_id: string;
  readonly order_id?: string | null;
  readonly user_id?: number | null;
  readonly job_pickup_name?: string | null;
  readonly job_latitude?: string | null;
  readonly job_longitude?: string | null;
  readonly job_address?: string | null;
  readonly job_status?: number | null;
  readonly has_pickup?: number | null;
  readonly pickup_delivery_relationship?: string | null;
  readonly completed_by_admin?: number | null;
  readonly job_pickup_datetime?: string | null;
  readonly job_type?: number | null;
  readonly job_delivery_datetime?: string | null;
  readonly job_pickup_latitude?: string | null;
  readonly job_pickup_longitude?: string | null;
  readonly job_pickup_address?: string | null;
  readonly customer_id?: number | null;
  readonly customer_username?: string | null;
  readonly customer_phone?: string | null;
  readonly customer_email?: string | null;
  readonly started_datetime?: string | null;
  readonly completed_datetime?: string | null;
  readonly acknowledged_datetime?: string | null;
  readonly arrived_datetime?: string | null;
  readonly total_distance_travelled?: number | null;
  readonly team_id?: number | null;
  readonly fleet_rating?: number | null;
}

type LazyCourierTasksData = {
  readonly fleet_id: string;
  readonly order_id?: string | null;
  readonly user_id?: number | null;
  readonly job_pickup_name?: string | null;
  readonly job_latitude?: string | null;
  readonly job_longitude?: string | null;
  readonly job_address?: string | null;
  readonly job_status?: number | null;
  readonly has_pickup?: number | null;
  readonly pickup_delivery_relationship?: string | null;
  readonly completed_by_admin?: number | null;
  readonly job_pickup_datetime?: string | null;
  readonly job_type?: number | null;
  readonly job_delivery_datetime?: string | null;
  readonly job_pickup_latitude?: string | null;
  readonly job_pickup_longitude?: string | null;
  readonly job_pickup_address?: string | null;
  readonly customer_id?: number | null;
  readonly customer_username?: string | null;
  readonly customer_phone?: string | null;
  readonly customer_email?: string | null;
  readonly started_datetime?: string | null;
  readonly completed_datetime?: string | null;
  readonly acknowledged_datetime?: string | null;
  readonly arrived_datetime?: string | null;
  readonly total_distance_travelled?: number | null;
  readonly team_id?: number | null;
  readonly fleet_rating?: number | null;
}

export declare type CourierTasksData = LazyLoading extends LazyLoadingDisabled ? EagerCourierTasksData : LazyCourierTasksData

export declare const CourierTasksData: (new (init: ModelInit<CourierTasksData>) => CourierTasksData)

type EagerCourierTeamData = {
  readonly tags?: string | null;
  readonly battery_usage?: number | null;
  readonly team_id?: number | null;
  readonly team_name?: string | null;
  readonly address?: string | null;
  readonly latitude?: string | null;
  readonly longitude?: string | null;
}

type LazyCourierTeamData = {
  readonly tags?: string | null;
  readonly battery_usage?: number | null;
  readonly team_id?: number | null;
  readonly team_name?: string | null;
  readonly address?: string | null;
  readonly latitude?: string | null;
  readonly longitude?: string | null;
}

export declare type CourierTeamData = LazyLoading extends LazyLoadingDisabled ? EagerCourierTeamData : LazyCourierTeamData

export declare const CourierTeamData: (new (init: ModelInit<CourierTeamData>) => CourierTeamData)

type EagerResponseGetCourierDetail = {
  readonly message?: string | null;
  readonly status?: number | null;
  readonly data?: (alternateCourierDetail | null)[] | null;
}

type LazyResponseGetCourierDetail = {
  readonly message?: string | null;
  readonly status?: number | null;
  readonly data?: (alternateCourierDetail | null)[] | null;
}

export declare type ResponseGetCourierDetail = LazyLoading extends LazyLoadingDisabled ? EagerResponseGetCourierDetail : LazyResponseGetCourierDetail

export declare const ResponseGetCourierDetail: (new (init: ModelInit<ResponseGetCourierDetail>) => ResponseGetCourierDetail)

type EageralternateCourierDetail = {
  readonly fleet_id?: number | null;
  readonly gps_device_id?: string | null;
  readonly fuel_level?: number | null;
  readonly monibyte_id?: string | null;
  readonly fleet_name?: string | null;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly login_id?: string | null;
  readonly transport_type?: string | null;
  readonly transport_desc?: string | null;
  readonly license?: string | null;
  readonly color?: string | null;
  readonly latitude?: string | null;
  readonly longitude?: string | null;
  readonly username?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly registration_status?: number | null;
  readonly is_active?: number | null;
  readonly is_available?: number | null;
  readonly fleet_image?: string | null;
  readonly fleet_thumb_image?: string | null;
  readonly status?: number | null;
  readonly tags?: string | null;
  readonly fleet_type?: number | null;
  readonly view_status?: number | null;
  readonly edit_status?: number | null;
  readonly teams?: (courierDetailTeam | null)[] | null;
  readonly rule_id?: string | null;
  readonly rule_name?: string | null;
  readonly battery_level?: number | null;
  readonly home_address?: string | null;
  readonly home_latitude?: string | null;
  readonly home_longitude?: string | null;
  readonly capacity?: number | null;
  readonly available_capacity?: number | null;
}

type LazyalternateCourierDetail = {
  readonly fleet_id?: number | null;
  readonly gps_device_id?: string | null;
  readonly fuel_level?: number | null;
  readonly monibyte_id?: string | null;
  readonly fleet_name?: string | null;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly login_id?: string | null;
  readonly transport_type?: string | null;
  readonly transport_desc?: string | null;
  readonly license?: string | null;
  readonly color?: string | null;
  readonly latitude?: string | null;
  readonly longitude?: string | null;
  readonly username?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly registration_status?: number | null;
  readonly is_active?: number | null;
  readonly is_available?: number | null;
  readonly fleet_image?: string | null;
  readonly fleet_thumb_image?: string | null;
  readonly status?: number | null;
  readonly tags?: string | null;
  readonly fleet_type?: number | null;
  readonly view_status?: number | null;
  readonly edit_status?: number | null;
  readonly teams?: (courierDetailTeam | null)[] | null;
  readonly rule_id?: string | null;
  readonly rule_name?: string | null;
  readonly battery_level?: number | null;
  readonly home_address?: string | null;
  readonly home_latitude?: string | null;
  readonly home_longitude?: string | null;
  readonly capacity?: number | null;
  readonly available_capacity?: number | null;
}

export declare type alternateCourierDetail = LazyLoading extends LazyLoadingDisabled ? EageralternateCourierDetail : LazyalternateCourierDetail

export declare const alternateCourierDetail: (new (init: ModelInit<alternateCourierDetail>) => alternateCourierDetail)

type EagercourierDetailTeam = {
  readonly team_id?: string | null;
  readonly team_name?: string | null;
}

type LazycourierDetailTeam = {
  readonly team_id?: string | null;
  readonly team_name?: string | null;
}

export declare type courierDetailTeam = LazyLoading extends LazyLoadingDisabled ? EagercourierDetailTeam : LazycourierDetailTeam

export declare const courierDetailTeam: (new (init: ModelInit<courierDetailTeam>) => courierDetailTeam)

type EagerResponseUpdateAgent = {
  readonly message?: string | null;
  readonly status?: number | null;
}

type LazyResponseUpdateAgent = {
  readonly message?: string | null;
  readonly status?: number | null;
}

export declare type ResponseUpdateAgent = LazyLoading extends LazyLoadingDisabled ? EagerResponseUpdateAgent : LazyResponseUpdateAgent

export declare const ResponseUpdateAgent: (new (init: ModelInit<ResponseUpdateAgent>) => ResponseUpdateAgent)

type EagerResponseSendNotificationAgent = {
  readonly message?: string | null;
  readonly status?: number | null;
  readonly data?: DataSendNotification | null;
}

type LazyResponseSendNotificationAgent = {
  readonly message?: string | null;
  readonly status?: number | null;
  readonly data?: DataSendNotification | null;
}

export declare type ResponseSendNotificationAgent = LazyLoading extends LazyLoadingDisabled ? EagerResponseSendNotificationAgent : LazyResponseSendNotificationAgent

export declare const ResponseSendNotificationAgent: (new (init: ModelInit<ResponseSendNotificationAgent>) => ResponseSendNotificationAgent)

type EagerDataSendNotification = {
  readonly total_fleets?: number | null;
  readonly valid_fleets?: number | null;
  readonly logged_in_fleets?: number | null;
  readonly logged_in_fleet_ids?: (number | null)[] | null;
  readonly push_limit_reached_fleets?: (string | null)[] | null;
  readonly duplicate_push_fleets?: (string | null)[] | null;
}

type LazyDataSendNotification = {
  readonly total_fleets?: number | null;
  readonly valid_fleets?: number | null;
  readonly logged_in_fleets?: number | null;
  readonly logged_in_fleet_ids?: (number | null)[] | null;
  readonly push_limit_reached_fleets?: (string | null)[] | null;
  readonly duplicate_push_fleets?: (string | null)[] | null;
}

export declare type DataSendNotification = LazyLoading extends LazyLoadingDisabled ? EagerDataSendNotification : LazyDataSendNotification

export declare const DataSendNotification: (new (init: ModelInit<DataSendNotification>) => DataSendNotification)

type EagerResponseAddAgent = {
  readonly message?: string | null;
  readonly status?: number | null;
  readonly data?: ResponseAddAgentData | null;
}

type LazyResponseAddAgent = {
  readonly message?: string | null;
  readonly status?: number | null;
  readonly data?: ResponseAddAgentData | null;
}

export declare type ResponseAddAgent = LazyLoading extends LazyLoadingDisabled ? EagerResponseAddAgent : LazyResponseAddAgent

export declare const ResponseAddAgent: (new (init: ModelInit<ResponseAddAgent>) => ResponseAddAgent)

type EagerResponseAssignCourier = {
  readonly message?: string | null;
  readonly status?: number | null;
}

type LazyResponseAssignCourier = {
  readonly message?: string | null;
  readonly status?: number | null;
}

export declare type ResponseAssignCourier = LazyLoading extends LazyLoadingDisabled ? EagerResponseAssignCourier : LazyResponseAssignCourier

export declare const ResponseAssignCourier: (new (init: ModelInit<ResponseAssignCourier>) => ResponseAssignCourier)

type EagerResponseAddAgentData = {
  readonly fleet_id?: number | null;
  readonly status?: number | null;
}

type LazyResponseAddAgentData = {
  readonly fleet_id?: number | null;
  readonly status?: number | null;
}

export declare type ResponseAddAgentData = LazyLoading extends LazyLoadingDisabled ? EagerResponseAddAgentData : LazyResponseAddAgentData

export declare const ResponseAddAgentData: (new (init: ModelInit<ResponseAddAgentData>) => ResponseAddAgentData)

type EagerResponseGetCustomFields = {
  readonly message?: string | null;
  readonly status?: number | null;
  readonly data?: (UserLayoutFields | null)[] | null;
}

type LazyResponseGetCustomFields = {
  readonly message?: string | null;
  readonly status?: number | null;
  readonly data?: (UserLayoutFields | null)[] | null;
}

export declare type ResponseGetCustomFields = LazyLoading extends LazyLoadingDisabled ? EagerResponseGetCustomFields : LazyResponseGetCustomFields

export declare const ResponseGetCustomFields: (new (init: ModelInit<ResponseGetCustomFields>) => ResponseGetCustomFields)

type EagerAppOptionalFields = {
  readonly label?: string | null;
  readonly value?: string | null;
  readonly required?: number | null;
}

type LazyAppOptionalFields = {
  readonly label?: string | null;
  readonly value?: string | null;
  readonly required?: number | null;
}

export declare type AppOptionalFields = LazyLoading extends LazyLoadingDisabled ? EagerAppOptionalFields : LazyAppOptionalFields

export declare const AppOptionalFields: (new (init: ModelInit<AppOptionalFields>) => AppOptionalFields)

type EagerUserTemplateFields = {
  readonly app_optional_fields?: (AppOptionalFields | null)[] | null;
  readonly custom_field?: string | null;
}

type LazyUserTemplateFields = {
  readonly app_optional_fields?: (AppOptionalFields | null)[] | null;
  readonly custom_field?: string | null;
}

export declare type UserTemplateFields = LazyLoading extends LazyLoadingDisabled ? EagerUserTemplateFields : LazyUserTemplateFields

export declare const UserTemplateFields: (new (init: ModelInit<UserTemplateFields>) => UserTemplateFields)

type EagerUserLayoutFields = {
  readonly fields?: UserTemplateFields | null;
  readonly layout_type?: number | null;
  readonly trackingImage?: string | null;
  readonly userEmails?: (string | null)[] | null;
  readonly user_id?: number | null;
  readonly _id?: string | null;
}

type LazyUserLayoutFields = {
  readonly fields?: UserTemplateFields | null;
  readonly layout_type?: number | null;
  readonly trackingImage?: string | null;
  readonly userEmails?: (string | null)[] | null;
  readonly user_id?: number | null;
  readonly _id?: string | null;
}

export declare type UserLayoutFields = LazyLoading extends LazyLoadingDisabled ? EagerUserLayoutFields : LazyUserLayoutFields

export declare const UserLayoutFields: (new (init: ModelInit<UserLayoutFields>) => UserLayoutFields)

type EagerResponseCreateCustomTemplate = {
  readonly message?: string | null;
  readonly status?: number | null;
}

type LazyResponseCreateCustomTemplate = {
  readonly message?: string | null;
  readonly status?: number | null;
}

export declare type ResponseCreateCustomTemplate = LazyLoading extends LazyLoadingDisabled ? EagerResponseCreateCustomTemplate : LazyResponseCreateCustomTemplate

export declare const ResponseCreateCustomTemplate: (new (init: ModelInit<ResponseCreateCustomTemplate>) => ResponseCreateCustomTemplate)

type EagerItemsByTransfer = {
  readonly itemId?: string | null;
  readonly quantity?: number | null;
  readonly itemName?: string | null;
  readonly image?: string | null;
  readonly isWeighable?: boolean | null;
  readonly unitMultiplier?: number | null;
  readonly unitOfMeasurement?: string | null;
}

type LazyItemsByTransfer = {
  readonly itemId?: string | null;
  readonly quantity?: number | null;
  readonly itemName?: string | null;
  readonly image?: string | null;
  readonly isWeighable?: boolean | null;
  readonly unitMultiplier?: number | null;
  readonly unitOfMeasurement?: string | null;
}

export declare type ItemsByTransfer = LazyLoading extends LazyLoadingDisabled ? EagerItemsByTransfer : LazyItemsByTransfer

export declare const ItemsByTransfer: (new (init: ModelInit<ItemsByTransfer>) => ItemsByTransfer)

type EagerItemNotes = {
  readonly type?: ItemNoteType | keyof typeof ItemNoteType | null;
  readonly value?: string | null;
  readonly createdAt?: string | null;
}

type LazyItemNotes = {
  readonly type?: ItemNoteType | keyof typeof ItemNoteType | null;
  readonly value?: string | null;
  readonly createdAt?: string | null;
}

export declare type ItemNotes = LazyLoading extends LazyLoadingDisabled ? EagerItemNotes : LazyItemNotes

export declare const ItemNotes: (new (init: ModelInit<ItemNotes>) => ItemNotes)

type EagerPickingAudit = {
  readonly quantity: number;
  readonly unitMultiplier: number;
  readonly unitOfMeasure: UnitOfMeasure | keyof typeof UnitOfMeasure;
  readonly listPrice?: number | null;
  readonly sellingPrice?: number | null;
  readonly audit?: (Reason | null)[] | null;
}

type LazyPickingAudit = {
  readonly quantity: number;
  readonly unitMultiplier: number;
  readonly unitOfMeasure: UnitOfMeasure | keyof typeof UnitOfMeasure;
  readonly listPrice?: number | null;
  readonly sellingPrice?: number | null;
  readonly audit?: (Reason | null)[] | null;
}

export declare type PickingAudit = LazyLoading extends LazyLoadingDisabled ? EagerPickingAudit : LazyPickingAudit

export declare const PickingAudit: (new (init: ModelInit<PickingAudit>) => PickingAudit)

type EagerReplacementAudit = {
  readonly quantity?: number | null;
  readonly replacements?: (ReplacementAuditInfo | null)[] | null;
}

type LazyReplacementAudit = {
  readonly quantity?: number | null;
  readonly replacements?: (ReplacementAuditInfo | null)[] | null;
}

export declare type ReplacementAudit = LazyLoading extends LazyLoadingDisabled ? EagerReplacementAudit : LazyReplacementAudit

export declare const ReplacementAudit: (new (init: ModelInit<ReplacementAudit>) => ReplacementAudit)

type EagerReplacementAuditInfo = {
  readonly replacedBy?: string | null;
  readonly quantity?: number | null;
  readonly unitMultiplier?: number | null;
  readonly listPrice?: number | null;
  readonly sellingPrice?: number | null;
  readonly audit?: (string | null)[] | null;
}

type LazyReplacementAuditInfo = {
  readonly replacedBy?: string | null;
  readonly quantity?: number | null;
  readonly unitMultiplier?: number | null;
  readonly listPrice?: number | null;
  readonly sellingPrice?: number | null;
  readonly audit?: (string | null)[] | null;
}

export declare type ReplacementAuditInfo = LazyLoading extends LazyLoadingDisabled ? EagerReplacementAuditInfo : LazyReplacementAuditInfo

export declare const ReplacementAuditInfo: (new (init: ModelInit<ReplacementAuditInfo>) => ReplacementAuditInfo)

type EagerPickingDetail = {
  readonly added?: PickingAudit | null;
  readonly picked?: PickingAudit | null;
  readonly replaced?: ReplacementAudit | null;
  readonly rejected?: PickingAudit | null;
  readonly transferred?: TransferAudit | null;
}

type LazyPickingDetail = {
  readonly added?: PickingAudit | null;
  readonly picked?: PickingAudit | null;
  readonly replaced?: ReplacementAudit | null;
  readonly rejected?: PickingAudit | null;
  readonly transferred?: TransferAudit | null;
}

export declare type PickingDetail = LazyLoading extends LazyLoadingDisabled ? EagerPickingDetail : LazyPickingDetail

export declare const PickingDetail: (new (init: ModelInit<PickingDetail>) => PickingDetail)

type EagerTransferAudit = {
  readonly quantity?: number | null;
  readonly transferredTo?: string | null;
  readonly status?: ItemTransferDetailStatus | keyof typeof ItemTransferDetailStatus | null;
  readonly audit?: (string | null)[] | null;
}

type LazyTransferAudit = {
  readonly quantity?: number | null;
  readonly transferredTo?: string | null;
  readonly status?: ItemTransferDetailStatus | keyof typeof ItemTransferDetailStatus | null;
  readonly audit?: (string | null)[] | null;
}

export declare type TransferAudit = LazyLoading extends LazyLoadingDisabled ? EagerTransferAudit : LazyTransferAudit

export declare const TransferAudit: (new (init: ModelInit<TransferAudit>) => TransferAudit)

type EagerPackingDetail = {
  readonly packageID?: string | null;
  readonly unitMultiplier?: number | null;
  readonly listPrice?: number | null;
  readonly sellingPrice?: number | null;
  readonly packedQuantity?: number | null;
  readonly packageLocation?: string | null;
}

type LazyPackingDetail = {
  readonly packageID?: string | null;
  readonly unitMultiplier?: number | null;
  readonly listPrice?: number | null;
  readonly sellingPrice?: number | null;
  readonly packedQuantity?: number | null;
  readonly packageLocation?: string | null;
}

export declare type PackingDetail = LazyLoading extends LazyLoadingDisabled ? EagerPackingDetail : LazyPackingDetail

export declare const PackingDetail: (new (init: ModelInit<PackingDetail>) => PackingDetail)

type EagerItemTransferDetail = {
  readonly rejectedWorksheetId?: string | null;
  readonly transferredWorksheetId?: string | null;
  readonly quantity?: number | null;
  readonly status?: ItemTransferDetailStatus | keyof typeof ItemTransferDetailStatus | null;
}

type LazyItemTransferDetail = {
  readonly rejectedWorksheetId?: string | null;
  readonly transferredWorksheetId?: string | null;
  readonly quantity?: number | null;
  readonly status?: ItemTransferDetailStatus | keyof typeof ItemTransferDetailStatus | null;
}

export declare type ItemTransferDetail = LazyLoading extends LazyLoadingDisabled ? EagerItemTransferDetail : LazyItemTransferDetail

export declare const ItemTransferDetail: (new (init: ModelInit<ItemTransferDetail>) => ItemTransferDetail)

type EagerItemReturns = {
  readonly id?: string | null;
  readonly stockedQuantity?: number | null;
  readonly quantity?: number | null;
}

type LazyItemReturns = {
  readonly id?: string | null;
  readonly stockedQuantity?: number | null;
  readonly quantity?: number | null;
}

export declare type ItemReturns = LazyLoading extends LazyLoadingDisabled ? EagerItemReturns : LazyItemReturns

export declare const ItemReturns: (new (init: ModelInit<ItemReturns>) => ItemReturns)

type EagerItemInvoice = {
  readonly id?: string | null;
  readonly quantity?: number | null;
}

type LazyItemInvoice = {
  readonly id?: string | null;
  readonly quantity?: number | null;
}

export declare type ItemInvoice = LazyLoading extends LazyLoadingDisabled ? EagerItemInvoice : LazyItemInvoice

export declare const ItemInvoice: (new (init: ModelInit<ItemInvoice>) => ItemInvoice)

type EagerItemPickingOptions = {
  readonly onNotFound?: NotFoundOptions | keyof typeof NotFoundOptions | null;
  readonly alternateOptions?: (string | null)[] | null;
}

type LazyItemPickingOptions = {
  readonly onNotFound?: NotFoundOptions | keyof typeof NotFoundOptions | null;
  readonly alternateOptions?: (string | null)[] | null;
}

export declare type ItemPickingOptions = LazyLoading extends LazyLoadingDisabled ? EagerItemPickingOptions : LazyItemPickingOptions

export declare const ItemPickingOptions: (new (init: ModelInit<ItemPickingOptions>) => ItemPickingOptions)

type EagerTaxonomy = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly children?: (TaxonomyChild | null)[] | null;
}

type LazyTaxonomy = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly children?: (TaxonomyChild | null)[] | null;
}

export declare type Taxonomy = LazyLoading extends LazyLoadingDisabled ? EagerTaxonomy : LazyTaxonomy

export declare const Taxonomy: (new (init: ModelInit<Taxonomy>) => Taxonomy)

type EagerTaxonomyChild = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly children?: (TaxonomyChild2 | null)[] | null;
}

type LazyTaxonomyChild = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly children?: (TaxonomyChild2 | null)[] | null;
}

export declare type TaxonomyChild = LazyLoading extends LazyLoadingDisabled ? EagerTaxonomyChild : LazyTaxonomyChild

export declare const TaxonomyChild: (new (init: ModelInit<TaxonomyChild>) => TaxonomyChild)

type EagerTaxonomyChild2 = {
  readonly id?: string | null;
  readonly name?: string | null;
}

type LazyTaxonomyChild2 = {
  readonly id?: string | null;
  readonly name?: string | null;
}

export declare type TaxonomyChild2 = LazyLoading extends LazyLoadingDisabled ? EagerTaxonomyChild2 : LazyTaxonomyChild2

export declare const TaxonomyChild2: (new (init: ModelInit<TaxonomyChild2>) => TaxonomyChild2)

type EagerDimensions = {
  readonly width?: number | null;
  readonly height?: number | null;
  readonly length?: number | null;
  readonly weight?: number | null;
  readonly cubicweight?: number | null;
}

type LazyDimensions = {
  readonly width?: number | null;
  readonly height?: number | null;
  readonly length?: number | null;
  readonly weight?: number | null;
  readonly cubicweight?: number | null;
}

export declare type Dimensions = LazyLoading extends LazyLoadingDisabled ? EagerDimensions : LazyDimensions

export declare const Dimensions: (new (init: ModelInit<Dimensions>) => Dimensions)

type EagerItemFacility = {
  readonly facilityId?: string | null;
  readonly quantity?: number | null;
  readonly isAssigned?: boolean | null;
}

type LazyItemFacility = {
  readonly facilityId?: string | null;
  readonly quantity?: number | null;
  readonly isAssigned?: boolean | null;
}

export declare type ItemFacility = LazyLoading extends LazyLoadingDisabled ? EagerItemFacility : LazyItemFacility

export declare const ItemFacility: (new (init: ModelInit<ItemFacility>) => ItemFacility)

type EagerFacilityInfo = {
  readonly id?: string | null;
  readonly name?: string | null;
}

type LazyFacilityInfo = {
  readonly id?: string | null;
  readonly name?: string | null;
}

export declare type FacilityInfo = LazyLoading extends LazyLoadingDisabled ? EagerFacilityInfo : LazyFacilityInfo

export declare const FacilityInfo: (new (init: ModelInit<FacilityInfo>) => FacilityInfo)

type EagerLogOpenSearch = {
  readonly id: string;
  readonly dateRequest: string;
  readonly body: string;
  readonly response: string;
  readonly tag: string;
}

type LazyLogOpenSearch = {
  readonly id: string;
  readonly dateRequest: string;
  readonly body: string;
  readonly response: string;
  readonly tag: string;
}

export declare type LogOpenSearch = LazyLoading extends LazyLoadingDisabled ? EagerLogOpenSearch : LazyLogOpenSearch

export declare const LogOpenSearch: (new (init: ModelInit<LogOpenSearch>) => LogOpenSearch)

type EagerOrderNotes = {
  readonly type?: OrderNoteType | keyof typeof OrderNoteType | null;
  readonly value?: string | null;
  readonly createdAt?: string | null;
}

type LazyOrderNotes = {
  readonly type?: OrderNoteType | keyof typeof OrderNoteType | null;
  readonly value?: string | null;
  readonly createdAt?: string | null;
}

export declare type OrderNotes = LazyLoading extends LazyLoadingDisabled ? EagerOrderNotes : LazyOrderNotes

export declare const OrderNotes: (new (init: ModelInit<OrderNotes>) => OrderNotes)

type EagerOrderStatsResponse = {
  readonly date?: string | null;
  readonly pendingOrders?: number | null;
  readonly completedOrders?: number | null;
  readonly totalOrders?: number | null;
}

type LazyOrderStatsResponse = {
  readonly date?: string | null;
  readonly pendingOrders?: number | null;
  readonly completedOrders?: number | null;
  readonly totalOrders?: number | null;
}

export declare type OrderStatsResponse = LazyLoading extends LazyLoadingDisabled ? EagerOrderStatsResponse : LazyOrderStatsResponse

export declare const OrderStatsResponse: (new (init: ModelInit<OrderStatsResponse>) => OrderStatsResponse)

type EagerOrderAssignment = {
  readonly hostname?: string | null;
  readonly worksheetId?: string | null;
  readonly status?: string | null;
  readonly initDate?: string | null;
  readonly finishedDate?: string | null;
}

type LazyOrderAssignment = {
  readonly hostname?: string | null;
  readonly worksheetId?: string | null;
  readonly status?: string | null;
  readonly initDate?: string | null;
  readonly finishedDate?: string | null;
}

export declare type OrderAssignment = LazyLoading extends LazyLoadingDisabled ? EagerOrderAssignment : LazyOrderAssignment

export declare const OrderAssignment: (new (init: ModelInit<OrderAssignment>) => OrderAssignment)

type EagerMarketingData = {
  readonly id?: string | null;
  readonly utmSource?: string | null;
  readonly utmPartner?: string | null;
  readonly utmMedium?: string | null;
  readonly utmCampaign?: string | null;
  readonly utmipage?: string | null;
  readonly utmiPart?: string | null;
  readonly utmiCampaign?: string | null;
  readonly marketingTags?: (string | null)[] | null;
  readonly coupon?: string | null;
}

type LazyMarketingData = {
  readonly id?: string | null;
  readonly utmSource?: string | null;
  readonly utmPartner?: string | null;
  readonly utmMedium?: string | null;
  readonly utmCampaign?: string | null;
  readonly utmipage?: string | null;
  readonly utmiPart?: string | null;
  readonly utmiCampaign?: string | null;
  readonly marketingTags?: (string | null)[] | null;
  readonly coupon?: string | null;
}

export declare type MarketingData = LazyLoading extends LazyLoadingDisabled ? EagerMarketingData : LazyMarketingData

export declare const MarketingData: (new (init: ModelInit<MarketingData>) => MarketingData)

type EagerInvoice = {
  readonly invoiceKey?: string | null;
  readonly invoiceSubtotal?: number | null;
  readonly invoiceTaxes?: number | null;
  readonly invoiceTotal?: number | null;
  readonly invoiceUrl?: string | null;
  readonly invoiceCreationDate?: string | null;
  readonly invoiceReceiptDate?: string | null;
  readonly invoiceNumber?: string | null;
  readonly packages?: (string | null)[] | null;
}

type LazyInvoice = {
  readonly invoiceKey?: string | null;
  readonly invoiceSubtotal?: number | null;
  readonly invoiceTaxes?: number | null;
  readonly invoiceTotal?: number | null;
  readonly invoiceUrl?: string | null;
  readonly invoiceCreationDate?: string | null;
  readonly invoiceReceiptDate?: string | null;
  readonly invoiceNumber?: string | null;
  readonly packages?: (string | null)[] | null;
}

export declare type Invoice = LazyLoading extends LazyLoadingDisabled ? EagerInvoice : LazyInvoice

export declare const Invoice: (new (init: ModelInit<Invoice>) => Invoice)

type EagerPayment = {
  readonly paymentId?: string | null;
  readonly paymentName?: string | null;
  readonly paymentHolder?: string | null;
  readonly date?: string | null;
  readonly baseTotal?: number | null;
  readonly discount?: number | null;
  readonly tax?: number | null;
  readonly grandTotal?: number | null;
  readonly currency?: Currrency | null;
  readonly method?: string | null;
  readonly transactionId?: string | null;
  readonly transactionRef?: string | null;
  readonly authorization?: string | null;
  readonly lastDigits?: string | null;
  readonly firstDigits?: string | null;
  readonly installments?: string | null;
  readonly cardNumber?: string | null;
  readonly plcConversionRate?: number | null;
  readonly priceListCurrency?: Currrency | null;
}

type LazyPayment = {
  readonly paymentId?: string | null;
  readonly paymentName?: string | null;
  readonly paymentHolder?: string | null;
  readonly date?: string | null;
  readonly baseTotal?: number | null;
  readonly discount?: number | null;
  readonly tax?: number | null;
  readonly grandTotal?: number | null;
  readonly currency?: Currrency | null;
  readonly method?: string | null;
  readonly transactionId?: string | null;
  readonly transactionRef?: string | null;
  readonly authorization?: string | null;
  readonly lastDigits?: string | null;
  readonly firstDigits?: string | null;
  readonly installments?: string | null;
  readonly cardNumber?: string | null;
  readonly plcConversionRate?: number | null;
  readonly priceListCurrency?: Currrency | null;
}

export declare type Payment = LazyLoading extends LazyLoadingDisabled ? EagerPayment : LazyPayment

export declare const Payment: (new (init: ModelInit<Payment>) => Payment)

type EagerShipping = {
  readonly shippingInfo?: (ShippingInfo | null)[] | null;
  readonly orderUniqueAddress?: boolean | null;
  readonly tracking?: (Tracking | null)[] | null;
}

type LazyShipping = {
  readonly shippingInfo?: (ShippingInfo | null)[] | null;
  readonly orderUniqueAddress?: boolean | null;
  readonly tracking?: (Tracking | null)[] | null;
}

export declare type Shipping = LazyLoading extends LazyLoadingDisabled ? EagerShipping : LazyShipping

export declare const Shipping: (new (init: ModelInit<Shipping>) => Shipping)

type EagerTracking = {
  readonly id?: string | null;
  readonly trackingKey?: string | null;
  readonly trackingUrl?: string | null;
  readonly carrier?: string | null;
  readonly packages?: (string | null)[] | null;
  readonly delivered?: boolean | null;
  readonly createDate?: string | null;
  readonly deliveredDate?: string | null;
}

type LazyTracking = {
  readonly id?: string | null;
  readonly trackingKey?: string | null;
  readonly trackingUrl?: string | null;
  readonly carrier?: string | null;
  readonly packages?: (string | null)[] | null;
  readonly delivered?: boolean | null;
  readonly createDate?: string | null;
  readonly deliveredDate?: string | null;
}

export declare type Tracking = LazyLoading extends LazyLoadingDisabled ? EagerTracking : LazyTracking

export declare const Tracking: (new (init: ModelInit<Tracking>) => Tracking)

type EagerShippingInfo = {
  readonly itemId?: string | null;
  readonly shippingType?: ShippingType | keyof typeof ShippingType | null;
  readonly schedule?: Schedule | null;
  readonly selectedSla?: (ShippingInfoCarrier | null)[] | null;
}

type LazyShippingInfo = {
  readonly itemId?: string | null;
  readonly shippingType?: ShippingType | keyof typeof ShippingType | null;
  readonly schedule?: Schedule | null;
  readonly selectedSla?: (ShippingInfoCarrier | null)[] | null;
}

export declare type ShippingInfo = LazyLoading extends LazyLoadingDisabled ? EagerShippingInfo : LazyShippingInfo

export declare const ShippingInfo: (new (init: ModelInit<ShippingInfo>) => ShippingInfo)

type EagerBilling = {
  readonly id?: string | null;
  readonly discount?: number | null;
  readonly tax?: number | null;
  readonly freighAmount?: number | null;
  readonly total?: number | null;
}

type LazyBilling = {
  readonly id?: string | null;
  readonly discount?: number | null;
  readonly tax?: number | null;
  readonly freighAmount?: number | null;
  readonly total?: number | null;
}

export declare type Billing = LazyLoading extends LazyLoadingDisabled ? EagerBilling : LazyBilling

export declare const Billing: (new (init: ModelInit<Billing>) => Billing)

type EagerLocation = {
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly alt?: number | null;
}

type LazyLocation = {
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly alt?: number | null;
}

export declare type Location = LazyLoading extends LazyLoadingDisabled ? EagerLocation : LazyLocation

export declare const Location: (new (init: ModelInit<Location>) => Location)

type EagerSchedule = {
  readonly fromDate?: string | null;
  readonly toDate?: string | null;
}

type LazySchedule = {
  readonly fromDate?: string | null;
  readonly toDate?: string | null;
}

export declare type Schedule = LazyLoading extends LazyLoadingDisabled ? EagerSchedule : LazySchedule

export declare const Schedule: (new (init: ModelInit<Schedule>) => Schedule)

type EagerShippingInfoCarrier = {
  readonly id?: string | null;
  readonly courierName?: string | null;
  readonly name?: string | null;
}

type LazyShippingInfoCarrier = {
  readonly id?: string | null;
  readonly courierName?: string | null;
  readonly name?: string | null;
}

export declare type ShippingInfoCarrier = LazyLoading extends LazyLoadingDisabled ? EagerShippingInfoCarrier : LazyShippingInfoCarrier

export declare const ShippingInfoCarrier: (new (init: ModelInit<ShippingInfoCarrier>) => ShippingInfoCarrier)

type EagerCurrrency = {
  readonly name?: string | null;
  readonly code?: string | null;
  readonly symbol?: string | null;
  readonly decimalDigits?: number | null;
  readonly decimalSeparator?: string | null;
  readonly groupSeparator?: string | null;
  readonly groupSize?: number | null;
}

type LazyCurrrency = {
  readonly name?: string | null;
  readonly code?: string | null;
  readonly symbol?: string | null;
  readonly decimalDigits?: number | null;
  readonly decimalSeparator?: string | null;
  readonly groupSeparator?: string | null;
  readonly groupSize?: number | null;
}

export declare type Currrency = LazyLoading extends LazyLoadingDisabled ? EagerCurrrency : LazyCurrrency

export declare const Currrency: (new (init: ModelInit<Currrency>) => Currrency)

type EagerItem = {
  readonly id?: string | null;
  readonly uniqueId?: string | null;
  readonly itemName?: string | null;
  readonly sku?: string | null;
  readonly additionalSku?: (string | null)[] | null;
  readonly EAN?: string | null;
  readonly additionalEAN?: (string | null)[] | null;
  readonly referenceCode?: string | null;
  readonly additionalReferenceCode?: (string | null)[] | null;
  readonly basePrice?: number | null;
  readonly price?: number | null;
  readonly listPrice?: number | null;
  readonly pickingPrice?: number | null;
  readonly currencyCode?: string | null;
  readonly tax?: number | null;
  readonly isTaxable?: boolean | null;
  readonly weighableProduct?: boolean | null;
  readonly description?: string | null;
  readonly categories?: (Taxonomy | null)[] | null;
  readonly brand?: Taxonomy | null;
  readonly quantity?: number | null;
  readonly unitOfMeasure?: UnitOfMeasure | keyof typeof UnitOfMeasure | null;
  readonly unitMultiplier?: number | null;
  readonly originalUnitMultiplier?: number | null;
  readonly dimensions?: Dimensions | null;
  readonly isCombo?: boolean | null;
  readonly images?: (string | null)[] | null;
  readonly label?: string | null;
  readonly qrCodeContent?: string | null;
  readonly pickingOptions?: ItemPickingOptions | null;
  readonly observations?: (string | null)[] | null;
  readonly notes?: (WorksheetNotes | null)[] | null;
  readonly inventoryData?: (InventoryData | null)[] | null;
  readonly metaData?: string | null;
  readonly temperature?: Temperature | keyof typeof Temperature | null;
  readonly storeConfig?: string | null;
  readonly isOriginal?: boolean | null;
  readonly status?: ItemStatus | keyof typeof ItemStatus | null;
  readonly pickedQuantity?: number | null;
  readonly transferredQuantity?: number | null;
  readonly dynamicBarcode?: string | null;
  readonly rejectedQuantity?: number | null;
  readonly replacedQuantity?: number | null;
  readonly replacedBy?: (string | null)[] | null;
  readonly itemLogs?: (ItemLog | null)[] | null;
  readonly changeQuantityReasons?: (Reasons | null)[] | null;
  readonly changePriceReasons?: (Reasons | null)[] | null;
  readonly location?: string | null;
}

type LazyItem = {
  readonly id?: string | null;
  readonly uniqueId?: string | null;
  readonly itemName?: string | null;
  readonly sku?: string | null;
  readonly additionalSku?: (string | null)[] | null;
  readonly EAN?: string | null;
  readonly additionalEAN?: (string | null)[] | null;
  readonly referenceCode?: string | null;
  readonly additionalReferenceCode?: (string | null)[] | null;
  readonly basePrice?: number | null;
  readonly price?: number | null;
  readonly listPrice?: number | null;
  readonly pickingPrice?: number | null;
  readonly currencyCode?: string | null;
  readonly tax?: number | null;
  readonly isTaxable?: boolean | null;
  readonly weighableProduct?: boolean | null;
  readonly description?: string | null;
  readonly categories?: (Taxonomy | null)[] | null;
  readonly brand?: Taxonomy | null;
  readonly quantity?: number | null;
  readonly unitOfMeasure?: UnitOfMeasure | keyof typeof UnitOfMeasure | null;
  readonly unitMultiplier?: number | null;
  readonly originalUnitMultiplier?: number | null;
  readonly dimensions?: Dimensions | null;
  readonly isCombo?: boolean | null;
  readonly images?: (string | null)[] | null;
  readonly label?: string | null;
  readonly qrCodeContent?: string | null;
  readonly pickingOptions?: ItemPickingOptions | null;
  readonly observations?: (string | null)[] | null;
  readonly notes?: (WorksheetNotes | null)[] | null;
  readonly inventoryData?: (InventoryData | null)[] | null;
  readonly metaData?: string | null;
  readonly temperature?: Temperature | keyof typeof Temperature | null;
  readonly storeConfig?: string | null;
  readonly isOriginal?: boolean | null;
  readonly status?: ItemStatus | keyof typeof ItemStatus | null;
  readonly pickedQuantity?: number | null;
  readonly transferredQuantity?: number | null;
  readonly dynamicBarcode?: string | null;
  readonly rejectedQuantity?: number | null;
  readonly replacedQuantity?: number | null;
  readonly replacedBy?: (string | null)[] | null;
  readonly itemLogs?: (ItemLog | null)[] | null;
  readonly changeQuantityReasons?: (Reasons | null)[] | null;
  readonly changePriceReasons?: (Reasons | null)[] | null;
  readonly location?: string | null;
}

export declare type Item = LazyLoading extends LazyLoadingDisabled ? EagerItem : LazyItem

export declare const Item: (new (init: ModelInit<Item>) => Item)

type EagerItemLog = {
  readonly description: string;
  readonly metadata?: string | null;
  readonly timestamp: string;
}

type LazyItemLog = {
  readonly description: string;
  readonly metadata?: string | null;
  readonly timestamp: string;
}

export declare type ItemLog = LazyLoading extends LazyLoadingDisabled ? EagerItemLog : LazyItemLog

export declare const ItemLog: (new (init: ModelInit<ItemLog>) => ItemLog)

type EagerInventoryData = {
  readonly warehouseId?: string | null;
  readonly warehouseName?: string | null;
  readonly quantity?: number | null;
}

type LazyInventoryData = {
  readonly warehouseId?: string | null;
  readonly warehouseName?: string | null;
  readonly quantity?: number | null;
}

export declare type InventoryData = LazyLoading extends LazyLoadingDisabled ? EagerInventoryData : LazyInventoryData

export declare const InventoryData: (new (init: ModelInit<InventoryData>) => InventoryData)

type EagerOrderOpenSearch = {
  readonly customerId?: string | null;
  readonly addressId?: string | null;
  readonly shippingEstimatedDateMin?: string | null;
  readonly orderDate?: string | null;
  readonly finishedDate?: string | null;
  readonly orderStatus?: string | null;
  readonly invoiceDate?: string | null;
  readonly invoiceNumbers?: (string | null)[] | null;
  readonly orderId?: string | null;
  readonly commercialPolicy?: string | null;
  readonly salesChannel?: string | null;
  readonly warehouseId?: (string | null)[] | null;
  readonly storeConfigId?: (string | null)[] | null;
  readonly worksheetId?: (WorksheetIdList | null)[] | null;
  readonly hostname?: (string | null)[] | null;
  readonly itemsQuantity?: number | null;
  readonly unitsQuantity?: number | null;
  readonly completedItemsQuantity?: number | null;
  readonly completedUnitsQuantity?: number | null;
  readonly packedItemsQuantity?: number | null;
  readonly packedUnitsQuantity?: number | null;
  readonly categoriesIds?: (string | null)[] | null;
  readonly paymentMethodId?: (string | null)[] | null;
  readonly paymentMethodName?: (string | null)[] | null;
  readonly shippingCarrier?: (string | null)[] | null;
  readonly shippingType?: (string | null)[] | null;
  readonly currency?: string | null;
  readonly tags?: (string | null)[] | null;
  readonly totalValue?: number | null;
  readonly hasPendingPackages?: boolean | null;
}

type LazyOrderOpenSearch = {
  readonly customerId?: string | null;
  readonly addressId?: string | null;
  readonly shippingEstimatedDateMin?: string | null;
  readonly orderDate?: string | null;
  readonly finishedDate?: string | null;
  readonly orderStatus?: string | null;
  readonly invoiceDate?: string | null;
  readonly invoiceNumbers?: (string | null)[] | null;
  readonly orderId?: string | null;
  readonly commercialPolicy?: string | null;
  readonly salesChannel?: string | null;
  readonly warehouseId?: (string | null)[] | null;
  readonly storeConfigId?: (string | null)[] | null;
  readonly worksheetId?: (WorksheetIdList | null)[] | null;
  readonly hostname?: (string | null)[] | null;
  readonly itemsQuantity?: number | null;
  readonly unitsQuantity?: number | null;
  readonly completedItemsQuantity?: number | null;
  readonly completedUnitsQuantity?: number | null;
  readonly packedItemsQuantity?: number | null;
  readonly packedUnitsQuantity?: number | null;
  readonly categoriesIds?: (string | null)[] | null;
  readonly paymentMethodId?: (string | null)[] | null;
  readonly paymentMethodName?: (string | null)[] | null;
  readonly shippingCarrier?: (string | null)[] | null;
  readonly shippingType?: (string | null)[] | null;
  readonly currency?: string | null;
  readonly tags?: (string | null)[] | null;
  readonly totalValue?: number | null;
  readonly hasPendingPackages?: boolean | null;
}

export declare type OrderOpenSearch = LazyLoading extends LazyLoadingDisabled ? EagerOrderOpenSearch : LazyOrderOpenSearch

export declare const OrderOpenSearch: (new (init: ModelInit<OrderOpenSearch>) => OrderOpenSearch)

type EagerWorksheetIdList = {
  readonly worksheetId?: string | null;
  readonly status?: string | null;
}

type LazyWorksheetIdList = {
  readonly worksheetId?: string | null;
  readonly status?: string | null;
}

export declare type WorksheetIdList = LazyLoading extends LazyLoadingDisabled ? EagerWorksheetIdList : LazyWorksheetIdList

export declare const WorksheetIdList: (new (init: ModelInit<WorksheetIdList>) => WorksheetIdList)

type EagerItemOrderPackage = {
  readonly id: string;
  readonly ean: string;
  readonly refId: string;
  readonly quantity: number;
  readonly description?: string | null;
  readonly imageUrl?: string | null;
}

type LazyItemOrderPackage = {
  readonly id: string;
  readonly ean: string;
  readonly refId: string;
  readonly quantity: number;
  readonly description?: string | null;
  readonly imageUrl?: string | null;
}

export declare type ItemOrderPackage = LazyLoading extends LazyLoadingDisabled ? EagerItemOrderPackage : LazyItemOrderPackage

export declare const ItemOrderPackage: (new (init: ModelInit<ItemOrderPackage>) => ItemOrderPackage)

type EagerPackageLocation = {
  readonly storeConfigId?: string | null;
  readonly location?: string | null;
  readonly assignedDate?: string | null;
  readonly current?: boolean | null;
}

type LazyPackageLocation = {
  readonly storeConfigId?: string | null;
  readonly location?: string | null;
  readonly assignedDate?: string | null;
  readonly current?: boolean | null;
}

export declare type PackageLocation = LazyLoading extends LazyLoadingDisabled ? EagerPackageLocation : LazyPackageLocation

export declare const PackageLocation: (new (init: ModelInit<PackageLocation>) => PackageLocation)

type EagerActionRegister = {
  readonly userId?: string | null;
  readonly date?: string | null;
}

type LazyActionRegister = {
  readonly userId?: string | null;
  readonly date?: string | null;
}

export declare type ActionRegister = LazyLoading extends LazyLoadingDisabled ? EagerActionRegister : LazyActionRegister

export declare const ActionRegister: (new (init: ModelInit<ActionRegister>) => ActionRegister)

type EagerRMANotes = {
  readonly note: string;
  readonly type: RmaNotesTypes | keyof typeof RmaNotesTypes;
  readonly createdBy: string;
  readonly creationDate?: string | null;
}

type LazyRMANotes = {
  readonly note: string;
  readonly type: RmaNotesTypes | keyof typeof RmaNotesTypes;
  readonly createdBy: string;
  readonly creationDate?: string | null;
}

export declare type RMANotes = LazyLoading extends LazyLoadingDisabled ? EagerRMANotes : LazyRMANotes

export declare const RMANotes: (new (init: ModelInit<RMANotes>) => RMANotes)

type EagerRMAResolutionTransaction = {
  readonly transactionId?: string | null;
  readonly status?: RmaTransactionStatus | keyof typeof RmaTransactionStatus | null;
}

type LazyRMAResolutionTransaction = {
  readonly transactionId?: string | null;
  readonly status?: RmaTransactionStatus | keyof typeof RmaTransactionStatus | null;
}

export declare type RMAResolutionTransaction = LazyLoading extends LazyLoadingDisabled ? EagerRMAResolutionTransaction : LazyRMAResolutionTransaction

export declare const RMAResolutionTransaction: (new (init: ModelInit<RMAResolutionTransaction>) => RMAResolutionTransaction)

type EagerOrderRMA = {
  readonly id: string;
  readonly date: string;
  readonly total: number;
  readonly paymentMethod?: string | null;
}

type LazyOrderRMA = {
  readonly id: string;
  readonly date: string;
  readonly total: number;
  readonly paymentMethod?: string | null;
}

export declare type OrderRMA = LazyLoading extends LazyLoadingDisabled ? EagerOrderRMA : LazyOrderRMA

export declare const OrderRMA: (new (init: ModelInit<OrderRMA>) => OrderRMA)

type EagerCustomerRMA = {
  readonly name: string;
  readonly email: string;
  readonly identification: string;
}

type LazyCustomerRMA = {
  readonly name: string;
  readonly email: string;
  readonly identification: string;
}

export declare type CustomerRMA = LazyLoading extends LazyLoadingDisabled ? EagerCustomerRMA : LazyCustomerRMA

export declare const CustomerRMA: (new (init: ModelInit<CustomerRMA>) => CustomerRMA)

type EagerPickupAddress = {
  readonly street: string;
  readonly city: string;
  readonly state: string;
  readonly zip: string;
  readonly country: string;
}

type LazyPickupAddress = {
  readonly street: string;
  readonly city: string;
  readonly state: string;
  readonly zip: string;
  readonly country: string;
}

export declare type PickupAddress = LazyLoading extends LazyLoadingDisabled ? EagerPickupAddress : LazyPickupAddress

export declare const PickupAddress: (new (init: ModelInit<PickupAddress>) => PickupAddress)

type EagerStore = {
  readonly storeConfigId: string;
  readonly name: string;
  readonly address: PickupAddress;
}

type LazyStore = {
  readonly storeConfigId: string;
  readonly name: string;
  readonly address: PickupAddress;
}

export declare type Store = LazyLoading extends LazyLoadingDisabled ? EagerStore : LazyStore

export declare const Store: (new (init: ModelInit<Store>) => Store)

type EagerDeliveryAddress = {
  readonly name: string;
  readonly address: PickupAddress;
}

type LazyDeliveryAddress = {
  readonly name: string;
  readonly address: PickupAddress;
}

export declare type DeliveryAddress = LazyLoading extends LazyLoadingDisabled ? EagerDeliveryAddress : LazyDeliveryAddress

export declare const DeliveryAddress: (new (init: ModelInit<DeliveryAddress>) => DeliveryAddress)

type EagerRMAItemInput = {
  readonly reasonId: string;
  readonly returnReason: string;
  readonly reasonType: ReasonTypeItem | keyof typeof ReasonTypeItem;
  readonly quantity: number;
  readonly attachments?: (ItemAttachment | null)[] | null;
  readonly recommendedItem?: RMAReplacementItem | null;
}

type LazyRMAItemInput = {
  readonly reasonId: string;
  readonly returnReason: string;
  readonly reasonType: ReasonTypeItem | keyof typeof ReasonTypeItem;
  readonly quantity: number;
  readonly attachments?: (ItemAttachment | null)[] | null;
  readonly recommendedItem?: RMAReplacementItem | null;
}

export declare type RMAItemInput = LazyLoading extends LazyLoadingDisabled ? EagerRMAItemInput : LazyRMAItemInput

export declare const RMAItemInput: (new (init: ModelInit<RMAItemInput>) => RMAItemInput)

type EagerItemAttachment = {
  readonly type?: TypeAttachment | keyof typeof TypeAttachment | null;
  readonly URL?: string | null;
}

type LazyItemAttachment = {
  readonly type?: TypeAttachment | keyof typeof TypeAttachment | null;
  readonly URL?: string | null;
}

export declare type ItemAttachment = LazyLoading extends LazyLoadingDisabled ? EagerItemAttachment : LazyItemAttachment

export declare const ItemAttachment: (new (init: ModelInit<ItemAttachment>) => ItemAttachment)

type EagerItemShipping = {
  readonly id?: string | null;
  readonly packageID?: string | null;
  readonly quantity?: number | null;
  readonly status?: string | null;
}

type LazyItemShipping = {
  readonly id?: string | null;
  readonly packageID?: string | null;
  readonly quantity?: number | null;
  readonly status?: string | null;
}

export declare type ItemShipping = LazyLoading extends LazyLoadingDisabled ? EagerItemShipping : LazyItemShipping

export declare const ItemShipping: (new (init: ModelInit<ItemShipping>) => ItemShipping)

type EagerRMAReplacementItem = {
  readonly id?: string | null;
  readonly storeId?: string | null;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly quantity?: number | null;
  readonly sellingPrice?: number | null;
  readonly adjustedPrice?: number | null;
  readonly difference?: number | null;
  readonly additionalCost?: number | null;
  readonly paymentType?: string | null;
}

type LazyRMAReplacementItem = {
  readonly id?: string | null;
  readonly storeId?: string | null;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly quantity?: number | null;
  readonly sellingPrice?: number | null;
  readonly adjustedPrice?: number | null;
  readonly difference?: number | null;
  readonly additionalCost?: number | null;
  readonly paymentType?: string | null;
}

export declare type RMAReplacementItem = LazyLoading extends LazyLoadingDisabled ? EagerRMAReplacementItem : LazyRMAReplacementItem

export declare const RMAReplacementItem: (new (init: ModelInit<RMAReplacementItem>) => RMAReplacementItem)

type EagerRMASageItemImage = {
  readonly id?: string | null;
  readonly URL?: string | null;
  readonly tags?: (string | null)[] | null;
}

type LazyRMASageItemImage = {
  readonly id?: string | null;
  readonly URL?: string | null;
  readonly tags?: (string | null)[] | null;
}

export declare type RMASageItemImage = LazyLoading extends LazyLoadingDisabled ? EagerRMASageItemImage : LazyRMASageItemImage

export declare const RMASageItemImage: (new (init: ModelInit<RMASageItemImage>) => RMASageItemImage)

type EagerRMASageItemProductMatch = {
  readonly brand?: number | null;
  readonly model?: number | null;
  readonly color?: number | null;
  readonly product?: number | null;
  readonly size?: number | null;
  readonly image?: number | null;
}

type LazyRMASageItemProductMatch = {
  readonly brand?: number | null;
  readonly model?: number | null;
  readonly color?: number | null;
  readonly product?: number | null;
  readonly size?: number | null;
  readonly image?: number | null;
}

export declare type RMASageItemProductMatch = LazyLoading extends LazyLoadingDisabled ? EagerRMASageItemProductMatch : LazyRMASageItemProductMatch

export declare const RMASageItemProductMatch: (new (init: ModelInit<RMASageItemProductMatch>) => RMASageItemProductMatch)

type EagerRMASageItemJustification = {
  readonly imageMatchProduct?: string | null;
  readonly accurateDescription?: string | null;
}

type LazyRMASageItemJustification = {
  readonly imageMatchProduct?: string | null;
  readonly accurateDescription?: string | null;
}

export declare type RMASageItemJustification = LazyLoading extends LazyLoadingDisabled ? EagerRMASageItemJustification : LazyRMASageItemJustification

export declare const RMASageItemJustification: (new (init: ModelInit<RMASageItemJustification>) => RMASageItemJustification)

type EagerCreateRMAResolutionItemResponse = {
  readonly id?: string | null;
  readonly success?: boolean | null;
}

type LazyCreateRMAResolutionItemResponse = {
  readonly id?: string | null;
  readonly success?: boolean | null;
}

export declare type CreateRMAResolutionItemResponse = LazyLoading extends LazyLoadingDisabled ? EagerCreateRMAResolutionItemResponse : LazyCreateRMAResolutionItemResponse

export declare const CreateRMAResolutionItemResponse: (new (init: ModelInit<CreateRMAResolutionItemResponse>) => CreateRMAResolutionItemResponse)

type EagerRMAServiceTracking = {
  readonly serviceId?: string | null;
  readonly labelUrl?: string | null;
}

type LazyRMAServiceTracking = {
  readonly serviceId?: string | null;
  readonly labelUrl?: string | null;
}

export declare type RMAServiceTracking = LazyLoading extends LazyLoadingDisabled ? EagerRMAServiceTracking : LazyRMAServiceTracking

export declare const RMAServiceTracking: (new (init: ModelInit<RMAServiceTracking>) => RMAServiceTracking)

type EagerRMAShippingDeliverySlot = {
  readonly from?: string | null;
  readonly to?: string | null;
}

type LazyRMAShippingDeliverySlot = {
  readonly from?: string | null;
  readonly to?: string | null;
}

export declare type RMAShippingDeliverySlot = LazyLoading extends LazyLoadingDisabled ? EagerRMAShippingDeliverySlot : LazyRMAShippingDeliverySlot

export declare const RMAShippingDeliverySlot: (new (init: ModelInit<RMAShippingDeliverySlot>) => RMAShippingDeliverySlot)

type EagerResolutionCoupon = {
  readonly idCalculatorConfiguration?: string | null;
  readonly name?: string | null;
  readonly beginDateUtc?: string | null;
  readonly endDateUtc?: string | null;
  readonly utmSource?: string | null;
  readonly utmCampaign?: string | null;
  readonly amount?: number | null;
}

type LazyResolutionCoupon = {
  readonly idCalculatorConfiguration?: string | null;
  readonly name?: string | null;
  readonly beginDateUtc?: string | null;
  readonly endDateUtc?: string | null;
  readonly utmSource?: string | null;
  readonly utmCampaign?: string | null;
  readonly amount?: number | null;
}

export declare type ResolutionCoupon = LazyLoading extends LazyLoadingDisabled ? EagerResolutionCoupon : LazyResolutionCoupon

export declare const ResolutionCoupon: (new (init: ModelInit<ResolutionCoupon>) => ResolutionCoupon)

type EagerResolutionGiftCard = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly redemptionCode?: string | null;
  readonly expiringDate?: string | null;
  readonly emissionDate?: string | null;
  readonly amount?: number | null;
}

type LazyResolutionGiftCard = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly redemptionCode?: string | null;
  readonly expiringDate?: string | null;
  readonly emissionDate?: string | null;
  readonly amount?: number | null;
}

export declare type ResolutionGiftCard = LazyLoading extends LazyLoadingDisabled ? EagerResolutionGiftCard : LazyResolutionGiftCard

export declare const ResolutionGiftCard: (new (init: ModelInit<ResolutionGiftCard>) => ResolutionGiftCard)

type EagerIASettingRMA = {
  readonly active?: boolean | null;
  readonly language?: string | null;
}

type LazyIASettingRMA = {
  readonly active?: boolean | null;
  readonly language?: string | null;
}

export declare type IASettingRMA = LazyLoading extends LazyLoadingDisabled ? EagerIASettingRMA : LazyIASettingRMA

export declare const IASettingRMA: (new (init: ModelInit<IASettingRMA>) => IASettingRMA)

type EagerRMASettingsIdFormat = {
  readonly prefix?: string | null;
  readonly suffix?: string | null;
  readonly separator?: string | null;
}

type LazyRMASettingsIdFormat = {
  readonly prefix?: string | null;
  readonly suffix?: string | null;
  readonly separator?: string | null;
}

export declare type RMASettingsIdFormat = LazyLoading extends LazyLoadingDisabled ? EagerRMASettingsIdFormat : LazyRMASettingsIdFormat

export declare const RMASettingsIdFormat: (new (init: ModelInit<RMASettingsIdFormat>) => RMASettingsIdFormat)

type EagerRMASettingsStatus = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly color?: string | null;
  readonly active?: boolean | null;
}

type LazyRMASettingsStatus = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly color?: string | null;
  readonly active?: boolean | null;
}

export declare type RMASettingsStatus = LazyLoading extends LazyLoadingDisabled ? EagerRMASettingsStatus : LazyRMASettingsStatus

export declare const RMASettingsStatus: (new (init: ModelInit<RMASettingsStatus>) => RMASettingsStatus)

type EagerRMASettingField = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly type?: RmaSettingFieldType | keyof typeof RmaSettingFieldType | null;
  readonly required?: boolean | null;
  readonly options?: (string | null)[] | null;
  readonly metadata?: string | null;
}

type LazyRMASettingField = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly type?: RmaSettingFieldType | keyof typeof RmaSettingFieldType | null;
  readonly required?: boolean | null;
  readonly options?: (string | null)[] | null;
  readonly metadata?: string | null;
}

export declare type RMASettingField = LazyLoading extends LazyLoadingDisabled ? EagerRMASettingField : LazyRMASettingField

export declare const RMASettingField: (new (init: ModelInit<RMASettingField>) => RMASettingField)

type EagerRMASettingTermAndCondition = {
  readonly title?: string | null;
  readonly description?: string | null;
  readonly url?: string | null;
}

type LazyRMASettingTermAndCondition = {
  readonly title?: string | null;
  readonly description?: string | null;
  readonly url?: string | null;
}

export declare type RMASettingTermAndCondition = LazyLoading extends LazyLoadingDisabled ? EagerRMASettingTermAndCondition : LazyRMASettingTermAndCondition

export declare const RMASettingTermAndCondition: (new (init: ModelInit<RMASettingTermAndCondition>) => RMASettingTermAndCondition)

type EagerDeliveryMethodPickup = {
  readonly active?: boolean | null;
  readonly metadata?: string | null;
}

type LazyDeliveryMethodPickup = {
  readonly active?: boolean | null;
  readonly metadata?: string | null;
}

export declare type DeliveryMethodPickup = LazyLoading extends LazyLoadingDisabled ? EagerDeliveryMethodPickup : LazyDeliveryMethodPickup

export declare const DeliveryMethodPickup: (new (init: ModelInit<DeliveryMethodPickup>) => DeliveryMethodPickup)

type EagerDeliveryMethodDeliveryToStore = {
  readonly active?: boolean | null;
  readonly availableStores?: (DeliveryMethodAvailableStores | null)[] | null;
}

type LazyDeliveryMethodDeliveryToStore = {
  readonly active?: boolean | null;
  readonly availableStores?: (DeliveryMethodAvailableStores | null)[] | null;
}

export declare type DeliveryMethodDeliveryToStore = LazyLoading extends LazyLoadingDisabled ? EagerDeliveryMethodDeliveryToStore : LazyDeliveryMethodDeliveryToStore

export declare const DeliveryMethodDeliveryToStore: (new (init: ModelInit<DeliveryMethodDeliveryToStore>) => DeliveryMethodDeliveryToStore)

type EagerDeliveryMethodAvailableStores = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly active?: boolean | null;
}

type LazyDeliveryMethodAvailableStores = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly active?: boolean | null;
}

export declare type DeliveryMethodAvailableStores = LazyLoading extends LazyLoadingDisabled ? EagerDeliveryMethodAvailableStores : LazyDeliveryMethodAvailableStores

export declare const DeliveryMethodAvailableStores: (new (init: ModelInit<DeliveryMethodAvailableStores>) => DeliveryMethodAvailableStores)

type EagerDeliveryMethodDeliveryToAddress = {
  readonly account?: string | null;
  readonly availableAddress?: (DeliveryMethodAvailableAddress | null)[] | null;
}

type LazyDeliveryMethodDeliveryToAddress = {
  readonly account?: string | null;
  readonly availableAddress?: (DeliveryMethodAvailableAddress | null)[] | null;
}

export declare type DeliveryMethodDeliveryToAddress = LazyLoading extends LazyLoadingDisabled ? EagerDeliveryMethodDeliveryToAddress : LazyDeliveryMethodDeliveryToAddress

export declare const DeliveryMethodDeliveryToAddress: (new (init: ModelInit<DeliveryMethodDeliveryToAddress>) => DeliveryMethodDeliveryToAddress)

type EagerDeliveryMethodAvailableAddress = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly active?: boolean | null;
  readonly courierId?: string | null;
  readonly courierName?: string | null;
  readonly courierLogo?: string | null;
  readonly address?: (DeliveryMethodAvailableAddressAddress | null)[] | null;
}

type LazyDeliveryMethodAvailableAddress = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly active?: boolean | null;
  readonly courierId?: string | null;
  readonly courierName?: string | null;
  readonly courierLogo?: string | null;
  readonly address?: (DeliveryMethodAvailableAddressAddress | null)[] | null;
}

export declare type DeliveryMethodAvailableAddress = LazyLoading extends LazyLoadingDisabled ? EagerDeliveryMethodAvailableAddress : LazyDeliveryMethodAvailableAddress

export declare const DeliveryMethodAvailableAddress: (new (init: ModelInit<DeliveryMethodAvailableAddress>) => DeliveryMethodAvailableAddress)

type EagerDeliveryMethodAvailableAddressAddress = {
  readonly street?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly zip?: string | null;
  readonly country?: string | null;
}

type LazyDeliveryMethodAvailableAddressAddress = {
  readonly street?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly zip?: string | null;
  readonly country?: string | null;
}

export declare type DeliveryMethodAvailableAddressAddress = LazyLoading extends LazyLoadingDisabled ? EagerDeliveryMethodAvailableAddressAddress : LazyDeliveryMethodAvailableAddressAddress

export declare const DeliveryMethodAvailableAddressAddress: (new (init: ModelInit<DeliveryMethodAvailableAddressAddress>) => DeliveryMethodAvailableAddressAddress)

type EagerRMALogisticsHours = {
  readonly name?: string | null;
  readonly weekDay?: number | null;
  readonly initialHour?: string | null;
  readonly finalHour?: string | null;
}

type LazyRMALogisticsHours = {
  readonly name?: string | null;
  readonly weekDay?: number | null;
  readonly initialHour?: string | null;
  readonly finalHour?: string | null;
}

export declare type RMALogisticsHours = LazyLoading extends LazyLoadingDisabled ? EagerRMALogisticsHours : LazyRMALogisticsHours

export declare const RMALogisticsHours: (new (init: ModelInit<RMALogisticsHours>) => RMALogisticsHours)

type EagerItemsLocation = {
  readonly active?: boolean | null;
  readonly fields?: (Field | null)[] | null;
  readonly codeFormat?: (CodeFormat | null)[] | null;
  readonly separator?: string | null;
  readonly categoryLink?: string | null;
  readonly brandLink?: string | null;
}

type LazyItemsLocation = {
  readonly active?: boolean | null;
  readonly fields?: (Field | null)[] | null;
  readonly codeFormat?: (CodeFormat | null)[] | null;
  readonly separator?: string | null;
  readonly categoryLink?: string | null;
  readonly brandLink?: string | null;
}

export declare type ItemsLocation = LazyLoading extends LazyLoadingDisabled ? EagerItemsLocation : LazyItemsLocation

export declare const ItemsLocation: (new (init: ModelInit<ItemsLocation>) => ItemsLocation)

type EagerField = {
  readonly id?: IdEnum | keyof typeof IdEnum | null;
  readonly label?: string | null;
  readonly type?: FieldTypeEnum | keyof typeof FieldTypeEnum | null;
}

type LazyField = {
  readonly id?: IdEnum | keyof typeof IdEnum | null;
  readonly label?: string | null;
  readonly type?: FieldTypeEnum | keyof typeof FieldTypeEnum | null;
}

export declare type Field = LazyLoading extends LazyLoadingDisabled ? EagerField : LazyField

export declare const Field: (new (init: ModelInit<Field>) => Field)

type EagerCodeFormat = {
  readonly id?: IdEnum | keyof typeof IdEnum | null;
  readonly characters?: number | null;
  readonly order?: number | null;
}

type LazyCodeFormat = {
  readonly id?: IdEnum | keyof typeof IdEnum | null;
  readonly characters?: number | null;
  readonly order?: number | null;
}

export declare type CodeFormat = LazyLoading extends LazyLoadingDisabled ? EagerCodeFormat : LazyCodeFormat

export declare const CodeFormat: (new (init: ModelInit<CodeFormat>) => CodeFormat)

type EagerAvailablePackages = {
  readonly id: string;
  readonly type: string;
  readonly name: string;
  readonly description?: string | null;
  readonly code: string;
  readonly dimensions?: Dimensions | null;
}

type LazyAvailablePackages = {
  readonly id: string;
  readonly type: string;
  readonly name: string;
  readonly description?: string | null;
  readonly code: string;
  readonly dimensions?: Dimensions | null;
}

export declare type AvailablePackages = LazyLoading extends LazyLoadingDisabled ? EagerAvailablePackages : LazyAvailablePackages

export declare const AvailablePackages: (new (init: ModelInit<AvailablePackages>) => AvailablePackages)

type EagerDynamicBarcodes = {
  readonly allowDynamicBarcodes?: boolean | null;
  readonly productIdAsNumber?: boolean | null;
  readonly weight?: DynamicBarcode | null;
  readonly price?: DynamicBarcode | null;
  readonly quantity?: DynamicBarcode | null;
}

type LazyDynamicBarcodes = {
  readonly allowDynamicBarcodes?: boolean | null;
  readonly productIdAsNumber?: boolean | null;
  readonly weight?: DynamicBarcode | null;
  readonly price?: DynamicBarcode | null;
  readonly quantity?: DynamicBarcode | null;
}

export declare type DynamicBarcodes = LazyLoading extends LazyLoadingDisabled ? EagerDynamicBarcodes : LazyDynamicBarcodes

export declare const DynamicBarcodes: (new (init: ModelInit<DynamicBarcodes>) => DynamicBarcodes)

type EagerDynamicBarcode = {
  readonly prefix?: Prefix | null;
  readonly itemIdentifier?: ItemIdentifier | null;
  readonly decimals?: Decimals | null;
}

type LazyDynamicBarcode = {
  readonly prefix?: Prefix | null;
  readonly itemIdentifier?: ItemIdentifier | null;
  readonly decimals?: Decimals | null;
}

export declare type DynamicBarcode = LazyLoading extends LazyLoadingDisabled ? EagerDynamicBarcode : LazyDynamicBarcode

export declare const DynamicBarcode: (new (init: ModelInit<DynamicBarcode>) => DynamicBarcode)

type EagerDecimals = {
  readonly digits?: number | null;
  readonly value?: number | null;
}

type LazyDecimals = {
  readonly digits?: number | null;
  readonly value?: number | null;
}

export declare type Decimals = LazyLoading extends LazyLoadingDisabled ? EagerDecimals : LazyDecimals

export declare const Decimals: (new (init: ModelInit<Decimals>) => Decimals)

type EagerPrefix = {
  readonly digits?: number | null;
  readonly values?: (number | null)[] | null;
}

type LazyPrefix = {
  readonly digits?: number | null;
  readonly values?: (number | null)[] | null;
}

export declare type Prefix = LazyLoading extends LazyLoadingDisabled ? EagerPrefix : LazyPrefix

export declare const Prefix: (new (init: ModelInit<Prefix>) => Prefix)

type EagerItemIdentifier = {
  readonly digits?: number | null;
  readonly model?: ItemIdentifierModel | keyof typeof ItemIdentifierModel | null;
}

type LazyItemIdentifier = {
  readonly digits?: number | null;
  readonly model?: ItemIdentifierModel | keyof typeof ItemIdentifierModel | null;
}

export declare type ItemIdentifier = LazyLoading extends LazyLoadingDisabled ? EagerItemIdentifier : LazyItemIdentifier

export declare const ItemIdentifier: (new (init: ModelInit<ItemIdentifier>) => ItemIdentifier)

type EagerChangesConfig = {
  readonly allowAddItems?: boolean | null;
  readonly allowLimitOrderTotalChanges?: boolean | null;
  readonly allowPriceChanges: boolean;
  readonly allowQuantityChanges: boolean;
  readonly allowItemReplacements: boolean;
  readonly allowItemRejections: boolean;
  readonly sendChangesToVtexOms: boolean;
  readonly itemChangesPriceThreshold: number;
  readonly itemChangesQuantityThreshold: number;
  readonly orderChangesTotalThreshold: number;
  readonly rejectionReasons?: (ChangeReasons | null)[] | null;
  readonly replacementReasons?: (ChangeReasons | null)[] | null;
  readonly priceChangeReasons?: (ChangeReasons | null)[] | null;
}

type LazyChangesConfig = {
  readonly allowAddItems?: boolean | null;
  readonly allowLimitOrderTotalChanges?: boolean | null;
  readonly allowPriceChanges: boolean;
  readonly allowQuantityChanges: boolean;
  readonly allowItemReplacements: boolean;
  readonly allowItemRejections: boolean;
  readonly sendChangesToVtexOms: boolean;
  readonly itemChangesPriceThreshold: number;
  readonly itemChangesQuantityThreshold: number;
  readonly orderChangesTotalThreshold: number;
  readonly rejectionReasons?: (ChangeReasons | null)[] | null;
  readonly replacementReasons?: (ChangeReasons | null)[] | null;
  readonly priceChangeReasons?: (ChangeReasons | null)[] | null;
}

export declare type ChangesConfig = LazyLoading extends LazyLoadingDisabled ? EagerChangesConfig : LazyChangesConfig

export declare const ChangesConfig: (new (init: ModelInit<ChangesConfig>) => ChangesConfig)

type EagerChangeReasons = {
  readonly key?: string | null;
  readonly Value?: string | null;
}

type LazyChangeReasons = {
  readonly key?: string | null;
  readonly Value?: string | null;
}

export declare type ChangeReasons = LazyLoading extends LazyLoadingDisabled ? EagerChangeReasons : LazyChangeReasons

export declare const ChangeReasons: (new (init: ModelInit<ChangeReasons>) => ChangeReasons)

type EagerPrintingConfiguration = {
  readonly comanda?: PrintingConfigurationDataComanda | null;
  readonly packages?: PrintingConfigurationDataPackages | null;
  readonly delivery?: PrintingConfigurationDataDelivery | null;
}

type LazyPrintingConfiguration = {
  readonly comanda?: PrintingConfigurationDataComanda | null;
  readonly packages?: PrintingConfigurationDataPackages | null;
  readonly delivery?: PrintingConfigurationDataDelivery | null;
}

export declare type PrintingConfiguration = LazyLoading extends LazyLoadingDisabled ? EagerPrintingConfiguration : LazyPrintingConfiguration

export declare const PrintingConfiguration: (new (init: ModelInit<PrintingConfiguration>) => PrintingConfiguration)

type EagerPrintingConfigurationDataPackages = {
  readonly active: boolean;
  readonly dimensions: PrintingConfigurationDimensions;
  readonly fontSize: number;
  readonly margin: PrintingConfigurationMargin;
  readonly properties?: PackagesProperties | null;
}

type LazyPrintingConfigurationDataPackages = {
  readonly active: boolean;
  readonly dimensions: PrintingConfigurationDimensions;
  readonly fontSize: number;
  readonly margin: PrintingConfigurationMargin;
  readonly properties?: PackagesProperties | null;
}

export declare type PrintingConfigurationDataPackages = LazyLoading extends LazyLoadingDisabled ? EagerPrintingConfigurationDataPackages : LazyPrintingConfigurationDataPackages

export declare const PrintingConfigurationDataPackages: (new (init: ModelInit<PrintingConfigurationDataPackages>) => PrintingConfigurationDataPackages)

type EagerPackagesProperties = {
  readonly showPackagesQuantity?: boolean | null;
  readonly showPackageLocation?: boolean | null;
  readonly packageBarcode?: PackageBarcodeConfiguration | null;
  readonly orderInformation?: OrderInformationConfiguration | null;
  readonly customerInformation?: CustomerInformationConfiguration | null;
  readonly shippingInformation?: ShippingInformationConfiguration | null;
  readonly pickingInformation?: PickingInformationConfiguration | null;
  readonly itemsInformation?: ItemsInformationConfiguration | null;
}

type LazyPackagesProperties = {
  readonly showPackagesQuantity?: boolean | null;
  readonly showPackageLocation?: boolean | null;
  readonly packageBarcode?: PackageBarcodeConfiguration | null;
  readonly orderInformation?: OrderInformationConfiguration | null;
  readonly customerInformation?: CustomerInformationConfiguration | null;
  readonly shippingInformation?: ShippingInformationConfiguration | null;
  readonly pickingInformation?: PickingInformationConfiguration | null;
  readonly itemsInformation?: ItemsInformationConfiguration | null;
}

export declare type PackagesProperties = LazyLoading extends LazyLoadingDisabled ? EagerPackagesProperties : LazyPackagesProperties

export declare const PackagesProperties: (new (init: ModelInit<PackagesProperties>) => PackagesProperties)

type EagerPackageBarcodeConfiguration = {
  readonly show?: boolean | null;
  readonly options?: (string | null)[] | null;
}

type LazyPackageBarcodeConfiguration = {
  readonly show?: boolean | null;
  readonly options?: (string | null)[] | null;
}

export declare type PackageBarcodeConfiguration = LazyLoading extends LazyLoadingDisabled ? EagerPackageBarcodeConfiguration : LazyPackageBarcodeConfiguration

export declare const PackageBarcodeConfiguration: (new (init: ModelInit<PackageBarcodeConfiguration>) => PackageBarcodeConfiguration)

type EagerOrderInformationConfiguration = {
  readonly show?: boolean | null;
  readonly options?: (string | null)[] | null;
}

type LazyOrderInformationConfiguration = {
  readonly show?: boolean | null;
  readonly options?: (string | null)[] | null;
}

export declare type OrderInformationConfiguration = LazyLoading extends LazyLoadingDisabled ? EagerOrderInformationConfiguration : LazyOrderInformationConfiguration

export declare const OrderInformationConfiguration: (new (init: ModelInit<OrderInformationConfiguration>) => OrderInformationConfiguration)

type EagerShippingInformationConfiguration = {
  readonly show?: boolean | null;
  readonly options?: (string | null)[] | null;
}

type LazyShippingInformationConfiguration = {
  readonly show?: boolean | null;
  readonly options?: (string | null)[] | null;
}

export declare type ShippingInformationConfiguration = LazyLoading extends LazyLoadingDisabled ? EagerShippingInformationConfiguration : LazyShippingInformationConfiguration

export declare const ShippingInformationConfiguration: (new (init: ModelInit<ShippingInformationConfiguration>) => ShippingInformationConfiguration)

type EagerPickingInformationConfiguration = {
  readonly show?: boolean | null;
  readonly options?: (string | null)[] | null;
}

type LazyPickingInformationConfiguration = {
  readonly show?: boolean | null;
  readonly options?: (string | null)[] | null;
}

export declare type PickingInformationConfiguration = LazyLoading extends LazyLoadingDisabled ? EagerPickingInformationConfiguration : LazyPickingInformationConfiguration

export declare const PickingInformationConfiguration: (new (init: ModelInit<PickingInformationConfiguration>) => PickingInformationConfiguration)

type EagerItemsInformationConfiguration = {
  readonly show?: boolean | null;
  readonly options?: (string | null)[] | null;
}

type LazyItemsInformationConfiguration = {
  readonly show?: boolean | null;
  readonly options?: (string | null)[] | null;
}

export declare type ItemsInformationConfiguration = LazyLoading extends LazyLoadingDisabled ? EagerItemsInformationConfiguration : LazyItemsInformationConfiguration

export declare const ItemsInformationConfiguration: (new (init: ModelInit<ItemsInformationConfiguration>) => ItemsInformationConfiguration)

type EagerPrintingConfigurationDataComanda = {
  readonly active: boolean;
  readonly dimensions: PrintingConfigurationDimensions;
  readonly fontSize: number;
  readonly margin: PrintingConfigurationMargin;
  readonly properties?: ComandaProperties | null;
}

type LazyPrintingConfigurationDataComanda = {
  readonly active: boolean;
  readonly dimensions: PrintingConfigurationDimensions;
  readonly fontSize: number;
  readonly margin: PrintingConfigurationMargin;
  readonly properties?: ComandaProperties | null;
}

export declare type PrintingConfigurationDataComanda = LazyLoading extends LazyLoadingDisabled ? EagerPrintingConfigurationDataComanda : LazyPrintingConfigurationDataComanda

export declare const PrintingConfigurationDataComanda: (new (init: ModelInit<PrintingConfigurationDataComanda>) => PrintingConfigurationDataComanda)

type EagerComandaProperties = {
  readonly showOrderIds?: boolean | null;
  readonly splitItemsWithOrders?: boolean | null;
  readonly comandaBarcodes?: ComandaBarcodesConfiguration | null;
  readonly customerInformation?: CustomerInformationConfiguration | null;
}

type LazyComandaProperties = {
  readonly showOrderIds?: boolean | null;
  readonly splitItemsWithOrders?: boolean | null;
  readonly comandaBarcodes?: ComandaBarcodesConfiguration | null;
  readonly customerInformation?: CustomerInformationConfiguration | null;
}

export declare type ComandaProperties = LazyLoading extends LazyLoadingDisabled ? EagerComandaProperties : LazyComandaProperties

export declare const ComandaProperties: (new (init: ModelInit<ComandaProperties>) => ComandaProperties)

type EagerComandaBarcodesConfiguration = {
  readonly show?: boolean | null;
  readonly options?: (string | null)[] | null;
}

type LazyComandaBarcodesConfiguration = {
  readonly show?: boolean | null;
  readonly options?: (string | null)[] | null;
}

export declare type ComandaBarcodesConfiguration = LazyLoading extends LazyLoadingDisabled ? EagerComandaBarcodesConfiguration : LazyComandaBarcodesConfiguration

export declare const ComandaBarcodesConfiguration: (new (init: ModelInit<ComandaBarcodesConfiguration>) => ComandaBarcodesConfiguration)

type EagerCustomerInformationConfiguration = {
  readonly show?: boolean | null;
  readonly options?: (string | null)[] | null;
}

type LazyCustomerInformationConfiguration = {
  readonly show?: boolean | null;
  readonly options?: (string | null)[] | null;
}

export declare type CustomerInformationConfiguration = LazyLoading extends LazyLoadingDisabled ? EagerCustomerInformationConfiguration : LazyCustomerInformationConfiguration

export declare const CustomerInformationConfiguration: (new (init: ModelInit<CustomerInformationConfiguration>) => CustomerInformationConfiguration)

type EagerPrintingConfigurationDataDelivery = {
  readonly active: boolean;
  readonly dimensions: PrintingConfigurationDimensions;
  readonly fontSize: number;
  readonly margin: PrintingConfigurationMargin;
}

type LazyPrintingConfigurationDataDelivery = {
  readonly active: boolean;
  readonly dimensions: PrintingConfigurationDimensions;
  readonly fontSize: number;
  readonly margin: PrintingConfigurationMargin;
}

export declare type PrintingConfigurationDataDelivery = LazyLoading extends LazyLoadingDisabled ? EagerPrintingConfigurationDataDelivery : LazyPrintingConfigurationDataDelivery

export declare const PrintingConfigurationDataDelivery: (new (init: ModelInit<PrintingConfigurationDataDelivery>) => PrintingConfigurationDataDelivery)

type EagerPrintingConfigurationMargin = {
  readonly left: number;
  readonly right: number;
  readonly top: number;
  readonly bottom: number;
}

type LazyPrintingConfigurationMargin = {
  readonly left: number;
  readonly right: number;
  readonly top: number;
  readonly bottom: number;
}

export declare type PrintingConfigurationMargin = LazyLoading extends LazyLoadingDisabled ? EagerPrintingConfigurationMargin : LazyPrintingConfigurationMargin

export declare const PrintingConfigurationMargin: (new (init: ModelInit<PrintingConfigurationMargin>) => PrintingConfigurationMargin)

type EagerPrintingConfigurationDimensions = {
  readonly width: number;
  readonly height?: number | null;
}

type LazyPrintingConfigurationDimensions = {
  readonly width: number;
  readonly height?: number | null;
}

export declare type PrintingConfigurationDimensions = LazyLoading extends LazyLoadingDisabled ? EagerPrintingConfigurationDimensions : LazyPrintingConfigurationDimensions

export declare const PrintingConfigurationDimensions: (new (init: ModelInit<PrintingConfigurationDimensions>) => PrintingConfigurationDimensions)

type EagerServiceRate = {
  readonly shippingPrice?: ServiceRateValue | null;
  readonly insurancePrice?: ServiceRateValue | null;
}

type LazyServiceRate = {
  readonly shippingPrice?: ServiceRateValue | null;
  readonly insurancePrice?: ServiceRateValue | null;
}

export declare type ServiceRate = LazyLoading extends LazyLoadingDisabled ? EagerServiceRate : LazyServiceRate

export declare const ServiceRate: (new (init: ModelInit<ServiceRate>) => ServiceRate)

type EagerServiceRateValue = {
  readonly currency: string;
  readonly value: number;
}

type LazyServiceRateValue = {
  readonly currency: string;
  readonly value: number;
}

export declare type ServiceRateValue = LazyLoading extends LazyLoadingDisabled ? EagerServiceRateValue : LazyServiceRateValue

export declare const ServiceRateValue: (new (init: ModelInit<ServiceRateValue>) => ServiceRateValue)

type EagerServiceOpenSearch = {
  readonly id: string;
  readonly serviceId?: string | null;
  readonly orderId?: string | null;
  readonly customerId?: string | null;
  readonly customerAddressId?: string | null;
  readonly carrierId?: string | null;
  readonly courierId?: string | null;
  readonly source?: string | null;
  readonly destination?: string | null;
  readonly deliveredDate?: string | null;
  readonly courierName?: string | null;
  readonly hostname?: string | null;
  readonly storeConfigId?: string | null;
  readonly status?: string | null;
  readonly packagesQuantity?: number | null;
  readonly itemsQuantity?: number | null;
  readonly carrierLogo?: string | null;
  readonly carrierName?: string | null;
  readonly paymentMethod?: string | null;
  readonly serviceType?: ServiceType | keyof typeof ServiceType | null;
  readonly tags?: (string | null)[] | null;
  readonly deadline?: string | null;
  readonly creationDate?: string | null;
  readonly metaData?: SearchServiceMetaData | null;
  readonly transferManagement?: ServiceTransferManagement | null;
}

type LazyServiceOpenSearch = {
  readonly id: string;
  readonly serviceId?: string | null;
  readonly orderId?: string | null;
  readonly customerId?: string | null;
  readonly customerAddressId?: string | null;
  readonly carrierId?: string | null;
  readonly courierId?: string | null;
  readonly source?: string | null;
  readonly destination?: string | null;
  readonly deliveredDate?: string | null;
  readonly courierName?: string | null;
  readonly hostname?: string | null;
  readonly storeConfigId?: string | null;
  readonly status?: string | null;
  readonly packagesQuantity?: number | null;
  readonly itemsQuantity?: number | null;
  readonly carrierLogo?: string | null;
  readonly carrierName?: string | null;
  readonly paymentMethod?: string | null;
  readonly serviceType?: ServiceType | keyof typeof ServiceType | null;
  readonly tags?: (string | null)[] | null;
  readonly deadline?: string | null;
  readonly creationDate?: string | null;
  readonly metaData?: SearchServiceMetaData | null;
  readonly transferManagement?: ServiceTransferManagement | null;
}

export declare type ServiceOpenSearch = LazyLoading extends LazyLoadingDisabled ? EagerServiceOpenSearch : LazyServiceOpenSearch

export declare const ServiceOpenSearch: (new (init: ModelInit<ServiceOpenSearch>) => ServiceOpenSearch)

type EagerSearchServiceMetaData = {
  readonly carrier?: SearchServiceCarrierMeteData | null;
}

type LazySearchServiceMetaData = {
  readonly carrier?: SearchServiceCarrierMeteData | null;
}

export declare type SearchServiceMetaData = LazyLoading extends LazyLoadingDisabled ? EagerSearchServiceMetaData : LazySearchServiceMetaData

export declare const SearchServiceMetaData: (new (init: ModelInit<SearchServiceMetaData>) => SearchServiceMetaData)

type EagerSearchServiceCarrierMeteData = {
  readonly id: string;
  readonly name: string;
  readonly image?: SearchServiceImageMeteData | null;
  readonly type: SearchServiceType;
}

type LazySearchServiceCarrierMeteData = {
  readonly id: string;
  readonly name: string;
  readonly image?: SearchServiceImageMeteData | null;
  readonly type: SearchServiceType;
}

export declare type SearchServiceCarrierMeteData = LazyLoading extends LazyLoadingDisabled ? EagerSearchServiceCarrierMeteData : LazySearchServiceCarrierMeteData

export declare const SearchServiceCarrierMeteData: (new (init: ModelInit<SearchServiceCarrierMeteData>) => SearchServiceCarrierMeteData)

type EagerSearchServiceImageMeteData = {
  readonly content: string;
  readonly type: string;
}

type LazySearchServiceImageMeteData = {
  readonly content: string;
  readonly type: string;
}

export declare type SearchServiceImageMeteData = LazyLoading extends LazyLoadingDisabled ? EagerSearchServiceImageMeteData : LazySearchServiceImageMeteData

export declare const SearchServiceImageMeteData: (new (init: ModelInit<SearchServiceImageMeteData>) => SearchServiceImageMeteData)

type EagerSearchServiceType = {
  readonly id: string;
  readonly name: string;
}

type LazySearchServiceType = {
  readonly id: string;
  readonly name: string;
}

export declare type SearchServiceType = LazyLoading extends LazyLoadingDisabled ? EagerSearchServiceType : LazySearchServiceType

export declare const SearchServiceType: (new (init: ModelInit<SearchServiceType>) => SearchServiceType)

type EagerServiceEvidence = {
  readonly type: ServiceEvidenceType | keyof typeof ServiceEvidenceType;
  readonly content?: string | null;
  readonly date: string;
  readonly author?: string | null;
}

type LazyServiceEvidence = {
  readonly type: ServiceEvidenceType | keyof typeof ServiceEvidenceType;
  readonly content?: string | null;
  readonly date: string;
  readonly author?: string | null;
}

export declare type ServiceEvidence = LazyLoading extends LazyLoadingDisabled ? EagerServiceEvidence : LazyServiceEvidence

export declare const ServiceEvidence: (new (init: ModelInit<ServiceEvidence>) => ServiceEvidence)

type EagerServiceSender = {
  readonly name?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly country?: string | null;
  readonly neighborhood?: string | null;
  readonly address?: string | null;
  readonly addressComplement?: string | null;
  readonly reference?: string | null;
  readonly number?: string | null;
  readonly location?: CLocation | null;
  readonly pickupDate: string;
  readonly deliveryWindow?: ServiceDeliveryWindow | null;
  readonly zipCode?: string | null;
}

type LazyServiceSender = {
  readonly name?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly country?: string | null;
  readonly neighborhood?: string | null;
  readonly address?: string | null;
  readonly addressComplement?: string | null;
  readonly reference?: string | null;
  readonly number?: string | null;
  readonly location?: CLocation | null;
  readonly pickupDate: string;
  readonly deliveryWindow?: ServiceDeliveryWindow | null;
  readonly zipCode?: string | null;
}

export declare type ServiceSender = LazyLoading extends LazyLoadingDisabled ? EagerServiceSender : LazyServiceSender

export declare const ServiceSender: (new (init: ModelInit<ServiceSender>) => ServiceSender)

type EagerServiceReceiver = {
  readonly name?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly country?: string | null;
  readonly neighborhood?: string | null;
  readonly address?: string | null;
  readonly addressComplement?: string | null;
  readonly reference?: string | null;
  readonly number?: string | null;
  readonly location?: CLocation | null;
  readonly identification?: string | null;
  readonly deliveryDate: string;
  readonly deliveryWindow?: ServiceDeliveryWindow | null;
  readonly contactName?: string | null;
  readonly zipCode?: string | null;
}

type LazyServiceReceiver = {
  readonly name?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly country?: string | null;
  readonly neighborhood?: string | null;
  readonly address?: string | null;
  readonly addressComplement?: string | null;
  readonly reference?: string | null;
  readonly number?: string | null;
  readonly location?: CLocation | null;
  readonly identification?: string | null;
  readonly deliveryDate: string;
  readonly deliveryWindow?: ServiceDeliveryWindow | null;
  readonly contactName?: string | null;
  readonly zipCode?: string | null;
}

export declare type ServiceReceiver = LazyLoading extends LazyLoadingDisabled ? EagerServiceReceiver : LazyServiceReceiver

export declare const ServiceReceiver: (new (init: ModelInit<ServiceReceiver>) => ServiceReceiver)

type EagerServiceDeliveryWindow = {
  readonly name?: string | null;
  readonly initialDate?: string | null;
  readonly finalDate?: string | null;
}

type LazyServiceDeliveryWindow = {
  readonly name?: string | null;
  readonly initialDate?: string | null;
  readonly finalDate?: string | null;
}

export declare type ServiceDeliveryWindow = LazyLoading extends LazyLoadingDisabled ? EagerServiceDeliveryWindow : LazyServiceDeliveryWindow

export declare const ServiceDeliveryWindow: (new (init: ModelInit<ServiceDeliveryWindow>) => ServiceDeliveryWindow)

type EagerServiceAgent = {
  readonly id: string;
  readonly name: string;
  readonly identification?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly vehicle?: ServiceVehicle | keyof typeof ServiceVehicle | null;
}

type LazyServiceAgent = {
  readonly id: string;
  readonly name: string;
  readonly identification?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly vehicle?: ServiceVehicle | keyof typeof ServiceVehicle | null;
}

export declare type ServiceAgent = LazyLoading extends LazyLoadingDisabled ? EagerServiceAgent : LazyServiceAgent

export declare const ServiceAgent: (new (init: ModelInit<ServiceAgent>) => ServiceAgent)

type EagerPackageService = {
  readonly id: string;
  readonly orderId: string;
  readonly envelope?: string | null;
  readonly dimensions?: ServiceDimensionsPacking | null;
  readonly weight?: string | null;
  readonly totalValue?: number | null;
  readonly items?: (ServiceItemsPackage | null)[] | null;
  readonly categories?: (string | null)[] | null;
  readonly description?: string | null;
}

type LazyPackageService = {
  readonly id: string;
  readonly orderId: string;
  readonly envelope?: string | null;
  readonly dimensions?: ServiceDimensionsPacking | null;
  readonly weight?: string | null;
  readonly totalValue?: number | null;
  readonly items?: (ServiceItemsPackage | null)[] | null;
  readonly categories?: (string | null)[] | null;
  readonly description?: string | null;
}

export declare type PackageService = LazyLoading extends LazyLoadingDisabled ? EagerPackageService : LazyPackageService

export declare const PackageService: (new (init: ModelInit<PackageService>) => PackageService)

type EagerServiceDimensionsPacking = {
  readonly width?: string | null;
  readonly height?: string | null;
  readonly length?: string | null;
}

type LazyServiceDimensionsPacking = {
  readonly width?: string | null;
  readonly height?: string | null;
  readonly length?: string | null;
}

export declare type ServiceDimensionsPacking = LazyLoading extends LazyLoadingDisabled ? EagerServiceDimensionsPacking : LazyServiceDimensionsPacking

export declare const ServiceDimensionsPacking: (new (init: ModelInit<ServiceDimensionsPacking>) => ServiceDimensionsPacking)

type EagerServiceItemsPackage = {
  readonly id: string;
  readonly name: string;
  readonly ean: string;
  readonly refId?: string | null;
  readonly image?: string | null;
  readonly type?: string | null;
  readonly price: number;
  readonly weight?: string | null;
  readonly quantity: number;
}

type LazyServiceItemsPackage = {
  readonly id: string;
  readonly name: string;
  readonly ean: string;
  readonly refId?: string | null;
  readonly image?: string | null;
  readonly type?: string | null;
  readonly price: number;
  readonly weight?: string | null;
  readonly quantity: number;
}

export declare type ServiceItemsPackage = LazyLoading extends LazyLoadingDisabled ? EagerServiceItemsPackage : LazyServiceItemsPackage

export declare const ServiceItemsPackage: (new (init: ModelInit<ServiceItemsPackage>) => ServiceItemsPackage)

type EagerServiceTimeline = {
  readonly status: ServiceStatus | keyof typeof ServiceStatus;
  readonly date: string;
}

type LazyServiceTimeline = {
  readonly status: ServiceStatus | keyof typeof ServiceStatus;
  readonly date: string;
}

export declare type ServiceTimeline = LazyLoading extends LazyLoadingDisabled ? EagerServiceTimeline : LazyServiceTimeline

export declare const ServiceTimeline: (new (init: ModelInit<ServiceTimeline>) => ServiceTimeline)

type EagerServiceNotes = {
  readonly type: ServiceNotesType | keyof typeof ServiceNotesType;
  readonly date: string;
  readonly content: string;
  readonly author?: string | null;
}

type LazyServiceNotes = {
  readonly type: ServiceNotesType | keyof typeof ServiceNotesType;
  readonly date: string;
  readonly content: string;
  readonly author?: string | null;
}

export declare type ServiceNotes = LazyLoading extends LazyLoadingDisabled ? EagerServiceNotes : LazyServiceNotes

export declare const ServiceNotes: (new (init: ModelInit<ServiceNotes>) => ServiceNotes)

type EagerServiceCollection = {
  readonly confirmationDate?: string | null;
  readonly code: string;
}

type LazyServiceCollection = {
  readonly confirmationDate?: string | null;
  readonly code: string;
}

export declare type ServiceCollection = LazyLoading extends LazyLoadingDisabled ? EagerServiceCollection : LazyServiceCollection

export declare const ServiceCollection: (new (init: ModelInit<ServiceCollection>) => ServiceCollection)

type EagerServiceTransferManagement = {
  readonly fromService?: string | null;
  readonly newService?: string | null;
  readonly storeConfig: ServiceStoreConfig;
}

type LazyServiceTransferManagement = {
  readonly fromService?: string | null;
  readonly newService?: string | null;
  readonly storeConfig: ServiceStoreConfig;
}

export declare type ServiceTransferManagement = LazyLoading extends LazyLoadingDisabled ? EagerServiceTransferManagement : LazyServiceTransferManagement

export declare const ServiceTransferManagement: (new (init: ModelInit<ServiceTransferManagement>) => ServiceTransferManagement)

type EagerServiceStoreConfig = {
  readonly storeConfigOrigin: string;
  readonly storeConfigDestination: string;
  readonly salesSourceNameOrigin: string;
  readonly salesSourceNameDestination: string;
  readonly salesChannelNameOrigin?: string | null;
  readonly salesChannelNameDestination?: string | null;
}

type LazyServiceStoreConfig = {
  readonly storeConfigOrigin: string;
  readonly storeConfigDestination: string;
  readonly salesSourceNameOrigin: string;
  readonly salesSourceNameDestination: string;
  readonly salesChannelNameOrigin?: string | null;
  readonly salesChannelNameDestination?: string | null;
}

export declare type ServiceStoreConfig = LazyLoading extends LazyLoadingDisabled ? EagerServiceStoreConfig : LazyServiceStoreConfig

export declare const ServiceStoreConfig: (new (init: ModelInit<ServiceStoreConfig>) => ServiceStoreConfig)

type EagerCategoriesConfiguration = {
  readonly id: string;
  readonly priority?: number | null;
  readonly name?: string | null;
  readonly parentId?: string | null;
  readonly hasChildren?: boolean | null;
  readonly url?: string | null;
  readonly title?: string | null;
  readonly metaTagDescription?: string | null;
  readonly left?: number | null;
  readonly right?: number | null;
}

type LazyCategoriesConfiguration = {
  readonly id: string;
  readonly priority?: number | null;
  readonly name?: string | null;
  readonly parentId?: string | null;
  readonly hasChildren?: boolean | null;
  readonly url?: string | null;
  readonly title?: string | null;
  readonly metaTagDescription?: string | null;
  readonly left?: number | null;
  readonly right?: number | null;
}

export declare type CategoriesConfiguration = LazyLoading extends LazyLoadingDisabled ? EagerCategoriesConfiguration : LazyCategoriesConfiguration

export declare const CategoriesConfiguration: (new (init: ModelInit<CategoriesConfiguration>) => CategoriesConfiguration)

type EagerGeneralConfig = {
  readonly address?: string | null;
  readonly addressComplement?: string | null;
  readonly neighborhood?: string | null;
  readonly postalCode?: string | null;
  readonly reference?: string | null;
  readonly number?: string | null;
  readonly city?: string | null;
  readonly changePricesReasons?: (Reason | null)[] | null;
  readonly contactInformation?: ContactInformation | null;
  readonly country?: string | null;
  readonly deliveryWindow?: (DeliveryWindow | null)[] | null;
  readonly location?: StoreLocation | null;
  readonly measurementUnit?: string | null;
  readonly name?: string | null;
  readonly replacementReasons?: (Reason | null)[] | null;
  readonly state?: string | null;
}

type LazyGeneralConfig = {
  readonly address?: string | null;
  readonly addressComplement?: string | null;
  readonly neighborhood?: string | null;
  readonly postalCode?: string | null;
  readonly reference?: string | null;
  readonly number?: string | null;
  readonly city?: string | null;
  readonly changePricesReasons?: (Reason | null)[] | null;
  readonly contactInformation?: ContactInformation | null;
  readonly country?: string | null;
  readonly deliveryWindow?: (DeliveryWindow | null)[] | null;
  readonly location?: StoreLocation | null;
  readonly measurementUnit?: string | null;
  readonly name?: string | null;
  readonly replacementReasons?: (Reason | null)[] | null;
  readonly state?: string | null;
}

export declare type GeneralConfig = LazyLoading extends LazyLoadingDisabled ? EagerGeneralConfig : LazyGeneralConfig

export declare const GeneralConfig: (new (init: ModelInit<GeneralConfig>) => GeneralConfig)

type EagerDeliveryWindow = {
  readonly finalHour?: string | null;
  readonly initialHour?: string | null;
  readonly name?: string | null;
  readonly weekDay?: number | null;
}

type LazyDeliveryWindow = {
  readonly finalHour?: string | null;
  readonly initialHour?: string | null;
  readonly name?: string | null;
  readonly weekDay?: number | null;
}

export declare type DeliveryWindow = LazyLoading extends LazyLoadingDisabled ? EagerDeliveryWindow : LazyDeliveryWindow

export declare const DeliveryWindow: (new (init: ModelInit<DeliveryWindow>) => DeliveryWindow)

type EagerReason = {
  readonly id?: string | null;
  readonly name?: string | null;
}

type LazyReason = {
  readonly id?: string | null;
  readonly name?: string | null;
}

export declare type Reason = LazyLoading extends LazyLoadingDisabled ? EagerReason : LazyReason

export declare const Reason: (new (init: ModelInit<Reason>) => Reason)

type EagerStoreLocation = {
  readonly latitude?: number | null;
  readonly longitude?: number | null;
}

type LazyStoreLocation = {
  readonly latitude?: number | null;
  readonly longitude?: number | null;
}

export declare type StoreLocation = LazyLoading extends LazyLoadingDisabled ? EagerStoreLocation : LazyStoreLocation

export declare const StoreLocation: (new (init: ModelInit<StoreLocation>) => StoreLocation)

type EagerContactInformation = {
  readonly email?: string | null;
  readonly name?: string | null;
  readonly phone?: string | null;
}

type LazyContactInformation = {
  readonly email?: string | null;
  readonly name?: string | null;
  readonly phone?: string | null;
}

export declare type ContactInformation = LazyLoading extends LazyLoadingDisabled ? EagerContactInformation : LazyContactInformation

export declare const ContactInformation: (new (init: ModelInit<ContactInformation>) => ContactInformation)

type EagerDock = {
  readonly dockId?: string | null;
  readonly time?: string | null;
  readonly cost?: number | null;
}

type LazyDock = {
  readonly dockId?: string | null;
  readonly time?: string | null;
  readonly cost?: number | null;
}

export declare type Dock = LazyLoading extends LazyLoadingDisabled ? EagerDock : LazyDock

export declare const Dock: (new (init: ModelInit<Dock>) => Dock)

type EagerWarehouse = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly warehouseDocks?: (Dock | null)[] | null;
  readonly pickupPointIds?: (string | null)[] | null;
  readonly priority?: number | null;
  readonly isActive?: boolean | null;
}

type LazyWarehouse = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly warehouseDocks?: (Dock | null)[] | null;
  readonly pickupPointIds?: (string | null)[] | null;
  readonly priority?: number | null;
  readonly isActive?: boolean | null;
}

export declare type Warehouse = LazyLoading extends LazyLoadingDisabled ? EagerWarehouse : LazyWarehouse

export declare const Warehouse: (new (init: ModelInit<Warehouse>) => Warehouse)

type EagerWebhookVariables = {
  readonly key?: string | null;
  readonly value?: string | null;
}

type LazyWebhookVariables = {
  readonly key?: string | null;
  readonly value?: string | null;
}

export declare type WebhookVariables = LazyLoading extends LazyLoadingDisabled ? EagerWebhookVariables : LazyWebhookVariables

export declare const WebhookVariables: (new (init: ModelInit<WebhookVariables>) => WebhookVariables)

type EagerPauses = {
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly reason?: string | null;
  readonly user?: string | null;
  readonly reasonType?: PauseReasonType | keyof typeof PauseReasonType | null;
}

type LazyPauses = {
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly reason?: string | null;
  readonly user?: string | null;
  readonly reasonType?: PauseReasonType | keyof typeof PauseReasonType | null;
}

export declare type Pauses = LazyLoading extends LazyLoadingDisabled ? EagerPauses : LazyPauses

export declare const Pauses: (new (init: ModelInit<Pauses>) => Pauses)

type EagerWorksheetNotes = {
  readonly id?: string | null;
  readonly user?: string | null;
  readonly note?: string | null;
}

type LazyWorksheetNotes = {
  readonly id?: string | null;
  readonly user?: string | null;
  readonly note?: string | null;
}

export declare type WorksheetNotes = LazyLoading extends LazyLoadingDisabled ? EagerWorksheetNotes : LazyWorksheetNotes

export declare const WorksheetNotes: (new (init: ModelInit<WorksheetNotes>) => WorksheetNotes)

type EagerOrderPriority = {
  readonly orderId?: string | null;
  readonly shippingEstimatedDate?: string | null;
  readonly totalValue?: number | null;
  readonly priority?: number | null;
  readonly isInvoiced?: boolean | null;
  readonly itemsQuantity?: number | null;
  readonly unitsQuantity?: number | null;
  readonly paymentMethodName?: string | null;
  readonly paymentMethodId?: string | null;
  readonly shippingMethodName?: string | null;
  readonly shippingMethodType?: string | null;
  readonly shippingMethodId?: string | null;
  readonly customer?: CustomerWorksheet | null;
}

type LazyOrderPriority = {
  readonly orderId?: string | null;
  readonly shippingEstimatedDate?: string | null;
  readonly totalValue?: number | null;
  readonly priority?: number | null;
  readonly isInvoiced?: boolean | null;
  readonly itemsQuantity?: number | null;
  readonly unitsQuantity?: number | null;
  readonly paymentMethodName?: string | null;
  readonly paymentMethodId?: string | null;
  readonly shippingMethodName?: string | null;
  readonly shippingMethodType?: string | null;
  readonly shippingMethodId?: string | null;
  readonly customer?: CustomerWorksheet | null;
}

export declare type OrderPriority = LazyLoading extends LazyLoadingDisabled ? EagerOrderPriority : LazyOrderPriority

export declare const OrderPriority: (new (init: ModelInit<OrderPriority>) => OrderPriority)

type EagerCustomerWorksheet = {
  readonly id?: string | null;
  readonly profileId?: string | null;
  readonly publicName?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly document?: string | null;
  readonly documentType?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
}

type LazyCustomerWorksheet = {
  readonly id?: string | null;
  readonly profileId?: string | null;
  readonly publicName?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly document?: string | null;
  readonly documentType?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
}

export declare type CustomerWorksheet = LazyLoading extends LazyLoadingDisabled ? EagerCustomerWorksheet : LazyCustomerWorksheet

export declare const CustomerWorksheet: (new (init: ModelInit<CustomerWorksheet>) => CustomerWorksheet)

type EagerSubstituteItem = {
  readonly id?: string | null;
  readonly refId?: string | null;
  readonly ean?: string | null;
  readonly price?: number | null;
  readonly name?: string | null;
  readonly quantity?: number | null;
  readonly image?: string | null;
  readonly categories?: (Category | null)[] | null;
}

type LazySubstituteItem = {
  readonly id?: string | null;
  readonly refId?: string | null;
  readonly ean?: string | null;
  readonly price?: number | null;
  readonly name?: string | null;
  readonly quantity?: number | null;
  readonly image?: string | null;
  readonly categories?: (Category | null)[] | null;
}

export declare type SubstituteItem = LazyLoading extends LazyLoadingDisabled ? EagerSubstituteItem : LazySubstituteItem

export declare const SubstituteItem: (new (init: ModelInit<SubstituteItem>) => SubstituteItem)

type EagerCategory = {
  readonly id?: string | null;
  readonly name?: string | null;
}

type LazyCategory = {
  readonly id?: string | null;
  readonly name?: string | null;
}

export declare type Category = LazyLoading extends LazyLoadingDisabled ? EagerCategory : LazyCategory

export declare const Category: (new (init: ModelInit<Category>) => Category)

type EagerPickerAssignment = {
  readonly active?: boolean | null;
  readonly pickerId?: string | null;
  readonly method?: AssignmentMethod | keyof typeof AssignmentMethod | null;
  readonly assignmentDate?: string | null;
  readonly finishedDate?: string | null;
  readonly notes?: (string | null)[] | null;
}

type LazyPickerAssignment = {
  readonly active?: boolean | null;
  readonly pickerId?: string | null;
  readonly method?: AssignmentMethod | keyof typeof AssignmentMethod | null;
  readonly assignmentDate?: string | null;
  readonly finishedDate?: string | null;
  readonly notes?: (string | null)[] | null;
}

export declare type PickerAssignment = LazyLoading extends LazyLoadingDisabled ? EagerPickerAssignment : LazyPickerAssignment

export declare const PickerAssignment: (new (init: ModelInit<PickerAssignment>) => PickerAssignment)

type EagerItemsByWorksheet = {
  readonly categories?: (Category | null)[] | null;
  readonly brand?: Taxonomy | null;
  readonly id?: string | null;
  readonly itemAssignment?: ItemAssignment | null;
  readonly name?: string | null;
  readonly originalQuantity?: number | null;
  readonly orderSource?: (OrderSource | null)[] | null;
  readonly temperature?: string | null;
  readonly isWeighable?: boolean | null;
  readonly completedQuantity?: number | null;
  readonly pickedQuantity?: number | null;
  readonly rejectedQuantity?: number | null;
  readonly replacedQuantity?: number | null;
  readonly skus?: (string | null)[] | null;
  readonly eans?: (string | null)[] | null;
  readonly refs?: (string | null)[] | null;
  readonly image?: string | null;
}

type LazyItemsByWorksheet = {
  readonly categories?: (Category | null)[] | null;
  readonly brand?: Taxonomy | null;
  readonly id?: string | null;
  readonly itemAssignment?: ItemAssignment | null;
  readonly name?: string | null;
  readonly originalQuantity?: number | null;
  readonly orderSource?: (OrderSource | null)[] | null;
  readonly temperature?: string | null;
  readonly isWeighable?: boolean | null;
  readonly completedQuantity?: number | null;
  readonly pickedQuantity?: number | null;
  readonly rejectedQuantity?: number | null;
  readonly replacedQuantity?: number | null;
  readonly skus?: (string | null)[] | null;
  readonly eans?: (string | null)[] | null;
  readonly refs?: (string | null)[] | null;
  readonly image?: string | null;
}

export declare type ItemsByWorksheet = LazyLoading extends LazyLoadingDisabled ? EagerItemsByWorksheet : LazyItemsByWorksheet

export declare const ItemsByWorksheet: (new (init: ModelInit<ItemsByWorksheet>) => ItemsByWorksheet)

type EagerReplacedItemsByWorksheet = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly originalQuantity?: number | null;
  readonly orderSource?: (ReplacedOrderSource | null)[] | null;
  readonly temperature?: string | null;
  readonly isWeighable?: boolean | null;
  readonly replacedQuantity?: number | null;
  readonly image?: string | null;
}

type LazyReplacedItemsByWorksheet = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly originalQuantity?: number | null;
  readonly orderSource?: (ReplacedOrderSource | null)[] | null;
  readonly temperature?: string | null;
  readonly isWeighable?: boolean | null;
  readonly replacedQuantity?: number | null;
  readonly image?: string | null;
}

export declare type ReplacedItemsByWorksheet = LazyLoading extends LazyLoadingDisabled ? EagerReplacedItemsByWorksheet : LazyReplacedItemsByWorksheet

export declare const ReplacedItemsByWorksheet: (new (init: ModelInit<ReplacedItemsByWorksheet>) => ReplacedItemsByWorksheet)

type EagerReplacedOrderSource = {
  readonly orderId?: string | null;
  readonly quantity?: number | null;
  readonly sellingPrice?: number | null;
  readonly listPrice?: number | null;
  readonly currencyCode?: string | null;
  readonly unitOfMeasure?: UnitOfMeasure | keyof typeof UnitOfMeasure | null;
  readonly unitMultiplier?: number | null;
  readonly originalUnitMultiplier?: number | null;
  readonly replacedQuantity?: number | null;
  readonly replacedBy?: (string | null)[] | null;
  readonly reasons?: (Reasons | null)[] | null;
}

type LazyReplacedOrderSource = {
  readonly orderId?: string | null;
  readonly quantity?: number | null;
  readonly sellingPrice?: number | null;
  readonly listPrice?: number | null;
  readonly currencyCode?: string | null;
  readonly unitOfMeasure?: UnitOfMeasure | keyof typeof UnitOfMeasure | null;
  readonly unitMultiplier?: number | null;
  readonly originalUnitMultiplier?: number | null;
  readonly replacedQuantity?: number | null;
  readonly replacedBy?: (string | null)[] | null;
  readonly reasons?: (Reasons | null)[] | null;
}

export declare type ReplacedOrderSource = LazyLoading extends LazyLoadingDisabled ? EagerReplacedOrderSource : LazyReplacedOrderSource

export declare const ReplacedOrderSource: (new (init: ModelInit<ReplacedOrderSource>) => ReplacedOrderSource)

type EagerRejectedItemsByWorksheet = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly originalQuantity?: number | null;
  readonly orderSource?: (RejectedOrderSource | null)[] | null;
  readonly temperature?: string | null;
  readonly isWeighable?: boolean | null;
  readonly rejectedQuantity?: number | null;
  readonly image?: string | null;
}

type LazyRejectedItemsByWorksheet = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly originalQuantity?: number | null;
  readonly orderSource?: (RejectedOrderSource | null)[] | null;
  readonly temperature?: string | null;
  readonly isWeighable?: boolean | null;
  readonly rejectedQuantity?: number | null;
  readonly image?: string | null;
}

export declare type RejectedItemsByWorksheet = LazyLoading extends LazyLoadingDisabled ? EagerRejectedItemsByWorksheet : LazyRejectedItemsByWorksheet

export declare const RejectedItemsByWorksheet: (new (init: ModelInit<RejectedItemsByWorksheet>) => RejectedItemsByWorksheet)

type EagerRejectedOrderSource = {
  readonly orderId?: string | null;
  readonly quantity?: number | null;
  readonly sellingPrice?: number | null;
  readonly listPrice?: number | null;
  readonly unitOfMeasure?: UnitOfMeasure | keyof typeof UnitOfMeasure | null;
  readonly unitMultiplier?: number | null;
  readonly originalUnitMultiplier?: number | null;
  readonly currencyCode?: string | null;
  readonly rejectedQuantity?: number | null;
  readonly reasons?: (Reasons | null)[] | null;
}

type LazyRejectedOrderSource = {
  readonly orderId?: string | null;
  readonly quantity?: number | null;
  readonly sellingPrice?: number | null;
  readonly listPrice?: number | null;
  readonly unitOfMeasure?: UnitOfMeasure | keyof typeof UnitOfMeasure | null;
  readonly unitMultiplier?: number | null;
  readonly originalUnitMultiplier?: number | null;
  readonly currencyCode?: string | null;
  readonly rejectedQuantity?: number | null;
  readonly reasons?: (Reasons | null)[] | null;
}

export declare type RejectedOrderSource = LazyLoading extends LazyLoadingDisabled ? EagerRejectedOrderSource : LazyRejectedOrderSource

export declare const RejectedOrderSource: (new (init: ModelInit<RejectedOrderSource>) => RejectedOrderSource)

type EagerReasons = {
  readonly reasonType?: string | null;
  readonly reasonDetail?: string | null;
}

type LazyReasons = {
  readonly reasonType?: string | null;
  readonly reasonDetail?: string | null;
}

export declare type Reasons = LazyLoading extends LazyLoadingDisabled ? EagerReasons : LazyReasons

export declare const Reasons: (new (init: ModelInit<Reasons>) => Reasons)

type EagerPickedItemsByWorksheet = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly originalQuantity?: number | null;
  readonly orderSource?: (PickedOrderSource | null)[] | null;
  readonly temperature?: string | null;
  readonly isWeighable?: boolean | null;
  readonly pickedQuantity?: number | null;
  readonly packedQuantity?: number | null;
  readonly dynamicBarcode?: string | null;
  readonly image?: string | null;
}

type LazyPickedItemsByWorksheet = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly originalQuantity?: number | null;
  readonly orderSource?: (PickedOrderSource | null)[] | null;
  readonly temperature?: string | null;
  readonly isWeighable?: boolean | null;
  readonly pickedQuantity?: number | null;
  readonly packedQuantity?: number | null;
  readonly dynamicBarcode?: string | null;
  readonly image?: string | null;
}

export declare type PickedItemsByWorksheet = LazyLoading extends LazyLoadingDisabled ? EagerPickedItemsByWorksheet : LazyPickedItemsByWorksheet

export declare const PickedItemsByWorksheet: (new (init: ModelInit<PickedItemsByWorksheet>) => PickedItemsByWorksheet)

type EagerPickedOrderSource = {
  readonly orderId?: string | null;
  readonly sellingPrice?: number | null;
  readonly listPrice?: number | null;
  readonly currencyCode?: string | null;
  readonly quantity?: number | null;
  readonly unitOfMeasure?: UnitOfMeasure | keyof typeof UnitOfMeasure | null;
  readonly unitMultiplier?: number | null;
  readonly originalUnitMultiplier?: number | null;
  readonly pickedQuantity?: number | null;
  readonly packedQuantity?: number | null;
}

type LazyPickedOrderSource = {
  readonly orderId?: string | null;
  readonly sellingPrice?: number | null;
  readonly listPrice?: number | null;
  readonly currencyCode?: string | null;
  readonly quantity?: number | null;
  readonly unitOfMeasure?: UnitOfMeasure | keyof typeof UnitOfMeasure | null;
  readonly unitMultiplier?: number | null;
  readonly originalUnitMultiplier?: number | null;
  readonly pickedQuantity?: number | null;
  readonly packedQuantity?: number | null;
}

export declare type PickedOrderSource = LazyLoading extends LazyLoadingDisabled ? EagerPickedOrderSource : LazyPickedOrderSource

export declare const PickedOrderSource: (new (init: ModelInit<PickedOrderSource>) => PickedOrderSource)

type EagerItemAssignment = {
  readonly assignedAt?: string | null;
  readonly startPickingAt?: string | null;
  readonly finishedAt?: string | null;
}

type LazyItemAssignment = {
  readonly assignedAt?: string | null;
  readonly startPickingAt?: string | null;
  readonly finishedAt?: string | null;
}

export declare type ItemAssignment = LazyLoading extends LazyLoadingDisabled ? EagerItemAssignment : LazyItemAssignment

export declare const ItemAssignment: (new (init: ModelInit<ItemAssignment>) => ItemAssignment)

type EagerOrderSource = {
  readonly orderId?: string | null;
  readonly sellingPrice?: number | null;
  readonly listPrice?: number | null;
  readonly quantity?: number | null;
  readonly unitOfMeasure?: UnitOfMeasure | keyof typeof UnitOfMeasure | null;
  readonly unitMultiplier?: number | null;
  readonly originalUnitMultiplier?: number | null;
  readonly currencyCode?: string | null;
  readonly pickedQuantity?: number | null;
  readonly rejectedQuantity?: number | null;
  readonly replacedQuantity?: number | null;
  readonly replacedBy?: (string | null)[] | null;
  readonly transferredWorksheetId?: string | null;
  readonly isTransferred?: boolean | null;
  readonly transferredStoreConfigId?: string | null;
  readonly notes: (WorksheetNotes | null)[];
  readonly status: ItemInWorksheetStatus | keyof typeof ItemInWorksheetStatus;
  readonly pickingOptions?: ItemPickingOptions | null;
  readonly location?: string | null;
}

type LazyOrderSource = {
  readonly orderId?: string | null;
  readonly sellingPrice?: number | null;
  readonly listPrice?: number | null;
  readonly quantity?: number | null;
  readonly unitOfMeasure?: UnitOfMeasure | keyof typeof UnitOfMeasure | null;
  readonly unitMultiplier?: number | null;
  readonly originalUnitMultiplier?: number | null;
  readonly currencyCode?: string | null;
  readonly pickedQuantity?: number | null;
  readonly rejectedQuantity?: number | null;
  readonly replacedQuantity?: number | null;
  readonly replacedBy?: (string | null)[] | null;
  readonly transferredWorksheetId?: string | null;
  readonly isTransferred?: boolean | null;
  readonly transferredStoreConfigId?: string | null;
  readonly notes: (WorksheetNotes | null)[];
  readonly status: ItemInWorksheetStatus | keyof typeof ItemInWorksheetStatus;
  readonly pickingOptions?: ItemPickingOptions | null;
  readonly location?: string | null;
}

export declare type OrderSource = LazyLoading extends LazyLoadingDisabled ? EagerOrderSource : LazyOrderSource

export declare const OrderSource: (new (init: ModelInit<OrderSource>) => OrderSource)

type EagerWorksheetStatsResponse = {
  readonly date?: string | null;
  readonly pendingWorksheets?: number | null;
  readonly completedWorksheets?: number | null;
  readonly totalWorksheets?: number | null;
}

type LazyWorksheetStatsResponse = {
  readonly date?: string | null;
  readonly pendingWorksheets?: number | null;
  readonly completedWorksheets?: number | null;
  readonly totalWorksheets?: number | null;
}

export declare type WorksheetStatsResponse = LazyLoading extends LazyLoadingDisabled ? EagerWorksheetStatsResponse : LazyWorksheetStatsResponse

export declare const WorksheetStatsResponse: (new (init: ModelInit<WorksheetStatsResponse>) => WorksheetStatsResponse)

type EagerOrderIdsOpenSearch = {
  readonly orderId?: string | null;
  readonly itemsQuantity?: number | null;
  readonly unitsQuantity?: number | null;
}

type LazyOrderIdsOpenSearch = {
  readonly orderId?: string | null;
  readonly itemsQuantity?: number | null;
  readonly unitsQuantity?: number | null;
}

export declare type OrderIdsOpenSearch = LazyLoading extends LazyLoadingDisabled ? EagerOrderIdsOpenSearch : LazyOrderIdsOpenSearch

export declare const OrderIdsOpenSearch: (new (init: ModelInit<OrderIdsOpenSearch>) => OrderIdsOpenSearch)

type EagerWorksheetOpenSearch = {
  readonly worksheetId?: string | null;
  readonly id?: string | null;
  readonly isPaused?: boolean | null;
  readonly pauses?: (Pauses | null)[] | null;
  readonly status?: WorksheetStatus | keyof typeof WorksheetStatus | null;
  readonly ordersIds?: (OrderIdsOpenSearch | null)[] | null;
  readonly storeConfig?: string | null;
  readonly hostname?: string | null;
  readonly categoriesIds?: (string | null)[] | null;
  readonly items?: (string | null)[] | null;
  readonly pickerAssignment?: (PickerAssignment | null)[] | null;
  readonly itemsQuantity?: number | null;
  readonly unitsQuantity?: number | null;
  readonly completedUnitsQuantity?: number | null;
  readonly packedUnitsQuantity?: number | null;
  readonly deliveryWindow?: DeliveryWindow | null;
  readonly finishedDate?: string | null;
  readonly finishEstimatedDate?: string | null;
  readonly initDate?: string | null;
  readonly createdAt?: string | null;
}

type LazyWorksheetOpenSearch = {
  readonly worksheetId?: string | null;
  readonly id?: string | null;
  readonly isPaused?: boolean | null;
  readonly pauses?: (Pauses | null)[] | null;
  readonly status?: WorksheetStatus | keyof typeof WorksheetStatus | null;
  readonly ordersIds?: (OrderIdsOpenSearch | null)[] | null;
  readonly storeConfig?: string | null;
  readonly hostname?: string | null;
  readonly categoriesIds?: (string | null)[] | null;
  readonly items?: (string | null)[] | null;
  readonly pickerAssignment?: (PickerAssignment | null)[] | null;
  readonly itemsQuantity?: number | null;
  readonly unitsQuantity?: number | null;
  readonly completedUnitsQuantity?: number | null;
  readonly packedUnitsQuantity?: number | null;
  readonly deliveryWindow?: DeliveryWindow | null;
  readonly finishedDate?: string | null;
  readonly finishEstimatedDate?: string | null;
  readonly initDate?: string | null;
  readonly createdAt?: string | null;
}

export declare type WorksheetOpenSearch = LazyLoading extends LazyLoadingDisabled ? EagerWorksheetOpenSearch : LazyWorksheetOpenSearch

export declare const WorksheetOpenSearch: (new (init: ModelInit<WorksheetOpenSearch>) => WorksheetOpenSearch)

type EagerAccount = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Account, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly groups?: (string | null)[] | null;
  readonly name: string;
  readonly activeAccount: boolean;
  readonly isVtexAccount: boolean;
  readonly salesChannels?: (SalesChannel | null)[] | null;
  readonly storeConfig?: (StoreConfig | null)[] | null;
  readonly maxMonthlyOrders: number;
  readonly actualOrders: number;
  readonly configuration?: (CConfigurations | null)[] | null;
  readonly country?: string | null;
  readonly demo?: boolean | null;
  readonly contract?: string | null;
  readonly logo?: string | null;
  readonly email?: string | null;
  readonly contact?: string | null;
  readonly pro?: boolean | null;
  readonly plan?: Plan | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAccount = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Account, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly groups?: (string | null)[] | null;
  readonly name: string;
  readonly activeAccount: boolean;
  readonly isVtexAccount: boolean;
  readonly salesChannels: AsyncCollection<SalesChannel>;
  readonly storeConfig: AsyncCollection<StoreConfig>;
  readonly maxMonthlyOrders: number;
  readonly actualOrders: number;
  readonly configuration?: (CConfigurations | null)[] | null;
  readonly country?: string | null;
  readonly demo?: boolean | null;
  readonly contract?: string | null;
  readonly logo?: string | null;
  readonly email?: string | null;
  readonly contact?: string | null;
  readonly pro?: boolean | null;
  readonly plan?: Plan | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Account = LazyLoading extends LazyLoadingDisabled ? EagerAccount : LazyAccount

export declare const Account: (new (init: ModelInit<Account>) => Account) & {
  copyOf(source: Account, mutator: (draft: MutableModel<Account>) => MutableModel<Account> | void): Account;
}

type EagerAutomation = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Automation, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly seller: string;
  readonly model: string;
  readonly facilities?: (string | null)[] | null;
  readonly typeMethod: string;
  readonly createdAt?: string | null;
  readonly actions?: (Actions | null)[] | null;
  readonly query?: AutomationQuery | null;
  readonly isActive?: boolean | null;
  readonly updatedAt?: string | null;
}

type LazyAutomation = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Automation, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly seller: string;
  readonly model: string;
  readonly facilities?: (string | null)[] | null;
  readonly typeMethod: string;
  readonly createdAt?: string | null;
  readonly actions?: (Actions | null)[] | null;
  readonly query?: AutomationQuery | null;
  readonly isActive?: boolean | null;
  readonly updatedAt?: string | null;
}

export declare type Automation = LazyLoading extends LazyLoadingDisabled ? EagerAutomation : LazyAutomation

export declare const Automation: (new (init: ModelInit<Automation>) => Automation) & {
  copyOf(source: Automation, mutator: (draft: MutableModel<Automation>) => MutableModel<Automation> | void): Automation;
}

type EagerCarrier = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Carrier, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly agencyId: string;
  readonly name: string;
  readonly logo?: string | null;
  readonly authorized: boolean;
  readonly active: boolean;
  readonly cancelable: boolean;
  readonly onHoldServices: boolean;
  readonly countries: string[];
  readonly formConfiguration: CarrierFormConfigurationField[];
  readonly withQueues?: boolean | null;
  readonly allocationTime?: number | null;
  readonly type?: (string | null)[] | null;
  readonly pricing?: CarrierPricing | null;
  readonly integration: CarrierIntegration;
  readonly shippingPaymentMethods?: (string | null)[] | null;
  readonly hasDevEnvironment: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCarrier = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Carrier, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly agencyId: string;
  readonly name: string;
  readonly logo?: string | null;
  readonly authorized: boolean;
  readonly active: boolean;
  readonly cancelable: boolean;
  readonly onHoldServices: boolean;
  readonly countries: string[];
  readonly formConfiguration: CarrierFormConfigurationField[];
  readonly withQueues?: boolean | null;
  readonly allocationTime?: number | null;
  readonly type?: (string | null)[] | null;
  readonly pricing?: CarrierPricing | null;
  readonly integration: CarrierIntegration;
  readonly shippingPaymentMethods?: (string | null)[] | null;
  readonly hasDevEnvironment: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Carrier = LazyLoading extends LazyLoadingDisabled ? EagerCarrier : LazyCarrier

export declare const Carrier: (new (init: ModelInit<Carrier>) => Carrier) & {
  copyOf(source: Carrier, mutator: (draft: MutableModel<Carrier>) => MutableModel<Carrier> | void): Carrier;
}

type EagerCarriersStoreConfig = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<CarriersStoreConfig, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly carrierId: string;
  readonly account: string;
  readonly name?: string | null;
  readonly active: boolean;
  readonly config?: (CarrierStoreConfigSettings | null)[] | null;
  readonly deliveryMethod?: (DeliveryMethod | null)[] | null;
  readonly env: CEnvironment | keyof typeof CEnvironment;
  readonly createService?: boolean | null;
  readonly replicateConfig?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCarriersStoreConfig = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<CarriersStoreConfig, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly carrierId: string;
  readonly account: string;
  readonly name?: string | null;
  readonly active: boolean;
  readonly config?: (CarrierStoreConfigSettings | null)[] | null;
  readonly deliveryMethod?: (DeliveryMethod | null)[] | null;
  readonly env: CEnvironment | keyof typeof CEnvironment;
  readonly createService?: boolean | null;
  readonly replicateConfig?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CarriersStoreConfig = LazyLoading extends LazyLoadingDisabled ? EagerCarriersStoreConfig : LazyCarriersStoreConfig

export declare const CarriersStoreConfig: (new (init: ModelInit<CarriersStoreConfig>) => CarriersStoreConfig) & {
  copyOf(source: CarriersStoreConfig, mutator: (draft: MutableModel<CarriersStoreConfig>) => MutableModel<CarriersStoreConfig> | void): CarriersStoreConfig;
}

type EagerCatalogHistory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CatalogHistory, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly productId: string;
  readonly catalogName: string;
  readonly createdAt: string;
  readonly user: string;
  readonly description: DescriptionChange;
  readonly messageChange: MessageChange;
  readonly updatedAt?: string | null;
}

type LazyCatalogHistory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CatalogHistory, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly productId: string;
  readonly catalogName: string;
  readonly createdAt: string;
  readonly user: string;
  readonly description: DescriptionChange;
  readonly messageChange: MessageChange;
  readonly updatedAt?: string | null;
}

export declare type CatalogHistory = LazyLoading extends LazyLoadingDisabled ? EagerCatalogHistory : LazyCatalogHistory

export declare const CatalogHistory: (new (init: ModelInit<CatalogHistory>) => CatalogHistory) & {
  copyOf(source: CatalogHistory, mutator: (draft: MutableModel<CatalogHistory>) => MutableModel<CatalogHistory> | void): CatalogHistory;
}

type EagerCustomer = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Customer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly groups?: (string | null)[] | null;
  readonly profileId?: string | null;
  readonly publicName?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly document?: string | null;
  readonly documentType?: string | null;
  readonly anonymized?: boolean | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly hashedEmail?: string | null;
  readonly addresses?: (Address | null)[] | null;
  readonly orders?: (Order | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCustomer = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Customer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly groups?: (string | null)[] | null;
  readonly profileId?: string | null;
  readonly publicName?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly document?: string | null;
  readonly documentType?: string | null;
  readonly anonymized?: boolean | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly hashedEmail?: string | null;
  readonly addresses: AsyncCollection<Address>;
  readonly orders: AsyncCollection<Order>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Customer = LazyLoading extends LazyLoadingDisabled ? EagerCustomer : LazyCustomer

export declare const Customer: (new (init: ModelInit<Customer>) => Customer) & {
  copyOf(source: Customer, mutator: (draft: MutableModel<Customer>) => MutableModel<Customer> | void): Customer;
}

type EagerAddress = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Address, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly groups?: (string | null)[] | null;
  readonly contactName?: string | null;
  readonly contactPhone?: string | null;
  readonly customer?: Customer | null;
  readonly customerId: string;
  readonly publicContactName?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly country?: string | null;
  readonly neighborhood?: string | null;
  readonly address?: string | null;
  readonly addressComplement?: string | null;
  readonly reference?: string | null;
  readonly number?: string | null;
  readonly zipCode?: string | null;
  readonly location?: Location | null;
  readonly orders?: (Order | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAddress = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Address, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly groups?: (string | null)[] | null;
  readonly contactName?: string | null;
  readonly contactPhone?: string | null;
  readonly customer: AsyncItem<Customer | undefined>;
  readonly customerId: string;
  readonly publicContactName?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly country?: string | null;
  readonly neighborhood?: string | null;
  readonly address?: string | null;
  readonly addressComplement?: string | null;
  readonly reference?: string | null;
  readonly number?: string | null;
  readonly zipCode?: string | null;
  readonly location?: Location | null;
  readonly orders: AsyncCollection<Order>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Address = LazyLoading extends LazyLoadingDisabled ? EagerAddress : LazyAddress

export declare const Address: (new (init: ModelInit<Address>) => Address) & {
  copyOf(source: Address, mutator: (draft: MutableModel<Address>) => MutableModel<Address> | void): Address;
}

type EagerHistoricalOrder = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<HistoricalOrder, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly orderId: string;
  readonly lastStatus?: string | null;
  readonly orderStatus: string;
  readonly source?: string | null;
  readonly user?: string | null;
  readonly description: string;
  readonly metadata?: string | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

type LazyHistoricalOrder = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<HistoricalOrder, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly orderId: string;
  readonly lastStatus?: string | null;
  readonly orderStatus: string;
  readonly source?: string | null;
  readonly user?: string | null;
  readonly description: string;
  readonly metadata?: string | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

export declare type HistoricalOrder = LazyLoading extends LazyLoadingDisabled ? EagerHistoricalOrder : LazyHistoricalOrder

export declare const HistoricalOrder: (new (init: ModelInit<HistoricalOrder>) => HistoricalOrder) & {
  copyOf(source: HistoricalOrder, mutator: (draft: MutableModel<HistoricalOrder>) => MutableModel<HistoricalOrder> | void): HistoricalOrder;
}

type EagerHistoricalWorksheet = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<HistoricalWorksheet, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly worksheetId: string;
  readonly lastStatus?: string | null;
  readonly worksheetStatus: string;
  readonly source?: string | null;
  readonly user?: string | null;
  readonly description: string;
  readonly metadata?: string | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

type LazyHistoricalWorksheet = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<HistoricalWorksheet, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly worksheetId: string;
  readonly lastStatus?: string | null;
  readonly worksheetStatus: string;
  readonly source?: string | null;
  readonly user?: string | null;
  readonly description: string;
  readonly metadata?: string | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

export declare type HistoricalWorksheet = LazyLoading extends LazyLoadingDisabled ? EagerHistoricalWorksheet : LazyHistoricalWorksheet

export declare const HistoricalWorksheet: (new (init: ModelInit<HistoricalWorksheet>) => HistoricalWorksheet) & {
  copyOf(source: HistoricalWorksheet, mutator: (draft: MutableModel<HistoricalWorksheet>) => MutableModel<HistoricalWorksheet> | void): HistoricalWorksheet;
}

type EagerItemTransfer = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<ItemTransfer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly status?: ItemTransferStatus | keyof typeof ItemTransferStatus | null;
  readonly sourceHostname?: string | null;
  readonly destinationHostname?: string | null;
  readonly sourceFulfillmentId: string;
  readonly destinationFulfillmentId?: string | null;
  readonly sourceFacility: string;
  readonly destinationFacility: string;
  readonly orderId: string;
  readonly item?: ItemsByTransfer | null;
  readonly sourceWorksheetId: string;
  readonly destinationWorksheetId?: string | null;
  readonly userApproval?: ActionRegister | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyItemTransfer = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<ItemTransfer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly status?: ItemTransferStatus | keyof typeof ItemTransferStatus | null;
  readonly sourceHostname?: string | null;
  readonly destinationHostname?: string | null;
  readonly sourceFulfillmentId: string;
  readonly destinationFulfillmentId?: string | null;
  readonly sourceFacility: string;
  readonly destinationFacility: string;
  readonly orderId: string;
  readonly item?: ItemsByTransfer | null;
  readonly sourceWorksheetId: string;
  readonly destinationWorksheetId?: string | null;
  readonly userApproval?: ActionRegister | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ItemTransfer = LazyLoading extends LazyLoadingDisabled ? EagerItemTransfer : LazyItemTransfer

export declare const ItemTransfer: (new (init: ModelInit<ItemTransfer>) => ItemTransfer) & {
  copyOf(source: ItemTransfer, mutator: (draft: MutableModel<ItemTransfer>) => MutableModel<ItemTransfer> | void): ItemTransfer;
}

type EagerItemV2 = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<ItemV2, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pickers?: (string | null)[] | null;
  readonly groups?: (string | null)[] | null;
  readonly images?: (string | null)[] | null;
  readonly itemId?: string | null;
  readonly productId?: string | null;
  readonly orderId?: string | null;
  readonly fulfillment?: (FulfillmentV2 | null)[] | null;
  readonly eans?: (string | null)[] | null;
  readonly skus?: (string | null)[] | null;
  readonly refs?: (string | null)[] | null;
  readonly isWeighable?: boolean | null;
  readonly currencyCode?: string | null;
  readonly name?: string | null;
  readonly unitOfMeasure?: UnitOfMeasure | keyof typeof UnitOfMeasure | null;
  readonly quantity?: number | null;
  readonly completedQuantity?: number | null;
  readonly unitMultiplier?: number | null;
  readonly listPrice?: number | null;
  readonly sellingPrice?: number | null;
  readonly brand?: Taxonomy | null;
  readonly categories?: (Taxonomy | null)[] | null;
  readonly notes?: (ItemNotes | null)[] | null;
  readonly temperature?: Temperature | keyof typeof Temperature | null;
  readonly dimensions?: Dimension | null;
  readonly status?: ItemStatus | keyof typeof ItemStatus | null;
  readonly pickingOptions?: ItemPickingOptions | null;
  readonly invoices?: (ItemInvoice | null)[] | null;
  readonly transfers?: (ItemTransferDetail | null)[] | null;
  readonly returns?: (ItemReturns | null)[] | null;
  readonly weighableProduct?: boolean | null;
  readonly addedOnFulfillment?: boolean | null;
  readonly account?: string | null;
  readonly warehouse?: string | null;
  readonly metaData?: string | null;
  readonly location?: (CatalogLocation | null)[] | null;
  readonly facility?: (ItemFacility | null)[] | null;
  readonly inventoryData?: (InventoryData | null)[] | null;
  readonly type?: ItemType | keyof typeof ItemType | null;
  readonly rmaId?: string | null;
  readonly rmaItemId?: string | null;
  readonly clusterId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyItemV2 = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<ItemV2, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pickers?: (string | null)[] | null;
  readonly groups?: (string | null)[] | null;
  readonly images?: (string | null)[] | null;
  readonly itemId?: string | null;
  readonly productId?: string | null;
  readonly orderId?: string | null;
  readonly fulfillment: AsyncCollection<FulfillmentV2>;
  readonly eans?: (string | null)[] | null;
  readonly skus?: (string | null)[] | null;
  readonly refs?: (string | null)[] | null;
  readonly isWeighable?: boolean | null;
  readonly currencyCode?: string | null;
  readonly name?: string | null;
  readonly unitOfMeasure?: UnitOfMeasure | keyof typeof UnitOfMeasure | null;
  readonly quantity?: number | null;
  readonly completedQuantity?: number | null;
  readonly unitMultiplier?: number | null;
  readonly listPrice?: number | null;
  readonly sellingPrice?: number | null;
  readonly brand?: Taxonomy | null;
  readonly categories?: (Taxonomy | null)[] | null;
  readonly notes?: (ItemNotes | null)[] | null;
  readonly temperature?: Temperature | keyof typeof Temperature | null;
  readonly dimensions?: Dimension | null;
  readonly status?: ItemStatus | keyof typeof ItemStatus | null;
  readonly pickingOptions?: ItemPickingOptions | null;
  readonly invoices?: (ItemInvoice | null)[] | null;
  readonly transfers?: (ItemTransferDetail | null)[] | null;
  readonly returns?: (ItemReturns | null)[] | null;
  readonly weighableProduct?: boolean | null;
  readonly addedOnFulfillment?: boolean | null;
  readonly account?: string | null;
  readonly warehouse?: string | null;
  readonly metaData?: string | null;
  readonly location?: (CatalogLocation | null)[] | null;
  readonly facility?: (ItemFacility | null)[] | null;
  readonly inventoryData?: (InventoryData | null)[] | null;
  readonly type?: ItemType | keyof typeof ItemType | null;
  readonly rmaId?: string | null;
  readonly rmaItemId?: string | null;
  readonly clusterId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ItemV2 = LazyLoading extends LazyLoadingDisabled ? EagerItemV2 : LazyItemV2

export declare const ItemV2: (new (init: ModelInit<ItemV2>) => ItemV2) & {
  copyOf(source: ItemV2, mutator: (draft: MutableModel<ItemV2>) => MutableModel<ItemV2> | void): ItemV2;
}

type EagerFulfillmentV2 = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<FulfillmentV2, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly groups?: (string | null)[] | null;
  readonly item?: ItemV2 | null;
  readonly itemId?: string | null;
  readonly orderId?: string | null;
  readonly worksheetId?: string | null;
  readonly assignedAt?: string | null;
  readonly pickingStartedAt?: string | null;
  readonly pickedAt?: string | null;
  readonly packingStartedAt?: string | null;
  readonly packedAt?: string | null;
  readonly facility?: FacilityInfo | null;
  readonly hostname?: string | null;
  readonly itemLocation?: string | null;
  readonly quantity?: number | null;
  readonly originalQuantity?: number | null;
  readonly originalUnitMultiplier?: number | null;
  readonly addedOnFulfillment?: boolean | null;
  readonly isReplacement?: boolean | null;
  readonly isTransfer?: boolean | null;
  readonly priority?: number | null;
  readonly pickerId?: string | null;
  readonly picking?: PickingDetail | null;
  readonly packing?: (PackingDetail | null)[] | null;
  readonly sorted?: boolean | null;
  readonly isCompleted?: boolean | null;
  readonly isCancelled?: boolean | null;
  readonly picker_facility?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly itemV2FulfillmentId?: string | null;
  readonly worksheetFulfillmentId?: string | null;
}

type LazyFulfillmentV2 = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<FulfillmentV2, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly groups?: (string | null)[] | null;
  readonly item: AsyncItem<ItemV2 | undefined>;
  readonly itemId?: string | null;
  readonly orderId?: string | null;
  readonly worksheetId?: string | null;
  readonly assignedAt?: string | null;
  readonly pickingStartedAt?: string | null;
  readonly pickedAt?: string | null;
  readonly packingStartedAt?: string | null;
  readonly packedAt?: string | null;
  readonly facility?: FacilityInfo | null;
  readonly hostname?: string | null;
  readonly itemLocation?: string | null;
  readonly quantity?: number | null;
  readonly originalQuantity?: number | null;
  readonly originalUnitMultiplier?: number | null;
  readonly addedOnFulfillment?: boolean | null;
  readonly isReplacement?: boolean | null;
  readonly isTransfer?: boolean | null;
  readonly priority?: number | null;
  readonly pickerId?: string | null;
  readonly picking?: PickingDetail | null;
  readonly packing?: (PackingDetail | null)[] | null;
  readonly sorted?: boolean | null;
  readonly isCompleted?: boolean | null;
  readonly isCancelled?: boolean | null;
  readonly picker_facility?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly itemV2FulfillmentId?: string | null;
  readonly worksheetFulfillmentId?: string | null;
}

export declare type FulfillmentV2 = LazyLoading extends LazyLoadingDisabled ? EagerFulfillmentV2 : LazyFulfillmentV2

export declare const FulfillmentV2: (new (init: ModelInit<FulfillmentV2>) => FulfillmentV2) & {
  copyOf(source: FulfillmentV2, mutator: (draft: MutableModel<FulfillmentV2>) => MutableModel<FulfillmentV2> | void): FulfillmentV2;
}

type EagerOMSChanges = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<OMSChanges, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fulfillmentId?: string[] | null;
  readonly itemId: string;
  readonly orderId: string;
  readonly sentToOMS: boolean;
  readonly payload?: string | null;
  readonly response?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOMSChanges = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<OMSChanges, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fulfillmentId?: string[] | null;
  readonly itemId: string;
  readonly orderId: string;
  readonly sentToOMS: boolean;
  readonly payload?: string | null;
  readonly response?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OMSChanges = LazyLoading extends LazyLoadingDisabled ? EagerOMSChanges : LazyOMSChanges

export declare const OMSChanges: (new (init: ModelInit<OMSChanges>) => OMSChanges) & {
  copyOf(source: OMSChanges, mutator: (draft: MutableModel<OMSChanges>) => MutableModel<OMSChanges> | void): OMSChanges;
}

type EagerOrder = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Order, 'orderId'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly groups?: (string | null)[] | null;
  readonly billing: Billing;
  readonly affiliateId?: string | null;
  readonly conversationID?: string | null;
  readonly notificationsID?: string | null;
  readonly customer?: Customer | null;
  readonly customerId: string;
  readonly address?: Address | null;
  readonly addressId: string;
  readonly deliveryDate?: string | null;
  readonly deliveryChannel: string;
  readonly finishedDate?: string | null;
  readonly categoriesIds?: (string | null)[] | null;
  readonly hostname: string;
  readonly parentAccount?: string | null;
  readonly invoices: (Invoice | null)[];
  readonly totalItems: number;
  readonly totalUnits: number;
  readonly totalCompletedItems?: number | null;
  readonly totalCompletedUnits?: number | null;
  readonly items: (ItemV2 | null)[];
  readonly isInvoiced: boolean;
  readonly isOrderSplit: boolean;
  readonly metaData?: string | null;
  readonly marketingData?: MarketingData | null;
  readonly notes: (OrderNotes | null)[];
  readonly observations: (string | null)[];
  readonly orderAssignment: (OrderAssignment | null)[];
  readonly orderId: string;
  readonly payment: (Payment | null)[];
  readonly prepareDate?: string | null;
  readonly collectedDate?: string | null;
  readonly salesSourceId: (string | null)[];
  readonly salesChannel?: string | null;
  readonly commercialPolicy?: string | null;
  readonly sequence?: string | null;
  readonly shipping: Shipping;
  readonly shippingEstimatedDateMin: string;
  readonly status: OrderStatus | keyof typeof OrderStatus;
  readonly lastStatus: OrderStatus | keyof typeof OrderStatus;
  readonly lastStatusChange: number;
  readonly storeConfigId: (string | null)[];
  readonly transactionDate?: string | null;
  readonly pickingStartedAt?: string | null;
  readonly pickedAt?: string | null;
  readonly packingStartedAt?: string | null;
  readonly packedAt?: string | null;
  readonly packages?: (Package | null)[] | null;
  readonly historicalOrder?: (HistoricalOrder | null)[] | null;
  readonly tags: (string | null)[];
  readonly appliedAutomations?: CAppliedAutomation[] | null;
  readonly totals: (Totals | null)[];
  readonly hasPendingRmas?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrder = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Order, 'orderId'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly groups?: (string | null)[] | null;
  readonly billing: Billing;
  readonly affiliateId?: string | null;
  readonly conversationID?: string | null;
  readonly notificationsID?: string | null;
  readonly customer: AsyncItem<Customer | undefined>;
  readonly customerId: string;
  readonly address: AsyncItem<Address | undefined>;
  readonly addressId: string;
  readonly deliveryDate?: string | null;
  readonly deliveryChannel: string;
  readonly finishedDate?: string | null;
  readonly categoriesIds?: (string | null)[] | null;
  readonly hostname: string;
  readonly parentAccount?: string | null;
  readonly invoices: (Invoice | null)[];
  readonly totalItems: number;
  readonly totalUnits: number;
  readonly totalCompletedItems?: number | null;
  readonly totalCompletedUnits?: number | null;
  readonly items: AsyncCollection<ItemV2>;
  readonly isInvoiced: boolean;
  readonly isOrderSplit: boolean;
  readonly metaData?: string | null;
  readonly marketingData?: MarketingData | null;
  readonly notes: (OrderNotes | null)[];
  readonly observations: (string | null)[];
  readonly orderAssignment: (OrderAssignment | null)[];
  readonly orderId: string;
  readonly payment: (Payment | null)[];
  readonly prepareDate?: string | null;
  readonly collectedDate?: string | null;
  readonly salesSourceId: (string | null)[];
  readonly salesChannel?: string | null;
  readonly commercialPolicy?: string | null;
  readonly sequence?: string | null;
  readonly shipping: Shipping;
  readonly shippingEstimatedDateMin: string;
  readonly status: OrderStatus | keyof typeof OrderStatus;
  readonly lastStatus: OrderStatus | keyof typeof OrderStatus;
  readonly lastStatusChange: number;
  readonly storeConfigId: (string | null)[];
  readonly transactionDate?: string | null;
  readonly pickingStartedAt?: string | null;
  readonly pickedAt?: string | null;
  readonly packingStartedAt?: string | null;
  readonly packedAt?: string | null;
  readonly packages: AsyncCollection<Package>;
  readonly historicalOrder: AsyncCollection<HistoricalOrder>;
  readonly tags: (string | null)[];
  readonly appliedAutomations?: CAppliedAutomation[] | null;
  readonly totals: (Totals | null)[];
  readonly hasPendingRmas?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

type EagerItemLogs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ItemLogs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly orderId: string;
  readonly itemId: string;
  readonly uniqueId: string;
  readonly status?: string | null;
  readonly lastStatus?: string | null;
  readonly description: string;
  readonly metadata?: string | null;
  readonly timestamp: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyItemLogs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ItemLogs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly orderId: string;
  readonly itemId: string;
  readonly uniqueId: string;
  readonly status?: string | null;
  readonly lastStatus?: string | null;
  readonly description: string;
  readonly metadata?: string | null;
  readonly timestamp: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ItemLogs = LazyLoading extends LazyLoadingDisabled ? EagerItemLogs : LazyItemLogs

export declare const ItemLogs: (new (init: ModelInit<ItemLogs>) => ItemLogs) & {
  copyOf(source: ItemLogs, mutator: (draft: MutableModel<ItemLogs>) => MutableModel<ItemLogs> | void): ItemLogs;
}

type EagerPackage = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Package, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly groups?: (string | null)[] | null;
  readonly orderId: string;
  readonly envelope: string;
  readonly courier?: string | null;
  readonly type?: PackageType | keyof typeof PackageType | null;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly items: (ItemOrderPackage | null)[];
  readonly dimensions?: Dimensions | null;
  readonly status?: PackageStatus | keyof typeof PackageStatus | null;
  readonly storeConfigId?: string | null;
  readonly packageLocation?: (PackageLocation | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPackage = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Package, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly groups?: (string | null)[] | null;
  readonly orderId: string;
  readonly envelope: string;
  readonly courier?: string | null;
  readonly type?: PackageType | keyof typeof PackageType | null;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly items: (ItemOrderPackage | null)[];
  readonly dimensions?: Dimensions | null;
  readonly status?: PackageStatus | keyof typeof PackageStatus | null;
  readonly storeConfigId?: string | null;
  readonly packageLocation?: (PackageLocation | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Package = LazyLoading extends LazyLoadingDisabled ? EagerPackage : LazyPackage

export declare const Package: (new (init: ModelInit<Package>) => Package) & {
  copyOf(source: Package, mutator: (draft: MutableModel<Package>) => MutableModel<Package> | void): Package;
}

type EagerPickingActions = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<PickingActions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type: PickingActionType | keyof typeof PickingActionType;
  readonly worksheetId?: string | null;
  readonly worksheetSequence?: string | null;
  readonly storeConfigId: string;
  readonly orderId?: string | null;
  readonly conversationID?: string | null;
  readonly createdFrom?: PickingActionFrom | keyof typeof PickingActionFrom | null;
  readonly actionCreated?: ActionRegister | null;
  readonly actionApproved?: ActionRegister | null;
  readonly actionConfirmed?: ActionRegister | null;
  readonly status?: PickingActionStatus | keyof typeof PickingActionStatus | null;
  readonly payload?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPickingActions = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<PickingActions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type: PickingActionType | keyof typeof PickingActionType;
  readonly worksheetId?: string | null;
  readonly worksheetSequence?: string | null;
  readonly storeConfigId: string;
  readonly orderId?: string | null;
  readonly conversationID?: string | null;
  readonly createdFrom?: PickingActionFrom | keyof typeof PickingActionFrom | null;
  readonly actionCreated?: ActionRegister | null;
  readonly actionApproved?: ActionRegister | null;
  readonly actionConfirmed?: ActionRegister | null;
  readonly status?: PickingActionStatus | keyof typeof PickingActionStatus | null;
  readonly payload?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PickingActions = LazyLoading extends LazyLoadingDisabled ? EagerPickingActions : LazyPickingActions

export declare const PickingActions: (new (init: ModelInit<PickingActions>) => PickingActions) & {
  copyOf(source: PickingActions, mutator: (draft: MutableModel<PickingActions>) => MutableModel<PickingActions> | void): PickingActions;
}

type EagerReturn = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Return, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly orderId: string;
  readonly sequence?: string | null;
  readonly status: ReturnStatus | keyof typeof ReturnStatus;
  readonly hostname: string;
  readonly storeConfigId: string;
  readonly order: OrderRMA;
  readonly customer: CustomerRMA;
  readonly tags?: (string | null)[] | null;
  readonly shippingRequest: RMAShipping;
  readonly items?: (RMAItems | null)[] | null;
  readonly notes?: (RMANotes | null)[] | null;
  readonly nps?: number | null;
  readonly history?: (RMAHistory | null)[] | null;
  readonly transactions?: (RMATransaction | null)[] | null;
  readonly service?: RMAServiceTracking | null;
  readonly deliveryReference?: string | null;
  readonly appliedAutomations?: CAppliedAutomation[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly returnShippingRequestId: string;
}

type LazyReturn = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Return, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly orderId: string;
  readonly sequence?: string | null;
  readonly status: ReturnStatus | keyof typeof ReturnStatus;
  readonly hostname: string;
  readonly storeConfigId: string;
  readonly order: OrderRMA;
  readonly customer: CustomerRMA;
  readonly tags?: (string | null)[] | null;
  readonly shippingRequest: AsyncItem<RMAShipping>;
  readonly items: AsyncCollection<RMAItems>;
  readonly notes?: (RMANotes | null)[] | null;
  readonly nps?: number | null;
  readonly history: AsyncCollection<RMAHistory>;
  readonly transactions: AsyncCollection<RMATransaction>;
  readonly service?: RMAServiceTracking | null;
  readonly deliveryReference?: string | null;
  readonly appliedAutomations?: CAppliedAutomation[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly returnShippingRequestId: string;
}

export declare type Return = LazyLoading extends LazyLoadingDisabled ? EagerReturn : LazyReturn

export declare const Return: (new (init: ModelInit<Return>) => Return) & {
  copyOf(source: Return, mutator: (draft: MutableModel<Return>) => MutableModel<Return> | void): Return;
}

type EagerRMAShipping = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMAShipping, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type: RmaShippingTypes | keyof typeof RmaShippingTypes;
  readonly current?: boolean | null;
  readonly pickupAddress?: PickupAddress | null;
  readonly store?: Store | null;
  readonly deliveryAddress?: DeliveryAddress | null;
  readonly shippingServiceId?: string | null;
  readonly creationDate?: string | null;
  readonly pickupDate: string;
  readonly deliveryDate?: string | null;
  readonly shippingPrice?: number | null;
  readonly status?: RmaShippingStatus | keyof typeof RmaShippingStatus | null;
  readonly deliverySlot?: RMAShippingDeliverySlot | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRMAShipping = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMAShipping, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type: RmaShippingTypes | keyof typeof RmaShippingTypes;
  readonly current?: boolean | null;
  readonly pickupAddress?: PickupAddress | null;
  readonly store?: Store | null;
  readonly deliveryAddress?: DeliveryAddress | null;
  readonly shippingServiceId?: string | null;
  readonly creationDate?: string | null;
  readonly pickupDate: string;
  readonly deliveryDate?: string | null;
  readonly shippingPrice?: number | null;
  readonly status?: RmaShippingStatus | keyof typeof RmaShippingStatus | null;
  readonly deliverySlot?: RMAShippingDeliverySlot | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RMAShipping = LazyLoading extends LazyLoadingDisabled ? EagerRMAShipping : LazyRMAShipping

export declare const RMAShipping: (new (init: ModelInit<RMAShipping>) => RMAShipping) & {
  copyOf(source: RMAShipping, mutator: (draft: MutableModel<RMAShipping>) => MutableModel<RMAShipping> | void): RMAShipping;
}

type EagerRMAItems = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMAItems, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rmaId: string;
  readonly itemId: string;
  readonly orderId: string;
  readonly name: string;
  readonly image: string;
  readonly sellingPrice: number;
  readonly currencyCode?: string | null;
  readonly status: RmaItemsStatus | keyof typeof RmaItemsStatus;
  readonly storeConfigId: string;
  readonly deliveryReference?: string | null;
  readonly sage?: RMASageItem | null;
  readonly requestedResolution: ItemResolutionType | keyof typeof ItemResolutionType;
  readonly requestType?: ItemRequestType | keyof typeof ItemRequestType | null;
  readonly input: RMAItemInput;
  readonly shipping?: (ItemShipping | null)[] | null;
  readonly notes?: (RMANotes | null)[] | null;
  readonly resolution?: RMAItemResolution | null;
  readonly itemLogs?: (ItemLogs | null)[] | null;
  readonly policyId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly rMAItemsSageId?: string | null;
  readonly rMAItemsResolutionId?: string | null;
}

type LazyRMAItems = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMAItems, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rmaId: string;
  readonly itemId: string;
  readonly orderId: string;
  readonly name: string;
  readonly image: string;
  readonly sellingPrice: number;
  readonly currencyCode?: string | null;
  readonly status: RmaItemsStatus | keyof typeof RmaItemsStatus;
  readonly storeConfigId: string;
  readonly deliveryReference?: string | null;
  readonly sage: AsyncItem<RMASageItem | undefined>;
  readonly requestedResolution: ItemResolutionType | keyof typeof ItemResolutionType;
  readonly requestType?: ItemRequestType | keyof typeof ItemRequestType | null;
  readonly input: RMAItemInput;
  readonly shipping?: (ItemShipping | null)[] | null;
  readonly notes?: (RMANotes | null)[] | null;
  readonly resolution: AsyncItem<RMAItemResolution | undefined>;
  readonly itemLogs: AsyncCollection<ItemLogs>;
  readonly policyId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly rMAItemsSageId?: string | null;
  readonly rMAItemsResolutionId?: string | null;
}

export declare type RMAItems = LazyLoading extends LazyLoadingDisabled ? EagerRMAItems : LazyRMAItems

export declare const RMAItems: (new (init: ModelInit<RMAItems>) => RMAItems) & {
  copyOf(source: RMAItems, mutator: (draft: MutableModel<RMAItems>) => MutableModel<RMAItems> | void): RMAItems;
}

type EagerRMAReplacement = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMAReplacement, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly itemId: string;
  readonly rmaId: string;
  readonly quantity: number;
  readonly replacementItem?: RMAReplacementItem | null;
  readonly recommendedItem?: RMAReplacementItem | null;
  readonly refund?: RMARefund | null;
  readonly storeCredit?: RMAStoreCredit | null;
  readonly status: RmaReplacementStatus | keyof typeof RmaReplacementStatus;
  readonly storeConfigId?: string | null;
  readonly worksheetId?: string | null;
  readonly fulfillmentStatus?: string | null;
  readonly shipping?: ItemShipping | null;
  readonly approvedBy?: string | null;
  readonly action?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly rMAReplacementRefundId?: string | null;
  readonly rMAReplacementStoreCreditId?: string | null;
}

type LazyRMAReplacement = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMAReplacement, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly itemId: string;
  readonly rmaId: string;
  readonly quantity: number;
  readonly replacementItem?: RMAReplacementItem | null;
  readonly recommendedItem?: RMAReplacementItem | null;
  readonly refund: AsyncItem<RMARefund | undefined>;
  readonly storeCredit: AsyncItem<RMAStoreCredit | undefined>;
  readonly status: RmaReplacementStatus | keyof typeof RmaReplacementStatus;
  readonly storeConfigId?: string | null;
  readonly worksheetId?: string | null;
  readonly fulfillmentStatus?: string | null;
  readonly shipping?: ItemShipping | null;
  readonly approvedBy?: string | null;
  readonly action?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly rMAReplacementRefundId?: string | null;
  readonly rMAReplacementStoreCreditId?: string | null;
}

export declare type RMAReplacement = LazyLoading extends LazyLoadingDisabled ? EagerRMAReplacement : LazyRMAReplacement

export declare const RMAReplacement: (new (init: ModelInit<RMAReplacement>) => RMAReplacement) & {
  copyOf(source: RMAReplacement, mutator: (draft: MutableModel<RMAReplacement>) => MutableModel<RMAReplacement> | void): RMAReplacement;
}

type EagerRMARefund = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMARefund, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly storeConfigId: string;
  readonly storeId: string;
  readonly transactionId: string;
  readonly confirmationId?: string | null;
  readonly customerId: string;
  readonly paymentMethod: string;
  readonly paymentData?: Payment | null;
  readonly rmaId: string;
  readonly itemId: string;
  readonly amount: number;
  readonly status: RmaRefundStatus | keyof typeof RmaRefundStatus;
  readonly confirmationDate?: string | null;
  readonly itemQuantity: number;
  readonly createdBy: string;
  readonly approvedBy?: string | null;
  readonly metadata?: string | null;
  readonly attachments?: (ItemAttachment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRMARefund = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMARefund, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly storeConfigId: string;
  readonly storeId: string;
  readonly transactionId: string;
  readonly confirmationId?: string | null;
  readonly customerId: string;
  readonly paymentMethod: string;
  readonly paymentData?: Payment | null;
  readonly rmaId: string;
  readonly itemId: string;
  readonly amount: number;
  readonly status: RmaRefundStatus | keyof typeof RmaRefundStatus;
  readonly confirmationDate?: string | null;
  readonly itemQuantity: number;
  readonly createdBy: string;
  readonly approvedBy?: string | null;
  readonly metadata?: string | null;
  readonly attachments?: (ItemAttachment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RMARefund = LazyLoading extends LazyLoadingDisabled ? EagerRMARefund : LazyRMARefund

export declare const RMARefund: (new (init: ModelInit<RMARefund>) => RMARefund) & {
  copyOf(source: RMARefund, mutator: (draft: MutableModel<RMARefund>) => MutableModel<RMARefund> | void): RMARefund;
}

type EagerRMAStoreCredit = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMAStoreCredit, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rmaId: string;
  readonly itemId: string;
  readonly orderId: string;
  readonly customerId: string;
  readonly currencyCode: string;
  readonly storeConfigId: string;
  readonly reason: RmaStoreCreditReason | keyof typeof RmaStoreCreditReason;
  readonly type: RmaStoreCreditType | keyof typeof RmaStoreCreditType;
  readonly storeCreditId?: string | null;
  readonly creationDate?: string | null;
  readonly startDate?: string | null;
  readonly expirationDate?: string | null;
  readonly amount: number;
  readonly quantity: number;
  readonly status: RmaStoreCreditStatus | keyof typeof RmaStoreCreditStatus;
  readonly approvedBy?: string | null;
  readonly metadata?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRMAStoreCredit = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMAStoreCredit, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rmaId: string;
  readonly itemId: string;
  readonly orderId: string;
  readonly customerId: string;
  readonly currencyCode: string;
  readonly storeConfigId: string;
  readonly reason: RmaStoreCreditReason | keyof typeof RmaStoreCreditReason;
  readonly type: RmaStoreCreditType | keyof typeof RmaStoreCreditType;
  readonly storeCreditId?: string | null;
  readonly creationDate?: string | null;
  readonly startDate?: string | null;
  readonly expirationDate?: string | null;
  readonly amount: number;
  readonly quantity: number;
  readonly status: RmaStoreCreditStatus | keyof typeof RmaStoreCreditStatus;
  readonly approvedBy?: string | null;
  readonly metadata?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RMAStoreCredit = LazyLoading extends LazyLoadingDisabled ? EagerRMAStoreCredit : LazyRMAStoreCredit

export declare const RMAStoreCredit: (new (init: ModelInit<RMAStoreCredit>) => RMAStoreCredit) & {
  copyOf(source: RMAStoreCredit, mutator: (draft: MutableModel<RMAStoreCredit>) => MutableModel<RMAStoreCredit> | void): RMAStoreCredit;
}

type EagerRMASageItem = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMASageItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rmaId: string;
  readonly itemId: string;
  readonly approved?: boolean | null;
  readonly storeConfigId?: string | null;
  readonly images?: (RMASageItemImage | null)[] | null;
  readonly productMatch?: RMASageItemProductMatch | null;
  readonly justification?: RMASageItemJustification | null;
  readonly accuracy?: number | null;
  readonly result?: string | null;
  readonly shortDescription?: string | null;
  readonly errors?: (string | null)[] | null;
  readonly lang?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRMASageItem = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMASageItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rmaId: string;
  readonly itemId: string;
  readonly approved?: boolean | null;
  readonly storeConfigId?: string | null;
  readonly images?: (RMASageItemImage | null)[] | null;
  readonly productMatch?: RMASageItemProductMatch | null;
  readonly justification?: RMASageItemJustification | null;
  readonly accuracy?: number | null;
  readonly result?: string | null;
  readonly shortDescription?: string | null;
  readonly errors?: (string | null)[] | null;
  readonly lang?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RMASageItem = LazyLoading extends LazyLoadingDisabled ? EagerRMASageItem : LazyRMASageItem

export declare const RMASageItem: (new (init: ModelInit<RMASageItem>) => RMASageItem) & {
  copyOf(source: RMASageItem, mutator: (draft: MutableModel<RMASageItem>) => MutableModel<RMASageItem> | void): RMASageItem;
}

type EagerRMAItemResolution = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMAItemResolution, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly backToStockQuantity: number;
  readonly approved: boolean;
  readonly type: ItemResolutionType | keyof typeof ItemResolutionType;
  readonly quantity: number;
  readonly replacement?: RMAReplacement | null;
  readonly refund?: RMARefund | null;
  readonly storeCredit?: RMAStoreCredit | null;
  readonly coupon?: ResolutionCoupon | null;
  readonly giftcard?: ResolutionGiftCard | null;
  readonly attachments?: (ItemAttachment | null)[] | null;
  readonly action?: string | null;
  readonly transaction?: RMAResolutionTransaction | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly rMAItemResolutionReplacementId?: string | null;
  readonly rMAItemResolutionRefundId?: string | null;
  readonly rMAItemResolutionStoreCreditId?: string | null;
}

type LazyRMAItemResolution = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMAItemResolution, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly backToStockQuantity: number;
  readonly approved: boolean;
  readonly type: ItemResolutionType | keyof typeof ItemResolutionType;
  readonly quantity: number;
  readonly replacement: AsyncItem<RMAReplacement | undefined>;
  readonly refund: AsyncItem<RMARefund | undefined>;
  readonly storeCredit: AsyncItem<RMAStoreCredit | undefined>;
  readonly coupon?: ResolutionCoupon | null;
  readonly giftcard?: ResolutionGiftCard | null;
  readonly attachments?: (ItemAttachment | null)[] | null;
  readonly action?: string | null;
  readonly transaction?: RMAResolutionTransaction | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly rMAItemResolutionReplacementId?: string | null;
  readonly rMAItemResolutionRefundId?: string | null;
  readonly rMAItemResolutionStoreCreditId?: string | null;
}

export declare type RMAItemResolution = LazyLoading extends LazyLoadingDisabled ? EagerRMAItemResolution : LazyRMAItemResolution

export declare const RMAItemResolution: (new (init: ModelInit<RMAItemResolution>) => RMAItemResolution) & {
  copyOf(source: RMAItemResolution, mutator: (draft: MutableModel<RMAItemResolution>) => MutableModel<RMAItemResolution> | void): RMAItemResolution;
}

type EagerRMATransaction = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMATransaction, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly transactionId?: string | null;
  readonly rmaId: string;
  readonly orderId: string;
  readonly itemId?: string | null;
  readonly type?: RmaTransactionType | keyof typeof RmaTransactionType | null;
  readonly action: string;
  readonly description?: string | null;
  readonly createdBy: string;
  readonly account: string;
  readonly amount?: number | null;
  readonly creationDate: string;
  readonly status?: RmaTransactionStatus | keyof typeof RmaTransactionStatus | null;
  readonly data?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRMATransaction = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMATransaction, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly transactionId?: string | null;
  readonly rmaId: string;
  readonly orderId: string;
  readonly itemId?: string | null;
  readonly type?: RmaTransactionType | keyof typeof RmaTransactionType | null;
  readonly action: string;
  readonly description?: string | null;
  readonly createdBy: string;
  readonly account: string;
  readonly amount?: number | null;
  readonly creationDate: string;
  readonly status?: RmaTransactionStatus | keyof typeof RmaTransactionStatus | null;
  readonly data?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RMATransaction = LazyLoading extends LazyLoadingDisabled ? EagerRMATransaction : LazyRMATransaction

export declare const RMATransaction: (new (init: ModelInit<RMATransaction>) => RMATransaction) & {
  copyOf(source: RMATransaction, mutator: (draft: MutableModel<RMATransaction>) => MutableModel<RMATransaction> | void): RMATransaction;
}

type EagerRMAHistory = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMAHistory, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly rmaId: string;
  readonly lastStatus?: string | null;
  readonly rmaStatus: ReturnStatus | keyof typeof ReturnStatus;
  readonly source?: string | null;
  readonly user?: string | null;
  readonly description: string;
  readonly metadata?: string | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

type LazyRMAHistory = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMAHistory, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly rmaId: string;
  readonly lastStatus?: string | null;
  readonly rmaStatus: ReturnStatus | keyof typeof ReturnStatus;
  readonly source?: string | null;
  readonly user?: string | null;
  readonly description: string;
  readonly metadata?: string | null;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

export declare type RMAHistory = LazyLoading extends LazyLoadingDisabled ? EagerRMAHistory : LazyRMAHistory

export declare const RMAHistory: (new (init: ModelInit<RMAHistory>) => RMAHistory) & {
  copyOf(source: RMAHistory, mutator: (draft: MutableModel<RMAHistory>) => MutableModel<RMAHistory> | void): RMAHistory;
}

type EagerRMASettings = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMASettings, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly active: boolean;
  readonly storeConfigId: string;
  readonly hostname: string;
  readonly parentAccount: string;
  readonly rmaIdFormat?: RMASettingsIdFormat | null;
  readonly rmaStatus?: (RMASettingsStatus | null)[] | null;
  readonly tags?: (string | null)[] | null;
  readonly policies?: (RMAPolicies | null)[] | null;
  readonly forms?: (RMAForms | null)[] | null;
  readonly perks?: (RMAPerks | null)[] | null;
  readonly returnReasons?: (RMAReturnReasons | null)[] | null;
  readonly automations?: (Automation | null)[] | null;
  readonly termsAndConditions?: (RMASettingTermAndCondition | null)[] | null;
  readonly deliveryMethods?: (RMASettingDeliveryMethod | null)[] | null;
  readonly logistics?: (RMALogistics | null)[] | null;
  readonly iaSetting?: IASettingRMA | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRMASettings = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMASettings, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly active: boolean;
  readonly storeConfigId: string;
  readonly hostname: string;
  readonly parentAccount: string;
  readonly rmaIdFormat?: RMASettingsIdFormat | null;
  readonly rmaStatus?: (RMASettingsStatus | null)[] | null;
  readonly tags?: (string | null)[] | null;
  readonly policies: AsyncCollection<RMAPolicies>;
  readonly forms: AsyncCollection<RMAForms>;
  readonly perks: AsyncCollection<RMAPerks>;
  readonly returnReasons: AsyncCollection<RMAReturnReasons>;
  readonly automations: AsyncCollection<Automation>;
  readonly termsAndConditions?: (RMASettingTermAndCondition | null)[] | null;
  readonly deliveryMethods: AsyncCollection<RMASettingDeliveryMethod>;
  readonly logistics: AsyncCollection<RMALogistics>;
  readonly iaSetting?: IASettingRMA | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RMASettings = LazyLoading extends LazyLoadingDisabled ? EagerRMASettings : LazyRMASettings

export declare const RMASettings: (new (init: ModelInit<RMASettings>) => RMASettings) & {
  copyOf(source: RMASettings, mutator: (draft: MutableModel<RMASettings>) => MutableModel<RMASettings> | void): RMASettings;
}

type EagerRMAPolicies = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMAPolicies, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly type: (RmaPoliciesType | null)[] | Array<keyof typeof RmaPoliciesType>;
  readonly description?: string | null;
  readonly storeConfigId: string;
  readonly rmaSettingsId: string;
  readonly group?: RMAPoliciesGroup | null;
  readonly active: boolean;
  readonly rules?: (RMAPoliciesRules | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly rMAPoliciesGroupId?: string | null;
}

type LazyRMAPolicies = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMAPolicies, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly type: (RmaPoliciesType | null)[] | Array<keyof typeof RmaPoliciesType>;
  readonly description?: string | null;
  readonly storeConfigId: string;
  readonly rmaSettingsId: string;
  readonly group: AsyncItem<RMAPoliciesGroup | undefined>;
  readonly active: boolean;
  readonly rules: AsyncCollection<RMAPoliciesRules>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly rMAPoliciesGroupId?: string | null;
}

export declare type RMAPolicies = LazyLoading extends LazyLoadingDisabled ? EagerRMAPolicies : LazyRMAPolicies

export declare const RMAPolicies: (new (init: ModelInit<RMAPolicies>) => RMAPolicies) & {
  copyOf(source: RMAPolicies, mutator: (draft: MutableModel<RMAPolicies>) => MutableModel<RMAPolicies> | void): RMAPolicies;
}

type EagerRMAPoliciesRules = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMAPoliciesRules, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rmaPolicyId: string;
  readonly name: string;
  readonly query?: AutomationQuery | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRMAPoliciesRules = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMAPoliciesRules, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rmaPolicyId: string;
  readonly name: string;
  readonly query?: AutomationQuery | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RMAPoliciesRules = LazyLoading extends LazyLoadingDisabled ? EagerRMAPoliciesRules : LazyRMAPoliciesRules

export declare const RMAPoliciesRules: (new (init: ModelInit<RMAPoliciesRules>) => RMAPoliciesRules) & {
  copyOf(source: RMAPoliciesRules, mutator: (draft: MutableModel<RMAPoliciesRules>) => MutableModel<RMAPoliciesRules> | void): RMAPoliciesRules;
}

type EagerRMAPoliciesGroup = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMAPoliciesGroup, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly storeConfigId: string;
  readonly rmaSettingsId: string;
  readonly name: string;
  readonly description: string;
  readonly active: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRMAPoliciesGroup = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMAPoliciesGroup, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly storeConfigId: string;
  readonly rmaSettingsId: string;
  readonly name: string;
  readonly description: string;
  readonly active: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RMAPoliciesGroup = LazyLoading extends LazyLoadingDisabled ? EagerRMAPoliciesGroup : LazyRMAPoliciesGroup

export declare const RMAPoliciesGroup: (new (init: ModelInit<RMAPoliciesGroup>) => RMAPoliciesGroup) & {
  copyOf(source: RMAPoliciesGroup, mutator: (draft: MutableModel<RMAPoliciesGroup>) => MutableModel<RMAPoliciesGroup> | void): RMAPoliciesGroup;
}

type EagerRMAForms = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMAForms, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rmaSettingId: string;
  readonly title: string;
  readonly description: string;
  readonly website_url?: string | null;
  readonly returnReasons?: (RMAReturnReasons | null)[] | null;
  readonly policyGroup?: RMAPoliciesGroup | null;
  readonly fields?: (RMASettingField | null)[] | null;
  readonly finalInstructions?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly rMAFormsPolicyGroupId?: string | null;
}

type LazyRMAForms = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMAForms, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rmaSettingId: string;
  readonly title: string;
  readonly description: string;
  readonly website_url?: string | null;
  readonly returnReasons: AsyncCollection<RMAReturnReasons>;
  readonly policyGroup: AsyncItem<RMAPoliciesGroup | undefined>;
  readonly fields?: (RMASettingField | null)[] | null;
  readonly finalInstructions?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly rMAFormsPolicyGroupId?: string | null;
}

export declare type RMAForms = LazyLoading extends LazyLoadingDisabled ? EagerRMAForms : LazyRMAForms

export declare const RMAForms: (new (init: ModelInit<RMAForms>) => RMAForms) & {
  copyOf(source: RMAForms, mutator: (draft: MutableModel<RMAForms>) => MutableModel<RMAForms> | void): RMAForms;
}

type EagerRMAPerks = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMAPerks, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly storeConfigId: string;
  readonly rmaSettingsId: string;
  readonly name: string;
  readonly description: string;
  readonly type: RmaPerksType | keyof typeof RmaPerksType;
  readonly active: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRMAPerks = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMAPerks, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly storeConfigId: string;
  readonly rmaSettingsId: string;
  readonly name: string;
  readonly description: string;
  readonly type: RmaPerksType | keyof typeof RmaPerksType;
  readonly active: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RMAPerks = LazyLoading extends LazyLoadingDisabled ? EagerRMAPerks : LazyRMAPerks

export declare const RMAPerks: (new (init: ModelInit<RMAPerks>) => RMAPerks) & {
  copyOf(source: RMAPerks, mutator: (draft: MutableModel<RMAPerks>) => MutableModel<RMAPerks> | void): RMAPerks;
}

type EagerRMAReturnReasons = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMAReturnReasons, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly priority?: number | null;
  readonly rmaSettingsId: string;
  readonly name: string;
  readonly description: string;
  readonly type: RmaReturnReasonsType | keyof typeof RmaReturnReasonsType;
  readonly active: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRMAReturnReasons = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMAReturnReasons, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly priority?: number | null;
  readonly rmaSettingsId: string;
  readonly name: string;
  readonly description: string;
  readonly type: RmaReturnReasonsType | keyof typeof RmaReturnReasonsType;
  readonly active: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RMAReturnReasons = LazyLoading extends LazyLoadingDisabled ? EagerRMAReturnReasons : LazyRMAReturnReasons

export declare const RMAReturnReasons: (new (init: ModelInit<RMAReturnReasons>) => RMAReturnReasons) & {
  copyOf(source: RMAReturnReasons, mutator: (draft: MutableModel<RMAReturnReasons>) => MutableModel<RMAReturnReasons> | void): RMAReturnReasons;
}

type EagerRMASettingDeliveryMethod = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMASettingDeliveryMethod, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rmaSettingsId: string;
  readonly pickup?: DeliveryMethodPickup | null;
  readonly deliveryToStore?: DeliveryMethodDeliveryToStore | null;
  readonly deliveryToAddress?: DeliveryMethodDeliveryToAddress | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRMASettingDeliveryMethod = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMASettingDeliveryMethod, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rmaSettingsId: string;
  readonly pickup?: DeliveryMethodPickup | null;
  readonly deliveryToStore?: DeliveryMethodDeliveryToStore | null;
  readonly deliveryToAddress?: DeliveryMethodDeliveryToAddress | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RMASettingDeliveryMethod = LazyLoading extends LazyLoadingDisabled ? EagerRMASettingDeliveryMethod : LazyRMASettingDeliveryMethod

export declare const RMASettingDeliveryMethod: (new (init: ModelInit<RMASettingDeliveryMethod>) => RMASettingDeliveryMethod) & {
  copyOf(source: RMASettingDeliveryMethod, mutator: (draft: MutableModel<RMASettingDeliveryMethod>) => MutableModel<RMASettingDeliveryMethod> | void): RMASettingDeliveryMethod;
}

type EagerRMALogistics = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMALogistics, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rmaSettingsId: string;
  readonly name?: string | null;
  readonly office?: string | null;
  readonly city?: string | null;
  readonly country?: string | null;
  readonly hours?: (RMALogisticsHours | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRMALogistics = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<RMALogistics, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rmaSettingsId: string;
  readonly name?: string | null;
  readonly office?: string | null;
  readonly city?: string | null;
  readonly country?: string | null;
  readonly hours?: (RMALogisticsHours | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RMALogistics = LazyLoading extends LazyLoadingDisabled ? EagerRMALogistics : LazyRMALogistics

export declare const RMALogistics: (new (init: ModelInit<RMALogistics>) => RMALogistics) & {
  copyOf(source: RMALogistics, mutator: (draft: MutableModel<RMALogistics>) => MutableModel<RMALogistics> | void): RMALogistics;
}

type EagerSalesChannel = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<SalesChannel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly groups?: (string | null)[] | null;
  readonly name: string;
  readonly salesSource?: (SalesSource | null)[] | null;
  readonly account?: Account | null;
  readonly type?: AccountTypes | keyof typeof AccountTypes | null;
  readonly isActive: boolean;
  readonly paymentMethods?: (string | null)[] | null;
  readonly shippingMethods?: (string | null)[] | null;
  readonly shippingTypes?: (string | null)[] | null;
  readonly commercialPolicies?: (string | null)[] | null;
  readonly orderTags: (string | null)[];
  readonly packages?: (AvailablePackages | null)[] | null;
  readonly globalOrders: number;
  readonly localOrders: number;
  readonly pickingMethod: PickingMethod | keyof typeof PickingMethod;
  readonly allowQuickCollection: boolean;
  readonly allowOrderNotes: boolean;
  readonly allowItemNotes: boolean;
  readonly allowAutomaticPacking?: boolean | null;
  readonly allowMultiPicking?: boolean | null;
  readonly allowExpressFulfillment?: boolean | null;
  readonly allowWorksheetsReAssign?: boolean | null;
  readonly allowStartedWorksheetsReAssign?: boolean | null;
  readonly allowPackagesReport?: boolean | null;
  readonly allowItemTransfers?: boolean | null;
  readonly autoAcceptIncomingTransfers?: boolean | null;
  readonly enableWorksheetsNotes?: boolean | null;
  readonly enableReplacementOptions?: boolean | null;
  readonly enableSupportChat?: boolean | null;
  readonly needsApproval?: boolean | null;
  readonly changesConfig: ChangesConfig;
  readonly preparationTime: number;
  readonly webhooks?: Webhook[] | null;
  readonly dynamicBarcodes: DynamicBarcodes;
  readonly printing?: PrintingConfiguration | null;
  readonly isMigratedFromFulfillment: boolean;
  readonly itemsLocation?: ItemsLocation | null;
  readonly itemInformation?: (ItemInformation | null)[] | Array<keyof typeof ItemInformation> | null;
  readonly showOrdersInfoTab?: boolean | null;
  readonly showCustomerInfoPerOrder?: boolean | null;
  readonly askPickingConfirmation?: boolean | null;
  readonly forceConfirmEANs?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly accountSalesChannelsId?: string | null;
}

type LazySalesChannel = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<SalesChannel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly groups?: (string | null)[] | null;
  readonly name: string;
  readonly salesSource: AsyncCollection<SalesSource>;
  readonly account: AsyncItem<Account | undefined>;
  readonly type?: AccountTypes | keyof typeof AccountTypes | null;
  readonly isActive: boolean;
  readonly paymentMethods?: (string | null)[] | null;
  readonly shippingMethods?: (string | null)[] | null;
  readonly shippingTypes?: (string | null)[] | null;
  readonly commercialPolicies?: (string | null)[] | null;
  readonly orderTags: (string | null)[];
  readonly packages?: (AvailablePackages | null)[] | null;
  readonly globalOrders: number;
  readonly localOrders: number;
  readonly pickingMethod: PickingMethod | keyof typeof PickingMethod;
  readonly allowQuickCollection: boolean;
  readonly allowOrderNotes: boolean;
  readonly allowItemNotes: boolean;
  readonly allowAutomaticPacking?: boolean | null;
  readonly allowMultiPicking?: boolean | null;
  readonly allowExpressFulfillment?: boolean | null;
  readonly allowWorksheetsReAssign?: boolean | null;
  readonly allowStartedWorksheetsReAssign?: boolean | null;
  readonly allowPackagesReport?: boolean | null;
  readonly allowItemTransfers?: boolean | null;
  readonly autoAcceptIncomingTransfers?: boolean | null;
  readonly enableWorksheetsNotes?: boolean | null;
  readonly enableReplacementOptions?: boolean | null;
  readonly enableSupportChat?: boolean | null;
  readonly needsApproval?: boolean | null;
  readonly changesConfig: ChangesConfig;
  readonly preparationTime: number;
  readonly webhooks: AsyncCollection<Webhook>;
  readonly dynamicBarcodes: DynamicBarcodes;
  readonly printing?: PrintingConfiguration | null;
  readonly isMigratedFromFulfillment: boolean;
  readonly itemsLocation?: ItemsLocation | null;
  readonly itemInformation?: (ItemInformation | null)[] | Array<keyof typeof ItemInformation> | null;
  readonly showOrdersInfoTab?: boolean | null;
  readonly showCustomerInfoPerOrder?: boolean | null;
  readonly askPickingConfirmation?: boolean | null;
  readonly forceConfirmEANs?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly accountSalesChannelsId?: string | null;
}

export declare type SalesChannel = LazyLoading extends LazyLoadingDisabled ? EagerSalesChannel : LazySalesChannel

export declare const SalesChannel: (new (init: ModelInit<SalesChannel>) => SalesChannel) & {
  copyOf(source: SalesChannel, mutator: (draft: MutableModel<SalesChannel>) => MutableModel<SalesChannel> | void): SalesChannel;
}

type EagerService = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Service, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly orderId: string;
  readonly carrierId: string;
  readonly serviceId?: string | null;
  readonly carrierLogo?: string | null;
  readonly carrierName: string;
  readonly seller: string;
  readonly status: ServiceStatus | keyof typeof ServiceStatus;
  readonly labels?: (TrackingLabel | null)[] | null;
  readonly sender: ServiceSender;
  readonly receiver: ServiceReceiver;
  readonly agent?: ServiceAgent | null;
  readonly trackingUrl?: string | null;
  readonly totalDistanceTraveled?: number | null;
  readonly rating?: number | null;
  readonly comments?: string | null;
  readonly evidences?: (ServiceEvidence | null)[] | null;
  readonly packages?: (PackageService | null)[] | null;
  readonly timeline?: (TrackingTimeline | null)[] | null;
  readonly type: ServiceType | keyof typeof ServiceType;
  readonly notes?: (ServiceNotes | null)[] | null;
  readonly orderValue?: number | null;
  readonly paymentMethod?: string | null;
  readonly carrierServiceType?: string | null;
  readonly rate?: ServiceRate | null;
  readonly shippingEstimatedDate?: string | null;
  readonly shippingFinishedDate?: string | null;
  readonly metaData?: string | null;
  readonly timezone?: CTimezone | null;
  readonly tags?: (string | null)[] | null;
  readonly appliedAutomations?: CAppliedAutomation[] | null;
  readonly deliveredDate?: string | null;
  readonly collection?: ServiceCollection | null;
  readonly transferManagement?: ServiceTransferManagement | null;
  readonly rmaId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyService = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Service, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly orderId: string;
  readonly carrierId: string;
  readonly serviceId?: string | null;
  readonly carrierLogo?: string | null;
  readonly carrierName: string;
  readonly seller: string;
  readonly status: ServiceStatus | keyof typeof ServiceStatus;
  readonly labels: AsyncCollection<TrackingLabel>;
  readonly sender: ServiceSender;
  readonly receiver: ServiceReceiver;
  readonly agent?: ServiceAgent | null;
  readonly trackingUrl?: string | null;
  readonly totalDistanceTraveled?: number | null;
  readonly rating?: number | null;
  readonly comments?: string | null;
  readonly evidences?: (ServiceEvidence | null)[] | null;
  readonly packages?: (PackageService | null)[] | null;
  readonly timeline: AsyncCollection<TrackingTimeline>;
  readonly type: ServiceType | keyof typeof ServiceType;
  readonly notes?: (ServiceNotes | null)[] | null;
  readonly orderValue?: number | null;
  readonly paymentMethod?: string | null;
  readonly carrierServiceType?: string | null;
  readonly rate?: ServiceRate | null;
  readonly shippingEstimatedDate?: string | null;
  readonly shippingFinishedDate?: string | null;
  readonly metaData?: string | null;
  readonly timezone?: CTimezone | null;
  readonly tags?: (string | null)[] | null;
  readonly appliedAutomations?: CAppliedAutomation[] | null;
  readonly deliveredDate?: string | null;
  readonly collection?: ServiceCollection | null;
  readonly transferManagement?: ServiceTransferManagement | null;
  readonly rmaId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Service = LazyLoading extends LazyLoadingDisabled ? EagerService : LazyService

export declare const Service: (new (init: ModelInit<Service>) => Service) & {
  copyOf(source: Service, mutator: (draft: MutableModel<Service>) => MutableModel<Service> | void): Service;
}

type EagerStoreConfig = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<StoreConfig, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly groups?: (string | null)[] | null;
  readonly name: string;
  readonly general?: GeneralConfig | null;
  readonly categories?: (CategoriesConfiguration | null)[] | null;
  readonly batchInterval: number;
  readonly maxItemsPerBatch: number;
  readonly maxItemsPerWorksheet: number;
  readonly salesSources?: (SalesSource | null)[] | null;
  readonly salesChannel: string;
  readonly timezone?: CTimezone | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly accountStoreConfigId?: string | null;
}

type LazyStoreConfig = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<StoreConfig, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly groups?: (string | null)[] | null;
  readonly name: string;
  readonly general?: GeneralConfig | null;
  readonly categories?: (CategoriesConfiguration | null)[] | null;
  readonly batchInterval: number;
  readonly maxItemsPerBatch: number;
  readonly maxItemsPerWorksheet: number;
  readonly salesSources: AsyncCollection<SalesSource>;
  readonly salesChannel: string;
  readonly timezone?: CTimezone | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly accountStoreConfigId?: string | null;
}

export declare type StoreConfig = LazyLoading extends LazyLoadingDisabled ? EagerStoreConfig : LazyStoreConfig

export declare const StoreConfig: (new (init: ModelInit<StoreConfig>) => StoreConfig) & {
  copyOf(source: StoreConfig, mutator: (draft: MutableModel<StoreConfig>) => MutableModel<StoreConfig> | void): StoreConfig;
}

type EagerTags = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Tags, ['id', 'seller', 'model']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly seller: string;
  readonly model: TagModel | keyof typeof TagModel;
  readonly tags?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTags = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Tags, ['id', 'seller', 'model']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly seller: string;
  readonly model: TagModel | keyof typeof TagModel;
  readonly tags?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Tags = LazyLoading extends LazyLoadingDisabled ? EagerTags : LazyTags

export declare const Tags: (new (init: ModelInit<Tags>) => Tags) & {
  copyOf(source: Tags, mutator: (draft: MutableModel<Tags>) => MutableModel<Tags> | void): Tags;
}

type EagerTrackingLabel = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<TrackingLabel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly serviceID: string;
  readonly url: string;
  readonly name: string;
  readonly type: ServiceLabelType | keyof typeof ServiceLabelType;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTrackingLabel = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<TrackingLabel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly serviceID: string;
  readonly url: string;
  readonly name: string;
  readonly type: ServiceLabelType | keyof typeof ServiceLabelType;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TrackingLabel = LazyLoading extends LazyLoadingDisabled ? EagerTrackingLabel : LazyTrackingLabel

export declare const TrackingLabel: (new (init: ModelInit<TrackingLabel>) => TrackingLabel) & {
  copyOf(source: TrackingLabel, mutator: (draft: MutableModel<TrackingLabel>) => MutableModel<TrackingLabel> | void): TrackingLabel;
}

type EagerTrackingSettings = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<TrackingSettings, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly account: string;
  readonly country?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly address?: string | null;
  readonly additionalAddress?: string | null;
  readonly neighborhood?: string | null;
  readonly number?: string | null;
  readonly reference?: string | null;
  readonly zipCode?: string | null;
  readonly timeZone?: CTimezone | null;
  readonly latitude?: number | null;
  readonly longitude?: number | null;
  readonly contactName?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly authorized?: boolean | null;
  readonly inheritSettings?: boolean | null;
  readonly shareCustomerInformationWithCarriers?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTrackingSettings = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<TrackingSettings, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly account: string;
  readonly country?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly address?: string | null;
  readonly additionalAddress?: string | null;
  readonly neighborhood?: string | null;
  readonly number?: string | null;
  readonly reference?: string | null;
  readonly zipCode?: string | null;
  readonly timeZone?: CTimezone | null;
  readonly latitude?: number | null;
  readonly longitude?: number | null;
  readonly contactName?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly authorized?: boolean | null;
  readonly inheritSettings?: boolean | null;
  readonly shareCustomerInformationWithCarriers?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TrackingSettings = LazyLoading extends LazyLoadingDisabled ? EagerTrackingSettings : LazyTrackingSettings

export declare const TrackingSettings: (new (init: ModelInit<TrackingSettings>) => TrackingSettings) & {
  copyOf(source: TrackingSettings, mutator: (draft: MutableModel<TrackingSettings>) => MutableModel<TrackingSettings> | void): TrackingSettings;
}

type EagerTrackingTimeline = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<TrackingTimeline, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly serviceID: string;
  readonly type: TrackingTimelineType | keyof typeof TrackingTimelineType;
  readonly date: string;
  readonly description?: string | null;
  readonly author?: string | null;
  readonly metaData?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTrackingTimeline = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<TrackingTimeline, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly serviceID: string;
  readonly type: TrackingTimelineType | keyof typeof TrackingTimelineType;
  readonly date: string;
  readonly description?: string | null;
  readonly author?: string | null;
  readonly metaData?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TrackingTimeline = LazyLoading extends LazyLoadingDisabled ? EagerTrackingTimeline : LazyTrackingTimeline

export declare const TrackingTimeline: (new (init: ModelInit<TrackingTimeline>) => TrackingTimeline) & {
  copyOf(source: TrackingTimeline, mutator: (draft: MutableModel<TrackingTimeline>) => MutableModel<TrackingTimeline> | void): TrackingTimeline;
}

type EagerSalesSource = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SalesSource, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly groups?: (string | null)[] | null;
  readonly warehouseId: string;
  readonly warehouseName: string;
  readonly type?: string | null;
  readonly salesChannel: SalesChannel;
  readonly storeConfig: StoreConfig;
  readonly configuration?: (CConfigurations | null)[] | null;
  readonly downloadOrders: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly salesChannelSalesSourceId?: string | null;
  readonly storeConfigSalesSourcesId?: string | null;
}

type LazySalesSource = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SalesSource, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly groups?: (string | null)[] | null;
  readonly warehouseId: string;
  readonly warehouseName: string;
  readonly type?: string | null;
  readonly salesChannel: AsyncItem<SalesChannel>;
  readonly storeConfig: AsyncItem<StoreConfig>;
  readonly configuration?: (CConfigurations | null)[] | null;
  readonly downloadOrders: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly salesChannelSalesSourceId?: string | null;
  readonly storeConfigSalesSourcesId?: string | null;
}

export declare type SalesSource = LazyLoading extends LazyLoadingDisabled ? EagerSalesSource : LazySalesSource

export declare const SalesSource: (new (init: ModelInit<SalesSource>) => SalesSource) & {
  copyOf(source: SalesSource, mutator: (draft: MutableModel<SalesSource>) => MutableModel<SalesSource> | void): SalesSource;
}

type EagerWebhook = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Webhook, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly salesChannelId: string;
  readonly active: boolean;
  readonly type: WebhookType | keyof typeof WebhookType;
  readonly url: string;
  readonly restType: RestType | keyof typeof RestType;
  readonly headers?: WebhookVariables[] | null;
  readonly params?: WebhookVariables[] | null;
  readonly facilities?: string[] | null;
  readonly showItems?: boolean | null;
  readonly showChanges?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWebhook = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Webhook, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly salesChannelId: string;
  readonly active: boolean;
  readonly type: WebhookType | keyof typeof WebhookType;
  readonly url: string;
  readonly restType: RestType | keyof typeof RestType;
  readonly headers?: WebhookVariables[] | null;
  readonly params?: WebhookVariables[] | null;
  readonly facilities?: string[] | null;
  readonly showItems?: boolean | null;
  readonly showChanges?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Webhook = LazyLoading extends LazyLoadingDisabled ? EagerWebhook : LazyWebhook

export declare const Webhook: (new (init: ModelInit<Webhook>) => Webhook) & {
  copyOf(source: Webhook, mutator: (draft: MutableModel<Webhook>) => MutableModel<Webhook> | void): Webhook;
}

type EagerWorksheet = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Worksheet, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly groups?: (string | null)[] | null;
  readonly storeConfig: string;
  readonly hostname?: string | null;
  readonly fulfillment?: (FulfillmentV2 | null)[] | null;
  readonly categoriesIds?: (string | null)[] | null;
  readonly conversationID?: string | null;
  readonly notificationsID?: string | null;
  readonly initDate?: string | null;
  readonly finishedDate?: string | null;
  readonly finishEstimatedDate?: string | null;
  readonly worksheetId?: string | null;
  readonly isPaused?: boolean | null;
  readonly pauses?: (Pauses | null)[] | null;
  readonly ordersIds: (OrderPriority | null)[];
  readonly pickerAssignment: (PickerAssignment | null)[];
  readonly status: WorksheetStatus | keyof typeof WorksheetStatus;
  readonly lastPickedItemTime: number;
  readonly lastStatusChangeTime?: number | null;
  readonly pickingStartedAt?: string | null;
  readonly pickedAt?: string | null;
  readonly packingStartedAt?: string | null;
  readonly packedAt?: string | null;
  readonly totalItems: number;
  readonly totalUnits: number;
  readonly totalCompletedItems: number;
  readonly totalCompletedUnits: number;
  readonly totalPackedItems?: number | null;
  readonly totalPackedUnits?: number | null;
  readonly totalItemsToPack?: number | null;
  readonly totalUnitsToPack?: number | null;
  readonly priority: number;
  readonly historicalWorksheet?: (HistoricalWorksheet | null)[] | null;
  readonly tags?: (string | null)[] | null;
  readonly appliedAutomations?: CAppliedAutomation[] | null;
  readonly notes?: (WorksheetNotes | null)[] | null;
  readonly picker_facility?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWorksheet = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Worksheet, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly groups?: (string | null)[] | null;
  readonly storeConfig: string;
  readonly hostname?: string | null;
  readonly fulfillment: AsyncCollection<FulfillmentV2>;
  readonly categoriesIds?: (string | null)[] | null;
  readonly conversationID?: string | null;
  readonly notificationsID?: string | null;
  readonly initDate?: string | null;
  readonly finishedDate?: string | null;
  readonly finishEstimatedDate?: string | null;
  readonly worksheetId?: string | null;
  readonly isPaused?: boolean | null;
  readonly pauses?: (Pauses | null)[] | null;
  readonly ordersIds: (OrderPriority | null)[];
  readonly pickerAssignment: (PickerAssignment | null)[];
  readonly status: WorksheetStatus | keyof typeof WorksheetStatus;
  readonly lastPickedItemTime: number;
  readonly lastStatusChangeTime?: number | null;
  readonly pickingStartedAt?: string | null;
  readonly pickedAt?: string | null;
  readonly packingStartedAt?: string | null;
  readonly packedAt?: string | null;
  readonly totalItems: number;
  readonly totalUnits: number;
  readonly totalCompletedItems: number;
  readonly totalCompletedUnits: number;
  readonly totalPackedItems?: number | null;
  readonly totalPackedUnits?: number | null;
  readonly totalItemsToPack?: number | null;
  readonly totalUnitsToPack?: number | null;
  readonly priority: number;
  readonly historicalWorksheet: AsyncCollection<HistoricalWorksheet>;
  readonly tags?: (string | null)[] | null;
  readonly appliedAutomations?: CAppliedAutomation[] | null;
  readonly notes?: (WorksheetNotes | null)[] | null;
  readonly picker_facility?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Worksheet = LazyLoading extends LazyLoadingDisabled ? EagerWorksheet : LazyWorksheet

export declare const Worksheet: (new (init: ModelInit<Worksheet>) => Worksheet) & {
  copyOf(source: Worksheet, mutator: (draft: MutableModel<Worksheet>) => MutableModel<Worksheet> | void): Worksheet;
}