export interface iContextProviderProps{
    children: React.ReactNode;
}

export interface iCartProviderValue{
    productList: iProduct[];
    filterList: (value: string) => void;
    filteredList: iProduct[];
    addProductoToCart: (product: iProduct) => void;
    setCartTotal: (total: number) => void;
    setCartList: (list: iProduct[]) => void;
    cartList: iProduct[];
    cartTotal: number;
    cartVisibility: 'hidden' | 'visible';
    setCartVisibility: (value: 'hidden' | 'visible') => void;
    removeFromCart: (product: iProduct) => void;
    cartQnt: number
}

export interface iProduct {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
    qnt?: number;
  }