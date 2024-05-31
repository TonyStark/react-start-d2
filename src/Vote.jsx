import { useState } from "react";

function Vote(){
    let [john,setJohn] = useState(0)
    let [doe,setDoe] = useState(0)
    let johnIncrease=()=>{
        setJohn(john+1)
    }
    let doeIncrease=()=>{
        setDoe(doe+1)
    }
    let johnDecrease=()=>{
        setJohn(john-1)
    }
    let doeDecrease=()=>{
        setDoe(doe-1)
    }
    let winnerDecide=()=>{
        if(john>doe){
            return "John"
        }else if(doe>john) {
            return "Doe"
        }else{
            return "Tie"
        }
    }
    return(
        <div className="text-center">
            <h1 className="my-5">Simple Voting</h1>
            <div className="row justify-content-center align-items-center">
                <div className="col-8">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-3">
                            <h1 className="border py-3">John</h1>
                        </div>
                        <div className="col-5">
                            <div className="counter d-flex justify-content-center gap-5">
                                <h1>{john}</h1>
                                <div className="d-flex gap-1">
                                    <button className="btn btn-primary fs-1 px-5" onClick={johnIncrease}>+</button>
                                    <button className="btn btn-primary fs-1 px-5" onClick={johnDecrease} disabled={john === 0 ? true : false}>-</button>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>

                <div className="col-8">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-3">
                            <h1 className="border py-3">Doe</h1>
                        </div>
                        <div className="col-5">
                            <div className="counter d-flex justify-content-center gap-5">
                                <h1>{doe}</h1>
                                <div className="d-flex gap-1">
                                    <button className="btn btn-primary fs-1 px-5" onClick={doeIncrease}>+</button>
                                    <button className="btn btn-primary fs-1 px-5" onClick={doeDecrease} disabled={doe === 0 ? true : false}>-</button>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>

                <div className="col-8">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-8">
                            <h1 className="border py-3">Total = {john+doe} <br />
                            Current Winner = {winnerDecide()}</h1>
                        </div>
                    </div>
                </div>
            </div>
            
            <hr />
        </div>
    )
}

export default Vote;