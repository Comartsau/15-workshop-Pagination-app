import FoodComponent from './components/FoodComponent'
import MenuData from "./data/MenuData"
import {useEffect, useState} from "react"
import './App.css'

function App() {
  const [foodData,setFoodData] = useState(MenuData)
  const [dataInPage,setDataInPage] = useState([])
  const [page,setpage] = useState(0)

  const pagination = () => {
    const foodPerPage = 3 //ให้แสดง 3 รายการต่อ 1 หน้า
    const pages = Math.ceil(MenuData.length/foodPerPage)

    const newFood = Array.from({length:pages},(data,index) =>{
      const start = index * foodPerPage
      return MenuData.slice(start,start+foodPerPage)
    })
      return newFood
  }

  useEffect(() => {
    const pageinate = pagination()
    setDataInPage(pageinate)
    setFoodData(pageinate[page])
  },[page])

  const handlePage = (index) => {
    setpage(index)
  }

  return (
    <div className="App">
        <h1>FoodCard | Pagination</h1>
        <div className='container'>
        {foodData.map((food,index) =>{
          return (
            <FoodComponent key={index} {...food} />
          )
        })}
        </div>
        <div className='pagination-container'>
          {dataInPage.map((data,index) =>{
            return (
              <button className={`page-btn ${index === page ? "active-btn" : null }`} 
              key={index} 
              onClick={()=>handlePage(index)}>{index+1}</button>
            )
          })}
        </div>
    </div>
  )
}

export default App
