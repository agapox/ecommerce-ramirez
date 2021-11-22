export const inoutPhoneValidator = (phone) => {
    switch (phone) {
        case phone[0] !== '+':
            return 'Phone must start with "+" symbol and country code.'
            break;
    
        default:
            break;
    }
}