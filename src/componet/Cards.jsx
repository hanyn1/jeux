import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import DataBase from '../product';
export default function Cards() {
  return (
    <div>{
        DataBase.map(
            (produit)=>(
                <div style = {{ width:'300px'}} class="card" >
                <img src={produit.image} class="card-img-top" alt="..."/>
          <div class="card-body" key={produit.id}>
            <h5 class="card-title">name :{produit.name}</h5>
            <p class="card-text">description : {produit.description}</p>
            <p class="card-text">price :{produit.price}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
          </div>        
            )
        )
        }

    </div>
  )
}
