export function getAppConfig() {
  return fetch('/app/config')
}

export function signIn(params) {
  return fetch('/user/login', {
    method: "POST",
    body: JSON.stringify(params)
  });
}

export function signOut() {
  return fetch('/user/logout', {
    method: "POST",
    body: JSON.stringify()
  }) 
}