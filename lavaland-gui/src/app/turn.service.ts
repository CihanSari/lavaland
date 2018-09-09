import { Injectable, OnDestroy } from "@angular/core";
import { TurnEventSubscription } from "./turnevent";
type TurnEvents = TurnEventForService[];

@Injectable()
export class TurnService implements OnDestroy {
  private heartbeatInterval: number;

  // priority to turn events
  private turnEvents: Map<number, TurnEvents> = new Map();

  // priority array
  private allPriorities: Array<number> = [];

  register(turnEvent: TurnEventSubscription) {
    const turnEventObjectForThisService = new TurnEventForService(turnEvent);
    const prio = turnEvent.priority;
    if (this.turnEvents.has(prio)) {
      const prioEvents = this.turnEvents.get(prio);
      const idx = prioEvents.push(turnEventObjectForThisService) - 1;
      turnEventObjectForThisService.unsubscribe = () => {
        prioEvents[idx] = null;
      };
    } else {
      const prioEvents = [turnEventObjectForThisService];
      turnEventObjectForThisService.unsubscribe = () => {
        prioEvents[0] = null;
      };
      this.turnEvents.set(prio, prioEvents);
      this.allPriorities.push(prio);
      this.allPriorities.sort();
    }
  }

  constructor() {
    this.heartbeatInterval = window.setInterval(() => {
      this.processEvent();
    }, 10);
  }

  ngOnDestroy() {
    window.clearInterval(this.heartbeatInterval);
  }

  processEvent() {
    this.allPriorities.forEach(priority => {
      const eventsForThisPriority = this.turnEvents.get(priority);
      if (Array.isArray(eventsForThisPriority)) {
        eventsForThisPriority.forEach(eventForThisPriority => {
          if (eventForThisPriority != null) {
            eventForThisPriority.process();
          }
        });
      }
    });
  }
}

class TurnEventForService {
  public currentStrength = 0;
  public unsubscribe: Function;
  constructor(public ev: TurnEventSubscription) {
    ev.unsubscribe = () => {
      this.unsubscribe();
    };
  }

  process() {
    this.currentStrength += 1 / this.ev.numberOfTurns;
    if (this.currentStrength >= 1) {
      this.currentStrength -= 1;
      this.ev.fncProcessOccurence(this.ev);
    }
  }
}
