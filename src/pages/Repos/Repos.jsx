import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import colunas from './repos.js';

function Repos() {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(colunas);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    useEffect(() => {
        const results = colunas.filter(row =>
            Object.values(row).some(val => val.toString().toLowerCase().includes(searchTerm.toLowerCase()))
        );
        setFilteredData(results);
    }, [searchTerm, colunas]);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    let items = [];
    for (let number = 1; number <= totalPages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === currentPage} onClick={() => setCurrentPage(number)}>
                {number}
            </Pagination.Item>,
        );
    }


    return (
        <>
            <div className='page-repos'>
                <div className='row col-sm-11  d-flex justify-content-center'>

                    <div class='title col-sm-12 d-flex justify-content-center'>
                        <span  data-aos="fade-left" data-aos-duration="1000">REPOSITORIES</span>
                    </div>
                    <p style={{fontWeight:'bolder'}} data-aos="fade-left" data-aos-duration="1000">pagina em construção... repositodios no github com seus respectivos nomes</p>


                    <div className='table-repos'>
                        <>
                            <Form.Control
                                type="text"
                                placeholder="Search..."
                                className="mb-3"
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Table striped bordered hover className="custom-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>LANGUAGES/FRAMEWORKS</th>
                                        <th>START_YEAR</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentItems.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.languages}</td>
                                            <td>{item.data}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <Pagination>{items}</Pagination>
                        </>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Repos;