const user = {
  profile: {
    name: "Haider",
    address: {
      city: "Faisalabad"
    }
  }
};

console.log(user.profile?.address?.city);  
console.log(user.profile?.phone?.number);    
