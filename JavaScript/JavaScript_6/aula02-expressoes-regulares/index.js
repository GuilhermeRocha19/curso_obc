function PhoneNumber(phoneNumberString){
    const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g,"")
    this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]
    this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0]
    this.number = fixedString.match(/(?<=\)).+/)[0].replace('-','')


    
}


console.log(new PhoneNumber('+55 (51) 9 9216-0863'))
console.log(new PhoneNumber('+5 (123) 2s 98216-0429'))