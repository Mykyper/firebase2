import React, { useState } from 'react'


const Seconnecter = () => {

    const [erreur, setErreur]=useState();
    const [email, setEmail]=useState();
    const [password, setPassword] =useState();

    const soumettre = (e) => {
      
    }

  return (
    <div>
      <div className='container pt-5'>
      <h1>Page de Connection</h1>
        <form onSubmit={soumettre}>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Adresse E-mail</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" id="exampleInputPassword1" name='password' onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" name='retenir'/>
                <label class="form-check-label" for="exampleCheck1">Se souvenir de moi</label>
            </div>
            <button type="submit" class="btn btn-primary">Se connecter</button>
        </form>
        <br></br>
           <a href='/register/' ><button type="submit" class="btn btn-primary" > S'inscrire</button> </a> 
           
      </div>
    </div>
  )
}

export default Seconnecter