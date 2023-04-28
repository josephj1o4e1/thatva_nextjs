import { Suspense } from "react";
import ApiCall from "./apicall";
import ApiCallRicknMorty1 from "./apicall1";
import ApiCallRicknMorty2 from "./apicall2";
import ApiCallRicknMorty3 from "./apicall3";
import ApiCallRicknMorty4 from "./apicall4";
import Loading from "./loading";
// import { useState, useEffect } from "react";

const Home = () => {
  // return (
  //   <Suspense fallback={<Loading />}>
  //     <ApiCall />
  //   </Suspense>
  // )

  return (
    <Suspense fallback={<Loading />}>
      <ApiCall />
      <ApiCallRicknMorty1 />
      <ApiCallRicknMorty2 />
      <ApiCallRicknMorty3 />
      <ApiCallRicknMorty4 />
    </Suspense>
  )





  // useEffect(() => {
  //   fetch("api/hello")
  // .then((response) => response.json())
  // .then((data) => setCharacters(data.characters)) // update this line
  // .catch((error) => console.log(error));
  // }, []);
  // return (
  //   <div className="container" style={{ 'maxWidth': '800px', 'margin': '0 auto' }}>
  //     <h1>Characters</h1>
  //     <div className="grid" style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit, minmax(200px, 1fr))', 'gap': '20px' }}>
  //       {characters.map((character) => (
  //         <div key={character.id} className="card" style={{
  //           'backgroundColor': '#fff',
  //           'padding': '20px',
  //           'borderRadius': '10px',
  //           'boxShadow': '0 2px 4px rgba(0, 0, 0, 0.1)',
  //           'textAlign': 'center'
  //         }}>
  //           <img src={character.image} alt={character.name} style={{
  //             'display': 'block',
  //             'width': '100%',
  //             'borderRadius': '5px',
  //             'marginBottom': '10px'
  //           }} />
  //           <h2 style={{
  //             'fontSize': '1.5rem',
  //             'margin': '0 0 10px'
  //           }}>{character.name}</h2>
  //           <p style={{ 'margin': '0' }}>Status: {character.status}</p>
  //           <p style={{ 'margin': '0' }}>Species: {character.species}</p>
  //           <p style={{ 'margin': '0' }}>Gender: {character.gender}</p>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );

};

export default Home;