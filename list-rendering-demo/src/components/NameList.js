import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Sharad', 'Jaini', 'Jahanvi']
    const persons = [
        {
            id:1,
            name:'Sharad',
            age: 35,
            skill: 'Java'
        },
        {
            id:2,
            name:'Jahanvi',
            age: 28,
            skill: 'Account'
        },
        {
            id:3,
            name:'Jaini',
            age: 4,
            skill: 'Masti'
        }
    ]
    const personList = persons.map(person => <Person person={person}/>)
  return (
    <div>
        {
            personList
        }
    </div>
  )
}

export default NameList
