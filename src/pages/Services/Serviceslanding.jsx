import React from 'react'
import Servicecard from '../../componets/Servicecard'

function Serviceslanding() {
    const services = [
    {title:'Pet Age Calculator', desc:'Convert pet years to human years', to:'/services/age-calculator'},
    {title:'Weight Checker', desc:'Check healthy weight ranges', to:'/services/weight-checker'},
    {title:'Pet Care Guides', desc:'Download guides & charts', to:'/services/care-guides'},
    {title:'Recipe Generator', desc:'Custom home-made recipes', to:'/services/food-recipes'},
    {title:'Printable Charts', desc:'Feeding & vaccination charts', to:'/services/printable-charts'},
    {title:'Breed Identifier', desc:'Identify breed from photo', to:'/services/breed-identifier'},
    {title:'Name Generator', desc:'Generate pet name ideas', to:'/services/name-generator'}
  ];
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map(s => <Servicecard key={s.title} {...s} />)}
      </div>
    </div>
  )
}

export default Serviceslanding