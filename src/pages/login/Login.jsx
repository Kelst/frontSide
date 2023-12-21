import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import loginImage from "../../assets/login.webp"
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import IoSwitch from '../../components/switches/IoSwitch.jsx';
import { useSpring, animated,config } from '@react-spring/web'
import { MuiTelInput } from 'mui-tel-input';
import CustomAlert from '../../components/alert/CustomAlert';
import useStore from '../../store/store';
import DropDownCard from '../../components/dropCard/DropDownCard';
import { Input, InputAdornment, OutlinedInput, Slide } from '@mui/material';
import { ContactPhone, Visibility, VisibilityOff } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { useCountDown } from '../../hooks/useCountDown';
import Timer from '../../components/timer/Timer';
import { NavLink, useNavigate } from 'react-router-dom';



const defaultTheme = createTheme();
export default function Login() {
  const navigate = useNavigate();
//from store

const checkBillingIP= useStore(store=>store.checkBillingApi)
const checkUser= useStore(store=>store.checkUser) 
const ip= useStore(store=>store.ip)
const login= useStore(store=>store.login)
const isAuth= useStore(store=>store.isAuth)
const logIn= useStore(store=>store.logIn)
const errorMessage= useStore(store=>store.errorMessage)
const logInPhone= useStore(store=>store.logInPhone)
const isCheckedPhone= useStore(store=>store.isCheckedPhone)
const token= useStore(store=>store.token)
const handleVeriffyCodes= useStore(store=>store.handleVeriffyCode)


const handleLogInWithPassword= async()=>{
  
 let auth=await logIn(loginText,passwordText)
 
 if(!auth.flag){
  console.log(auth.errText,"handleError");

  // setShowAllert({...showAllert,message:auth.errText,type:0})
  // setShowAllert({...showAllert,open:true,type:0})
  setShowAllert(prew=>({
    ...prew,
    open:true, 
    message:auth.errText,
    type:0,
 
  }))
 
 } else {
  navigate("/home")
 }
}


  const springs = useSpring({
    from: { x: -1000 ,},
    to: { x: 0 },
    config: { ...config.slow },
  })
  const springsText = useSpring({
    from: { x: -1000 ,},
    to: { x: 0 },
    config: { ...config.gentle },
  })

  const [loginText,setLoginText]=React.useState("")
  const [passwordText,setPasswordText]=React.useState("")
const [showPassword,setShowPassword]=React.useState(false)


  function handleLoginTextChange(event) {
    setLoginText(event.target.value);
  }
  function handlePasswordTextChange(event) {
    setPasswordText(event.target.value);
  }

  const [checkedPhone,setCheckedPhone]=React.useState(false)
  const [code,setCode]=React.useState("")

  const handleVeriffyCode = async()=>{
    const flag= await handleVeriffyCodes(code,phone.replace(/\s+/g, '').replace(/^\+/, ''))
    alert(flag)
      
  }
  const handleCodeChange=(event)=>{
    const inputValue = event.target.value;
    if (inputValue.length <= 4) {
      setCode(inputValue);
    }
  }
  
  const [showAllert,setShowAllert]=React.useState({
    open:false,
    type:0,
    message:""
  })
  const [openLogIp,setOpenLogIp]=React.useState(false)

  const handleCloseAllert=()=>{
    setShowAllert({...showAllert,open:false})
  }
  const handleCloseLoginIp=()=>{
    setOpenLogIp(false)
  }
  const handleShowAllert=()=>{
    setShowAllert({...showAllert,open:true})
  }
  function handleCheckedPhone(event){
    setPhoneNumber("")
    setCheckedPhone(event.target.checked)
  

  }

  const [phone,setPhoneNumber]=React.useState("")
  const [phoneFromSMS,setPhoneFromSMS]=React.useState(false)
  const time = new Date();
  time.setSeconds(time.getSeconds() + 150); // 3 minutes timer
  const handlePhoneChange = (newValue) => {
    // console.log(phone.replace(/\s+/g, '').replace(/^\+/, ''));
  
    setPhoneNumber(newValue)
  }
const [sendSms,setSendSms]=React.useState(false)
  const handleSendSms= async(event)=>{
    event.preventDefault();
    //Перевірка чи є номер телефону в основних для логіну .. 
    let logInPhoneF=await logInPhone(phone.replace(/\s+/g, '').replace(/^\+/, ''))
    if(!logInPhoneF){
      setShowAllert({...showAllert,message:`Користувач з номером ${phone} не знайдений !`,open:true,type:0})
      return 
    }
    setShowAllert({...showAllert,message:`Вам надіслано код підтвердження`,open:true,type:1})
    setPhoneFromSMS(true)

    //якщо немає тоді мені потрібно повідомити абонента 
   

  }
  

  
  
  React.useEffect(() => {
  console.log(token,"TOKKEN");
    const fetchData = async () => {
      try {
        let flag=  await checkUser();
         
          if (!flag) {
          
          navigate("/home");
          return
        }
        } catch (error) {
        console.log("помилка в Layout при перевірці чи користувач авторизований");
        return
        }
      try {
        await checkBillingIP();
      if (ip!='')  {
       
        setOpenLogIp(true);
      
      
      }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [ip]);
  
  return ( 
    <ThemeProvider theme={defaultTheme}>
    
      <CustomAlert open={showAllert.open} type={showAllert.type} handleClose={handleCloseAllert} message={showAllert.message} />
      <Grid container component="main" sx={{ height: '100vh' }}>
      <DropDownCard open={openLogIp} transition={(props)=>{
    return <Slide {...props} direction="up" />; 
  }} handleClose={handleCloseLoginIp} user={{login:login}}/>
        <CssBaseline />
        
        <Grid
        className=' z-50'
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${loginImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
            '#fefefe',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
          overflow="hidden"
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >     
         

         
            <Avatar className=' cursor-pointer' sx={{ m: 1, bgcolor: '#c9303f',textShadow:"revert" , boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}>
            
             {!checkedPhone?<VpnKeyIcon/>:<ContactPhone/>}
           
            </Avatar>
            
            <Typography component="h1" variant="h5" className=' font-bold text-black'>
              Кабінет користувача 
            </Typography>
            
            
            {
              !checkedPhone?
         (<Box component="div" noValidate  sx={{ mt: 1,width:'80%' }}>
              <animated.div style={{
                ...springsText
              }}>
              <TextField
                color={loginText.length>0&&loginText!==''?'success':'info'}
                margin="normal"
                
                fullWidth
                id="login"
                label="Логін"
                name="login"
                autoComplete="login"
                autoFocus
                value={loginText}
                onChange={handleLoginTextChange}
                focused={loginText.length>0&&loginText!==''}
               
                
              />
              <OutlinedInput
                components={<TextField focused/>}
                
               color={passwordText.length>=6?'success':'error'}
                margin="normal"
                required
                fullWidth
                name="password"
                placeholder='Пароль'
                id="password"
                autoComplete="current-password"
                value={passwordText}
                onChange={handlePasswordTextChange}
                focused={passwordText.length>=6&&passwordText!==''}
                
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton 
                      aria-label="toggle password visibility"
                      onClick={()=>setShowPassword(false)}
                      onMouseDown={()=>setShowPassword(true)}
                      edge="end"
                    >
                    <Visibility/>
                    </IconButton>
                  </InputAdornment>
                }
                
              />
              </animated.div>

            <animated.div
            style={{
             
              ...springs,
            }}
            >
              <Button
                onClick={handleLogInWithPassword}
                type="button"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
                disabled={(loginText.trim().length==0 || passwordText.trim().length==0)?true:false}
              >
                Ввійти
              </Button>
             </animated.div>
           
            </Box>)
            :
            !phoneFromSMS?
            (<Box component="div" noValidate  sx={{ mt: 1,width:'80%' }}>
              <animated.div  style={{
                ...springsText
              }}>
            <MuiTelInput
            inputProps={{
              maxLength: 16, // Обмеження на кількість символів
            }}
            autoFocus
            fullWidth
            margin='normal'
            defaultCountry='UA'
            value={phone}
            onChange={handlePhoneChange}
            
            />
             
              </animated.div>

            <animated.div
            style={{
             
              ...springs,
            }}
            >
              <Button
                disabled={phone.replace(/\s+/g, '').replace(/^\+/, '').length<12}
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSendSms}
              >
                Отримати код
              </Button>
             </animated.div>
           
            </Box>)
            :
            (<Box component="div" noValidate className=' flex flex-col items-center' sx={{ mt: 1,width:'80%' }}>
            <animated.div  style={{
              ...springsText
            }}>

          <TextField
                margin="normal"
               
                id="code"
                label="CODE"
                type='number'
                name="code"
                autoComplete="code"
                autoFocus
                value={code}
                onChange={handleCodeChange}
               focused
               
             
                
              />
           
            </animated.div>

          <animated.div
          style={{
           
            ...springs,
          }}
          >
          
            <Timer showAllert={showAllert} setShowAllert={setShowAllert} setPhoneFromSMS={setPhoneFromSMS} expiryTimestamp={time}/>
            <Button
              type="submit"
              disabled={code==''||code.length<4}
              variant="outlined"
              sx={{ mt: 3, mb: 2,p:2 }}
              onClick={handleVeriffyCode}
            >
              Підтвердити код
            </Button>
           </animated.div>
         
          </Box>)
}
           
            <FormControlLabel
           className=' flex flex-col  sm:flex-row '
        control={<IoSwitch sx={{ m: 1 }} checked={checkedPhone} onChange={handleCheckedPhone} />}
        label="Вхід за номером телефону"
      />
            
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
