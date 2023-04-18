import React, { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { alpha, styled } from '@mui/material/styles';
import Layout from '@/components/layout/Layout';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Link from 'next/link';
import { SettingsUpdateInstance } from 'twilio/lib/rest/supersim/v1/settingsUpdate';
import { collection, addDoc } from "firebase/firestore";
import { app, database } from "../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter} from "next/router";

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  });

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 12,
    pt: 2,
    px: 4,
    pb: 3,
  };

export default function Register() {

  const auth = getAuth();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [smsCode, setSmsCode] = useState('');
  const [twilioCode, setTwilioCode] = useState('');

  const [inputData, setInputData] = useState({number: '', password: ''});

  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);

  const errorScript1 = "Нууц үгнүүд хоорондоо таарахгүй байна";
  const errorScript2 = "Нууц үг нь 8 тэмдэгтээс багагүй байх ёстой";

  const collectionRef = collection(database, 'users');


  // useEffect(() => {
  //   let token = sessionStorage.getItem('Token');

  //   if(token) {
  //     router.push('/home');
  //   }
  // }, [])

    // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      number: event.target.number.value,
      first: event.target.first.value,
      last: event.target.last.value
    }

    

    try {
        if(data.first === data.last) {
            setError1(false)
            if(data.first.length < 8) {
                setError2(true)
            } else {
                setError2(false)
                const res = await fetch(`api/sms-sender?phoneNumber=${data.number}`);
                const code = await res.json()
                setInputData({number: data.number, password: data.first});
                setTwilioCode(`${code.smsCode}`)
                handleOpen()
            }
        } else {
            setError1(true)
        }
    } catch(err) {
        console.log(err)
    }

    // // Send the data to the server in JSON format.
    // const JSONdata = JSON.stringify(data)

    // // API endpoint where we send form data.
    // const endpoint = '/api/form'

    // // Form the request for sending data to the server.
    // const options = {
    //   // The method is POST because we are sending data.
    //   method: 'POST',
    //   // Tell the server we're sending JSON.
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   // Body of the request is the JSON data we created above.
    //   body: JSONdata,
    // }

    // // Send the form data to our forms API on Vercel and get a response.
    // const response = await fetch(endpoint, options)

    // // Get the response data from server as JSON.
    // // If server returns the name submitted, that means the form works.
    // const result = await response.json()
    
  }

  // Firebase-руу бүртгэх кодыг энд бичнэ
  function sendCode() {
    if(twilioCode == smsCode) {
      let email = inputData.number + "@uragi.mn"
      let password = inputData.password;
      createUserWithEmailAndPassword(auth, email, password)
        .then((response)=>{
            // sessionStorage.setItem('Token', response.user.accessToken);
            router.push('/portfolio');
        })
        .catch(err=>{
          if(err.message == "Firebase: Error (auth/email-already-in-use).") {
            alert("Бүртгэлтэй хаяг байна! Та өөр дугаараар бүртгүүлнэ үү!");
          } else {
            alert("Алдаа гарлаа: "+err.message);
          }
        })
    } else {
      alert("Баталгаажуулах код буруу!")
    }
    // return false
     
  }

    return (
        <>
            <Layout
                headerLayout={11}
                logo="logo-flat"
            >
                <section className="overflow-hidden h-screen md:h-auto md:mt-112 sm:mt-80">
                    <div className="row x-gap-120 h-1/1 items-center">
                        <div className="col-lg-6 h-1/1 relative md:h-300">
                            <div className="bg-image absolute-full-center md:bg-pos-top js-lazy" style={{ backgroundImage: 'url("/img/forms/bg.png")' }} />
                            <div className="pl-10 md:pl-0 absolute-full-center z-2">
                                <div className="pl-120 lg:pl-48 md:pl-0 pt-130 md:pt-100">
                                    <div className="pt-120 md:pt-0">
                                        <div className="md:container sm:w-screen">
                                            <h1 className="text-4xl md:text-3xl text-white">Uragi.mn-д<br /> тавтай морил</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="md:container py-48">
                                <h1 className="text-4xl md:text-3xl">Бүртгүүлэх</h1>
                                <p className="mt-16">Бүртгэлтэй бол энд дарна уу? <Link className="decoration-none text-accent fw-600" href="/login">Нэвтрэх</Link></p>
                                <form className="contact-form row y-gap-32 pt-48" onSubmit={handleSubmit}> 
                                    <div className="col-12">
                                        <input type="text" name="number" placeholder="Утасны дугаар" />
                                    </div>
                                    <div className="col-12">
                                        <input type="password" name="first" placeholder="Нууц үг" />
                                    </div>
                                    <div className="col-12">
                                        <input type="password" name="last" placeholder="Нууц үг давтах" />
                                    </div>
                                    {error1 && <div style={{color: "red"}}>{errorScript1}</div>}
                                    {error2 && <div style={{color: "red"}}>{errorScript2}</div>}
                                    <div className="col-12">
                                        <button type="submit" name="submit" id="submit" className="button -md -accent -uppercase text-white" >
                                            Бүртгүүлэх
                                        </button>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <button onClick={() => setShowLogin(true)}>Open Modal</button>
      <PhoneVerification show={showLogin} close={() => setShowLogin(false)} /> */}
                
            </Layout>
            <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Таны дугаар луу код илгээгдлээ
    </Typography>
    <CssTextField label="Утасны дугаар луу илгээсэн нууц кодыг оруулна уу" id="custom-css-outlined-input" style={{width: "100%", margin: "3px"}} value={smsCode} name="smsCode" onChange={e => setSmsCode(e.target.value)} />
    <Button variant="contained" endIcon={<SendIcon />} style={{float: "right"}} onClick={sendCode}>
  Бүртгүүлэх
</Button>
  </Box>
</Modal>
        </>
    )
}



  
  