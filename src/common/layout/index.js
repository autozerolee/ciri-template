import Nav from '../nav';
import { SIGNER_SIGN_IN } from '../../models/actionTypes'

const LayoutComponent = function(props) {
  return (
    <div className="layout-wrap">
      <Nav></Nav>
    </div>
  )
}

const UserLogin = function() {
  return (
    <LoginForm 
      onSubmit={(userData) => {
        new Promise((resolve, reject) => {
          dispatch({
            type: SIGNER_SIGN_IN,
            payload: { userData, resolve, reject }
          });
        }).then(null, (err)=>{
          // 特殊错误处理
        });
      }}
    />
  )
}

export default LayoutComponent;