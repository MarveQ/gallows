import React from 'react';

const head = (
    <div style={{width: "70px"}}/>
)
const body = (
    <div style={{width: "15px"}}/>
)
const leftArm = (
    <div style={{width: "25px"}}/>
)
const rightArm = (
    <div style={{width: "25px"}}/>
)
const leftFoot = (
    <div style={{width: "45px"}}/>
)
const rightFoot = (
    <div style={{width: "45px"}}/>
)

const bodyParts = [
    head,
    body,
    leftArm,
    rightArm,
    leftFoot,
    rightFoot
]

type ManProps = {
    numberOfMistakes: number
}

const Man = ({numberOfMistakes}: ManProps) => {
    return <div style={{position: "relative"}}>
        {bodyParts.slice(0, numberOfMistakes)}
        <div style={{height: "50px", width: "15px", background: "black", position: "absolute", top: 0, right: "0"}}/>
        <div style={{height: "450px", width: "15px", background: "black", marginLeft: "600px"}}/>
        <div style={{height: "15px", width: "250px", background: "black", marginLeft: "600px", position: "absolute", top: 0,}}/>
        <div style={{height: "15px", width: "250", background: "black"}}/>
    </div>
};

export default Man;



//const head
// <div
// width:
// height:
// " 50px " ,
// 1
// borderRadius .
// • "100%",
// "10px solid black",
// border:
// position: "absolute"
// top:
// "50px",
// right:
// " -30px"