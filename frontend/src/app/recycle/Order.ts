export interface Order {
  id: string;
  recycler: string;
  maskRecyclingCapacity: number;
  startingDate: string;
  endDate: string;
  acceptedRecyclingOrders: AcceptedRecyclingOrder[];
}

export interface AcceptedRecyclingOrder {
  collectorId: string;
  collectorName: string;
  masksToDeliver: number;
}
