import { useAuth } from '../customHooks/useAuth';

const AuthHoc = props => useAuth(props) && props.children  // props.children does is that it is used to display whatever you include between the opening and closing tags when invoking a component. 

export default AuthHoc;