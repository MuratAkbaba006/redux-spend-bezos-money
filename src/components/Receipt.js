import React, { useState } from "react";
import { useSelector } from "react-redux";
import NumberFormat from "react-number-format";

const Receipt = () => {
  const list = useSelector((state) => state.spend.shoppingList);
  const totalSpend = () => {
    let total = 0;
    list.map((item) => (total += item.price * item.itemCount));
    console.log(total);
    return total;
  };
  if(list.length<1)
  {
    return <div>Let's buy what you want</div>
  }
  return (

    <div style={{ width: 1000, textAlign: "center",marginBottom:15}} className="receipt">
      <h1>Harcama Listesi</h1>
      <hr />
      {list.map((item) => (
        <div key={item.id}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ fontSize: 25,textAlign:'flex-start',minWidth:200 }}>{item.name}</div>
            <div style={{textAlign:'center'}}>x{item.itemCount}</div>
            <NumberFormat
              style={{ fontSize: 22,justifyContent:'flex-end',minWidth:200 }}
              value={item.price * item.itemCount}
              displayType={"text"}
              thousandSeparator={true}
              suffix={"$"}
            />
          </div>
        </div>
      ))}
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin:20
        }}
      >
        <div style={{fontSize:30,fontWeight:'bold'}}>Total:</div>
        <NumberFormat
          style={{ fontSize: 22,backgroundColor:'#CEE5D0' }}
          value={totalSpend()}
          displayType={"text"}
          thousandSeparator={true}
          suffix={"$"}
        />
      </div>
    </div>

  );
};

export default Receipt;
