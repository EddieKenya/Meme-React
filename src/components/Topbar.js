import DarkModeIcon from '@mui/icons-material/DarkMode';
import HomeIcon from '@mui/icons-material/Home';
import GridViewIcon from '@mui/icons-material/GridView';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
import '../styles/nav.scss'

const TopBar = () => {
    return ( 
        <div className='navbar' >
            <div className='left' >
                <Link to="/" style={{textDecoration:"none"}} >
                    <span>Meme-Generation</span>
                </Link>
                <HomeIcon/>
                <DarkModeIcon/>
                <GridViewIcon/>
                <div className='search'>
                    <SearchIcon/>
                    <input type="text" placeholder='Search...'/>
                </div>
            </div>
            <div className='right'>
                <AccountCircleIcon/>
                <EmailIcon/>
                <NotificationsIcon/>
                <div className='user'>
                    <img src='http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTLtYcdSxA7bqTWvvqn_mSJ5YDxdFuEG1ACFp_fyqk78foRVwUbt6hjEflO7gyqx4G_KOO3f53lfD34cYM' alt=''/>
                    <span>Edwin Makhanu</span>
                </div>
            </div>
        </div>
     );
}
 
export default TopBar;