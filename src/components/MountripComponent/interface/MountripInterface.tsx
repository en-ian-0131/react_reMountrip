//trailsProduct
export interface FetchData {
  sid: number;
  trail_name: string;
  trail_img: string;
  price: number;
  geo_location_sid: string;
  geo_location_town_sid: string;
}
interface ICartCount {
  count: number;
}
interface ICartChecked {
  checked: boolean;
}
export interface CartTotalData extends FetchData, ICartCount {}
export interface CartCheckTotalPrice extends ICartChecked, CartTotalData {} //有被打勾的加進總金額

//Reducer & Context
export interface CartInitialType {
  cartItem: CartTotalData[];
}

export interface CartAction {
  type: "AddItem" | "PlusCount" | "MinusCount" | "RemoveItem" | "CheckedItem";
  payload: { newItem: CartTotalData[] };
}

export interface ProviderValue {
  cartState: { cartItem: CartTotalData[] };
  addItem?: (item: any, count: number) => void;
}

export interface LoginData {
  admins: {
    account: string;
    nickname: string;
    sid: number;
  };
  body: {
    account: string;
    password: string;
  };
  error: number;
  message: string;
  success: boolean;
}

//Member
export interface MemberDetail {
  account: string;
  firstname: string;
  lastname: string;
  gender: string;
  birthday: string;
  city: string;
  address: string;
  email: string;
  mobile: string;
}

//Member --member
export interface IMemberUserData {
  sid: number;
  success: boolean;
  account: string;
  nickName: string;
}

//Member --favorite
export interface MemberFavoriteInterface {
  sid: number;
  trail_name: string;
  status: number;
}
