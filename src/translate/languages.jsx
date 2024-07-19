const portuguese = {
   
    header:{
        home: "INICIO",
        projects: "PROJETOS",
        repos: "REPOSITORIOS"
    },
    home:{
        age: "Idade",
        city: "Cidade",
        company: "Empresa",
        title:'EXPERIÊNCIA',
        start: () => (<p>
        Estudei engenharia da computação na <a target="_blank" href="https://unisal.br/" style={{color:'red', fontWeight:'bolder'}}>UNISAL</a> e em paralelo fazia cursos como<a target="_blank" href="https://www.udemy.com/certificate/UC-d04360cc-1ecd-41e9-9a66-3d621a79c78a/" > curso web Javascript Udemy </a> 
         e <a target="_blank" href="https://cursos.alura.com.br/degree/certificate/014f8585-55f1-4422-b0ae-c7e9b0f4bd2a" >ALURA - javascript para backend</a>, com isso construi a base para trabalhar com apis e interfaces react com javascript.
        </p>),
    }
};

const english = {
    header:{
        home: "HOME",
        projects: "PROJECTS",
        repos: "REPOSITORIES"
    },
    home:{
        age: "Age",
        city: "City",
        company: "Company",
        title:'EXPERIENCE',
        start: () => ( <p>
        I was studying computer engineering at <a target="_blank" href="https://unisal.br/" style={{color:'red', fontWeight:'bolder'}}>UNISAL</a> and in parallel a 
        <a target="_blank" href="https://www.udemy.com/certificate/UC-d04360cc-1ecd-41e9-9a66-3d621a79c78a/" > Web Course with JavaScript at Udemy </a> 
         and <a target="_blank" href="https://cursos.alura.com.br/degree/certificate/014f8585-55f1-4422-b0ae-c7e9b0f4bd2a" >ALURA</a>, this gave me the base start projects and api's using react, node and js.
        </p>),
    }
};

export { portuguese, english };