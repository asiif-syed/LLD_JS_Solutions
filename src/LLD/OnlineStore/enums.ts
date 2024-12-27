export enum UserTypes {
  GUEST,
  MEMBER,
}

export enum OrderStatus {
  ORDRED,
  CANCELLED,
  SHIPPED,
  FULLFILLED,
}

export enum ShippingStatus {
  IN_TRANSIT,
  OUT_FOR_DELIVERY,
  DELIVERED,
  DELAYED,
}

export enum RefundStatus {
  IN_PROGRESS,
  COMPLETED,
  FAILED,
}

export enum NotificationType {
  EMAIL,
  TEXT,
  PUSH,
}

export enum PaymentMethod {
  CARD,
  BANK,
}
