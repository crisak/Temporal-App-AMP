/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateWorksheetProcess = /* GraphQL */ `subscription OnCreateWorksheetProcess {
  onCreateWorksheetProcess {
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
` as GeneratedSubscription<
  APITypes.OnCreateWorksheetProcessSubscriptionVariables,
  APITypes.OnCreateWorksheetProcessSubscription
>;
export const onCreateAccount = /* GraphQL */ `subscription OnCreateAccount($filter: ModelSubscriptionAccountFilterInput) {
  onCreateAccount(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAccountSubscriptionVariables,
  APITypes.OnCreateAccountSubscription
>;
export const onUpdateAccount = /* GraphQL */ `subscription OnUpdateAccount($filter: ModelSubscriptionAccountFilterInput) {
  onUpdateAccount(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAccountSubscriptionVariables,
  APITypes.OnUpdateAccountSubscription
>;
export const onDeleteAccount = /* GraphQL */ `subscription OnDeleteAccount($filter: ModelSubscriptionAccountFilterInput) {
  onDeleteAccount(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAccountSubscriptionVariables,
  APITypes.OnDeleteAccountSubscription
>;
export const onCreateAutomation = /* GraphQL */ `subscription OnCreateAutomation(
  $filter: ModelSubscriptionAutomationFilterInput
) {
  onCreateAutomation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAutomationSubscriptionVariables,
  APITypes.OnCreateAutomationSubscription
>;
export const onUpdateAutomation = /* GraphQL */ `subscription OnUpdateAutomation(
  $filter: ModelSubscriptionAutomationFilterInput
) {
  onUpdateAutomation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAutomationSubscriptionVariables,
  APITypes.OnUpdateAutomationSubscription
>;
export const onDeleteAutomation = /* GraphQL */ `subscription OnDeleteAutomation(
  $filter: ModelSubscriptionAutomationFilterInput
) {
  onDeleteAutomation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAutomationSubscriptionVariables,
  APITypes.OnDeleteAutomationSubscription
>;
export const onCreateCarriersStoreConfig = /* GraphQL */ `subscription OnCreateCarriersStoreConfig(
  $filter: ModelSubscriptionCarriersStoreConfigFilterInput
) {
  onCreateCarriersStoreConfig(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCarriersStoreConfigSubscriptionVariables,
  APITypes.OnCreateCarriersStoreConfigSubscription
>;
export const onUpdateCarriersStoreConfig = /* GraphQL */ `subscription OnUpdateCarriersStoreConfig(
  $filter: ModelSubscriptionCarriersStoreConfigFilterInput
) {
  onUpdateCarriersStoreConfig(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCarriersStoreConfigSubscriptionVariables,
  APITypes.OnUpdateCarriersStoreConfigSubscription
>;
export const onDeleteCarriersStoreConfig = /* GraphQL */ `subscription OnDeleteCarriersStoreConfig(
  $filter: ModelSubscriptionCarriersStoreConfigFilterInput
) {
  onDeleteCarriersStoreConfig(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCarriersStoreConfigSubscriptionVariables,
  APITypes.OnDeleteCarriersStoreConfigSubscription
>;
export const onCreateCustomer = /* GraphQL */ `subscription OnCreateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
  onCreateCustomer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCustomerSubscriptionVariables,
  APITypes.OnCreateCustomerSubscription
>;
export const onUpdateCustomer = /* GraphQL */ `subscription OnUpdateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
  onUpdateCustomer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCustomerSubscriptionVariables,
  APITypes.OnUpdateCustomerSubscription
>;
export const onDeleteCustomer = /* GraphQL */ `subscription OnDeleteCustomer($filter: ModelSubscriptionCustomerFilterInput) {
  onDeleteCustomer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCustomerSubscriptionVariables,
  APITypes.OnDeleteCustomerSubscription
>;
export const onCreateAddress = /* GraphQL */ `subscription OnCreateAddress($filter: ModelSubscriptionAddressFilterInput) {
  onCreateAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAddressSubscriptionVariables,
  APITypes.OnCreateAddressSubscription
>;
export const onUpdateAddress = /* GraphQL */ `subscription OnUpdateAddress($filter: ModelSubscriptionAddressFilterInput) {
  onUpdateAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAddressSubscriptionVariables,
  APITypes.OnUpdateAddressSubscription
>;
export const onDeleteAddress = /* GraphQL */ `subscription OnDeleteAddress($filter: ModelSubscriptionAddressFilterInput) {
  onDeleteAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAddressSubscriptionVariables,
  APITypes.OnDeleteAddressSubscription
>;
export const onCreateItemTransfer = /* GraphQL */ `subscription OnCreateItemTransfer(
  $filter: ModelSubscriptionItemTransferFilterInput
) {
  onCreateItemTransfer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateItemTransferSubscriptionVariables,
  APITypes.OnCreateItemTransferSubscription
>;
export const onUpdateItemTransfer = /* GraphQL */ `subscription OnUpdateItemTransfer(
  $filter: ModelSubscriptionItemTransferFilterInput
) {
  onUpdateItemTransfer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateItemTransferSubscriptionVariables,
  APITypes.OnUpdateItemTransferSubscription
>;
export const onDeleteItemTransfer = /* GraphQL */ `subscription OnDeleteItemTransfer(
  $filter: ModelSubscriptionItemTransferFilterInput
) {
  onDeleteItemTransfer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteItemTransferSubscriptionVariables,
  APITypes.OnDeleteItemTransferSubscription
>;
export const onCreateItemV2 = /* GraphQL */ `subscription OnCreateItemV2($filter: ModelSubscriptionItemV2FilterInput) {
  onCreateItemV2(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateItemV2SubscriptionVariables,
  APITypes.OnCreateItemV2Subscription
>;
export const onUpdateItemV2 = /* GraphQL */ `subscription OnUpdateItemV2($filter: ModelSubscriptionItemV2FilterInput) {
  onUpdateItemV2(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateItemV2SubscriptionVariables,
  APITypes.OnUpdateItemV2Subscription
>;
export const onDeleteItemV2 = /* GraphQL */ `subscription OnDeleteItemV2($filter: ModelSubscriptionItemV2FilterInput) {
  onDeleteItemV2(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteItemV2SubscriptionVariables,
  APITypes.OnDeleteItemV2Subscription
>;
export const onCreateFulfillmentV2 = /* GraphQL */ `subscription OnCreateFulfillmentV2(
  $filter: ModelSubscriptionFulfillmentV2FilterInput
) {
  onCreateFulfillmentV2(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFulfillmentV2SubscriptionVariables,
  APITypes.OnCreateFulfillmentV2Subscription
>;
export const onUpdateFulfillmentV2 = /* GraphQL */ `subscription OnUpdateFulfillmentV2(
  $filter: ModelSubscriptionFulfillmentV2FilterInput
) {
  onUpdateFulfillmentV2(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFulfillmentV2SubscriptionVariables,
  APITypes.OnUpdateFulfillmentV2Subscription
>;
export const onDeleteFulfillmentV2 = /* GraphQL */ `subscription OnDeleteFulfillmentV2(
  $filter: ModelSubscriptionFulfillmentV2FilterInput
) {
  onDeleteFulfillmentV2(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFulfillmentV2SubscriptionVariables,
  APITypes.OnDeleteFulfillmentV2Subscription
>;
export const onCreateOrder = /* GraphQL */ `subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
  onCreateOrder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOrderSubscriptionVariables,
  APITypes.OnCreateOrderSubscription
>;
export const onUpdateOrderCustom = /* GraphQL */ `subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
  onUpdateOrder(filter: $filter) {
    groups
    id
    orderId
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateOrderSubscriptionVariables,
  APITypes.OnUpdateOrderSubscription
>;
export const onUpdateOrder = /* GraphQL */ `subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
  onUpdateOrder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOrderSubscriptionVariables,
  APITypes.OnUpdateOrderSubscription
>;
export const onDeleteOrder = /* GraphQL */ `subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
  onDeleteOrder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOrderSubscriptionVariables,
  APITypes.OnDeleteOrderSubscription
>;
export const onCreateItemLogs = /* GraphQL */ `subscription OnCreateItemLogs($filter: ModelSubscriptionItemLogsFilterInput) {
  onCreateItemLogs(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateItemLogsSubscriptionVariables,
  APITypes.OnCreateItemLogsSubscription
>;
export const onUpdateItemLogs = /* GraphQL */ `subscription OnUpdateItemLogs($filter: ModelSubscriptionItemLogsFilterInput) {
  onUpdateItemLogs(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateItemLogsSubscriptionVariables,
  APITypes.OnUpdateItemLogsSubscription
>;
export const onDeleteItemLogs = /* GraphQL */ `subscription OnDeleteItemLogs($filter: ModelSubscriptionItemLogsFilterInput) {
  onDeleteItemLogs(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteItemLogsSubscriptionVariables,
  APITypes.OnDeleteItemLogsSubscription
>;
export const onCreatePackage = /* GraphQL */ `subscription OnCreatePackage($filter: ModelSubscriptionPackageFilterInput) {
  onCreatePackage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePackageSubscriptionVariables,
  APITypes.OnCreatePackageSubscription
>;
export const onUpdatePackage = /* GraphQL */ `subscription OnUpdatePackage($filter: ModelSubscriptionPackageFilterInput) {
  onUpdatePackage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePackageSubscriptionVariables,
  APITypes.OnUpdatePackageSubscription
>;
export const onDeletePackage = /* GraphQL */ `subscription OnDeletePackage($filter: ModelSubscriptionPackageFilterInput) {
  onDeletePackage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePackageSubscriptionVariables,
  APITypes.OnDeletePackageSubscription
>;
export const onCreatePickingActions = /* GraphQL */ `subscription OnCreatePickingActions(
  $filter: ModelSubscriptionPickingActionsFilterInput
) {
  onCreatePickingActions(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePickingActionsSubscriptionVariables,
  APITypes.OnCreatePickingActionsSubscription
>;
export const onUpdatePickingActions = /* GraphQL */ `subscription OnUpdatePickingActions(
  $filter: ModelSubscriptionPickingActionsFilterInput
) {
  onUpdatePickingActions(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePickingActionsSubscriptionVariables,
  APITypes.OnUpdatePickingActionsSubscription
>;
export const onDeletePickingActions = /* GraphQL */ `subscription OnDeletePickingActions(
  $filter: ModelSubscriptionPickingActionsFilterInput
) {
  onDeletePickingActions(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePickingActionsSubscriptionVariables,
  APITypes.OnDeletePickingActionsSubscription
>;
export const onCreateReturn = /* GraphQL */ `subscription OnCreateReturn($filter: ModelSubscriptionReturnFilterInput) {
  onCreateReturn(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateReturnSubscriptionVariables,
  APITypes.OnCreateReturnSubscription
>;
export const onUpdateReturn = /* GraphQL */ `subscription OnUpdateReturn($filter: ModelSubscriptionReturnFilterInput) {
  onUpdateReturn(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateReturnSubscriptionVariables,
  APITypes.OnUpdateReturnSubscription
>;
export const onDeleteReturn = /* GraphQL */ `subscription OnDeleteReturn($filter: ModelSubscriptionReturnFilterInput) {
  onDeleteReturn(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteReturnSubscriptionVariables,
  APITypes.OnDeleteReturnSubscription
>;
export const onCreateRMAShipping = /* GraphQL */ `subscription OnCreateRMAShipping(
  $filter: ModelSubscriptionRMAShippingFilterInput
) {
  onCreateRMAShipping(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRMAShippingSubscriptionVariables,
  APITypes.OnCreateRMAShippingSubscription
>;
export const onUpdateRMAShipping = /* GraphQL */ `subscription OnUpdateRMAShipping(
  $filter: ModelSubscriptionRMAShippingFilterInput
) {
  onUpdateRMAShipping(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRMAShippingSubscriptionVariables,
  APITypes.OnUpdateRMAShippingSubscription
>;
export const onDeleteRMAShipping = /* GraphQL */ `subscription OnDeleteRMAShipping(
  $filter: ModelSubscriptionRMAShippingFilterInput
) {
  onDeleteRMAShipping(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRMAShippingSubscriptionVariables,
  APITypes.OnDeleteRMAShippingSubscription
>;
export const onCreateRMAItems = /* GraphQL */ `subscription OnCreateRMAItems($filter: ModelSubscriptionRMAItemsFilterInput) {
  onCreateRMAItems(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRMAItemsSubscriptionVariables,
  APITypes.OnCreateRMAItemsSubscription
>;
export const onUpdateRMAItems = /* GraphQL */ `subscription OnUpdateRMAItems($filter: ModelSubscriptionRMAItemsFilterInput) {
  onUpdateRMAItems(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRMAItemsSubscriptionVariables,
  APITypes.OnUpdateRMAItemsSubscription
>;
export const onDeleteRMAItems = /* GraphQL */ `subscription OnDeleteRMAItems($filter: ModelSubscriptionRMAItemsFilterInput) {
  onDeleteRMAItems(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRMAItemsSubscriptionVariables,
  APITypes.OnDeleteRMAItemsSubscription
>;
export const onCreateRMARefund = /* GraphQL */ `subscription OnCreateRMARefund($filter: ModelSubscriptionRMARefundFilterInput) {
  onCreateRMARefund(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRMARefundSubscriptionVariables,
  APITypes.OnCreateRMARefundSubscription
>;
export const onUpdateRMARefund = /* GraphQL */ `subscription OnUpdateRMARefund($filter: ModelSubscriptionRMARefundFilterInput) {
  onUpdateRMARefund(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRMARefundSubscriptionVariables,
  APITypes.OnUpdateRMARefundSubscription
>;
export const onDeleteRMARefund = /* GraphQL */ `subscription OnDeleteRMARefund($filter: ModelSubscriptionRMARefundFilterInput) {
  onDeleteRMARefund(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRMARefundSubscriptionVariables,
  APITypes.OnDeleteRMARefundSubscription
>;
export const onCreateRMAStoreCredit = /* GraphQL */ `subscription OnCreateRMAStoreCredit(
  $filter: ModelSubscriptionRMAStoreCreditFilterInput
) {
  onCreateRMAStoreCredit(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRMAStoreCreditSubscriptionVariables,
  APITypes.OnCreateRMAStoreCreditSubscription
>;
export const onUpdateRMAStoreCredit = /* GraphQL */ `subscription OnUpdateRMAStoreCredit(
  $filter: ModelSubscriptionRMAStoreCreditFilterInput
) {
  onUpdateRMAStoreCredit(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRMAStoreCreditSubscriptionVariables,
  APITypes.OnUpdateRMAStoreCreditSubscription
>;
export const onDeleteRMAStoreCredit = /* GraphQL */ `subscription OnDeleteRMAStoreCredit(
  $filter: ModelSubscriptionRMAStoreCreditFilterInput
) {
  onDeleteRMAStoreCredit(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRMAStoreCreditSubscriptionVariables,
  APITypes.OnDeleteRMAStoreCreditSubscription
>;
export const onCreateRMASageItem = /* GraphQL */ `subscription OnCreateRMASageItem(
  $filter: ModelSubscriptionRMASageItemFilterInput
) {
  onCreateRMASageItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRMASageItemSubscriptionVariables,
  APITypes.OnCreateRMASageItemSubscription
>;
export const onUpdateRMASageItem = /* GraphQL */ `subscription OnUpdateRMASageItem(
  $filter: ModelSubscriptionRMASageItemFilterInput
) {
  onUpdateRMASageItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRMASageItemSubscriptionVariables,
  APITypes.OnUpdateRMASageItemSubscription
>;
export const onDeleteRMASageItem = /* GraphQL */ `subscription OnDeleteRMASageItem(
  $filter: ModelSubscriptionRMASageItemFilterInput
) {
  onDeleteRMASageItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRMASageItemSubscriptionVariables,
  APITypes.OnDeleteRMASageItemSubscription
>;
export const onCreateRMAItemResolution = /* GraphQL */ `subscription OnCreateRMAItemResolution(
  $filter: ModelSubscriptionRMAItemResolutionFilterInput
) {
  onCreateRMAItemResolution(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRMAItemResolutionSubscriptionVariables,
  APITypes.OnCreateRMAItemResolutionSubscription
>;
export const onUpdateRMAItemResolution = /* GraphQL */ `subscription OnUpdateRMAItemResolution(
  $filter: ModelSubscriptionRMAItemResolutionFilterInput
) {
  onUpdateRMAItemResolution(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRMAItemResolutionSubscriptionVariables,
  APITypes.OnUpdateRMAItemResolutionSubscription
>;
export const onDeleteRMAItemResolution = /* GraphQL */ `subscription OnDeleteRMAItemResolution(
  $filter: ModelSubscriptionRMAItemResolutionFilterInput
) {
  onDeleteRMAItemResolution(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRMAItemResolutionSubscriptionVariables,
  APITypes.OnDeleteRMAItemResolutionSubscription
>;
export const onCreateRMATransaction = /* GraphQL */ `subscription OnCreateRMATransaction(
  $filter: ModelSubscriptionRMATransactionFilterInput
) {
  onCreateRMATransaction(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRMATransactionSubscriptionVariables,
  APITypes.OnCreateRMATransactionSubscription
>;
export const onUpdateRMATransaction = /* GraphQL */ `subscription OnUpdateRMATransaction(
  $filter: ModelSubscriptionRMATransactionFilterInput
) {
  onUpdateRMATransaction(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRMATransactionSubscriptionVariables,
  APITypes.OnUpdateRMATransactionSubscription
>;
export const onDeleteRMATransaction = /* GraphQL */ `subscription OnDeleteRMATransaction(
  $filter: ModelSubscriptionRMATransactionFilterInput
) {
  onDeleteRMATransaction(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRMATransactionSubscriptionVariables,
  APITypes.OnDeleteRMATransactionSubscription
>;
export const onCreateRMAHistory = /* GraphQL */ `subscription OnCreateRMAHistory(
  $filter: ModelSubscriptionRMAHistoryFilterInput
) {
  onCreateRMAHistory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRMAHistorySubscriptionVariables,
  APITypes.OnCreateRMAHistorySubscription
>;
export const onUpdateRMAHistory = /* GraphQL */ `subscription OnUpdateRMAHistory(
  $filter: ModelSubscriptionRMAHistoryFilterInput
) {
  onUpdateRMAHistory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRMAHistorySubscriptionVariables,
  APITypes.OnUpdateRMAHistorySubscription
>;
export const onDeleteRMAHistory = /* GraphQL */ `subscription OnDeleteRMAHistory(
  $filter: ModelSubscriptionRMAHistoryFilterInput
) {
  onDeleteRMAHistory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRMAHistorySubscriptionVariables,
  APITypes.OnDeleteRMAHistorySubscription
>;
export const onCreateRMASettings = /* GraphQL */ `subscription OnCreateRMASettings(
  $filter: ModelSubscriptionRMASettingsFilterInput
) {
  onCreateRMASettings(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRMASettingsSubscriptionVariables,
  APITypes.OnCreateRMASettingsSubscription
>;
export const onUpdateRMASettings = /* GraphQL */ `subscription OnUpdateRMASettings(
  $filter: ModelSubscriptionRMASettingsFilterInput
) {
  onUpdateRMASettings(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRMASettingsSubscriptionVariables,
  APITypes.OnUpdateRMASettingsSubscription
>;
export const onDeleteRMASettings = /* GraphQL */ `subscription OnDeleteRMASettings(
  $filter: ModelSubscriptionRMASettingsFilterInput
) {
  onDeleteRMASettings(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRMASettingsSubscriptionVariables,
  APITypes.OnDeleteRMASettingsSubscription
>;
export const onCreateRMAPoliciesRules = /* GraphQL */ `subscription OnCreateRMAPoliciesRules(
  $filter: ModelSubscriptionRMAPoliciesRulesFilterInput
) {
  onCreateRMAPoliciesRules(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRMAPoliciesRulesSubscriptionVariables,
  APITypes.OnCreateRMAPoliciesRulesSubscription
>;
export const onUpdateRMAPoliciesRules = /* GraphQL */ `subscription OnUpdateRMAPoliciesRules(
  $filter: ModelSubscriptionRMAPoliciesRulesFilterInput
) {
  onUpdateRMAPoliciesRules(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRMAPoliciesRulesSubscriptionVariables,
  APITypes.OnUpdateRMAPoliciesRulesSubscription
>;
export const onDeleteRMAPoliciesRules = /* GraphQL */ `subscription OnDeleteRMAPoliciesRules(
  $filter: ModelSubscriptionRMAPoliciesRulesFilterInput
) {
  onDeleteRMAPoliciesRules(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRMAPoliciesRulesSubscriptionVariables,
  APITypes.OnDeleteRMAPoliciesRulesSubscription
>;
export const onCreateSalesChannel = /* GraphQL */ `subscription OnCreateSalesChannel(
  $filter: ModelSubscriptionSalesChannelFilterInput
) {
  onCreateSalesChannel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSalesChannelSubscriptionVariables,
  APITypes.OnCreateSalesChannelSubscription
>;
export const onUpdateSalesChannel = /* GraphQL */ `subscription OnUpdateSalesChannel(
  $filter: ModelSubscriptionSalesChannelFilterInput
) {
  onUpdateSalesChannel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSalesChannelSubscriptionVariables,
  APITypes.OnUpdateSalesChannelSubscription
>;
export const onDeleteSalesChannel = /* GraphQL */ `subscription OnDeleteSalesChannel(
  $filter: ModelSubscriptionSalesChannelFilterInput
) {
  onDeleteSalesChannel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSalesChannelSubscriptionVariables,
  APITypes.OnDeleteSalesChannelSubscription
>;
export const onCreateService = /* GraphQL */ `subscription OnCreateService($filter: ModelSubscriptionServiceFilterInput) {
  onCreateService(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateServiceSubscriptionVariables,
  APITypes.OnCreateServiceSubscription
>;
export const onUpdateService = /* GraphQL */ `subscription OnUpdateService($filter: ModelSubscriptionServiceFilterInput) {
  onUpdateService(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateServiceSubscriptionVariables,
  APITypes.OnUpdateServiceSubscription
>;
export const onDeleteService = /* GraphQL */ `subscription OnDeleteService($filter: ModelSubscriptionServiceFilterInput) {
  onDeleteService(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteServiceSubscriptionVariables,
  APITypes.OnDeleteServiceSubscription
>;
export const onCreateStoreConfig = /* GraphQL */ `subscription OnCreateStoreConfig(
  $filter: ModelSubscriptionStoreConfigFilterInput
) {
  onCreateStoreConfig(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateStoreConfigSubscriptionVariables,
  APITypes.OnCreateStoreConfigSubscription
>;
export const onUpdateStoreConfig = /* GraphQL */ `subscription OnUpdateStoreConfig(
  $filter: ModelSubscriptionStoreConfigFilterInput
) {
  onUpdateStoreConfig(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateStoreConfigSubscriptionVariables,
  APITypes.OnUpdateStoreConfigSubscription
>;
export const onDeleteStoreConfig = /* GraphQL */ `subscription OnDeleteStoreConfig(
  $filter: ModelSubscriptionStoreConfigFilterInput
) {
  onDeleteStoreConfig(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteStoreConfigSubscriptionVariables,
  APITypes.OnDeleteStoreConfigSubscription
>;
export const onCreateTrackingLabel = /* GraphQL */ `subscription OnCreateTrackingLabel(
  $filter: ModelSubscriptionTrackingLabelFilterInput
) {
  onCreateTrackingLabel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTrackingLabelSubscriptionVariables,
  APITypes.OnCreateTrackingLabelSubscription
>;
export const onUpdateTrackingLabel = /* GraphQL */ `subscription OnUpdateTrackingLabel(
  $filter: ModelSubscriptionTrackingLabelFilterInput
) {
  onUpdateTrackingLabel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTrackingLabelSubscriptionVariables,
  APITypes.OnUpdateTrackingLabelSubscription
>;
export const onDeleteTrackingLabel = /* GraphQL */ `subscription OnDeleteTrackingLabel(
  $filter: ModelSubscriptionTrackingLabelFilterInput
) {
  onDeleteTrackingLabel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTrackingLabelSubscriptionVariables,
  APITypes.OnDeleteTrackingLabelSubscription
>;
export const onCreateTrackingSettings = /* GraphQL */ `subscription OnCreateTrackingSettings(
  $filter: ModelSubscriptionTrackingSettingsFilterInput
) {
  onCreateTrackingSettings(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTrackingSettingsSubscriptionVariables,
  APITypes.OnCreateTrackingSettingsSubscription
>;
export const onUpdateTrackingSettings = /* GraphQL */ `subscription OnUpdateTrackingSettings(
  $filter: ModelSubscriptionTrackingSettingsFilterInput
) {
  onUpdateTrackingSettings(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTrackingSettingsSubscriptionVariables,
  APITypes.OnUpdateTrackingSettingsSubscription
>;
export const onDeleteTrackingSettings = /* GraphQL */ `subscription OnDeleteTrackingSettings(
  $filter: ModelSubscriptionTrackingSettingsFilterInput
) {
  onDeleteTrackingSettings(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTrackingSettingsSubscriptionVariables,
  APITypes.OnDeleteTrackingSettingsSubscription
>;
export const onCreateSalesSource = /* GraphQL */ `subscription OnCreateSalesSource(
  $filter: ModelSubscriptionSalesSourceFilterInput
) {
  onCreateSalesSource(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSalesSourceSubscriptionVariables,
  APITypes.OnCreateSalesSourceSubscription
>;
export const onUpdateSalesSource = /* GraphQL */ `subscription OnUpdateSalesSource(
  $filter: ModelSubscriptionSalesSourceFilterInput
) {
  onUpdateSalesSource(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSalesSourceSubscriptionVariables,
  APITypes.OnUpdateSalesSourceSubscription
>;
export const onDeleteSalesSource = /* GraphQL */ `subscription OnDeleteSalesSource(
  $filter: ModelSubscriptionSalesSourceFilterInput
) {
  onDeleteSalesSource(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSalesSourceSubscriptionVariables,
  APITypes.OnDeleteSalesSourceSubscription
>;
export const onCreateWebhook = /* GraphQL */ `subscription OnCreateWebhook($filter: ModelSubscriptionWebhookFilterInput) {
  onCreateWebhook(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateWebhookSubscriptionVariables,
  APITypes.OnCreateWebhookSubscription
>;
export const onUpdateWebhook = /* GraphQL */ `subscription OnUpdateWebhook($filter: ModelSubscriptionWebhookFilterInput) {
  onUpdateWebhook(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateWebhookSubscriptionVariables,
  APITypes.OnUpdateWebhookSubscription
>;
export const onDeleteWebhook = /* GraphQL */ `subscription OnDeleteWebhook($filter: ModelSubscriptionWebhookFilterInput) {
  onDeleteWebhook(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteWebhookSubscriptionVariables,
  APITypes.OnDeleteWebhookSubscription
>;
export const onCreateWorksheet = /* GraphQL */ `subscription OnCreateWorksheet($filter: ModelSubscriptionWorksheetFilterInput) {
  onCreateWorksheet(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateWorksheetSubscriptionVariables,
  APITypes.OnCreateWorksheetSubscription
>;
export const onUpdateWorksheet = /* GraphQL */ `subscription OnUpdateWorksheet($filter: ModelSubscriptionWorksheetFilterInput) {
  onUpdateWorksheet(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateWorksheetSubscriptionVariables,
  APITypes.OnUpdateWorksheetSubscription
>;
export const onDeleteWorksheet = /* GraphQL */ `subscription OnDeleteWorksheet($filter: ModelSubscriptionWorksheetFilterInput) {
  onDeleteWorksheet(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteWorksheetSubscriptionVariables,
  APITypes.OnDeleteWorksheetSubscription
>;
