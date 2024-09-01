export interface CompanyAddress {
    company: {
        cnpj: string,
        fantasy_name: string,
        company_name: string,
        state_registration: string,
    },
    address: {
        street: string,
        city: string,
        state: string,
        number: string,
        postal_code: string,
        neighborhood: string,
        complement: string,
    }
}
