import Head from 'next/head'
import Menu from '../components/menu/menu'
import Presentation from '../components/accueil/presentaion/presentation'
import Service from '../components/accueil/services/service'
import ButtonFloat from '../components/boutique/bouton-flottant/button-flotant'
import { getSortedTrainingData } from '../lib/formation-post'
import Formations from '../components/accueil/formations/formations'
import Production from '../components/accueil/realisations/realisation'
import { useEffect } from 'react'

export default function Accueil({data, title, description}) {
  
  const dataArray = Array.from(data)

  useEffect(()=>{
    console.log(dataArray);
  })
  return (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta charSet="utf-8"/>
      <meta name="description" content={description}></meta>
      <title>{title}</title>
    </Head>
    <Menu/>
    <Presentation/>
    <Service/>
    <ButtonFloat/>
    <Production/>     
    <Formations data = {data} more={dataArray} />      
  </div>  
  );
}

export async function getStaticProps(){
  const siteData = await import('../config.json');
  const data = getSortedTrainingData()
  return{
    props:{
      data: data,
      title: siteData.default.title,
      description: siteData.default.description, 
    }
  };
}
