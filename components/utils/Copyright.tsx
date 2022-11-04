import { Typography } from '@mui/material';
import Link from 'next/link';

type CopyProps = {
    site: string;
    href: string;
    sx?:object;
}
  
function Copyright(props:CopyProps) {
    return (
        <div>
        <p>Copyright ©</p>
        <Link color="inherit" href={props.href}>
            {props.site}
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </div>
    )
}

export default Copyright;