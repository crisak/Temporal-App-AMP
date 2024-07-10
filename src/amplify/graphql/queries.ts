/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const secureNotifications = /* GraphQL */ `query SecureNotifications($user: String, $type: tokenType!) {
  secureNotifications(user: $user, type: $type)
}
` as GeneratedQuery<
  APITypes.SecureNotificationsQueryVariables,
  APITypes.SecureNotificationsQuery
>;
export const getVtexOrder = /* GraphQL */ `query GetVtexOrder($vtexOrderFilters: VtexOrderFilters) {
  getVtexOrder(vtexOrderFilters: $vtexOrderFilters) {
    affiliateId
    marketplaceOrderId
    sellerOrderId
    orderId
    sequence
    hostname
    status
    creationDate
    openTextField
    shippingEstimatedDateMin
    salesChannel
    clientName
    lastChange
    deliveryChannel
    value
    courierName
    itemsCategories
    itemsCategoriesIds
    paymentMethodsName
    orderTotalValue
    orderItemsCount
    totals {
      id
      name
      value
      alternativeTotals {
        id
        name
        value
        __typename
      }
      __typename
    }
    storePreferencesData {
      countryCode
      currencyCode
      currencyLocale
      currencySymbol
      timeZone
      currencyFormatInfo {
        CurrencyDecimalDigits
        CurrencyDecimalSeparator
        CurrencyGroupSeparator
        CurrencyGroupSize
        StartsWithCurrencySymbol
        __typename
      }
      __typename
    }
    payment {
      paymentId
      paymentName
      paymentHolder
      date
      baseTotal
      discount
      tax
      grandTotal
      currency {
        name
        code
        symbol
        decimalDigits
        decimalSeparator
        groupSeparator
        groupSize
        __typename
      }
      method
      transactionId
      transactionRef
      authorization
      lastDigits
      firstDigits
      installments
      cardNumber
      plcConversionRate
      priceListCurrency {
        name
        code
        symbol
        decimalDigits
        decimalSeparator
        groupSeparator
        groupSize
        __typename
      }
      __typename
    }
    invoiceData {
      address
      userPaymentInfo {
        paymentMethods
        __typename
      }
      __typename
    }
    packageAttachment
    shippingData {
      selectedAddresses {
        addressId
        addressType
        receiverName
        street
        number
        complement
        neighborhood
        postalCode
        city
        state
        country
        reference
        geoCoordinates
        __typename
      }
      logisticsInfo {
        selectedSla
        addressId
        pickupPointId
        lockTTL
        transitTime
        sellingPrice
        shippingEstimate
        shippingEstimateDate
        __typename
      }
      __typename
    }
    customData {
      customApps {
        id
        major
        __typename
      }
      __typename
    }
    marketingData {
      id
      utmSource
      utmPartner
      utmMedium
      utmCampaign
      utmipage
      utmiPart
      utmiCampaign
      marketingTags
      coupon
      __typename
    }
    pickingPriority
    rejectedItems
    pickedItems
    marketplace {
      baseURL
      isCertified
      name
      __typename
    }
    sellers {
      id
      name
      logo
      fulfillmentEndpoint
      __typename
    }
    items {
      id
      seller
      quantity
      description
      ean
      refId
      productId
      listPrice
      price
      sellingPrice
      tax
      taxCode
      rewardValue
      skuName
      imageUrl
      name
      isGift
      measurementUnit
      manualPrice
      preSaleDate
      unitMultiplier
      picked {
        quantity
        __typename
      }
      priceTags
      priceDefinition {
        calculatedSellingPrice
        total
        __typename
      }
      bundleItems
      components
      attachments
      assemblies
      productCategories {
        id
        name
        __typename
      }
      brand {
        brandId
        brandName
        __typename
      }
      dimension {
        cubicweight
        height
        length
        weight
        width
        __typename
      }
      __typename
    }
    clientProfileData {
      firstName
      lastName
      email
      document
      documentType
      phone
      userProfileId
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetVtexOrderQueryVariables,
  APITypes.GetVtexOrderQuery
>;
export const getVtexOrders = /* GraphQL */ `query GetVtexOrders($vtexFilters: VtexFilters) {
  getVtexOrders(vtexFilters: $vtexFilters) {
    list {
      orderId
      creationDate
      totalValue
      status
      customer
      items
      __typename
    }
    paging {
      total
      pages
      currentPage
      perPage
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetVtexOrdersQueryVariables,
  APITypes.GetVtexOrdersQuery
>;
export const getShippingPolicies = /* GraphQL */ `query GetShippingPolicies($filters: ShippingFilters) {
  getShippingPolicies(filters: $filters) {
    id
    name
    shippingMethod
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetShippingPoliciesQueryVariables,
  APITypes.GetShippingPoliciesQuery
>;
export const searchServices = /* GraphQL */ `query SearchServices(
  $serviceFilters: ServiceFilters
  $pagination: OrderPagination
) {
  searchServices(serviceFilters: $serviceFilters, pagination: $pagination) {
    services {
      id
      serviceId
      orderId
      customerId
      customerAddressId
      carrierId
      courierId
      source
      destination
      deliveredDate
      courierName
      hostname
      storeConfigId
      status
      packagesQuantity
      itemsQuantity
      carrierLogo
      carrierName
      paymentMethod
      serviceType
      tags
      deadline
      creationDate
      metaData {
        __typename
      }
      transferManagement {
        fromService
        newService
        __typename
      }
      __typename
    }
    pagination {
      totalItems
      page
      pageSize
      totalPages
      from
      to
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchServicesQueryVariables,
  APITypes.SearchServicesQuery
>;
export const searchOrders = /* GraphQL */ `query SearchOrders(
  $sort: OrderSort
  $filters: OrderFilters
  $pagination: OrderPagination!
) {
  searchOrders(sort: $sort, filters: $filters, pagination: $pagination) {
    items {
      customerId
      addressId
      shippingEstimatedDateMin
      orderDate
      finishedDate
      orderStatus
      invoiceDate
      invoiceNumbers
      orderId
      commercialPolicy
      salesChannel
      warehouseId
      storeConfigId
      worksheetId {
        worksheetId
        status
        __typename
      }
      hostname
      itemsQuantity
      unitsQuantity
      completedItemsQuantity
      completedUnitsQuantity
      packedItemsQuantity
      packedUnitsQuantity
      categoriesIds
      paymentMethodId
      paymentMethodName
      shippingCarrier
      shippingType
      currency
      tags
      totalValue
      hasPendingPackages
      __typename
    }
    pagination {
      total
      from
      to
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchOrdersQueryVariables,
  APITypes.SearchOrdersQuery
>;
export const searchCarriersStoreConfig = /* GraphQL */ `query SearchCarriersStoreConfig(
  $filters: CarriersStoreConfigFilters!
  $pagination: OrderPagination!
) {
  searchCarriersStoreConfig(filters: $filters, pagination: $pagination) {
    items {
      id
      account
      active
      carrierId
      name
      isBroker
      countries
      shippingTypes
      logo
      __typename
    }
    pagination {
      total
      from
      to
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchCarriersStoreConfigQueryVariables,
  APITypes.SearchCarriersStoreConfigQuery
>;
export const searchOrdersStats = /* GraphQL */ `query SearchOrdersStats($filters: OrderFilters, $timeZone: String) {
  searchOrdersStats(filters: $filters, timeZone: $timeZone) {
    date
    pendingOrders
    completedOrders
    totalOrders
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchOrdersStatsQueryVariables,
  APITypes.SearchOrdersStatsQuery
>;
export const searchWorksheets = /* GraphQL */ `query SearchWorksheets(
  $filters: WorksheetFilters
  $pagination: WorksheetPagination
  $sort: WorksheetSort
) {
  searchWorksheets(filters: $filters, pagination: $pagination, sort: $sort) {
    items {
      worksheetId
      id
      isPaused
      pauses {
        startDate
        endDate
        reason
        user
        reasonType
        __typename
      }
      status
      ordersIds {
        orderId
        itemsQuantity
        unitsQuantity
        __typename
      }
      storeConfig
      hostname
      categoriesIds
      items
      pickerAssignment {
        active
        pickerId
        method
        assignmentDate
        finishedDate
        notes
        __typename
      }
      itemsQuantity
      unitsQuantity
      completedUnitsQuantity
      packedUnitsQuantity
      deliveryWindow {
        finalHour
        initialHour
        name
        weekDay
        __typename
      }
      finishedDate
      finishEstimatedDate
      initDate
      createdAt
      __typename
    }
    pagination {
      total
      from
      to
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchWorksheetsQueryVariables,
  APITypes.SearchWorksheetsQuery
>;
export const getPickerInsights = /* GraphQL */ `query GetPickerInsights($filters: PickerInsightFilters) {
  getPickerInsights(filters: $filters) {
    pickerInsights {
      histogram {
        __typename
      }
      totalPickedOrders {
        lastPeriod
        currentPeriod
        __typename
      }
      totalPickedItems {
        lastPeriod
        currentPeriod
        __typename
      }
      pendingWorksheets
      ordersToPack
      unnasignedOrders
      avgTimePickerPerItemCurrentPeriod
      avgTimePickerPerItemLastPeriod
      avgTimePickerPerOrderCurrentPeriod
      avgTimePickerPerOrderLastPeriod
      chartPerItem {
        minSellerTime
        maxSellerTime
        minPickerTime
        maxPickerTime
        avgPickerTime
        avgSellerTime
        __typename
      }
      chartPerOrder {
        minSellerTime
        maxSellerTime
        minPickerTime
        maxPickerTime
        avgPickerTime
        avgSellerTime
        __typename
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPickerInsightsQueryVariables,
  APITypes.GetPickerInsightsQuery
>;
export const getAvgTimePerPicker = /* GraphQL */ `query GetAvgTimePerPicker($filters: PickerInsightFilters) {
  getAvgTimePerPicker(filters: $filters) {
    avgTimePickerPerItemCurrentPeriod
    avgTimePickerPerItemLastPeriod
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAvgTimePerPickerQueryVariables,
  APITypes.GetAvgTimePerPickerQuery
>;
export const getWorksheetMetrics = /* GraphQL */ `query GetWorksheetMetrics($filters: PickerInsightFilters) {
  getWorksheetMetrics(filters: $filters) {
    _id
    handledWorksheets
    handledOrders
    AvgPickingTimePerOrder
    AvgPickingTimePerWorksheet
    AvgPickingTimePerItem
    currentWorksheets
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetWorksheetMetricsQueryVariables,
  APITypes.GetWorksheetMetricsQuery
>;
export const getWorksheetSummary = /* GraphQL */ `query GetWorksheetSummary($worksheetId: String!) {
  getWorksheetSummary(worksheetId: $worksheetId) {
    fulfillmentRate
    ordersInWorksheet
    createdDate
    assignedDate
    pickedItems
    rejectedItems
    replacedItems
    pickingTime
    timePerItem
    picker
    packagesCreated
    envelopesUsed
    packingTime
    packer
    worksheetId
    status
    ordersIds
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetWorksheetSummaryQueryVariables,
  APITypes.GetWorksheetSummaryQuery
>;
export const getWorksheetMetricsDate = /* GraphQL */ `query GetWorksheetMetricsDate($filters: PickerInsightFilters) {
  getWorksheetMetricsDate(filters: $filters) {
    handledWorksheets
    handledOrders
    AvgPickingTimePerOrder
    AvgPickingTimePerWorksheet
    AvgPickingTimePerItem
    currentWorksheets
    pickerId
    date
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetWorksheetMetricsDateQueryVariables,
  APITypes.GetWorksheetMetricsDateQuery
>;
export const getAvgTimePerItemByHostname = /* GraphQL */ `query GetAvgTimePerItemByHostname($filters: PickerInsightFilters) {
  getAvgTimePerItemByHostname(filters: $filters) {
    avgTimePerItemCurrentPeriod
    avgTimePerItemLastPeriod
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAvgTimePerItemByHostnameQueryVariables,
  APITypes.GetAvgTimePerItemByHostnameQuery
>;
export const getAvgShippingTimeByHostname = /* GraphQL */ `query GetAvgShippingTimeByHostname($filters: PickerInsightFilters) {
  getAvgShippingTimeByHostname(filters: $filters) {
    avgTimePerItemCurrentPeriod
    avgTimePerItemLastPeriod
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAvgShippingTimeByHostnameQueryVariables,
  APITypes.GetAvgShippingTimeByHostnameQuery
>;
export const getAvgPackingTimePerItemByHostname = /* GraphQL */ `query GetAvgPackingTimePerItemByHostname($filters: PickerInsightFilters) {
  getAvgPackingTimePerItemByHostname(filters: $filters) {
    avgTimePerItemCurrentPeriod
    avgTimePerItemLastPeriod
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAvgPackingTimePerItemByHostnameQueryVariables,
  APITypes.GetAvgPackingTimePerItemByHostnameQuery
>;
export const getOrdersHandled = /* GraphQL */ `query GetOrdersHandled($filters: InsightsOrderFilters) {
  getOrdersHandled(filters: $filters) {
    name
    currentPeriod
    lastPeriod
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetOrdersHandledQueryVariables,
  APITypes.GetOrdersHandledQuery
>;
export const getWorksheetsHandled = /* GraphQL */ `query GetWorksheetsHandled($filters: InsightsOrderFilters) {
  getWorksheetsHandled(filters: $filters) {
    name
    currentPeriod
    lastPeriod
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetWorksheetsHandledQueryVariables,
  APITypes.GetWorksheetsHandledQuery
>;
export const getAvgTimePerOrder = /* GraphQL */ `query GetAvgTimePerOrder($filters: InsightsOrderFilters) {
  getAvgTimePerOrder(filters: $filters) {
    picking {
      lastPeriod
      currentPeriod
      __typename
    }
    packing {
      lastPeriod
      currentPeriod
      __typename
    }
    shipping {
      lastPeriod
      currentPeriod
      __typename
    }
    totalProcess {
      lastPeriod
      currentPeriod
      __typename
    }
    pickedOrders
    deliveredOrders
    canceledOrders
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAvgTimePerOrderQueryVariables,
  APITypes.GetAvgTimePerOrderQuery
>;
export const getItemsHandled = /* GraphQL */ `query GetItemsHandled($filters: InsightsOrderFilters) {
  getItemsHandled(filters: $filters) {
    lastPeriod {
      avgPickingTime
      itemsPicked
      fillRate
      __typename
    }
    currentPeriod {
      avgPickingTime
      itemsPicked
      fillRate
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetItemsHandledQueryVariables,
  APITypes.GetItemsHandledQuery
>;
export const getItemsHistogram = /* GraphQL */ `query GetItemsHistogram($filters: InsightsOrderFilters) {
  getItemsHistogram(filters: $filters) {
    itemsPicked
    unitsPicked
    unitsRejected
    histogram {
      name
      itemsPicked
      unitsPicked
      unitsRejected
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetItemsHistogramQueryVariables,
  APITypes.GetItemsHistogramQuery
>;
export const getHeatmap = /* GraphQL */ `query GetHeatmap($filters: InsightsOrderFilters) {
  getHeatmap(filters: $filters) {
    data
    days
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetHeatmapQueryVariables,
  APITypes.GetHeatmapQuery
>;
export const getPickersPerformance = /* GraphQL */ `query GetPickersPerformance($filters: InsightsOrderFilters) {
  getPickersPerformance(filters: $filters) {
    picker
    orders
    items
    units
    timePerOrder
    timePerItem
    timePerPackingOrder
    fillRate
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPickersPerformanceQueryVariables,
  APITypes.GetPickersPerformanceQuery
>;
export const getCapacity = /* GraphQL */ `query GetCapacity($filters: InsightsOrderFilters) {
  getCapacity(filters: $filters) {
    estimatedCapacity
    currentWorkload
    ordersPerHour {
      lastPeriod
      currentPeriod
      __typename
    }
    itemsPerHour {
      lastPeriod
      currentPeriod
      __typename
    }
    itemsPerDay {
      lastPeriod
      currentPeriod
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCapacityQueryVariables,
  APITypes.GetCapacityQuery
>;
export const getStoreOrders = /* GraphQL */ `query GetStoreOrders($filters: InsightsOrderFilters) {
  getStoreOrders(filters: $filters) {
    totalOrders {
      lastPeriod
      currentPeriod
      __typename
    }
    ordersBySeller {
      seller
      onTime
      late
      canceled
      total
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetStoreOrdersQueryVariables,
  APITypes.GetStoreOrdersQuery
>;
export const getStoreDetails = /* GraphQL */ `query GetStoreDetails($filters: InsightsOrderFilters) {
  getStoreDetails(filters: $filters) {
    storeDetails {
      order
      items
      facility
      status
      __typename
    }
    generalOrders {
      lastPeriod
      currentPeriod
      __typename
    }
    generalWorksheets {
      lastPeriod
      currentPeriod
      __typename
    }
    ordersInPicking
    ordersInPacking
    ordersInShipping
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetStoreDetailsQueryVariables,
  APITypes.GetStoreDetailsQuery
>;
export const getStorePickers = /* GraphQL */ `query GetStorePickers($filters: InsightsOrderFilters) {
  getStorePickers(filters: $filters) {
    picker
    orders
    online
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetStorePickersQueryVariables,
  APITypes.GetStorePickersQuery
>;
export const getSummaryTimePerWorksheet = /* GraphQL */ `query GetSummaryTimePerWorksheet($filters: InsightsOrderFilters) {
  getSummaryTimePerWorksheet(filters: $filters) {
    timeInPicking
    timeInPacking
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSummaryTimePerWorksheetQueryVariables,
  APITypes.GetSummaryTimePerWorksheetQuery
>;
export const searchWorksheetStats = /* GraphQL */ `query SearchWorksheetStats($filters: WorksheetFilters, $timeZone: String) {
  searchWorksheetStats(filters: $filters, timeZone: $timeZone) {
    date
    pendingWorksheets
    completedWorksheets
    totalWorksheets
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchWorksheetStatsQueryVariables,
  APITypes.SearchWorksheetStatsQuery
>;
export const listCatalog = /* GraphQL */ `query ListCatalog(
  $parentAccount: String!
  $page: Int!
  $pageSize: Int!
  $query: String
  $filters: CatalogFilters
) {
  listCatalog(
    parentAccount: $parentAccount
    page: $page
    pageSize: $pageSize
    query: $query
    filters: $filters
  ) {
    items {
      active
      id
      productId
      imageUrl
      isWeighable
      keywords
      name
      soldBy
      specifications {
        name
        type
        value
        __typename
      }
      sku
      ref
      metaData {
        commercialPolicy
        __typename
      }
      ean
      dimensions {
        cubicweight
        height
        length
        weight
        width
        __typename
      }
      categories {
        id
        main
        name
        __typename
      }
      brand {
        id
        name
        __typename
      }
      temperature
      location {
        location
        hostname
        warehouse
        __typename
      }
      __typename
    }
    pagination {
      total
      page
      from
      to
      perPage
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCatalogQueryVariables,
  APITypes.ListCatalogQuery
>;
export const getProductWithoutSimulation = /* GraphQL */ `query GetProductWithoutSimulation(
  $parentAccount: String!
  $page: Int!
  $pageSize: Int!
  $query: String
  $queryType: QueryTypeCatalog
) {
  getProductWithoutSimulation(
    parentAccount: $parentAccount
    page: $page
    pageSize: $pageSize
    query: $query
    queryType: $queryType
  ) {
    items {
      active
      id
      productId
      imageUrl
      isWeighable
      keywords
      name
      soldBy
      specifications {
        name
        type
        value
        __typename
      }
      sku
      ref
      metaData {
        commercialPolicy
        __typename
      }
      ean
      dimensions {
        cubicweight
        height
        length
        weight
        width
        __typename
      }
      categories {
        id
        main
        name
        __typename
      }
      brand {
        id
        name
        __typename
      }
      temperature
      location {
        location
        hostname
        warehouse
        __typename
      }
      __typename
    }
    pagination {
      total
      page
      from
      to
      perPage
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProductWithoutSimulationQueryVariables,
  APITypes.GetProductWithoutSimulationQuery
>;
export const getSuggestions = /* GraphQL */ `query GetSuggestions(
  $parentAccount: String!
  $hostname: String!
  $skuId: String!
  $country: String!
  $postalCode: String
  $geoCoordinates: [Float]
) {
  getSuggestions(
    parentAccount: $parentAccount
    hostname: $hostname
    skuId: $skuId
    country: $country
    postalCode: $postalCode
    geoCoordinates: $geoCoordinates
  ) {
    skuId
    productId
    eans
    skus
    ref
    name
    price
    listPrice
    stockBalance
    imageUrl
    specifications {
      name
      type
      value
      __typename
    }
    categories {
      id
      main
      name
      __typename
    }
    unitMultiplier
    unitOfMeasurement
    location {
      location
      hostname
      warehouse
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSuggestionsQueryVariables,
  APITypes.GetSuggestionsQuery
>;
export const getProductBySearch = /* GraphQL */ `query GetProductBySearch(
  $parentAccount: String!
  $hostname: String!
  $query: String!
  $country: String!
  $postalCode: String
  $geoCoordinates: [Float]
) {
  getProductBySearch(
    parentAccount: $parentAccount
    hostname: $hostname
    query: $query
    country: $country
    postalCode: $postalCode
    geoCoordinates: $geoCoordinates
  ) {
    skuId
    productId
    eans
    skus
    ref
    name
    price
    listPrice
    stockBalance
    imageUrl
    specifications {
      name
      type
      value
      __typename
    }
    categories {
      id
      main
      name
      __typename
    }
    unitMultiplier
    unitOfMeasurement
    location {
      location
      hostname
      warehouse
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProductBySearchQueryVariables,
  APITypes.GetProductBySearchQuery
>;
export const getProductById = /* GraphQL */ `query GetProductById(
  $parentAccount: String!
  $hostname: String!
  $query: String!
  $country: String!
  $postalCode: String
  $geoCoordinates: [Float]
) {
  getProductById(
    parentAccount: $parentAccount
    hostname: $hostname
    query: $query
    country: $country
    postalCode: $postalCode
    geoCoordinates: $geoCoordinates
  ) {
    skuId
    productId
    eans
    skus
    ref
    name
    price
    listPrice
    stockBalance
    imageUrl
    specifications {
      name
      type
      value
      __typename
    }
    categories {
      id
      main
      name
      __typename
    }
    unitMultiplier
    unitOfMeasurement
    location {
      location
      hostname
      warehouse
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProductByIdQueryVariables,
  APITypes.GetProductByIdQuery
>;
export const getProductBySKU = /* GraphQL */ `query GetProductBySKU(
  $parentAccount: String!
  $hostname: String!
  $query: String!
  $country: String!
  $postalCode: String
  $geoCoordinates: [Float]
) {
  getProductBySKU(
    parentAccount: $parentAccount
    hostname: $hostname
    query: $query
    country: $country
    postalCode: $postalCode
    geoCoordinates: $geoCoordinates
  ) {
    skuId
    productId
    eans
    skus
    ref
    name
    price
    listPrice
    stockBalance
    imageUrl
    specifications {
      name
      type
      value
      __typename
    }
    categories {
      id
      main
      name
      __typename
    }
    unitMultiplier
    unitOfMeasurement
    location {
      location
      hostname
      warehouse
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProductBySKUQueryVariables,
  APITypes.GetProductBySKUQuery
>;
export const getProductByRefId = /* GraphQL */ `query GetProductByRefId(
  $parentAccount: String!
  $hostname: String!
  $query: String!
  $country: String!
  $postalCode: String
  $geoCoordinates: [Float]
) {
  getProductByRefId(
    parentAccount: $parentAccount
    hostname: $hostname
    query: $query
    country: $country
    postalCode: $postalCode
    geoCoordinates: $geoCoordinates
  ) {
    skuId
    productId
    eans
    skus
    ref
    name
    price
    listPrice
    stockBalance
    imageUrl
    specifications {
      name
      type
      value
      __typename
    }
    categories {
      id
      main
      name
      __typename
    }
    unitMultiplier
    unitOfMeasurement
    location {
      location
      hostname
      warehouse
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProductByRefIdQueryVariables,
  APITypes.GetProductByRefIdQuery
>;
export const suggestWorksheetCreation = /* GraphQL */ `query SuggestWorksheetCreation(
  $orderIds: [String]!
  $facilities: [String]
  $isDemo: Boolean
) {
  suggestWorksheetCreation(
    orderIds: $orderIds
    facilities: $facilities
    isDemo: $isDemo
  ) {
    id
    storeConfigId
    orders {
      orderId
      items {
        id
        uniqueId
        itemName
        sku
        additionalSku
        EAN
        additionalEAN
        referenceCode
        additionalReferenceCode
        basePrice
        price
        listPrice
        pickingPrice
        currencyCode
        tax
        isTaxable
        weighableProduct
        description
        quantity
        unitOfMeasure
        unitMultiplier
        originalUnitMultiplier
        isCombo
        images
        label
        qrCodeContent
        observations
        metaData
        temperature
        storeConfig
        isOriginal
        status
        pickedQuantity
        transferredQuantity
        dynamicBarcode
        rejectedQuantity
        replacedQuantity
        replacedBy
        location
        __typename
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SuggestWorksheetCreationQueryVariables,
  APITypes.SuggestWorksheetCreationQuery
>;
export const suggestItemTransfer = /* GraphQL */ `query SuggestItemTransfer(
  $orderIds: [String]!
  $salesChannelId: String!
  $worksheetId: String!
  $itemId: String!
  $parentAccountId: String!
  $geoCoordinates: [Float]
  $sourceFacility: String
) {
  suggestItemTransfer(
    orderIds: $orderIds
    salesChannelId: $salesChannelId
    worksheetId: $worksheetId
    itemId: $itemId
    parentAccountId: $parentAccountId
    geoCoordinates: $geoCoordinates
    sourceFacility: $sourceFacility
  ) {
    orderId
    worksheetId
    salesChannelId
    accountName
    itemToTransfer
    quantityToTransfer
    availableWarehouses {
      _id
      account
      location {
        type
        coordinates
        __typename
      }
      name
      salesSources {
        id
        warehouseName
        warehouseId
        quantity
        hostname
        __typename
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SuggestItemTransferQueryVariables,
  APITypes.SuggestItemTransferQuery
>;
export const getDeliveryMethods = /* GraphQL */ `query GetDeliveryMethods(
  $timeFrame: InsightsTimeFilter!
  $timeZone: String!
  $filters: InsightsFilters
) {
  getDeliveryMethods(
    timeFrame: $timeFrame
    timeZone: $timeZone
    filters: $filters
  ) {
    comparedDate {
      from
      to
      totalDeliveries
      deliveryMethods {
        deliveryMethod
        value
        __typename
      }
      __typename
    }
    referenceDate {
      from
      to
      totalDeliveries
      deliveryMethods {
        deliveryMethod
        value
        __typename
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDeliveryMethodsQueryVariables,
  APITypes.GetDeliveryMethodsQuery
>;
export const getServicesByCarriers = /* GraphQL */ `query GetServicesByCarriers(
  $timeFrame: InsightsTimeFilter!
  $timeZone: String!
  $filters: InsightsFilters
) {
  getServicesByCarriers(
    timeFrame: $timeFrame
    timeZone: $timeZone
    filters: $filters
  ) {
    comparedDate {
      from
      to
      totalDeliveries
      servicesByCarriers {
        carrierName
        value
        __typename
      }
      __typename
    }
    referenceDate {
      from
      to
      totalDeliveries
      servicesByCarriers {
        carrierName
        value
        __typename
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetServicesByCarriersQueryVariables,
  APITypes.GetServicesByCarriersQuery
>;
export const getServicesByStatus = /* GraphQL */ `query GetServicesByStatus(
  $timeFrame: InsightsTimeFilter!
  $timeZone: String!
  $filters: InsightsFilters
) {
  getServicesByStatus(
    timeFrame: $timeFrame
    timeZone: $timeZone
    filters: $filters
  ) {
    comparedDate {
      from
      to
      totalDeliveries
      servicesByStatus {
        status
        value
        __typename
      }
      __typename
    }
    referenceDate {
      from
      to
      totalDeliveries
      servicesByStatus {
        status
        value
        __typename
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetServicesByStatusQueryVariables,
  APITypes.GetServicesByStatusQuery
>;
export const getAverageDistance = /* GraphQL */ `query GetAverageDistance(
  $timeFrame: InsightsTimeFilter!
  $timeZone: String!
  $filters: InsightsFilters
) {
  getAverageDistance(
    timeFrame: $timeFrame
    timeZone: $timeZone
    filters: $filters
  ) {
    comparedDate {
      from
      to
      totalDeliveries
      completedDeliveries
      averageDistance
      __typename
    }
    referenceDate {
      from
      to
      totalDeliveries
      completedDeliveries
      averageDistance
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAverageDistanceQueryVariables,
  APITypes.GetAverageDistanceQuery
>;
export const getAverageRating = /* GraphQL */ `query GetAverageRating(
  $timeFrame: InsightsTimeFilter!
  $timeZone: String!
  $filters: InsightsFilters
) {
  getAverageRating(
    timeFrame: $timeFrame
    timeZone: $timeZone
    filters: $filters
  ) {
    comparedDate {
      from
      to
      totalDeliveries
      ordersWithRating
      averageRating
      __typename
    }
    referenceDate {
      from
      to
      totalDeliveries
      ordersWithRating
      averageRating
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAverageRatingQueryVariables,
  APITypes.GetAverageRatingQuery
>;
export const getOrdersOnTime = /* GraphQL */ `query GetOrdersOnTime(
  $timeFrame: InsightsTimeFilter!
  $timeZone: String!
  $filters: InsightsFilters
) {
  getOrdersOnTime(
    timeFrame: $timeFrame
    timeZone: $timeZone
    filters: $filters
  ) {
    comparedDate {
      from
      to
      totalDeliveries
      ordersOnTime
      averageTime
      __typename
    }
    referenceDate {
      from
      to
      totalDeliveries
      ordersOnTime
      averageTime
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetOrdersOnTimeQueryVariables,
  APITypes.GetOrdersOnTimeQuery
>;
export const verifyTeam = /* GraphQL */ `query VerifyTeam($seller: String!, $withParent: Boolean!) {
  verifyTeam(seller: $seller, withParent: $withParent) {
    teamName
    teamId
    teams {
      tags
      battery_usage
      team_id
      team_name
      address
      latitude
      longitude
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VerifyTeamQueryVariables,
  APITypes.VerifyTeamQuery
>;
export const getCourierTeams = /* GraphQL */ `query GetCourierTeams {
  getCourierTeams {
    message
    status
    data {
      tags
      battery_usage
      team_id
      team_name
      address
      latitude
      longitude
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCourierTeamsQueryVariables,
  APITypes.GetCourierTeamsQuery
>;
export const getCustomTemplates = /* GraphQL */ `query GetCustomTemplates {
  getCustomTemplates {
    message
    status
    data {
      fields {
        custom_field
        __typename
      }
      layout_type
      trackingImage
      userEmails
      user_id
      _id
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCustomTemplatesQueryVariables,
  APITypes.GetCustomTemplatesQuery
>;
export const searchReturns = /* GraphQL */ `query SearchReturns(
  $hostname: String!
  $filters: RMAFilters
  $pagination: RMAPagination
) {
  searchReturns(
    hostname: $hostname
    filters: $filters
    pagination: $pagination
  ) {
    items {
      _id
      sequence
      orderId
      status
      hostname
      storeConfigId
      createdAt
      pickupDate
      orderDate
      tags
      shippingMethod
      items {
        id
        itemId
        name
        image
        sellingPrice
        currencyCode
        status
        typeResolution
        quantity
        requestType
        __typename
      }
      __typename
    }
    pagination {
      total
      from
      to
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchReturnsQueryVariables,
  APITypes.SearchReturnsQuery
>;
export const rmaValidatePolicies = /* GraphQL */ `query RmaValidatePolicies(
  $orderId: String!
  $itemId: String
  $rmaSettingId: String!
  $type: RMAPoliciesType
) {
  rmaValidatePolicies(
    orderId: $orderId
    itemId: $itemId
    rmaSettingId: $rmaSettingId
    type: $type
  ) {
    orderId
    isValidPolicy
    policies {
      id
      name
      description
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RmaValidatePoliciesQueryVariables,
  APITypes.RmaValidatePoliciesQuery
>;
export const getCourierList = /* GraphQL */ `query GetCourierList(
  $query: QueryGetCourierListQueryInput
  $body: QueryGetCourierListBodyInput
) {
  getCourierList(query: $query, body: $body) {
    message
    status
    data {
      fleet_id
      device_type
      total_rating
      total_rated_tasks
      is_active
      has_gps_accuracy
      username
      name
      login_id
      transport_type
      transport_desc
      license
      email
      phone
      battery_level
      registration_status
      latitude
      is_available
      longitude
      tags
      fleet_thumb_image
      fleet_image
      status
      timezone
      fleet_type
      block_reason
      team_id
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCourierListQueryVariables,
  APITypes.GetCourierListQuery
>;
export const getCourier = /* GraphQL */ `query GetCourier(
  $query: QueryGetCourierQueryInput
  $body: QueryGetCourierBodyInput
) {
  getCourier(query: $query, body: $body) {
    message
    status
    data {
      fleet_details {
        fleet_id
        is_deleted
        dispatcher_id
        email
        access_token
        first_name
        last_name
        login_id
        tags
        username
        phone
        latitude
        longitude
        location_update_datetime
        last_updated_local_time
        fleet_image
        fleet_thumb_image
        device_type
        device_token
        voice_token
        device_os
        device_desc
        battery_level
        has_gps_accuracy
        has_network
        has_mock_loc
        store_version
        imei_number
        app_versioncode
        verification_token
        registration_status
        transport_type
        transport_desc
        license
        color
        user_id
        is_active
        is_available
        status
        total_rating
        total_rated_tasks
        noti_tone
        creation_datetime
        updation_datetime
        last_login_datetime
        timezone
        external_fleet_id
        bearing
        terms_and_conditions
        is_first_time_login
        monibyte_id
        block_reason
        gps_device_id
        fleet_type
        is_blocked_by_subscription
        fuel_level
        vehicle_calibration_id
        lang
        total_capacity
        available_capacity
        __typename
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCourierQueryVariables,
  APITypes.GetCourierQuery
>;
export const getCourierLocation = /* GraphQL */ `query GetCourierLocation(
  $query: QueryGetCourierLocationQueryInput
  $body: QueryGetCourierLocationBodyInput
) {
  getCourierLocation(query: $query, body: $body) {
    message
    status
    data {
      latitude
      longitude
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCourierLocationQueryVariables,
  APITypes.GetCourierLocationQuery
>;
export const getCourierTasks = /* GraphQL */ `query GetCourierTasks(
  $query: QueryGetCourierTasksQueryInput
  $body: QueryGetCourierTasksBodyInput
) {
  getCourierTasks(query: $query, body: $body) {
    message
    status
    data {
      fleet_id
      order_id
      user_id
      job_pickup_name
      job_latitude
      job_longitude
      job_address
      job_status
      has_pickup
      pickup_delivery_relationship
      completed_by_admin
      job_pickup_datetime
      job_type
      job_delivery_datetime
      job_pickup_latitude
      job_pickup_longitude
      job_pickup_address
      customer_id
      customer_username
      customer_phone
      customer_email
      started_datetime
      completed_datetime
      acknowledged_datetime
      arrived_datetime
      total_distance_travelled
      team_id
      fleet_rating
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCourierTasksQueryVariables,
  APITypes.GetCourierTasksQuery
>;
export const getAccountIsMarketplace = /* GraphQL */ `query GetAccountIsMarketplace($query: QueryGetAccountIsMarketplaceQueryInput!) {
  getAccountIsMarketplace(query: $query) {
    isParent
    parent
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAccountIsMarketplaceQueryVariables,
  APITypes.GetAccountIsMarketplaceQuery
>;
export const listAllAffiliates = /* GraphQL */ `query ListAllAffiliates($query: QueryListAllAffiliatesQueryInput!) {
  listAllAffiliates(query: $query) {
    id
    name
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAllAffiliatesQueryVariables,
  APITypes.ListAllAffiliatesQuery
>;
export const getWarehouses = /* GraphQL */ `query GetWarehouses($query: QueryGetWarehousesQueryInput!) {
  getWarehouses(query: $query) {
    id
    name
    warehouseDocks {
      dockId
      time
      cost
      __typename
    }
    pickupPointIds
    priority
    isActive
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetWarehousesQueryVariables,
  APITypes.GetWarehousesQuery
>;
export const getAccountCommercialConditions = /* GraphQL */ `query GetAccountCommercialConditions(
  $query: QueryGetAccountCommercialConditionsQueryInput!
) {
  getAccountCommercialConditions(query: $query) {
    Id
    Name
    IsActive
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAccountCommercialConditionsQueryVariables,
  APITypes.GetAccountCommercialConditionsQuery
>;
export const getAccountSellers = /* GraphQL */ `query GetAccountSellers($query: QueryGetAccountSellersQueryInput!) {
  getAccountSellers(query: $query) {
    UrlLogo
    SellerId
    Name
    Email
    IsActive
    IsBetterScope
    SellerType
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAccountSellersQueryVariables,
  APITypes.GetAccountSellersQuery
>;
export const getAccountCategories = /* GraphQL */ `query GetAccountCategories($query: QueryGetAccountCategoriesQueryInput!) {
  getAccountCategories(query: $query) {
    id
    name
    hasChildren
    children {
      id
      name
      hasChildren
      children {
        id
        name
        hasChildren
        Title
        MetaTagDescription
        __typename
      }
      Title
      MetaTagDescription
      __typename
    }
    Title
    MetaTagDescription
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAccountCategoriesQueryVariables,
  APITypes.GetAccountCategoriesQuery
>;
export const getPaymentMethods = /* GraphQL */ `query GetPaymentMethods($query: QueryGetPaymentMethodsQueryInput!) {
  getPaymentMethods(query: $query) {
    id
    name
    label
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPaymentMethodsQueryVariables,
  APITypes.GetPaymentMethodsQuery
>;
export const getAccountUsers = /* GraphQL */ `query GetAccountUsers($query: QueryGetAccountUsersQueryInput!) {
  getAccountUsers(query: $query) {
    items {
      id
      email
      isAdmin
      isReliable
      isBlocked
      roles
      accountNames
      name
      __typename
    }
    paging {
      page
      perPage
      total
      pages
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAccountUsersQueryVariables,
  APITypes.GetAccountUsersQuery
>;
export const getAccount = /* GraphQL */ `query GetAccount($id: ID!) {
  getAccount(id: $id) {
    groups
    id
    name
    activeAccount
    isVtexAccount
    salesChannels {
      items {
        groups
        id
        name
        type
        isActive
        paymentMethods
        shippingMethods
        shippingTypes
        commercialPolicies
        orderTags
        globalOrders
        localOrders
        pickingMethod
        allowQuickCollection
        allowOrderNotes
        allowItemNotes
        allowAutomaticPacking
        allowMultiPicking
        allowExpressFulfillment
        allowWorksheetsReAssign
        allowStartedWorksheetsReAssign
        allowPackagesReport
        allowItemTransfers
        autoAcceptIncomingTransfers
        enableWorksheetsNotes
        enableReplacementOptions
        enableSupportChat
        needsApproval
        preparationTime
        isMigratedFromFulfillment
        itemInformation
        showOrdersInfoTab
        showCustomerInfoPerOrder
        askPickingConfirmation
        forceConfirmEANs
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        accountSalesChannelsId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    storeConfig {
      items {
        groups
        id
        name
        batchInterval
        maxItemsPerBatch
        maxItemsPerWorksheet
        salesChannel
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        accountStoreConfigId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    maxMonthlyOrders
    actualOrders
    configuration {
      key
      __typename
    }
    country
    demo
    contract
    logo
    email
    contact
    pro
    plan {
      id
      name
      description
      ppo
      appo
      orders
      maxOrders
      initialDate
      validUntil
      active
      metadata
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAccountQueryVariables,
  APITypes.GetAccountQuery
>;
export const listAccounts = /* GraphQL */ `query ListAccounts(
  $id: ID
  $filter: ModelAccountFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listAccounts(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      groups
      id
      name
      activeAccount
      isVtexAccount
      salesChannels {
        nextToken
        startedAt
        __typename
      }
      storeConfig {
        nextToken
        startedAt
        __typename
      }
      maxMonthlyOrders
      actualOrders
      configuration {
        key
        __typename
      }
      country
      demo
      contract
      logo
      email
      contact
      pro
      plan {
        id
        name
        description
        ppo
        appo
        orders
        maxOrders
        initialDate
        validUntil
        active
        metadata
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAccountsQueryVariables,
  APITypes.ListAccountsQuery
>;
export const syncAccounts = /* GraphQL */ `query SyncAccounts(
  $filter: ModelAccountFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncAccounts(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      groups
      id
      name
      activeAccount
      isVtexAccount
      salesChannels {
        nextToken
        startedAt
        __typename
      }
      storeConfig {
        nextToken
        startedAt
        __typename
      }
      maxMonthlyOrders
      actualOrders
      configuration {
        key
        __typename
      }
      country
      demo
      contract
      logo
      email
      contact
      pro
      plan {
        id
        name
        description
        ppo
        appo
        orders
        maxOrders
        initialDate
        validUntil
        active
        metadata
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncAccountsQueryVariables,
  APITypes.SyncAccountsQuery
>;
export const getAutomation = /* GraphQL */ `query GetAutomation($id: ID!) {
  getAutomation(id: $id) {
    id
    name
    seller
    model
    facilities
    typeMethod
    createdAt
    actions {
      action
      field
      value
      model
      metadata
      __typename
    }
    query {
      not
      field
      value
      operator
      combinator
      rules
      __typename
    }
    isActive
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAutomationQueryVariables,
  APITypes.GetAutomationQuery
>;
export const listAutomations = /* GraphQL */ `query ListAutomations(
  $id: ID
  $filter: ModelAutomationFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listAutomations(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      seller
      model
      facilities
      typeMethod
      createdAt
      actions {
        action
        field
        value
        model
        metadata
        __typename
      }
      query {
        not
        field
        value
        operator
        combinator
        rules
        __typename
      }
      isActive
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAutomationsQueryVariables,
  APITypes.ListAutomationsQuery
>;
export const syncAutomations = /* GraphQL */ `query SyncAutomations(
  $filter: ModelAutomationFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncAutomations(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      seller
      model
      facilities
      typeMethod
      createdAt
      actions {
        action
        field
        value
        model
        metadata
        __typename
      }
      query {
        not
        field
        value
        operator
        combinator
        rules
        __typename
      }
      isActive
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncAutomationsQueryVariables,
  APITypes.SyncAutomationsQuery
>;
export const automationByTypeAndSeller = /* GraphQL */ `query AutomationByTypeAndSeller(
  $typeMethod: String!
  $seller: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelAutomationFilterInput
  $limit: Int
  $nextToken: String
) {
  automationByTypeAndSeller(
    typeMethod: $typeMethod
    seller: $seller
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      seller
      model
      facilities
      typeMethod
      createdAt
      actions {
        action
        field
        value
        model
        metadata
        __typename
      }
      query {
        not
        field
        value
        operator
        combinator
        rules
        __typename
      }
      isActive
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AutomationByTypeAndSellerQueryVariables,
  APITypes.AutomationByTypeAndSellerQuery
>;
export const getCarrier = /* GraphQL */ `query GetCarrier($id: ID!) {
  getCarrier(id: $id) {
    id
    agencyId
    name
    logo
    authorized
    active
    cancelable
    onHoldServices
    countries
    formConfiguration {
      key
      label
      type
      required
      description
      value
      min
      max
      options {
        id
        label
        value
        __typename
      }
      priority
      __typename
    }
    withQueues
    allocationTime
    type
    pricing {
      type
      value
      __typename
    }
    integration {
      dev {
        webhookEndpoint
        __typename
      }
      prod {
        webhookEndpoint
        __typename
      }
      __typename
    }
    shippingPaymentMethods
    hasDevEnvironment
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCarrierQueryVariables,
  APITypes.GetCarrierQuery
>;
export const listCarriers = /* GraphQL */ `query ListCarriers(
  $id: ID
  $filter: ModelCarrierFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCarriers(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      agencyId
      name
      logo
      authorized
      active
      cancelable
      onHoldServices
      countries
      formConfiguration {
        key
        label
        type
        required
        description
        value
        min
        max
        priority
        __typename
      }
      withQueues
      allocationTime
      type
      pricing {
        type
        value
        __typename
      }
      integration {
        __typename
      }
      shippingPaymentMethods
      hasDevEnvironment
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCarriersQueryVariables,
  APITypes.ListCarriersQuery
>;
export const syncCarriers = /* GraphQL */ `query SyncCarriers(
  $filter: ModelCarrierFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCarriers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      agencyId
      name
      logo
      authorized
      active
      cancelable
      onHoldServices
      countries
      formConfiguration {
        key
        label
        type
        required
        description
        value
        min
        max
        priority
        __typename
      }
      withQueues
      allocationTime
      type
      pricing {
        type
        value
        __typename
      }
      integration {
        __typename
      }
      shippingPaymentMethods
      hasDevEnvironment
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCarriersQueryVariables,
  APITypes.SyncCarriersQuery
>;
export const carriersByAgencyId = /* GraphQL */ `query CarriersByAgencyId(
  $agencyId: String!
  $sortDirection: ModelSortDirection
  $filter: ModelCarrierFilterInput
  $limit: Int
  $nextToken: String
) {
  carriersByAgencyId(
    agencyId: $agencyId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      agencyId
      name
      logo
      authorized
      active
      cancelable
      onHoldServices
      countries
      formConfiguration {
        key
        label
        type
        required
        description
        value
        min
        max
        priority
        __typename
      }
      withQueues
      allocationTime
      type
      pricing {
        type
        value
        __typename
      }
      integration {
        __typename
      }
      shippingPaymentMethods
      hasDevEnvironment
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CarriersByAgencyIdQueryVariables,
  APITypes.CarriersByAgencyIdQuery
>;
export const getCarriersStoreConfig = /* GraphQL */ `query GetCarriersStoreConfig($id: ID!) {
  getCarriersStoreConfig(id: $id) {
    id
    carrierId
    account
    name
    active
    config {
      key
      label
      value
      __typename
    }
    deliveryMethod {
      id
      name
      serviceType
      paymentMethod
      __typename
    }
    env
    createService
    replicateConfig
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCarriersStoreConfigQueryVariables,
  APITypes.GetCarriersStoreConfigQuery
>;
export const listCarriersStoreConfigs = /* GraphQL */ `query ListCarriersStoreConfigs(
  $id: ID
  $filter: ModelCarriersStoreConfigFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCarriersStoreConfigs(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      carrierId
      account
      name
      active
      config {
        key
        label
        value
        __typename
      }
      deliveryMethod {
        id
        name
        serviceType
        paymentMethod
        __typename
      }
      env
      createService
      replicateConfig
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCarriersStoreConfigsQueryVariables,
  APITypes.ListCarriersStoreConfigsQuery
>;
export const syncCarriersStoreConfigs = /* GraphQL */ `query SyncCarriersStoreConfigs(
  $filter: ModelCarriersStoreConfigFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCarriersStoreConfigs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      carrierId
      account
      name
      active
      config {
        key
        label
        value
        __typename
      }
      deliveryMethod {
        id
        name
        serviceType
        paymentMethod
        __typename
      }
      env
      createService
      replicateConfig
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCarriersStoreConfigsQueryVariables,
  APITypes.SyncCarriersStoreConfigsQuery
>;
export const carriersStoreConfigsByAccount = /* GraphQL */ `query CarriersStoreConfigsByAccount(
  $account: String!
  $sortDirection: ModelSortDirection
  $filter: ModelCarriersStoreConfigFilterInput
  $limit: Int
  $nextToken: String
) {
  carriersStoreConfigsByAccount(
    account: $account
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      carrierId
      account
      name
      active
      config {
        key
        label
        value
        __typename
      }
      deliveryMethod {
        id
        name
        serviceType
        paymentMethod
        __typename
      }
      env
      createService
      replicateConfig
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CarriersStoreConfigsByAccountQueryVariables,
  APITypes.CarriersStoreConfigsByAccountQuery
>;
export const getCatalogHistory = /* GraphQL */ `query GetCatalogHistory($id: ID!) {
  getCatalogHistory(id: $id) {
    id
    productId
    catalogName
    createdAt
    user
    description {
      newItem
      oldItem
      __typename
    }
    messageChange {
      EN
      ES
      __typename
    }
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCatalogHistoryQueryVariables,
  APITypes.GetCatalogHistoryQuery
>;
export const listCatalogHistories = /* GraphQL */ `query ListCatalogHistories(
  $filter: ModelCatalogHistoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCatalogHistories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      productId
      catalogName
      createdAt
      user
      description {
        newItem
        oldItem
        __typename
      }
      messageChange {
        EN
        ES
        __typename
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCatalogHistoriesQueryVariables,
  APITypes.ListCatalogHistoriesQuery
>;
export const syncCatalogHistories = /* GraphQL */ `query SyncCatalogHistories(
  $filter: ModelCatalogHistoryFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCatalogHistories(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      productId
      catalogName
      createdAt
      user
      description {
        newItem
        oldItem
        __typename
      }
      messageChange {
        EN
        ES
        __typename
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCatalogHistoriesQueryVariables,
  APITypes.SyncCatalogHistoriesQuery
>;
export const catalogHistoriesByProductIdAndCatalogName = /* GraphQL */ `query CatalogHistoriesByProductIdAndCatalogName(
  $productId: String!
  $catalogName: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCatalogHistoryFilterInput
  $limit: Int
  $nextToken: String
) {
  catalogHistoriesByProductIdAndCatalogName(
    productId: $productId
    catalogName: $catalogName
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      productId
      catalogName
      createdAt
      user
      description {
        newItem
        oldItem
        __typename
      }
      messageChange {
        EN
        ES
        __typename
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CatalogHistoriesByProductIdAndCatalogNameQueryVariables,
  APITypes.CatalogHistoriesByProductIdAndCatalogNameQuery
>;
export const getCustomer = /* GraphQL */ `query GetCustomer($id: ID!) {
  getCustomer(id: $id) {
    groups
    id
    profileId
    publicName
    firstName
    lastName
    document
    documentType
    anonymized
    phone
    email
    hashedEmail
    addresses {
      items {
        groups
        id
        contactName
        contactPhone
        customerId
        publicContactName
        city
        state
        country
        neighborhood
        address
        addressComplement
        reference
        number
        zipCode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    orders {
      items {
        groups
        id
        affiliateId
        conversationID
        notificationsID
        customerId
        addressId
        deliveryDate
        deliveryChannel
        finishedDate
        categoriesIds
        hostname
        parentAccount
        totalItems
        totalUnits
        totalCompletedItems
        totalCompletedUnits
        isInvoiced
        isOrderSplit
        metaData
        observations
        orderId
        prepareDate
        collectedDate
        salesSourceId
        salesChannel
        commercialPolicy
        sequence
        shippingEstimatedDateMin
        status
        lastStatus
        lastStatusChange
        storeConfigId
        transactionDate
        pickingStartedAt
        pickedAt
        packingStartedAt
        packedAt
        tags
        hasPendingRmas
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCustomerQueryVariables,
  APITypes.GetCustomerQuery
>;
export const listCustomers = /* GraphQL */ `query ListCustomers(
  $id: ID
  $filter: ModelCustomerFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCustomers(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      groups
      id
      profileId
      publicName
      firstName
      lastName
      document
      documentType
      anonymized
      phone
      email
      hashedEmail
      addresses {
        nextToken
        startedAt
        __typename
      }
      orders {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCustomersQueryVariables,
  APITypes.ListCustomersQuery
>;
export const syncCustomers = /* GraphQL */ `query SyncCustomers(
  $filter: ModelCustomerFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCustomers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      groups
      id
      profileId
      publicName
      firstName
      lastName
      document
      documentType
      anonymized
      phone
      email
      hashedEmail
      addresses {
        nextToken
        startedAt
        __typename
      }
      orders {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCustomersQueryVariables,
  APITypes.SyncCustomersQuery
>;
export const getAddress = /* GraphQL */ `query GetAddress($id: ID!) {
  getAddress(id: $id) {
    groups
    id
    contactName
    contactPhone
    customer {
      groups
      id
      profileId
      publicName
      firstName
      lastName
      document
      documentType
      anonymized
      phone
      email
      hashedEmail
      addresses {
        nextToken
        startedAt
        __typename
      }
      orders {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    customerId
    publicContactName
    city
    state
    country
    neighborhood
    address
    addressComplement
    reference
    number
    zipCode
    location {
      lat
      lng
      alt
      __typename
    }
    orders {
      items {
        groups
        id
        affiliateId
        conversationID
        notificationsID
        customerId
        addressId
        deliveryDate
        deliveryChannel
        finishedDate
        categoriesIds
        hostname
        parentAccount
        totalItems
        totalUnits
        totalCompletedItems
        totalCompletedUnits
        isInvoiced
        isOrderSplit
        metaData
        observations
        orderId
        prepareDate
        collectedDate
        salesSourceId
        salesChannel
        commercialPolicy
        sequence
        shippingEstimatedDateMin
        status
        lastStatus
        lastStatusChange
        storeConfigId
        transactionDate
        pickingStartedAt
        pickedAt
        packingStartedAt
        packedAt
        tags
        hasPendingRmas
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAddressQueryVariables,
  APITypes.GetAddressQuery
>;
export const listAddresses = /* GraphQL */ `query ListAddresses(
  $id: ID
  $filter: ModelAddressFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listAddresses(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      groups
      id
      contactName
      contactPhone
      customer {
        groups
        id
        profileId
        publicName
        firstName
        lastName
        document
        documentType
        anonymized
        phone
        email
        hashedEmail
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      customerId
      publicContactName
      city
      state
      country
      neighborhood
      address
      addressComplement
      reference
      number
      zipCode
      location {
        lat
        lng
        alt
        __typename
      }
      orders {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAddressesQueryVariables,
  APITypes.ListAddressesQuery
>;
export const syncAddresses = /* GraphQL */ `query SyncAddresses(
  $filter: ModelAddressFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncAddresses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      groups
      id
      contactName
      contactPhone
      customer {
        groups
        id
        profileId
        publicName
        firstName
        lastName
        document
        documentType
        anonymized
        phone
        email
        hashedEmail
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      customerId
      publicContactName
      city
      state
      country
      neighborhood
      address
      addressComplement
      reference
      number
      zipCode
      location {
        lat
        lng
        alt
        __typename
      }
      orders {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncAddressesQueryVariables,
  APITypes.SyncAddressesQuery
>;
export const addressesByCustomerId = /* GraphQL */ `query AddressesByCustomerId(
  $customerId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  addressesByCustomerId(
    customerId: $customerId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      groups
      id
      contactName
      contactPhone
      customer {
        groups
        id
        profileId
        publicName
        firstName
        lastName
        document
        documentType
        anonymized
        phone
        email
        hashedEmail
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      customerId
      publicContactName
      city
      state
      country
      neighborhood
      address
      addressComplement
      reference
      number
      zipCode
      location {
        lat
        lng
        alt
        __typename
      }
      orders {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AddressesByCustomerIdQueryVariables,
  APITypes.AddressesByCustomerIdQuery
>;
export const getHistoricalOrder = /* GraphQL */ `query GetHistoricalOrder($id: ID!) {
  getHistoricalOrder(id: $id) {
    id
    orderId
    lastStatus
    orderStatus
    source
    user
    description
    metadata
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetHistoricalOrderQueryVariables,
  APITypes.GetHistoricalOrderQuery
>;
export const listHistoricalOrders = /* GraphQL */ `query ListHistoricalOrders(
  $id: ID
  $filter: ModelHistoricalOrderFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listHistoricalOrders(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      orderId
      lastStatus
      orderStatus
      source
      user
      description
      metadata
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListHistoricalOrdersQueryVariables,
  APITypes.ListHistoricalOrdersQuery
>;
export const syncHistoricalOrders = /* GraphQL */ `query SyncHistoricalOrders(
  $filter: ModelHistoricalOrderFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncHistoricalOrders(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      orderId
      lastStatus
      orderStatus
      source
      user
      description
      metadata
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncHistoricalOrdersQueryVariables,
  APITypes.SyncHistoricalOrdersQuery
>;
export const historicalOrdersByOrderIdAndCreatedAt = /* GraphQL */ `query HistoricalOrdersByOrderIdAndCreatedAt(
  $orderId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelHistoricalOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  historicalOrdersByOrderIdAndCreatedAt(
    orderId: $orderId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      orderId
      lastStatus
      orderStatus
      source
      user
      description
      metadata
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.HistoricalOrdersByOrderIdAndCreatedAtQueryVariables,
  APITypes.HistoricalOrdersByOrderIdAndCreatedAtQuery
>;
export const getHistoricalWorksheet = /* GraphQL */ `query GetHistoricalWorksheet($id: ID!) {
  getHistoricalWorksheet(id: $id) {
    id
    worksheetId
    lastStatus
    worksheetStatus
    source
    user
    description
    metadata
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetHistoricalWorksheetQueryVariables,
  APITypes.GetHistoricalWorksheetQuery
>;
export const listHistoricalWorksheets = /* GraphQL */ `query ListHistoricalWorksheets(
  $id: ID
  $filter: ModelHistoricalWorksheetFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listHistoricalWorksheets(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      worksheetId
      lastStatus
      worksheetStatus
      source
      user
      description
      metadata
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListHistoricalWorksheetsQueryVariables,
  APITypes.ListHistoricalWorksheetsQuery
>;
export const syncHistoricalWorksheets = /* GraphQL */ `query SyncHistoricalWorksheets(
  $filter: ModelHistoricalWorksheetFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncHistoricalWorksheets(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      worksheetId
      lastStatus
      worksheetStatus
      source
      user
      description
      metadata
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncHistoricalWorksheetsQueryVariables,
  APITypes.SyncHistoricalWorksheetsQuery
>;
export const historicalWorksheetsByWorksheetIdAndCreatedAt = /* GraphQL */ `query HistoricalWorksheetsByWorksheetIdAndCreatedAt(
  $worksheetId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelHistoricalWorksheetFilterInput
  $limit: Int
  $nextToken: String
) {
  historicalWorksheetsByWorksheetIdAndCreatedAt(
    worksheetId: $worksheetId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      worksheetId
      lastStatus
      worksheetStatus
      source
      user
      description
      metadata
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.HistoricalWorksheetsByWorksheetIdAndCreatedAtQueryVariables,
  APITypes.HistoricalWorksheetsByWorksheetIdAndCreatedAtQuery
>;
export const getItemTransfer = /* GraphQL */ `query GetItemTransfer($id: ID!) {
  getItemTransfer(id: $id) {
    id
    status
    sourceHostname
    destinationHostname
    sourceFulfillmentId
    destinationFulfillmentId
    sourceFacility
    destinationFacility
    orderId
    item {
      itemId
      quantity
      itemName
      image
      isWeighable
      unitMultiplier
      unitOfMeasurement
      __typename
    }
    sourceWorksheetId
    destinationWorksheetId
    userApproval {
      userId
      date
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetItemTransferQueryVariables,
  APITypes.GetItemTransferQuery
>;
export const listItemTransfers = /* GraphQL */ `query ListItemTransfers(
  $id: ID
  $filter: ModelItemTransferFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listItemTransfers(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      status
      sourceHostname
      destinationHostname
      sourceFulfillmentId
      destinationFulfillmentId
      sourceFacility
      destinationFacility
      orderId
      item {
        itemId
        quantity
        itemName
        image
        isWeighable
        unitMultiplier
        unitOfMeasurement
        __typename
      }
      sourceWorksheetId
      destinationWorksheetId
      userApproval {
        userId
        date
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListItemTransfersQueryVariables,
  APITypes.ListItemTransfersQuery
>;
export const syncItemTransfers = /* GraphQL */ `query SyncItemTransfers(
  $filter: ModelItemTransferFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncItemTransfers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      status
      sourceHostname
      destinationHostname
      sourceFulfillmentId
      destinationFulfillmentId
      sourceFacility
      destinationFacility
      orderId
      item {
        itemId
        quantity
        itemName
        image
        isWeighable
        unitMultiplier
        unitOfMeasurement
        __typename
      }
      sourceWorksheetId
      destinationWorksheetId
      userApproval {
        userId
        date
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncItemTransfersQueryVariables,
  APITypes.SyncItemTransfersQuery
>;
export const transfersBySourceFacility = /* GraphQL */ `query TransfersBySourceFacility(
  $sourceFacility: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelItemTransferFilterInput
  $limit: Int
  $nextToken: String
) {
  transfersBySourceFacility(
    sourceFacility: $sourceFacility
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      status
      sourceHostname
      destinationHostname
      sourceFulfillmentId
      destinationFulfillmentId
      sourceFacility
      destinationFacility
      orderId
      item {
        itemId
        quantity
        itemName
        image
        isWeighable
        unitMultiplier
        unitOfMeasurement
        __typename
      }
      sourceWorksheetId
      destinationWorksheetId
      userApproval {
        userId
        date
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TransfersBySourceFacilityQueryVariables,
  APITypes.TransfersBySourceFacilityQuery
>;
export const transfersByDestinationFacility = /* GraphQL */ `query TransfersByDestinationFacility(
  $destinationFacility: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelItemTransferFilterInput
  $limit: Int
  $nextToken: String
) {
  transfersByDestinationFacility(
    destinationFacility: $destinationFacility
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      status
      sourceHostname
      destinationHostname
      sourceFulfillmentId
      destinationFulfillmentId
      sourceFacility
      destinationFacility
      orderId
      item {
        itemId
        quantity
        itemName
        image
        isWeighable
        unitMultiplier
        unitOfMeasurement
        __typename
      }
      sourceWorksheetId
      destinationWorksheetId
      userApproval {
        userId
        date
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TransfersByDestinationFacilityQueryVariables,
  APITypes.TransfersByDestinationFacilityQuery
>;
export const transfersByOrderId = /* GraphQL */ `query TransfersByOrderId(
  $orderId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelItemTransferFilterInput
  $limit: Int
  $nextToken: String
) {
  transfersByOrderId(
    orderId: $orderId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      status
      sourceHostname
      destinationHostname
      sourceFulfillmentId
      destinationFulfillmentId
      sourceFacility
      destinationFacility
      orderId
      item {
        itemId
        quantity
        itemName
        image
        isWeighable
        unitMultiplier
        unitOfMeasurement
        __typename
      }
      sourceWorksheetId
      destinationWorksheetId
      userApproval {
        userId
        date
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TransfersByOrderIdQueryVariables,
  APITypes.TransfersByOrderIdQuery
>;
export const transfersbySourceWorksheet = /* GraphQL */ `query TransfersbySourceWorksheet(
  $sourceWorksheetId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelItemTransferFilterInput
  $limit: Int
  $nextToken: String
) {
  transfersbySourceWorksheet(
    sourceWorksheetId: $sourceWorksheetId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      status
      sourceHostname
      destinationHostname
      sourceFulfillmentId
      destinationFulfillmentId
      sourceFacility
      destinationFacility
      orderId
      item {
        itemId
        quantity
        itemName
        image
        isWeighable
        unitMultiplier
        unitOfMeasurement
        __typename
      }
      sourceWorksheetId
      destinationWorksheetId
      userApproval {
        userId
        date
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TransfersbySourceWorksheetQueryVariables,
  APITypes.TransfersbySourceWorksheetQuery
>;
export const transfersbyDestinationWorksheet = /* GraphQL */ `query TransfersbyDestinationWorksheet(
  $destinationWorksheetId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelItemTransferFilterInput
  $limit: Int
  $nextToken: String
) {
  transfersbyDestinationWorksheet(
    destinationWorksheetId: $destinationWorksheetId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      status
      sourceHostname
      destinationHostname
      sourceFulfillmentId
      destinationFulfillmentId
      sourceFacility
      destinationFacility
      orderId
      item {
        itemId
        quantity
        itemName
        image
        isWeighable
        unitMultiplier
        unitOfMeasurement
        __typename
      }
      sourceWorksheetId
      destinationWorksheetId
      userApproval {
        userId
        date
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TransfersbyDestinationWorksheetQueryVariables,
  APITypes.TransfersbyDestinationWorksheetQuery
>;
export const getItemV2 = /* GraphQL */ `query GetItemV2($id: ID!) {
  getItemV2(id: $id) {
    pickers
    groups
    id
    images
    itemId
    productId
    orderId
    fulfillment {
      items {
        groups
        id
        itemId
        orderId
        worksheetId
        assignedAt
        pickingStartedAt
        pickedAt
        packingStartedAt
        packedAt
        hostname
        itemLocation
        quantity
        originalQuantity
        originalUnitMultiplier
        addedOnFulfillment
        isReplacement
        isTransfer
        priority
        pickerId
        sorted
        isCompleted
        isCancelled
        picker_facility
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        itemV2FulfillmentId
        worksheetFulfillmentId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    eans
    skus
    refs
    isWeighable
    currencyCode
    name
    unitOfMeasure
    quantity
    completedQuantity
    unitMultiplier
    listPrice
    sellingPrice
    brand {
      id
      name
      children {
        id
        name
        __typename
      }
      __typename
    }
    categories {
      id
      name
      children {
        id
        name
        __typename
      }
      __typename
    }
    notes {
      type
      value
      createdAt
      __typename
    }
    temperature
    dimensions {
      cubicweight
      height
      length
      weight
      width
      __typename
    }
    status
    pickingOptions {
      onNotFound
      alternateOptions
      __typename
    }
    invoices {
      id
      quantity
      __typename
    }
    transfers {
      rejectedWorksheetId
      transferredWorksheetId
      quantity
      status
      __typename
    }
    returns {
      id
      stockedQuantity
      quantity
      __typename
    }
    weighableProduct
    addedOnFulfillment
    account
    warehouse
    metaData
    location {
      location
      hostname
      warehouse
      __typename
    }
    facility {
      facilityId
      quantity
      isAssigned
      __typename
    }
    inventoryData {
      warehouseId
      warehouseName
      quantity
      __typename
    }
    type
    rmaId
    rmaItemId
    clusterId
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetItemV2QueryVariables, APITypes.GetItemV2Query>;
export const listItemV2s = /* GraphQL */ `query ListItemV2s(
  $id: ID
  $filter: ModelItemV2FilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listItemV2s(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      pickers
      groups
      id
      images
      itemId
      productId
      orderId
      fulfillment {
        nextToken
        startedAt
        __typename
      }
      eans
      skus
      refs
      isWeighable
      currencyCode
      name
      unitOfMeasure
      quantity
      completedQuantity
      unitMultiplier
      listPrice
      sellingPrice
      brand {
        id
        name
        __typename
      }
      categories {
        id
        name
        __typename
      }
      notes {
        type
        value
        createdAt
        __typename
      }
      temperature
      dimensions {
        cubicweight
        height
        length
        weight
        width
        __typename
      }
      status
      pickingOptions {
        onNotFound
        alternateOptions
        __typename
      }
      invoices {
        id
        quantity
        __typename
      }
      transfers {
        rejectedWorksheetId
        transferredWorksheetId
        quantity
        status
        __typename
      }
      returns {
        id
        stockedQuantity
        quantity
        __typename
      }
      weighableProduct
      addedOnFulfillment
      account
      warehouse
      metaData
      location {
        location
        hostname
        warehouse
        __typename
      }
      facility {
        facilityId
        quantity
        isAssigned
        __typename
      }
      inventoryData {
        warehouseId
        warehouseName
        quantity
        __typename
      }
      type
      rmaId
      rmaItemId
      clusterId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListItemV2sQueryVariables,
  APITypes.ListItemV2sQuery
>;
export const syncItemV2s = /* GraphQL */ `query SyncItemV2s(
  $filter: ModelItemV2FilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncItemV2s(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      pickers
      groups
      id
      images
      itemId
      productId
      orderId
      fulfillment {
        nextToken
        startedAt
        __typename
      }
      eans
      skus
      refs
      isWeighable
      currencyCode
      name
      unitOfMeasure
      quantity
      completedQuantity
      unitMultiplier
      listPrice
      sellingPrice
      brand {
        id
        name
        __typename
      }
      categories {
        id
        name
        __typename
      }
      notes {
        type
        value
        createdAt
        __typename
      }
      temperature
      dimensions {
        cubicweight
        height
        length
        weight
        width
        __typename
      }
      status
      pickingOptions {
        onNotFound
        alternateOptions
        __typename
      }
      invoices {
        id
        quantity
        __typename
      }
      transfers {
        rejectedWorksheetId
        transferredWorksheetId
        quantity
        status
        __typename
      }
      returns {
        id
        stockedQuantity
        quantity
        __typename
      }
      weighableProduct
      addedOnFulfillment
      account
      warehouse
      metaData
      location {
        location
        hostname
        warehouse
        __typename
      }
      facility {
        facilityId
        quantity
        isAssigned
        __typename
      }
      inventoryData {
        warehouseId
        warehouseName
        quantity
        __typename
      }
      type
      rmaId
      rmaItemId
      clusterId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncItemV2sQueryVariables,
  APITypes.SyncItemV2sQuery
>;
export const itemsByOrder = /* GraphQL */ `query ItemsByOrder(
  $orderId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelItemV2FilterInput
  $limit: Int
  $nextToken: String
) {
  itemsByOrder(
    orderId: $orderId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      pickers
      groups
      id
      images
      itemId
      productId
      orderId
      fulfillment {
        nextToken
        startedAt
        __typename
      }
      eans
      skus
      refs
      isWeighable
      currencyCode
      name
      unitOfMeasure
      quantity
      completedQuantity
      unitMultiplier
      listPrice
      sellingPrice
      brand {
        id
        name
        __typename
      }
      categories {
        id
        name
        __typename
      }
      notes {
        type
        value
        createdAt
        __typename
      }
      temperature
      dimensions {
        cubicweight
        height
        length
        weight
        width
        __typename
      }
      status
      pickingOptions {
        onNotFound
        alternateOptions
        __typename
      }
      invoices {
        id
        quantity
        __typename
      }
      transfers {
        rejectedWorksheetId
        transferredWorksheetId
        quantity
        status
        __typename
      }
      returns {
        id
        stockedQuantity
        quantity
        __typename
      }
      weighableProduct
      addedOnFulfillment
      account
      warehouse
      metaData
      location {
        location
        hostname
        warehouse
        __typename
      }
      facility {
        facilityId
        quantity
        isAssigned
        __typename
      }
      inventoryData {
        warehouseId
        warehouseName
        quantity
        __typename
      }
      type
      rmaId
      rmaItemId
      clusterId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ItemsByOrderQueryVariables,
  APITypes.ItemsByOrderQuery
>;
export const getFulfillmentV2 = /* GraphQL */ `query GetFulfillmentV2($id: ID!) {
  getFulfillmentV2(id: $id) {
    groups
    id
    item {
      pickers
      groups
      id
      images
      itemId
      productId
      orderId
      fulfillment {
        nextToken
        startedAt
        __typename
      }
      eans
      skus
      refs
      isWeighable
      currencyCode
      name
      unitOfMeasure
      quantity
      completedQuantity
      unitMultiplier
      listPrice
      sellingPrice
      brand {
        id
        name
        __typename
      }
      categories {
        id
        name
        __typename
      }
      notes {
        type
        value
        createdAt
        __typename
      }
      temperature
      dimensions {
        cubicweight
        height
        length
        weight
        width
        __typename
      }
      status
      pickingOptions {
        onNotFound
        alternateOptions
        __typename
      }
      invoices {
        id
        quantity
        __typename
      }
      transfers {
        rejectedWorksheetId
        transferredWorksheetId
        quantity
        status
        __typename
      }
      returns {
        id
        stockedQuantity
        quantity
        __typename
      }
      weighableProduct
      addedOnFulfillment
      account
      warehouse
      metaData
      location {
        location
        hostname
        warehouse
        __typename
      }
      facility {
        facilityId
        quantity
        isAssigned
        __typename
      }
      inventoryData {
        warehouseId
        warehouseName
        quantity
        __typename
      }
      type
      rmaId
      rmaItemId
      clusterId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    itemId
    orderId
    worksheetId
    assignedAt
    pickingStartedAt
    pickedAt
    packingStartedAt
    packedAt
    facility {
      id
      name
      __typename
    }
    hostname
    itemLocation
    quantity
    originalQuantity
    originalUnitMultiplier
    addedOnFulfillment
    isReplacement
    isTransfer
    priority
    pickerId
    picking {
      added {
        quantity
        unitMultiplier
        unitOfMeasure
        listPrice
        sellingPrice
        __typename
      }
      picked {
        quantity
        unitMultiplier
        unitOfMeasure
        listPrice
        sellingPrice
        __typename
      }
      replaced {
        quantity
        __typename
      }
      rejected {
        quantity
        unitMultiplier
        unitOfMeasure
        listPrice
        sellingPrice
        __typename
      }
      transferred {
        quantity
        transferredTo
        status
        audit
        __typename
      }
      __typename
    }
    packing {
      packageID
      unitMultiplier
      listPrice
      sellingPrice
      packedQuantity
      packageLocation
      __typename
    }
    sorted
    isCompleted
    isCancelled
    picker_facility
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    itemV2FulfillmentId
    worksheetFulfillmentId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFulfillmentV2QueryVariables,
  APITypes.GetFulfillmentV2Query
>;
export const listFulfillmentV2s = /* GraphQL */ `query ListFulfillmentV2s(
  $id: ID
  $filter: ModelFulfillmentV2FilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listFulfillmentV2s(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      groups
      id
      item {
        pickers
        groups
        id
        images
        itemId
        productId
        orderId
        eans
        skus
        refs
        isWeighable
        currencyCode
        name
        unitOfMeasure
        quantity
        completedQuantity
        unitMultiplier
        listPrice
        sellingPrice
        temperature
        status
        weighableProduct
        addedOnFulfillment
        account
        warehouse
        metaData
        type
        rmaId
        rmaItemId
        clusterId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      itemId
      orderId
      worksheetId
      assignedAt
      pickingStartedAt
      pickedAt
      packingStartedAt
      packedAt
      facility {
        id
        name
        __typename
      }
      hostname
      itemLocation
      quantity
      originalQuantity
      originalUnitMultiplier
      addedOnFulfillment
      isReplacement
      isTransfer
      priority
      pickerId
      picking {
        __typename
      }
      packing {
        packageID
        unitMultiplier
        listPrice
        sellingPrice
        packedQuantity
        packageLocation
        __typename
      }
      sorted
      isCompleted
      isCancelled
      picker_facility
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      itemV2FulfillmentId
      worksheetFulfillmentId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFulfillmentV2sQueryVariables,
  APITypes.ListFulfillmentV2sQuery
>;
export const syncFulfillmentV2s = /* GraphQL */ `query SyncFulfillmentV2s(
  $filter: ModelFulfillmentV2FilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncFulfillmentV2s(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      groups
      id
      item {
        pickers
        groups
        id
        images
        itemId
        productId
        orderId
        eans
        skus
        refs
        isWeighable
        currencyCode
        name
        unitOfMeasure
        quantity
        completedQuantity
        unitMultiplier
        listPrice
        sellingPrice
        temperature
        status
        weighableProduct
        addedOnFulfillment
        account
        warehouse
        metaData
        type
        rmaId
        rmaItemId
        clusterId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      itemId
      orderId
      worksheetId
      assignedAt
      pickingStartedAt
      pickedAt
      packingStartedAt
      packedAt
      facility {
        id
        name
        __typename
      }
      hostname
      itemLocation
      quantity
      originalQuantity
      originalUnitMultiplier
      addedOnFulfillment
      isReplacement
      isTransfer
      priority
      pickerId
      picking {
        __typename
      }
      packing {
        packageID
        unitMultiplier
        listPrice
        sellingPrice
        packedQuantity
        packageLocation
        __typename
      }
      sorted
      isCompleted
      isCancelled
      picker_facility
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      itemV2FulfillmentId
      worksheetFulfillmentId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncFulfillmentV2sQueryVariables,
  APITypes.SyncFulfillmentV2sQuery
>;
export const fulfillmentsByOrder = /* GraphQL */ `query FulfillmentsByOrder(
  $orderId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFulfillmentV2FilterInput
  $limit: Int
  $nextToken: String
) {
  fulfillmentsByOrder(
    orderId: $orderId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      groups
      id
      item {
        pickers
        groups
        id
        images
        itemId
        productId
        orderId
        eans
        skus
        refs
        isWeighable
        currencyCode
        name
        unitOfMeasure
        quantity
        completedQuantity
        unitMultiplier
        listPrice
        sellingPrice
        temperature
        status
        weighableProduct
        addedOnFulfillment
        account
        warehouse
        metaData
        type
        rmaId
        rmaItemId
        clusterId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      itemId
      orderId
      worksheetId
      assignedAt
      pickingStartedAt
      pickedAt
      packingStartedAt
      packedAt
      facility {
        id
        name
        __typename
      }
      hostname
      itemLocation
      quantity
      originalQuantity
      originalUnitMultiplier
      addedOnFulfillment
      isReplacement
      isTransfer
      priority
      pickerId
      picking {
        __typename
      }
      packing {
        packageID
        unitMultiplier
        listPrice
        sellingPrice
        packedQuantity
        packageLocation
        __typename
      }
      sorted
      isCompleted
      isCancelled
      picker_facility
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      itemV2FulfillmentId
      worksheetFulfillmentId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FulfillmentsByOrderQueryVariables,
  APITypes.FulfillmentsByOrderQuery
>;
export const fulfillmentsByPickerFacility = /* GraphQL */ `query FulfillmentsByPickerFacility(
  $picker_facility: String!
  $sortDirection: ModelSortDirection
  $filter: ModelFulfillmentV2FilterInput
  $limit: Int
  $nextToken: String
) {
  fulfillmentsByPickerFacility(
    picker_facility: $picker_facility
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      groups
      id
      item {
        pickers
        groups
        id
        images
        itemId
        productId
        orderId
        eans
        skus
        refs
        isWeighable
        currencyCode
        name
        unitOfMeasure
        quantity
        completedQuantity
        unitMultiplier
        listPrice
        sellingPrice
        temperature
        status
        weighableProduct
        addedOnFulfillment
        account
        warehouse
        metaData
        type
        rmaId
        rmaItemId
        clusterId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      itemId
      orderId
      worksheetId
      assignedAt
      pickingStartedAt
      pickedAt
      packingStartedAt
      packedAt
      facility {
        id
        name
        __typename
      }
      hostname
      itemLocation
      quantity
      originalQuantity
      originalUnitMultiplier
      addedOnFulfillment
      isReplacement
      isTransfer
      priority
      pickerId
      picking {
        __typename
      }
      packing {
        packageID
        unitMultiplier
        listPrice
        sellingPrice
        packedQuantity
        packageLocation
        __typename
      }
      sorted
      isCompleted
      isCancelled
      picker_facility
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      itemV2FulfillmentId
      worksheetFulfillmentId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FulfillmentsByPickerFacilityQueryVariables,
  APITypes.FulfillmentsByPickerFacilityQuery
>;
export const getOMSChanges = /* GraphQL */ `query GetOMSChanges($id: ID!) {
  getOMSChanges(id: $id) {
    id
    fulfillmentId
    itemId
    orderId
    sentToOMS
    payload
    response
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetOMSChangesQueryVariables,
  APITypes.GetOMSChangesQuery
>;
export const listOMSChanges = /* GraphQL */ `query ListOMSChanges(
  $id: ID
  $filter: ModelOMSChangesFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listOMSChanges(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      fulfillmentId
      itemId
      orderId
      sentToOMS
      payload
      response
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOMSChangesQueryVariables,
  APITypes.ListOMSChangesQuery
>;
export const syncOMSChanges = /* GraphQL */ `query SyncOMSChanges(
  $filter: ModelOMSChangesFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncOMSChanges(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      fulfillmentId
      itemId
      orderId
      sentToOMS
      payload
      response
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncOMSChangesQueryVariables,
  APITypes.SyncOMSChangesQuery
>;
export const oMSChangesByItemId = /* GraphQL */ `query OMSChangesByItemId(
  $itemId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOMSChangesFilterInput
  $limit: Int
  $nextToken: String
) {
  oMSChangesByItemId(
    itemId: $itemId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      fulfillmentId
      itemId
      orderId
      sentToOMS
      payload
      response
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OMSChangesByItemIdQueryVariables,
  APITypes.OMSChangesByItemIdQuery
>;
export const oMSChangesByOrderId = /* GraphQL */ `query OMSChangesByOrderId(
  $orderId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOMSChangesFilterInput
  $limit: Int
  $nextToken: String
) {
  oMSChangesByOrderId(
    orderId: $orderId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      fulfillmentId
      itemId
      orderId
      sentToOMS
      payload
      response
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OMSChangesByOrderIdQueryVariables,
  APITypes.OMSChangesByOrderIdQuery
>;
export const getOrder = /* GraphQL */ `query GetOrder($orderId: ID!) {
  getOrder(orderId: $orderId) {
    groups
    id
    billing {
      id
      discount
      tax
      freighAmount
      total
      __typename
    }
    affiliateId
    conversationID
    notificationsID
    customer {
      groups
      id
      profileId
      publicName
      firstName
      lastName
      document
      documentType
      anonymized
      phone
      email
      hashedEmail
      addresses {
        nextToken
        startedAt
        __typename
      }
      orders {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    customerId
    address {
      groups
      id
      contactName
      contactPhone
      customer {
        groups
        id
        profileId
        publicName
        firstName
        lastName
        document
        documentType
        anonymized
        phone
        email
        hashedEmail
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      customerId
      publicContactName
      city
      state
      country
      neighborhood
      address
      addressComplement
      reference
      number
      zipCode
      location {
        lat
        lng
        alt
        __typename
      }
      orders {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    addressId
    deliveryDate
    deliveryChannel
    finishedDate
    categoriesIds
    hostname
    parentAccount
    invoices {
      invoiceKey
      invoiceSubtotal
      invoiceTaxes
      invoiceTotal
      invoiceUrl
      invoiceCreationDate
      invoiceReceiptDate
      invoiceNumber
      packages
      __typename
    }
    totalItems
    totalUnits
    totalCompletedItems
    totalCompletedUnits
    items {
      items {
        pickers
        groups
        id
        images
        itemId
        productId
        orderId
        eans
        skus
        refs
        isWeighable
        currencyCode
        name
        unitOfMeasure
        quantity
        completedQuantity
        unitMultiplier
        listPrice
        sellingPrice
        temperature
        status
        weighableProduct
        addedOnFulfillment
        account
        warehouse
        metaData
        type
        rmaId
        rmaItemId
        clusterId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    isInvoiced
    isOrderSplit
    metaData
    marketingData {
      id
      utmSource
      utmPartner
      utmMedium
      utmCampaign
      utmipage
      utmiPart
      utmiCampaign
      marketingTags
      coupon
      __typename
    }
    notes {
      type
      value
      createdAt
      __typename
    }
    observations
    orderAssignment {
      hostname
      worksheetId
      status
      initDate
      finishedDate
      __typename
    }
    orderId
    payment {
      paymentId
      paymentName
      paymentHolder
      date
      baseTotal
      discount
      tax
      grandTotal
      currency {
        name
        code
        symbol
        decimalDigits
        decimalSeparator
        groupSeparator
        groupSize
        __typename
      }
      method
      transactionId
      transactionRef
      authorization
      lastDigits
      firstDigits
      installments
      cardNumber
      plcConversionRate
      priceListCurrency {
        name
        code
        symbol
        decimalDigits
        decimalSeparator
        groupSeparator
        groupSize
        __typename
      }
      __typename
    }
    prepareDate
    collectedDate
    salesSourceId
    salesChannel
    commercialPolicy
    sequence
    shipping {
      shippingInfo {
        itemId
        shippingType
        __typename
      }
      orderUniqueAddress
      tracking {
        id
        trackingKey
        trackingUrl
        carrier
        packages
        delivered
        createDate
        deliveredDate
        __typename
      }
      __typename
    }
    shippingEstimatedDateMin
    status
    lastStatus
    lastStatusChange
    storeConfigId
    transactionDate
    pickingStartedAt
    pickedAt
    packingStartedAt
    packedAt
    packages {
      items {
        groups
        id
        orderId
        envelope
        courier
        type
        name
        description
        status
        storeConfigId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    historicalOrder {
      items {
        id
        orderId
        lastStatus
        orderStatus
        source
        user
        description
        metadata
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    tags
    appliedAutomations {
      automationId
      action
      value
      lastInvocation
      status
      requestId
      metadata
      __typename
    }
    totals {
      id
      name
      value
      alternativeTotals {
        id
        name
        value
        __typename
      }
      __typename
    }
    hasPendingRmas
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetOrderQueryVariables, APITypes.GetOrderQuery>;
export const listOrders = /* GraphQL */ `query ListOrders(
  $orderId: ID
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listOrders(
    orderId: $orderId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      groups
      id
      billing {
        id
        discount
        tax
        freighAmount
        total
        __typename
      }
      affiliateId
      conversationID
      notificationsID
      customer {
        groups
        id
        profileId
        publicName
        firstName
        lastName
        document
        documentType
        anonymized
        phone
        email
        hashedEmail
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      customerId
      address {
        groups
        id
        contactName
        contactPhone
        customerId
        publicContactName
        city
        state
        country
        neighborhood
        address
        addressComplement
        reference
        number
        zipCode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      addressId
      deliveryDate
      deliveryChannel
      finishedDate
      categoriesIds
      hostname
      parentAccount
      invoices {
        invoiceKey
        invoiceSubtotal
        invoiceTaxes
        invoiceTotal
        invoiceUrl
        invoiceCreationDate
        invoiceReceiptDate
        invoiceNumber
        packages
        __typename
      }
      totalItems
      totalUnits
      totalCompletedItems
      totalCompletedUnits
      items {
        nextToken
        startedAt
        __typename
      }
      isInvoiced
      isOrderSplit
      metaData
      marketingData {
        id
        utmSource
        utmPartner
        utmMedium
        utmCampaign
        utmipage
        utmiPart
        utmiCampaign
        marketingTags
        coupon
        __typename
      }
      notes {
        type
        value
        createdAt
        __typename
      }
      observations
      orderAssignment {
        hostname
        worksheetId
        status
        initDate
        finishedDate
        __typename
      }
      orderId
      payment {
        paymentId
        paymentName
        paymentHolder
        date
        baseTotal
        discount
        tax
        grandTotal
        method
        transactionId
        transactionRef
        authorization
        lastDigits
        firstDigits
        installments
        cardNumber
        plcConversionRate
        __typename
      }
      prepareDate
      collectedDate
      salesSourceId
      salesChannel
      commercialPolicy
      sequence
      shipping {
        orderUniqueAddress
        __typename
      }
      shippingEstimatedDateMin
      status
      lastStatus
      lastStatusChange
      storeConfigId
      transactionDate
      pickingStartedAt
      pickedAt
      packingStartedAt
      packedAt
      packages {
        nextToken
        startedAt
        __typename
      }
      historicalOrder {
        nextToken
        startedAt
        __typename
      }
      tags
      appliedAutomations {
        automationId
        action
        value
        lastInvocation
        status
        requestId
        metadata
        __typename
      }
      totals {
        id
        name
        value
        __typename
      }
      hasPendingRmas
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersQueryVariables,
  APITypes.ListOrdersQuery
>;
export const syncOrders = /* GraphQL */ `query SyncOrders(
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncOrders(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      groups
      id
      billing {
        id
        discount
        tax
        freighAmount
        total
        __typename
      }
      affiliateId
      conversationID
      notificationsID
      customer {
        groups
        id
        profileId
        publicName
        firstName
        lastName
        document
        documentType
        anonymized
        phone
        email
        hashedEmail
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      customerId
      address {
        groups
        id
        contactName
        contactPhone
        customerId
        publicContactName
        city
        state
        country
        neighborhood
        address
        addressComplement
        reference
        number
        zipCode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      addressId
      deliveryDate
      deliveryChannel
      finishedDate
      categoriesIds
      hostname
      parentAccount
      invoices {
        invoiceKey
        invoiceSubtotal
        invoiceTaxes
        invoiceTotal
        invoiceUrl
        invoiceCreationDate
        invoiceReceiptDate
        invoiceNumber
        packages
        __typename
      }
      totalItems
      totalUnits
      totalCompletedItems
      totalCompletedUnits
      items {
        nextToken
        startedAt
        __typename
      }
      isInvoiced
      isOrderSplit
      metaData
      marketingData {
        id
        utmSource
        utmPartner
        utmMedium
        utmCampaign
        utmipage
        utmiPart
        utmiCampaign
        marketingTags
        coupon
        __typename
      }
      notes {
        type
        value
        createdAt
        __typename
      }
      observations
      orderAssignment {
        hostname
        worksheetId
        status
        initDate
        finishedDate
        __typename
      }
      orderId
      payment {
        paymentId
        paymentName
        paymentHolder
        date
        baseTotal
        discount
        tax
        grandTotal
        method
        transactionId
        transactionRef
        authorization
        lastDigits
        firstDigits
        installments
        cardNumber
        plcConversionRate
        __typename
      }
      prepareDate
      collectedDate
      salesSourceId
      salesChannel
      commercialPolicy
      sequence
      shipping {
        orderUniqueAddress
        __typename
      }
      shippingEstimatedDateMin
      status
      lastStatus
      lastStatusChange
      storeConfigId
      transactionDate
      pickingStartedAt
      pickedAt
      packingStartedAt
      packedAt
      packages {
        nextToken
        startedAt
        __typename
      }
      historicalOrder {
        nextToken
        startedAt
        __typename
      }
      tags
      appliedAutomations {
        automationId
        action
        value
        lastInvocation
        status
        requestId
        metadata
        __typename
      }
      totals {
        id
        name
        value
        __typename
      }
      hasPendingRmas
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncOrdersQueryVariables,
  APITypes.SyncOrdersQuery
>;
export const ordersByCustomerIdAndOrderId = /* GraphQL */ `query OrdersByCustomerIdAndOrderId(
  $customerId: ID!
  $orderId: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  ordersByCustomerIdAndOrderId(
    customerId: $customerId
    orderId: $orderId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      groups
      id
      billing {
        id
        discount
        tax
        freighAmount
        total
        __typename
      }
      affiliateId
      conversationID
      notificationsID
      customer {
        groups
        id
        profileId
        publicName
        firstName
        lastName
        document
        documentType
        anonymized
        phone
        email
        hashedEmail
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      customerId
      address {
        groups
        id
        contactName
        contactPhone
        customerId
        publicContactName
        city
        state
        country
        neighborhood
        address
        addressComplement
        reference
        number
        zipCode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      addressId
      deliveryDate
      deliveryChannel
      finishedDate
      categoriesIds
      hostname
      parentAccount
      invoices {
        invoiceKey
        invoiceSubtotal
        invoiceTaxes
        invoiceTotal
        invoiceUrl
        invoiceCreationDate
        invoiceReceiptDate
        invoiceNumber
        packages
        __typename
      }
      totalItems
      totalUnits
      totalCompletedItems
      totalCompletedUnits
      items {
        nextToken
        startedAt
        __typename
      }
      isInvoiced
      isOrderSplit
      metaData
      marketingData {
        id
        utmSource
        utmPartner
        utmMedium
        utmCampaign
        utmipage
        utmiPart
        utmiCampaign
        marketingTags
        coupon
        __typename
      }
      notes {
        type
        value
        createdAt
        __typename
      }
      observations
      orderAssignment {
        hostname
        worksheetId
        status
        initDate
        finishedDate
        __typename
      }
      orderId
      payment {
        paymentId
        paymentName
        paymentHolder
        date
        baseTotal
        discount
        tax
        grandTotal
        method
        transactionId
        transactionRef
        authorization
        lastDigits
        firstDigits
        installments
        cardNumber
        plcConversionRate
        __typename
      }
      prepareDate
      collectedDate
      salesSourceId
      salesChannel
      commercialPolicy
      sequence
      shipping {
        orderUniqueAddress
        __typename
      }
      shippingEstimatedDateMin
      status
      lastStatus
      lastStatusChange
      storeConfigId
      transactionDate
      pickingStartedAt
      pickedAt
      packingStartedAt
      packedAt
      packages {
        nextToken
        startedAt
        __typename
      }
      historicalOrder {
        nextToken
        startedAt
        __typename
      }
      tags
      appliedAutomations {
        automationId
        action
        value
        lastInvocation
        status
        requestId
        metadata
        __typename
      }
      totals {
        id
        name
        value
        __typename
      }
      hasPendingRmas
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrdersByCustomerIdAndOrderIdQueryVariables,
  APITypes.OrdersByCustomerIdAndOrderIdQuery
>;
export const ordersByAddressIdAndOrderId = /* GraphQL */ `query OrdersByAddressIdAndOrderId(
  $addressId: ID!
  $orderId: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  ordersByAddressIdAndOrderId(
    addressId: $addressId
    orderId: $orderId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      groups
      id
      billing {
        id
        discount
        tax
        freighAmount
        total
        __typename
      }
      affiliateId
      conversationID
      notificationsID
      customer {
        groups
        id
        profileId
        publicName
        firstName
        lastName
        document
        documentType
        anonymized
        phone
        email
        hashedEmail
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      customerId
      address {
        groups
        id
        contactName
        contactPhone
        customerId
        publicContactName
        city
        state
        country
        neighborhood
        address
        addressComplement
        reference
        number
        zipCode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      addressId
      deliveryDate
      deliveryChannel
      finishedDate
      categoriesIds
      hostname
      parentAccount
      invoices {
        invoiceKey
        invoiceSubtotal
        invoiceTaxes
        invoiceTotal
        invoiceUrl
        invoiceCreationDate
        invoiceReceiptDate
        invoiceNumber
        packages
        __typename
      }
      totalItems
      totalUnits
      totalCompletedItems
      totalCompletedUnits
      items {
        nextToken
        startedAt
        __typename
      }
      isInvoiced
      isOrderSplit
      metaData
      marketingData {
        id
        utmSource
        utmPartner
        utmMedium
        utmCampaign
        utmipage
        utmiPart
        utmiCampaign
        marketingTags
        coupon
        __typename
      }
      notes {
        type
        value
        createdAt
        __typename
      }
      observations
      orderAssignment {
        hostname
        worksheetId
        status
        initDate
        finishedDate
        __typename
      }
      orderId
      payment {
        paymentId
        paymentName
        paymentHolder
        date
        baseTotal
        discount
        tax
        grandTotal
        method
        transactionId
        transactionRef
        authorization
        lastDigits
        firstDigits
        installments
        cardNumber
        plcConversionRate
        __typename
      }
      prepareDate
      collectedDate
      salesSourceId
      salesChannel
      commercialPolicy
      sequence
      shipping {
        orderUniqueAddress
        __typename
      }
      shippingEstimatedDateMin
      status
      lastStatus
      lastStatusChange
      storeConfigId
      transactionDate
      pickingStartedAt
      pickedAt
      packingStartedAt
      packedAt
      packages {
        nextToken
        startedAt
        __typename
      }
      historicalOrder {
        nextToken
        startedAt
        __typename
      }
      tags
      appliedAutomations {
        automationId
        action
        value
        lastInvocation
        status
        requestId
        metadata
        __typename
      }
      totals {
        id
        name
        value
        __typename
      }
      hasPendingRmas
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrdersByAddressIdAndOrderIdQueryVariables,
  APITypes.OrdersByAddressIdAndOrderIdQuery
>;
export const ordersByStatusAndHostname = /* GraphQL */ `query OrdersByStatusAndHostname(
  $status: OrderStatus!
  $hostname: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  ordersByStatusAndHostname(
    status: $status
    hostname: $hostname
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      groups
      id
      billing {
        id
        discount
        tax
        freighAmount
        total
        __typename
      }
      affiliateId
      conversationID
      notificationsID
      customer {
        groups
        id
        profileId
        publicName
        firstName
        lastName
        document
        documentType
        anonymized
        phone
        email
        hashedEmail
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      customerId
      address {
        groups
        id
        contactName
        contactPhone
        customerId
        publicContactName
        city
        state
        country
        neighborhood
        address
        addressComplement
        reference
        number
        zipCode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      addressId
      deliveryDate
      deliveryChannel
      finishedDate
      categoriesIds
      hostname
      parentAccount
      invoices {
        invoiceKey
        invoiceSubtotal
        invoiceTaxes
        invoiceTotal
        invoiceUrl
        invoiceCreationDate
        invoiceReceiptDate
        invoiceNumber
        packages
        __typename
      }
      totalItems
      totalUnits
      totalCompletedItems
      totalCompletedUnits
      items {
        nextToken
        startedAt
        __typename
      }
      isInvoiced
      isOrderSplit
      metaData
      marketingData {
        id
        utmSource
        utmPartner
        utmMedium
        utmCampaign
        utmipage
        utmiPart
        utmiCampaign
        marketingTags
        coupon
        __typename
      }
      notes {
        type
        value
        createdAt
        __typename
      }
      observations
      orderAssignment {
        hostname
        worksheetId
        status
        initDate
        finishedDate
        __typename
      }
      orderId
      payment {
        paymentId
        paymentName
        paymentHolder
        date
        baseTotal
        discount
        tax
        grandTotal
        method
        transactionId
        transactionRef
        authorization
        lastDigits
        firstDigits
        installments
        cardNumber
        plcConversionRate
        __typename
      }
      prepareDate
      collectedDate
      salesSourceId
      salesChannel
      commercialPolicy
      sequence
      shipping {
        orderUniqueAddress
        __typename
      }
      shippingEstimatedDateMin
      status
      lastStatus
      lastStatusChange
      storeConfigId
      transactionDate
      pickingStartedAt
      pickedAt
      packingStartedAt
      packedAt
      packages {
        nextToken
        startedAt
        __typename
      }
      historicalOrder {
        nextToken
        startedAt
        __typename
      }
      tags
      appliedAutomations {
        automationId
        action
        value
        lastInvocation
        status
        requestId
        metadata
        __typename
      }
      totals {
        id
        name
        value
        __typename
      }
      hasPendingRmas
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrdersByStatusAndHostnameQueryVariables,
  APITypes.OrdersByStatusAndHostnameQuery
>;
export const getItemLogs = /* GraphQL */ `query GetItemLogs($id: ID!) {
  getItemLogs(id: $id) {
    id
    orderId
    itemId
    uniqueId
    status
    lastStatus
    description
    metadata
    timestamp
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetItemLogsQueryVariables,
  APITypes.GetItemLogsQuery
>;
export const listItemLogs = /* GraphQL */ `query ListItemLogs(
  $filter: ModelItemLogsFilterInput
  $limit: Int
  $nextToken: String
) {
  listItemLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      orderId
      itemId
      uniqueId
      status
      lastStatus
      description
      metadata
      timestamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListItemLogsQueryVariables,
  APITypes.ListItemLogsQuery
>;
export const syncItemLogs = /* GraphQL */ `query SyncItemLogs(
  $filter: ModelItemLogsFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncItemLogs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      orderId
      itemId
      uniqueId
      status
      lastStatus
      description
      metadata
      timestamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncItemLogsQueryVariables,
  APITypes.SyncItemLogsQuery
>;
export const logsByUniqueId = /* GraphQL */ `query LogsByUniqueId(
  $uniqueId: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelItemLogsFilterInput
  $limit: Int
  $nextToken: String
) {
  logsByUniqueId(
    uniqueId: $uniqueId
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      orderId
      itemId
      uniqueId
      status
      lastStatus
      description
      metadata
      timestamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LogsByUniqueIdQueryVariables,
  APITypes.LogsByUniqueIdQuery
>;
export const getPackage = /* GraphQL */ `query GetPackage($id: ID!) {
  getPackage(id: $id) {
    groups
    id
    orderId
    envelope
    courier
    type
    name
    description
    items {
      id
      ean
      refId
      quantity
      description
      imageUrl
      __typename
    }
    dimensions {
      width
      height
      length
      weight
      cubicweight
      __typename
    }
    status
    storeConfigId
    packageLocation {
      storeConfigId
      location
      assignedDate
      current
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPackageQueryVariables,
  APITypes.GetPackageQuery
>;
export const listPackages = /* GraphQL */ `query ListPackages(
  $id: ID
  $filter: ModelPackageFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listPackages(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      groups
      id
      orderId
      envelope
      courier
      type
      name
      description
      items {
        id
        ean
        refId
        quantity
        description
        imageUrl
        __typename
      }
      dimensions {
        width
        height
        length
        weight
        cubicweight
        __typename
      }
      status
      storeConfigId
      packageLocation {
        storeConfigId
        location
        assignedDate
        current
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPackagesQueryVariables,
  APITypes.ListPackagesQuery
>;
export const syncPackages = /* GraphQL */ `query SyncPackages(
  $filter: ModelPackageFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncPackages(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      groups
      id
      orderId
      envelope
      courier
      type
      name
      description
      items {
        id
        ean
        refId
        quantity
        description
        imageUrl
        __typename
      }
      dimensions {
        width
        height
        length
        weight
        cubicweight
        __typename
      }
      status
      storeConfigId
      packageLocation {
        storeConfigId
        location
        assignedDate
        current
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncPackagesQueryVariables,
  APITypes.SyncPackagesQuery
>;
export const packagesByOrderId = /* GraphQL */ `query PackagesByOrderId(
  $orderId: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPackageFilterInput
  $limit: Int
  $nextToken: String
) {
  packagesByOrderId(
    orderId: $orderId
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      groups
      id
      orderId
      envelope
      courier
      type
      name
      description
      items {
        id
        ean
        refId
        quantity
        description
        imageUrl
        __typename
      }
      dimensions {
        width
        height
        length
        weight
        cubicweight
        __typename
      }
      status
      storeConfigId
      packageLocation {
        storeConfigId
        location
        assignedDate
        current
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PackagesByOrderIdQueryVariables,
  APITypes.PackagesByOrderIdQuery
>;
export const getPickingActions = /* GraphQL */ `query GetPickingActions($id: ID!) {
  getPickingActions(id: $id) {
    id
    type
    worksheetId
    worksheetSequence
    storeConfigId
    orderId
    conversationID
    createdFrom
    actionCreated {
      userId
      date
      __typename
    }
    actionApproved {
      userId
      date
      __typename
    }
    actionConfirmed {
      userId
      date
      __typename
    }
    status
    payload
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPickingActionsQueryVariables,
  APITypes.GetPickingActionsQuery
>;
export const listPickingActions = /* GraphQL */ `query ListPickingActions(
  $id: ID
  $filter: ModelPickingActionsFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listPickingActions(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      type
      worksheetId
      worksheetSequence
      storeConfigId
      orderId
      conversationID
      createdFrom
      actionCreated {
        userId
        date
        __typename
      }
      actionApproved {
        userId
        date
        __typename
      }
      actionConfirmed {
        userId
        date
        __typename
      }
      status
      payload
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPickingActionsQueryVariables,
  APITypes.ListPickingActionsQuery
>;
export const syncPickingActions = /* GraphQL */ `query SyncPickingActions(
  $filter: ModelPickingActionsFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncPickingActions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      type
      worksheetId
      worksheetSequence
      storeConfigId
      orderId
      conversationID
      createdFrom
      actionCreated {
        userId
        date
        __typename
      }
      actionApproved {
        userId
        date
        __typename
      }
      actionConfirmed {
        userId
        date
        __typename
      }
      status
      payload
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncPickingActionsQueryVariables,
  APITypes.SyncPickingActionsQuery
>;
export const pickingActionsByWorksheet = /* GraphQL */ `query PickingActionsByWorksheet(
  $worksheetId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPickingActionsFilterInput
  $limit: Int
  $nextToken: String
) {
  pickingActionsByWorksheet(
    worksheetId: $worksheetId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      type
      worksheetId
      worksheetSequence
      storeConfigId
      orderId
      conversationID
      createdFrom
      actionCreated {
        userId
        date
        __typename
      }
      actionApproved {
        userId
        date
        __typename
      }
      actionConfirmed {
        userId
        date
        __typename
      }
      status
      payload
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PickingActionsByWorksheetQueryVariables,
  APITypes.PickingActionsByWorksheetQuery
>;
export const pickingActionsByStoreConfig = /* GraphQL */ `query PickingActionsByStoreConfig(
  $storeConfigId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPickingActionsFilterInput
  $limit: Int
  $nextToken: String
) {
  pickingActionsByStoreConfig(
    storeConfigId: $storeConfigId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      type
      worksheetId
      worksheetSequence
      storeConfigId
      orderId
      conversationID
      createdFrom
      actionCreated {
        userId
        date
        __typename
      }
      actionApproved {
        userId
        date
        __typename
      }
      actionConfirmed {
        userId
        date
        __typename
      }
      status
      payload
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PickingActionsByStoreConfigQueryVariables,
  APITypes.PickingActionsByStoreConfigQuery
>;
export const pickingActionsByOrder = /* GraphQL */ `query PickingActionsByOrder(
  $orderId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPickingActionsFilterInput
  $limit: Int
  $nextToken: String
) {
  pickingActionsByOrder(
    orderId: $orderId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      type
      worksheetId
      worksheetSequence
      storeConfigId
      orderId
      conversationID
      createdFrom
      actionCreated {
        userId
        date
        __typename
      }
      actionApproved {
        userId
        date
        __typename
      }
      actionConfirmed {
        userId
        date
        __typename
      }
      status
      payload
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PickingActionsByOrderQueryVariables,
  APITypes.PickingActionsByOrderQuery
>;
export const getReturn = /* GraphQL */ `query GetReturn($id: ID!) {
  getReturn(id: $id) {
    id
    orderId
    sequence
    status
    hostname
    storeConfigId
    order {
      id
      date
      total
      paymentMethod
      __typename
    }
    customer {
      name
      email
      identification
      __typename
    }
    tags
    shippingRequest {
      id
      type
      current
      pickupAddress {
        street
        city
        state
        zip
        country
        __typename
      }
      store {
        storeConfigId
        name
        __typename
      }
      deliveryAddress {
        name
        __typename
      }
      shippingServiceId
      creationDate
      pickupDate
      deliveryDate
      shippingPrice
      status
      deliverySlot {
        from
        to
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    items {
      items {
        id
        rmaId
        itemId
        orderId
        name
        image
        sellingPrice
        currencyCode
        status
        storeConfigId
        deliveryReference
        requestedResolution
        requestType
        policyId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        rMAItemsSageId
        rMAItemsResolutionId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    notes {
      note
      type
      createdBy
      creationDate
      __typename
    }
    nps
    history {
      items {
        id
        rmaId
        lastStatus
        rmaStatus
        source
        user
        description
        metadata
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    transactions {
      items {
        id
        transactionId
        rmaId
        orderId
        itemId
        type
        action
        description
        createdBy
        account
        amount
        creationDate
        status
        data
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    service {
      serviceId
      labelUrl
      __typename
    }
    deliveryReference
    appliedAutomations {
      automationId
      action
      value
      lastInvocation
      status
      requestId
      metadata
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    returnShippingRequestId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetReturnQueryVariables, APITypes.GetReturnQuery>;
export const listReturns = /* GraphQL */ `query ListReturns(
  $id: ID
  $filter: ModelReturnFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listReturns(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      orderId
      sequence
      status
      hostname
      storeConfigId
      order {
        id
        date
        total
        paymentMethod
        __typename
      }
      customer {
        name
        email
        identification
        __typename
      }
      tags
      shippingRequest {
        id
        type
        current
        shippingServiceId
        creationDate
        pickupDate
        deliveryDate
        shippingPrice
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      items {
        nextToken
        startedAt
        __typename
      }
      notes {
        note
        type
        createdBy
        creationDate
        __typename
      }
      nps
      history {
        nextToken
        startedAt
        __typename
      }
      transactions {
        nextToken
        startedAt
        __typename
      }
      service {
        serviceId
        labelUrl
        __typename
      }
      deliveryReference
      appliedAutomations {
        automationId
        action
        value
        lastInvocation
        status
        requestId
        metadata
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      returnShippingRequestId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReturnsQueryVariables,
  APITypes.ListReturnsQuery
>;
export const syncReturns = /* GraphQL */ `query SyncReturns(
  $filter: ModelReturnFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncReturns(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      orderId
      sequence
      status
      hostname
      storeConfigId
      order {
        id
        date
        total
        paymentMethod
        __typename
      }
      customer {
        name
        email
        identification
        __typename
      }
      tags
      shippingRequest {
        id
        type
        current
        shippingServiceId
        creationDate
        pickupDate
        deliveryDate
        shippingPrice
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      items {
        nextToken
        startedAt
        __typename
      }
      notes {
        note
        type
        createdBy
        creationDate
        __typename
      }
      nps
      history {
        nextToken
        startedAt
        __typename
      }
      transactions {
        nextToken
        startedAt
        __typename
      }
      service {
        serviceId
        labelUrl
        __typename
      }
      deliveryReference
      appliedAutomations {
        automationId
        action
        value
        lastInvocation
        status
        requestId
        metadata
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      returnShippingRequestId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncReturnsQueryVariables,
  APITypes.SyncReturnsQuery
>;
export const returnsByOrder = /* GraphQL */ `query ReturnsByOrder(
  $orderId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelReturnFilterInput
  $limit: Int
  $nextToken: String
) {
  returnsByOrder(
    orderId: $orderId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      orderId
      sequence
      status
      hostname
      storeConfigId
      order {
        id
        date
        total
        paymentMethod
        __typename
      }
      customer {
        name
        email
        identification
        __typename
      }
      tags
      shippingRequest {
        id
        type
        current
        shippingServiceId
        creationDate
        pickupDate
        deliveryDate
        shippingPrice
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      items {
        nextToken
        startedAt
        __typename
      }
      notes {
        note
        type
        createdBy
        creationDate
        __typename
      }
      nps
      history {
        nextToken
        startedAt
        __typename
      }
      transactions {
        nextToken
        startedAt
        __typename
      }
      service {
        serviceId
        labelUrl
        __typename
      }
      deliveryReference
      appliedAutomations {
        automationId
        action
        value
        lastInvocation
        status
        requestId
        metadata
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      returnShippingRequestId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ReturnsByOrderQueryVariables,
  APITypes.ReturnsByOrderQuery
>;
export const getRMAShipping = /* GraphQL */ `query GetRMAShipping($id: ID!) {
  getRMAShipping(id: $id) {
    id
    type
    current
    pickupAddress {
      street
      city
      state
      zip
      country
      __typename
    }
    store {
      storeConfigId
      name
      address {
        street
        city
        state
        zip
        country
        __typename
      }
      __typename
    }
    deliveryAddress {
      name
      address {
        street
        city
        state
        zip
        country
        __typename
      }
      __typename
    }
    shippingServiceId
    creationDate
    pickupDate
    deliveryDate
    shippingPrice
    status
    deliverySlot {
      from
      to
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRMAShippingQueryVariables,
  APITypes.GetRMAShippingQuery
>;
export const listRMAShippings = /* GraphQL */ `query ListRMAShippings(
  $id: ID
  $filter: ModelRMAShippingFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listRMAShippings(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      type
      current
      pickupAddress {
        street
        city
        state
        zip
        country
        __typename
      }
      store {
        storeConfigId
        name
        __typename
      }
      deliveryAddress {
        name
        __typename
      }
      shippingServiceId
      creationDate
      pickupDate
      deliveryDate
      shippingPrice
      status
      deliverySlot {
        from
        to
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRMAShippingsQueryVariables,
  APITypes.ListRMAShippingsQuery
>;
export const syncRMAShippings = /* GraphQL */ `query SyncRMAShippings(
  $filter: ModelRMAShippingFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncRMAShippings(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      type
      current
      pickupAddress {
        street
        city
        state
        zip
        country
        __typename
      }
      store {
        storeConfigId
        name
        __typename
      }
      deliveryAddress {
        name
        __typename
      }
      shippingServiceId
      creationDate
      pickupDate
      deliveryDate
      shippingPrice
      status
      deliverySlot {
        from
        to
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncRMAShippingsQueryVariables,
  APITypes.SyncRMAShippingsQuery
>;
export const shippingByServiceId = /* GraphQL */ `query ShippingByServiceId(
  $shippingServiceId: String!
  $sortDirection: ModelSortDirection
  $filter: ModelRMAShippingFilterInput
  $limit: Int
  $nextToken: String
) {
  shippingByServiceId(
    shippingServiceId: $shippingServiceId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      type
      current
      pickupAddress {
        street
        city
        state
        zip
        country
        __typename
      }
      store {
        storeConfigId
        name
        __typename
      }
      deliveryAddress {
        name
        __typename
      }
      shippingServiceId
      creationDate
      pickupDate
      deliveryDate
      shippingPrice
      status
      deliverySlot {
        from
        to
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ShippingByServiceIdQueryVariables,
  APITypes.ShippingByServiceIdQuery
>;
export const getRMAItems = /* GraphQL */ `query GetRMAItems($id: ID!) {
  getRMAItems(id: $id) {
    id
    rmaId
    itemId
    orderId
    name
    image
    sellingPrice
    currencyCode
    status
    storeConfigId
    deliveryReference
    sage {
      id
      rmaId
      itemId
      approved
      storeConfigId
      images {
        id
        URL
        tags
        __typename
      }
      productMatch {
        brand
        model
        color
        product
        size
        image
        __typename
      }
      justification {
        imageMatchProduct
        accurateDescription
        __typename
      }
      accuracy
      result
      shortDescription
      errors
      lang
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    requestedResolution
    requestType
    input {
      reasonId
      returnReason
      reasonType
      quantity
      attachments {
        type
        URL
        __typename
      }
      recommendedItem {
        id
        storeId
        name
        image
        quantity
        sellingPrice
        adjustedPrice
        difference
        additionalCost
        paymentType
        __typename
      }
      __typename
    }
    shipping {
      id
      packageID
      quantity
      status
      __typename
    }
    notes {
      note
      type
      createdBy
      creationDate
      __typename
    }
    resolution {
      id
      backToStockQuantity
      approved
      type
      quantity
      replacement {
        id
        itemId
        rmaId
        quantity
        status
        storeConfigId
        worksheetId
        fulfillmentStatus
        approvedBy
        action
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        rMAReplacementRefundId
        rMAReplacementStoreCreditId
        __typename
      }
      refund {
        id
        storeConfigId
        storeId
        transactionId
        confirmationId
        customerId
        paymentMethod
        rmaId
        itemId
        amount
        status
        confirmationDate
        itemQuantity
        createdBy
        approvedBy
        metadata
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      storeCredit {
        id
        rmaId
        itemId
        orderId
        customerId
        currencyCode
        storeConfigId
        reason
        type
        storeCreditId
        creationDate
        startDate
        expirationDate
        amount
        quantity
        status
        approvedBy
        metadata
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      coupon {
        idCalculatorConfiguration
        name
        beginDateUtc
        endDateUtc
        utmSource
        utmCampaign
        amount
        __typename
      }
      giftcard {
        id
        name
        redemptionCode
        expiringDate
        emissionDate
        amount
        __typename
      }
      attachments {
        type
        URL
        __typename
      }
      action
      transaction {
        transactionId
        status
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      rMAItemResolutionReplacementId
      rMAItemResolutionRefundId
      rMAItemResolutionStoreCreditId
      __typename
    }
    itemLogs {
      items {
        id
        orderId
        itemId
        uniqueId
        status
        lastStatus
        description
        metadata
        timestamp
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    policyId
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    rMAItemsSageId
    rMAItemsResolutionId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRMAItemsQueryVariables,
  APITypes.GetRMAItemsQuery
>;
export const listRMAItems = /* GraphQL */ `query ListRMAItems(
  $id: ID
  $filter: ModelRMAItemsFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listRMAItems(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      rmaId
      itemId
      orderId
      name
      image
      sellingPrice
      currencyCode
      status
      storeConfigId
      deliveryReference
      sage {
        id
        rmaId
        itemId
        approved
        storeConfigId
        accuracy
        result
        shortDescription
        errors
        lang
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      requestedResolution
      requestType
      input {
        reasonId
        returnReason
        reasonType
        quantity
        __typename
      }
      shipping {
        id
        packageID
        quantity
        status
        __typename
      }
      notes {
        note
        type
        createdBy
        creationDate
        __typename
      }
      resolution {
        id
        backToStockQuantity
        approved
        type
        quantity
        action
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        rMAItemResolutionReplacementId
        rMAItemResolutionRefundId
        rMAItemResolutionStoreCreditId
        __typename
      }
      itemLogs {
        nextToken
        startedAt
        __typename
      }
      policyId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      rMAItemsSageId
      rMAItemsResolutionId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRMAItemsQueryVariables,
  APITypes.ListRMAItemsQuery
>;
export const syncRMAItems = /* GraphQL */ `query SyncRMAItems(
  $filter: ModelRMAItemsFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncRMAItems(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      rmaId
      itemId
      orderId
      name
      image
      sellingPrice
      currencyCode
      status
      storeConfigId
      deliveryReference
      sage {
        id
        rmaId
        itemId
        approved
        storeConfigId
        accuracy
        result
        shortDescription
        errors
        lang
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      requestedResolution
      requestType
      input {
        reasonId
        returnReason
        reasonType
        quantity
        __typename
      }
      shipping {
        id
        packageID
        quantity
        status
        __typename
      }
      notes {
        note
        type
        createdBy
        creationDate
        __typename
      }
      resolution {
        id
        backToStockQuantity
        approved
        type
        quantity
        action
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        rMAItemResolutionReplacementId
        rMAItemResolutionRefundId
        rMAItemResolutionStoreCreditId
        __typename
      }
      itemLogs {
        nextToken
        startedAt
        __typename
      }
      policyId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      rMAItemsSageId
      rMAItemsResolutionId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncRMAItemsQueryVariables,
  APITypes.SyncRMAItemsQuery
>;
export const rMAItemsByRmaId = /* GraphQL */ `query RMAItemsByRmaId(
  $rmaId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRMAItemsFilterInput
  $limit: Int
  $nextToken: String
) {
  rMAItemsByRmaId(
    rmaId: $rmaId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      rmaId
      itemId
      orderId
      name
      image
      sellingPrice
      currencyCode
      status
      storeConfigId
      deliveryReference
      sage {
        id
        rmaId
        itemId
        approved
        storeConfigId
        accuracy
        result
        shortDescription
        errors
        lang
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      requestedResolution
      requestType
      input {
        reasonId
        returnReason
        reasonType
        quantity
        __typename
      }
      shipping {
        id
        packageID
        quantity
        status
        __typename
      }
      notes {
        note
        type
        createdBy
        creationDate
        __typename
      }
      resolution {
        id
        backToStockQuantity
        approved
        type
        quantity
        action
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        rMAItemResolutionReplacementId
        rMAItemResolutionRefundId
        rMAItemResolutionStoreCreditId
        __typename
      }
      itemLogs {
        nextToken
        startedAt
        __typename
      }
      policyId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      rMAItemsSageId
      rMAItemsResolutionId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RMAItemsByRmaIdQueryVariables,
  APITypes.RMAItemsByRmaIdQuery
>;
export const rMAItemsByOrderId = /* GraphQL */ `query RMAItemsByOrderId(
  $orderId: String!
  $sortDirection: ModelSortDirection
  $filter: ModelRMAItemsFilterInput
  $limit: Int
  $nextToken: String
) {
  rMAItemsByOrderId(
    orderId: $orderId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      rmaId
      itemId
      orderId
      name
      image
      sellingPrice
      currencyCode
      status
      storeConfigId
      deliveryReference
      sage {
        id
        rmaId
        itemId
        approved
        storeConfigId
        accuracy
        result
        shortDescription
        errors
        lang
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      requestedResolution
      requestType
      input {
        reasonId
        returnReason
        reasonType
        quantity
        __typename
      }
      shipping {
        id
        packageID
        quantity
        status
        __typename
      }
      notes {
        note
        type
        createdBy
        creationDate
        __typename
      }
      resolution {
        id
        backToStockQuantity
        approved
        type
        quantity
        action
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        rMAItemResolutionReplacementId
        rMAItemResolutionRefundId
        rMAItemResolutionStoreCreditId
        __typename
      }
      itemLogs {
        nextToken
        startedAt
        __typename
      }
      policyId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      rMAItemsSageId
      rMAItemsResolutionId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RMAItemsByOrderIdQueryVariables,
  APITypes.RMAItemsByOrderIdQuery
>;
export const getRMAReplacement = /* GraphQL */ `query GetRMAReplacement($id: ID!) {
  getRMAReplacement(id: $id) {
    id
    itemId
    rmaId
    quantity
    replacementItem {
      id
      storeId
      name
      image
      quantity
      sellingPrice
      adjustedPrice
      difference
      additionalCost
      paymentType
      __typename
    }
    recommendedItem {
      id
      storeId
      name
      image
      quantity
      sellingPrice
      adjustedPrice
      difference
      additionalCost
      paymentType
      __typename
    }
    refund {
      id
      storeConfigId
      storeId
      transactionId
      confirmationId
      customerId
      paymentMethod
      paymentData {
        paymentId
        paymentName
        paymentHolder
        date
        baseTotal
        discount
        tax
        grandTotal
        method
        transactionId
        transactionRef
        authorization
        lastDigits
        firstDigits
        installments
        cardNumber
        plcConversionRate
        __typename
      }
      rmaId
      itemId
      amount
      status
      confirmationDate
      itemQuantity
      createdBy
      approvedBy
      metadata
      attachments {
        type
        URL
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    storeCredit {
      id
      rmaId
      itemId
      orderId
      customerId
      currencyCode
      storeConfigId
      reason
      type
      storeCreditId
      creationDate
      startDate
      expirationDate
      amount
      quantity
      status
      approvedBy
      metadata
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    status
    storeConfigId
    worksheetId
    fulfillmentStatus
    shipping {
      id
      packageID
      quantity
      status
      __typename
    }
    approvedBy
    action
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    rMAReplacementRefundId
    rMAReplacementStoreCreditId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRMAReplacementQueryVariables,
  APITypes.GetRMAReplacementQuery
>;
export const listRMAReplacements = /* GraphQL */ `query ListRMAReplacements(
  $id: ID
  $filter: ModelRMAReplacementFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listRMAReplacements(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      itemId
      rmaId
      quantity
      replacementItem {
        id
        storeId
        name
        image
        quantity
        sellingPrice
        adjustedPrice
        difference
        additionalCost
        paymentType
        __typename
      }
      recommendedItem {
        id
        storeId
        name
        image
        quantity
        sellingPrice
        adjustedPrice
        difference
        additionalCost
        paymentType
        __typename
      }
      refund {
        id
        storeConfigId
        storeId
        transactionId
        confirmationId
        customerId
        paymentMethod
        rmaId
        itemId
        amount
        status
        confirmationDate
        itemQuantity
        createdBy
        approvedBy
        metadata
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      storeCredit {
        id
        rmaId
        itemId
        orderId
        customerId
        currencyCode
        storeConfigId
        reason
        type
        storeCreditId
        creationDate
        startDate
        expirationDate
        amount
        quantity
        status
        approvedBy
        metadata
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      status
      storeConfigId
      worksheetId
      fulfillmentStatus
      shipping {
        id
        packageID
        quantity
        status
        __typename
      }
      approvedBy
      action
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      rMAReplacementRefundId
      rMAReplacementStoreCreditId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRMAReplacementsQueryVariables,
  APITypes.ListRMAReplacementsQuery
>;
export const syncRMAReplacements = /* GraphQL */ `query SyncRMAReplacements(
  $filter: ModelRMAReplacementFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncRMAReplacements(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      itemId
      rmaId
      quantity
      replacementItem {
        id
        storeId
        name
        image
        quantity
        sellingPrice
        adjustedPrice
        difference
        additionalCost
        paymentType
        __typename
      }
      recommendedItem {
        id
        storeId
        name
        image
        quantity
        sellingPrice
        adjustedPrice
        difference
        additionalCost
        paymentType
        __typename
      }
      refund {
        id
        storeConfigId
        storeId
        transactionId
        confirmationId
        customerId
        paymentMethod
        rmaId
        itemId
        amount
        status
        confirmationDate
        itemQuantity
        createdBy
        approvedBy
        metadata
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      storeCredit {
        id
        rmaId
        itemId
        orderId
        customerId
        currencyCode
        storeConfigId
        reason
        type
        storeCreditId
        creationDate
        startDate
        expirationDate
        amount
        quantity
        status
        approvedBy
        metadata
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      status
      storeConfigId
      worksheetId
      fulfillmentStatus
      shipping {
        id
        packageID
        quantity
        status
        __typename
      }
      approvedBy
      action
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      rMAReplacementRefundId
      rMAReplacementStoreCreditId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncRMAReplacementsQueryVariables,
  APITypes.SyncRMAReplacementsQuery
>;
export const rMAReplacementsByRmaId = /* GraphQL */ `query RMAReplacementsByRmaId(
  $rmaId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRMAReplacementFilterInput
  $limit: Int
  $nextToken: String
) {
  rMAReplacementsByRmaId(
    rmaId: $rmaId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      itemId
      rmaId
      quantity
      replacementItem {
        id
        storeId
        name
        image
        quantity
        sellingPrice
        adjustedPrice
        difference
        additionalCost
        paymentType
        __typename
      }
      recommendedItem {
        id
        storeId
        name
        image
        quantity
        sellingPrice
        adjustedPrice
        difference
        additionalCost
        paymentType
        __typename
      }
      refund {
        id
        storeConfigId
        storeId
        transactionId
        confirmationId
        customerId
        paymentMethod
        rmaId
        itemId
        amount
        status
        confirmationDate
        itemQuantity
        createdBy
        approvedBy
        metadata
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      storeCredit {
        id
        rmaId
        itemId
        orderId
        customerId
        currencyCode
        storeConfigId
        reason
        type
        storeCreditId
        creationDate
        startDate
        expirationDate
        amount
        quantity
        status
        approvedBy
        metadata
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      status
      storeConfigId
      worksheetId
      fulfillmentStatus
      shipping {
        id
        packageID
        quantity
        status
        __typename
      }
      approvedBy
      action
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      rMAReplacementRefundId
      rMAReplacementStoreCreditId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RMAReplacementsByRmaIdQueryVariables,
  APITypes.RMAReplacementsByRmaIdQuery
>;
export const getRMARefund = /* GraphQL */ `query GetRMARefund($id: ID!) {
  getRMARefund(id: $id) {
    id
    storeConfigId
    storeId
    transactionId
    confirmationId
    customerId
    paymentMethod
    paymentData {
      paymentId
      paymentName
      paymentHolder
      date
      baseTotal
      discount
      tax
      grandTotal
      currency {
        name
        code
        symbol
        decimalDigits
        decimalSeparator
        groupSeparator
        groupSize
        __typename
      }
      method
      transactionId
      transactionRef
      authorization
      lastDigits
      firstDigits
      installments
      cardNumber
      plcConversionRate
      priceListCurrency {
        name
        code
        symbol
        decimalDigits
        decimalSeparator
        groupSeparator
        groupSize
        __typename
      }
      __typename
    }
    rmaId
    itemId
    amount
    status
    confirmationDate
    itemQuantity
    createdBy
    approvedBy
    metadata
    attachments {
      type
      URL
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRMARefundQueryVariables,
  APITypes.GetRMARefundQuery
>;
export const listRMARefunds = /* GraphQL */ `query ListRMARefunds(
  $id: ID
  $filter: ModelRMARefundFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listRMARefunds(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      storeConfigId
      storeId
      transactionId
      confirmationId
      customerId
      paymentMethod
      paymentData {
        paymentId
        paymentName
        paymentHolder
        date
        baseTotal
        discount
        tax
        grandTotal
        method
        transactionId
        transactionRef
        authorization
        lastDigits
        firstDigits
        installments
        cardNumber
        plcConversionRate
        __typename
      }
      rmaId
      itemId
      amount
      status
      confirmationDate
      itemQuantity
      createdBy
      approvedBy
      metadata
      attachments {
        type
        URL
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRMARefundsQueryVariables,
  APITypes.ListRMARefundsQuery
>;
export const syncRMARefunds = /* GraphQL */ `query SyncRMARefunds(
  $filter: ModelRMARefundFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncRMARefunds(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      storeConfigId
      storeId
      transactionId
      confirmationId
      customerId
      paymentMethod
      paymentData {
        paymentId
        paymentName
        paymentHolder
        date
        baseTotal
        discount
        tax
        grandTotal
        method
        transactionId
        transactionRef
        authorization
        lastDigits
        firstDigits
        installments
        cardNumber
        plcConversionRate
        __typename
      }
      rmaId
      itemId
      amount
      status
      confirmationDate
      itemQuantity
      createdBy
      approvedBy
      metadata
      attachments {
        type
        URL
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncRMARefundsQueryVariables,
  APITypes.SyncRMARefundsQuery
>;
export const getRMAStoreCredit = /* GraphQL */ `query GetRMAStoreCredit($id: ID!) {
  getRMAStoreCredit(id: $id) {
    id
    rmaId
    itemId
    orderId
    customerId
    currencyCode
    storeConfigId
    reason
    type
    storeCreditId
    creationDate
    startDate
    expirationDate
    amount
    quantity
    status
    approvedBy
    metadata
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRMAStoreCreditQueryVariables,
  APITypes.GetRMAStoreCreditQuery
>;
export const listRMAStoreCredits = /* GraphQL */ `query ListRMAStoreCredits(
  $id: ID
  $filter: ModelRMAStoreCreditFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listRMAStoreCredits(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      rmaId
      itemId
      orderId
      customerId
      currencyCode
      storeConfigId
      reason
      type
      storeCreditId
      creationDate
      startDate
      expirationDate
      amount
      quantity
      status
      approvedBy
      metadata
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRMAStoreCreditsQueryVariables,
  APITypes.ListRMAStoreCreditsQuery
>;
export const syncRMAStoreCredits = /* GraphQL */ `query SyncRMAStoreCredits(
  $filter: ModelRMAStoreCreditFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncRMAStoreCredits(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      rmaId
      itemId
      orderId
      customerId
      currencyCode
      storeConfigId
      reason
      type
      storeCreditId
      creationDate
      startDate
      expirationDate
      amount
      quantity
      status
      approvedBy
      metadata
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncRMAStoreCreditsQueryVariables,
  APITypes.SyncRMAStoreCreditsQuery
>;
export const getRMASageItem = /* GraphQL */ `query GetRMASageItem($id: ID!) {
  getRMASageItem(id: $id) {
    id
    rmaId
    itemId
    approved
    storeConfigId
    images {
      id
      URL
      tags
      __typename
    }
    productMatch {
      brand
      model
      color
      product
      size
      image
      __typename
    }
    justification {
      imageMatchProduct
      accurateDescription
      __typename
    }
    accuracy
    result
    shortDescription
    errors
    lang
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRMASageItemQueryVariables,
  APITypes.GetRMASageItemQuery
>;
export const listRMASageItems = /* GraphQL */ `query ListRMASageItems(
  $id: ID
  $filter: ModelRMASageItemFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listRMASageItems(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      rmaId
      itemId
      approved
      storeConfigId
      images {
        id
        URL
        tags
        __typename
      }
      productMatch {
        brand
        model
        color
        product
        size
        image
        __typename
      }
      justification {
        imageMatchProduct
        accurateDescription
        __typename
      }
      accuracy
      result
      shortDescription
      errors
      lang
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRMASageItemsQueryVariables,
  APITypes.ListRMASageItemsQuery
>;
export const syncRMASageItems = /* GraphQL */ `query SyncRMASageItems(
  $filter: ModelRMASageItemFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncRMASageItems(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      rmaId
      itemId
      approved
      storeConfigId
      images {
        id
        URL
        tags
        __typename
      }
      productMatch {
        brand
        model
        color
        product
        size
        image
        __typename
      }
      justification {
        imageMatchProduct
        accurateDescription
        __typename
      }
      accuracy
      result
      shortDescription
      errors
      lang
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncRMASageItemsQueryVariables,
  APITypes.SyncRMASageItemsQuery
>;
export const getRMAItemResolution = /* GraphQL */ `query GetRMAItemResolution($id: ID!) {
  getRMAItemResolution(id: $id) {
    id
    backToStockQuantity
    approved
    type
    quantity
    replacement {
      id
      itemId
      rmaId
      quantity
      replacementItem {
        id
        storeId
        name
        image
        quantity
        sellingPrice
        adjustedPrice
        difference
        additionalCost
        paymentType
        __typename
      }
      recommendedItem {
        id
        storeId
        name
        image
        quantity
        sellingPrice
        adjustedPrice
        difference
        additionalCost
        paymentType
        __typename
      }
      refund {
        id
        storeConfigId
        storeId
        transactionId
        confirmationId
        customerId
        paymentMethod
        rmaId
        itemId
        amount
        status
        confirmationDate
        itemQuantity
        createdBy
        approvedBy
        metadata
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      storeCredit {
        id
        rmaId
        itemId
        orderId
        customerId
        currencyCode
        storeConfigId
        reason
        type
        storeCreditId
        creationDate
        startDate
        expirationDate
        amount
        quantity
        status
        approvedBy
        metadata
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      status
      storeConfigId
      worksheetId
      fulfillmentStatus
      shipping {
        id
        packageID
        quantity
        status
        __typename
      }
      approvedBy
      action
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      rMAReplacementRefundId
      rMAReplacementStoreCreditId
      __typename
    }
    refund {
      id
      storeConfigId
      storeId
      transactionId
      confirmationId
      customerId
      paymentMethod
      paymentData {
        paymentId
        paymentName
        paymentHolder
        date
        baseTotal
        discount
        tax
        grandTotal
        method
        transactionId
        transactionRef
        authorization
        lastDigits
        firstDigits
        installments
        cardNumber
        plcConversionRate
        __typename
      }
      rmaId
      itemId
      amount
      status
      confirmationDate
      itemQuantity
      createdBy
      approvedBy
      metadata
      attachments {
        type
        URL
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    storeCredit {
      id
      rmaId
      itemId
      orderId
      customerId
      currencyCode
      storeConfigId
      reason
      type
      storeCreditId
      creationDate
      startDate
      expirationDate
      amount
      quantity
      status
      approvedBy
      metadata
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    coupon {
      idCalculatorConfiguration
      name
      beginDateUtc
      endDateUtc
      utmSource
      utmCampaign
      amount
      __typename
    }
    giftcard {
      id
      name
      redemptionCode
      expiringDate
      emissionDate
      amount
      __typename
    }
    attachments {
      type
      URL
      __typename
    }
    action
    transaction {
      transactionId
      status
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    rMAItemResolutionReplacementId
    rMAItemResolutionRefundId
    rMAItemResolutionStoreCreditId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRMAItemResolutionQueryVariables,
  APITypes.GetRMAItemResolutionQuery
>;
export const listRMAItemResolutions = /* GraphQL */ `query ListRMAItemResolutions(
  $id: ID
  $filter: ModelRMAItemResolutionFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listRMAItemResolutions(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      backToStockQuantity
      approved
      type
      quantity
      replacement {
        id
        itemId
        rmaId
        quantity
        status
        storeConfigId
        worksheetId
        fulfillmentStatus
        approvedBy
        action
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        rMAReplacementRefundId
        rMAReplacementStoreCreditId
        __typename
      }
      refund {
        id
        storeConfigId
        storeId
        transactionId
        confirmationId
        customerId
        paymentMethod
        rmaId
        itemId
        amount
        status
        confirmationDate
        itemQuantity
        createdBy
        approvedBy
        metadata
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      storeCredit {
        id
        rmaId
        itemId
        orderId
        customerId
        currencyCode
        storeConfigId
        reason
        type
        storeCreditId
        creationDate
        startDate
        expirationDate
        amount
        quantity
        status
        approvedBy
        metadata
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      coupon {
        idCalculatorConfiguration
        name
        beginDateUtc
        endDateUtc
        utmSource
        utmCampaign
        amount
        __typename
      }
      giftcard {
        id
        name
        redemptionCode
        expiringDate
        emissionDate
        amount
        __typename
      }
      attachments {
        type
        URL
        __typename
      }
      action
      transaction {
        transactionId
        status
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      rMAItemResolutionReplacementId
      rMAItemResolutionRefundId
      rMAItemResolutionStoreCreditId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRMAItemResolutionsQueryVariables,
  APITypes.ListRMAItemResolutionsQuery
>;
export const syncRMAItemResolutions = /* GraphQL */ `query SyncRMAItemResolutions(
  $filter: ModelRMAItemResolutionFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncRMAItemResolutions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      backToStockQuantity
      approved
      type
      quantity
      replacement {
        id
        itemId
        rmaId
        quantity
        status
        storeConfigId
        worksheetId
        fulfillmentStatus
        approvedBy
        action
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        rMAReplacementRefundId
        rMAReplacementStoreCreditId
        __typename
      }
      refund {
        id
        storeConfigId
        storeId
        transactionId
        confirmationId
        customerId
        paymentMethod
        rmaId
        itemId
        amount
        status
        confirmationDate
        itemQuantity
        createdBy
        approvedBy
        metadata
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      storeCredit {
        id
        rmaId
        itemId
        orderId
        customerId
        currencyCode
        storeConfigId
        reason
        type
        storeCreditId
        creationDate
        startDate
        expirationDate
        amount
        quantity
        status
        approvedBy
        metadata
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      coupon {
        idCalculatorConfiguration
        name
        beginDateUtc
        endDateUtc
        utmSource
        utmCampaign
        amount
        __typename
      }
      giftcard {
        id
        name
        redemptionCode
        expiringDate
        emissionDate
        amount
        __typename
      }
      attachments {
        type
        URL
        __typename
      }
      action
      transaction {
        transactionId
        status
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      rMAItemResolutionReplacementId
      rMAItemResolutionRefundId
      rMAItemResolutionStoreCreditId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncRMAItemResolutionsQueryVariables,
  APITypes.SyncRMAItemResolutionsQuery
>;
export const getRMATransaction = /* GraphQL */ `query GetRMATransaction($id: ID!) {
  getRMATransaction(id: $id) {
    id
    transactionId
    rmaId
    orderId
    itemId
    type
    action
    description
    createdBy
    account
    amount
    creationDate
    status
    data
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRMATransactionQueryVariables,
  APITypes.GetRMATransactionQuery
>;
export const listRMATransactions = /* GraphQL */ `query ListRMATransactions(
  $id: ID
  $filter: ModelRMATransactionFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listRMATransactions(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      transactionId
      rmaId
      orderId
      itemId
      type
      action
      description
      createdBy
      account
      amount
      creationDate
      status
      data
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRMATransactionsQueryVariables,
  APITypes.ListRMATransactionsQuery
>;
export const syncRMATransactions = /* GraphQL */ `query SyncRMATransactions(
  $filter: ModelRMATransactionFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncRMATransactions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      transactionId
      rmaId
      orderId
      itemId
      type
      action
      description
      createdBy
      account
      amount
      creationDate
      status
      data
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncRMATransactionsQueryVariables,
  APITypes.SyncRMATransactionsQuery
>;
export const rMATransactionsByRmaId = /* GraphQL */ `query RMATransactionsByRmaId(
  $rmaId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRMATransactionFilterInput
  $limit: Int
  $nextToken: String
) {
  rMATransactionsByRmaId(
    rmaId: $rmaId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      transactionId
      rmaId
      orderId
      itemId
      type
      action
      description
      createdBy
      account
      amount
      creationDate
      status
      data
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RMATransactionsByRmaIdQueryVariables,
  APITypes.RMATransactionsByRmaIdQuery
>;
export const getRMAHistory = /* GraphQL */ `query GetRMAHistory($id: ID!) {
  getRMAHistory(id: $id) {
    id
    rmaId
    lastStatus
    rmaStatus
    source
    user
    description
    metadata
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRMAHistoryQueryVariables,
  APITypes.GetRMAHistoryQuery
>;
export const listRMAHistories = /* GraphQL */ `query ListRMAHistories(
  $id: ID
  $filter: ModelRMAHistoryFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listRMAHistories(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      rmaId
      lastStatus
      rmaStatus
      source
      user
      description
      metadata
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRMAHistoriesQueryVariables,
  APITypes.ListRMAHistoriesQuery
>;
export const syncRMAHistories = /* GraphQL */ `query SyncRMAHistories(
  $filter: ModelRMAHistoryFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncRMAHistories(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      rmaId
      lastStatus
      rmaStatus
      source
      user
      description
      metadata
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncRMAHistoriesQueryVariables,
  APITypes.SyncRMAHistoriesQuery
>;
export const rMAHistoriesByRmaIdAndCreatedAt = /* GraphQL */ `query RMAHistoriesByRmaIdAndCreatedAt(
  $rmaId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelRMAHistoryFilterInput
  $limit: Int
  $nextToken: String
) {
  rMAHistoriesByRmaIdAndCreatedAt(
    rmaId: $rmaId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      rmaId
      lastStatus
      rmaStatus
      source
      user
      description
      metadata
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RMAHistoriesByRmaIdAndCreatedAtQueryVariables,
  APITypes.RMAHistoriesByRmaIdAndCreatedAtQuery
>;
export const getRMASettings = /* GraphQL */ `query GetRMASettings($id: ID!) {
  getRMASettings(id: $id) {
    id
    active
    storeConfigId
    hostname
    parentAccount
    rmaIdFormat {
      prefix
      suffix
      separator
      __typename
    }
    rmaStatus {
      id
      name
      description
      color
      active
      __typename
    }
    tags
    policies {
      items {
        id
        name
        type
        description
        storeConfigId
        rmaSettingsId
        active
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        rMAPoliciesGroupId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    forms {
      items {
        id
        rmaSettingId
        title
        description
        website_url
        finalInstructions
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        rMAFormsPolicyGroupId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    perks {
      items {
        id
        storeConfigId
        rmaSettingsId
        name
        description
        type
        active
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    returnReasons {
      items {
        id
        priority
        rmaSettingsId
        name
        description
        type
        active
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    automations {
      items {
        id
        name
        seller
        model
        facilities
        typeMethod
        createdAt
        isActive
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    termsAndConditions {
      title
      description
      url
      __typename
    }
    deliveryMethods {
      items {
        id
        rmaSettingsId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    logistics {
      items {
        id
        rmaSettingsId
        name
        office
        city
        country
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    iaSetting {
      active
      language
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRMASettingsQueryVariables,
  APITypes.GetRMASettingsQuery
>;
export const listRMASettings = /* GraphQL */ `query ListRMASettings(
  $id: ID
  $filter: ModelRMASettingsFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listRMASettings(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      active
      storeConfigId
      hostname
      parentAccount
      rmaIdFormat {
        prefix
        suffix
        separator
        __typename
      }
      rmaStatus {
        id
        name
        description
        color
        active
        __typename
      }
      tags
      policies {
        nextToken
        startedAt
        __typename
      }
      forms {
        nextToken
        startedAt
        __typename
      }
      perks {
        nextToken
        startedAt
        __typename
      }
      returnReasons {
        nextToken
        startedAt
        __typename
      }
      automations {
        nextToken
        startedAt
        __typename
      }
      termsAndConditions {
        title
        description
        url
        __typename
      }
      deliveryMethods {
        nextToken
        startedAt
        __typename
      }
      logistics {
        nextToken
        startedAt
        __typename
      }
      iaSetting {
        active
        language
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRMASettingsQueryVariables,
  APITypes.ListRMASettingsQuery
>;
export const syncRMASettings = /* GraphQL */ `query SyncRMASettings(
  $filter: ModelRMASettingsFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncRMASettings(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      active
      storeConfigId
      hostname
      parentAccount
      rmaIdFormat {
        prefix
        suffix
        separator
        __typename
      }
      rmaStatus {
        id
        name
        description
        color
        active
        __typename
      }
      tags
      policies {
        nextToken
        startedAt
        __typename
      }
      forms {
        nextToken
        startedAt
        __typename
      }
      perks {
        nextToken
        startedAt
        __typename
      }
      returnReasons {
        nextToken
        startedAt
        __typename
      }
      automations {
        nextToken
        startedAt
        __typename
      }
      termsAndConditions {
        title
        description
        url
        __typename
      }
      deliveryMethods {
        nextToken
        startedAt
        __typename
      }
      logistics {
        nextToken
        startedAt
        __typename
      }
      iaSetting {
        active
        language
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncRMASettingsQueryVariables,
  APITypes.SyncRMASettingsQuery
>;
export const rMASettingsByHostname = /* GraphQL */ `query RMASettingsByHostname(
  $hostname: String!
  $sortDirection: ModelSortDirection
  $filter: ModelRMASettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  rMASettingsByHostname(
    hostname: $hostname
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      active
      storeConfigId
      hostname
      parentAccount
      rmaIdFormat {
        prefix
        suffix
        separator
        __typename
      }
      rmaStatus {
        id
        name
        description
        color
        active
        __typename
      }
      tags
      policies {
        nextToken
        startedAt
        __typename
      }
      forms {
        nextToken
        startedAt
        __typename
      }
      perks {
        nextToken
        startedAt
        __typename
      }
      returnReasons {
        nextToken
        startedAt
        __typename
      }
      automations {
        nextToken
        startedAt
        __typename
      }
      termsAndConditions {
        title
        description
        url
        __typename
      }
      deliveryMethods {
        nextToken
        startedAt
        __typename
      }
      logistics {
        nextToken
        startedAt
        __typename
      }
      iaSetting {
        active
        language
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RMASettingsByHostnameQueryVariables,
  APITypes.RMASettingsByHostnameQuery
>;
export const getRMAPolicies = /* GraphQL */ `query GetRMAPolicies($id: ID!) {
  getRMAPolicies(id: $id) {
    id
    name
    type
    description
    storeConfigId
    rmaSettingsId
    group {
      id
      storeConfigId
      rmaSettingsId
      name
      description
      active
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    active
    rules {
      items {
        id
        rmaPolicyId
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    rMAPoliciesGroupId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRMAPoliciesQueryVariables,
  APITypes.GetRMAPoliciesQuery
>;
export const listRMAPolicies = /* GraphQL */ `query ListRMAPolicies(
  $id: ID
  $filter: ModelRMAPoliciesFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listRMAPolicies(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      type
      description
      storeConfigId
      rmaSettingsId
      group {
        id
        storeConfigId
        rmaSettingsId
        name
        description
        active
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      active
      rules {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      rMAPoliciesGroupId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRMAPoliciesQueryVariables,
  APITypes.ListRMAPoliciesQuery
>;
export const syncRMAPolicies = /* GraphQL */ `query SyncRMAPolicies(
  $filter: ModelRMAPoliciesFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncRMAPolicies(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      type
      description
      storeConfigId
      rmaSettingsId
      group {
        id
        storeConfigId
        rmaSettingsId
        name
        description
        active
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      active
      rules {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      rMAPoliciesGroupId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncRMAPoliciesQueryVariables,
  APITypes.SyncRMAPoliciesQuery
>;
export const rMAPoliciesByRmaSettingsId = /* GraphQL */ `query RMAPoliciesByRmaSettingsId(
  $rmaSettingsId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRMAPoliciesFilterInput
  $limit: Int
  $nextToken: String
) {
  rMAPoliciesByRmaSettingsId(
    rmaSettingsId: $rmaSettingsId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      type
      description
      storeConfigId
      rmaSettingsId
      group {
        id
        storeConfigId
        rmaSettingsId
        name
        description
        active
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      active
      rules {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      rMAPoliciesGroupId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RMAPoliciesByRmaSettingsIdQueryVariables,
  APITypes.RMAPoliciesByRmaSettingsIdQuery
>;
export const getRMAPoliciesRules = /* GraphQL */ `query GetRMAPoliciesRules($id: ID!) {
  getRMAPoliciesRules(id: $id) {
    id
    rmaPolicyId
    name
    query {
      not
      field
      value
      operator
      combinator
      rules
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRMAPoliciesRulesQueryVariables,
  APITypes.GetRMAPoliciesRulesQuery
>;
export const listRMAPoliciesRules = /* GraphQL */ `query ListRMAPoliciesRules(
  $id: ID
  $filter: ModelRMAPoliciesRulesFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listRMAPoliciesRules(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      rmaPolicyId
      name
      query {
        not
        field
        value
        operator
        combinator
        rules
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRMAPoliciesRulesQueryVariables,
  APITypes.ListRMAPoliciesRulesQuery
>;
export const syncRMAPoliciesRules = /* GraphQL */ `query SyncRMAPoliciesRules(
  $filter: ModelRMAPoliciesRulesFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncRMAPoliciesRules(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      rmaPolicyId
      name
      query {
        not
        field
        value
        operator
        combinator
        rules
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncRMAPoliciesRulesQueryVariables,
  APITypes.SyncRMAPoliciesRulesQuery
>;
export const rMAPoliciesRulesByRmaPolicyId = /* GraphQL */ `query RMAPoliciesRulesByRmaPolicyId(
  $rmaPolicyId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRMAPoliciesRulesFilterInput
  $limit: Int
  $nextToken: String
) {
  rMAPoliciesRulesByRmaPolicyId(
    rmaPolicyId: $rmaPolicyId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      rmaPolicyId
      name
      query {
        not
        field
        value
        operator
        combinator
        rules
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RMAPoliciesRulesByRmaPolicyIdQueryVariables,
  APITypes.RMAPoliciesRulesByRmaPolicyIdQuery
>;
export const getRMAPoliciesGroup = /* GraphQL */ `query GetRMAPoliciesGroup($id: ID!) {
  getRMAPoliciesGroup(id: $id) {
    id
    storeConfigId
    rmaSettingsId
    name
    description
    active
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRMAPoliciesGroupQueryVariables,
  APITypes.GetRMAPoliciesGroupQuery
>;
export const listRMAPoliciesGroups = /* GraphQL */ `query ListRMAPoliciesGroups(
  $id: ID
  $filter: ModelRMAPoliciesGroupFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listRMAPoliciesGroups(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      storeConfigId
      rmaSettingsId
      name
      description
      active
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRMAPoliciesGroupsQueryVariables,
  APITypes.ListRMAPoliciesGroupsQuery
>;
export const syncRMAPoliciesGroups = /* GraphQL */ `query SyncRMAPoliciesGroups(
  $filter: ModelRMAPoliciesGroupFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncRMAPoliciesGroups(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      storeConfigId
      rmaSettingsId
      name
      description
      active
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncRMAPoliciesGroupsQueryVariables,
  APITypes.SyncRMAPoliciesGroupsQuery
>;
export const getRMAForms = /* GraphQL */ `query GetRMAForms($id: ID!) {
  getRMAForms(id: $id) {
    id
    rmaSettingId
    title
    description
    website_url
    returnReasons {
      items {
        id
        priority
        rmaSettingsId
        name
        description
        type
        active
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    policyGroup {
      id
      storeConfigId
      rmaSettingsId
      name
      description
      active
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    fields {
      id
      name
      type
      required
      options
      metadata
      __typename
    }
    finalInstructions
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    rMAFormsPolicyGroupId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRMAFormsQueryVariables,
  APITypes.GetRMAFormsQuery
>;
export const listRMAForms = /* GraphQL */ `query ListRMAForms(
  $id: ID
  $filter: ModelRMAFormsFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listRMAForms(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      rmaSettingId
      title
      description
      website_url
      returnReasons {
        nextToken
        startedAt
        __typename
      }
      policyGroup {
        id
        storeConfigId
        rmaSettingsId
        name
        description
        active
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      fields {
        id
        name
        type
        required
        options
        metadata
        __typename
      }
      finalInstructions
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      rMAFormsPolicyGroupId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRMAFormsQueryVariables,
  APITypes.ListRMAFormsQuery
>;
export const syncRMAForms = /* GraphQL */ `query SyncRMAForms(
  $filter: ModelRMAFormsFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncRMAForms(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      rmaSettingId
      title
      description
      website_url
      returnReasons {
        nextToken
        startedAt
        __typename
      }
      policyGroup {
        id
        storeConfigId
        rmaSettingsId
        name
        description
        active
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      fields {
        id
        name
        type
        required
        options
        metadata
        __typename
      }
      finalInstructions
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      rMAFormsPolicyGroupId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncRMAFormsQueryVariables,
  APITypes.SyncRMAFormsQuery
>;
export const rMAFormsByRmaSettingId = /* GraphQL */ `query RMAFormsByRmaSettingId(
  $rmaSettingId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRMAFormsFilterInput
  $limit: Int
  $nextToken: String
) {
  rMAFormsByRmaSettingId(
    rmaSettingId: $rmaSettingId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      rmaSettingId
      title
      description
      website_url
      returnReasons {
        nextToken
        startedAt
        __typename
      }
      policyGroup {
        id
        storeConfigId
        rmaSettingsId
        name
        description
        active
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      fields {
        id
        name
        type
        required
        options
        metadata
        __typename
      }
      finalInstructions
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      rMAFormsPolicyGroupId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RMAFormsByRmaSettingIdQueryVariables,
  APITypes.RMAFormsByRmaSettingIdQuery
>;
export const getRMAPerks = /* GraphQL */ `query GetRMAPerks($id: ID!) {
  getRMAPerks(id: $id) {
    id
    storeConfigId
    rmaSettingsId
    name
    description
    type
    rules {
      id
      name
      seller
      model
      facilities
      typeMethod
      createdAt
      actions {
        action
        field
        value
        model
        metadata
        __typename
      }
      query {
        not
        field
        value
        operator
        combinator
        rules
        __typename
      }
      isActive
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    active
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRMAPerksQueryVariables,
  APITypes.GetRMAPerksQuery
>;
export const listRMAPerks = /* GraphQL */ `query ListRMAPerks(
  $id: ID
  $filter: ModelRMAPerksFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listRMAPerks(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      storeConfigId
      rmaSettingsId
      name
      description
      type
      rules {
        id
        name
        seller
        model
        facilities
        typeMethod
        createdAt
        isActive
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      active
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRMAPerksQueryVariables,
  APITypes.ListRMAPerksQuery
>;
export const syncRMAPerks = /* GraphQL */ `query SyncRMAPerks(
  $filter: ModelRMAPerksFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncRMAPerks(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      storeConfigId
      rmaSettingsId
      name
      description
      type
      rules {
        id
        name
        seller
        model
        facilities
        typeMethod
        createdAt
        isActive
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      active
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncRMAPerksQueryVariables,
  APITypes.SyncRMAPerksQuery
>;
export const rMAPerksByRmaSettingsId = /* GraphQL */ `query RMAPerksByRmaSettingsId(
  $rmaSettingsId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRMAPerksFilterInput
  $limit: Int
  $nextToken: String
) {
  rMAPerksByRmaSettingsId(
    rmaSettingsId: $rmaSettingsId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      storeConfigId
      rmaSettingsId
      name
      description
      type
      rules {
        id
        name
        seller
        model
        facilities
        typeMethod
        createdAt
        isActive
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      active
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RMAPerksByRmaSettingsIdQueryVariables,
  APITypes.RMAPerksByRmaSettingsIdQuery
>;
export const getRMAReturnReasons = /* GraphQL */ `query GetRMAReturnReasons($id: ID!) {
  getRMAReturnReasons(id: $id) {
    id
    priority
    rmaSettingsId
    name
    description
    type
    active
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRMAReturnReasonsQueryVariables,
  APITypes.GetRMAReturnReasonsQuery
>;
export const listRMAReturnReasons = /* GraphQL */ `query ListRMAReturnReasons(
  $id: ID
  $filter: ModelRMAReturnReasonsFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listRMAReturnReasons(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      priority
      rmaSettingsId
      name
      description
      type
      active
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRMAReturnReasonsQueryVariables,
  APITypes.ListRMAReturnReasonsQuery
>;
export const syncRMAReturnReasons = /* GraphQL */ `query SyncRMAReturnReasons(
  $filter: ModelRMAReturnReasonsFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncRMAReturnReasons(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      priority
      rmaSettingsId
      name
      description
      type
      active
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncRMAReturnReasonsQueryVariables,
  APITypes.SyncRMAReturnReasonsQuery
>;
export const rMAReturnReasonsByRmaSettingsId = /* GraphQL */ `query RMAReturnReasonsByRmaSettingsId(
  $rmaSettingsId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRMAReturnReasonsFilterInput
  $limit: Int
  $nextToken: String
) {
  rMAReturnReasonsByRmaSettingsId(
    rmaSettingsId: $rmaSettingsId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      priority
      rmaSettingsId
      name
      description
      type
      active
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RMAReturnReasonsByRmaSettingsIdQueryVariables,
  APITypes.RMAReturnReasonsByRmaSettingsIdQuery
>;
export const getRMASettingDeliveryMethod = /* GraphQL */ `query GetRMASettingDeliveryMethod($id: ID!) {
  getRMASettingDeliveryMethod(id: $id) {
    id
    rmaSettingsId
    pickup {
      active
      metadata
      __typename
    }
    deliveryToStore {
      active
      availableStores {
        id
        name
        active
        __typename
      }
      __typename
    }
    deliveryToAddress {
      account
      availableAddress {
        id
        name
        active
        courierId
        courierName
        courierLogo
        __typename
      }
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRMASettingDeliveryMethodQueryVariables,
  APITypes.GetRMASettingDeliveryMethodQuery
>;
export const listRMASettingDeliveryMethods = /* GraphQL */ `query ListRMASettingDeliveryMethods(
  $id: ID
  $filter: ModelRMASettingDeliveryMethodFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listRMASettingDeliveryMethods(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      rmaSettingsId
      pickup {
        active
        metadata
        __typename
      }
      deliveryToStore {
        active
        __typename
      }
      deliveryToAddress {
        account
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRMASettingDeliveryMethodsQueryVariables,
  APITypes.ListRMASettingDeliveryMethodsQuery
>;
export const syncRMASettingDeliveryMethods = /* GraphQL */ `query SyncRMASettingDeliveryMethods(
  $filter: ModelRMASettingDeliveryMethodFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncRMASettingDeliveryMethods(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      rmaSettingsId
      pickup {
        active
        metadata
        __typename
      }
      deliveryToStore {
        active
        __typename
      }
      deliveryToAddress {
        account
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncRMASettingDeliveryMethodsQueryVariables,
  APITypes.SyncRMASettingDeliveryMethodsQuery
>;
export const rMASettingDeliveryMethodsByRmaSettingsId = /* GraphQL */ `query RMASettingDeliveryMethodsByRmaSettingsId(
  $rmaSettingsId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRMASettingDeliveryMethodFilterInput
  $limit: Int
  $nextToken: String
) {
  rMASettingDeliveryMethodsByRmaSettingsId(
    rmaSettingsId: $rmaSettingsId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      rmaSettingsId
      pickup {
        active
        metadata
        __typename
      }
      deliveryToStore {
        active
        __typename
      }
      deliveryToAddress {
        account
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RMASettingDeliveryMethodsByRmaSettingsIdQueryVariables,
  APITypes.RMASettingDeliveryMethodsByRmaSettingsIdQuery
>;
export const getRMALogistics = /* GraphQL */ `query GetRMALogistics($id: ID!) {
  getRMALogistics(id: $id) {
    id
    rmaSettingsId
    name
    office
    city
    country
    hours {
      name
      weekDay
      initialHour
      finalHour
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRMALogisticsQueryVariables,
  APITypes.GetRMALogisticsQuery
>;
export const listRMALogistics = /* GraphQL */ `query ListRMALogistics(
  $id: ID
  $filter: ModelRMALogisticsFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listRMALogistics(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      rmaSettingsId
      name
      office
      city
      country
      hours {
        name
        weekDay
        initialHour
        finalHour
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRMALogisticsQueryVariables,
  APITypes.ListRMALogisticsQuery
>;
export const syncRMALogistics = /* GraphQL */ `query SyncRMALogistics(
  $filter: ModelRMALogisticsFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncRMALogistics(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      rmaSettingsId
      name
      office
      city
      country
      hours {
        name
        weekDay
        initialHour
        finalHour
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncRMALogisticsQueryVariables,
  APITypes.SyncRMALogisticsQuery
>;
export const rMALogisticsByRmaSettingsId = /* GraphQL */ `query RMALogisticsByRmaSettingsId(
  $rmaSettingsId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRMALogisticsFilterInput
  $limit: Int
  $nextToken: String
) {
  rMALogisticsByRmaSettingsId(
    rmaSettingsId: $rmaSettingsId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      rmaSettingsId
      name
      office
      city
      country
      hours {
        name
        weekDay
        initialHour
        finalHour
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RMALogisticsByRmaSettingsIdQueryVariables,
  APITypes.RMALogisticsByRmaSettingsIdQuery
>;
export const getSalesChannel = /* GraphQL */ `query GetSalesChannel($id: ID!) {
  getSalesChannel(id: $id) {
    groups
    id
    name
    salesSource {
      items {
        groups
        id
        warehouseId
        warehouseName
        type
        downloadOrders
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        salesChannelSalesSourceId
        storeConfigSalesSourcesId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    account {
      groups
      id
      name
      activeAccount
      isVtexAccount
      salesChannels {
        nextToken
        startedAt
        __typename
      }
      storeConfig {
        nextToken
        startedAt
        __typename
      }
      maxMonthlyOrders
      actualOrders
      configuration {
        key
        __typename
      }
      country
      demo
      contract
      logo
      email
      contact
      pro
      plan {
        id
        name
        description
        ppo
        appo
        orders
        maxOrders
        initialDate
        validUntil
        active
        metadata
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    type
    isActive
    paymentMethods
    shippingMethods
    shippingTypes
    commercialPolicies
    orderTags
    packages {
      id
      type
      name
      description
      code
      dimensions {
        width
        height
        length
        weight
        cubicweight
        __typename
      }
      __typename
    }
    globalOrders
    localOrders
    pickingMethod
    allowQuickCollection
    allowOrderNotes
    allowItemNotes
    allowAutomaticPacking
    allowMultiPicking
    allowExpressFulfillment
    allowWorksheetsReAssign
    allowStartedWorksheetsReAssign
    allowPackagesReport
    allowItemTransfers
    autoAcceptIncomingTransfers
    enableWorksheetsNotes
    enableReplacementOptions
    enableSupportChat
    needsApproval
    changesConfig {
      allowAddItems
      allowLimitOrderTotalChanges
      allowPriceChanges
      allowQuantityChanges
      allowItemReplacements
      allowItemRejections
      sendChangesToVtexOms
      itemChangesPriceThreshold
      itemChangesQuantityThreshold
      orderChangesTotalThreshold
      rejectionReasons {
        key
        Value
        __typename
      }
      replacementReasons {
        key
        Value
        __typename
      }
      priceChangeReasons {
        key
        Value
        __typename
      }
      __typename
    }
    preparationTime
    webhooks {
      items {
        id
        salesChannelId
        active
        type
        url
        restType
        facilities
        showItems
        showChanges
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    dynamicBarcodes {
      allowDynamicBarcodes
      productIdAsNumber
      weight {
        __typename
      }
      price {
        __typename
      }
      quantity {
        __typename
      }
      __typename
    }
    printing {
      comanda {
        active
        fontSize
        __typename
      }
      packages {
        active
        fontSize
        __typename
      }
      delivery {
        active
        fontSize
        __typename
      }
      __typename
    }
    isMigratedFromFulfillment
    itemsLocation {
      active
      fields {
        id
        label
        type
        __typename
      }
      codeFormat {
        id
        characters
        order
        __typename
      }
      separator
      categoryLink
      brandLink
      __typename
    }
    itemInformation
    showOrdersInfoTab
    showCustomerInfoPerOrder
    askPickingConfirmation
    forceConfirmEANs
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    accountSalesChannelsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSalesChannelQueryVariables,
  APITypes.GetSalesChannelQuery
>;
export const listSalesChannels = /* GraphQL */ `query ListSalesChannels(
  $id: ID
  $filter: ModelSalesChannelFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listSalesChannels(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      groups
      id
      name
      salesSource {
        nextToken
        startedAt
        __typename
      }
      account {
        groups
        id
        name
        activeAccount
        isVtexAccount
        maxMonthlyOrders
        actualOrders
        country
        demo
        contract
        logo
        email
        contact
        pro
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      type
      isActive
      paymentMethods
      shippingMethods
      shippingTypes
      commercialPolicies
      orderTags
      packages {
        id
        type
        name
        description
        code
        __typename
      }
      globalOrders
      localOrders
      pickingMethod
      allowQuickCollection
      allowOrderNotes
      allowItemNotes
      allowAutomaticPacking
      allowMultiPicking
      allowExpressFulfillment
      allowWorksheetsReAssign
      allowStartedWorksheetsReAssign
      allowPackagesReport
      allowItemTransfers
      autoAcceptIncomingTransfers
      enableWorksheetsNotes
      enableReplacementOptions
      enableSupportChat
      needsApproval
      changesConfig {
        allowAddItems
        allowLimitOrderTotalChanges
        allowPriceChanges
        allowQuantityChanges
        allowItemReplacements
        allowItemRejections
        sendChangesToVtexOms
        itemChangesPriceThreshold
        itemChangesQuantityThreshold
        orderChangesTotalThreshold
        __typename
      }
      preparationTime
      webhooks {
        nextToken
        startedAt
        __typename
      }
      dynamicBarcodes {
        allowDynamicBarcodes
        productIdAsNumber
        __typename
      }
      printing {
        __typename
      }
      isMigratedFromFulfillment
      itemsLocation {
        active
        separator
        categoryLink
        brandLink
        __typename
      }
      itemInformation
      showOrdersInfoTab
      showCustomerInfoPerOrder
      askPickingConfirmation
      forceConfirmEANs
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      accountSalesChannelsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSalesChannelsQueryVariables,
  APITypes.ListSalesChannelsQuery
>;
export const syncSalesChannels = /* GraphQL */ `query SyncSalesChannels(
  $filter: ModelSalesChannelFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncSalesChannels(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      groups
      id
      name
      salesSource {
        nextToken
        startedAt
        __typename
      }
      account {
        groups
        id
        name
        activeAccount
        isVtexAccount
        maxMonthlyOrders
        actualOrders
        country
        demo
        contract
        logo
        email
        contact
        pro
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      type
      isActive
      paymentMethods
      shippingMethods
      shippingTypes
      commercialPolicies
      orderTags
      packages {
        id
        type
        name
        description
        code
        __typename
      }
      globalOrders
      localOrders
      pickingMethod
      allowQuickCollection
      allowOrderNotes
      allowItemNotes
      allowAutomaticPacking
      allowMultiPicking
      allowExpressFulfillment
      allowWorksheetsReAssign
      allowStartedWorksheetsReAssign
      allowPackagesReport
      allowItemTransfers
      autoAcceptIncomingTransfers
      enableWorksheetsNotes
      enableReplacementOptions
      enableSupportChat
      needsApproval
      changesConfig {
        allowAddItems
        allowLimitOrderTotalChanges
        allowPriceChanges
        allowQuantityChanges
        allowItemReplacements
        allowItemRejections
        sendChangesToVtexOms
        itemChangesPriceThreshold
        itemChangesQuantityThreshold
        orderChangesTotalThreshold
        __typename
      }
      preparationTime
      webhooks {
        nextToken
        startedAt
        __typename
      }
      dynamicBarcodes {
        allowDynamicBarcodes
        productIdAsNumber
        __typename
      }
      printing {
        __typename
      }
      isMigratedFromFulfillment
      itemsLocation {
        active
        separator
        categoryLink
        brandLink
        __typename
      }
      itemInformation
      showOrdersInfoTab
      showCustomerInfoPerOrder
      askPickingConfirmation
      forceConfirmEANs
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      accountSalesChannelsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncSalesChannelsQueryVariables,
  APITypes.SyncSalesChannelsQuery
>;
export const getService = /* GraphQL */ `query GetService($id: ID!) {
  getService(id: $id) {
    id
    orderId
    carrierId
    serviceId
    carrierLogo
    carrierName
    seller
    status
    labels {
      items {
        id
        serviceID
        url
        name
        type
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    sender {
      name
      phone
      email
      city
      state
      country
      neighborhood
      address
      addressComplement
      reference
      number
      location {
        latitude
        longitude
        __typename
      }
      pickupDate
      deliveryWindow {
        name
        initialDate
        finalDate
        __typename
      }
      zipCode
      __typename
    }
    receiver {
      name
      phone
      email
      city
      state
      country
      neighborhood
      address
      addressComplement
      reference
      number
      location {
        latitude
        longitude
        __typename
      }
      identification
      deliveryDate
      deliveryWindow {
        name
        initialDate
        finalDate
        __typename
      }
      contactName
      zipCode
      __typename
    }
    agent {
      id
      name
      identification
      phone
      email
      vehicle
      __typename
    }
    trackingUrl
    totalDistanceTraveled
    rating
    comments
    evidences {
      type
      content
      date
      author
      __typename
    }
    packages {
      id
      orderId
      envelope
      dimensions {
        width
        height
        length
        __typename
      }
      weight
      totalValue
      items {
        id
        name
        ean
        refId
        image
        type
        price
        weight
        quantity
        __typename
      }
      categories
      description
      __typename
    }
    timeline {
      items {
        id
        serviceID
        type
        date
        description
        author
        metaData
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    type
    notes {
      type
      date
      content
      author
      __typename
    }
    orderValue
    paymentMethod
    carrierServiceType
    rate {
      shippingPrice {
        currency
        value
        __typename
      }
      insurancePrice {
        currency
        value
        __typename
      }
      __typename
    }
    shippingEstimatedDate
    shippingFinishedDate
    metaData
    timezone {
      offset
      value
      label
      __typename
    }
    tags
    appliedAutomations {
      automationId
      action
      value
      lastInvocation
      status
      requestId
      metadata
      __typename
    }
    deliveredDate
    collection {
      confirmationDate
      code
      __typename
    }
    transferManagement {
      fromService
      newService
      storeConfig {
        storeConfigOrigin
        storeConfigDestination
        salesSourceNameOrigin
        salesSourceNameDestination
        salesChannelNameOrigin
        salesChannelNameDestination
        __typename
      }
      __typename
    }
    rmaId
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetServiceQueryVariables,
  APITypes.GetServiceQuery
>;
export const listServices = /* GraphQL */ `query ListServices(
  $id: ID
  $filter: ModelServiceFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listServices(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      orderId
      carrierId
      serviceId
      carrierLogo
      carrierName
      seller
      status
      labels {
        nextToken
        startedAt
        __typename
      }
      sender {
        name
        phone
        email
        city
        state
        country
        neighborhood
        address
        addressComplement
        reference
        number
        pickupDate
        zipCode
        __typename
      }
      receiver {
        name
        phone
        email
        city
        state
        country
        neighborhood
        address
        addressComplement
        reference
        number
        identification
        deliveryDate
        contactName
        zipCode
        __typename
      }
      agent {
        id
        name
        identification
        phone
        email
        vehicle
        __typename
      }
      trackingUrl
      totalDistanceTraveled
      rating
      comments
      evidences {
        type
        content
        date
        author
        __typename
      }
      packages {
        id
        orderId
        envelope
        weight
        totalValue
        categories
        description
        __typename
      }
      timeline {
        nextToken
        startedAt
        __typename
      }
      type
      notes {
        type
        date
        content
        author
        __typename
      }
      orderValue
      paymentMethod
      carrierServiceType
      rate {
        __typename
      }
      shippingEstimatedDate
      shippingFinishedDate
      metaData
      timezone {
        offset
        value
        label
        __typename
      }
      tags
      appliedAutomations {
        automationId
        action
        value
        lastInvocation
        status
        requestId
        metadata
        __typename
      }
      deliveredDate
      collection {
        confirmationDate
        code
        __typename
      }
      transferManagement {
        fromService
        newService
        __typename
      }
      rmaId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListServicesQueryVariables,
  APITypes.ListServicesQuery
>;
export const syncServices = /* GraphQL */ `query SyncServices(
  $filter: ModelServiceFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncServices(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      orderId
      carrierId
      serviceId
      carrierLogo
      carrierName
      seller
      status
      labels {
        nextToken
        startedAt
        __typename
      }
      sender {
        name
        phone
        email
        city
        state
        country
        neighborhood
        address
        addressComplement
        reference
        number
        pickupDate
        zipCode
        __typename
      }
      receiver {
        name
        phone
        email
        city
        state
        country
        neighborhood
        address
        addressComplement
        reference
        number
        identification
        deliveryDate
        contactName
        zipCode
        __typename
      }
      agent {
        id
        name
        identification
        phone
        email
        vehicle
        __typename
      }
      trackingUrl
      totalDistanceTraveled
      rating
      comments
      evidences {
        type
        content
        date
        author
        __typename
      }
      packages {
        id
        orderId
        envelope
        weight
        totalValue
        categories
        description
        __typename
      }
      timeline {
        nextToken
        startedAt
        __typename
      }
      type
      notes {
        type
        date
        content
        author
        __typename
      }
      orderValue
      paymentMethod
      carrierServiceType
      rate {
        __typename
      }
      shippingEstimatedDate
      shippingFinishedDate
      metaData
      timezone {
        offset
        value
        label
        __typename
      }
      tags
      appliedAutomations {
        automationId
        action
        value
        lastInvocation
        status
        requestId
        metadata
        __typename
      }
      deliveredDate
      collection {
        confirmationDate
        code
        __typename
      }
      transferManagement {
        fromService
        newService
        __typename
      }
      rmaId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncServicesQueryVariables,
  APITypes.SyncServicesQuery
>;
export const servicesByOrderId = /* GraphQL */ `query ServicesByOrderId(
  $orderId: String!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelServiceFilterInput
  $limit: Int
  $nextToken: String
) {
  servicesByOrderId(
    orderId: $orderId
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      orderId
      carrierId
      serviceId
      carrierLogo
      carrierName
      seller
      status
      labels {
        nextToken
        startedAt
        __typename
      }
      sender {
        name
        phone
        email
        city
        state
        country
        neighborhood
        address
        addressComplement
        reference
        number
        pickupDate
        zipCode
        __typename
      }
      receiver {
        name
        phone
        email
        city
        state
        country
        neighborhood
        address
        addressComplement
        reference
        number
        identification
        deliveryDate
        contactName
        zipCode
        __typename
      }
      agent {
        id
        name
        identification
        phone
        email
        vehicle
        __typename
      }
      trackingUrl
      totalDistanceTraveled
      rating
      comments
      evidences {
        type
        content
        date
        author
        __typename
      }
      packages {
        id
        orderId
        envelope
        weight
        totalValue
        categories
        description
        __typename
      }
      timeline {
        nextToken
        startedAt
        __typename
      }
      type
      notes {
        type
        date
        content
        author
        __typename
      }
      orderValue
      paymentMethod
      carrierServiceType
      rate {
        __typename
      }
      shippingEstimatedDate
      shippingFinishedDate
      metaData
      timezone {
        offset
        value
        label
        __typename
      }
      tags
      appliedAutomations {
        automationId
        action
        value
        lastInvocation
        status
        requestId
        metadata
        __typename
      }
      deliveredDate
      collection {
        confirmationDate
        code
        __typename
      }
      transferManagement {
        fromService
        newService
        __typename
      }
      rmaId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ServicesByOrderIdQueryVariables,
  APITypes.ServicesByOrderIdQuery
>;
export const servicesByCarrierId = /* GraphQL */ `query ServicesByCarrierId(
  $carrierId: String!
  $sortDirection: ModelSortDirection
  $filter: ModelServiceFilterInput
  $limit: Int
  $nextToken: String
) {
  servicesByCarrierId(
    carrierId: $carrierId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      orderId
      carrierId
      serviceId
      carrierLogo
      carrierName
      seller
      status
      labels {
        nextToken
        startedAt
        __typename
      }
      sender {
        name
        phone
        email
        city
        state
        country
        neighborhood
        address
        addressComplement
        reference
        number
        pickupDate
        zipCode
        __typename
      }
      receiver {
        name
        phone
        email
        city
        state
        country
        neighborhood
        address
        addressComplement
        reference
        number
        identification
        deliveryDate
        contactName
        zipCode
        __typename
      }
      agent {
        id
        name
        identification
        phone
        email
        vehicle
        __typename
      }
      trackingUrl
      totalDistanceTraveled
      rating
      comments
      evidences {
        type
        content
        date
        author
        __typename
      }
      packages {
        id
        orderId
        envelope
        weight
        totalValue
        categories
        description
        __typename
      }
      timeline {
        nextToken
        startedAt
        __typename
      }
      type
      notes {
        type
        date
        content
        author
        __typename
      }
      orderValue
      paymentMethod
      carrierServiceType
      rate {
        __typename
      }
      shippingEstimatedDate
      shippingFinishedDate
      metaData
      timezone {
        offset
        value
        label
        __typename
      }
      tags
      appliedAutomations {
        automationId
        action
        value
        lastInvocation
        status
        requestId
        metadata
        __typename
      }
      deliveredDate
      collection {
        confirmationDate
        code
        __typename
      }
      transferManagement {
        fromService
        newService
        __typename
      }
      rmaId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ServicesByCarrierIdQueryVariables,
  APITypes.ServicesByCarrierIdQuery
>;
export const getStoreConfig = /* GraphQL */ `query GetStoreConfig($id: ID!) {
  getStoreConfig(id: $id) {
    groups
    id
    name
    general {
      address
      addressComplement
      neighborhood
      postalCode
      reference
      number
      city
      changePricesReasons {
        id
        name
        __typename
      }
      contactInformation {
        email
        name
        phone
        __typename
      }
      country
      deliveryWindow {
        finalHour
        initialHour
        name
        weekDay
        __typename
      }
      location {
        latitude
        longitude
        __typename
      }
      measurementUnit
      name
      replacementReasons {
        id
        name
        __typename
      }
      state
      __typename
    }
    categories {
      id
      priority
      name
      parentId
      hasChildren
      url
      title
      metaTagDescription
      left
      right
      __typename
    }
    batchInterval
    maxItemsPerBatch
    maxItemsPerWorksheet
    salesSources {
      items {
        groups
        id
        warehouseId
        warehouseName
        type
        downloadOrders
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        salesChannelSalesSourceId
        storeConfigSalesSourcesId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    salesChannel
    timezone {
      offset
      value
      label
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    accountStoreConfigId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetStoreConfigQueryVariables,
  APITypes.GetStoreConfigQuery
>;
export const listStoreConfigs = /* GraphQL */ `query ListStoreConfigs(
  $id: ID
  $filter: ModelStoreConfigFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listStoreConfigs(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      groups
      id
      name
      general {
        address
        addressComplement
        neighborhood
        postalCode
        reference
        number
        city
        country
        measurementUnit
        name
        state
        __typename
      }
      categories {
        id
        priority
        name
        parentId
        hasChildren
        url
        title
        metaTagDescription
        left
        right
        __typename
      }
      batchInterval
      maxItemsPerBatch
      maxItemsPerWorksheet
      salesSources {
        nextToken
        startedAt
        __typename
      }
      salesChannel
      timezone {
        offset
        value
        label
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      accountStoreConfigId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStoreConfigsQueryVariables,
  APITypes.ListStoreConfigsQuery
>;
export const syncStoreConfigs = /* GraphQL */ `query SyncStoreConfigs(
  $filter: ModelStoreConfigFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncStoreConfigs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      groups
      id
      name
      general {
        address
        addressComplement
        neighborhood
        postalCode
        reference
        number
        city
        country
        measurementUnit
        name
        state
        __typename
      }
      categories {
        id
        priority
        name
        parentId
        hasChildren
        url
        title
        metaTagDescription
        left
        right
        __typename
      }
      batchInterval
      maxItemsPerBatch
      maxItemsPerWorksheet
      salesSources {
        nextToken
        startedAt
        __typename
      }
      salesChannel
      timezone {
        offset
        value
        label
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      accountStoreConfigId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncStoreConfigsQueryVariables,
  APITypes.SyncStoreConfigsQuery
>;
export const storeConfigBySalesChannel = /* GraphQL */ `query StoreConfigBySalesChannel(
  $salesChannel: String!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelStoreConfigFilterInput
  $limit: Int
  $nextToken: String
) {
  storeConfigBySalesChannel(
    salesChannel: $salesChannel
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      groups
      id
      name
      general {
        address
        addressComplement
        neighborhood
        postalCode
        reference
        number
        city
        country
        measurementUnit
        name
        state
        __typename
      }
      categories {
        id
        priority
        name
        parentId
        hasChildren
        url
        title
        metaTagDescription
        left
        right
        __typename
      }
      batchInterval
      maxItemsPerBatch
      maxItemsPerWorksheet
      salesSources {
        nextToken
        startedAt
        __typename
      }
      salesChannel
      timezone {
        offset
        value
        label
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      accountStoreConfigId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StoreConfigBySalesChannelQueryVariables,
  APITypes.StoreConfigBySalesChannelQuery
>;
export const getTags = /* GraphQL */ `query GetTags($id: ID!, $seller: String!, $model: TagModel!) {
  getTags(id: $id, seller: $seller, model: $model) {
    id
    seller
    model
    tags
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTagsQueryVariables, APITypes.GetTagsQuery>;
export const listTags = /* GraphQL */ `query ListTags(
  $id: ID
  $sellerModel: ModelTagsPrimaryCompositeKeyConditionInput
  $filter: ModelTagsFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listTags(
    id: $id
    sellerModel: $sellerModel
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      seller
      model
      tags
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTagsQueryVariables, APITypes.ListTagsQuery>;
export const syncTags = /* GraphQL */ `query SyncTags(
  $filter: ModelTagsFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncTags(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      seller
      model
      tags
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncTagsQueryVariables, APITypes.SyncTagsQuery>;
export const tagsBySeller = /* GraphQL */ `query TagsBySeller(
  $seller: String!
  $sortDirection: ModelSortDirection
  $filter: ModelTagsFilterInput
  $limit: Int
  $nextToken: String
) {
  tagsBySeller(
    seller: $seller
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      seller
      model
      tags
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TagsBySellerQueryVariables,
  APITypes.TagsBySellerQuery
>;
export const tagsByModel = /* GraphQL */ `query TagsByModel(
  $model: TagModel!
  $sortDirection: ModelSortDirection
  $filter: ModelTagsFilterInput
  $limit: Int
  $nextToken: String
) {
  tagsByModel(
    model: $model
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      seller
      model
      tags
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TagsByModelQueryVariables,
  APITypes.TagsByModelQuery
>;
export const getTrackingLabel = /* GraphQL */ `query GetTrackingLabel($id: ID!) {
  getTrackingLabel(id: $id) {
    id
    serviceID
    url
    name
    type
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTrackingLabelQueryVariables,
  APITypes.GetTrackingLabelQuery
>;
export const listTrackingLabels = /* GraphQL */ `query ListTrackingLabels(
  $id: ID
  $filter: ModelTrackingLabelFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listTrackingLabels(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      serviceID
      url
      name
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTrackingLabelsQueryVariables,
  APITypes.ListTrackingLabelsQuery
>;
export const syncTrackingLabels = /* GraphQL */ `query SyncTrackingLabels(
  $filter: ModelTrackingLabelFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncTrackingLabels(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      serviceID
      url
      name
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncTrackingLabelsQueryVariables,
  APITypes.SyncTrackingLabelsQuery
>;
export const trackingLabelsByServiceID = /* GraphQL */ `query TrackingLabelsByServiceID(
  $serviceID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelTrackingLabelFilterInput
  $limit: Int
  $nextToken: String
) {
  trackingLabelsByServiceID(
    serviceID: $serviceID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      serviceID
      url
      name
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TrackingLabelsByServiceIDQueryVariables,
  APITypes.TrackingLabelsByServiceIDQuery
>;
export const getTrackingSettings = /* GraphQL */ `query GetTrackingSettings($id: ID!) {
  getTrackingSettings(id: $id) {
    id
    account
    country
    city
    state
    address
    additionalAddress
    neighborhood
    number
    reference
    zipCode
    timeZone {
      offset
      value
      label
      __typename
    }
    latitude
    longitude
    contactName
    phone
    email
    authorized
    inheritSettings
    shareCustomerInformationWithCarriers
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTrackingSettingsQueryVariables,
  APITypes.GetTrackingSettingsQuery
>;
export const listTrackingSettings = /* GraphQL */ `query ListTrackingSettings(
  $id: ID
  $filter: ModelTrackingSettingsFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listTrackingSettings(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      account
      country
      city
      state
      address
      additionalAddress
      neighborhood
      number
      reference
      zipCode
      timeZone {
        offset
        value
        label
        __typename
      }
      latitude
      longitude
      contactName
      phone
      email
      authorized
      inheritSettings
      shareCustomerInformationWithCarriers
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTrackingSettingsQueryVariables,
  APITypes.ListTrackingSettingsQuery
>;
export const syncTrackingSettings = /* GraphQL */ `query SyncTrackingSettings(
  $filter: ModelTrackingSettingsFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncTrackingSettings(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      account
      country
      city
      state
      address
      additionalAddress
      neighborhood
      number
      reference
      zipCode
      timeZone {
        offset
        value
        label
        __typename
      }
      latitude
      longitude
      contactName
      phone
      email
      authorized
      inheritSettings
      shareCustomerInformationWithCarriers
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncTrackingSettingsQueryVariables,
  APITypes.SyncTrackingSettingsQuery
>;
export const getTrackingTimeline = /* GraphQL */ `query GetTrackingTimeline($id: ID!) {
  getTrackingTimeline(id: $id) {
    id
    serviceID
    type
    date
    description
    author
    metaData
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTrackingTimelineQueryVariables,
  APITypes.GetTrackingTimelineQuery
>;
export const listTrackingTimelines = /* GraphQL */ `query ListTrackingTimelines(
  $id: ID
  $filter: ModelTrackingTimelineFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listTrackingTimelines(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      serviceID
      type
      date
      description
      author
      metaData
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTrackingTimelinesQueryVariables,
  APITypes.ListTrackingTimelinesQuery
>;
export const syncTrackingTimelines = /* GraphQL */ `query SyncTrackingTimelines(
  $filter: ModelTrackingTimelineFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncTrackingTimelines(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      serviceID
      type
      date
      description
      author
      metaData
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncTrackingTimelinesQueryVariables,
  APITypes.SyncTrackingTimelinesQuery
>;
export const trackingTimelinesByServiceID = /* GraphQL */ `query TrackingTimelinesByServiceID(
  $serviceID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelTrackingTimelineFilterInput
  $limit: Int
  $nextToken: String
) {
  trackingTimelinesByServiceID(
    serviceID: $serviceID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      serviceID
      type
      date
      description
      author
      metaData
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TrackingTimelinesByServiceIDQueryVariables,
  APITypes.TrackingTimelinesByServiceIDQuery
>;
export const getSalesSource = /* GraphQL */ `query GetSalesSource($id: ID!) {
  getSalesSource(id: $id) {
    groups
    id
    warehouseId
    warehouseName
    type
    salesChannel {
      groups
      id
      name
      salesSource {
        nextToken
        startedAt
        __typename
      }
      account {
        groups
        id
        name
        activeAccount
        isVtexAccount
        maxMonthlyOrders
        actualOrders
        country
        demo
        contract
        logo
        email
        contact
        pro
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      type
      isActive
      paymentMethods
      shippingMethods
      shippingTypes
      commercialPolicies
      orderTags
      packages {
        id
        type
        name
        description
        code
        __typename
      }
      globalOrders
      localOrders
      pickingMethod
      allowQuickCollection
      allowOrderNotes
      allowItemNotes
      allowAutomaticPacking
      allowMultiPicking
      allowExpressFulfillment
      allowWorksheetsReAssign
      allowStartedWorksheetsReAssign
      allowPackagesReport
      allowItemTransfers
      autoAcceptIncomingTransfers
      enableWorksheetsNotes
      enableReplacementOptions
      enableSupportChat
      needsApproval
      changesConfig {
        allowAddItems
        allowLimitOrderTotalChanges
        allowPriceChanges
        allowQuantityChanges
        allowItemReplacements
        allowItemRejections
        sendChangesToVtexOms
        itemChangesPriceThreshold
        itemChangesQuantityThreshold
        orderChangesTotalThreshold
        __typename
      }
      preparationTime
      webhooks {
        nextToken
        startedAt
        __typename
      }
      dynamicBarcodes {
        allowDynamicBarcodes
        productIdAsNumber
        __typename
      }
      printing {
        __typename
      }
      isMigratedFromFulfillment
      itemsLocation {
        active
        separator
        categoryLink
        brandLink
        __typename
      }
      itemInformation
      showOrdersInfoTab
      showCustomerInfoPerOrder
      askPickingConfirmation
      forceConfirmEANs
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      accountSalesChannelsId
      __typename
    }
    storeConfig {
      groups
      id
      name
      general {
        address
        addressComplement
        neighborhood
        postalCode
        reference
        number
        city
        country
        measurementUnit
        name
        state
        __typename
      }
      categories {
        id
        priority
        name
        parentId
        hasChildren
        url
        title
        metaTagDescription
        left
        right
        __typename
      }
      batchInterval
      maxItemsPerBatch
      maxItemsPerWorksheet
      salesSources {
        nextToken
        startedAt
        __typename
      }
      salesChannel
      timezone {
        offset
        value
        label
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      accountStoreConfigId
      __typename
    }
    configuration {
      key
      __typename
    }
    downloadOrders
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    salesChannelSalesSourceId
    storeConfigSalesSourcesId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSalesSourceQueryVariables,
  APITypes.GetSalesSourceQuery
>;
export const listSalesSources = /* GraphQL */ `query ListSalesSources(
  $filter: ModelSalesSourceFilterInput
  $limit: Int
  $nextToken: String
) {
  listSalesSources(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      groups
      id
      warehouseId
      warehouseName
      type
      salesChannel {
        groups
        id
        name
        type
        isActive
        paymentMethods
        shippingMethods
        shippingTypes
        commercialPolicies
        orderTags
        globalOrders
        localOrders
        pickingMethod
        allowQuickCollection
        allowOrderNotes
        allowItemNotes
        allowAutomaticPacking
        allowMultiPicking
        allowExpressFulfillment
        allowWorksheetsReAssign
        allowStartedWorksheetsReAssign
        allowPackagesReport
        allowItemTransfers
        autoAcceptIncomingTransfers
        enableWorksheetsNotes
        enableReplacementOptions
        enableSupportChat
        needsApproval
        preparationTime
        isMigratedFromFulfillment
        itemInformation
        showOrdersInfoTab
        showCustomerInfoPerOrder
        askPickingConfirmation
        forceConfirmEANs
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        accountSalesChannelsId
        __typename
      }
      storeConfig {
        groups
        id
        name
        batchInterval
        maxItemsPerBatch
        maxItemsPerWorksheet
        salesChannel
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        accountStoreConfigId
        __typename
      }
      configuration {
        key
        __typename
      }
      downloadOrders
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      salesChannelSalesSourceId
      storeConfigSalesSourcesId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSalesSourcesQueryVariables,
  APITypes.ListSalesSourcesQuery
>;
export const syncSalesSources = /* GraphQL */ `query SyncSalesSources(
  $filter: ModelSalesSourceFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncSalesSources(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      groups
      id
      warehouseId
      warehouseName
      type
      salesChannel {
        groups
        id
        name
        type
        isActive
        paymentMethods
        shippingMethods
        shippingTypes
        commercialPolicies
        orderTags
        globalOrders
        localOrders
        pickingMethod
        allowQuickCollection
        allowOrderNotes
        allowItemNotes
        allowAutomaticPacking
        allowMultiPicking
        allowExpressFulfillment
        allowWorksheetsReAssign
        allowStartedWorksheetsReAssign
        allowPackagesReport
        allowItemTransfers
        autoAcceptIncomingTransfers
        enableWorksheetsNotes
        enableReplacementOptions
        enableSupportChat
        needsApproval
        preparationTime
        isMigratedFromFulfillment
        itemInformation
        showOrdersInfoTab
        showCustomerInfoPerOrder
        askPickingConfirmation
        forceConfirmEANs
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        accountSalesChannelsId
        __typename
      }
      storeConfig {
        groups
        id
        name
        batchInterval
        maxItemsPerBatch
        maxItemsPerWorksheet
        salesChannel
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        accountStoreConfigId
        __typename
      }
      configuration {
        key
        __typename
      }
      downloadOrders
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      salesChannelSalesSourceId
      storeConfigSalesSourcesId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncSalesSourcesQueryVariables,
  APITypes.SyncSalesSourcesQuery
>;
export const salesSourcesByWarehouseName = /* GraphQL */ `query SalesSourcesByWarehouseName(
  $warehouseName: String!
  $sortDirection: ModelSortDirection
  $filter: ModelSalesSourceFilterInput
  $limit: Int
  $nextToken: String
) {
  salesSourcesByWarehouseName(
    warehouseName: $warehouseName
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      groups
      id
      warehouseId
      warehouseName
      type
      salesChannel {
        groups
        id
        name
        type
        isActive
        paymentMethods
        shippingMethods
        shippingTypes
        commercialPolicies
        orderTags
        globalOrders
        localOrders
        pickingMethod
        allowQuickCollection
        allowOrderNotes
        allowItemNotes
        allowAutomaticPacking
        allowMultiPicking
        allowExpressFulfillment
        allowWorksheetsReAssign
        allowStartedWorksheetsReAssign
        allowPackagesReport
        allowItemTransfers
        autoAcceptIncomingTransfers
        enableWorksheetsNotes
        enableReplacementOptions
        enableSupportChat
        needsApproval
        preparationTime
        isMigratedFromFulfillment
        itemInformation
        showOrdersInfoTab
        showCustomerInfoPerOrder
        askPickingConfirmation
        forceConfirmEANs
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        accountSalesChannelsId
        __typename
      }
      storeConfig {
        groups
        id
        name
        batchInterval
        maxItemsPerBatch
        maxItemsPerWorksheet
        salesChannel
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        accountStoreConfigId
        __typename
      }
      configuration {
        key
        __typename
      }
      downloadOrders
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      salesChannelSalesSourceId
      storeConfigSalesSourcesId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SalesSourcesByWarehouseNameQueryVariables,
  APITypes.SalesSourcesByWarehouseNameQuery
>;
export const getWebhook = /* GraphQL */ `query GetWebhook($id: ID!) {
  getWebhook(id: $id) {
    id
    salesChannelId
    active
    type
    url
    restType
    headers {
      key
      value
      __typename
    }
    params {
      key
      value
      __typename
    }
    facilities
    showItems
    showChanges
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetWebhookQueryVariables,
  APITypes.GetWebhookQuery
>;
export const listWebhooks = /* GraphQL */ `query ListWebhooks(
  $id: ID
  $filter: ModelWebhookFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listWebhooks(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      salesChannelId
      active
      type
      url
      restType
      headers {
        key
        value
        __typename
      }
      params {
        key
        value
        __typename
      }
      facilities
      showItems
      showChanges
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListWebhooksQueryVariables,
  APITypes.ListWebhooksQuery
>;
export const syncWebhooks = /* GraphQL */ `query SyncWebhooks(
  $filter: ModelWebhookFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncWebhooks(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      salesChannelId
      active
      type
      url
      restType
      headers {
        key
        value
        __typename
      }
      params {
        key
        value
        __typename
      }
      facilities
      showItems
      showChanges
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncWebhooksQueryVariables,
  APITypes.SyncWebhooksQuery
>;
export const webhooksBySalesChannelId = /* GraphQL */ `query WebhooksBySalesChannelId(
  $salesChannelId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelWebhookFilterInput
  $limit: Int
  $nextToken: String
) {
  webhooksBySalesChannelId(
    salesChannelId: $salesChannelId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      salesChannelId
      active
      type
      url
      restType
      headers {
        key
        value
        __typename
      }
      params {
        key
        value
        __typename
      }
      facilities
      showItems
      showChanges
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.WebhooksBySalesChannelIdQueryVariables,
  APITypes.WebhooksBySalesChannelIdQuery
>;
export const getWorksheet = /* GraphQL */ `query GetWorksheet($id: ID!) {
  getWorksheet(id: $id) {
    groups
    storeConfig
    hostname
    fulfillment {
      items {
        groups
        id
        itemId
        orderId
        worksheetId
        assignedAt
        pickingStartedAt
        pickedAt
        packingStartedAt
        packedAt
        hostname
        itemLocation
        quantity
        originalQuantity
        originalUnitMultiplier
        addedOnFulfillment
        isReplacement
        isTransfer
        priority
        pickerId
        sorted
        isCompleted
        isCancelled
        picker_facility
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        itemV2FulfillmentId
        worksheetFulfillmentId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    categoriesIds
    conversationID
    notificationsID
    initDate
    finishedDate
    finishEstimatedDate
    id
    worksheetId
    isPaused
    pauses {
      startDate
      endDate
      reason
      user
      reasonType
      __typename
    }
    ordersIds {
      orderId
      shippingEstimatedDate
      totalValue
      priority
      isInvoiced
      itemsQuantity
      unitsQuantity
      paymentMethodName
      paymentMethodId
      shippingMethodName
      shippingMethodType
      shippingMethodId
      customer {
        id
        profileId
        publicName
        firstName
        lastName
        document
        documentType
        email
        phone
        __typename
      }
      __typename
    }
    pickerAssignment {
      active
      pickerId
      method
      assignmentDate
      finishedDate
      notes
      __typename
    }
    status
    lastPickedItemTime
    lastStatusChangeTime
    pickingStartedAt
    pickedAt
    packingStartedAt
    packedAt
    totalItems
    totalUnits
    totalCompletedItems
    totalCompletedUnits
    totalPackedItems
    totalPackedUnits
    totalItemsToPack
    totalUnitsToPack
    priority
    historicalWorksheet {
      items {
        id
        worksheetId
        lastStatus
        worksheetStatus
        source
        user
        description
        metadata
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    tags
    appliedAutomations {
      automationId
      action
      value
      lastInvocation
      status
      requestId
      metadata
      __typename
    }
    notes {
      id
      user
      note
      __typename
    }
    picker_facility
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetWorksheetQueryVariables,
  APITypes.GetWorksheetQuery
>;
export const listWorksheets = /* GraphQL */ `query ListWorksheets(
  $id: ID
  $filter: ModelWorksheetFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listWorksheets(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      groups
      storeConfig
      hostname
      fulfillment {
        nextToken
        startedAt
        __typename
      }
      categoriesIds
      conversationID
      notificationsID
      initDate
      finishedDate
      finishEstimatedDate
      id
      worksheetId
      isPaused
      pauses {
        startDate
        endDate
        reason
        user
        reasonType
        __typename
      }
      ordersIds {
        orderId
        shippingEstimatedDate
        totalValue
        priority
        isInvoiced
        itemsQuantity
        unitsQuantity
        paymentMethodName
        paymentMethodId
        shippingMethodName
        shippingMethodType
        shippingMethodId
        __typename
      }
      pickerAssignment {
        active
        pickerId
        method
        assignmentDate
        finishedDate
        notes
        __typename
      }
      status
      lastPickedItemTime
      lastStatusChangeTime
      pickingStartedAt
      pickedAt
      packingStartedAt
      packedAt
      totalItems
      totalUnits
      totalCompletedItems
      totalCompletedUnits
      totalPackedItems
      totalPackedUnits
      totalItemsToPack
      totalUnitsToPack
      priority
      historicalWorksheet {
        nextToken
        startedAt
        __typename
      }
      tags
      appliedAutomations {
        automationId
        action
        value
        lastInvocation
        status
        requestId
        metadata
        __typename
      }
      notes {
        id
        user
        note
        __typename
      }
      picker_facility
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListWorksheetsQueryVariables,
  APITypes.ListWorksheetsQuery
>;
export const syncWorksheets = /* GraphQL */ `query SyncWorksheets(
  $filter: ModelWorksheetFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncWorksheets(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      groups
      storeConfig
      hostname
      fulfillment {
        nextToken
        startedAt
        __typename
      }
      categoriesIds
      conversationID
      notificationsID
      initDate
      finishedDate
      finishEstimatedDate
      id
      worksheetId
      isPaused
      pauses {
        startDate
        endDate
        reason
        user
        reasonType
        __typename
      }
      ordersIds {
        orderId
        shippingEstimatedDate
        totalValue
        priority
        isInvoiced
        itemsQuantity
        unitsQuantity
        paymentMethodName
        paymentMethodId
        shippingMethodName
        shippingMethodType
        shippingMethodId
        __typename
      }
      pickerAssignment {
        active
        pickerId
        method
        assignmentDate
        finishedDate
        notes
        __typename
      }
      status
      lastPickedItemTime
      lastStatusChangeTime
      pickingStartedAt
      pickedAt
      packingStartedAt
      packedAt
      totalItems
      totalUnits
      totalCompletedItems
      totalCompletedUnits
      totalPackedItems
      totalPackedUnits
      totalItemsToPack
      totalUnitsToPack
      priority
      historicalWorksheet {
        nextToken
        startedAt
        __typename
      }
      tags
      appliedAutomations {
        automationId
        action
        value
        lastInvocation
        status
        requestId
        metadata
        __typename
      }
      notes {
        id
        user
        note
        __typename
      }
      picker_facility
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncWorksheetsQueryVariables,
  APITypes.SyncWorksheetsQuery
>;
export const worksheetsByStoreConfig = /* GraphQL */ `query WorksheetsByStoreConfig(
  $storeConfig: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelWorksheetFilterInput
  $limit: Int
  $nextToken: String
) {
  worksheetsByStoreConfig(
    storeConfig: $storeConfig
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      groups
      storeConfig
      hostname
      fulfillment {
        nextToken
        startedAt
        __typename
      }
      categoriesIds
      conversationID
      notificationsID
      initDate
      finishedDate
      finishEstimatedDate
      id
      worksheetId
      isPaused
      pauses {
        startDate
        endDate
        reason
        user
        reasonType
        __typename
      }
      ordersIds {
        orderId
        shippingEstimatedDate
        totalValue
        priority
        isInvoiced
        itemsQuantity
        unitsQuantity
        paymentMethodName
        paymentMethodId
        shippingMethodName
        shippingMethodType
        shippingMethodId
        __typename
      }
      pickerAssignment {
        active
        pickerId
        method
        assignmentDate
        finishedDate
        notes
        __typename
      }
      status
      lastPickedItemTime
      lastStatusChangeTime
      pickingStartedAt
      pickedAt
      packingStartedAt
      packedAt
      totalItems
      totalUnits
      totalCompletedItems
      totalCompletedUnits
      totalPackedItems
      totalPackedUnits
      totalItemsToPack
      totalUnitsToPack
      priority
      historicalWorksheet {
        nextToken
        startedAt
        __typename
      }
      tags
      appliedAutomations {
        automationId
        action
        value
        lastInvocation
        status
        requestId
        metadata
        __typename
      }
      notes {
        id
        user
        note
        __typename
      }
      picker_facility
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.WorksheetsByStoreConfigQueryVariables,
  APITypes.WorksheetsByStoreConfigQuery
>;
export const worksheetsByWorksheetId = /* GraphQL */ `query WorksheetsByWorksheetId(
  $worksheetId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelWorksheetFilterInput
  $limit: Int
  $nextToken: String
) {
  worksheetsByWorksheetId(
    worksheetId: $worksheetId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      groups
      storeConfig
      hostname
      fulfillment {
        nextToken
        startedAt
        __typename
      }
      categoriesIds
      conversationID
      notificationsID
      initDate
      finishedDate
      finishEstimatedDate
      id
      worksheetId
      isPaused
      pauses {
        startDate
        endDate
        reason
        user
        reasonType
        __typename
      }
      ordersIds {
        orderId
        shippingEstimatedDate
        totalValue
        priority
        isInvoiced
        itemsQuantity
        unitsQuantity
        paymentMethodName
        paymentMethodId
        shippingMethodName
        shippingMethodType
        shippingMethodId
        __typename
      }
      pickerAssignment {
        active
        pickerId
        method
        assignmentDate
        finishedDate
        notes
        __typename
      }
      status
      lastPickedItemTime
      lastStatusChangeTime
      pickingStartedAt
      pickedAt
      packingStartedAt
      packedAt
      totalItems
      totalUnits
      totalCompletedItems
      totalCompletedUnits
      totalPackedItems
      totalPackedUnits
      totalItemsToPack
      totalUnitsToPack
      priority
      historicalWorksheet {
        nextToken
        startedAt
        __typename
      }
      tags
      appliedAutomations {
        automationId
        action
        value
        lastInvocation
        status
        requestId
        metadata
        __typename
      }
      notes {
        id
        user
        note
        __typename
      }
      picker_facility
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.WorksheetsByWorksheetIdQueryVariables,
  APITypes.WorksheetsByWorksheetIdQuery
>;
export const worksheetsByPickerFacility = /* GraphQL */ `query WorksheetsByPickerFacility(
  $picker_facility: String!
  $sortDirection: ModelSortDirection
  $filter: ModelWorksheetFilterInput
  $limit: Int
  $nextToken: String
) {
  worksheetsByPickerFacility(
    picker_facility: $picker_facility
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      groups
      storeConfig
      hostname
      fulfillment {
        nextToken
        startedAt
        __typename
      }
      categoriesIds
      conversationID
      notificationsID
      initDate
      finishedDate
      finishEstimatedDate
      id
      worksheetId
      isPaused
      pauses {
        startDate
        endDate
        reason
        user
        reasonType
        __typename
      }
      ordersIds {
        orderId
        shippingEstimatedDate
        totalValue
        priority
        isInvoiced
        itemsQuantity
        unitsQuantity
        paymentMethodName
        paymentMethodId
        shippingMethodName
        shippingMethodType
        shippingMethodId
        __typename
      }
      pickerAssignment {
        active
        pickerId
        method
        assignmentDate
        finishedDate
        notes
        __typename
      }
      status
      lastPickedItemTime
      lastStatusChangeTime
      pickingStartedAt
      pickedAt
      packingStartedAt
      packedAt
      totalItems
      totalUnits
      totalCompletedItems
      totalCompletedUnits
      totalPackedItems
      totalPackedUnits
      totalItemsToPack
      totalUnitsToPack
      priority
      historicalWorksheet {
        nextToken
        startedAt
        __typename
      }
      tags
      appliedAutomations {
        automationId
        action
        value
        lastInvocation
        status
        requestId
        metadata
        __typename
      }
      notes {
        id
        user
        note
        __typename
      }
      picker_facility
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.WorksheetsByPickerFacilityQueryVariables,
  APITypes.WorksheetsByPickerFacilityQuery
>;
