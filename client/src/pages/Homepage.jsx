import React from 'react'
import './Homepage.css'
import Write from '../assets/notifications.png'
import Placeholder from '../assets/placeholder.png'
import Report from '../assets/report.png'
import Brain from '../assets/brain.png'
import Access from '../assets/access.png'
import Blockchain from '../assets/blockchain.png'
import Protein from '../assets/pro.png'
import Data from '../assets/data.png'
import Instagram from '../assets/instagram.png'
import Facebook from '../assets/facebook.png'
import Twitter from '../assets/twitter.png'
import Logo2 from '../assets/logo2.png'
function Homepage() {
  return (
    <>

    <div id = 'container-1' className = 'flex justify-center items-center mt-4 rounded-t-3xl'>
            <div className = 'flex justify-center flex-col items-center outline outline-[#C1D6C0] rounded-xl p-44 mb-8'>
                <div className = 'flex items-center pb-4'>
                <img className = 'h-17 w-14' src = {Logo2} />
                </div>
                <div className = 'font-bold font-syne text-[#D4EDDB] text-center  mb-8'>
                    
                    PROTENTIAL.
                </div>
                <div className = 'font-bold font-syne text-6xl text-center text-[#D4EDDB]'>
                    Unlock your potential with AI-designed proteins
                </div>
                <a href = 'http://192.168.254.162:8501/'>
                    <button className = 'bg-[#C1D6C0] mt-16 shadow-2xl p-4  rounded-2xl'>
                        <div className = 'font-semibold'>
                        Join Now!
                        </div>
                    </button>
                </a>    
            </div>
    </div>

    <div id = 'container-2' className = 'bg-[#F1F7ED] flex flex-col justify-center items-center rounded-t-2xl'>
            <div className = 'text-4xl font-bold pt-8 pb-3 text-center font-syne'>
                Revolutionizing Cure <br /> Developments
            </div>
            <div className = 'mb-20 text-center'>
                Protential combines AI and healthcare to design protein< br /> structures in 3D, targeting diseases for as faster cure.<br /> Be a part of the next-gen healthcare solution.
            </div>
            <div className = 'flex flex-row'>
                <div id = 'container-2-card' className = 'bg-gradient-to-r from-[#D8EAD8] to-[#C6D3DC] duration:700 transform hover:scale-105 hover:shadow-2xl m-4 p-4  rounded-2xl flex justify-center shadow-lg items-center flex-col'>
                    <img className = 'h-16 w-16' src = {Report}/>
                    <div className = 'font-bold text-xl font-syne'>
                        Accomplishments
                    </div>
                    <div className = "text-center">
                        Over 100,000 + Proteins Recorded and Synthesised Digitally
                    </div>
                </div>
                <div id = 'container-2-card' className = 'bg-gradient-to-r transform duration:700 hover:scale-105 hover:shadow-2xl from-[#D8EAD8] to-[#C6D3DC] m-4 p-4 rounded-2xl flex justify-center shadow-lg items-center flex-col'>
                    <img className = 'h-16 w-16' src = {Access}/>
                    <div className = 'font-bold text-xl font-syne'>
                        Accessibility
                    </div>
                    <div className = "text-center">
                        Aided in the Production of 10+ Clinical Drugs
                    </div>
                </div>
            </div>
            <div className = 'flex flex-row'> 
                <div id = 'container-2-card' className = 'bg-gradient-to-r from-[#D8EAD8] to-[#C6D3DC] duration:700 m-4 p-4 transform hover:scale-105 hover:shadow-2xl rounded-lg flex justify-center shadow-lg items-center flex-col'>
                    <img className = 'h-16 w-16' src = {Blockchain}/>
                    <div className = 'font-bold text-xl font-syne'>
                        Blockchain
                    </div>
                    <div className = "text-center">
                        Securely Stores and Chooses Who Accesses Your Data on the Blockchain
                    </div>
                </div>
                <div id = 'container-2-card' className = 'bg-gradient-to-r from-[#D8EAD8] to-[#C6D3DC] duration:700 transform hover:scale-105 hover:shadow-2xl rounded-lg shadow-2xl m-4 p-4 rounded-2xl flex justify-center shadow-lg items-center flex-col'>
                    <img className = 'h-16 w-16' src = {Brain}/>
                    <div className = 'font-bold text-xl font-syne'>
                        AI
                    </div>
                    <div className = "text-center">
                        Enables Researchers to Synthesize on the Web
                    </div>
                </div>
            </div>
        </div>



        <div id = 'container-3' className = 'bg-[#F1F7ED] flex justify-center items-center'>
            <div id = 'container-card-3' className = 'bg-gradient-to-r to-[#CCDECB] via-[#BACBD4] from-[#D0D7DC] rounded-2xl flex items-center justify-center flex-col'>
                <div className = 'flex m-5'>
                    <div>
                        <div className = 'font-bold font-syne text-2xl mb-5'>Databases</div>
                        <div>By using AlphaFold2's database of 68 million proteins<br /> 
                        and a deep learning algorithm, we can accurately predict <br />
                        protein bindings. The AlphaFold Protein Structure Database, created <br />
                        in partnership with Europe's flagship laboratory for life sciences<br />  
                        (EMBL'sEuropean Bioinformatics Institute), builds upon decades of<br />  
                        painstaking work done by scientists, using traditional methods to<br /> 
                        determine the structure of proteins.</div>
                    </div>
                    <div id = 'container-card-3-2' className = 'rounded-2xl flex justify-center items-center shadow-2xl ml-20 bg-white'>
                        <img className = 'h-28 w-28' src = {Data}/>
                    </div>
                </div>
                <div className = 'flex m-5'>
                    <div id = 'container-card-3-2' className = 'rounded-2xl flex justify-center items-center shadow-2xl mr-20 bg-white'>
                        <img className = 'h-28 w-28' src = {Protein}/>
                    </div>
                    <div>
                        <div className = 'font-bold text-2xl mb-5 font-syne'>Why Proteins?</div>
                        <div>Protein binding can enhance or detract from a drug's performance.<br/> 
                        As a general rule, agents that are minimally protein bound penetrate<br/> 
                        tissue better than those that are highly bound, but they are excreted <br/>
                        much faster. Our Applications uses these databases and models to <br/>
                        streamline the protein binding process.</div>
                    </div>
                </div>
            </div>  
        </div>

        <div id = 'container-4' className = 'bg-[#F1F7ED] rounded-b-2xl' >
            <div className = 'flex justify-center'>
                <ul className = 'mx-20'>
                    <li>Company</li>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
                <ul className = 'mx-20'>
                    <li>Legal</li>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Cookies</li>
                </ul>
                <ul className = 'mx-20'>
                    <li>Support</li>
                    <li>Help</li>
                    <li>Blog</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className = 'flex flex-col items-center justify-center mt-10'>
                <div className = 'flex'>
                    <img className = 'h-5 w-5 m-3' src = {Instagram} />
                    <img className = 'h-5 w-5 m-3' src = {Facebook}/>
                    <img className = 'h-5 w-5 m-3' src = {Twitter}/>
                </div>
                <div>© 2023 Protential - All rights reserved.</div>
            </div>
        </div>
    </>
  )
}

export default Homepage