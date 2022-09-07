export interface AccountBalType {
  amount: number;
}

export interface AccountBalContextType {
  accountBalance: number;
  setAccountBalance: (amount: number) => void;
}
