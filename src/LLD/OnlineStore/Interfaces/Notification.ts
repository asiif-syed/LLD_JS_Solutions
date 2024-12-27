import { NotificationType } from "../enums.js";

export default interface Notification {
  type: NotificationType;
  sendNotification(): void;
}
