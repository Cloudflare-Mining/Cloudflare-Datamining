export interface Railgun {
  id: string;
  status: string;
  enabled: boolean;
  name: string;
  activation: {
    key: string;
  };
}
