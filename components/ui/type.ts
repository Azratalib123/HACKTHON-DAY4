// types.ts
export interface Customization {
    text: string;
  }
  
  export interface Item {
    productId: string;
    quantity: number;
    customization?: Customization;
    tags?: string[];
  }
  
  export interface CartState {
    items: Item[];
  }
  