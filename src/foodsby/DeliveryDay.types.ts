export type DeliveryDay = {
    Day: string;
    Deliveries: Delivery[];
};

export type Delivery = {
    DeliveryId: number;
    DeliveryDropoffId: number;
    IsDynamicallyCreated: boolean;
    StoreId: number;
    RestaurantId: number;
    MenuId: number;
    RestaurantName: string;
    LogoUrl: string;
    Cutoff: string;
    Dropoff: string;
    DropoffEnd: string;
    CutoffDate: string;
    DropoffDate: string;
    DropoffEndDate: string;
    DropoffDisplay: string;
    CutoffDisplay: string;
    MaxWeight: number;
    WeightLeft: number;
    WeightLeftOp: number;
    DropoffLabel: string;
    DeliveryTypeText: string;
    DeliveryType: number;
    TimeZoneId: string;
    Date: string;
    IsPastCutoff: false;
    IsNewRestaurantAtLocation: false;
};
