import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';


const Footer = () => {
  return (
    <div className="bg-black bg-opacity-60 fixed bottom-0 w-screen h-32">
        <div className="flex justify-between items-center my-5 mx-20 h-24">
            <div className="flex justify-center items-center ">
                <h1 className="m-2 text-yellow-400">Najnovšie podujatie</h1>
                <p className="m-2 text-white">18.3.2023 18:00</p>
            </div>
            <div className="flex justify-center items-center">
                <h1 className="m-2 text-yellow-400">Posledná úprava trate</h1>
                <p className="m-2 text-white">18.3.2023 18:00</p>
            </div>
            <div className="flex justify-center items-center">
                <h1 className="m-2 text-yellow-400">Najrýchlejší čas na trati</h1>
                <p className="m-2 text-white">18.3.2023 18:00</p>
            </div>
            <div className="flex justify-center items-center">
                <h1 className="m-2 text-yellow-400">Sociálne siete</h1>
                <a href="https://www.facebook.com/groups/1495861891185432in">         
                <FacebookIcon className="m-2" sx={{color: "white"}}/>
                </a>
                <a href="https://www.instagram.com/mxtratvitanova/">
                <InstagramIcon className="m-2" sx={{color: "white"}}/>
                </a>
                <a href="">
                <EmailIcon className="m-2" sx={{color: "white"}}/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer