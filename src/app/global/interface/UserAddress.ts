export interface UserAddress {
    user: {
        profile_user_id: number,
        cpf:  string,
        email: string,
        person_name: string,
        user_name: string,
        phone_number: string,
      },
      address: {
        street: string,
        city:  string,
        state: string,
        number: string,
        postal_code: string,
        neighborhood: string,
        complement: string,
      }
}
