import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from 'antd';
import { useState } from 'react';
import styles from './Search.module.css';


const SearchForm = ()=>{

    const[search, setSearch] = useState('');

    const changeTextIntut = (e) =>{
        setSearch(e.target.value)
    }
    const leaveItem = () =>{
        setSearch('');
    }

    const enterOnIput= (e) =>{
        if(e.key === 'Enter'){
            setSearch('');
            showModal();
        }
       
    }

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
      };
    
   

    return (
        <div className = {styles.searchForm}>
            <input type="text" onChange = {changeTextIntut} onBlur = {leaveItem} onKeyDown = {enterOnIput} placeholder='Найди свой товар...' value = {search}/>
            <div className = {styles.icon}>
                <FontAwesomeIcon onClick={showModal} icon={faSearch} size="lg" color = "black"/>
            </div>
            <Modal title="Поиск" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>По запросу {search} ничего не найдено</p>
                
            </Modal>


        </div>
        
    )
}




export default SearchForm;