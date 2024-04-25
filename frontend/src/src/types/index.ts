export type Sake = {
  id: number;
  name: string;
  imageUrl: string;
  param1_val: number;
  param2_val: number;
  param3_val: number;
  param4_val: number;
  param5_val: number;
  user_id: number;
  updated_at: string;
};

export type SakeList = Sake[];

export type Category = {
  id: number | "";
  name: string;
  param1_name: string;
  param2_name: string;
  param3_name: string;
  param4_name: string;
  param5_name: string;
};
