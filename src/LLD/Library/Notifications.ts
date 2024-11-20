import Member from "./Member";
import { isEmpty } from "lodash";

interface NotificationMap {
  [key: string]: Member[];
}

export default class Notifications {
  private static notificationsMap: NotificationMap = {};

  static subscribe(bookId: string, member: Member) {
    if (this.notificationsMap[bookId]) {
      this.notificationsMap[bookId].push(member);
    } else {
      this.notificationsMap[bookId] = [member];
    }
  }

  static unsubscribe(bookId: string, member: Member) {
    const members = this.notificationsMap[bookId];
    if (!isEmpty(members)) {
      const memberIdx = members.findIndex((m) => m.id === member.id);
      members.splice(memberIdx, 1);
      this.notificationsMap[bookId] = members;
    }
  }

  static deleteBookSubscriptions(bookId: string) {
    delete this.notificationsMap[bookId];
  }

  static sendNotificationForBook(bookId: string, bookName: string) {
    const members = this.notificationsMap[bookId];
    if (!isEmpty(members)) {
      for (let member of members) {
        const email = member.email;
        // Send email
        console.log(
          `${bookName} is available at the library, you can reserve it now!`
        );
        this.unsubscribe(bookId, member);
      }
    }
  }
}
