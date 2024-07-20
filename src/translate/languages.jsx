const portuguese = {
   
    header:{
        home: "INICIO",
        projects: "PROJETOS",
        repos: "REPOS"
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
        smarkio: () => (<p>
            Iniciei profissionalmente como desenvolvedor de sistemas em projetos utilizando javascript, node, docker, aws s3, aws lambda para logs além de aprofundar estudos em mysql como no curso <a target="_blank" href="https://cursos.alura.com.br/certificate/d703479d-9460-4bef-8747-e61003dcdca9" >API's com  express e mySql</a>.
        </p>),
        zenvia: () => ( <p>
            Após a fusão da empresa smarkio com zenvia, iniciei alguns cursos para aprimorar minhas habilidades, os principais são os cursos da
            <a target="_blank" href="https://cursos.alura.com.br/certificate/7dc99eff-654e-4d74-8e71-96dc0173e4dd" > Rocketseat e Alura, </a>
            continuei fazendo cursos que me proporcionassem conhecimento de desenvolvimento e também analise de dados em bancos como sql-server concluindo certificados como <a target="_blank" href="https://cursos.alura.com.br/certificate/eliseu-silva4/microsoft-sql-server-2022-consultas-avancadas" >PL/SQL</a>.
        </p>),
        vivo: () => ( <p>
            Fui contratado na vivo, de longe é onde adquiri mais conhecimento, não só como desenvolvedor mas como designer de projetos, devops, criação e manutenção de bancos de dados, servidores físicos, deploy de servidores em cloud e mais.
        </p>),
        fibrados: () => (  <p>
            Na vivo meu principal projeto se chamava "sites-fibrados", esse sistema foi feito para migrar um projeto legado para novas tecnologias, unificar diferentes áreas em um novo banco de dados para resolver
            o problema de informações incongruentes, novas regras de negócio para um sistema de workflow e outras funcionalidades, eu liderei esse projeto do zero e fiz todas as implementações de código como deploys, estruturas de banco de dados, exceções de firewall estilização e apresentação para diretoria.
        </p>),
        alloha: () => (  
            <p>
                Na alloha eu trabalho com um projeto legado feito em node, react com vite, docker, mysql(5.6), php e algumas tecnologias legado, meu trabalho é sobre manutenção desse serviço, aprimoramento de funçoes como planejamento tributario e analise de troubletickets encontrando soluções para bugs.
            </p>),
        now: () => (<p>
            Além do meu trabalho faço cursos para aprender novas tecnologias, como
            <a target="_blank" href="https://www.udemy.com/certificate/UC-8c9176e6-4bc7-4d5e-a85b-a15192baf0e7/" > C# Programação orientada a objetos </a>
            , projetos para aprimorar minhas habilidades e conhecer mais formas de lidar com problemas envolvendo tecnologias como databases, etl, infra e problemas de código, fiz muitas soluções (em muitas linguagens como rust, c#, js, ts) e fiz o deploy em plataformas como amazon ec2, eds(utilizando postgres), google cloud vm's e digital ocean vm's, isso tem me dado muito conhecimento sobre operações devops.
        </p>)
        
    },
    descriptions:{
   
        vergs:'Vergs-tattoo foi um site criado para um estudio de tatuagem, o site foi feito com react, scss e javascript, o foco principal é a responsividade e a facilidade de uso, o site tem facilidades como o sistema de agendamento de tatuagens integrado a api de whatsapp e api de localização do google.',
        thiago:'Thiago-adv foi um site criado para um advogado, o site foi feito com react, scss e javascript, o modelo segue a linha de landing-page com foco na maxima apresentação de informaçoes em uma pagina que também possibilita o encaminhamento ao profissional',
        hermes:'Hermes-project foi um projeto pessoal para portifolio, iniialmente o projeto foi feito em javascript, react, express e sql-server como banco porém agora esta sendo refatorado inteiramente para typescript tanto front-end como back-end, apis em nest, postgres como banco de dados hospedado na amazon eds.'
    }
};

const english = {
    header:{
        home: "HOME",
        projects: "PROJECTS",
        repos: "REPOS"
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
        smarkio: () => (<p>
            Start working on system developments having daily contact with creation of api services using javascript, node, docker, aws s3 and aws logs analisys using lambda, in addition to delving deeper into mysql with courses such as <a target="_blank" href="https://cursos.alura.com.br/certificate/d703479d-9460-4bef-8747-e61003dcdca9" >API's with express and mySql</a>.
        </p>),
        zenvia: () => ( <p>
            After the merger of company smarkio with zenvia, i have started some courses to improve my skills, the main ones are
            <a target="_blank" href="https://cursos.alura.com.br/certificate/7dc99eff-654e-4d74-8e71-96dc0173e4dd" > Rocketseat and Alura </a>
            I always continued taking courses that gave me development knowledge and also data analysis in db's such as sql-server, completing certificates like <a target="_blank" href="https://cursos.alura.com.br/certificate/eliseu-silva4/microsoft-sql-server-2022-consultas-avancadas" >PL/SQL </a>.
        </p>),
        vivo: () => ( <p>
            I was hired at vivo, by far this is where I gained more knowledge, not just as a developer but as a project designer, devops, databases creation and maintenance, physical servers, cloud server deployments and more.
        </p>),
        fibrados: () => (  <p>
            At vivo my main case was called  "sites-fibrados", this system was made to migrate a legacy project into new technologies, unify different areas into a new database to solve
            incongruity of informations, new business rules to a workflow system and many other features, I headed this project from the scratch and made all the code implementations like deploys, database structures, firewall exceptions, styling and presentation to the board.
        </p>),
        alloha: () => (  
            <p>
                At alloha i've working with a legacy project made in node, react with vite, docker, mysql(5.6), php and some old tech's, 
                 my job is about maintenance this service, improve of functions such as tax planning and analize troubletickets finding solutions for bugs.
            </p>),
        now: () => (<p>
            besides my job i do some courses to learn new tech's, like 
            <a target="_blank" href="https://www.udemy.com/certificate/UC-8c9176e6-4bc7-4d5e-a85b-a15192baf0e7/" > C# Object-oriented programming </a>
            , i'm working on some projects to improve my skills and know more ways to deal with problems involving techs like db, etl, infra and code troubles, i've made many solutions(in many lang's like rust, c#, js, ts) and deployed them on amazon ec2, eds(postgres-db), google cloud vm's and digital ocean vm's, this gave me a lot about devops operations.
        </p>)
    },
    descriptions:{
   
        vergs:'Vergz-tattoo is a site created for a tattoo studio, the site was made with react, scss and javascript, the main focus is the responsiveness and ease of use, the site has facilities like the tattoo scheduling system integrated with the whatsapp api and the google location api.',
        thiago:'Thiago-adv was a site created for a lawyer, the site was made with react, scss, javascript, the model follows the landing-page line with a focus on maximum presentation of information on a page that also allows the user to schedule with the professional',
        hermes:'Hermes-project was a personal project for portfolio, initially the project was made in javascript, react, express and sql-server as database but now it is being entirely refactored to typescript both front-end and back-end, apis in nest, postgres as database hosted on amazon eds.'
    }
};

export { portuguese, english };