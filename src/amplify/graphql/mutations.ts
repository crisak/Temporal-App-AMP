/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const toggleUserMyAccount = /* GraphQL */ `mutation ToggleUserMyAccount($account: String!, $isActive: Boolean!) {
  toggleUserMyAccount(account: $account, isActive: $isActive) {
    status
    message
    __typename
  }
}
` as GeneratedMutation<
  APITypes.ToggleUserMyAccountMutationVariables,
  APITypes.ToggleUserMyAccountMutation
>;
export const downloadOrderReport = /* GraphQL */ `mutation DownloadOrderReport($sort: OrderSort, $filters: OrderFilters) {
  downloadOrderReport(sort: $sort, filters: $filters) {
    status
    message
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DownloadOrderReportMutationVariables,
  APITypes.DownloadOrderReportMutation
>;
export const updateCategories = /* GraphQL */ `mutation UpdateCategories(
  $storeConfigId: String!
  $categories: [CategoriesConfigurationInput]!
) {
  updateCategories(storeConfigId: $storeConfigId, categories: $categories) {
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
` as GeneratedMutation<
  APITypes.UpdateCategoriesMutationVariables,
  APITypes.UpdateCategoriesMutation
>;
export const restorePackages = /* GraphQL */ `mutation RestorePackages($packageId: String!, $worksheetId: String!) {
  restorePackages(packageId: $packageId, worksheetId: $worksheetId) {
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
` as GeneratedMutation<
  APITypes.RestorePackagesMutationVariables,
  APITypes.RestorePackagesMutation
>;
export const createPackageAndUpdateOrder = /* GraphQL */ `mutation CreatePackageAndUpdateOrder(
  $orderId: String!
  $envelope: String!
  $dimensions: DimensionsInput
  $type: String
  $name: String
  $description: String
  $storeConfigId: String
) {
  createPackageAndUpdateOrder(
    orderId: $orderId
    envelope: $envelope
    dimensions: $dimensions
    type: $type
    name: $name
    description: $description
    storeConfigId: $storeConfigId
  ) {
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
` as GeneratedMutation<
  APITypes.CreatePackageAndUpdateOrderMutationVariables,
  APITypes.CreatePackageAndUpdateOrderMutation
>;
export const addItemsToPackage = /* GraphQL */ `mutation AddItemsToPackage(
  $packageId: String!
  $itemsToPack: [ItemsToPackInput]!
  $worksheetId: String!
) {
  addItemsToPackage(
    packageId: $packageId
    itemsToPack: $itemsToPack
    worksheetId: $worksheetId
  ) {
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
` as GeneratedMutation<
  APITypes.AddItemsToPackageMutationVariables,
  APITypes.AddItemsToPackageMutation
>;
export const removeItemsFromPackage = /* GraphQL */ `mutation RemoveItemsFromPackage(
  $packageId: String!
  $itemsToPack: [ItemsToPackInput]!
  $worksheetId: String!
) {
  removeItemsFromPackage(
    packageId: $packageId
    itemsToPack: $itemsToPack
    worksheetId: $worksheetId
  ) {
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
` as GeneratedMutation<
  APITypes.RemoveItemsFromPackageMutationVariables,
  APITypes.RemoveItemsFromPackageMutation
>;
export const closePackages = /* GraphQL */ `mutation ClosePackages($orderIds: [String]!, $worksheetId: String!) {
  closePackages(orderIds: $orderIds, worksheetId: $worksheetId) {
    data {
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
    requestedId
    warnings {
      code
      data
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.ClosePackagesMutationVariables,
  APITypes.ClosePackagesMutation
>;
export const packAllItems = /* GraphQL */ `mutation PackAllItems($orderId: String!) {
  packAllItems(orderId: $orderId) {
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
` as GeneratedMutation<
  APITypes.PackAllItemsMutationVariables,
  APITypes.PackAllItemsMutation
>;
export const suggestPacking = /* GraphQL */ `mutation SuggestPacking($orderId: String!) {
  suggestPacking(orderId: $orderId) {
    packedBins {
      id
      items {
        itemId
        quantity
        __typename
      }
      __typename
    }
    remainingItems
    unfitItems
    __typename
  }
}
` as GeneratedMutation<
  APITypes.SuggestPackingMutationVariables,
  APITypes.SuggestPackingMutation
>;
export const replaceItem = /* GraphQL */ `mutation ReplaceItem(
  $itemsToAdd: [ItemToAdd]!
  $orderId: String
  $fulfillmentId: String!
  $itemToReplace: ItemToReplace!
  $isDesktop: Boolean
) {
  replaceItem(
    itemsToAdd: $itemsToAdd
    orderId: $orderId
    fulfillmentId: $fulfillmentId
    itemToReplace: $itemToReplace
    isDesktop: $isDesktop
  ) {
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
` as GeneratedMutation<
  APITypes.ReplaceItemMutationVariables,
  APITypes.ReplaceItemMutation
>;
export const restoreReplacedItem = /* GraphQL */ `mutation RestoreReplacedItem(
  $fulfillmentId: String!
  $fulfillmentIdToDelete: String!
  $itemId: String!
) {
  restoreReplacedItem(
    fulfillmentId: $fulfillmentId
    fulfillmentIdToDelete: $fulfillmentIdToDelete
    itemId: $itemId
  ) {
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
` as GeneratedMutation<
  APITypes.RestoreReplacedItemMutationVariables,
  APITypes.RestoreReplacedItemMutation
>;
export const addNoteToWorksheet = /* GraphQL */ `mutation AddNoteToWorksheet(
  $worksheetId: String!
  $orderId: String
  $note: String!
  $itemId: String
  $userId: String!
) {
  addNoteToWorksheet(
    worksheetId: $worksheetId
    orderId: $orderId
    note: $note
    itemId: $itemId
    userId: $userId
  ) {
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
` as GeneratedMutation<
  APITypes.AddNoteToWorksheetMutationVariables,
  APITypes.AddNoteToWorksheetMutation
>;
export const startWorksheet = /* GraphQL */ `mutation StartWorksheet($worksheetId: String!) {
  startWorksheet(worksheetId: $worksheetId) {
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
` as GeneratedMutation<
  APITypes.StartWorksheetMutationVariables,
  APITypes.StartWorksheetMutation
>;
export const pauseWorksheet = /* GraphQL */ `mutation PauseWorksheet($worksheetId: String!) {
  pauseWorksheet(worksheetId: $worksheetId) {
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
` as GeneratedMutation<
  APITypes.PauseWorksheetMutationVariables,
  APITypes.PauseWorksheetMutation
>;
export const resumeWorksheet = /* GraphQL */ `mutation ResumeWorksheet($worksheetId: String!) {
  resumeWorksheet(worksheetId: $worksheetId) {
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
` as GeneratedMutation<
  APITypes.ResumeWorksheetMutationVariables,
  APITypes.ResumeWorksheetMutation
>;
export const pickedItems = /* GraphQL */ `mutation PickedItems(
  $worksheetId: String!
  $items: [ItemToFulfill]
  $orderId: String
) {
  pickedItems(worksheetId: $worksheetId, items: $items, orderId: $orderId) {
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
` as GeneratedMutation<
  APITypes.PickedItemsMutationVariables,
  APITypes.PickedItemsMutation
>;
export const rejectOrder = /* GraphQL */ `mutation RejectOrder($orderIds: [String]!) {
  rejectOrder(orderIds: $orderIds) {
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
` as GeneratedMutation<
  APITypes.RejectOrderMutationVariables,
  APITypes.RejectOrderMutation
>;
export const resetPickedItem = /* GraphQL */ `mutation ResetPickedItem($worksheetId: String!, $items: [ItemToFulfill]) {
  resetPickedItem(worksheetId: $worksheetId, items: $items) {
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
` as GeneratedMutation<
  APITypes.ResetPickedItemMutationVariables,
  APITypes.ResetPickedItemMutation
>;
export const rejectItem = /* GraphQL */ `mutation RejectItem(
  $worksheetId: String!
  $items: [ItemToFulfill]
  $orderId: String
) {
  rejectItem(worksheetId: $worksheetId, items: $items, orderId: $orderId) {
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
` as GeneratedMutation<
  APITypes.RejectItemMutationVariables,
  APITypes.RejectItemMutation
>;
export const resetRejectedItem = /* GraphQL */ `mutation ResetRejectedItem($worksheetId: String!, $items: [ItemToFulfill]) {
  resetRejectedItem(worksheetId: $worksheetId, items: $items) {
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
` as GeneratedMutation<
  APITypes.ResetRejectedItemMutationVariables,
  APITypes.ResetRejectedItemMutation
>;
export const sorting = /* GraphQL */ `mutation Sorting($worksheetId: String!) {
  sorting(worksheetId: $worksheetId) {
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
` as GeneratedMutation<
  APITypes.SortingMutationVariables,
  APITypes.SortingMutation
>;
export const addNewItem = /* GraphQL */ `mutation AddNewItem(
  $itemsToAdd: [ItemToAdd]!
  $orderId: String!
  $worksheetId: String
  $isDesktop: Boolean
) {
  addNewItem(
    itemsToAdd: $itemsToAdd
    orderId: $orderId
    worksheetId: $worksheetId
    isDesktop: $isDesktop
  ) {
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
` as GeneratedMutation<
  APITypes.AddNewItemMutationVariables,
  APITypes.AddNewItemMutation
>;
export const resetAddNewItem = /* GraphQL */ `mutation ResetAddNewItem(
  $itemsToAdd: [ItemToAdd]!
  $orderId: String!
  $worksheetId: String
) {
  resetAddNewItem(
    itemsToAdd: $itemsToAdd
    orderId: $orderId
    worksheetId: $worksheetId
  ) {
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
` as GeneratedMutation<
  APITypes.ResetAddNewItemMutationVariables,
  APITypes.ResetAddNewItemMutation
>;
export const changePrice = /* GraphQL */ `mutation ChangePrice(
  $orderId: String!
  $itemId: String!
  $newPrice: Float!
  $oldPrice: Float!
  $reasonType: String!
  $reasonDetails: String!
  $worksheetId: String
) {
  changePrice(
    orderId: $orderId
    itemId: $itemId
    newPrice: $newPrice
    oldPrice: $oldPrice
    reasonType: $reasonType
    reasonDetails: $reasonDetails
    worksheetId: $worksheetId
  ) {
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
` as GeneratedMutation<
  APITypes.ChangePriceMutationVariables,
  APITypes.ChangePriceMutation
>;
export const changeQuantity = /* GraphQL */ `mutation ChangeQuantity(
  $fulfillmentId: String!
  $newQuantity: Int!
  $newWeight: Float!
  $reasonType: String!
  $reasonDetail: String!
) {
  changeQuantity(
    fulfillmentId: $fulfillmentId
    newQuantity: $newQuantity
    newWeight: $newWeight
    reasonType: $reasonType
    reasonDetail: $reasonDetail
  ) {
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
` as GeneratedMutation<
  APITypes.ChangeQuantityMutationVariables,
  APITypes.ChangeQuantityMutation
>;
export const pauseOrder = /* GraphQL */ `mutation PauseOrder($orderId: String!) {
  pauseOrder(orderId: $orderId) {
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
` as GeneratedMutation<
  APITypes.PauseOrderMutationVariables,
  APITypes.PauseOrderMutation
>;
export const resumeOrder = /* GraphQL */ `mutation ResumeOrder($orderId: String!) {
  resumeOrder(orderId: $orderId) {
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
` as GeneratedMutation<
  APITypes.ResumeOrderMutationVariables,
  APITypes.ResumeOrderMutation
>;
export const rejectTransfer = /* GraphQL */ `mutation RejectTransfer($transferId: String!, $userId: String!) {
  rejectTransfer(transferId: $transferId, userId: $userId) {
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
` as GeneratedMutation<
  APITypes.RejectTransferMutationVariables,
  APITypes.RejectTransferMutation
>;
export const approveTransfer = /* GraphQL */ `mutation ApproveTransfer($transferId: String!, $userId: String!) {
  approveTransfer(transferId: $transferId, userId: $userId) {
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
` as GeneratedMutation<
  APITypes.ApproveTransferMutationVariables,
  APITypes.ApproveTransferMutation
>;
export const createTransferProcess = /* GraphQL */ `mutation CreateTransferProcess(
  $orderId: String!
  $destinationFacility: String!
  $destinationHostname: String!
  $sourceFacility: String!
  $sourceWorksheetId: String!
  $itemTransfer: ItemTransferInput!
  $fulfillmentId: String!
) {
  createTransferProcess(
    orderId: $orderId
    destinationFacility: $destinationFacility
    destinationHostname: $destinationHostname
    sourceFacility: $sourceFacility
    sourceWorksheetId: $sourceWorksheetId
    itemTransfer: $itemTransfer
    fulfillmentId: $fulfillmentId
  ) {
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
` as GeneratedMutation<
  APITypes.CreateTransferProcessMutationVariables,
  APITypes.CreateTransferProcessMutation
>;
export const createRMAProcess = /* GraphQL */ `mutation CreateRMAProcess($rmaIds: [String]!) {
  createRMAProcess(rmaIds: $rmaIds) {
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
` as GeneratedMutation<
  APITypes.CreateRMAProcessMutationVariables,
  APITypes.CreateRMAProcessMutation
>;
export const createWorksheetProcess = /* GraphQL */ `mutation CreateWorksheetProcess(
  $storeConfigId: String!
  $orderIds: [String]!
  $pickerId: String
  $itemTransfer: [ItemTransferInput]
  $hostname: String!
  $isMobile: Boolean
) {
  createWorksheetProcess(
    storeConfigId: $storeConfigId
    orderIds: $orderIds
    pickerId: $pickerId
    itemTransfer: $itemTransfer
    hostname: $hostname
    isMobile: $isMobile
  ) {
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
` as GeneratedMutation<
  APITypes.CreateWorksheetProcessMutationVariables,
  APITypes.CreateWorksheetProcessMutation
>;
export const cancelOrder = /* GraphQL */ `mutation CancelOrder($orderId: String!) {
  cancelOrder(orderId: $orderId) {
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
` as GeneratedMutation<
  APITypes.CancelOrderMutationVariables,
  APITypes.CancelOrderMutation
>;
export const deliverOrder = /* GraphQL */ `mutation DeliverOrder($orderId: String!) {
  deliverOrder(orderId: $orderId) {
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
` as GeneratedMutation<
  APITypes.DeliverOrderMutationVariables,
  APITypes.DeliverOrderMutation
>;
export const assignPicker = /* GraphQL */ `mutation AssignPicker(
  $pickerId: String!
  $worksheetId: String!
  $hostname: String!
) {
  assignPicker(
    pickerId: $pickerId
    worksheetId: $worksheetId
    hostname: $hostname
  ) {
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
` as GeneratedMutation<
  APITypes.AssignPickerMutationVariables,
  APITypes.AssignPickerMutation
>;
export const removeOrderFromWorksheet = /* GraphQL */ `mutation RemoveOrderFromWorksheet(
  $orderIds: [String]!
  $worksheetId: String!
  $storeConfigId: String!
) {
  removeOrderFromWorksheet(
    orderIds: $orderIds
    worksheetId: $worksheetId
    storeConfigId: $storeConfigId
  ) {
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
` as GeneratedMutation<
  APITypes.RemoveOrderFromWorksheetMutationVariables,
  APITypes.RemoveOrderFromWorksheetMutation
>;
export const addOrderToWorksheet = /* GraphQL */ `mutation AddOrderToWorksheet(
  $orderIds: [String]!
  $worksheetId: String!
  $storeConfigId: String!
) {
  addOrderToWorksheet(
    orderIds: $orderIds
    worksheetId: $worksheetId
    storeConfigId: $storeConfigId
  ) {
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
` as GeneratedMutation<
  APITypes.AddOrderToWorksheetMutationVariables,
  APITypes.AddOrderToWorksheetMutation
>;
export const updateFacilities = /* GraphQL */ `mutation UpdateFacilities($warehouseIds: [String]!, $storeConfigId: String!) {
  updateFacilities(warehouseIds: $warehouseIds, storeConfigId: $storeConfigId) {
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
` as GeneratedMutation<
  APITypes.UpdateFacilitiesMutationVariables,
  APITypes.UpdateFacilitiesMutation
>;
export const createCatalog = /* GraphQL */ `mutation CreateCatalog($account: String!, $from: String, $to: String) {
  createCatalog(account: $account, from: $from, to: $to) {
    status
    message
    totalProducts
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCatalogMutationVariables,
  APITypes.CreateCatalogMutation
>;
export const updateProduct = /* GraphQL */ `mutation UpdateProduct(
  $parentAccount: String!
  $skuId: String!
  $multiplesSkus: [String]!
  $multiplesEans: [String]!
  $temperature: String!
) {
  updateProduct(
    parentAccount: $parentAccount
    skuId: $skuId
    multiplesSkus: $multiplesSkus
    multiplesEans: $multiplesEans
    temperature: $temperature
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
` as GeneratedMutation<
  APITypes.UpdateProductMutationVariables,
  APITypes.UpdateProductMutation
>;
export const createStores = /* GraphQL */ `mutation CreateStores($account: String!, $sellers: [String]!) {
  createStores(account: $account, sellers: $sellers)
}
` as GeneratedMutation<
  APITypes.CreateStoresMutationVariables,
  APITypes.CreateStoresMutation
>;
export const activeAccountLastMile = /* GraphQL */ `mutation ActiveAccountLastMile($account: String!, $active: Boolean!) {
  activeAccountLastMile(account: $account, active: $active) {
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
` as GeneratedMutation<
  APITypes.ActiveAccountLastMileMutationVariables,
  APITypes.ActiveAccountLastMileMutation
>;
export const createRMA = /* GraphQL */ `mutation CreateRMA(
  $orderId: String!
  $shippingRequest: ShippingRequestInput!
  $items: [RMARequestItemsInput]!
  $storeConfigId: String
) {
  createRMA(
    orderId: $orderId
    shippingRequest: $shippingRequest
    items: $items
    storeConfigId: $storeConfigId
  ) {
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
` as GeneratedMutation<
  APITypes.CreateRMAMutationVariables,
  APITypes.CreateRMAMutation
>;
export const updateRMAItemStatus = /* GraphQL */ `mutation UpdateRMAItemStatus(
  $itemsId: [String]!
  $rmaId: String!
  $status: RMAItemsStatus!
  $deliveryReference: String
) {
  updateRMAItemStatus(
    itemsId: $itemsId
    rmaId: $rmaId
    status: $status
    deliveryReference: $deliveryReference
  ) {
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
` as GeneratedMutation<
  APITypes.UpdateRMAItemStatusMutationVariables,
  APITypes.UpdateRMAItemStatusMutation
>;
export const confirmDeliveryClient = /* GraphQL */ `mutation ConfirmDeliveryClient($rmaId: String!) {
  confirmDeliveryClient(rmaId: $rmaId) {
    rmaId
    success
    __typename
  }
}
` as GeneratedMutation<
  APITypes.ConfirmDeliveryClientMutationVariables,
  APITypes.ConfirmDeliveryClientMutation
>;
export const createRMAResolutionItem = /* GraphQL */ `mutation CreateRMAResolutionItem(
  $rmaId: String!
  $itemId: String!
  $hostname: String!
  $resolution: RMAItemResolutionInput
  $notes: [NoteInput]
  $rejectRMA: Boolean
) {
  createRMAResolutionItem(
    rmaId: $rmaId
    itemId: $itemId
    hostname: $hostname
    resolution: $resolution
    notes: $notes
    rejectRMA: $rejectRMA
  ) {
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
    success
    rmaId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRMAResolutionItemMutationVariables,
  APITypes.CreateRMAResolutionItemMutation
>;
export const confirmResolution = /* GraphQL */ `mutation ConfirmResolution(
  $resolutionIds: [String]!
  $confirmationId: String!
  $rmaId: String!
  $amount: Float!
  $attachments: AttachmentResolutionInput
) {
  confirmResolution(
    resolutionIds: $resolutionIds
    confirmationId: $confirmationId
    rmaId: $rmaId
    amount: $amount
    attachments: $attachments
  ) {
    success
    resolutionIds
    rmaId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.ConfirmResolutionMutationVariables,
  APITypes.ConfirmResolutionMutation
>;
export const createRMAService = /* GraphQL */ `mutation CreateRMAService(
  $rmaId: String!
  $carrierId: String!
  $storeConfigId: String
) {
  createRMAService(
    rmaId: $rmaId
    carrierId: $carrierId
    storeConfigId: $storeConfigId
  ) {
    serviceId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRMAServiceMutationVariables,
  APITypes.CreateRMAServiceMutation
>;
export const updateAgent = /* GraphQL */ `mutation UpdateAgent(
  $query: MutationUpdateAgentQueryInput
  $body: MutationUpdateAgentBodyInput
) {
  updateAgent(query: $query, body: $body) {
    message
    status
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAgentMutationVariables,
  APITypes.UpdateAgentMutation
>;
export const updateAgentTags = /* GraphQL */ `mutation UpdateAgentTags(
  $query: MutationUpdateAgentTagsQueryInput
  $body: MutationUpdateAgentTagsBodyInput
) {
  updateAgentTags(query: $query, body: $body) {
    message
    status
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAgentTagsMutationVariables,
  APITypes.UpdateAgentTagsMutation
>;
export const deleteAgent = /* GraphQL */ `mutation DeleteAgent(
  $query: MutationDeleteAgentQueryInput
  $body: MutationDeleteAgentBodyInput
) {
  deleteAgent(query: $query, body: $body) {
    message
    status
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAgentMutationVariables,
  APITypes.DeleteAgentMutation
>;
export const sendNotificationAgent = /* GraphQL */ `mutation SendNotificationAgent(
  $query: MutationSendNotificationAgentQueryInput
  $body: MutationSendNotificationAgentBodyInput
) {
  sendNotificationAgent(query: $query, body: $body) {
    message
    status
    data {
      total_fleets
      valid_fleets
      logged_in_fleets
      logged_in_fleet_ids
      push_limit_reached_fleets
      duplicate_push_fleets
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.SendNotificationAgentMutationVariables,
  APITypes.SendNotificationAgentMutation
>;
export const AddAgent = /* GraphQL */ `mutation AddAgent(
  $query: MutationAddAgentQueryInput
  $body: MutationAddAgentBodyInput
) {
  AddAgent(query: $query, body: $body) {
    message
    status
    data {
      fleet_id
      status
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.AddAgentMutationVariables,
  APITypes.AddAgentMutation
>;
export const AssignCourierToRelatedTasks = /* GraphQL */ `mutation AssignCourierToRelatedTasks(
  $query: MutationAssignCourierToRelatedTasksQueryInput
  $body: MutationAssignCourierToRelatedTasksBodyInput
) {
  AssignCourierToRelatedTasks(query: $query, body: $body) {
    message
    status
    __typename
  }
}
` as GeneratedMutation<
  APITypes.AssignCourierToRelatedTasksMutationVariables,
  APITypes.AssignCourierToRelatedTasksMutation
>;
export const CreateUpdateCustomTemplate = /* GraphQL */ `mutation CreateUpdateCustomTemplate(
  $query: MutationCreateUpdateCustomTemplateQueryInput
  $body: MutationCreateUpdateCustomTemplateBodyInput
) {
  CreateUpdateCustomTemplate(query: $query, body: $body) {
    message
    status
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUpdateCustomTemplateMutationVariables,
  APITypes.CreateUpdateCustomTemplateMutation
>;
export const deleteTrackingSettings = /* GraphQL */ `mutation DeleteTrackingSettings(
  $input: DeleteTrackingSettingsInput!
  $condition: ModelTrackingSettingsConditionInput
) {
  deleteTrackingSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTrackingSettingsMutationVariables,
  APITypes.DeleteTrackingSettingsMutation
>;
export const createAccount = /* GraphQL */ `mutation CreateAccount(
  $input: CreateAccountInput!
  $condition: ModelAccountConditionInput
) {
  createAccount(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAccountMutationVariables,
  APITypes.CreateAccountMutation
>;
export const updateAccount = /* GraphQL */ `mutation UpdateAccount(
  $input: UpdateAccountInput!
  $condition: ModelAccountConditionInput
) {
  updateAccount(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAccountMutationVariables,
  APITypes.UpdateAccountMutation
>;
export const deleteAccount = /* GraphQL */ `mutation DeleteAccount(
  $input: DeleteAccountInput!
  $condition: ModelAccountConditionInput
) {
  deleteAccount(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAccountMutationVariables,
  APITypes.DeleteAccountMutation
>;
export const createAutomation = /* GraphQL */ `mutation CreateAutomation(
  $input: CreateAutomationInput!
  $condition: ModelAutomationConditionInput
) {
  createAutomation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAutomationMutationVariables,
  APITypes.CreateAutomationMutation
>;
export const updateAutomation = /* GraphQL */ `mutation UpdateAutomation(
  $input: UpdateAutomationInput!
  $condition: ModelAutomationConditionInput
) {
  updateAutomation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAutomationMutationVariables,
  APITypes.UpdateAutomationMutation
>;
export const deleteAutomation = /* GraphQL */ `mutation DeleteAutomation(
  $input: DeleteAutomationInput!
  $condition: ModelAutomationConditionInput
) {
  deleteAutomation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAutomationMutationVariables,
  APITypes.DeleteAutomationMutation
>;
export const createCarrier = /* GraphQL */ `mutation CreateCarrier(
  $input: CreateCarrierInput!
  $condition: ModelCarrierConditionInput
) {
  createCarrier(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCarrierMutationVariables,
  APITypes.CreateCarrierMutation
>;
export const updateCarrier = /* GraphQL */ `mutation UpdateCarrier(
  $input: UpdateCarrierInput!
  $condition: ModelCarrierConditionInput
) {
  updateCarrier(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCarrierMutationVariables,
  APITypes.UpdateCarrierMutation
>;
export const deleteCarrier = /* GraphQL */ `mutation DeleteCarrier(
  $input: DeleteCarrierInput!
  $condition: ModelCarrierConditionInput
) {
  deleteCarrier(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCarrierMutationVariables,
  APITypes.DeleteCarrierMutation
>;
export const createCarriersStoreConfig = /* GraphQL */ `mutation CreateCarriersStoreConfig(
  $input: CreateCarriersStoreConfigInput!
  $condition: ModelCarriersStoreConfigConditionInput
) {
  createCarriersStoreConfig(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCarriersStoreConfigMutationVariables,
  APITypes.CreateCarriersStoreConfigMutation
>;
export const updateCarriersStoreConfig = /* GraphQL */ `mutation UpdateCarriersStoreConfig(
  $input: UpdateCarriersStoreConfigInput!
  $condition: ModelCarriersStoreConfigConditionInput
) {
  updateCarriersStoreConfig(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCarriersStoreConfigMutationVariables,
  APITypes.UpdateCarriersStoreConfigMutation
>;
export const deleteCarriersStoreConfig = /* GraphQL */ `mutation DeleteCarriersStoreConfig(
  $input: DeleteCarriersStoreConfigInput!
  $condition: ModelCarriersStoreConfigConditionInput
) {
  deleteCarriersStoreConfig(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCarriersStoreConfigMutationVariables,
  APITypes.DeleteCarriersStoreConfigMutation
>;
export const createCatalogHistory = /* GraphQL */ `mutation CreateCatalogHistory(
  $input: CreateCatalogHistoryInput!
  $condition: ModelCatalogHistoryConditionInput
) {
  createCatalogHistory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCatalogHistoryMutationVariables,
  APITypes.CreateCatalogHistoryMutation
>;
export const updateCatalogHistory = /* GraphQL */ `mutation UpdateCatalogHistory(
  $input: UpdateCatalogHistoryInput!
  $condition: ModelCatalogHistoryConditionInput
) {
  updateCatalogHistory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCatalogHistoryMutationVariables,
  APITypes.UpdateCatalogHistoryMutation
>;
export const deleteCatalogHistory = /* GraphQL */ `mutation DeleteCatalogHistory(
  $input: DeleteCatalogHistoryInput!
  $condition: ModelCatalogHistoryConditionInput
) {
  deleteCatalogHistory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCatalogHistoryMutationVariables,
  APITypes.DeleteCatalogHistoryMutation
>;
export const createCustomer = /* GraphQL */ `mutation CreateCustomer(
  $input: CreateCustomerInput!
  $condition: ModelCustomerConditionInput
) {
  createCustomer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCustomerMutationVariables,
  APITypes.CreateCustomerMutation
>;
export const updateCustomer = /* GraphQL */ `mutation UpdateCustomer(
  $input: UpdateCustomerInput!
  $condition: ModelCustomerConditionInput
) {
  updateCustomer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCustomerMutationVariables,
  APITypes.UpdateCustomerMutation
>;
export const deleteCustomer = /* GraphQL */ `mutation DeleteCustomer(
  $input: DeleteCustomerInput!
  $condition: ModelCustomerConditionInput
) {
  deleteCustomer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCustomerMutationVariables,
  APITypes.DeleteCustomerMutation
>;
export const createAddress = /* GraphQL */ `mutation CreateAddress(
  $input: CreateAddressInput!
  $condition: ModelAddressConditionInput
) {
  createAddress(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAddressMutationVariables,
  APITypes.CreateAddressMutation
>;
export const updateAddress = /* GraphQL */ `mutation UpdateAddress(
  $input: UpdateAddressInput!
  $condition: ModelAddressConditionInput
) {
  updateAddress(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAddressMutationVariables,
  APITypes.UpdateAddressMutation
>;
export const deleteAddress = /* GraphQL */ `mutation DeleteAddress(
  $input: DeleteAddressInput!
  $condition: ModelAddressConditionInput
) {
  deleteAddress(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAddressMutationVariables,
  APITypes.DeleteAddressMutation
>;
export const createHistoricalOrder = /* GraphQL */ `mutation CreateHistoricalOrder(
  $input: CreateHistoricalOrderInput!
  $condition: ModelHistoricalOrderConditionInput
) {
  createHistoricalOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateHistoricalOrderMutationVariables,
  APITypes.CreateHistoricalOrderMutation
>;
export const updateHistoricalOrder = /* GraphQL */ `mutation UpdateHistoricalOrder(
  $input: UpdateHistoricalOrderInput!
  $condition: ModelHistoricalOrderConditionInput
) {
  updateHistoricalOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateHistoricalOrderMutationVariables,
  APITypes.UpdateHistoricalOrderMutation
>;
export const deleteHistoricalOrder = /* GraphQL */ `mutation DeleteHistoricalOrder(
  $input: DeleteHistoricalOrderInput!
  $condition: ModelHistoricalOrderConditionInput
) {
  deleteHistoricalOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteHistoricalOrderMutationVariables,
  APITypes.DeleteHistoricalOrderMutation
>;
export const createHistoricalWorksheet = /* GraphQL */ `mutation CreateHistoricalWorksheet(
  $input: CreateHistoricalWorksheetInput!
  $condition: ModelHistoricalWorksheetConditionInput
) {
  createHistoricalWorksheet(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateHistoricalWorksheetMutationVariables,
  APITypes.CreateHistoricalWorksheetMutation
>;
export const updateHistoricalWorksheet = /* GraphQL */ `mutation UpdateHistoricalWorksheet(
  $input: UpdateHistoricalWorksheetInput!
  $condition: ModelHistoricalWorksheetConditionInput
) {
  updateHistoricalWorksheet(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateHistoricalWorksheetMutationVariables,
  APITypes.UpdateHistoricalWorksheetMutation
>;
export const deleteHistoricalWorksheet = /* GraphQL */ `mutation DeleteHistoricalWorksheet(
  $input: DeleteHistoricalWorksheetInput!
  $condition: ModelHistoricalWorksheetConditionInput
) {
  deleteHistoricalWorksheet(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteHistoricalWorksheetMutationVariables,
  APITypes.DeleteHistoricalWorksheetMutation
>;
export const createItemTransfer = /* GraphQL */ `mutation CreateItemTransfer(
  $input: CreateItemTransferInput!
  $condition: ModelItemTransferConditionInput
) {
  createItemTransfer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateItemTransferMutationVariables,
  APITypes.CreateItemTransferMutation
>;
export const updateItemTransfer = /* GraphQL */ `mutation UpdateItemTransfer(
  $input: UpdateItemTransferInput!
  $condition: ModelItemTransferConditionInput
) {
  updateItemTransfer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateItemTransferMutationVariables,
  APITypes.UpdateItemTransferMutation
>;
export const deleteItemTransfer = /* GraphQL */ `mutation DeleteItemTransfer(
  $input: DeleteItemTransferInput!
  $condition: ModelItemTransferConditionInput
) {
  deleteItemTransfer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteItemTransferMutationVariables,
  APITypes.DeleteItemTransferMutation
>;
export const createItemV2 = /* GraphQL */ `mutation CreateItemV2(
  $input: CreateItemV2Input!
  $condition: ModelItemV2ConditionInput
) {
  createItemV2(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateItemV2MutationVariables,
  APITypes.CreateItemV2Mutation
>;
export const updateItemV2 = /* GraphQL */ `mutation UpdateItemV2(
  $input: UpdateItemV2Input!
  $condition: ModelItemV2ConditionInput
) {
  updateItemV2(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateItemV2MutationVariables,
  APITypes.UpdateItemV2Mutation
>;
export const deleteItemV2 = /* GraphQL */ `mutation DeleteItemV2(
  $input: DeleteItemV2Input!
  $condition: ModelItemV2ConditionInput
) {
  deleteItemV2(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteItemV2MutationVariables,
  APITypes.DeleteItemV2Mutation
>;
export const createFulfillmentV2 = /* GraphQL */ `mutation CreateFulfillmentV2(
  $input: CreateFulfillmentV2Input!
  $condition: ModelFulfillmentV2ConditionInput
) {
  createFulfillmentV2(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFulfillmentV2MutationVariables,
  APITypes.CreateFulfillmentV2Mutation
>;
export const updateFulfillmentV2 = /* GraphQL */ `mutation UpdateFulfillmentV2(
  $input: UpdateFulfillmentV2Input!
  $condition: ModelFulfillmentV2ConditionInput
) {
  updateFulfillmentV2(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFulfillmentV2MutationVariables,
  APITypes.UpdateFulfillmentV2Mutation
>;
export const deleteFulfillmentV2 = /* GraphQL */ `mutation DeleteFulfillmentV2(
  $input: DeleteFulfillmentV2Input!
  $condition: ModelFulfillmentV2ConditionInput
) {
  deleteFulfillmentV2(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFulfillmentV2MutationVariables,
  APITypes.DeleteFulfillmentV2Mutation
>;
export const createOMSChanges = /* GraphQL */ `mutation CreateOMSChanges(
  $input: CreateOMSChangesInput!
  $condition: ModelOMSChangesConditionInput
) {
  createOMSChanges(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateOMSChangesMutationVariables,
  APITypes.CreateOMSChangesMutation
>;
export const updateOMSChanges = /* GraphQL */ `mutation UpdateOMSChanges(
  $input: UpdateOMSChangesInput!
  $condition: ModelOMSChangesConditionInput
) {
  updateOMSChanges(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateOMSChangesMutationVariables,
  APITypes.UpdateOMSChangesMutation
>;
export const deleteOMSChanges = /* GraphQL */ `mutation DeleteOMSChanges(
  $input: DeleteOMSChangesInput!
  $condition: ModelOMSChangesConditionInput
) {
  deleteOMSChanges(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteOMSChangesMutationVariables,
  APITypes.DeleteOMSChangesMutation
>;
export const createOrder = /* GraphQL */ `mutation CreateOrder(
  $input: CreateOrderInput!
  $condition: ModelOrderConditionInput
) {
  createOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateOrderMutationVariables,
  APITypes.CreateOrderMutation
>;
export const updateOrder = /* GraphQL */ `mutation UpdateOrder(
  $input: UpdateOrderInput!
  $condition: ModelOrderConditionInput
) {
  updateOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateOrderMutationVariables,
  APITypes.UpdateOrderMutation
>;

export const updateOrderCustom = /* GraphQL */ `mutation UpdateOrder(
  $input: UpdateOrderInput!
  $condition: ModelOrderConditionInput
) {
  updateOrder(input: $input, condition: $condition) {
    groups
    id
    billing {
      id
      discount
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
      addresses {
        items {
          groups
          id
          contactName
        }
        nextToken
        startedAt
        __typename
      }
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
        lastName
      }
    }
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateOrderMutationVariables,
  APITypes.UpdateOrderMutation
>;

export const deleteOrder = /* GraphQL */ `mutation DeleteOrder(
  $input: DeleteOrderInput!
  $condition: ModelOrderConditionInput
) {
  deleteOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteOrderMutationVariables,
  APITypes.DeleteOrderMutation
>;
export const createItemLogs = /* GraphQL */ `mutation CreateItemLogs(
  $input: CreateItemLogsInput!
  $condition: ModelItemLogsConditionInput
) {
  createItemLogs(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateItemLogsMutationVariables,
  APITypes.CreateItemLogsMutation
>;
export const updateItemLogs = /* GraphQL */ `mutation UpdateItemLogs(
  $input: UpdateItemLogsInput!
  $condition: ModelItemLogsConditionInput
) {
  updateItemLogs(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateItemLogsMutationVariables,
  APITypes.UpdateItemLogsMutation
>;
export const deleteItemLogs = /* GraphQL */ `mutation DeleteItemLogs(
  $input: DeleteItemLogsInput!
  $condition: ModelItemLogsConditionInput
) {
  deleteItemLogs(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteItemLogsMutationVariables,
  APITypes.DeleteItemLogsMutation
>;
export const createPackage = /* GraphQL */ `mutation CreatePackage(
  $input: CreatePackageInput!
  $condition: ModelPackageConditionInput
) {
  createPackage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePackageMutationVariables,
  APITypes.CreatePackageMutation
>;
export const updatePackage = /* GraphQL */ `mutation UpdatePackage(
  $input: UpdatePackageInput!
  $condition: ModelPackageConditionInput
) {
  updatePackage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePackageMutationVariables,
  APITypes.UpdatePackageMutation
>;
export const deletePackage = /* GraphQL */ `mutation DeletePackage(
  $input: DeletePackageInput!
  $condition: ModelPackageConditionInput
) {
  deletePackage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePackageMutationVariables,
  APITypes.DeletePackageMutation
>;
export const createPickingActions = /* GraphQL */ `mutation CreatePickingActions(
  $input: CreatePickingActionsInput!
  $condition: ModelPickingActionsConditionInput
) {
  createPickingActions(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePickingActionsMutationVariables,
  APITypes.CreatePickingActionsMutation
>;
export const updatePickingActions = /* GraphQL */ `mutation UpdatePickingActions(
  $input: UpdatePickingActionsInput!
  $condition: ModelPickingActionsConditionInput
) {
  updatePickingActions(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePickingActionsMutationVariables,
  APITypes.UpdatePickingActionsMutation
>;
export const deletePickingActions = /* GraphQL */ `mutation DeletePickingActions(
  $input: DeletePickingActionsInput!
  $condition: ModelPickingActionsConditionInput
) {
  deletePickingActions(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePickingActionsMutationVariables,
  APITypes.DeletePickingActionsMutation
>;
export const createReturn = /* GraphQL */ `mutation CreateReturn(
  $input: CreateReturnInput!
  $condition: ModelReturnConditionInput
) {
  createReturn(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateReturnMutationVariables,
  APITypes.CreateReturnMutation
>;
export const updateReturn = /* GraphQL */ `mutation UpdateReturn(
  $input: UpdateReturnInput!
  $condition: ModelReturnConditionInput
) {
  updateReturn(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateReturnMutationVariables,
  APITypes.UpdateReturnMutation
>;
export const deleteReturn = /* GraphQL */ `mutation DeleteReturn(
  $input: DeleteReturnInput!
  $condition: ModelReturnConditionInput
) {
  deleteReturn(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteReturnMutationVariables,
  APITypes.DeleteReturnMutation
>;
export const createRMAShipping = /* GraphQL */ `mutation CreateRMAShipping(
  $input: CreateRMAShippingInput!
  $condition: ModelRMAShippingConditionInput
) {
  createRMAShipping(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRMAShippingMutationVariables,
  APITypes.CreateRMAShippingMutation
>;
export const updateRMAShipping = /* GraphQL */ `mutation UpdateRMAShipping(
  $input: UpdateRMAShippingInput!
  $condition: ModelRMAShippingConditionInput
) {
  updateRMAShipping(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRMAShippingMutationVariables,
  APITypes.UpdateRMAShippingMutation
>;
export const deleteRMAShipping = /* GraphQL */ `mutation DeleteRMAShipping(
  $input: DeleteRMAShippingInput!
  $condition: ModelRMAShippingConditionInput
) {
  deleteRMAShipping(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRMAShippingMutationVariables,
  APITypes.DeleteRMAShippingMutation
>;
export const createRMAItems = /* GraphQL */ `mutation CreateRMAItems(
  $input: CreateRMAItemsInput!
  $condition: ModelRMAItemsConditionInput
) {
  createRMAItems(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRMAItemsMutationVariables,
  APITypes.CreateRMAItemsMutation
>;
export const updateRMAItems = /* GraphQL */ `mutation UpdateRMAItems(
  $input: UpdateRMAItemsInput!
  $condition: ModelRMAItemsConditionInput
) {
  updateRMAItems(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRMAItemsMutationVariables,
  APITypes.UpdateRMAItemsMutation
>;
export const deleteRMAItems = /* GraphQL */ `mutation DeleteRMAItems(
  $input: DeleteRMAItemsInput!
  $condition: ModelRMAItemsConditionInput
) {
  deleteRMAItems(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRMAItemsMutationVariables,
  APITypes.DeleteRMAItemsMutation
>;
export const createRMAReplacement = /* GraphQL */ `mutation CreateRMAReplacement(
  $input: CreateRMAReplacementInput!
  $condition: ModelRMAReplacementConditionInput
) {
  createRMAReplacement(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRMAReplacementMutationVariables,
  APITypes.CreateRMAReplacementMutation
>;
export const updateRMAReplacement = /* GraphQL */ `mutation UpdateRMAReplacement(
  $input: UpdateRMAReplacementInput!
  $condition: ModelRMAReplacementConditionInput
) {
  updateRMAReplacement(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRMAReplacementMutationVariables,
  APITypes.UpdateRMAReplacementMutation
>;
export const deleteRMAReplacement = /* GraphQL */ `mutation DeleteRMAReplacement(
  $input: DeleteRMAReplacementInput!
  $condition: ModelRMAReplacementConditionInput
) {
  deleteRMAReplacement(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRMAReplacementMutationVariables,
  APITypes.DeleteRMAReplacementMutation
>;
export const createRMARefund = /* GraphQL */ `mutation CreateRMARefund(
  $input: CreateRMARefundInput!
  $condition: ModelRMARefundConditionInput
) {
  createRMARefund(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRMARefundMutationVariables,
  APITypes.CreateRMARefundMutation
>;
export const updateRMARefund = /* GraphQL */ `mutation UpdateRMARefund(
  $input: UpdateRMARefundInput!
  $condition: ModelRMARefundConditionInput
) {
  updateRMARefund(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRMARefundMutationVariables,
  APITypes.UpdateRMARefundMutation
>;
export const deleteRMARefund = /* GraphQL */ `mutation DeleteRMARefund(
  $input: DeleteRMARefundInput!
  $condition: ModelRMARefundConditionInput
) {
  deleteRMARefund(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRMARefundMutationVariables,
  APITypes.DeleteRMARefundMutation
>;
export const createRMAStoreCredit = /* GraphQL */ `mutation CreateRMAStoreCredit(
  $input: CreateRMAStoreCreditInput!
  $condition: ModelRMAStoreCreditConditionInput
) {
  createRMAStoreCredit(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRMAStoreCreditMutationVariables,
  APITypes.CreateRMAStoreCreditMutation
>;
export const updateRMAStoreCredit = /* GraphQL */ `mutation UpdateRMAStoreCredit(
  $input: UpdateRMAStoreCreditInput!
  $condition: ModelRMAStoreCreditConditionInput
) {
  updateRMAStoreCredit(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRMAStoreCreditMutationVariables,
  APITypes.UpdateRMAStoreCreditMutation
>;
export const deleteRMAStoreCredit = /* GraphQL */ `mutation DeleteRMAStoreCredit(
  $input: DeleteRMAStoreCreditInput!
  $condition: ModelRMAStoreCreditConditionInput
) {
  deleteRMAStoreCredit(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRMAStoreCreditMutationVariables,
  APITypes.DeleteRMAStoreCreditMutation
>;
export const createRMASageItem = /* GraphQL */ `mutation CreateRMASageItem(
  $input: CreateRMASageItemInput!
  $condition: ModelRMASageItemConditionInput
) {
  createRMASageItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRMASageItemMutationVariables,
  APITypes.CreateRMASageItemMutation
>;
export const updateRMASageItem = /* GraphQL */ `mutation UpdateRMASageItem(
  $input: UpdateRMASageItemInput!
  $condition: ModelRMASageItemConditionInput
) {
  updateRMASageItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRMASageItemMutationVariables,
  APITypes.UpdateRMASageItemMutation
>;
export const deleteRMASageItem = /* GraphQL */ `mutation DeleteRMASageItem(
  $input: DeleteRMASageItemInput!
  $condition: ModelRMASageItemConditionInput
) {
  deleteRMASageItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRMASageItemMutationVariables,
  APITypes.DeleteRMASageItemMutation
>;
export const createRMAItemResolution = /* GraphQL */ `mutation CreateRMAItemResolution(
  $input: CreateRMAItemResolutionInput!
  $condition: ModelRMAItemResolutionConditionInput
) {
  createRMAItemResolution(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRMAItemResolutionMutationVariables,
  APITypes.CreateRMAItemResolutionMutation
>;
export const updateRMAItemResolution = /* GraphQL */ `mutation UpdateRMAItemResolution(
  $input: UpdateRMAItemResolutionInput!
  $condition: ModelRMAItemResolutionConditionInput
) {
  updateRMAItemResolution(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRMAItemResolutionMutationVariables,
  APITypes.UpdateRMAItemResolutionMutation
>;
export const deleteRMAItemResolution = /* GraphQL */ `mutation DeleteRMAItemResolution(
  $input: DeleteRMAItemResolutionInput!
  $condition: ModelRMAItemResolutionConditionInput
) {
  deleteRMAItemResolution(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRMAItemResolutionMutationVariables,
  APITypes.DeleteRMAItemResolutionMutation
>;
export const createRMATransaction = /* GraphQL */ `mutation CreateRMATransaction(
  $input: CreateRMATransactionInput!
  $condition: ModelRMATransactionConditionInput
) {
  createRMATransaction(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRMATransactionMutationVariables,
  APITypes.CreateRMATransactionMutation
>;
export const updateRMATransaction = /* GraphQL */ `mutation UpdateRMATransaction(
  $input: UpdateRMATransactionInput!
  $condition: ModelRMATransactionConditionInput
) {
  updateRMATransaction(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRMATransactionMutationVariables,
  APITypes.UpdateRMATransactionMutation
>;
export const deleteRMATransaction = /* GraphQL */ `mutation DeleteRMATransaction(
  $input: DeleteRMATransactionInput!
  $condition: ModelRMATransactionConditionInput
) {
  deleteRMATransaction(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRMATransactionMutationVariables,
  APITypes.DeleteRMATransactionMutation
>;
export const createRMAHistory = /* GraphQL */ `mutation CreateRMAHistory(
  $input: CreateRMAHistoryInput!
  $condition: ModelRMAHistoryConditionInput
) {
  createRMAHistory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRMAHistoryMutationVariables,
  APITypes.CreateRMAHistoryMutation
>;
export const updateRMAHistory = /* GraphQL */ `mutation UpdateRMAHistory(
  $input: UpdateRMAHistoryInput!
  $condition: ModelRMAHistoryConditionInput
) {
  updateRMAHistory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRMAHistoryMutationVariables,
  APITypes.UpdateRMAHistoryMutation
>;
export const deleteRMAHistory = /* GraphQL */ `mutation DeleteRMAHistory(
  $input: DeleteRMAHistoryInput!
  $condition: ModelRMAHistoryConditionInput
) {
  deleteRMAHistory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRMAHistoryMutationVariables,
  APITypes.DeleteRMAHistoryMutation
>;
export const createRMASettings = /* GraphQL */ `mutation CreateRMASettings(
  $input: CreateRMASettingsInput!
  $condition: ModelRMASettingsConditionInput
) {
  createRMASettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRMASettingsMutationVariables,
  APITypes.CreateRMASettingsMutation
>;
export const updateRMASettings = /* GraphQL */ `mutation UpdateRMASettings(
  $input: UpdateRMASettingsInput!
  $condition: ModelRMASettingsConditionInput
) {
  updateRMASettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRMASettingsMutationVariables,
  APITypes.UpdateRMASettingsMutation
>;
export const deleteRMASettings = /* GraphQL */ `mutation DeleteRMASettings(
  $input: DeleteRMASettingsInput!
  $condition: ModelRMASettingsConditionInput
) {
  deleteRMASettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRMASettingsMutationVariables,
  APITypes.DeleteRMASettingsMutation
>;
export const createRMAPolicies = /* GraphQL */ `mutation CreateRMAPolicies(
  $input: CreateRMAPoliciesInput!
  $condition: ModelRMAPoliciesConditionInput
) {
  createRMAPolicies(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRMAPoliciesMutationVariables,
  APITypes.CreateRMAPoliciesMutation
>;
export const updateRMAPolicies = /* GraphQL */ `mutation UpdateRMAPolicies(
  $input: UpdateRMAPoliciesInput!
  $condition: ModelRMAPoliciesConditionInput
) {
  updateRMAPolicies(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRMAPoliciesMutationVariables,
  APITypes.UpdateRMAPoliciesMutation
>;
export const deleteRMAPolicies = /* GraphQL */ `mutation DeleteRMAPolicies(
  $input: DeleteRMAPoliciesInput!
  $condition: ModelRMAPoliciesConditionInput
) {
  deleteRMAPolicies(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRMAPoliciesMutationVariables,
  APITypes.DeleteRMAPoliciesMutation
>;
export const createRMAPoliciesRules = /* GraphQL */ `mutation CreateRMAPoliciesRules(
  $input: CreateRMAPoliciesRulesInput!
  $condition: ModelRMAPoliciesRulesConditionInput
) {
  createRMAPoliciesRules(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRMAPoliciesRulesMutationVariables,
  APITypes.CreateRMAPoliciesRulesMutation
>;
export const updateRMAPoliciesRules = /* GraphQL */ `mutation UpdateRMAPoliciesRules(
  $input: UpdateRMAPoliciesRulesInput!
  $condition: ModelRMAPoliciesRulesConditionInput
) {
  updateRMAPoliciesRules(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRMAPoliciesRulesMutationVariables,
  APITypes.UpdateRMAPoliciesRulesMutation
>;
export const deleteRMAPoliciesRules = /* GraphQL */ `mutation DeleteRMAPoliciesRules(
  $input: DeleteRMAPoliciesRulesInput!
  $condition: ModelRMAPoliciesRulesConditionInput
) {
  deleteRMAPoliciesRules(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRMAPoliciesRulesMutationVariables,
  APITypes.DeleteRMAPoliciesRulesMutation
>;
export const createRMAPoliciesGroup = /* GraphQL */ `mutation CreateRMAPoliciesGroup(
  $input: CreateRMAPoliciesGroupInput!
  $condition: ModelRMAPoliciesGroupConditionInput
) {
  createRMAPoliciesGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRMAPoliciesGroupMutationVariables,
  APITypes.CreateRMAPoliciesGroupMutation
>;
export const updateRMAPoliciesGroup = /* GraphQL */ `mutation UpdateRMAPoliciesGroup(
  $input: UpdateRMAPoliciesGroupInput!
  $condition: ModelRMAPoliciesGroupConditionInput
) {
  updateRMAPoliciesGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRMAPoliciesGroupMutationVariables,
  APITypes.UpdateRMAPoliciesGroupMutation
>;
export const deleteRMAPoliciesGroup = /* GraphQL */ `mutation DeleteRMAPoliciesGroup(
  $input: DeleteRMAPoliciesGroupInput!
  $condition: ModelRMAPoliciesGroupConditionInput
) {
  deleteRMAPoliciesGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRMAPoliciesGroupMutationVariables,
  APITypes.DeleteRMAPoliciesGroupMutation
>;
export const createRMAForms = /* GraphQL */ `mutation CreateRMAForms(
  $input: CreateRMAFormsInput!
  $condition: ModelRMAFormsConditionInput
) {
  createRMAForms(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRMAFormsMutationVariables,
  APITypes.CreateRMAFormsMutation
>;
export const updateRMAForms = /* GraphQL */ `mutation UpdateRMAForms(
  $input: UpdateRMAFormsInput!
  $condition: ModelRMAFormsConditionInput
) {
  updateRMAForms(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRMAFormsMutationVariables,
  APITypes.UpdateRMAFormsMutation
>;
export const deleteRMAForms = /* GraphQL */ `mutation DeleteRMAForms(
  $input: DeleteRMAFormsInput!
  $condition: ModelRMAFormsConditionInput
) {
  deleteRMAForms(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRMAFormsMutationVariables,
  APITypes.DeleteRMAFormsMutation
>;
export const createRMAPerks = /* GraphQL */ `mutation CreateRMAPerks(
  $input: CreateRMAPerksInput!
  $condition: ModelRMAPerksConditionInput
) {
  createRMAPerks(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRMAPerksMutationVariables,
  APITypes.CreateRMAPerksMutation
>;
export const updateRMAPerks = /* GraphQL */ `mutation UpdateRMAPerks(
  $input: UpdateRMAPerksInput!
  $condition: ModelRMAPerksConditionInput
) {
  updateRMAPerks(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRMAPerksMutationVariables,
  APITypes.UpdateRMAPerksMutation
>;
export const deleteRMAPerks = /* GraphQL */ `mutation DeleteRMAPerks(
  $input: DeleteRMAPerksInput!
  $condition: ModelRMAPerksConditionInput
) {
  deleteRMAPerks(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRMAPerksMutationVariables,
  APITypes.DeleteRMAPerksMutation
>;
export const createRMAReturnReasons = /* GraphQL */ `mutation CreateRMAReturnReasons(
  $input: CreateRMAReturnReasonsInput!
  $condition: ModelRMAReturnReasonsConditionInput
) {
  createRMAReturnReasons(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRMAReturnReasonsMutationVariables,
  APITypes.CreateRMAReturnReasonsMutation
>;
export const updateRMAReturnReasons = /* GraphQL */ `mutation UpdateRMAReturnReasons(
  $input: UpdateRMAReturnReasonsInput!
  $condition: ModelRMAReturnReasonsConditionInput
) {
  updateRMAReturnReasons(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRMAReturnReasonsMutationVariables,
  APITypes.UpdateRMAReturnReasonsMutation
>;
export const deleteRMAReturnReasons = /* GraphQL */ `mutation DeleteRMAReturnReasons(
  $input: DeleteRMAReturnReasonsInput!
  $condition: ModelRMAReturnReasonsConditionInput
) {
  deleteRMAReturnReasons(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRMAReturnReasonsMutationVariables,
  APITypes.DeleteRMAReturnReasonsMutation
>;
export const createRMASettingDeliveryMethod = /* GraphQL */ `mutation CreateRMASettingDeliveryMethod(
  $input: CreateRMASettingDeliveryMethodInput!
  $condition: ModelRMASettingDeliveryMethodConditionInput
) {
  createRMASettingDeliveryMethod(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRMASettingDeliveryMethodMutationVariables,
  APITypes.CreateRMASettingDeliveryMethodMutation
>;
export const updateRMASettingDeliveryMethod = /* GraphQL */ `mutation UpdateRMASettingDeliveryMethod(
  $input: UpdateRMASettingDeliveryMethodInput!
  $condition: ModelRMASettingDeliveryMethodConditionInput
) {
  updateRMASettingDeliveryMethod(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRMASettingDeliveryMethodMutationVariables,
  APITypes.UpdateRMASettingDeliveryMethodMutation
>;
export const deleteRMASettingDeliveryMethod = /* GraphQL */ `mutation DeleteRMASettingDeliveryMethod(
  $input: DeleteRMASettingDeliveryMethodInput!
  $condition: ModelRMASettingDeliveryMethodConditionInput
) {
  deleteRMASettingDeliveryMethod(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRMASettingDeliveryMethodMutationVariables,
  APITypes.DeleteRMASettingDeliveryMethodMutation
>;
export const createRMALogistics = /* GraphQL */ `mutation CreateRMALogistics(
  $input: CreateRMALogisticsInput!
  $condition: ModelRMALogisticsConditionInput
) {
  createRMALogistics(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRMALogisticsMutationVariables,
  APITypes.CreateRMALogisticsMutation
>;
export const updateRMALogistics = /* GraphQL */ `mutation UpdateRMALogistics(
  $input: UpdateRMALogisticsInput!
  $condition: ModelRMALogisticsConditionInput
) {
  updateRMALogistics(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRMALogisticsMutationVariables,
  APITypes.UpdateRMALogisticsMutation
>;
export const deleteRMALogistics = /* GraphQL */ `mutation DeleteRMALogistics(
  $input: DeleteRMALogisticsInput!
  $condition: ModelRMALogisticsConditionInput
) {
  deleteRMALogistics(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRMALogisticsMutationVariables,
  APITypes.DeleteRMALogisticsMutation
>;
export const createSalesChannel = /* GraphQL */ `mutation CreateSalesChannel(
  $input: CreateSalesChannelInput!
  $condition: ModelSalesChannelConditionInput
) {
  createSalesChannel(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSalesChannelMutationVariables,
  APITypes.CreateSalesChannelMutation
>;
export const updateSalesChannel = /* GraphQL */ `mutation UpdateSalesChannel(
  $input: UpdateSalesChannelInput!
  $condition: ModelSalesChannelConditionInput
) {
  updateSalesChannel(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSalesChannelMutationVariables,
  APITypes.UpdateSalesChannelMutation
>;
export const deleteSalesChannel = /* GraphQL */ `mutation DeleteSalesChannel(
  $input: DeleteSalesChannelInput!
  $condition: ModelSalesChannelConditionInput
) {
  deleteSalesChannel(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSalesChannelMutationVariables,
  APITypes.DeleteSalesChannelMutation
>;
export const createService = /* GraphQL */ `mutation CreateService(
  $input: CreateServiceInput!
  $condition: ModelServiceConditionInput
) {
  createService(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateServiceMutationVariables,
  APITypes.CreateServiceMutation
>;
export const updateService = /* GraphQL */ `mutation UpdateService(
  $input: UpdateServiceInput!
  $condition: ModelServiceConditionInput
) {
  updateService(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateServiceMutationVariables,
  APITypes.UpdateServiceMutation
>;
export const deleteService = /* GraphQL */ `mutation DeleteService(
  $input: DeleteServiceInput!
  $condition: ModelServiceConditionInput
) {
  deleteService(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteServiceMutationVariables,
  APITypes.DeleteServiceMutation
>;
export const createStoreConfig = /* GraphQL */ `mutation CreateStoreConfig(
  $input: CreateStoreConfigInput!
  $condition: ModelStoreConfigConditionInput
) {
  createStoreConfig(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateStoreConfigMutationVariables,
  APITypes.CreateStoreConfigMutation
>;
export const updateStoreConfig = /* GraphQL */ `mutation UpdateStoreConfig(
  $input: UpdateStoreConfigInput!
  $condition: ModelStoreConfigConditionInput
) {
  updateStoreConfig(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateStoreConfigMutationVariables,
  APITypes.UpdateStoreConfigMutation
>;
export const deleteStoreConfig = /* GraphQL */ `mutation DeleteStoreConfig(
  $input: DeleteStoreConfigInput!
  $condition: ModelStoreConfigConditionInput
) {
  deleteStoreConfig(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteStoreConfigMutationVariables,
  APITypes.DeleteStoreConfigMutation
>;
export const createTags = /* GraphQL */ `mutation CreateTags(
  $input: CreateTagsInput!
  $condition: ModelTagsConditionInput
) {
  createTags(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTagsMutationVariables,
  APITypes.CreateTagsMutation
>;
export const updateTags = /* GraphQL */ `mutation UpdateTags(
  $input: UpdateTagsInput!
  $condition: ModelTagsConditionInput
) {
  updateTags(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTagsMutationVariables,
  APITypes.UpdateTagsMutation
>;
export const deleteTags = /* GraphQL */ `mutation DeleteTags(
  $input: DeleteTagsInput!
  $condition: ModelTagsConditionInput
) {
  deleteTags(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTagsMutationVariables,
  APITypes.DeleteTagsMutation
>;
export const createTrackingLabel = /* GraphQL */ `mutation CreateTrackingLabel(
  $input: CreateTrackingLabelInput!
  $condition: ModelTrackingLabelConditionInput
) {
  createTrackingLabel(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTrackingLabelMutationVariables,
  APITypes.CreateTrackingLabelMutation
>;
export const updateTrackingLabel = /* GraphQL */ `mutation UpdateTrackingLabel(
  $input: UpdateTrackingLabelInput!
  $condition: ModelTrackingLabelConditionInput
) {
  updateTrackingLabel(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTrackingLabelMutationVariables,
  APITypes.UpdateTrackingLabelMutation
>;
export const deleteTrackingLabel = /* GraphQL */ `mutation DeleteTrackingLabel(
  $input: DeleteTrackingLabelInput!
  $condition: ModelTrackingLabelConditionInput
) {
  deleteTrackingLabel(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTrackingLabelMutationVariables,
  APITypes.DeleteTrackingLabelMutation
>;
export const createTrackingSettings = /* GraphQL */ `mutation CreateTrackingSettings(
  $input: CreateTrackingSettingsInput!
  $condition: ModelTrackingSettingsConditionInput
) {
  createTrackingSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTrackingSettingsMutationVariables,
  APITypes.CreateTrackingSettingsMutation
>;
export const updateTrackingSettings = /* GraphQL */ `mutation UpdateTrackingSettings(
  $input: UpdateTrackingSettingsInput!
  $condition: ModelTrackingSettingsConditionInput
) {
  updateTrackingSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTrackingSettingsMutationVariables,
  APITypes.UpdateTrackingSettingsMutation
>;
export const createTrackingTimeline = /* GraphQL */ `mutation CreateTrackingTimeline(
  $input: CreateTrackingTimelineInput!
  $condition: ModelTrackingTimelineConditionInput
) {
  createTrackingTimeline(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTrackingTimelineMutationVariables,
  APITypes.CreateTrackingTimelineMutation
>;
export const updateTrackingTimeline = /* GraphQL */ `mutation UpdateTrackingTimeline(
  $input: UpdateTrackingTimelineInput!
  $condition: ModelTrackingTimelineConditionInput
) {
  updateTrackingTimeline(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTrackingTimelineMutationVariables,
  APITypes.UpdateTrackingTimelineMutation
>;
export const deleteTrackingTimeline = /* GraphQL */ `mutation DeleteTrackingTimeline(
  $input: DeleteTrackingTimelineInput!
  $condition: ModelTrackingTimelineConditionInput
) {
  deleteTrackingTimeline(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTrackingTimelineMutationVariables,
  APITypes.DeleteTrackingTimelineMutation
>;
export const createSalesSource = /* GraphQL */ `mutation CreateSalesSource(
  $input: CreateSalesSourceInput!
  $condition: ModelSalesSourceConditionInput
) {
  createSalesSource(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSalesSourceMutationVariables,
  APITypes.CreateSalesSourceMutation
>;
export const updateSalesSource = /* GraphQL */ `mutation UpdateSalesSource(
  $input: UpdateSalesSourceInput!
  $condition: ModelSalesSourceConditionInput
) {
  updateSalesSource(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSalesSourceMutationVariables,
  APITypes.UpdateSalesSourceMutation
>;
export const deleteSalesSource = /* GraphQL */ `mutation DeleteSalesSource(
  $input: DeleteSalesSourceInput!
  $condition: ModelSalesSourceConditionInput
) {
  deleteSalesSource(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSalesSourceMutationVariables,
  APITypes.DeleteSalesSourceMutation
>;
export const createWebhook = /* GraphQL */ `mutation CreateWebhook(
  $input: CreateWebhookInput!
  $condition: ModelWebhookConditionInput
) {
  createWebhook(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateWebhookMutationVariables,
  APITypes.CreateWebhookMutation
>;
export const updateWebhook = /* GraphQL */ `mutation UpdateWebhook(
  $input: UpdateWebhookInput!
  $condition: ModelWebhookConditionInput
) {
  updateWebhook(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateWebhookMutationVariables,
  APITypes.UpdateWebhookMutation
>;
export const deleteWebhook = /* GraphQL */ `mutation DeleteWebhook(
  $input: DeleteWebhookInput!
  $condition: ModelWebhookConditionInput
) {
  deleteWebhook(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteWebhookMutationVariables,
  APITypes.DeleteWebhookMutation
>;
export const createWorksheet = /* GraphQL */ `mutation CreateWorksheet(
  $input: CreateWorksheetInput!
  $condition: ModelWorksheetConditionInput
) {
  createWorksheet(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateWorksheetMutationVariables,
  APITypes.CreateWorksheetMutation
>;
export const updateWorksheet = /* GraphQL */ `mutation UpdateWorksheet(
  $input: UpdateWorksheetInput!
  $condition: ModelWorksheetConditionInput
) {
  updateWorksheet(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateWorksheetMutationVariables,
  APITypes.UpdateWorksheetMutation
>;
export const deleteWorksheet = /* GraphQL */ `mutation DeleteWorksheet(
  $input: DeleteWorksheetInput!
  $condition: ModelWorksheetConditionInput
) {
  deleteWorksheet(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteWorksheetMutationVariables,
  APITypes.DeleteWorksheetMutation
>;
