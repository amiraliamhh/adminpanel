export interface IBankAcc {
    shaba?: string;
    account_number?: string;
    credit_card_number?: string;
}

export interface IWallet {
    wallet_name?: string;
    wallet_crypto?: string;
    wallet_address?: string;
}

export interface IUser {
    _id: string;
    phone_number_is_approved?: boolean;
    email_is_approved?: boolean;
    bank_accounts: IBankAcc[];
    wallet_public_keys?: string[];
    wallets?: IWallet[];
    two_step_verification?: boolean;
    email_on_login?: boolean;
    sms_on_login?: boolean;
    id_card_is_approved?: boolean;
    bank_account_is_approved?: boolean;
    user_is_approved?: boolean;
    first_name?: string;
    last_name?: string;
    phone_number?: string;
    email?: string;
    national_code?: string;
}