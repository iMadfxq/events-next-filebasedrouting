
//  customerID
//  accountName
//  salesType
//  contactAddress1
//  contactCity
//  contactState
//  contactZip

let data = need.map((n) => {
  const cross = have.filter((h) => {
    let email;

    email = n.contactEmail.slice(n.contactEmail.indexOf("@"));

    if (typeof h.contactEmail === "string") {
      return h.contactEmail.includes(email);
    }
  });

  if (cross.length) {

    return {
      ...n,
      customerID: cross[0].customerID,
      accountName: cross[0].accountName,
      salesType: cross[0].salesType,
      contactAddress1: cross[0].contactAddress1,
      contactCity: cross[0].contactCity,
      contactState: cross[0].contactState,
      contactZip: cross[0].contactZip,

    };
  }
});

localStorage.setItem('json', JSON.stringify(data))
function Test() {
  return <p>Hi</p>;
}

export default Test;
