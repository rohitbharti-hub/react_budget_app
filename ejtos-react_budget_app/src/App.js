import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';
import Currency from './components/Currency';

const App = () => {
    return (
        <AppProvider>
            <div className='container mt-4'>
                <div class="card">
                    <h5 class="card-header text-bg-dark">Company's Budget Allocation</h5>
                    <div class="card-body">
                        <div className='row mt-3'>
                            <div className='col-sm'>
                                <Budget />
                            </div>
                            <div className='col-sm'>
                                <RemainingBudget />
                            </div>
                            <div className='col-sm'>
                                <ExpenseTotal />
                            </div>
                            <div className='col-sm'>
                                <Currency />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row align-items-start">
                    <div class="col col-8">
                        <div class="card mt-3">
                            <h5 class="card-header text-bg-dark">Allocation</h5>
                            <div class="card-body">
                                <div className='row '>
                                    <div className='col-sm'>
                                        <ExpenseList />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col col-4">
                        <div class="card mt-3">
                            <h5 class="card-header text-bg-dark">Change allocation</h5>
                            <div class="card-body">
                                <div className='row mt-3'>
                                    <div className='col-sm'>
                                        <AllocationForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;