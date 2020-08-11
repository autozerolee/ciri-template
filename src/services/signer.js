export default {
  signerSignIn() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({data: { id: 34, name: "Tom" }, code: 200});
      }, 800);
    });
  },
  signerSignOut() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({msg: "退出登录成功", code: 204});
      })
    })    
  },
  getSignerScore(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(id == 34) {
          resolve({data: {score: 100}, code: 200});
        }else {
          reject({msg: `无法查询用户${id}的分数！`, code: 406});
        }
      }, 800)
    })
  }
}