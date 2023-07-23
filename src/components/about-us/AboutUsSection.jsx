import React, { useContext } from 'react'
import { MainContext } from '../../context/MainContextProvider'
import CounterItem from './CounterItem';

function AboutUsSection() {
    const {counterArr} = useContext(MainContext);
  return (
    <section className="about-us-section" id='about us'>
        <div className="container">
            <div className="row">
                {
                    counterArr.map(item => (
                        <div className="col-12 col-md-6 col-lg-3" key={item.id}>
                            <CounterItem item={item}/>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default AboutUsSection
