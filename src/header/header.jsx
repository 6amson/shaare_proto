import './header.scss';
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import menu from '../assets/logo.svg';

export default function Header() {
    return (
        <div className='header--container' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <FaArrowLeftLong color='white' fontSize={26}/>
            <img src={menu} alt='shaare logo'/>
            <IoIosMenu color='white' fontSize={26}/>
        </div>
    )
}