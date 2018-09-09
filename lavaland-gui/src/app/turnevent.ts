// readonly numberOfTurns : number; // executed every this many of turns
// readonly priority: number; // higher valued events will be considered first
// readonly fncProcessOccurence : Function; // Function that is called when cumulative strength is 1

export class TurnEventSubscription {
  public unsubscribe: Function; // Populated by the subscription event
  constructor(
    public numberOfTurns: number,
    public fncProcessOccurence: (TurnEventSubscription) => void,
    public priority = 9
  ) {}
}
