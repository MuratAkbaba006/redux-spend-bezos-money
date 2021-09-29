import React from 'react'
import { useSelector } from 'react-redux'
import NumberFormat from 'react-number-format';


const TotalMoney = () => {
  const totalMoney = useSelector((state) => state.spend.money);
  return (
    <div className="total">
      <div className="total-price">
      <NumberFormat value={totalMoney} displayType={'text'} thousandSeparator={true} suffix={'$'} />

      </div>
    </div>
  )
}

export default TotalMoney
