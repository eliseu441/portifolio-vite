import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../layout/LanguageProvider/Language.jsx';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import colunas from './repos.js';


function Repos() {
    const { language, theme } = useLanguage();

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(colunas);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    let items = [];
    useEffect(() => {
        const results = colunas.filter(row =>
            Object.values(row).some(val => val.toString().toLowerCase().includes(searchTerm.toLowerCase()))
        );
        setFilteredData(results);
    }, [searchTerm, colunas]);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const getComparator = (sortConfig) => {
        if (!sortConfig) {
            return (a, b) => 0; // Nenhuma ordenação se sortConfig não estiver definido
        }
        return (a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
        };
    };
    const sortedItems = React.useMemo(() => {
        const comparator = getComparator(sortConfig);
        const sortableItems = [...filteredData].sort(comparator);
        return sortableItems.slice(indexOfFirstItem, indexOfLastItem);;
    }, [currentItems, sortConfig]);
    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    for (let number = 1; number <= totalPages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === currentPage} onClick={() => setCurrentPage(number)}>
                {number}
            </Pagination.Item>,
        );
    }
    const fontColor = theme == false ? {
        color: "white",
        transition:'all 0.5s',
        background: 'linear-gradient(0deg, rgb(91, 83, 110, 0.4) 50%, rgb(42, 36, 56, 0.3) 100%)'
    } : {
        color: "white",
        transition:'all 0.5s',
        background: 'linear-gradient(0deg, rgb(44, 44, 44, 0.8) 30%, rgb(75, 75, 75, 0.7) 100%)'
    };

    //bordered pra adicionar
    return (
        <>

            <div class='stars' style={theme == false ? { background: "black" } : { background: "white" }}>
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
            </div>
            <div className='page-repos'>

                <div className='row  d-flex justify-content-center'>

                    <div class='title col-sm-12 d-flex justify-content-center'>
                        <span data-aos="fade-left" style={theme == false ? { color: "white" } : { color: "rgb(55, 55, 55)" }} data-aos-duration="1000">REPOSITORIES</span>
                    </div>


                    <div className='table-repos col-12'>
                        <p className='ms-2' style={theme == false ? { fontWeight: 'bolder', color: 'white' } : { fontWeight: 'bolder', color: 'black' }} data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000">Search for an especific tech</p>
                        <>
                            <Form.Control
                                type="text"
                                placeholder="Search..."
                                className="mb-3"
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Table striped hover className="custom-table">
                                <thead>
                                    <tr>
                                        <th style={fontColor} className='d-flex justify-content-center'>REPO</th>
                                        <th style={fontColor} onClick={() => requestSort('name')}>
                                            NAME
                                            {sortConfig.key === 'name' ? <small >{sortConfig.direction === 'ascending' ? ' ↓' : ' ↑'}</small> : null}
                                            </th>
                                        <th style={fontColor} onClick={() => requestSort('languages')}>
                                            LANGUAGES/FRAMEWORKS
                                            {sortConfig.key === 'languages' ? <small >{sortConfig.direction === 'ascending' ? ' ↓' : ' ↑'}</small> : null}
                                            </th>
                                        <th style={fontColor} onClick={() => requestSort('data')}>
                                            START_YEAR
                                            {sortConfig.key === 'data' ? <small >{sortConfig.direction === 'ascending' ? ' ↓' : ' ↑'}</small> : null}
                                            </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sortedItems.map((item) => (
                                        <tr key={item.id}>
                                            <td>
                                                <Link to={`${item.link}`} target="_blank"  >
                                                    <div className='d-flex justify-content-center'>
                                                        <a class='curriculum'>
                                                            <i class="bi bi-github  information" style={theme == false ? { color: 'rgb(239, 88, 0)' } : { color: 'black' }}></i>
                                                        </a>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td>{item.name}</td>
                                            <td>{item.languages}</td>
                                            <td>{item.data}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <Pagination style={theme == false ? { opacity: 1 } : { opacity: 0.8 }}>{items}</Pagination>

                        </>

                    </div>
                    <div className='col-12 d-flex align-items-center justify-content-center m-0 p-0'>
                        <div class="scroll-downs ">
                            <div class="mousey" style={theme == false ? { border: '3px solid #fff' } : { border: '3px solid black' }}>
                                <div class="scroller" style={theme == false ? { backgroundColor: 'white' } : { backgroundColor: 'black' }}></div>
                            </div>
                        </div>
                    </div>
                    <div class='experience-content' >


                        <div class="row"   >
                            <p style={{ textAlign: 'center' }} >
                                <p class="project-subtitle" style={theme == false ? { color: 'white' } : { color: 'black' }}>tools that i have solid experience:</p>
                                <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img class='icons' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="60" height="60" /> </a>
                                <a href="https://aws.amazon.com" target="_blank" rel="noreferrer"> <img class='icons' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" width="60" height="60" /> </a>
                                <a href="https://www.w3schools.com/cs/" target="_blank" rel="noreferrer"> <img class='icons' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" width="60" height="60" /> </a>
                                <a href="https://www.rust-lang.org" target="_blank" rel="noreferrer"> <img class='icons' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-plain.svg" alt="rust" width="60" height="60" /> </a>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img class='icons' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="60" height="60" /> </a>
                                <a href="https://www.microsoft.com/en-us/sql-server" target="_blank" rel="noreferrer"> <img class='icons' src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" alt="mssql" width="60" height="60" /> </a>
                                <a href="https://dotnet.microsoft.com/" target="_blank" rel="noreferrer"> <img class='icons' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg" alt="dotnet" width="60" height="60" /> </a>
                                <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img class='icons' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="60" height="60" /> </a>
                                <a href="https://nestjs.com/" target="_blank" rel="noreferrer"> <img class='icons' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-plain.svg" alt="nestjs" width="60" height="60" /> </a>
                                <a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img class='icons' src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" width="60" height="60" /> </a>
                                <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img class='icons' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="60" height="60" /> </a>
                                <a href="https://www.jenkins.io" target="_blank" rel="noreferrer"> <img class='icons' src="https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" alt="jenkins" width="60" height="60" /> </a>
                                <a href="https://jestjs.io" target="_blank" rel="noreferrer"> <img class='icons' src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="60" height="60" /> </a>
                                <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img class='icons' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="60" height="60" /> </a>
                                <a href="https://www.nginx.com" target="_blank" rel="noreferrer"> <img class='icons' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg" alt="nginx" width="60" height="60" /> </a>
                                <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img class='icons' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="60" height="60" /> </a>
                                <a href="https://www.oracle.com/" target="_blank" rel="noreferrer"> <img class='icons' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg" alt="oracle" width="60" height="60" /> </a>
                                <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img class='icons' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="60" height="60" /> </a>
                                <a href="https://reactnative.dev/" target="_blank" rel="noreferrer"> <img class='icons' src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" width="60" height="60" /> </a>
                                <a href="https://azure.microsoft.com/en-in/" target="_blank" rel="noreferrer"> <img class='icons' src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" alt="azure" width="60" height="60" /> </a>
                                <a href="https://babeljs.io/" target="_blank" rel="noreferrer"> <img class='icons' src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" alt="babel" width="60" height="60" /> </a>
                                <a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img class='icons' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="60" height="60" /> </a>
                                <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img class='icons' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="60" height="60" /> </a>
                                <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img class='icons' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="60" height="60" /> </a>
                                <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img class='icons' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="60" height="60" /> </a>
                                <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img class='icons' src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="60" height="60" /> </a>
                                <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img class='icons' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="60" height="60" /> </a>
                                <a href="https://www.adobe.com/in/products/illustrator.html" target="_blank" rel="noreferrer"> <img class='icons' src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" alt="illustrator" width="60" height="60" /> </a>
                                <a href="https://www.photoshop.com/en" target="_blank" rel="noreferrer"> <img class='icons' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" width="60" height="60" /> </a>
                                <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img class='icons' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="60" height="60" /> </a>
                                <a href="https://postman.com" target="_blank" rel="noreferrer"> <img class='icons' src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="60" height="60" /> </a>
                                <a href="https://redis.io" target="_blank" rel="noreferrer"> <img class='icons' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg" alt="redis" width="60" height="60" /> </a>
                                <a href="https://www.gnu.org/software/bash/" target="_blank" rel="noreferrer"> <img class='icons' src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width="60" height="60" /> </a>
                                <a href="https://www.chartjs.org" target="_blank" rel="noreferrer"> <img class='icons' src="https://www.chartjs.org/media/logo-title.svg" alt="chartjs" width="60" height="60" /> </a>
                                <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img class='icons' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="60" height="60" /> </a>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div >



            </div>



        </>
    )
}

export default Repos;