function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const account = accounts.find(
    user => user.email === email && user.password === password
  );

  if (!account) {
    document.getElementById("error").innerText = "Wrong email or password";
    return;
  }

  localStorage.setItem("profileId", account.profileId);
  window.location.href = "pin.html";
}

function checkPin() {
  const pin = document.getElementById("pin").value;

  if (pin !== "1111111") {
    document.getElementById("error").innerText = "Wrong PIN";
    return;
  }

  window.location.href = "licence.html";
}

function loadLicence() {
  const profileId = localStorage.getItem("profileId");

  if (!profileId || !profiles[profileId]) {
    window.location.href = "index.html";
    return;
  }

  const profile = profiles[profileId];

  document.getElementById("name").innerText = profile.name;
  document.getElementById("dob").innerText = profile.dob;
  document.getElementById("address").innerText = profile.address;
  document.getElementById("licence").innerText = profile.licence;
  document.getElementById("class").innerText = profile.class;
}

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}
