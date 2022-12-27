import {useState} from 'react';
import {login} from './api/authApi';
import {useNavigate} from 'react-router-dom';
import {Box, TextField, Button, Paper} from '@mineral/core';
import {COLUMN_STYLE, FLEX, FULL_SCREEN, HORIZONTAL_CENTER, 
    SPACE_AROUND, padding, paddingTop} from './constant_styles';
import {ERROR} from './constant_colors';

const Login = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const doLogin = async () => {
        setLoading(true);
        let user;
        try {
            user = await login({username, password});
        }
        catch(err) {
            setError(true);
            setLoading(false);
            return
        }
        sessionStorage.setItem('user', JSON.stringify(user));
        navigate('/');
    };

    const setData = (setFx) => {
        return ($e) => {
            setFx($e.target.value);
        };
    };

    return (
        <Box sx={{...FULL_SCREEN, ...FLEX, ...SPACE_AROUND}}>
            { loading && 
                <Box sx={{position: 'absolute', width: '300px', padding: '24px', background: 'white', top: '48px', margin: '0'}}>
                    Loading...
                </Box>
            }                  
            <Box sx={{...HORIZONTAL_CENTER, paddingTop: '24px', width: '350px'}}>
                <Paper sx={{...padding(24)}}>
                    <Box sx={{...COLUMN_STYLE}}>
                        <TextField id="txt_username" label="Username" disabled={loading} onChange={setData(setUsername)}/>
                        <TextField id="pwd_password" label="Password" type="password" disabled={loading} onChange={setData(setPassword)}/>
                    </Box>
                    <Box sx={{color: ERROR, display: `${!error ? 'none' : 'block'}`}}>
                        There was an error with username or password.
                    </Box>
                    <Box sx={{...paddingTop(12)}}>
                        <Button variant="contained" onClick={doLogin} disabled={loading}>Login</Button>
                    </Box>
                </Paper>
            </Box>
        </Box>
    );

};

export default Login;