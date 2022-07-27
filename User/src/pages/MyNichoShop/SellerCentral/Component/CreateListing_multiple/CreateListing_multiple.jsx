import React from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import './css/Mutiple_create.css';

const CreateListing_multiple = () => {
    return (
        <div>
            <Header />
            <div className='container'>
                <div className='row m-auto'>
                    <div className='col-lg-10 offset-lg-1 col-md-12'>
                        <div className='row'>
                            <h3>Step 1 of 3 : Select the details of your variations</h3>
                        </div>
                        <div className='row'>
                            <div className='card p-0'>
                                <div className='card-body p-0'>
                                    <div className='row pt-3 px-3'>
                                        <span>+ Size&nbsp;&nbsp;+Color&nbsp;&nbsp;+Material</span>
                                    </div>
                                    <hr />
                                    <div className='row'>
                                        <span className='mx-3'>+Create your own variation</span>
                                    </div>
                                    <hr />
                                    <table className='table '>
                                        <thead>
                                            <tr>
                                                <th>Size</th>
                                                <th>Color</th>
                                                <th>Material</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className='col-3'>
                                                    <div className='input-group multiple-input-group'>
                                                        <span className='align-middle mt-1'>#1 &nbsp; | </span>
                                                        <select name="" className='form-control'>
                                                            <option value='5'>x5</option>
                                                            <option value='10'>x10</option>
                                                            <option value='15'>x15</option>
                                                        </select>
                                                    </div>
                                                </td>
                                                <td className='col-4'>
                                                    <select name="" className='form-control'>
                                                        <option value='1'>Black</option>
                                                        <option value='2'>White</option>
                                                        <option value='3'>Yellow</option>
                                                    </select>
                                                </td>
                                                <td className='col-5'>
                                                    <div className='input-group'>
                                                        <select name="" className='form-control' aria-label="Default select example">
                                                            <option value='1'>Black</option>
                                                            <option value='2'>White</option>
                                                            <option value='3'>Yellow</option>
                                                        </select>
                                                    </div>

                                                </td>
                                                <td>
                                                    <span style={{ 'fontSize': '25px' }}>&times;</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='col-3'>
                                                    <div className='input-group multiple-input-group'>
                                                        <span className='align-middle mt-1'>#2 &nbsp; | </span>
                                                        <select name="" className='form-control'>
                                                            <option value='5'>x5</option>
                                                            <option value='10'>x10</option>
                                                            <option value='15'>x15</option>
                                                        </select>
                                                    </div>
                                                </td>
                                                <td className='col-4'>
                                                    <select name="" className='form-control'>
                                                        <option value='1'>Black</option>
                                                        <option value='2'>White</option>
                                                        <option value='3'>Yellow</option>
                                                    </select>
                                                </td>
                                                <td className='col-5'>
                                                    <div className='input-group'>
                                                        <select name="" className='form-control' aria-label="Default select example">
                                                            <option value='1'>Black</option>
                                                            <option value='2'>White</option>
                                                            <option value='3'>Yellow</option>
                                                        </select>
                                                    </div>

                                                </td>
                                                <td>
                                                    <span style={{ 'fontSize': '25px' }}>&times;</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='col-3'>
                                                    <div className='input-group multiple-input-group'>
                                                        <span className='align-middle mt-1'>#3 &nbsp; | </span>
                                                        <select name="" className='form-control'>
                                                            <option value='5'>x5</option>
                                                            <option value='10'>x10</option>
                                                            <option value='15'>x15</option>
                                                        </select>
                                                    </div>
                                                </td>
                                                <td className='col-4'>
                                                    <select name="" className='form-control'>
                                                        <option value='1'>Black</option>
                                                        <option value='2'>White</option>
                                                        <option value='3'>Yellow</option>
                                                    </select>
                                                </td>
                                                <td className='col-5'>
                                                    <div className='input-group'>
                                                        <select name="" className='form-control' aria-label="Default select example">
                                                            <option value='1'>Black</option>
                                                            <option value='2'>White</option>
                                                            <option value='3'>Yellow</option>
                                                        </select>
                                                    </div>

                                                </td>
                                                <td>
                                                    <span style={{ 'fontSize': '25px' }}>&times;</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='col-3'>
                                                    <div className='input-group multiple-input-group'>
                                                        <span className='align-middle mt-1'>#4 &nbsp; | </span>
                                                        <select name="" className='form-control'>
                                                            <option value='5'>x5</option>
                                                            <option value='10'>x10</option>
                                                            <option value='15'>x15</option>
                                                        </select>
                                                    </div>
                                                </td>
                                                <td className='col-4'>
                                                    <select name="" className='form-control'>
                                                        <option value='1'>Black</option>
                                                        <option value='2'>White</option>
                                                        <option value='3'>Yellow</option>
                                                    </select>
                                                </td>
                                                <td className='col-5'>
                                                    <div className='input-group'>
                                                        <select name="" className='form-control' aria-label="Default select example">
                                                            <option value='1'>Black</option>
                                                            <option value='2'>White</option>
                                                            <option value='3'>Yellow</option>
                                                        </select>
                                                    </div>

                                                </td>
                                                <td>
                                                    <span style={{ 'fontSize': '25px' }}>&times;</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className='mb-3'>
                                        <span className='mx-3'>+ Add new variation</span>
                                    </div>
                                </div>
                            </div>
                            <div className='className mt-3'>
                                <div className='row col-4 P                                                                                                         '>
                                    <button className='btn btn-secondary col-4'>
                                        Continue
                                    </button>
                                    <button className='btn btn-outline-secondary col-4 mx-2'>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateListing_multiple;