//trailsProduct
export interface FetchData {
  sid: number;
  trail_name: string;
  trail_img: string;
  price: number;
  geo_location_sid: string;
  geo_location_town_sid: string;
}

//Reducer & Context
export interface CartInitialType {
  cartItem: [];
  quantity: number;
}

export interface CartAction {
  type: string;
  payload: { newItem: FetchData[]; newQuantity: number };
}

export interface ProviderValue {
  cartState: { cartItem: []; quantity: number };
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
