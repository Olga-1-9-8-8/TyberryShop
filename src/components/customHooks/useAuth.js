import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const exhState = ({ user }) =>({
    currentUser: user.currentUser
})

const useAuth = (props) =>{
    const {currentUser} = useSelector(exhState);

    useEffect(()=> {
        if(!currentUser){
            
        }

    },[currentUser])                       //when user changes we want reran code
                                  

                                     
    return currentUser;
}

export default useAuth;