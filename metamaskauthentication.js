// connect to Moralis server
Moralis.initialize("1Oos7miAzQfsjTwS0I6WlWja5bRvWKXOxl6LookX");
Moralis.serverURL = "https://2qblqmau71i5.moralishost.com:2053/server";
 
// add from here down
async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate();
  }
  console.log("HELLO USER! YOU HAVE SUCCESSFULLY LOGGED IN", user);
}
 
async function logOut() {
  await Moralis.User.logOut();
  console.log("YOU ARE NOW LOGGED OUT! SORRY TO SEE YOU GO");
}
 
document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;