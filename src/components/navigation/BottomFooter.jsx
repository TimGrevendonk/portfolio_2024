import { Link } from "react-router-dom";
import { LinkText } from "components/inputs/linkText"; 
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import PinOutlinedIcon from '@mui/icons-material/PinOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import PhonelinkOutlinedIcon from '@mui/icons-material/PhonelinkOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import styles from "components/navigation/bottomFooter.module.scss";

// BottomFooter function:
export function BottomFooter({ ...props }) {

    return (
        <footer className={`${styles.footer} mountain-blue`}>
            <div>
                <h3>Pages</h3>
                <ul>
                    <li>
                        <LinkText 
                        path="/"
                        startContent={<HomeOutlinedIcon />}
                        >
                            Home 
                        </LinkText>
                    </li>
                    <li>
                        <LinkText 
                        path="/projects"
                        startContent={<PinOutlinedIcon />}
                        >
                            All projects 
                        </LinkText>
                    </li>
                    <li>
                        <LinkText 
                        path="/process"
                        startContent={<AccountTreeOutlinedIcon />}
                        >
                            design approach
                        </LinkText>
                    </li>
                </ul>
            </div>
            
            <div>
                <h3>Connect</h3>
                <ul>
                    <li>
                        <LinkText 
                        path="mailto:<no-name-due-to-webscrapers>@hotmail.com"
                        startContent={<LocalPostOfficeOutlinedIcon/>}
                        >
                        mail 
                        </LinkText>
                    </li>
                    <li>
                        <LinkText 
                        path="https://www.linkedin.com/in/tim-grevendonk/"
                        startContent={<PhonelinkOutlinedIcon />}
                        >
                        Linkdin 
                        </LinkText>
                    </li>
                    <li>
                        <LinkText 
                        path="/#"
                        startContent={<LocalPhoneOutlinedIcon />}
                        >
                         Phone 
                        </LinkText>
                    </li>
                </ul>
            </div>
      </footer>
    );
}
