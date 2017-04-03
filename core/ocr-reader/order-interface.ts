export interface Order {
    transportOrder: number;
    referenceClient: number;
    truck: string;
    driver?: string;
    goods: string;
    hourAvailable?: string;
    remarks: string;
    neededType: string;
    ventilation?: string;
    setPoint?: string;
    chassis: number;
    unClass: string;
    weight?: string;
    packaging?: string;
    properShippingName?: string;
    start: {
      address: string;
      dateRequested?: string;
      reference?: string;
      sealNo?: number;
      trailNo?: number;
      lockNo?: number;
      weight?: string;//???
      noOfPallets: number;
      remarks?: string;
    }
    pickUp: {
      address: string;
      dateRequested?: string;
      reference?: string;
      sealNo?: number;
      trailNo?: number;
      lockNo?: number;
      weight?: string;//???
      noOfPallets: number;
      remarks?: string;
    }
    load: {
      address: string;
      dateRequested?: string;
      reference?: string;
      sealNo?: number;
      trailNo?: number;
      lockNo?: number;
      weight?: string;//???
      noOfPallets: number;
      remarks?: string;
    }
    dropAt: {
      address: string;
      dateRequested?: string;
      reference?: string;
      sealNo?: number;
      trailNo?: number;
      lockNo?: number;
      weight?: string;//???
      noOfPallets: number;
      remarks?: string;
    }

}

// function getCounter(): Counter {
//     let counter = <Counter>function (start: number) { };
//     counter.interval = 123;
//     counter.reset = function () { };
//     return counter;
// }