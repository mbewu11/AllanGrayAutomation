export const isValidateSAPhoneNumber = (cellphoneNumber) => {
    const regex = /^(\+27|0)[6-8][0-9]{8}$/;
    return regex.test(cellphoneNumber);
};