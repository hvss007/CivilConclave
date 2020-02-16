import React from 'react'
// import { Link } from 'react-router-dom'
import styles from './src/problems.module.css'
import Navbar from '../home/Navbar'
import Contact from '../home/Contact'
import image from './src/index.jpg'
import Problem from './src/Problem-statement-2019.pdf'

export default class Problems extends React.Component{
    render(){
        const problems = [
            {
                title:'Case 1',
                date:'21, March 2020',
                description:'Presentation of Solutions to the Problem Statement given by the Industry.',
                image:image
            },
            {
                title:'Case 2',
                date:'21, March 2020',
                description:'Presentation of Research Work to a committee of veterans from discipline of Civil Engineering.',
                image:image
            },
            {
                title:'Case 3',
                date:'22, March 2020',
                description:'A problem statement will be given on which students will be supposed to create the model.',
                image:image
            },
            {
                title:'Case 4',
                date:'21 & 22, March 2020',
                description:' A series of 6 lectures each of half hour covering all disciplines of Civil Engineering ',
                image:image
            }
        ]
        return(
            <div>
            <Navbar/>
            <div className={styles.problemHead}>
                <p className={styles.heading}>Case studies</p>
                <hr className={styles.problemHr}/>
            </div>
            <div className={styles.problemParent}>
                {problems?problems.map((list,index)=>{
                return(
                    <div className={styles.problemChild}>
                        <div className={styles.problemChild1}>
                            <div className={styles.problemTitle}>{list.title}</div>
                            <div className={styles.problemDescription}>{list.description} </div>
                             <a href={Problem} className={styles.downloadProblem} download="problem">DOWNLOAD PROBLEM</a>
                        </div>
                            <img src={list.image} alt="fgh" className={styles.problemImage}/>
                    </div>
                )}) :null}
            </div>
            <Contact/>
            </div>
        )
    }
}