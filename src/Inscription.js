import React, { useState } from 'react'


const Inscription = () => {
    const [erreur, setErreur]=useState();
    const [email, setEmail]=useState();
    const [password, setPassword] =useState();
    const soumettre = (e) => {
        e.preventDefault()

        
       
    }

  return (
    <div>
      
      <div className='container pt-5'>
      <h1>Page d'inscription</h1>
        <form onSubmit={soumettre}>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Adresse E-mail</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" id="exampleInputPassword1" name='password' onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" name='retenir'/>
                <label class="form-check-label" for="exampleCheck1">Je suis d'accord avec les termes de service</label>
            </div>
           <button type="submit" class="btn btn-primary" > Inscription</button> 
        </form>
      </div>
      <br></br>
          <p>Vous possedez déja un compte? <a href='/firebase'>Connectez vous</a></p> 
    </div>
  )
}

export default Inscription