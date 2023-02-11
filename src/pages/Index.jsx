import Connect from "../components/Connect"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Partners from "../components/Partners"
import Steps from "../components/Steps"
import Search from "../components/Search"
import { data } from '../../data';
import { useGlobalContext } from "../context"
import axios from "axios"
import { useEffect } from "react"

function Index() {
  const { isModalOpen,selectedUser, setUser } = useGlobalContext();

  useEffect(()=>{

    if(localStorage.getItem('token')){
      var config = {
        method: 'get',
        url: 'https://lichess.org/api/account',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      };
      
      axios(config)
      .then(function (response) {
        console.log({...response.data,avatar:"https://api.multiavatar.com/ee3f2b031c7b329ec0.png"});
        setUser({...response.data,avatar:"https://api.multiavatar.com/ee3f2b031c7b329ec0.png"});
      })
      .catch(function (error) {
        setUser(null);
      });
    }

  },[]);

 
  return (
    <>  
      <Hero />
      <Steps />
      <Partners />
      <Connect />
      <Footer />
      {isModalOpen&&<Search items={data}  value={selectedUser} />}
    </>
   
  )
}

export default Index;
