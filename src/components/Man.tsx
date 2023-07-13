import React from 'react';

const head = (
    <div style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        top: "50px",
        right: "-30px"
    }}/>
)
const body = (
    <div style={{
        width: "10px",
        height: "100px",
        background: "black",
        position: "absolute",
        top: "110px",
        right: "0"
    }}/>
)
const leftArm = (
    <div style={{
        width: "10px",
        height: "75px",
        background: "black",
        position: "absolute",
        top: "110px",
        right: "15px",
        rotate: "25deg"
    }}/>
)
const rightArm = (
    <div style={{
        width: "10px",
        height: "75px",
        background: "black",
        position: "absolute",
        top: "110px",
        right: "-15px",
        rotate: "-25deg"
    }}/>
)
const leftFoot = (
    <div style={{
        width: "10px",
        height: "80px",
        background: "black",
        position: "absolute",
        top: "200px",
        right: "15px",
        rotate: "25deg"
    }}/>
)
const rightFoot = (
    <div style={{
        width: "10px",
        height: "80px",
        background: "black",
        position: "absolute",
        top: "200px",
        right: "-15px",
        rotate: "-25deg"
    }}/>
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
        <div style={{height: "50px", width: "10px", background: "black", position: "absolute", top: 0, right: "0"}}/>
        <div style={{height: "10px", width: "200px", background: "black", marginLeft: "120px"}}/>
        <div style={{height: "400px", width: "10px", background: "black", marginLeft: "120px"}}/>
        <div style={{height: "10px", width: "250", background: "black"}}/>
    </div>
};

export default Man;