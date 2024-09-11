import React from 'react'
import '../../Assets/Styles/StProf.css' 

function StProf() {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-4 one">
                        <h2>Welcome Leejith</h2>
                        <h5>reg no: 961820104059</h5>
                        <button type="button" class="btn btn-primary">Edit</button>

                    </div>


                    {/* -------------dashboard---------------- */}
                    <div class="col-8 two">
                        <div class="container">
                            <div class="row dash">
                                <div class="col">
                                    <div>
                                        book borrowed
                                    </div>
                                </div>
                                <div class="col">
                                    <div>
                                        favorites
                                    </div>
                                </div>
                                <div class="col">
                                    <div>
                                        book issued
                                    </div>
                                </div>
                                <div class="col">
                                    <div>
                                        fine
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StProf